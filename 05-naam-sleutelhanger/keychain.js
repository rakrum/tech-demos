// Geometrie voor de naam-sleutelhanger: tekst -> 2D-vormen -> 3D met Manifold.
// Werkt in de browser en in Node (wasm en font worden van buitenaf meegegeven).

export const DEFAULTS = {
  text: 'Zehra', shape: 'rond', width: 55, base: 3, letters: 1.5,
  hole: 'links', holeD: 4, rim: 2.5, pad: 3, maxTextH: 22,
};

// Fontpad (opentype.js) omzetten naar losse contouren (y omhoog), bochten opgedeeld in lijnstukjes.
function pathToContours(path, tol) {
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
  // dubbele eindpunten weghalen
  return out.map(p => { const q = p.filter((v, i) => i === 0 || Math.hypot(v[0] - p[i - 1][0], v[1] - p[i - 1][1]) > 1e-6);
    const a = q[0], b = q[q.length - 1]; if (q.length > 3 && Math.hypot(a[0] - b[0], a[1] - b[1]) < 1e-6) q.pop(); return q; })
    .filter(p => p.length >= 3);
}

function heartPolygon(n = 120) {
  const pts = [];
  for (let i = 0; i < n; i++) { const t = (i / n) * Math.PI * 2;
    pts.push([16 * Math.sin(t) ** 3, 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)]); }
  return pts.reverse(); // tegen de klok in
}

