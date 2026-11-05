// Geometrie en export voor demo 11. JSCAD rekent in millimeters.
import modeling from '@jscad/modeling';
import { stlSerializer, m3fSerializer } from '@jscad/io';

const { primitives, booleans, measurements, geometries } = modeling;
const { subtract } = booleans;
const TAU = Math.PI * 2;
const radians = (degrees) => degrees * Math.PI / 180;
export const MIN_WALL = 0.8;
export const PRESETS = {
  telefoon: { kind: 'cilinder', diameter: 70, height: 65, cutMode: 'angle', cutAngle: 60, cutHeight: 20, wall: 0, segments: 96 },
  plantenpot: { kind: 'kegel', bottomDiameter: 65, topDiameter: 85, height: 75, cutMode: 'angle', cutAngle: 0, cutHeight: 0, wall: 2, segments: 96 },
  doorvoer: { kind: 'ring', outerDiameter: 30, innerDiameter: 18, wallMode: 'inner', wall: 6, height: 10, chamfer: 0.8, segments: 64 },
};

function makeLoops(p, inner = false) {
  const count = p.kind === 'piramide' ? p.sides : p.segments;
  const wall = inner ? p.wall : 0;
  const topZ = (y) => p.cutMode === 'height' ? p.cutHeight : p.height - Math.tan(radians(p.cutAngle)) * y;
  const radiiAt = (z) => {
    if (p.kind === 'cilinder') return p.diameter / 2 - wall;
    if (p.kind === 'kegel') return (p.bottomDiameter + (p.topDiameter - p.bottomDiameter) * z / p.height) / 2 - wall;
    return (p.bottomSide + (p.topSide - p.bottomSide) * z / p.height) / (2 * Math.sin(Math.PI / p.sides)) - wall / Math.sin(Math.PI / p.sides);
  };
  const point = (i, z) => {
    const a = (p.kind === 'piramide' ? Math.PI / 2 - Math.PI / count : 0) + i * TAU / count;
    const r = radiiAt(z);
    return [r * Math.cos(a), r * Math.sin(a), z];
  };
  const bottom = [], top = [];
  for (let i = 0; i < count; i++) {
    bottom.push(point(i, wall));
    const probe = point(i, p.height);
    top.push(point(i, topZ(probe[1])));
  }
  return { bottom, top };
}

// A direct, quad-based closed shell. Each edge occurs exactly twice, including hollow rims.
function shellGeometry(bottom, top, innerBottom = null, innerTop = null) {
  const points = [], faces = [];
  const loop = (lp) => { const start = points.length; points.push(...lp); return [...lp.keys()].map(i => start + i); };
  const ob = loop(bottom), ot = loop(top);
  const n = bottom.length;
  const quad = (a,b,c,d) => { faces.push([a,b,c],[a,c,d]); };
  for (let i=0;i<n;i++) { const j=(i+1)%n; quad(ob[i],ob[j],ot[j],ot[i]); }
  const cap = (lp, up) => { for(let i=1;i<n-1;i++) faces.push(up ? [lp[0],lp[i],lp[i+1]] : [lp[0],lp[i+1],lp[i]]); };
  if (!innerTop) { cap(ob,false); cap(ot,true); }
  else {
    const ib=loop(innerBottom), it=loop(innerTop);
    cap(ob,false); cap(ib,true);
    for(let i=0;i<n;i++) { const j=(i+1)%n; quad(ib[j],ib[i],it[i],it[j]); quad(ot[i],ot[j],it[j],it[i]); }
  }
  return primitives.polyhedron({ points, faces, orientation: 'outward' });
}

function ringGeometry(p) {
  const r=p.outerDiameter/2, ri=p.wallMode==='inner' ? p.innerDiameter/2 : r-p.wall;
  const c=Math.min(p.chamfer,p.height/2,r-ri), n=p.segments;
  const point=(radius,z,i)=>{const a=i*TAU/n;return [radius*Math.cos(a),radius*Math.sin(a),z];};
  const levels = c>0 ? [[r-c,0],[r,c],[r,p.height-c],[r-c,p.height]] : [[r,0],[r,p.height]];
  const outer=levels.map(([rad,z])=>Array.from({length:n},(_,i)=>point(rad,z,i)));
  const ib=Array.from({length:n},(_,i)=>point(ri,0,i)), it=Array.from({length:n},(_,i)=>point(ri,p.height,i));
  const points=[],faces=[]; const loop=lp=>{const s=points.length;points.push(...lp);return lp.map((_,i)=>s+i);};
  const ol=outer.map(loop), ilb=loop(ib),ilt=loop(it);
  const quad=(a,b,c,d)=>faces.push([a,b,c],[a,c,d]);
  for(let k=0;k<ol.length-1;k++)for(let i=0;i<n;i++){const j=(i+1)%n;quad(ol[k][i],ol[k][j],ol[k+1][j],ol[k+1][i]);}
  for(let i=0;i<n;i++){const j=(i+1)%n;quad(ilb[j],ilb[i],ilt[i],ilt[j]);quad(ol[0][i],ilb[i],ilb[j],ol[0][j]);const ot=ol[ol.length-1];quad(ot[i],ot[j],ilt[j],ilt[i]);}
  return primitives.polyhedron({points,faces,orientation:'outward'});
}

