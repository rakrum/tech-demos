// 3D-print-modus voor demo 09: bakje + deksel, of een platte vouwdoos met scharnieren.
// Rekent met Manifold (manifold-3d). Werkt in de browser en in Node: wasm en lettertype worden meegegeven.

export const BED = 270; // Snapmaker U1: 270 x 270 x 270 mm
export const DEFAULTS = {
  // bakje + deksel
  wall: 1.6, floor: 1.2, radius: 0, lidType: 'inset', clr: 0.25, lipH: 6, lidT: 1.2,
  // platte vouwdoos
  panelT: 1.0, hingeT: 0.35, hingeW: 1.4, groove: 'v',
  // naam
  nameStyle: 'inlay', emboss: 0.8, inlay: 0.6,
};
const GAP = 10; // mm tussen de onderdelen op het printbed

// Fontpad (opentype.js) -> contouren (y omhoog), bochten opgedeeld in lijnstukjes (zelfde aanpak als demo 05).
export function pathToContours(path, tol) {
  const out = []; let cur = []; let x = 0, y = 0, sx = 0, sy = 0;
  const push = (px, py) => cur.push([px, -py]);
  const close = () => { if (cur.length >= 3) out.push(cur); cur = []; };
  for (const c of path.commands) {
    if (c.type === 'M') { close(); x = sx = c.x; y = sy = c.y; push(x, y); }
    else if (c.type === 'L') { x = c.x; y = c.y; push(x, y); }
    else if (c.type === 'Q') {
      const n = Math.max(2, Math.ceil(Math.hypot(c.x - x, c.y - y) / tol));
      for (let i = 1; i <= n; i++) { const t = i / n, u = 1 - t;
        push(u * u * x + 2 * u * t * c.x1 + t * t * c.x, u * u * y + 2 * u * t * c.y1 + t * t * c.y); }
      x = c.x; y = c.y;
    } else if (c.type === 'C') {
      const n = Math.max(3, Math.ceil(Math.hypot(c.x - x, c.y - y) / tol * 1.3));
      for (let i = 1; i <= n; i++) { const t = i / n, u = 1 - t;
        push(u*u*u*x + 3*u*u*t*c.x1 + 3*u*t*t*c.x2 + t*t*t*c.x, u*u*u*y + 3*u*u*t*c.y1 + 3*u*t*t*c.y2 + t*t*t*c.y); }
      x = c.x; y = c.y;
    } else if (c.type === 'Z') { close(); x = sx; y = sy; }
  }
  close();
  return out.map(p => { const q = p.filter((v, i) => i === 0 || Math.hypot(v[0] - p[i - 1][0], v[1] - p[i - 1][1]) > 1e-6);
    const a = q[0], b = q[q.length - 1]; if (q.length > 3 && Math.hypot(a[0] - b[0], a[1] - b[1]) < 1e-6) q.pop(); return q; })
    .filter(p => p.length >= 3);
}

// Tekst als 2D-vorm, gecentreerd op (cx, cy), passend in maxW x maxH. mirror = gespiegeld (voor de onderkant).
function textShape(wasm, font, text, cx, cy, maxW, maxH, mirror, T) {
  const { CrossSection } = wasm;
  if (!font || !text || !text.trim() || maxW <= 2 || maxH <= 2) return null;
  const contours = pathToContours(font.getPath(text.trim(), 0, 0, 100), 1.0);
  if (!contours.length) return null;
  let cs = T(new CrossSection(contours, 'NonZero'));
  const b = cs.bounds(); const w0 = b.max[0] - b.min[0], h0 = b.max[1] - b.min[1];
  const s = Math.min(maxW / w0, maxH / h0);
  cs = T(cs.translate([-(b.min[0] + b.max[0]) / 2, -(b.min[1] + b.max[1]) / 2]).scale(s));
  if (mirror) cs = T(cs.mirror([1, 0]));
  cs = T(T(cs.translate([cx, cy])).simplify(0.01));
  return { cs, w: w0 * s, h: h0 * s };
}