export function buildKeychain(wasm, font, opts = {}) {
  const o = { ...DEFAULTS, ...opts };
  const { CrossSection, Manifold } = wasm;
  const trash = []; const T = (x) => { trash.push(x); return x; };
  try {
    const text = (o.text || '').trim() || 'Naam';
    const SIZE = 100;
    const contours = pathToContours(font.getPath(text, 0, 0, SIZE), 1.2);
    if (!contours.length) throw new Error('Geen letters gevonden in dit lettertype.');
    let txt = T(new CrossSection(contours, 'NonZero'));
    const b0 = txt.bounds();
    const tw0 = b0.max[0] - b0.min[0], th0 = b0.max[1] - b0.min[1];
    // hoe breed mag de tekst zijn binnen de gekozen buitenmaat?
    const holeExtra = o.hole === 'links' ? o.holeD + 0.4 + o.rim : 0; // zo ver steekt het oogje uit
    const W = o.width - holeExtra;
    let textW;
    if (o.shape === 'pil') textW = (W - 2 * o.pad) * 0.86;
    else if (o.shape === 'hart') textW = W * 0.8;
    else if (o.shape === 'contour') textW = W - 2 * 2.5;
    else textW = W - 2 * o.pad;
    let s = textW / tw0;
    if (th0 * s > o.maxTextH) s = o.maxTextH / th0;
    const cx = (b0.min[0] + b0.max[0]) / 2, cy = (b0.min[1] + b0.max[1]) / 2;
    txt = T(txt.translate([-cx, -cy]).scale(s));
    const tb = txt.bounds();
    const tw = tb.max[0] - tb.min[0], th = tb.max[1] - tb.min[1];
    const baseline = -cy * s; // y van de basislijn na centreren
    const xh = ((font.tables.os2 && font.tables.os2.sxHeight) || font.unitsPerEm * 0.5) / font.unitsPerEm * SIZE * s;

    // 2D-basisplaat
    let base;
    if (o.shape === 'pil') {
      const H = th + 2 * o.pad, r = H / 2, w = Math.max(tw / 0.86 + 2 * o.pad, H);
      base = T(CrossSection.hull([T(CrossSection.circle(r, 96).translate([-(w / 2 - r), 0])), T(CrossSection.circle(r, 96).translate([w / 2 - r, 0]))]));
    } else if (o.shape === 'hart') {
      // hart heeft een vaste breedte; de tekst wordt zo groot gemaakt als er binnen past
      const k = W / 32; // hartpolygoon is 32 breed
      base = T(new CrossSection(heartPolygon()).scale(k));
      const hb = base.bounds();
      const inner = T(base.offset(-o.pad, 'Round', 2, 48));
      const fits = (f, ty) => { const t = txt.scale(f).translate([0, ty]); const out = t.subtract(inner); const ok = out.isEmpty() || out.area() < 1e-3; t.delete(); out.delete(); return ok; };
      // zoek de hoogte in het hart waar de tekst het grootst kan
      let best = { f: 0, ty: 0 };
      for (const fr of [0.38, 0.44, 0.5, 0.56, 0.62]) {
        const ty = hb.min[1] + (hb.max[1] - hb.min[1]) * fr;
        let lo = 0, hi = 1.0;
        if (fits(hi, ty)) lo = hi; else for (let i = 0; i < 12; i++) { const m = (lo + hi) / 2; if (fits(m, ty)) lo = m; else hi = m; }
        if (lo > best.f) best = { f: lo, ty };
      }
      if (best.f <= 0) throw new Error('De tekst past niet in het hart; kies een kortere naam of een andere vorm.');
      txt = T(txt.scale(best.f).translate([0, best.ty]));
    } else if (o.shape === 'contour') {
      const r = 2.5;
      const bar = T(CrossSection.square([Math.max(tw - th * 0.6, 1), Math.max(xh * 0.45, 1)]).translate([tb.min[0] + th * 0.3, baseline + xh * 0.05]));
      base = T(T(txt.add(bar)).offset(r, 'Round', 2, 48));
      // losse eilandjes (bv. puntje van de i) met een staafje aan de rest vastmaken
      const parts = base.decompose();
      if (parts.length > 1) {
        parts.forEach(T);
        parts.sort((a, b) => b.area() - a.area());
        let merged = parts[0];
        for (const p of parts.slice(1)) {
          const pb = p.bounds(); const px = (pb.min[0] + pb.max[0]) / 2, py = (pb.min[1] + pb.max[1]) / 2;
          const strut = T(CrossSection.hull([T(CrossSection.circle(1.2, 24).translate([px, py])), T(CrossSection.circle(1.2, 24).translate([px, baseline + xh * 0.3]))]));
          merged = T(merged.add(p).add(strut));
        }
        base = merged;
      }
    } else {
      const w = tw + 2 * o.pad, h = th + 2 * o.pad, r = Math.min(4, h / 2 - 0.01);
      base = T(T(CrossSection.square([w - 2 * r, h - 2 * r], true)).offset(r, 'Round', 2, 48));
    }

    // tekstcentrum (voor de plek van het gaatje)
    const tbb = txt.bounds();
    const tcy = (tbb.min[1] + tbb.max[1]) / 2;
    let hole = null;
    if (o.hole !== 'geen') {
      const hr = o.holeD / 2, R = hr + o.rim;
      let edge, dir;
      if (o.hole === 'links') {
        const strip = T(base.intersect(T(CrossSection.square([1000, 0.4], true).translate([0, tcy]))));
        edge = [strip.bounds().min[0], tcy]; dir = [-1, 0];
      } else {
        const strip = T(base.intersect(T(CrossSection.square([0.4, 1000], true))));
        edge = [0, strip.bounds().max[1]]; dir = [0, 1];
      }
      const hc = [edge[0] + dir[0] * (hr + 0.4), edge[1] + dir[1] * (hr + 0.4)];
      const inner = [hc[0] - dir[0] * R * 1.6, hc[1] - dir[1] * R * 1.6];
      const tab = T(CrossSection.hull([T(CrossSection.circle(R, 64).translate(hc)), T(CrossSection.circle(R, 64).translate(inner))]));
      hole = T(CrossSection.circle(hr, 48).translate(hc));
      base = T(T(base.add(tab)).subtract(hole));
      txt = T(txt.subtract(T(hole.offset(0.6, 'Round', 2, 48))));
    }
    // overbodige punten weg
    base = T(base.simplify(0.01)); txt = T(txt.simplify(0.01));

    const baseM = T(Manifold.extrude(base, o.base));
    const letM = T(Manifold.extrude(txt, o.letters).translate([0, 0, o.base]));
    const letOverlap = T(Manifold.extrude(txt, o.letters + 0.3).translate([0, 0, o.base - 0.3]));
    const single = T(baseM.add(letOverlap));
    const bb = single.boundingBox();
    const mesh = (m) => { const g = m.getMesh(); return { pos: Float32Array.from(g.vertProperties), tri: Uint32Array.from(g.triVerts), numProp: g.numProp }; };
    return {
      base: mesh(baseM), letters: mesh(letM), single: mesh(single),
      info: {
        size: [bb.max[0] - bb.min[0], bb.max[1] - bb.min[1], bb.max[2] - bb.min[2]],
        textH: tbb.max[1] - tbb.min[1],
        status: single.status(), genus: single.genus(), volume: single.volume(),
        pieces: single.decompose().map(T).length, baseStatus: baseM.status(), letStatus: letM.status(),
      },
    };
  } finally {
    for (const x of trash) { try { x.delete(); } catch {} }
  }
}