export function buildShape(input) {
  const p = { cutMode: 'angle', cutAngle: 0, cutHeight: 0, segments: 64, wall: 0, chamfer: 0, ...input };
  if (p.kind === 'ring') return ringGeometry(p);
  const outer=makeLoops(p,false);
  if (!p.wall) return shellGeometry(outer.bottom,outer.top);
  const inner=makeLoops(p,true);
  return shellGeometry(outer.bottom,outer.top,inner.bottom,inner.top);
}

export function validateParams(p) {
  const errors = [];
  const positive = (name, label, min = 0.1) => { if (!(Number(p[name]) >= min)) errors.push(`${label} moet minimaal ${String(min).replace('.', ',')} mm zijn.`); };
  if (p.kind === 'cilinder') { positive('diameter', 'Diameter'); positive('height', 'Hoogte'); }
  if (p.kind === 'kegel') { positive('bottomDiameter', 'Onderdiameter'); positive('topDiameter', 'Bovendiameter'); positive('height', 'Hoogte'); }
  if (p.kind === 'piramide') {
    positive('bottomSide', 'Onderzijde'); positive('topSide', 'Bovenzijde'); positive('height', 'Hoogte');
    if (!Number.isInteger(Number(p.sides)) || p.sides < 3 || p.sides > 8) errors.push('Aantal zijden moet een geheel getal van 3 tot 8 zijn.');
  }
  if (p.kind === 'ring') {
    if (p.wallMode !== 'inner' && p.wall > 0 && p.wall < MIN_WALL) errors.push(`Wanddikte moet minimaal ${String(MIN_WALL).replace('.', ',')} mm zijn.`);
    positive('outerDiameter', 'Buitendiameter'); positive('height', 'Hoogte');
    const inner = p.wallMode === 'inner' ? p.innerDiameter : p.outerDiameter - 2 * p.wall;
    if (!(inner > 0 && inner < p.outerDiameter)) errors.push('Binnendiameter moet groter dan 0 en kleiner dan de buitendiameter zijn.');
    if (p.chamfer < 0 || p.chamfer > p.height / 2) errors.push('Afschuining moet tussen 0 en de halve hoogte liggen.');
  } else if (p.wall > 0) {
    if (p.wall < MIN_WALL) errors.push(`Wanddikte moet 0 (massief) of minimaal ${String(MIN_WALL).replace('.', ',')} mm zijn.`);
    const minDim = Math.min(p.diameter || Infinity, p.bottomDiameter || Infinity, p.topDiameter || Infinity, p.bottomSide || Infinity, p.topSide || Infinity);
    if (p.wall * 2 >= minDim) errors.push('Wanddikte is te groot voor de kleinste buitenmaat.');
    if (p.wall >= p.height) errors.push('Wanddikte moet kleiner zijn dan de hoogte.');
  }
  if (p.kind !== 'ring') {
    if (p.cutMode === 'angle' && (p.cutAngle < 0 || p.cutAngle > 60)) errors.push('Snijhoek moet tussen 0 en 60 graden liggen (gemeten vanaf een vlakke bovenkant).');
    if (p.cutMode === 'height' && (p.cutHeight <= 0 || p.cutHeight >= p.height)) errors.push('Snijhoogte moet tussen 0 en de hoogte liggen.');
  }
  if (p.segments < 16 || p.segments > 128 || !Number.isInteger(Number(p.segments))) errors.push('Segmenten moet een geheel getal van 16 tot 128 zijn.');
  return errors;
}

export function geometryInfo(geometry, p = {}) {
  const bb = measurements.measureBoundingBox(geometry);
  const polygons = geometries.geom3.toPolygons(geometry);
  let triangles = 0;
  for (const poly of polygons) triangles += Math.max(0, poly.vertices.length - 2);
  const edgeUse = new Map();
  const key = (v) => v.map((n) => (Math.abs(n) < 0.000005 ? 0 : n).toFixed(5)).join(',');
  for (const poly of polygons) {
    const vs = poly.vertices;
    for (let i = 0; i < vs.length; i++) {
      const a = key(vs[i]), b = key(vs[(i + 1) % vs.length]);
      const k = a < b ? `${a}|${b}` : `${b}|${a}`;
      edgeUse.set(k, (edgeUse.get(k) || 0) + 1);
    }
  }
  const openEdges = [...edgeUse.values()].filter((n) => n !== 2).length;
  const vertices = geometries.geom3.toPoints(geometry).flat();
  return {
    min: bb[0], max: bb[1], size: bb[1].map((v, i) => v - bb[0][i]),
    volume: measurements.measureVolume(geometry), polygons: polygons.length,
    triangles, openEdges, isClosed: openEdges === 0,
    vertices, trianglesForView: (() => { const out=[]; for (const poly of polygons) for(let i=1;i<poly.vertices.length-1;i++) out.push(...poly.vertices[0],...poly.vertices[i],...poly.vertices[i+1]); return out; })(),
  };
}

function joinBuffers(buffers) {
  const total = buffers.reduce((sum, b) => sum + b.byteLength, 0);
  const out = new Uint8Array(total); let offset = 0;
  for (const b of buffers) { out.set(new Uint8Array(b), offset); offset += b.byteLength; }
  return out;
}
export function stlBytes(geometry) { return joinBuffers(stlSerializer.serialize({ binary: true }, geometry)); }
export function threeMFBytes(geometry, title = 'Vorm') { return joinBuffers(m3fSerializer.serialize({ metadata: { title, creator: 'Tech demo 11', description: 'Gemaakt met JSCAD; maten in millimeters' } }, geometry)); }
