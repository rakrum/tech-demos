// papercraft.js · kern van demo 15 (papercraft-vouwer). Geen DOM, geen three.js: werkt ook in Node.
// Eigen implementatie, geïnspireerd door Papercraft van rodrigorc (https://github.com/rodrigorc/papercraft, GPL-3).
// Alle 2D-maten zijn in millimeter, y omhoog (wiskundig); bij SVG-export wordt y omgedraaid.

export const SHEETS = {
  a4: { w: 210, h: 297, naam: 'A4 (210 × 297 mm)' },
  a3: { w: 297, h: 420, naam: 'A3 (297 × 420 mm)' },
  c1: { w: 305, h: 305, naam: 'C1-mat (305 × 305 mm)' },
  c1lang: { w: 305, h: 610, naam: 'C1 lange mat (305 × 610 mm)' },
};
export const MAX_FACES_WARN = 300;
export const MAX_TRIS = 20000;

// ---------- kleine vectorhulp ----------
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add3 = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const len = (a) => Math.hypot(a[0], a[1], a[2]);
const scl = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const norm = (a) => { const l = len(a) || 1; return scl(a, 1 / l); };
const d2 = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
const cr2 = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);

export function mulberry32(seed) {
  let a = (seed >>> 0) || 0x9e3779b9;
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// ---------- mesh opbouwen ----------
// soup: platte array met 9 getallen per driehoek; colors: per driehoek '#rrggbb' of null.
export function buildMesh(soup, colors = []) {
  const T0 = soup.length / 9;
  let mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < soup.length; i += 3) for (let k = 0; k < 3; k++) { mn[k] = Math.min(mn[k], soup[i + k]); mx[k] = Math.max(mx[k], soup[i + k]); }
  const diag = len(sub(mx, mn)) || 1, q = diag * 1e-6;
  const map = new Map(), verts = [], tris = [], tcol = [];
  const vid = (x, y, z) => { const k = Math.round(x / q) + ',' + Math.round(y / q) + ',' + Math.round(z / q); let i = map.get(k); if (i === undefined) { i = verts.length; verts.push([x, y, z]); map.set(k, i); } return i; };
  const seen = new Set();
  for (let t = 0; t < T0; t++) {
    const o = t * 9;
    const a = vid(soup[o], soup[o + 1], soup[o + 2]), b = vid(soup[o + 3], soup[o + 4], soup[o + 5]), c = vid(soup[o + 6], soup[o + 7], soup[o + 8]);
    if (a === b || b === c || a === c) continue;
    const area = len(cross(sub(verts[b], verts[a]), sub(verts[c], verts[a])));
    if (area < diag * diag * 1e-12) continue;
    const key = [a, b, c].sort((x, y) => x - y).join('_'); if (seen.has(key)) continue; seen.add(key);
    tris.push([a, b, c]); tcol.push(colors[t] || null);
  }
  // binnenstebuiten? (negatief volume) -> omdraaien
  let vol = 0; for (const [a, b, c] of tris) vol += dot(verts[a], cross(verts[b], verts[c]));
  if (vol < 0) for (const t of tris) { const x = t[1]; t[1] = t[2]; t[2] = x; }
  return { verts, tris, colors: tcol, bbox: { min: mn, max: mx, size: sub(mx, mn) } };
}

export function scaleMesh(mesh, targetMm) {
  const s = targetMm / Math.max(...mesh.bbox.size, 1e-12), c = mesh.bbox.min;
  const verts = mesh.verts.map((v) => scl(sub(v, c), s));
  return { ...mesh, verts, bbox: { min: [0, 0, 0], max: scl(mesh.bbox.size, s), size: scl(mesh.bbox.size, s) }, scale: s };
}

