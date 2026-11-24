// Geometrie voor de koekjesvormenmaker: 2D-omtrek -> uitsteker + stempel (3D) met Manifold.
// Werkt in de browser en in Node (de Manifold-wasm wordt van buitenaf meegegeven).
// Idee en vakjargon (wand, snijrand, flens, losse stempel) naar razorglyon/cookie-cutter-designer (MIT).

export const DEFAULTS = {
  size: 75,        // langste zijde van het koekje in mm
  wall: 1.6,       // wanddikte onderaan (print-kant) in mm
  thinEdge: true,  // dunnere snijrand bovenaan
  edge: 0.8,       // dikte van de snijrand in mm
  edgeH: 4,        // hoogte van de snijrand in mm
  height: 15,      // totale hoogte van de uitsteker in mm
  rimW: 4,         // breedte van de flens (rand op het bed) in mm
  rimT: 2,         // dikte van de flens in mm
  stamp: true,     // stempel maken
  clearance: 1.0,  // stempel zoveel kleiner dan het koekje (rondom) in mm
  plateT: 4,       // dikte stempelplaat in mm
  reliefH: 1.6,    // hoogte van het reliëf in mm
  lineW: 1.6,      // lijndikte van het reliëf in mm (voorbeeldvormen)
  thicken: 0,      // reliëf uit een tekening extra dik maken (mm)
  border: true,    // opstaande rand langs de stempel
  mirror: true,    // spiegelen, zodat koekje en afdruk gelijk zijn aan de tekening
};

const SEG = 48;

// ---------- voorbeeldvormen (eenheden: ongeveer 100 hoog, y omhoog) ----------
function starPts(R, r, n = 5, rot = Math.PI / 2) {
  const p = []; for (let i = 0; i < n * 2; i++) { const a = rot + i * Math.PI / n; const q = i % 2 ? r : R; p.push([q * Math.cos(a), q * Math.sin(a)]); } return p;
}
function heartPts(k = 1, n = 160, dy = 0) {
  const p = []; for (let i = 0; i < n; i++) { const t = (i / n) * Math.PI * 2;
    p.push([k * 16 * Math.sin(t) ** 3, k * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) + dy]); }
  return p.reverse();
}
const ring = (cx, cy, r, n = 64) => Array.from({ length: n }, (_, i) => [cx + r * Math.cos(i / n * Math.PI * 2), cy + r * Math.sin(i / n * Math.PI * 2)]);