const meshOf = (m) => { const q = m.simplify(0.001); const g = q.getMesh(); q.delete(); return { pos: Float32Array.from(g.vertProperties), tri: Uint32Array.from(g.triVerts), numProp: g.numProp }; };
const bbox = (m) => { const b = m.boundingBox(); return { min: [...b.min], max: [...b.max], size: [b.max[0] - b.min[0], b.max[1] - b.min[1], b.max[2] - b.min[2]] }; };

// Onderdelen naast elkaar op het bed leggen en het geheel centreren. Geeft verschuivingen + of het past.
function layout(boxes) {
  const tryRow = (axis) => {
    let off = 0; const shifts = [];
    for (const b of boxes) { const s = [0, 0]; s[axis] = off - b.min[axis]; s[1 - axis] = -b.min[1 - axis]; shifts.push(s); off += b.size[axis] + GAP; }
    const ext = [0, 0]; ext[axis] = off - GAP; ext[1 - axis] = Math.max(...boxes.map(b => b.size[1 - axis]));
    return { shifts, ext };
  };
  const zmax = Math.max(...boxes.map(b => b.size[2]));
  let best = null;
  for (const axis of [0, 1]) { const r = tryRow(axis); const fit = r.ext[0] <= BED + 1e-6 && r.ext[1] <= BED + 1e-6; if (fit) { best = { ...r, fit }; break; } if (!best) best = { ...r, fit: false }; }
  const c = [(BED - best.ext[0]) / 2, (BED - best.ext[1]) / 2];
  return { shifts: best.shifts.map(s => [s[0] + c[0], s[1] + c[1], 0]), ext: best.ext, fit: best.fit && zmax <= BED + 1e-6, zmax };
}