// ---------- vlakken: coplanaire driehoeken samenvoegen ----------
export function buildFaces(mesh, tolDeg = 1) {
  const { verts, tris, colors } = mesh, T = tris.length;
  const tn = [], ta = [];
  for (const [a, b, c] of tris) { const n = cross(sub(verts[b], verts[a]), sub(verts[c], verts[a])); ta.push(len(n) / 2); tn.push(norm(n)); }
  // randen -> buurdriehoeken
  const em = new Map(); let nonManifold = 0;
  tris.forEach((t, ti) => { for (let i = 0; i < 3; i++) { const a = t[i], b = t[(i + 1) % 3]; const k = a < b ? a + '_' + b : b + '_' + a; let l = em.get(k); if (!l) em.set(k, (l = [])); l.push({ ti, i, a, b }); } });
  const nbr = tris.map(() => [-1, -1, -1]);
  for (const l of em.values()) {
    if (l.length === 2 && l[0].a === l[1].b && l[0].b === l[1].a) { nbr[l[0].ti][l[0].i] = l[1].ti; nbr[l[1].ti][l[1].i] = l[0].ti; }
    else if (l.length !== 1) nonManifold++;
  }
  let openEdges = 0; for (const l of em.values()) if (l.length === 1) openEdges++;
  const cosTol = Math.cos(tolDeg * Math.PI / 180);
  const region = new Int32Array(T).fill(-1);
  const order = [...Array(T).keys()].sort((x, y) => ta[y] - ta[x]);
  const regions = [];
  for (const seed of order) {
    if (region[seed] >= 0) continue;
    const r = regions.length, list = [seed], vc = new Map();
    region[seed] = r; for (const v of tris[seed]) vc.set(v, 1);
    const n0 = tn[seed], col = colors[seed];
    for (let qi = 0; qi < list.length; qi++) {
      const t = list[qi];
      for (let i = 0; i < 3; i++) {
        const u = nbr[t][i]; if (u < 0 || region[u] >= 0) continue;
        if (dot(tn[u], n0) < cosTol || colors[u] !== col) continue;
        // schijf blijven: geen gat of knijppunt maken
        let k = 0; for (let j = 0; j < 3; j++) { const w = nbr[u][j]; if (w >= 0 && region[w] === r) k++; }
        if (k === 1) {
          let opp = -1; for (let j = 0; j < 3; j++) { const w = nbr[u][j]; if (w >= 0 && region[w] === r) opp = tris[u][(j + 2) % 3]; }
          if (vc.has(opp)) continue;
        }
        region[u] = r; list.push(u); for (const v of tris[u]) vc.set(v, 1);
      }
    }
    regions.push(list);
  }
  // per gebied de buitenrand als één lus
  const faces = [];
  const mkFace = (list) => {
    const r = region[list[0]], he = new Map();
    for (const t of list) for (let i = 0; i < 3; i++) {
      const u = nbr[t][i]; if (u >= 0 && region[u] === r) continue;
      const a = tris[t][i], b = tris[t][(i + 1) % 3];
      if (he.has(a)) return null; he.set(a, { a, b, nt: u });
    }
    const loop = []; let cur = he.keys().next().value;
    for (let guard = 0; guard <= he.size; guard++) { const h = he.get(cur); if (!h) return null; loop.push(h); cur = h.b; if (cur === loop[0].a) break; }
    if (loop.length !== he.size) return null;
    return loop;
  };
  const faceOfTri = new Int32Array(T).fill(-1);
  const raw = [];
  for (const list of regions) {
    let loop = mkFace(list);
    if (!loop) { // val terug op losse driehoeken
      for (const t of list) { const id = raw.length; raw.push({ tris: [t], loop: null }); faceOfTri[t] = id; }
      continue;
    }
    const id = raw.length; raw.push({ tris: list, loop }); for (const t of list) faceOfTri[t] = id;
  }
  for (const f of raw) if (!f.loop) { const t = f.tris[0]; f.loop = [0, 1, 2].map((i) => ({ a: tris[t][i], b: tris[t][(i + 1) % 3], nt: nbr[t][i] })); }
  // randen samenvoegen: zelfde buurvlak en op één lijn
  raw.forEach((f, fi) => {
    const L = f.loop.map((h) => ({ ...h, nf: h.nt >= 0 ? faceOfTri[h.nt] : -1, dir: norm(sub(verts[h.b], verts[h.a])) }));
    const same = (p, q) => p.nf === q.nf && dot(p.dir, q.dir) > 0.99995;
    let s = 0; while (s < L.length && same(L[(s - 1 + L.length) % L.length], L[s])) s++;
    if (s === L.length) s = 0;
    const R = [...L.slice(s), ...L.slice(0, s)], edges = [];
    for (const h of R) { const last = edges[edges.length - 1]; if (last && same(last.h, h)) { last.b = h.b; } else edges.push({ a: h.a, b: h.b, nf: h.nf, h }); }
    // normaal (oppervlakte-gewogen), middelpunt, binnenpunt
    let n = [0, 0, 0], area = 0, big = f.tris[0];
    for (const t of f.tris) { n = add3(n, scl(tn[t], ta[t])); area += ta[t]; if (ta[t] > ta[big]) big = t; }
    n = norm(n);
    const [x, y, z] = tris[big].map((v) => verts[v]);
    const ip3 = scl(add3(add3(x, y), z), 1 / 3);
    const o = verts[edges[0].a];
    let u = sub(verts[edges[0].b], o); u = norm(sub(u, scl(n, dot(u, n)))); const v = cross(n, u);
    const loc = (p) => { const d = sub(p, o); return [dot(d, u), dot(d, v)]; };
    faces.push({ id: fi, verts: edges.map((e) => e.a), edges: edges.map((e) => ({ a: e.a, b: e.b, nf: e.nf, pf: -1, pe: -1 })), normal: n, area, color: colors[f.tris[0]] || null, tris: f.tris, ip3, local: edges.map((e) => loc(verts[e.a])), ipLocal: loc(ip3) });
  });
  // partnerranden koppelen
  const ek = new Map(); faces.forEach((f, fi) => f.edges.forEach((e, ei) => ek.set(e.a + '_' + e.b, [fi, ei])));
  for (const f of faces) for (const e of f.edges) {
    const p = ek.get(e.b + '_' + e.a);
    if (p && e.nf >= 0 && p[0] === e.nf) { e.pf = p[0]; e.pe = p[1]; } else { e.pf = -1; e.pe = -1; }
  }
  // vouwhoek en berg/dal per gekoppelde rand
  for (const f of faces) for (const e of f.edges) {
    e.len = len(sub(verts[e.b], verts[e.a]));
    if (e.pf < 0) continue;
    const g = faces[e.pf];
    e.angle = Math.acos(Math.max(-1, Math.min(1, dot(f.normal, g.normal)))) * 180 / Math.PI;
    e.convex = dot(f.normal, sub(g.ip3, verts[e.a])) < 0; // bolle rand = bergvouw (gezien vanaf de bedrukte buitenkant)
  }
  const hasColor = faces.some((f) => f.color);
  return { faces, verts, nonManifold, openEdges, triCount: T, hasColor };
}