export const PRESETS = {
  ster: { name: 'Ster', build(W) {
    const { CrossSection } = W;
    const o = new CrossSection([starPts(50, 22)], 'EvenOdd');
    const r = o.offset(-3, 'Round', 2, SEG).offset(3, 'Round', 2, SEG); o.delete();
    return { outline: r, strokes: [{ pts: starPts(24, 10.5), closed: true }, { pts: [[0, 0]], dot: true }] };
  } },
  kerstboom: { name: 'Kerstboom', build(W) {
    const { CrossSection } = W;
    const tiers = [
      [[-44, -22], [44, -22], [0, 22]],
      [[-35, 0], [35, 0], [0, 38]],
      [[-25, 20], [25, 20], [0, 50]],
    ].map((t) => new CrossSection([t], 'EvenOdd'));
    const trunk = CrossSection.square([16, 18], true).translate([0, -30]);
    const u = CrossSection.union([...tiers, trunk]); tiers.forEach((t) => t.delete()); trunk.delete();
    const r = u.offset(-2.5, 'Round', 2, SEG).offset(2.5, 'Round', 2, SEG); u.delete();
    return { outline: r, strokes: [
      { pts: [[-30, -12], [26, 0]] }, { pts: [[-22, 10], [20, 20]] }, { pts: [[-13, 30], [10, 36]] },
      { pts: [[-18, -16]], dot: true }, { pts: [[14, -14]], dot: true }, { pts: [[0, 6]], dot: true },
      { pts: [[-6, 24]], dot: true }, { pts: [[12, 28]], dot: true }, { pts: [[2, 42]], dot: true },
    ] };
  } },
  hart: { name: 'Hart', build(W) {
    const { CrossSection } = W;
    return { outline: new CrossSection([heartPts(3)], 'EvenOdd'), strokes: [{ pts: heartPts(1.7, 120, 1.5), closed: true }] };
  } },
  mannetje: { name: 'Peperkoekmannetje', build(W) {
    const { CrossSection } = W;
    const c = (x, y, r) => CrossSection.circle(r, SEG).translate([x, y]);
    const limb = (a, b, r) => { const p = c(a[0], a[1], r), q = c(b[0], b[1], r); const h = CrossSection.hull([p, q]); p.delete(); q.delete(); return h; };
    const parts = [c(0, 33, 15), limb([0, 15], [0, -10], 17), limb([-10, 8], [-33, 2], 8), limb([10, 8], [33, 2], 8),
      limb([-8, -14], [-20, -42], 9), limb([8, -14], [20, -42], 9)];
    const u = CrossSection.union(parts); parts.forEach((p) => p.delete());
    const r = u.offset(2, 'Round', 2, SEG).offset(-2, 'Round', 2, SEG); u.delete();
    const smile = Array.from({ length: 9 }, (_, i) => { const a = Math.PI * (1.2 + 0.6 * i / 8); return [7 * Math.cos(a), 33 + 7 * Math.sin(a)]; });
    return { outline: r, strokes: [
      { pts: [[-5.5, 37]], dot: true }, { pts: [[5.5, 37]], dot: true }, { pts: smile },
      { pts: [[0, 10]], dot: true }, { pts: [[0, 0]], dot: true }, { pts: [[0, -10]], dot: true },
      { pts: [[-31, 8], [-27, -2]] }, { pts: [[31, 8], [27, -2]] },
      { pts: [[-24, -36], [-13, -40]] }, { pts: [[24, -36], [13, -40]] },
    ] };
  } },
  kerstbal: { name: 'Kerstbal', build(W) {
    const { CrossSection } = W;
    const ball = CrossSection.circle(40, 96).translate([0, -6]);
    const cap = CrossSection.square([18, 10], true).translate([0, 37]);
    const loop = CrossSection.circle(6, SEG).translate([0, 44]);
    const u = CrossSection.union([ball, cap, loop]); [ball, cap, loop].forEach((x) => x.delete());
    const r = u.offset(1.5, 'Round', 2, SEG).offset(-1.5, 'Round', 2, SEG); u.delete();
    const zig = []; for (let i = 0; i <= 10; i++) zig.push([-36 + i * 7.2, -6 + (i % 2 ? 7 : -7)]);
    return { outline: r, strokes: [{ pts: [[-34, 12], [34, 12]] }, { pts: [[-34, -24], [34, -24]] }, { pts: zig },
      { pts: [[-18, 22]], dot: true }, { pts: [[0, 24]], dot: true }, { pts: [[18, 22]], dot: true }] };
  } },
};

// ---------- tekening/foto -> vorm ----------
// mask: Uint8Array(w*h), 1 = tekening (donker). Geeft omtrek-lussen in pixels (y omlaag), tegen de klok in voor vulling.
export function traceMask(mask, w, h) {
  const D = (x, y) => x >= 0 && y >= 0 && x < w && y < h && mask[y * w + x];
  const edges = new Map(); const key = (x, y) => y * (w + 2) + x;
  const add = (x0, y0, x1, y1) => { const k = key(x0, y0); let L = edges.get(k); if (!L) edges.set(k, L = []); L.push([x1, y1]); };
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (D(x, y)) {
    if (!D(x, y - 1)) add(x, y, x + 1, y);
    if (!D(x + 1, y)) add(x + 1, y, x + 1, y + 1);
    if (!D(x, y + 1)) add(x + 1, y + 1, x, y + 1);
    if (!D(x - 1, y)) add(x, y + 1, x, y);
  }
  const loops = [];
  for (const [k0, list0] of edges) {
    while (list0.length) {
      const sx = k0 % (w + 2), sy = Math.floor(k0 / (w + 2)); const pts = [[sx, sy]];
      let px = sx, py = sy; let [nx, ny] = list0.pop(); let guard = 0;
      while (!(nx === sx && ny === sy) && guard++ < 1e7) {
        pts.push([nx, ny]);
        const L = edges.get(key(nx, ny)); let pick = 0;
        if (L.length > 1) { const dx = nx - px, dy = ny - py; const rx = -dy, ry = dx;
          const i = L.findIndex(([ax, ay]) => ax - nx === rx && ay - ny === ry); pick = i >= 0 ? i : 0; }
        const [ax, ay] = L.splice(pick, 1)[0]; px = nx; py = ny; nx = ax; ny = ay;
      }
      const s = pts.filter((p, i) => { const a = pts[(i - 1 + pts.length) % pts.length], b = pts[(i + 1) % pts.length];
        return (a[0] - p[0]) * (b[1] - p[1]) - (a[1] - p[1]) * (b[0] - p[0]) !== 0; });
      if (s.length >= 3) loops.push(s);
    }
  }
  return loops;
}