// ---------- Bakje + deksel ----------
export function buildTrayLid(wasm, font, p) {
  const o = { ...DEFAULTS, ...p };
  const { CrossSection, Manifold } = wasm;
  const trash = []; const T = (x) => { trash.push(x); return x; };
  try {
    const { L, W, H, wall: w, floor: f, clr, lipH, lidT: lt } = o;
    const OL = L + 2 * w, OW = W + 2 * w;
    const r = o.radius > 0 ? Math.min(o.radius, Math.min(OL, OW) / 2 - 0.2) : 0;
    const ri = r > 0 ? Math.max(r - w, 0) : 0;
    const join = r > 0 ? 'Round' : 'Miter';
    const rrect = (a, b, rad) => rad > 0.01 ? T(T(CrossSection.square([a - 2 * rad, b - 2 * rad], true)).offset(rad, 'Round', 2, 48)) : T(CrossSection.square([a, b], true));
    const outerCS = rrect(OL, OW, r), innerCS = rrect(L, W, ri);
    // bakje
    const tray = T(T(Manifold.extrude(outerCS, f + H)).subtract(T(T(Manifold.extrude(innerCS, H + 1)).translate([0, 0, f]))));
    // deksel in printstand (bovenkant op het bed): plaat z=0..lt, rand omhoog
    let plateCS, ringCS, lipW = w;
    if (o.lidType === 'slip') {
      plateCS = T(outerCS.offset(clr + lipW, join, 2, 48));
      ringCS = T(plateCS.subtract(T(outerCS.offset(clr, join, 2, 48))));
    } else {
      const lo = T(innerCS.offset(-clr, join, 2, 48));
      lipW = Math.min(w, Math.min(L, W) / 2 - clr - 1);
      plateCS = outerCS;
      ringCS = T(lo.subtract(T(lo.offset(-lipW, join, 2, 48))));
    }
    const plate = T(Manifold.extrude(plateCS, lt));
    const ring = T(T(Manifold.extrude(ringCS, lipH)).translate([0, 0, lt]));
    let lid = T(plate.add(ring));
    // naam op het deksel
    const style = o.nameStyle;
    const pb = plateCS.bounds();
    const maxW = L * 0.8, maxH = Math.min(W * 0.45, 25);
    const txt = textShape(wasm, font, o.name, 0, 0, maxW, maxH, style === 'inlay', T);
    let namePart = null, lidBody = lid, lidStl = lid;
    if (txt && style === 'inlay') {
      const d = Math.min(o.inlay, lt - 0.4);
      namePart = T(T(Manifold.extrude(txt.cs, d)).intersect(plate));
      lidBody = T(lid.subtract(namePart));
      lidStl = lidBody; // in de STL (één kleur) is de naam een uitsparing
    } else if (txt && style === 'emboss') {
      // deksel met de bovenkant omhoog: spiegelen in z
      lid = T(T(lid.mirror([0, 0, 1])).translate([0, 0, lt + lipH]));
      lidBody = lid;
      namePart = T(T(Manifold.extrude(txt.cs, o.emboss)).translate([0, 0, lt + lipH]));
      lidStl = T(lid.add(T(T(Manifold.extrude(txt.cs, o.emboss + 0.3)).translate([0, 0, lt + lipH - 0.3]))));
    }
    // passen: deksel op het bakje zetten (omgedraaid) en kijken of er niets overlapt
    const flipToTray = (m) => T(T(m.mirror([0, 0, 1])).translate([0, 0, f + H + lt]));
    const ringAsm = flipToTray(ring), plateAsm = flipToTray(plate);
    const overlap = T(T(ringAsm.add(plateAsm)).intersect(tray)).volume();
    const gap = ringAsm.minGap(tray, 3);
    // op het bed leggen
    const L1 = layout([bbox(tray), bbox(lidStl)]);
    const mv = (m, s) => m ? T(m.translate(s)) : null;
    const trayP = mv(tray, L1.shifts[0]), lidBodyP = mv(lidBody, L1.shifts[1]), nameP = mv(namePart, L1.shifts[1]), lidStlP = mv(lidStl, L1.shifts[1]);
    const parts = [{ id: 'tray', name: 'Bakje', mesh: meshOf(trayP), role: 'body' },
                   { id: 'lid', name: 'Deksel', mesh: meshOf(lidBodyP), role: 'body' }];
    if (nameP) parts.push({ id: 'name', name: 'Naam', mesh: meshOf(nameP), role: 'name', parent: 'lid' });
    return {
      kind: 'tray', parts, stl: [meshOf(trayP), meshOf(lidStlP)],
      info: {
        tray: bbox(trayP), lid: bbox(lidStlP), name: nameP ? bbox(nameP) : null, textSize: txt ? [txt.w, txt.h] : null,
        expectTray: [OL, OW, f + H], lipW, lidType: o.lidType, overlap, gap, clr,
        status: [trayP.status(), lidBodyP.status(), nameP ? nameP.status() : 'n.v.t.'],
        genus: [trayP.genus(), lidBodyP.genus()], bed: L1, emboss: style === 'emboss' && !!txt,
        nameFitsLid: txt ? (txt.w <= pb.max[0] - pb.min[0]) : true,
      },
    };
  } finally { for (const x of trash) { try { x.delete(); } catch {} } }
}