// ---------- 2D-geometrie ----------
function bbox2(pts) { let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity; for (const p of pts) { if (p[0] < x0) x0 = p[0]; if (p[1] < y0) y0 = p[1]; if (p[0] > x1) x1 = p[0]; if (p[1] > y1) y1 = p[1]; } return [x0, y0, x1, y1]; }
function pointInPoly(p, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i], b = poly[j];
    if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < (b[0] - a[0]) * (p[1] - a[1]) / (b[1] - a[1]) + a[0]) inside = !inside;
  }
  return inside;
}
const EPS = 1e-4; // mm
function segCross(a, b, c, d) {
  const lab = d2(a, b), lcd = d2(c, d); if (lab < EPS || lcd < EPS) return false;
  const o1 = cr2(a, b, c) / lab, o2 = cr2(a, b, d) / lab, o3 = cr2(c, d, a) / lcd, o4 = cr2(c, d, b) / lcd;
  return ((o1 > EPS && o2 < -EPS) || (o1 < -EPS && o2 > EPS)) && ((o3 > EPS && o4 < -EPS) || (o3 < -EPS && o4 > EPS));
}
export function polysOverlap(A, B) {
  const ba = A.bb || bbox2(A.pts), bb = B.bb || bbox2(B.pts);
  if (ba[2] < bb[0] + EPS || bb[2] < ba[0] + EPS || ba[3] < bb[1] + EPS || bb[3] < ba[1] + EPS) return false;
  const P = A.pts, Q = B.pts;
  for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length]; for (let j = 0; j < Q.length; j++) if (segCross(a, b, Q[j], Q[(j + 1) % Q.length])) return true; }
  return pointInPoly(A.ip, Q) || pointInPoly(B.ip, P);
}
function interiorAngle(pts, k) {
  const n = pts.length, p = pts[(k - 1 + n) % n], c = pts[k], q = pts[(k + 1) % n];
  const a1 = [q[0] - c[0], q[1] - c[1]], a2 = [p[0] - c[0], p[1] - c[1]];
  let ang = Math.atan2(a1[0] * a2[1] - a1[1] * a2[0], a1[0] * a2[0] + a1[1] * a2[1]);
  if (ang < 0) ang += 2 * Math.PI; return ang;
}

// ---------- uitvouwen ----------
// opts: { seed, sheet:{w,h}, margin, tab }
export function unfold(model, opts = {}) {
  const { faces } = model, F = faces.length;
  const seed = opts.seed || 0, rnd = mulberry32(seed * 7919 + 13);
  const W = (opts.sheet?.w ?? 1e9) - 2 * (opts.margin ?? 0), H = (opts.sheet?.h ?? 1e9) - 2 * (opts.margin ?? 0);
  const pad = opts.pad ?? ((opts.tab ?? 0) + 1);
  const fits = (bb) => { const w = bb[2] - bb[0] + pad, h = bb[3] - bb[1] + pad; return (w <= W && h <= H) || (w <= H && h <= W); };
  const placed = new Array(F).fill(null), islands = [];
  const weight = faces.map((f) => f.edges.map((e) => e.len * (seed ? 0.35 + rnd() : 1)));
  const unplacedOrder = [...Array(F).keys()].sort((a, b) => faces[b].area - faces[a].area);
  if (seed) for (let i = unplacedOrder.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [unplacedOrder[i], unplacedOrder[j]] = [unplacedOrder[j], unplacedOrder[i]]; }
  let tooBigFaces = 0;
  for (const root of unplacedOrder) {
    if (placed[root]) continue;
    const isl = { id: islands.length, faces: [], folds: [] };
    const put = (fi, pts, ip) => { const P = { fi, pts, ip, bb: bbox2(pts), island: isl.id }; placed[fi] = P; isl.faces.push(P); isl.bb = isl.bb ? [Math.min(isl.bb[0], P.bb[0]), Math.min(isl.bb[1], P.bb[1]), Math.max(isl.bb[2], P.bb[2]), Math.max(isl.bb[3], P.bb[3])] : P.bb.slice(); };
    put(root, faces[root].local.map((p) => p.slice()), faces[root].ipLocal.slice());
    if (!fits(isl.bb)) tooBigFaces++;
    const cand = [];
    const pushEdges = (fi) => faces[fi].edges.forEach((e, ei) => { if (e.pf >= 0 && !placed[e.pf]) cand.push({ fi, ei, w: weight[fi][ei] }); });
    pushEdges(root);
    while (cand.length) {
      let bi = 0; for (let i = 1; i < cand.length; i++) if (cand[i].w > cand[bi].w) bi = i;
      const c = cand[bi]; cand[bi] = cand[cand.length - 1]; cand.pop();
      const e = faces[c.fi].edges[c.ei], gi = e.pf; if (placed[gi]) continue;
      const par = placed[c.fi], n = faces[c.fi].edges.length;
      const A = par.pts[c.ei], B = par.pts[(c.ei + 1) % n];
      const g = faces[gi], m = g.edges.length;
      const La = g.local[(e.pe + 1) % m], Lb = g.local[e.pe]; // in g loopt de rand van b naar a
      const th = Math.atan2(B[1] - A[1], B[0] - A[0]) - Math.atan2(Lb[1] - La[1], Lb[0] - La[0]);
      const cs = Math.cos(th), sn = Math.sin(th);
      const tr = (p) => { const x = p[0] - La[0], y = p[1] - La[1]; return [A[0] + cs * x - sn * y, A[1] + sn * x + cs * y]; };
      const cand2 = { pts: g.local.map(tr), ip: tr(g.ipLocal) }; cand2.bb = bbox2(cand2.pts);
      let ok = true;
      for (const P of isl.faces) if (polysOverlap(cand2, P)) { ok = false; break; }
      if (ok) { const nb = [Math.min(isl.bb[0], cand2.bb[0]), Math.min(isl.bb[1], cand2.bb[1]), Math.max(isl.bb[2], cand2.bb[2]), Math.max(isl.bb[3], cand2.bb[3])]; if (!fits(nb)) ok = false; }
      if (!ok) continue;
      put(gi, cand2.pts, cand2.ip);
      isl.folds.push({ f: c.fi, e: c.ei, g: gi, ge: e.pe });
      pushEdges(gi);
    }
    islands.push(isl);
  }
  const foldSet = new Set(); for (const isl of islands) for (const fd of isl.folds) { foldSet.add(fd.f + ':' + fd.e); foldSet.add(fd.g + ':' + fd.ge); }
  return { placed, islands, foldSet, tooBigFaces, seed };
}