const polyArea = (p) => { let a = 0; for (let i = 0, j = p.length - 1; i < p.length; j = i++) a += (p[j][0] + p[i][0]) * (p[j][1] - p[i][1]); return a / 2; };

// Maakt van een masker een vorm: omtrek = buitenkant van de grootste (gesloten) vlek, reliëf = de donkere lijnen zelf.
// gapPx: gaatjes/onderbrekingen tot zo breed (pixels) worden dichtgemaakt voor de omtrek.
// reliefMask (optioneel): apart masker voor het stempelreliëf, bv. donkere delen binnen een uitgeknipte foto.
export function shapeFromMask(W, mask, w, h, { gapPx = 4, inner = true, reliefMask = null } = {}) {
  const { CrossSection } = W;
  const loops = traceMask(mask, w, h).map((l) => l.map(([x, y]) => [x, -y]));
  if (!loops.length) throw new Error('Geen tekening gevonden. Probeer een andere drempel of “omkeren”.');
  const all = new CrossSection(loops, 'EvenOdd');
  const closed = all.offset(gapPx, 'Round', 2, 24).offset(-gapPx, 'Round', 2, 24);
  const parts = closed.decompose(); closed.delete();
  if (!parts.length) { all.delete(); throw new Error('Geen gesloten vorm gevonden.'); }
  parts.sort((a, b) => b.area() - a.area());
  const big = parts[0];
  const polys = big.toPolygons();
  let outer = polys[0]; for (const p of polys) if (Math.abs(polyArea(p)) > Math.abs(polyArea(outer))) outer = p;
  // losse stukken buiten de grote vorm tellen (stukken binnenin, zoals ogen, horen er gewoon bij)
  const inside = ([x, y]) => { let c = false; for (let i = 0, j = outer.length - 1; i < outer.length; j = i++) { const [xi, yi] = outer[i], [xj, yj] = outer[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c; } return c; };
  const nIslands = 1 + parts.slice(1).filter((p) => p.area() > big.area() * 0.01 && !inside(p.toPolygons()[0][0])).length;
  parts.forEach((p) => p.delete());
  let outline = new CrossSection([outer], 'EvenOdd');
  // trapjes van pixels gladstrijken en dunne uitsteeksels weghalen
  const sm = outline.offset(-1.2, 'Round', 2, 24).offset(1.2, 'Round', 2, 24); outline.delete(); outline = sm.simplify(0.4); sm.delete();
  let relief = null;
  if (inner && reliefMask) {
    const rl = traceMask(reliefMask, w, h).map((l) => l.map(([x, y]) => [x, -y]));
    if (rl.length) { const r0 = new CrossSection(rl, 'EvenOdd'); relief = r0.simplify(0.4); r0.delete(); }
  } else if (inner) relief = all.simplify(0.4);
  all.delete();
  return { outline, reliefCS: relief, strokes: null, nIslands };
}

// ---------- uitsteker + stempel ----------
function strokesToCS(W, strokes, map, lw) {
  const { CrossSection } = W; const parts = [];
  for (const s of strokes) {
    const pts = s.pts.map(map);
    if (s.dot) { parts.push(CrossSection.circle(lw * 1.25, SEG).translate(pts[0])); continue; }
    const seq = s.closed ? [...pts, pts[0]] : pts;
    for (let i = 0; i + 1 < seq.length; i++) {
      const a = CrossSection.circle(lw / 2, 24).translate(seq[i]), b = CrossSection.circle(lw / 2, 24).translate(seq[i + 1]);
      parts.push(CrossSection.hull([a, b])); a.delete(); b.delete();
    }
  }
  if (!parts.length) return null;
  const u = CrossSection.union(parts); parts.forEach((p) => p.delete()); return u;
}

// punten die vlak bij elkaar liggen weghalen voor het extruderen (anders vallen ze in float32 samen)
const ext = (cs, h, T) => { const c = T(cs.simplify(0.01)); return T(c.extrude(h)); };

function meshOf(man0) {
  // piepkleine randjes (< 0,002 mm) samenvoegen: anders vallen punten in float32 op dezelfde plek
  const man = man0.simplify(0.002);
  const m = man.getMesh(); man.delete(); const k = m.numProp; const n = m.vertProperties.length / k;
  const pos = new Float32Array(n * 3); for (let i = 0; i < n; i++) { pos[i * 3] = m.vertProperties[i * k]; pos[i * 3 + 1] = m.vertProperties[i * k + 1]; pos[i * 3 + 2] = m.vertProperties[i * k + 2]; }
  // Manifold houdt soms dubbele punten op dezelfde plek (naden); samenvoegen geeft een net, gesloten net.
  const remap = new Uint32Array(n); for (let i = 0; i < n; i++) remap[i] = i;
  if (m.mergeFromVert) for (let i = 0; i < m.mergeFromVert.length; i++) remap[m.mergeFromVert[i]] = m.mergeToVert[i];
  // punten die in float32 precies samenvallen worden één punt; driehoeken die daardoor plat worden vervallen
  const byPos = new Map();
  for (let i = 0; i < n; i++) { const r = remap[i]; const k = pos[r * 3] + ',' + pos[r * 3 + 1] + ',' + pos[r * 3 + 2]; const v = byPos.get(k); if (v === undefined) byPos.set(k, r); else remap[i] = v; }
  const used = new Int32Array(n).fill(-1); const out = []; let c = 0; const tri = [];
  for (let t = 0; t < m.triVerts.length; t += 3) {
    const a = remap[m.triVerts[t]], b = remap[m.triVerts[t + 1]], d = remap[m.triVerts[t + 2]];
    if (a === b || b === d || a === d) continue;
    for (const v of [a, b, d]) { if (used[v] < 0) { used[v] = c++; out.push(v); } tri.push(used[v]); }
  }
  const idx = Uint32Array.from(tri);
  const pos2 = new Float32Array(c * 3); out.forEach((v, j) => { pos2[j * 3] = pos[v * 3]; pos2[j * 3 + 1] = pos[v * 3 + 1]; pos2[j * 3 + 2] = pos[v * 3 + 2]; });
  return { pos: pos2, idx };
}

// Controle zoals een slicer kijkt: elke rand precies twee keer (heen en terug) en geen dubbele punten.
export function checkMesh(m) {
  const P = new Map(); const id = new Uint32Array(m.pos.length / 3);
  for (let i = 0; i < id.length; i++) { const k = m.pos[i * 3] + ',' + m.pos[i * 3 + 1] + ',' + m.pos[i * 3 + 2]; let v = P.get(k); if (v === undefined) P.set(k, v = P.size); id[i] = v; }
  const E = new Map();
  for (let t = 0; t < m.idx.length; t += 3) for (let j = 0; j < 3; j++) { const a = id[m.idx[t + j]], b = id[m.idx[t + (j + 1) % 3]]; if (a === b) return { ok: false, why: 'gedegenereerde driehoek' }; const k = a * 4294967296 + b; E.set(k, (E.get(k) || 0) + 1); }
  for (const [k, c] of E) { const a = Math.floor(k / 4294967296), b = k % 4294967296; if (c !== 1 || E.get(b * 4294967296 + a) !== 1) return { ok: false, why: 'open of dubbele rand' }; }
  return { ok: true, tris: m.idx.length / 3 };
}

// shape: { outline: CrossSection (eenheden), strokes?: [...], reliefCS?: CrossSection (zelfde eenheden) }
export function buildCutter(W, shape, opts = {}) {
  const o = { ...DEFAULTS, ...opts };
  const { CrossSection, Manifold } = W;
  const trash = []; const T = (x) => { if (x) trash.push(x); return x; };
  try {
    const b0 = shape.outline.bounds();
    const w0 = b0.max[0] - b0.min[0], h0 = b0.max[1] - b0.min[1];
    const s = o.size / Math.max(w0, h0);
    const cx = (b0.min[0] + b0.max[0]) / 2, cy = (b0.min[1] + b0.max[1]) / 2;
    const fx = o.mirror ? -1 : 1;
    const map = ([x, y]) => [fx * (x - cx) * s, (y - cy) * s];
    const place = (cs) => { const t = T(cs.translate([-cx, -cy])); const sc = T(t.scale([fx * s, s])); return sc; };
    let O = place(shape.outline);
    // spiegelen draait de omloopzin om; opnieuw opbouwen met EvenOdd houdt het netjes
    O = T(new CrossSection(O.toPolygons(), 'EvenOdd'));
    O = T(O.simplify(0.01));
    const ob = O.bounds();
    const info = { cookie: [ob.max[0] - ob.min[0], ob.max[1] - ob.min[1]], scale: s };

    // --- uitsteker: buitenkanten opbouwen, binnenkant (het koekje) er dwars doorheen weghalen ---
    const H = o.height, t = o.wall;
    const pieces = [];
    const thin = o.thinEdge && o.edge < t && o.edgeH < H - o.rimT;
    const lowH = thin ? H - o.edgeH : H;
    pieces.push(ext(T(O.offset(t, 'Round', 2, SEG)), lowH, T));
    if (thin) pieces.push(ext(T(O.offset(o.edge, 'Round', 2, SEG)), H, T));
    if (o.rimW > 0 && o.rimT > 0) pieces.push(ext(T(O.offset(t + o.rimW, 'Round', 2, SEG)), o.rimT, T));
    const outer = T(Manifold.union(pieces));
    const hole = T(T(O.extrude(H + 2)).translate([0, 0, -1]));
    const cutter = T(outer.subtract(hole));
    info.cutterPieces = cutter.decompose().map((m) => { trash.push(m); return m; }).length;

    // --- stempel ---
    let stamp = null;
    if (o.stamp) {
      const P = T(O.offset(-o.clearance, 'Round', 2, SEG));
      if (P.isEmpty()) throw new Error('De stempel wordt te klein; maak de vorm groter of de speling kleiner.');
      const plate = ext(P, o.plateT, T);
      const inside = T(P.offset(-0.6, 'Round', 2, SEG));
      let rel = null;
      if (shape.strokes) rel = T(strokesToCS(W, shape.strokes, map, o.lineW));
      else if (shape.reliefCS) {
        let r = place(shape.reliefCS);
        r = T(new CrossSection(r.toPolygons(), 'EvenOdd'));
        // te dunne lijntjes (< 0,6 mm) kan de printer niet maken: weghalen, daarna eventueel dikker maken
        r = T(T(r.offset(-0.3, 'Round', 2, 24)).offset(0.3 + (o.thicken || 0) / 2, 'Round', 2, 24));
        rel = r;
      }
      let rel2 = rel ? T(rel.intersect(inside)) : null;
      if (o.border) {
        const band = T(inside.subtract(T(inside.offset(-o.lineW, 'Round', 2, SEG))));
        rel2 = rel2 ? T(rel2.add(band)) : band;
      }
      // kruimels (kleiner dan 0,5 mm²) weghalen
      if (rel2) {
        const keep = rel2.decompose().filter((p) => { trash.push(p); return p.area() > 0.5; });
        rel2 = keep.length ? T(CrossSection.union(keep)) : null;
        // rakende randen samensmelten (anders kunnen punten dubbel op dezelfde plek liggen)
        if (rel2) rel2 = T(T(T(rel2.offset(0.05, 'Round', 2, 24)).offset(-0.05, 'Round', 2, 24)).simplify(0.01));
      }
      let st = plate;
      if (rel2 && !rel2.isEmpty()) {
        const relief3 = T(T(rel2.extrude(o.reliefH + 0.2)).translate([0, 0, o.plateT - 0.2]));
        st = T(plate.add(relief3));
      }
      stamp = st;
      info.reliefArea = rel2 ? rel2.area() : 0;
      info.stampPieces = stamp.decompose().map((m) => { trash.push(m); return m; }).length;
    }

    // naast elkaar leggen (uitsteker links, stempel rechts)
    const cb = cutter.boundingBox();
    let cutterP = cutter, stampP = null;
    if (stamp) {
      const sb = stamp.boundingBox(); const gap = 8;
      const dx = (cb.max[0] - cb.min[0] + sb.max[0] - sb.min[0]) / 2 + gap;
      cutterP = T(cutter.translate([-dx / 2 - (cb.min[0] + cb.max[0]) / 2, 0, 0]));
      stampP = T(stamp.translate([dx / 2 - (sb.min[0] + sb.max[0]) / 2, 0, 0]));
    }
    const C = meshOf(cutterP); const S = stampP ? meshOf(stampP) : null;
    const box = (man) => { const b = man.boundingBox(); return [b.max[0] - b.min[0], b.max[1] - b.min[1], b.max[2] - b.min[2]]; };
    info.cutterSize = box(cutter); info.stampSize = stamp ? box(stamp) : null;
    info.cutterVolume = cutter.volume(); info.stampVolume = stamp ? stamp.volume() : 0;
    info.status = cutter.status();
    info.cutterCheck = checkMesh(C); info.stampCheck = S ? checkMesh(S) : null;
    return { cutter: C, stamp: S, info, opts: o };
  } finally {
    for (const x of trash) { try { x.delete(); } catch {} }
  }
}

// ---------- export ----------
export function toSTL(meshes, name = 'koekjesvorm') {
  meshes = meshes.filter(Boolean);
  const n = meshes.reduce((s, m) => s + m.idx.length / 3, 0);
  const buf = new ArrayBuffer(84 + n * 50); const dv = new DataView(buf);
  const head = `binary STL ${name} - koekjesvormenmaker`.slice(0, 80);
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
  const f = (x) => String(parseFloat(x.toPrecision(9))); const P = m.pos; const vs = []; // float32 exact, net als in de STL
  for (let i = 0; i < P.length; i += 3) vs.push(`<vertex x="${f(P[i])}" y="${f(P[i + 1])}" z="${f(P[i + 2])}"/>`);
  const ts = []; for (let t = 0; t < m.idx.length; t += 3) ts.push(`<triangle v1="${m.idx[t]}" v2="${m.idx[t + 1]}" v3="${m.idx[t + 2]}"/>`);
  return `<mesh><vertices>${vs.join('')}</vertices><triangles>${ts.join('')}</triangles></mesh>`;
}
const esc = (s) => String(s).replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));

// Uitsteker en stempel als twee losse objecten (elk een eigen build-item).
export function to3MF(cutter, stamp, name = 'Koekjesvorm') {
  const objs = [], items = [];
  objs.push(`<object id="2" name="Uitsteker" type="model" pid="1" pindex="0">${meshXML(cutter)}</object>`); items.push('<item objectid="2"/>');
  if (stamp) { objs.push(`<object id="3" name="Stempel" type="model" pid="1" pindex="1">${meshXML(stamp)}</object>`); items.push('<item objectid="3"/>'); }
  const model = `<?xml version="1.0" encoding="UTF-8"?>
<model unit="millimeter" xml:lang="nl-NL" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02">
<metadata name="Title">${esc(name)}</metadata>
<metadata name="Application">Tech demo 19 - Koekjesvormenmaker</metadata>
<resources>
<basematerials id="1"><base name="Uitsteker" displaycolor="#E8A33CFF"/><base name="Stempel" displaycolor="#F3D9A4FF"/></basematerials>
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