// ---------- export ----------
function meshTris(m) { // geeft [ [x,y,z]*3 ] per driehoek terug via callback
  return { n: m.tri.length / 3, v: (i) => [m.pos[i * m.numProp], m.pos[i * m.numProp + 1], m.pos[i * m.numProp + 2]] };
}

export function toSTL(m, name = 'sleutelhanger') {
  const { n } = meshTris(m);
  const buf = new ArrayBuffer(84 + n * 50); const dv = new DataView(buf);
  const head = `binary STL ${name} - Manifold`.slice(0, 80);
  for (let i = 0; i < head.length; i++) dv.setUint8(i, head.charCodeAt(i));
  dv.setUint32(80, n, true);
  let off = 84; const P = m.pos, k = m.numProp;
  for (let t = 0; t < n; t++) {
    const a = m.tri[t * 3] * k, b = m.tri[t * 3 + 1] * k, c = m.tri[t * 3 + 2] * k;
    const ux = P[b] - P[a], uy = P[b + 1] - P[a + 1], uz = P[b + 2] - P[a + 2];
    const vx = P[c] - P[a], vy = P[c + 1] - P[a + 1], vz = P[c + 2] - P[a + 2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx; const l = Math.hypot(nx, ny, nz) || 1;
    nx /= l; ny /= l; nz /= l;
    for (const v of [nx, ny, nz]) { dv.setFloat32(off, v, true); off += 4; }
    for (const i of [a, b, c]) for (let j = 0; j < 3; j++) { dv.setFloat32(off, P[i + j], true); off += 4; }
    dv.setUint16(off, 0, true); off += 2;
  }
  return new Uint8Array(buf);
}

function meshXML(m) {
  const k = m.numProp, nv = m.pos.length / k; const f = (x) => (Math.round(x * 10000) / 10000).toString();
  const vs = new Array(nv); for (let i = 0; i < nv; i++) vs[i] = `<vertex x="${f(m.pos[i * k])}" y="${f(m.pos[i * k + 1])}" z="${f(m.pos[i * k + 2])}"/>`;
  const ts = new Array(m.tri.length / 3); for (let t = 0; t < ts.length; t++) ts[t] = `<triangle v1="${m.tri[t * 3]}" v2="${m.tri[t * 3 + 1]}" v3="${m.tri[t * 3 + 2]}"/>`;
  return `<mesh><vertices>${vs.join('')}</vertices><triangles>${ts.join('')}</triangles></mesh>`;
}

export function to3MF(baseMesh, letMesh, colors = ['#FFFFFF', '#E0457B'], name = 'Sleutelhanger') {
  const esc = (s) => s.replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));
  const model = `<?xml version="1.0" encoding="UTF-8"?>
<model unit="millimeter" xml:lang="nl-NL" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02">
<metadata name="Title">${esc(name)}</metadata>
<metadata name="Application">Tech demo 05 - naam-sleutelhanger (Manifold)</metadata>
<resources>
<basematerials id="1"><base name="Basis" displaycolor="${colors[0]}FF"/><base name="Letters" displaycolor="${colors[1]}FF"/></basematerials>
<object id="2" name="Basis" type="model" pid="1" pindex="0">${meshXML(baseMesh)}</object>
<object id="3" name="Letters" type="model" pid="1" pindex="1">${meshXML(letMesh)}</object>
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