// ---------- lijmlipjes en naden ----------
export function addTabs(model, U, opts = {}) {
  const { faces } = model, tabH = opts.tab ?? 6;
  const seams = []; // {num, sides:[{f,e},{f,e}], tabSide}
  const tabsByIsland = U.islands.map(() => []);
  let noTab = 0;
  const done = new Set();
  const tryTab = (f, e, h) => {
    const P = U.placed[f], n = faces[f].edges.length, ed = faces[f].edges[e];
    const p = P.pts[e], q = P.pts[(e + 1) % n], L = d2(p, q);
    const d = [(q[0] - p[0]) / L, (q[1] - p[1]) / L], out = [d[1], -d[0]];
    // hoek van het lipje: niet scherper dan het vlak waar hij onder valt
    const g = faces[ed.pf], m = g.edges.length;
    const angAt = (k) => Math.max(10, Math.min(45, interiorAngle(g.local, k) * 180 / Math.PI - 5)) * Math.PI / 180;
    const aP = angAt((ed.pe + 1) % m), aQ = angAt(ed.pe);
    let hh = h; const k = 1 / Math.tan(aP) + 1 / Math.tan(aQ);
    if (hh * k > 0.85 * L) hh = 0.85 * L / k;
    if (hh < 1.2) return null;
    const sP = hh / Math.tan(aP), sQ = hh / Math.tan(aQ);
    const t1 = [p[0] + out[0] * hh + d[0] * sP, p[1] + out[1] * hh + d[1] * sP], t2 = [q[0] + out[0] * hh - d[0] * sQ, q[1] + out[1] * hh - d[1] * sQ];
    const poly = { pts: [p, t1, t2, q], ip: [(p[0] + q[0]) / 2 + out[0] * hh / 2, (p[1] + q[1]) / 2 + out[1] * hh / 2], f, e, h: hh };
    poly.bb = bbox2(poly.pts);
    const isl = U.islands[P.island];
    for (const F2 of isl.faces) if (F2.fi !== f && polysOverlap(poly, F2)) return null;
    for (const t of tabsByIsland[P.island]) if (polysOverlap(poly, t)) return null;
    return poly;
  };
  let num = 0;
  faces.forEach((f, fi) => f.edges.forEach((e, ei) => {
    if (e.pf < 0 || U.foldSet.has(fi + ':' + ei)) return;
    const key = Math.min(e.a, e.b) + '_' + Math.max(e.a, e.b) + '_' + Math.min(fi, e.pf); if (done.has(key)) return; done.add(key);
    const s = { num: ++num, sides: [{ f: fi, e: ei }, { f: e.pf, e: e.pe }], tab: null };
    if (tabH > 0) {
      const order = faces[fi].area <= faces[e.pf].area ? [0, 1] : [1, 0];
      for (const h of [tabH, tabH * 0.6, tabH * 0.35]) { for (const si of order) { const t = tryTab(s.sides[si].f, s.sides[si].e, h); if (t) { s.tab = t; s.tabSide = si; break; } } if (s.tab) break; }
      if (s.tab) tabsByIsland[U.placed[s.tab.f].island].push(s.tab); else noTab++;
    }
    seams.push(s);
  }));
  return { seams, tabsByIsland, noTab };
}