// ---------- Platte vouwdoos met scharnieren ----------
// net = { pieces:[{n, pts}], score:[{a,b}], namePanel:{x,y,w,h}, expected:{w,h} } uit de 2D-uitslag (zelfde tuckBox).
export function buildFlatNet(wasm, font, p, net) {
  const o = { ...DEFAULTS, ...p };
  const { CrossSection, Manifold } = wasm;
  const trash = []; const T = (x) => { trash.push(x); return x; };
  try {
    const Tp = o.panelT, h = Math.min(o.hingeT, Tp - 0.2), hw = o.hingeW;
    let netCS = null;
    for (const pc of net.pieces) { const c = T(new CrossSection([pc.pts], 'NonZero')); netCS = netCS ? T(netCS.add(c)) : c; }
    netCS = T(netCS.simplify(0.0005));
    let body = T(Manifold.extrude(netCS, Tp));
    // groefjes op de bovenkant (die wordt de binnenkant), dunne strook onderin (eerste lagen)
    const e = 0.05, zt = Tp + 0.05;
    const grooves = [];
    for (const { a, b } of net.score) {
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]); if (len < 1e-6) continue;
      const u = [(b[0] - a[0]) / len, (b[1] - a[1]) / len], n = [-u[1], u[0]];
      const A = [a[0] - u[0] * e, a[1] - u[1] * e], B = [b[0] + u[0] * e, b[1] + u[1] * e];
      const pts = [];
      if (o.groove === 'flat') {
        for (const P of [A, B]) for (const s of [-1, 1]) for (const z of [h, zt]) pts.push([P[0] + n[0] * s * hw / 2, P[1] + n[1] * s * hw / 2, z]);
      } else {
        const half = hw / 2 * (zt - h) / (Tp - h);
        for (const P of [A, B]) { pts.push([P[0], P[1], h]); for (const s of [-1, 1]) pts.push([P[0] + n[0] * s * half, P[1] + n[1] * s * half, zt]); }
      }
      grooves.push(T(Manifold.hull(pts)));
    }
    if (grooves.length) body = T(body.subtract(T(Manifold.union(grooves))));
    // naam op de voorkant
    const np = net.namePanel, m = hw + 2;
    const txt = textShape(wasm, font, o.name, np.x + np.w / 2, np.y + np.h / 2, (np.w - 2 * m) * 0.85, Math.min((np.h - 2 * m) * 0.3, 30), o.nameStyle === 'inlay', T);
    let namePart = null, bodyMain = body, bodyStl = body;
    if (txt && o.nameStyle === 'inlay') {
      const d = Math.min(o.inlay, Tp - 0.4);
      namePart = T(T(Manifold.extrude(txt.cs, d)).intersect(body));
      bodyMain = T(body.subtract(namePart)); bodyStl = bodyMain;
    } else if (txt && o.nameStyle === 'emboss') {
      namePart = T(T(Manifold.extrude(txt.cs, o.emboss)).translate([0, 0, Tp]));
      bodyStl = T(body.add(T(T(Manifold.extrude(txt.cs, o.emboss + 0.3)).translate([0, 0, Tp - 0.3]))));
    }
    // op het bed: eventueel een kwartslag draaien als hij anders niet past
    let bb = bbox(bodyStl), rot = false;
    const fitsAs = (sx, sy) => sx <= BED + 1e-6 && sy <= BED + 1e-6;
    if (!fitsAs(bb.size[0], bb.size[1]) && fitsAs(bb.size[1], bb.size[0])) rot = true;
    const place = (mm) => { if (!mm) return null; let q = mm; if (rot) q = T(q.rotate([0, 0, 90])); return q; };
    let bMain = place(bodyMain), bName = place(namePart), bStl = place(bodyStl);
    bb = bbox(bStl);
    const s = [(BED - bb.size[0]) / 2 - bb.min[0], (BED - bb.size[1]) / 2 - bb.min[1], 0];
    bMain = T(bMain.translate(s)); bStl = T(bStl.translate(s)); if (bName) bName = T(bName.translate(s));
    const fb = bbox(bStl);
    const parts = [{ id: 'net', name: 'Vouwdoos', mesh: meshOf(bMain), role: 'body' }];
    if (bName) parts.push({ id: 'name', name: 'Naam', mesh: meshOf(bName), role: 'name', parent: 'net' });
    return {
      kind: 'flat', parts, stl: [meshOf(bStl)],
      info: {
        net: fb, name: bName ? bbox(bName) : null, textSize: txt ? [txt.w, txt.h] : null, rotated: rot, hinges: grooves.length,
        expectNet: rot ? [net.expected.h, net.expected.w] : [net.expected.w, net.expected.h], panelT: Tp, hingeT: h, hingeW: hw,
        fit: fitsAs(fb.size[0], fb.size[1]), status: [bMain.status(), bName ? bName.status() : 'n.v.t.'], genus: bMain.genus(),
        foldOk: hw >= 2 * (Tp - h) - 1e-6, minHingeW: 2 * (Tp - h), emboss: o.nameStyle === 'emboss' && !!txt,
      },
    };
  } finally { for (const x of trash) { try { x.delete(); } catch {} } }
}

