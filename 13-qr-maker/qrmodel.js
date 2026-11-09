// QR-maker: payloads, geometrie (plaat + QR-blokjes) en export naar 3MF, STL en SVG.
// Alles in millimeters. Plaat ligt in het XY-vlak (Y omhoog), dikte langs Z.
import qrcodegen from './qrcodegen.js';
import { ShapeUtils, Vector2 } from 'three';

const { QrCode } = qrcodegen;

// ---------- payloads ----------
function wifiEsc(s) { return String(s).replace(/([\\;,:"])/g, '\\$1'); }

export function wifiPayload({ ssid = '', password = '', security = 'WPA', hidden = false }) {
  const t = security === 'geen' ? 'nopass' : security;
  let s = `WIFI:T:${t};S:${wifiEsc(ssid)};`;
  if (t !== 'nopass' && password) s += `P:${wifiEsc(password)};`;
  if (hidden) s += 'H:true;';
  return s + ';';
}

function vEsc(s) { return String(s).replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/([,;])/g, '\\$1'); }

export function vcardPayload({ name = '', phone = '', email = '', org = '', url = '' }) {
  const n = name.trim(); const parts = n.split(/\s+/).filter(Boolean);
  const last = parts.length > 1 ? parts[parts.length - 1] : n;
  const first = parts.length > 1 ? parts.slice(0, -1).join(' ') : '';
  const L = ['BEGIN:VCARD', 'VERSION:3.0', `N:${vEsc(last)};${vEsc(first)};;;`, `FN:${vEsc(n)}`];
  if (org.trim()) L.push(`ORG:${vEsc(org.trim())}`);
  if (phone.trim()) L.push(`TEL;TYPE=CELL:${phone.trim()}`);
  if (email.trim()) L.push(`EMAIL:${email.trim()}`);
  if (url.trim()) L.push(`URL:${url.trim()}`);
  L.push('END:VCARD');
  return L.join('\r\n');
}

const ECC = { L: QrCode.Ecc.LOW, M: QrCode.Ecc.MEDIUM, Q: QrCode.Ecc.QUARTILE, H: QrCode.Ecc.HIGH };

export function makeQR(text, ecc = 'M') {
  const qr = QrCode.encodeText(text, ECC[ecc] || ECC.M);
  const n = qr.size; const grid = [];
  for (let y = 0; y < n; y++) { const row = []; for (let x = 0; x < n; x++) row.push(qr.getModule(x, y)); grid.push(row); }
  return { size: n, version: qr.version, ecc: ['L', 'M', 'Q', 'H'][qr.errorCorrectionLevel.ordinal], mask: qr.mask, grid };
}

// Donkere modules samenvoegen tot zo min mogelijk rechthoeken: eerst rijen, dan gelijke stroken onder elkaar.
export function mergeRects(grid) {
  const n = grid.length; const out = []; let open = new Map();
  for (let r = 0; r <= n; r++) {
    const runs = [];
    if (r < n) for (let c = 0; c < n;) { if (!grid[r][c]) { c++; continue; } let e = c; while (e < n && grid[r][e]) e++; runs.push([c, e]); c = e; }
    const next = new Map();
    for (const [a, b] of runs) { const k = a + ':' + b; const o = open.get(k); if (o) { o.h++; next.set(k, o); open.delete(k); } else next.set(k, { c: a, r, w: b - a, h: 1 }); }
    for (const o of open.values()) out.push(o);
    open = next;
  }
  return out;
}

// ---------- vorm / indeling ----------
function arc(cx, cy, rad, a0, a1, seg) { const p = []; for (let i = 0; i <= seg; i++) { const a = a0 + (a1 - a0) * i / seg; p.push([cx + rad * Math.cos(a), cy + rad * Math.sin(a)]); } return p; }

export function plateOutline(o) {
  const S = o.size, h = S / 2;
  if (o.shape === 'rond') return { outer: arc(0, 0, h, 0, 2 * Math.PI, 128).slice(0, -1), holes: [] };
  const r = Math.max(0, Math.min(o.radius || 0, h - 0.01)); const seg = r > 0 ? 10 : 0;
  let pts = [];
  if (r > 0) {
    pts.push(...arc(h - r, h - r, r, 0, Math.PI / 2, seg));          // rechtsboven
    pts.push(...arc(-h + r, h - r, r, Math.PI / 2, Math.PI, seg));  // linksboven
    pts.push(...arc(-h + r, -h + r, r, Math.PI, 1.5 * Math.PI, seg));
    pts.push(...arc(h - r, -h + r, r, 1.5 * Math.PI, 2 * Math.PI, seg));
  } else pts = [[h, h], [-h, h], [-h, -h], [h, -h]];
  const holes = [];
  if (o.loop) {
    // oogje bovenaan: halve cirkel met gat; ingevoegd in de bovenrand tussen rechtsboven en linksboven
    const t = o.loopR, ext = t * 0.55, cy = h + ext;
    const idx = r > 0 ? seg + 1 : 1; // na de rechtsboven-hoek
    const tab = [[t, h], [t, cy], ...arc(0, cy, t, 0, Math.PI, 32).slice(1, -1), [-t, cy], [-t, h]];
    pts.splice(idx, 0, ...tab);
    holes.push(arc(0, cy, o.holeR, 0, 2 * Math.PI, 48).slice(0, -1));
  }
  return { outer: dedupe(pts), holes };
}

function dedupe(p) { const o = []; for (const q of p) { const l = o[o.length - 1]; if (!l || Math.hypot(l[0] - q[0], l[1] - q[1]) > 1e-6) o.push(q); } if (o.length > 1 && Math.hypot(o[0][0] - o[o.length - 1][0], o[0][1] - o[o.length - 1][1]) < 1e-6) o.pop(); return o; }

// Waar komt de QR (incl. stille zone) op de plaat? Geeft modulegrootte en linkerbovenhoek van module (0,0).
export function qrLayout(o, n) {
  const S = o.size;
  let side;
  if (o.shape === 'rond') side = S / Math.SQRT2 * 0.97;
  else side = S - 2 * Math.max(1, 0.3 * (o.radius || 0));
  const q = o.quiet; const m = side / (n + 2 * q);
  return { m, x0: -side / 2 + q * m, yTop: side / 2 - q * m, side };
}

// ---------- meshes ----------
function extrude(outer, holes, z0, z1) {
  const V2 = (p) => new Vector2(p[0], p[1]);
  let O = outer.map(V2); if (ShapeUtils.isClockWise(O)) O.reverse();
  const H = holes.map((h) => { let a = h.map(V2); if (!ShapeUtils.isClockWise(a)) a.reverse(); return a; });
  const faces = ShapeUtils.triangulateShape(O, H);
  const all = [O, ...H].flat(); const N = all.length;
  const pos = []; for (const z of [z0, z1]) for (const p of all) pos.push(p.x, p.y, z);
  const idx = [];
  for (const [a, b, c] of faces) {
    const ccw = (all[b].x - all[a].x) * (all[c].y - all[a].y) - (all[b].y - all[a].y) * (all[c].x - all[a].x) > 0;
    if (ccw) { idx.push(N + a, N + b, N + c, c, b, a); } else { idx.push(N + c, N + b, N + a, a, b, c); }
  }
  let off = 0;
  for (const ring of [O, ...H]) {
    const L = ring.length;
    for (let i = 0; i < L; i++) { const a = off + i, b = off + (i + 1) % L; idx.push(a, b, N + b, a, N + b, N + a); }
    off += L;
  }
  return { pos, idx };
}

function addBox(mesh, x0, y0, x1, y1, z0, z1) {
  const b = mesh.pos.length / 3;
  mesh.pos.push(x0, y0, z0, x1, y0, z0, x1, y1, z0, x0, y1, z0, x0, y0, z1, x1, y0, z1, x1, y1, z1, x0, y1, z1);
  const F = [0, 2, 1, 0, 3, 2, 4, 5, 6, 4, 6, 7, 0, 1, 5, 0, 5, 4, 1, 2, 6, 1, 6, 5, 2, 3, 7, 2, 7, 6, 3, 0, 4, 3, 4, 7];
  for (const f of F) mesh.idx.push(b + f);
}

export function buildModel(o, qr) {
  const L = qrLayout(o, qr.size); const out = plateOutline(o);
  const base = extrude(out.outer, out.holes, 0, o.baseT);
  const rects = mergeRects(qr.grid); const mods = { pos: [], idx: [] };
  const z0 = o.baseT, z1 = o.baseT + o.modH;
  for (const R of rects) addBox(mods, L.x0 + R.c * L.m, L.yTop - (R.r + R.h) * L.m, L.x0 + (R.c + R.w) * L.m, L.yTop - R.r * L.m, z0, z1);
  return { base, mods, rects, layout: L, outline: out };
}

// ---------- export ----------
export function toSTL(meshes, name = 'qr') {
  const n = meshes.reduce((s, m) => s + m.idx.length / 3, 0);
  const buf = new ArrayBuffer(84 + n * 50); const dv = new DataView(buf);
  const head = `binary STL ${name} - QR-maker`.slice(0, 80);
  for (let i = 0; i < head.length; i++) dv.setUint8(i, head.charCodeAt(i) & 0x7f);
  dv.setUint32(80, n, true); let off = 84;
  for (const m of meshes) {
    const P = m.pos;
    for (let t = 0; t < m.idx.length; t += 3) {
      const a = m.idx[t] * 3, b = m.idx[t + 1] * 3, c = m.idx[t + 2] * 3;
      const ux = P[b] - P[a], uy = P[b + 1] - P[a + 1], uz = P[b + 2] - P[a + 2];
      const vx = P[c] - P[a], vy = P[c + 1] - P[a + 1], vz = P[c + 2] - P[a + 2];
      let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx; const l = Math.hypot(nx, ny, nz) || 1;
      for (const v of [nx / l, ny / l, nz / l]) { dv.setFloat32(off, v, true); off += 4; }
      for (const i of [a, b, c]) for (let j = 0; j < 3; j++) { dv.setFloat32(off, P[i + j], true); off += 4; }
      dv.setUint16(off, 0, true); off += 2;
    }
  }
  return new Uint8Array(buf);
}

function meshXML(m) {
  const f = (x) => (Math.round(x * 10000) / 10000).toString(); const P = m.pos; const vs = [];
  for (let i = 0; i < P.length; i += 3) vs.push(`<vertex x="${f(P[i])}" y="${f(P[i + 1])}" z="${f(P[i + 2])}"/>`);
  const ts = []; for (let t = 0; t < m.idx.length; t += 3) ts.push(`<triangle v1="${m.idx[t]}" v2="${m.idx[t + 1]}" v3="${m.idx[t + 2]}"/>`);
  return `<mesh><vertices>${vs.join('')}</vertices><triangles>${ts.join('')}</triangles></mesh>`;
}

const esc = (s) => String(s).replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));

export function to3MF(base, mods, colors = ['#FFFFFF', '#000000'], name = 'QR-plaatje') {
  const model = `<?xml version="1.0" encoding="UTF-8"?>
<model unit="millimeter" xml:lang="nl-NL" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02">
<metadata name="Title">${esc(name)}</metadata>
<metadata name="Application">Tech demo 13 - QR-maker</metadata>
<resources>
<basematerials id="1"><base name="Plaat" displaycolor="${colors[0].toUpperCase()}FF"/><base name="QR" displaycolor="${colors[1].toUpperCase()}FF"/></basematerials>
<object id="2" name="Plaat" type="model" pid="1" pindex="0">${meshXML(base)}</object>
<object id="3" name="QR" type="model" pid="1" pindex="1">${meshXML(mods)}</object>
<object id="4" name="${esc(name)}" type="model"><components><component objectid="2"/><component objectid="3"/></components></object>
</resources>
<build><item objectid="4"/></build>
</model>`;
  const ct = `<?xml version="1.0" encoding="UTF-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>`;
  const rels = `<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>`;
  return zipStore([['[Content_Types].xml', ct], ['_rels/.rels', rels], ['3D/3dmodel.model', model]]);
}

// Omtrek van alle donkere gebieden (aaneengesloten modules worden één vorm, gaten blijven open).
export function traceContours(grid) {
  const n = grid.length; const D = (r, c) => r >= 0 && c >= 0 && r < n && c < n && grid[r][c];
  const edges = new Map(); const key = (x, y) => x + ',' + y;
  const add = (x0, y0, x1, y1) => { const k = key(x0, y0); if (!edges.has(k)) edges.set(k, []); edges.get(k).push([x1, y1]); };
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (D(r, c)) {
    if (!D(r - 1, c)) add(c, r, c + 1, r);
    if (!D(r, c + 1)) add(c + 1, r, c + 1, r + 1);
    if (!D(r + 1, c)) add(c + 1, r + 1, c, r + 1);
    if (!D(r, c - 1)) add(c, r + 1, c, r);
  }
  const loops = [];
  for (const [k0, list0] of edges) {
    while (list0.length) {
      const [sx, sy] = k0.split(',').map(Number); const pts = [[sx, sy]];
      let px = sx, py = sy; let [nx, ny] = list0.pop();
      while (!(nx === sx && ny === sy)) {
        pts.push([nx, ny]);
        const L = edges.get(key(nx, ny)); let pick = 0;
        if (L.length > 1) { // diagonaal contact: neem de bocht naar rechts (blijf bij dezelfde module)
          const dx = nx - px, dy = ny - py; const rx = -dy, ry = dx;
          const i = L.findIndex(([ax, ay]) => ax - nx === rx && ay - ny === ry); pick = i >= 0 ? i : 0;
        }
        const [ax, ay] = L.splice(pick, 1)[0]; px = nx; py = ny; nx = ax; ny = ay;
      }
      // rechte stukken samenvoegen
      const s = pts.filter((p, i) => { const a = pts[(i - 1 + pts.length) % pts.length], b = pts[(i + 1) % pts.length]; return (a[0] - p[0]) * (b[1] - p[1]) - (a[1] - p[1]) * (b[0] - p[0]) !== 0; });
      loops.push(s);
    }
  }
  return loops;
}

export function toSVG(model, qr, o) {
  const { layout: L, outline } = model;
  const all = [...outline.outer, ...outline.holes.flat()];
  const minX = Math.min(...all.map((p) => p[0])), maxX = Math.max(...all.map((p) => p[0]));
  const minY = Math.min(...all.map((p) => -p[1])), maxY = Math.max(...all.map((p) => -p[1]));
  const f = (v) => (Math.round(v * 1000) / 1000).toString();
  const W = maxX - minX, H = maxY - minY;
  const loops = traceContours(qr.grid);
  const d = loops.map((lp) => 'M' + lp.map(([c, r]) => f(L.x0 + c * L.m) + ' ' + f(-L.yTop + r * L.m)).join('L') + 'Z').join('');
  let s = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${f(W)}mm" height="${f(H)}mm" viewBox="${f(minX)} ${f(minY)} ${f(W)} ${f(H)}">\n`;
  s += `<title>${esc(o.title || 'QR-code')}</title>\n`;
  s += `<path id="qr" fill="${o.qrColor || '#000000'}" fill-rule="nonzero" d="${d}"/>\n`;
  if (o.svgOutline) {
    const ring = (p) => 'M' + p.map(([x, y]) => f(x) + ' ' + f(-y)).join('L') + 'Z';
    s += `<path id="omtrek" fill="none" stroke="#FF0000" stroke-width="0.1" d="${[outline.outer, ...outline.holes].map(ring).join('')}"/>\n`;
  }
  return s + '</svg>\n';
}

// Minimale zip-schrijver (zonder compressie)
const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
function crc32(b) { let c = 0xFFFFFFFF; for (let i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
function zipStore(entries) {
  const enc = new TextEncoder(); const parts = []; const central = []; let off = 0;
  for (const [name, content] of entries) {
    const nb = enc.encode(name), data = typeof content === 'string' ? enc.encode(content) : content, crc = crc32(data);
    const lh = new DataView(new ArrayBuffer(30));
    lh.setUint32(0, 0x04034b50, true); lh.setUint16(4, 20, true); lh.setUint16(6, 0x0800, true); lh.setUint16(8, 0, true);
    lh.setUint16(10, 0, true); lh.setUint16(12, 0x21, true); lh.setUint32(14, crc, true); lh.setUint32(18, data.length, true);
    lh.setUint32(22, data.length, true); lh.setUint16(26, nb.length, true); lh.setUint16(28, 0, true);
    parts.push(new Uint8Array(lh.buffer), nb, data);
    const ch = new DataView(new ArrayBuffer(46));
    ch.setUint32(0, 0x02014b50, true); ch.setUint16(4, 20, true); ch.setUint16(6, 20, true); ch.setUint16(8, 0x0800, true);
    ch.setUint16(10, 0, true); ch.setUint16(12, 0, true); ch.setUint16(14, 0x21, true); ch.setUint32(16, crc, true);
    ch.setUint32(20, data.length, true); ch.setUint32(24, data.length, true); ch.setUint16(28, nb.length, true);
    ch.setUint32(42, off, true);
    central.push(new Uint8Array(ch.buffer), nb);
    off += 30 + nb.length + data.length;
  }
  const csize = central.reduce((s, p) => s + p.length, 0);
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true); end.setUint16(8, entries.length, true); end.setUint16(10, entries.length, true);
  end.setUint32(12, csize, true); end.setUint32(16, off, true);
  const all = [...parts, ...central, new Uint8Array(end.buffer)];
  const out = new Uint8Array(all.reduce((s, p) => s + p.length, 0)); let p = 0; for (const a of all) { out.set(a, p); p += a.length; }
  return out;
}