// ---------- inpakken op vellen ----------
function hull(pts) {
  const P = pts.map((p) => p.slice()).sort((a, b) => a[0] - b[0] || a[1] - b[1]); if (P.length < 3) return P;
  const lo = [], up = [];
  for (const p of P) { while (lo.length >= 2 && cr2(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); }
  for (let i = P.length - 1; i >= 0; i--) { const p = P[i]; while (up.length >= 2 && cr2(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop(); up.push(p); }
  return lo.slice(0, -1).concat(up.slice(0, -1));
}
export function pack(U, T, opts) {
  const sheet = opts.sheet, m = opts.margin ?? 10, gap = opts.gap ?? 4;
  const W = sheet.w - 2 * m, H = sheet.h - 2 * m;
  const orient = (hl, a) => { const c = Math.cos(a), s = Math.sin(a), bb = bbox2(hl.map((p) => [c * p[0] - s * p[1], s * p[0] + c * p[1]])); return { a, bb, w: bb[2] - bb[0], h: bb[3] - bb[1] }; };
  const items = U.islands.map((isl, ii) => {
    const pts = []; for (const P of isl.faces) pts.push(...P.pts); for (const t of T.tabsByIsland[ii]) pts.push(...t.pts);
    const hl = hull(pts); let best = null;
    const angs = [0]; for (let i = 0; i < hl.length; i++) { const a = hl[i], b = hl[(i + 1) % hl.length]; angs.push(-Math.atan2(b[1] - a[1], b[0] - a[0])); }
    for (const a of angs) { const o = orient(hl, a), fit = (o.w <= W + 1e-6 && o.h <= H + 1e-6) || (o.h <= W + 1e-6 && o.w <= H + 1e-6); const score = (fit ? 0 : 1e12) + o.w * o.h; if (!best || score < best.score - 1e-9) best = { ...o, fit, score }; }
    return { ii, hl, best, alt: orient(hl, best.a + Math.PI / 2), area: best.w * best.h };
  });
  items.sort((a, b) => b.area - a.area);
  // MaxRects (best short side fit), met draaien over 90°
  const sheets = [];
  const newSheet = () => { const s = { free: [{ x: 0, y: 0, w: W + gap, h: H + gap }], items: [] }; sheets.push(s); return s; };
  const findPos = (s, it) => {
    let best = null;
    for (const o of [it.best, it.alt]) { const w = o.w + gap, h = o.h + gap; for (const r of s.free) if (w <= r.w + 1e-6 && h <= r.h + 1e-6) { const sc = Math.min(r.w - w, r.h - h); if (!best || sc < best.sc || (sc === best.sc && r.y < best.y)) best = { sc, x: r.x, y: r.y, o, w, h }; } }
    return best;
  };
  const occupy = (s, p) => {
    const nf = [];
    for (const r of s.free) {
      if (p.x >= r.x + r.w || p.x + p.w <= r.x || p.y >= r.y + r.h || p.y + p.h <= r.y) { nf.push(r); continue; }
      if (p.x > r.x) nf.push({ x: r.x, y: r.y, w: p.x - r.x, h: r.h });
      if (p.x + p.w < r.x + r.w) nf.push({ x: p.x + p.w, y: r.y, w: r.x + r.w - p.x - p.w, h: r.h });
      if (p.y > r.y) nf.push({ x: r.x, y: r.y, w: r.w, h: p.y - r.y });
      if (p.y + p.h < r.y + r.h) nf.push({ x: r.x, y: p.y + p.h, w: r.w, h: r.y + r.h - p.y - p.h });
    }
    s.free = nf.filter((r, i) => r.w > 1e-6 && r.h > 1e-6 && !nf.some((q, j) => j !== i && q.x <= r.x + 1e-9 && q.y <= r.y + 1e-9 && q.x + q.w >= r.x + r.w - 1e-9 && q.y + q.h >= r.y + r.h - 1e-9 && (j < i || !(r.x <= q.x + 1e-9 && r.y <= q.y + 1e-9 && r.x + r.w >= q.x + q.w - 1e-9 && r.y + r.h >= q.y + q.h - 1e-9))));
  };
  let overflow = 0;
  for (const it of items) {
    if (!it.best.fit) { const s = newSheet(); s.free = []; s.items.push({ ii: it.ii, o: it.best, x: 0, y: 0, over: true }); overflow++; continue; }
    let p = null, s = null;
    for (const sh of sheets) { p = findPos(sh, it); if (p) { s = sh; break; } }
    if (!p) { s = newSheet(); p = findPos(s, it); }
    s.items.push({ ii: it.ii, o: p.o, x: p.x, y: p.y }); occupy(s, p);
  }
  // transformatie per eiland naar velcoördinaten (wiskundig, y omhoog; we vullen het vel van boven af)
  const place = new Array(U.islands.length);
  sheets.forEach((s, si) => s.items.forEach((it) => {
    const c = Math.cos(it.o.a), sn = Math.sin(it.o.a), bb = it.o.bb;
    const tf = (p) => { const x = c * p[0] - sn * p[1], y = sn * p[0] + c * p[1]; return [m + it.x + (x - bb[0]), sheet.h - m - it.y - (bb[3] - y)]; };
    place[it.ii] = { sheet: si, tf, rot: it.o.a, over: !!it.over };
  }));
  return { sheets: sheets.map((s, i) => ({ index: i, w: sheet.w, h: sheet.h, islands: s.items.map((it) => it.ii) })), place, overflow };
}

// ---------- tekening per vel ----------
// stroke-lettertype voor cijfers (raster 4 breed, 6 hoog, y omlaag)
const DIG = {
  0: [[[1, 0], [3, 0], [4, 1], [4, 5], [3, 6], [1, 6], [0, 5], [0, 1], [1, 0]]],
  1: [[[1, 1], [2, 0], [2, 6]], [[1, 6], [3, 6]]],
  2: [[[0, 1], [1, 0], [3, 0], [4, 1], [4, 2], [0, 6], [4, 6]]],
  3: [[[0, 0], [4, 0], [2, 2.5], [3, 2.5], [4, 3.5], [4, 5], [3, 6], [1, 6], [0, 5]]],
  4: [[[3, 6], [3, 0], [0, 4], [4, 4]]],
  5: [[[4, 0], [0, 0], [0, 2.5], [3, 2.5], [4, 3.5], [4, 5], [3, 6], [0, 6]]],
  6: [[[3, 0], [1, 0], [0, 1], [0, 5], [1, 6], [3, 6], [4, 5], [4, 3.5], [3, 2.5], [0, 2.5]]],
  7: [[[0, 0], [4, 0], [1.5, 6]]],
  8: [[[3, 3], [1, 3], [0, 4], [0, 5], [1, 6], [3, 6], [4, 5], [4, 4], [3, 3], [4, 2], [4, 1], [3, 0], [1, 0], [0, 1], [0, 2], [1, 3]]],
  9: [[[4, 3.5], [1, 3.5], [0, 2.5], [0, 1], [1, 0], [3, 0], [4, 1], [4, 5], [3, 6], [1, 6]]],
};
export function textStrokes(str, origin, d, n, h) {
  const s = h / 6, out = [];
  [...str].forEach((ch, i) => { for (const pl of DIG[ch] || []) out.push(pl.map(([gx, gy]) => { const x = (gx + i * 5.5) * s, y = (6 - gy) * s; return [origin[0] + d[0] * x + n[0] * y, origin[1] + d[1] * x + n[1] * y]; })); });
  const w = (str.length * 5.5 - 1.5) * s; // streepje eronder: zo zie je wat onder is (6 of 9)
  out.push([[origin[0] - n[0] * s, origin[1] - n[1] * s], [origin[0] + d[0] * w - n[0] * s, origin[1] + d[1] * w - n[1] * s]]);
  return out;
}

export function layout(model, opts = {}) {
  const sheet = typeof opts.sheet === 'string' ? SHEETS[opts.sheet] : (opts.sheet || SHEETS.a4);
  const o = { margin: 10, tab: 6, seed: 0, textH: 3, ...opts, sheet };
  let best = null;
  const tries = Math.max(1, o.tries || 1);
  for (let i = 0; i < tries; i++) for (const pad of [o.tab + 1, 2 * o.tab + 2]) {
    const oo = { ...o, seed: o.seed + i, pad };
    const U = unfold(model, oo), T = addTabs(model, U, oo), K = pack(U, T, oo);
    const score = K.overflow * 1e9 + K.sheets.length * 1e6 + U.islands.length * 1e3 + T.noTab;
    if (!best || score < best.score) best = { U, T, K, score, seed: oo.seed };
    if (!K.overflow) break; // grotere marge alleen als het niet paste
  }
  const { U, T, K } = best; o.usedSeed = best.seed;
  const { faces } = model;
  const sheets = K.sheets.map((s) => ({ ...s, cut: [], score: [], text: [], color: [], tabs: [] }));
  const tfF = (fi) => K.place[U.placed[fi].island].tf;
  const shF = (fi) => sheets[K.place[U.placed[fi].island].sheet];
  // vlakken (kleur) en lijnen
  const tabOf = new Map(); for (const s of T.seams) if (s.tab) tabOf.set(s.tab.f + ':' + s.tab.e, s);
  faces.forEach((f, fi) => {
    const P = U.placed[fi], tf = tfF(fi), S = shF(fi), n = f.edges.length;
    const pts = P.pts.map(tf);
    S.color.push({ pts, fill: f.color, fi });
    f.edges.forEach((e, ei) => {
      const a = pts[ei], b = pts[(ei + 1) % n];
      if (U.foldSet.has(fi + ':' + ei)) {
        // vouwlijn: één keer tekenen (vanaf het vlak met de laagste index)
        if (fi < e.pf && e.angle > 0.5) S.score.push({ seg: [a, b], type: e.convex ? 'berg' : 'dal' });
        return;
      }
      const s = tabOf.get(fi + ':' + ei);
      if (s) { const tp = s.tab.pts.map(tf); S.cut.push([tp[0], tp[1]], [tp[1], tp[2]], [tp[2], tp[3]]); S.score.push({ seg: [a, b], type: 'berg', tab: true }); S.tabs.push(tp); }
      else S.cut.push([a, b]);
    });
  });
  // naadnummers
  if (o.numbers !== false) for (const s of T.seams) for (const side of s.sides) {
    const f = faces[side.f], n = f.edges.length, tf = tfF(side.f), S = shF(side.f);
    const P = U.placed[side.f], a = tf(P.pts[side.e]), b = tf(P.pts[(side.e + 1) % n]), L = d2(a, b);
    // na tf is de vorm gedraaid, niet gespiegeld: het vlak ligt links van a->b
    const d = [(b[0] - a[0]) / L, (b[1] - a[1]) / L], nn = [-d[1], d[0]];
    const str = String(s.num), unitW = (str.length * 5.5 - 1.5) / 6;
    const h = Math.max(1.2, Math.min(o.textH, (0.6 * L) / unitW));
    const w = unitW * h, gapT = 0.6 + h / 6 * 1.5;
    const M = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const origin = [M[0] + nn[0] * gapT - d[0] * w / 2, M[1] + nn[1] * gapT - d[1] * w / 2];
    S.text.push(...textStrokes(str, origin, d, nn, h));
  }
  return { sheets, sheetSize: sheet, U, T, K, opts: o, stats: { seed: best.seed, faces: faces.length, islands: U.islands.length, sheets: sheets.length, seams: T.seams.length, noTab: T.noTab, overflow: K.overflow, tooBigFaces: U.tooBigFaces } };
}

// ---------- lijnstukken aaneenrijgen ----------
export function chain(segs) {
  const key = (p) => Math.round(p[0] * 1000) + ',' + Math.round(p[1] * 1000);
  const ends = new Map(), used = new Array(segs.length).fill(false);
  segs.forEach((s, i) => { for (const k of [key(s[0]), key(s[1])]) { if (!ends.has(k)) ends.set(k, []); ends.get(k).push(i); } });
  const out = [];
  for (let i = 0; i < segs.length; i++) {
    if (used[i]) continue; used[i] = true;
    const pl = [segs[i][0], segs[i][1]];
    for (const dir of [1, 0]) {
      for (;;) {
        const end = dir ? pl[pl.length - 1] : pl[0], k = key(end);
        const j = (ends.get(k) || []).find((x) => !used[x]); if (j === undefined) break;
        used[j] = true; const s = segs[j], nxt = key(s[0]) === k ? s[1] : s[0];
        if (dir) pl.push(nxt); else pl.unshift(nxt);
      }
    }
    out.push(pl);
  }
  return out;
}

// ---------- SVG ----------
const f3 = (x) => (Math.round(x * 1000) / 1000).toString();
export function sheetSVG(S, opts = {}) {
  const W = S.w, H = S.h, Y = (p) => f3(H - p[1]), X = (p) => f3(p[0]);
  const path = (pl) => { const closed = pl.length > 2 && d2(pl[0], pl[pl.length - 1]) < 1e-3; const pp = closed ? pl.slice(0, -1) : pl; return 'M' + pp.map((p) => X(p) + ' ' + Y(p)).join(' L') + (closed ? ' Z' : ''); };
  const pv = !!opts.preview, sw = pv ? 0.45 : 0.1;
  const L = (id, attrs, body) => `<g id="${id}" inkscape:groupmode="layer" inkscape:label="${id}" ${attrs}>${body}</g>\n`;
  let s = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="${W}mm" height="${H}mm" viewBox="0 0 ${W} ${H}">\n`;
  if (pv) s += `<rect x="0" y="0" width="${W}" height="${H}" fill="#fff" stroke="#9aa3c7" stroke-width="0.6"/><rect x="${opts.margin ?? 10}" y="${opts.margin ?? 10}" width="${W - 2 * (opts.margin ?? 10)}" height="${H - 2 * (opts.margin ?? 10)}" fill="none" stroke="#c9cfe6" stroke-width="0.4" stroke-dasharray="1 2"/>\n`;
  if (pv && !opts.color) s += `<g id="voorbeeld-vlakken" fill="#eef1fb" stroke="none">${S.color.map((c) => `<path d="${path([...c.pts, c.pts[0]])}"/>`).join('')}</g>\n`;
  if (opts.color) {
    const fill = (c) => (opts.override ? null : c) || opts.fill || '#dddddd';
    s += L('kleur', '', S.color.map((c) => `<path d="${path([...c.pts, c.pts[0]])}" fill="${fill(c.fill)}" stroke="${fill(c.fill)}" stroke-width="1" stroke-linejoin="round"/>`).join(''));
  }
  s += L('cut', `fill="none" stroke="#FF0000" stroke-width="${sw}" stroke-linejoin="round"`, chain(S.cut).map((pl) => `<path d="${path(pl)}"/>`).join(''));
  const berg = chain(S.score.filter((x) => x.type === 'berg').map((x) => x.seg)), dal = chain(S.score.filter((x) => x.type === 'dal').map((x) => x.seg));
  s += L('score', `fill="none" stroke="#0000FF" stroke-width="${sw}"`, `<g id="score-berg"${pv ? ' stroke-dasharray="3 1.5"' : ''}>${berg.map((pl) => `<path d="${path(pl)}"/>`).join('')}</g><g id="score-dal"${pv ? ' stroke-dasharray="3 1 0.6 1"' : ''}>${dal.map((pl) => `<path d="${path(pl)}"/>`).join('')}</g>`);
  if (opts.numbers !== false && S.text.length) s += L('tekst', `fill="none" stroke="#000000" stroke-width="${pv ? 0.3 : 0.1}" stroke-linecap="round" stroke-linejoin="round"`, S.text.map((pl) => `<path d="${path(pl)}"/>`).join(''));
  return s + '</svg>\n';
}

// ---------- DXF (R12, mm) ----------
export function sheetDXF(S, opts = {}) {
  const out = [];
  const g = (c, v) => out.push(String(c), String(v));
  g(0, 'SECTION'); g(2, 'HEADER'); g(9, '$ACADVER'); g(1, 'AC1009'); g(9, '$INSUNITS'); g(70, 4); g(9, '$EXTMIN'); g(10, 0); g(20, 0); g(30, 0); g(9, '$EXTMAX'); g(10, S.w); g(20, S.h); g(30, 0); g(0, 'ENDSEC');
  g(0, 'SECTION'); g(2, 'TABLES');
  g(0, 'TABLE'); g(2, 'LTYPE'); g(70, 1); g(0, 'LTYPE'); g(2, 'CONTINUOUS'); g(70, 0); g(3, 'Solid line'); g(72, 65); g(73, 0); g(40, 0); g(0, 'ENDTAB');
  const layers = [['CUT', 1], ['SCORE', 5], ['TEXT', 7]];
  g(0, 'TABLE'); g(2, 'LAYER'); g(70, layers.length); for (const [n, c] of layers) { g(0, 'LAYER'); g(2, n); g(70, 0); g(62, c); g(6, 'CONTINUOUS'); } g(0, 'ENDTAB');
  g(0, 'ENDSEC');
  g(0, 'SECTION'); g(2, 'ENTITIES');
  const poly = (layer, pl) => {
    const closed = pl.length > 2 && d2(pl[0], pl[pl.length - 1]) < 1e-3, pp = closed ? pl.slice(0, -1) : pl;
    g(0, 'POLYLINE'); g(8, layer); g(66, 1); g(10, 0); g(20, 0); g(30, 0); g(70, closed ? 1 : 0);
    for (const p of pp) { g(0, 'VERTEX'); g(8, layer); g(10, f3(p[0])); g(20, f3(p[1])); g(30, 0); }
    g(0, 'SEQEND'); g(8, layer);
  };
  for (const pl of chain(S.cut)) poly('CUT', pl);
  for (const pl of chain(S.score.map((x) => x.seg))) poly('SCORE', pl);
  if (opts.numbers !== false) for (const pl of S.text) poly('TEXT', pl);
  g(0, 'ENDSEC'); g(0, 'EOF');
  return out.join('\r\n') + '\r\n';
}

// ---------- ZIP (zonder compressie) ----------
const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
const crc32 = (u8) => { let c = 0xffffffff; for (let i = 0; i < u8.length; i++) c = CRC[(c ^ u8[i]) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
export function makeZip(files) { // files: [{name, data: string|Uint8Array}]
  const enc = new TextEncoder(), parts = [], central = []; let off = 0;
  for (const f of files) {
    const name = enc.encode(f.name), data = typeof f.data === 'string' ? enc.encode(f.data) : f.data, crc = crc32(data);
    const h = new DataView(new ArrayBuffer(30)); h.setUint32(0, 0x04034b50, true); h.setUint16(4, 20, true); h.setUint16(6, 0x0800, true); h.setUint16(8, 0, true); h.setUint16(10, 0, true); h.setUint16(12, 0x21, true); h.setUint32(14, crc, true); h.setUint32(18, data.length, true); h.setUint32(22, data.length, true); h.setUint16(26, name.length, true); h.setUint16(28, 0, true);
    parts.push(new Uint8Array(h.buffer), name, data);
    const c = new DataView(new ArrayBuffer(46)); c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x0800, true); c.setUint16(10, 0, true); c.setUint16(12, 0, true); c.setUint16(14, 0x21, true); c.setUint32(16, crc, true); c.setUint32(20, data.length, true); c.setUint32(24, data.length, true); c.setUint16(28, name.length, true); c.setUint32(42, off, true);
    central.push(new Uint8Array(c.buffer), name);
    off += 30 + name.length + data.length;
  }
  const csize = central.reduce((s, x) => s + x.length, 0);
  const e = new DataView(new ArrayBuffer(22)); e.setUint32(0, 0x06054b50, true); e.setUint16(8, files.length, true); e.setUint16(10, files.length, true); e.setUint32(12, csize, true); e.setUint32(16, off, true);
  const all = [...parts, ...central, new Uint8Array(e.buffer)], total = all.reduce((s, x) => s + x.length, 0), out = new Uint8Array(total); let p = 0; for (const x of all) { out.set(x, p); p += x.length; }
  return out;
}

// ---------- voorbeelden (in code gemaakt) ----------
function soupFromPolys(polys, center) { // polys: [{pts:[[x,y,z]...], color}], naar buiten gericht t.o.v. center
  const soup = [], colors = [];
  for (const { pts, color } of polys) {
    let n = [0, 0, 0]; for (let i = 1; i + 1 < pts.length; i++) n = add3(n, cross(sub(pts[i], pts[0]), sub(pts[i + 1], pts[0])));
    const c = scl(pts.reduce((s, p) => add3(s, p), [0, 0, 0]), 1 / pts.length);
    const P = dot(n, sub(c, center)) < 0 ? [...pts].reverse() : pts;
    for (let i = 1; i + 1 < P.length; i++) { soup.push(...P[0], ...P[i], ...P[i + 1]); colors.push(color); }
  }
  return { soup, colors };
}
function lathe(profile, N, colorOf) {
  const soup = [], colors = [], V = (j, k) => { const [r, z] = profile[j], a = (k / N) * 2 * Math.PI + Math.PI / N; return [r * Math.cos(a), r * Math.sin(a), z]; };
  for (let j = 0; j + 1 < profile.length; j++) for (let k = 0; k < N; k++) {
    const A = V(j, k), B = V(j, k + 1), C = V(j + 1, k + 1), D = V(j + 1, k), col = colorOf(j);
    soup.push(...A, ...B, ...C, ...A, ...C, ...D); colors.push(col, col);
  }
  return { soup, colors };
}
export const EXAMPLES = {
  kubus: { naam: 'Kubus (test)', size: 60, make() { const P = (x, y, z) => [x, y, z], c = '#4f6bff'; const q = [[P(0, 0, 0), P(1, 0, 0), P(1, 1, 0), P(0, 1, 0)], [P(0, 0, 1), P(1, 0, 1), P(1, 1, 1), P(0, 1, 1)], [P(0, 0, 0), P(1, 0, 0), P(1, 0, 1), P(0, 0, 1)], [P(0, 1, 0), P(1, 1, 0), P(1, 1, 1), P(0, 1, 1)], [P(0, 0, 0), P(0, 1, 0), P(0, 1, 1), P(0, 0, 1)], [P(1, 0, 0), P(1, 1, 0), P(1, 1, 1), P(1, 0, 1)]]; return soupFromPolys(q.map((pts) => ({ pts, color: c })), [0.5, 0.5, 0.5]); } },
  ster: { naam: '3D-ster', size: 120, make() { const pts = []; for (let i = 0; i < 10; i++) { const r = i % 2 ? 20 : 50, a = Math.PI / 2 + i * Math.PI / 5; pts.push([r * Math.cos(a), r * Math.sin(a), 0]); } const T = [0, 0, 14], B = [0, 0, -14], polys = [], col = '#e8b923'; for (let i = 0; i < 10; i++) { polys.push({ pts: [T, pts[i], pts[(i + 1) % 10]], color: col }, { pts: [B, pts[(i + 1) % 10], pts[i]], color: col }); } return soupFromPolys(polys, [0, 0, 0]); } },
  boom: { naam: 'Kerstboom (low-poly)', size: 140, make() { const prof = [[0, 0], [9, 0], [9, 24], [42, 18], [16, 52], [34, 46], [12, 80], [26, 76], [0, 120]]; return lathe(prof, 8, (j) => (j < 2 ? '#8b5a2b' : '#2e8b57')); } },
  huis: { naam: 'Huisje', size: 90, make() { const pent = [[0, 0], [60, 0], [60, 40], [30, 62], [0, 40]], D = 48, wall = '#f2e3c6', roof = '#c0392b'; const at = (p, y) => [p[0], y, p[1]]; const polys = [{ pts: pent.map((p) => at(p, 0)), color: wall }, { pts: pent.map((p) => at(p, D)), color: wall }]; for (let i = 0; i < 5; i++) { const a = pent[i], b = pent[(i + 1) % 5]; polys.push({ pts: [at(a, 0), at(b, 0), at(b, D), at(a, D)], color: i === 2 || i === 3 ? roof : wall }); } return soupFromPolys(polys, [30, D / 2, 28]); } },
  bal: { naam: 'Kerstbal (icosaëder)', size: 80, make() { const t = (1 + Math.sqrt(5)) / 2, v = [[-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0], [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t], [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]]; const f = [[0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11], [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8], [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9], [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]]; return soupFromPolys(f.map((ix, i) => ({ pts: ix.map((k) => v[k]), color: i % 5 === 0 ? '#f4c430' : '#c62828' })), [0, 0, 0]); } },
};

// alles in één keer (handig voor tests): soup -> vellen
export function makeModel(soup, colors, { size = 100, tol = 1 } = {}) {
  const mesh = scaleMesh(buildMesh(soup, colors), size);
  const model = buildFaces(mesh, tol); model.mesh = mesh; return model;
}