// ---------- export ----------
export function toSTL(meshes, name = 'doosje') {
  const n = meshes.reduce((s, m) => s + m.tri.length / 3, 0);
  const buf = new ArrayBuffer(84 + n * 50); const dv = new DataView(buf);
  const head = `binary STL ${name} - Tech demo 09`.slice(0, 80);
  for (let i = 0; i < head.length; i++) dv.setUint8(i, head.charCodeAt(i) & 0x7f);
  dv.setUint32(80, n, true);
  let off = 84;
  for (const m of meshes) {
    const P = m.pos, k = m.numProp;
    for (let t = 0; t < m.tri.length / 3; t++) {
      const a = m.tri[t * 3] * k, b = m.tri[t * 3 + 1] * k, c = m.tri[t * 3 + 2] * k;
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
  const k = m.numProp, nv = m.pos.length / k; const f = (x) => (Math.round(x * 10000) / 10000).toString();
  const vs = new Array(nv); for (let i = 0; i < nv; i++) vs[i] = `<vertex x="${f(m.pos[i * k])}" y="${f(m.pos[i * k + 1])}" z="${f(m.pos[i * k + 2])}"/>`;
  const ts = new Array(m.tri.length / 3); for (let t = 0; t < ts.length; t++) ts[t] = `<triangle v1="${m.tri[t * 3]}" v2="${m.tri[t * 3 + 1]}" v3="${m.tri[t * 3 + 2]}"/>`;
  return `<mesh><vertices>${vs.join('')}</vertices><triangles>${ts.join('')}</triangles></mesh>`;
}

// Elk hoofdonderdeel wordt een eigen object; de naam is een tweede deel (component) van het deksel/de vouwdoos.
export function to3MF(result, colors = ['#F2F2F2', '#E0457B'], title = 'Doosje') {
  const esc = (s) => String(s).replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));
  let id = 2; const objs = [], items = [];
  const byId = {};
  for (const pt of result.parts) { byId[pt.id] = { ...pt, oid: id++ }; }
  for (const pt of Object.values(byId)) objs.push(`<object id="${pt.oid}" name="${esc(pt.name)}" type="model" pid="1" pindex="${pt.role === 'name' ? 1 : 0}">${meshXML(pt.mesh)}</object>`);
  for (const pt of Object.values(byId)) {
    if (pt.parent) continue;
    const kids = Object.values(byId).filter(k => k.parent === pt.id);
    if (kids.length) {
      const cid = id++;
      objs.push(`<object id="${cid}" name="${esc(pt.name + ' met naam')}" type="model"><components><component objectid="${pt.oid}"/>${kids.map(k => `<component objectid="${k.oid}"/>`).join('')}</components></object>`);
      items.push(`<item objectid="${cid}"/>`);
    } else items.push(`<item objectid="${pt.oid}"/>`);
  }
  const model = `<?xml version="1.0" encoding="UTF-8"?>
<model unit="millimeter" xml:lang="nl-NL" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02">
<metadata name="Title">${esc(title)}</metadata>
<metadata name="Application">Tech demo 09 - vouwdoosje 3D-print (Manifold)</metadata>
<resources>
<basematerials id="1"><base name="Doosje" displaycolor="${colors[0]}FF"/><base name="Naam" displaycolor="${colors[1]}FF"/></basematerials>
${objs.join('\n')}
</resources>
<build>${items.join('')}</build>
</model>`;
  const ct = `<?xml version="1.0" encoding="UTF-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>`;
  const rels = `<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>`;
  return zipStore([['[Content_Types].xml', ct], ['_rels/.rels', rels], ['3D/3dmodel.model', model]]);
}

// Minimale zip-schrijver (zonder compressie), zelfde als demo 05
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
