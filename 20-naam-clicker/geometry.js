// Naam-clicker: geometrie met Manifold (wasm). Werkt in de browser en in Node.
// Elke letter is een eigen toets op een MX-schakelaar; de voet heeft per toets een schakelaarvak.
// Eigen ontwerp. Alleen het idee (naam per toets, MX-schakelaar, letter in eigen kleur) komt van
// "Parametric Name Clicker Generator" (MakerWorld 2953074); daar is geen code of vorm van overgenomen.

export const DEFAULTS = {
  name: 'Sigviënnely',
  layout: 'cirkel',     // cirkel | hart | ster | krans | wolk | bloem | boog | regenboog | lijn | tweeregels | test
  orient: 'auto',       // auto | rechtop | meedraaien
  upper: false,
  capStyle: 'auto',     // auto | bol | schaal | vierkant
  key: 0,               // toetsmaat in mm; 0 = automatisch (rond 23, vierkant 19)
  spacing: 1.0,
  textH: 12,
  arc: 160,
  gap: 1,
  fill: true,           // dichte (verdiepte) middenplaat bij cirkel, hart en ster
  centerKey: true,
  rim: 2.5,
  floor: 1.6,
  fillet: 1.2,          // afronding bovenrand van de voet
  loop: true,
  stand: true,          // regenboog: losse standaard
  pushHole: false,
  label: 'verzonken',   // verzonken | gegraveerd
  inlay: 0.6,
  colors: 'gelijk',
  sw: 'mx', cut: 14.0, plateT: 1.5, holeTol: 0.1, stemTol: 0.15,
};

// MX-maten (Cherry): onderkant huis 5,0 mm onder plaat-bovenkant, pinnen 3,3 mm daaronder;
// bovenhuis 6,6 mm boven de plaat (voet ca. 14,6 mm breed), steeltop 10,2 mm, slag 4 mm.
export const SWITCHES = {
  mx: { name: 'MX (Cherry, Gateron, Outemu, Kailh Box, Akko)', below: 8.6, housTop: 6.6, stemTop: 10.2, travel: 4.0, cavity: 15.0 },
};

export const LAYOUTS = {
  cirkel: { name: 'Cirkel', closed: true, round: true, fill: 'verdiept' },
  hart: { name: 'Hart', closed: true, round: true, fill: 'verdiept' },
  ster: { name: 'Ster', closed: true, round: true, fill: 'vol' },
  krans: { name: 'Kerstkrans', closed: true, round: true, fill: null },
  wolk: { name: 'Wolk', closed: true, round: true, fill: 'vol' },
  bloem: { name: 'Bloem', closed: true, round: true, fill: 'vol' },
  boog: { name: 'Boog', closed: false, round: false },
  regenboog: { name: 'Regenboog', closed: false, round: false },
  lijn: { name: 'Eén regel', closed: false, round: false },
  tweeregels: { name: 'Twee regels', closed: false, round: false },
  test: { name: 'Passtest', closed: false, round: false },
};

const SEG = 96;
const segs = (r) => Math.max(48, Math.min(256, Math.ceil(2 * Math.PI * r / 0.45)));

// ---------- lettertype -> contouren ----------
function glyphContours(font, ch, size) {
  const g = font.charToGlyph(ch);
  if (!g || g.index === 0) return null;
  const path = g.getPath(0, 0, size);
  const out = []; let cur = null; let x0 = 0, y0 = 0;
  const push = (x, y) => cur.push([x, -y]);
  for (const c of path.commands) {
    if (c.type === 'M') { if (cur && cur.length > 2) out.push(cur); cur = []; push(c.x, c.y); x0 = c.x; y0 = c.y; }
    else if (c.type === 'L') { push(c.x, c.y); x0 = c.x; y0 = c.y; }
    else if (c.type === 'Q') { const n = 10; for (let i = 1; i <= n; i++) { const t = i / n, u = 1 - t; push(u * u * x0 + 2 * u * t * c.x1 + t * t * c.x, u * u * y0 + 2 * u * t * c.y1 + t * t * c.y); } x0 = c.x; y0 = c.y; }
    else if (c.type === 'C') { const n = 12; for (let i = 1; i <= n; i++) { const t = i / n, u = 1 - t; push(u * u * u * x0 + 3 * u * u * t * c.x1 + 3 * u * t * t * c.x2 + t * t * t * c.x, u * u * u * y0 + 3 * u * u * t * c.y1 + 3 * u * t * t * c.y2 + t * t * t * c.y); } x0 = c.x; y0 = c.y; }
    else if (c.type === 'Z') { if (cur && cur.length > 2) out.push(cur); cur = null; }
  }
  if (cur && cur.length > 2) out.push(cur);
  return out.map((p) => p.filter((v, i) => { const w = p[(i + 1) % p.length]; return Math.hypot(v[0] - w[0], v[1] - w[1]) > 1e-6; })).filter((p) => p.length > 2);
}
function bboxOf(cs) { let a = [1e9, 1e9], b = [-1e9, -1e9]; for (const p of cs) for (const [x, y] of p) { a = [Math.min(a[0], x), Math.min(a[1], y)]; b = [Math.max(b[0], x), Math.max(b[1], y)]; } return { min: a, max: b }; }

export function heartPts(k = 1, n = 240) {
  const p = []; for (let i = 0; i < n; i++) { const t = (i / n) * Math.PI * 2;
    p.push([k * 16 * Math.sin(t) ** 3, k * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))]); }
  return p.reverse();
}

export function splitName(name, upper) {
  let s = (name || '').normalize('NFC').trim(); if (upper) s = s.toLocaleUpperCase('nl-NL');
  return Array.from(s);
}

// ---------- gesloten middellijnen (met de klok mee, start bovenaan = plek van het oogje) ----------
// geven punten op eenheidsschaal; de schaal k groeit tot de toetsen elkaar niet raken
function starPolyRounded(p, ratio, n = 2400) {
  // ster met afgeronde punten: hoeken met cirkelboogjes afronden via een gladde "superformule"-achtige lus
  const V = []; for (let i = 0; i < 2 * p; i++) { const a = Math.PI / 2 - i * Math.PI / p; const r = i % 2 ? ratio : 1; V.push([r * Math.cos(a), r * Math.sin(a)]); }
  // Chaikin-afronding (5 keer) geeft gladde, ronde punten en binnenhoeken
  let P = V; for (let it = 0; it < 3; it++) { const Q = []; for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length]; Q.push([0.75 * a[0] + 0.25 * b[0], 0.75 * a[1] + 0.25 * b[1]], [0.25 * a[0] + 0.75 * b[0], 0.25 * a[1] + 0.75 * b[1]]); } P = Q; }
  // start precies op de bovenste punt laten beginnen
  let best = 0; for (let i = 0; i < P.length; i++) if (P[i][1] > P[best][1]) best = i;
  return [...P.slice(best), ...P.slice(0, best)];
}
function closedCurve(L, nChars) {
  const M = 2400; const pts = [];
  if (L === 'cirkel' || L === 'krans' || L === 'bloem') for (let i = 0; i < M; i++) { const t = i / M * 2 * Math.PI; pts.push([Math.sin(t), Math.cos(t)]); }
  else if (L === 'wolk') for (let i = 0; i < M; i++) { const t = i / M * 2 * Math.PI; pts.push([1.45 * Math.sin(t), Math.cos(t)]); }
  else if (L === 'hart') for (let i = 0; i < M; i++) { const t = i / M * 2 * Math.PI; pts.push([16 * Math.sin(t) ** 3 / 16, (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) / 16]); }
  else if (L === 'ster') { // scherpe ster: bij een even aantal plekken staat elke letter precies op een punt of binnenhoek
    const p = Math.max(5, Math.ceil(nChars / 2)), ratio = p >= 7 ? 0.62 : 0.5; const V = [];
    for (let i = 0; i < 2 * p; i++) { const a = Math.PI / 2 - i * Math.PI / p; const r = i % 2 ? ratio : 1; V.push([r * Math.cos(a), r * Math.sin(a)]); }
    return V; }
  return pts;
}
function curveSampler(base) {
  const M = base.length; const cum = [0];
  for (let i = 1; i <= M; i++) { const a = base[i - 1], b = base[i % M]; cum.push(cum[i - 1] + Math.hypot(b[0] - a[0], b[1] - a[1])); }
  const L = cum[M];
  const at = (s) => { s = ((s % L) + L) % L; let lo = 0, hi = M; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (cum[m] <= s) lo = m; else hi = m; }
    const a = base[lo], b = base[(lo + 1) % M]; const f = (s - cum[lo]) / ((cum[lo + 1] - cum[lo]) || 1); return [a[0] + f * (b[0] - a[0]), a[1] + f * (b[1] - a[1])]; };
  const normal = (s) => { const e = L / 400; const a = at(s - e), b = at(s + e); const T = [b[0] - a[0], b[1] - a[1]]; const l = Math.hypot(T[0], T[1]) || 1; return [-T[1] / l, T[0] / l]; };
  return { L, at, normal };
}

// ---------- indeling ----------
function layoutSlots(chars, o, round) {
  const p = o.key + o.spacing; const L = o.layout;
  const meedraaien = o.orient === 'meedraaien' || (o.orient === 'auto' && (L === 'boog' || L === 'regenboog'));
  const rotFor = (deg) => (meedraaien ? deg : 0);
  if (L === 'test') return { slots: [{ x: 0, y: 0, rot: 0, ch: chars.find((c) => c.trim()) || 'S' }], closed: false };
  if (L === 'lijn' || L === 'tweeregels') {
    let rows = [chars];
    if (L === 'tweeregels') {
      const cut = chars.findIndex((c) => c === '/' || c === '|');
      if (cut >= 0) rows = [chars.slice(0, cut), chars.slice(cut + 1)];
      else { const h = Math.ceil(chars.length / 2); rows = [chars.slice(0, h), chars.slice(h)]; }
      rows = rows.map((r) => { while (r.length && !r[0].trim()) r.shift(); while (r.length && !r[r.length - 1].trim()) r.pop(); return r; });
    }
    const slots = []; const rowSlots = [];
    rows.forEach((r, j) => { const y = (rows.length - 1) * p / 2 - j * p; const rs = []; r.forEach((c, i) => { const s = { x: (i - (r.length - 1) / 2) * p, y, rot: 0, ch: c.trim() ? c : null }; slots.push(s); rs.push(s); }); rowSlots.push(rs); });
    return { slots, closed: false, rows: rowSlots };
  }
  if (L === 'boog' || L === 'regenboog') {
    const A = L === 'regenboog' ? 180 : o.arc; const n = chars.length;
    const make = (R) => chars.map((c, i) => { const phi = -A / 2 + (i + 0.5) * A / n; const a = phi * Math.PI / 180;
      return { x: R * Math.sin(a), y: R * Math.cos(a), rot: rotFor(-phi), ch: c.trim() ? c : null }; });
    return { make, start: n * p / (A * Math.PI / 180), closed: false, arc: A, grow: true };
  }
  // gesloten vormen
  let g = o.gap; if (o.loop) g = Math.max(1, g); if (L === 'hart' && o.loop) g = Math.max(2, g);
  let N = chars.length + g;
  if (L === 'ster' && N % 2) { g++; N++; } // letters precies op de punten en binnenhoeken
  const C = curveSampler(closedCurve(L, N));
  const make = (k) => chars.map((c, i) => { const s = (i + (g + 1) / 2) / N * C.L; const P = C.at(s); const n = C.normal(s);
    return { x: P[0] * k, y: P[1] * k, rot: rotFor(Math.atan2(-n[0], n[1]) * 180 / Math.PI), ch: c.trim() ? c : null }; });
  // middellijn als polygoon op schaal k
  const curve = (k) => { const out = []; const M = 720; for (let i = 0; i < M; i++) { const P = C.at(i / M * C.L); out.push([P[0] * k, P[1] * k]); } return out; };
  const gap = (k) => { const P = C.at(0); return { pos: [P[0] * k, P[1] * k], dir: C.normal(0) }; };
  let sharp = null;
  if (L === 'ster') { const pp = Math.max(5, Math.ceil(N / 2)), ratio = pp >= 7 ? 0.62 : 0.5; const V = [];
    for (let i = 0; i < 2 * pp; i++) { const a = Math.PI / 2 - i * Math.PI / pp; const r = i % 2 ? ratio : 1; V.push([r * Math.cos(a), r * Math.sin(a)]); }
    sharp = (k) => V.map(([x, y]) => [x * k, y * k]); }
  return { make, start: N * p / C.L, closed: true, curve, sharp, gap, grow: true, N, g };
}

const T_ = (trash) => (x) => { if (x) trash.push(x); return x; };
function rsq(W, s, r) { const { CrossSection } = W; const a = CrossSection.square([Math.max(0.01, s - 2 * r), Math.max(0.01, s - 2 * r)], true); const b = a.offset(r, 'Round', 2, SEG); a.delete(); return b; }
function circ(W, r) { return W.CrossSection.circle(r, segs(r)); }
function kshape(W, round, s, r) { return round ? circ(W, s / 2) : rsq(W, s, r); }
function placed(cs, sl, T) { return T(T(cs.rotate(sl.rot)).translate([sl.x, sl.y])); }
function polyCS(W, pts) { return new W.CrossSection([pts], 'Positive').area() > 0 ? new W.CrossSection([pts], 'Positive') : new W.CrossSection([pts.slice().reverse()], 'Positive'); }

function overlaps(W, slots, size, round, onlyLast = false) {
  const T = []; const t = T_(T);
  try {
    const fp = slots.map((s) => placed(t(kshape(W, round, size, 1)), s, t));
    for (let i = 0; i < fp.length; i++) for (let j = i + 1; j < fp.length; j++) {
      if (onlyLast && j !== fp.length - 1) continue;
      const bi = fp[i].bounds(), bj = fp[j].bounds();
      if (bi.max[0] < bj.min[0] || bj.max[0] < bi.min[0] || bi.max[1] < bj.min[1] || bj.max[1] < bi.min[1]) continue;
      const x = t(fp[i].intersect(fp[j])); if (x.area() > 0.01) return true;
    }
    return false;
  } finally { for (const x of T) try { x.delete(); } catch { } }
}

// Prisma met afgeronde bovenrand (kwartcirkel, straal f): de bovenste f mm wordt in laagjes
// opgebouwd en elke rand schuift naar binnen langs de bissectrice van de omtrek (gladde afronding).
export function filletPrism(W, cs0, h, f, T, steps = 8) {
  f = Math.min(f, h - 0.2);
  // holle hoeken eerst rond maken (straal > f), anders lopen de randjes in een scherpe binnenhoek over elkaar
  const rc = Math.max(0, f) + 1;
  const cs = f > 0.05 ? T(T(T(cs0.offset(rc, 'Round', 2, SEG)).offset(-rc, 'Round', 2, SEG)).simplify(0.005)) : T(cs0.simplify(0.005));
  if (!(f > 0.05)) return T(cs.extrude(h));
  // f niet groter dan wat de vorm toelaat (smalle stukken)
  const probe = T(cs.offset(-f * 1.05, 'Round', 2, 24));
  if (probe.isEmpty() || Math.abs(probe.decompose().map((x) => { T(x); return x; }).length - cs.decompose().map((x) => { T(x); return x; }).length) > 0) f = f * 0.5;
  const N = new Map(); const key = (x, y) => Math.round(x * 1e4) + ',' + Math.round(y * 1e4);
  for (const poly of cs.toPolygons()) {
    const n = poly.length;
    for (let i = 0; i < n; i++) {
      const a = poly[(i - 1 + n) % n], b = poly[i], c = poly[(i + 1) % n];
      const e1 = [b[0] - a[0], b[1] - a[1]], e2 = [c[0] - b[0], c[1] - b[1]];
      const l1 = Math.hypot(e1[0], e1[1]) || 1, l2 = Math.hypot(e2[0], e2[1]) || 1;
      const n1 = [-e1[1] / l1, e1[0] / l1], n2 = [-e2[1] / l2, e2[0] / l2];
      let m = [n1[0] + n2[0], n1[1] + n2[1]]; const lm = Math.hypot(m[0], m[1]);
      if (lm < 1e-6) m = n1; else m = [m[0] / lm, m[1] / lm];
      const sc = 1 / Math.max(0.35, m[0] * n1[0] + m[1] * n1[1]);
      N.set(key(b[0], b[1]), [m[0] * sc, m[1] * sc]);
    }
  }
  const low = T(cs.extrude(h - f));
  const top0 = T(T(cs.extrude(f, steps)).translate([0, 0, h - f]));
  const z0 = h - f;
  const top = T(top0.warp((v) => {
    const n = N.get(key(v[0], v[1])); if (!n) return;
    const t = Math.min(1, Math.max(0, (v[2] - z0) / f)); const th = t * Math.PI / 2; const d = f * (1 - Math.cos(th));
    v[0] += n[0] * d; v[1] += n[1] * d; v[2] = z0 + f * Math.sin(th);
  }));
  return T(low.add(top));
}

// ---------- toetsen ----------
// Geprint met de steel naar beneden (rok en steel staan op het bed), de bolle of holle bovenkant komt
// er als laatste op. Het plafond binnenin is een korte brug (±5 mm) tussen steel en rok; geen support nodig.
function capSolid(W, o, round, style, ceil, T) {
  const { Manifold } = W;
  const R = o.key / 2; const fr = Math.min(1.6, R * 0.15); const taper = 0.3;
  const thick = style === 'schaal' ? 2.4 : 1.6; const zE = ceil + thick; const hd = style === 'bol' ? 1.1 : style === 'vierkant' ? 0.5 : 0;
  const pts = [];
  const ring = (delta, z) => {
    if (round) { const r = R - delta; const n = Math.max(24, Math.round(segs(r) * 1.5)); for (let i = 0; i < n; i++) { const a = i / n * 2 * Math.PI; pts.push([r * Math.cos(a), r * Math.sin(a), z]); } }
    else { const A = R - delta, c = Math.max(0.4, 4 - delta); const a = Math.max(0.01, A - c); const per = 24;
      for (const [sx, sy, a0] of [[1, 1, 0], [-1, 1, 90], [-1, -1, 180], [1, -1, 270]]) for (let i = 0; i <= per; i++) { const ang = (a0 + i * 90 / per) * Math.PI / 180; pts.push([sx * a + c * Math.cos(ang), sy * a + c * Math.sin(ang), z]); } }
  };
  const lift = (delta) => { const r = Math.max(0, R - delta) / R; return hd * (1 - r * r); };
  ring(taper, 0); ring(0, zE - fr);
  for (let i = 1; i <= 12; i++) { const th = i / 12 * Math.PI / 2; const d = fr * (1 - Math.cos(th)); ring(d, zE - fr + fr * Math.sin(th) + lift(d)); }
  if (hd > 0) { for (let i = 1; i <= 10; i++) { const d = fr + (R - fr - 2.5) * i / 10; ring(d, zE + lift(d)); } pts.push([0, 0, zE + hd]); }
  let outer = T(Manifold.hull(pts));
  if (style === 'schaal') {
    const a = R - fr - 0.6, dd = 0.9; const Rs = (a * a + dd * dd) / (2 * dd);
    outer = T(outer.subtract(T(T(Manifold.sphere(Rs, 256)).translate([0, 0, zE - dd + Rs]))));
  }
  return { outer, zTop: zE + hd };
}

// ---------- hoofdfunctie ----------
export function buildClicker(W, font, opts = {}) {
  const o = { ...DEFAULTS, ...opts };
  const { CrossSection, Manifold } = W;
  const trash = []; const T = T_(trash);
  const sw = SWITCHES[o.sw] || SWITCHES.mx;
  const warn = [];
  const LD = LAYOUTS[o.layout]; if (!LD) throw new Error('Onbekende vorm: ' + o.layout);
  try {
    const chars = splitName(o.name, o.upper).filter((c) => !(o.layout !== 'tweeregels' && (c === '/' || c === '|')));
    const letters = chars.filter((c) => c.trim() && c !== '/' && c !== '|');
    if (!letters.length) throw new Error('Typ eerst een naam.');
    if (letters.length > 24) throw new Error('Maximaal 24 letters, anders wordt hij te groot voor het printbed.');

    const style = o.capStyle === 'auto' ? (LD.round ? 'bol' : 'vierkant') : o.capStyle;
    const round = style !== 'vierkant';
    // rok moet rond het schakelaarhuis passen (vak in de toets 16 × 16 mm)
    const minKey = round ? 22.4 : 18.6;
    if (!o.key) o.key = round ? 23 : 19;
    if (o.key < minKey) { warn.push(`Toetsmaat verhoogd naar ${String(minKey).replace('.', ',')} mm, anders past de rok niet om de schakelaar.`); o.key = minKey; }
    const isCenterLayout = ['cirkel', 'hart', 'ster', 'wolk', 'bloem'].includes(o.layout);

    // --- indeling ---
    const lay = layoutSlots(chars, o, round);
    let slots = lay.slots, scale = null;
    if (lay.grow) {
      scale = lay.start; let ok = false;
      for (let it = 0; it < 120; it++) { slots = lay.make(scale); if (!overlaps(W, slots.filter((s) => s.ch), o.key + Math.min(o.spacing, 0.8), round)) { ok = true; break; } scale *= 1.02; }
      if (!ok) warn.push('Toetsen raken elkaar nog; maak de ruimte tussen toetsen groter.');
      // ster: iets groter maken tot de hartjestoets in het midden past
      if (ok && o.layout === 'ster' && o.centerKey) for (let it = 0; it < 40; it++) {
        const ks = slots.filter((q) => q.ch); const c = { x: 0, y: ks.reduce((a, k) => a + k.y, 0) / ks.length, rot: 0 };
        if (!overlaps(W, [...ks, c], o.key + 4, round, true)) break; scale *= 1.02; slots = lay.make(scale);
      }
    }
    const keys = slots.filter((s) => s.ch);
    let center = null;
    if (lay.closed && o.centerKey && isCenterLayout && (LD.fill === 'vol' || o.fill)) {
      const cx = keys.reduce((s, k) => s + k.x, 0) / keys.length, cy = keys.reduce((s, k) => s + k.y, 0) / keys.length;
      const c = { x: cx, y: o.layout === 'hart' ? cy + 3 : cy, rot: 0, ch: '♥', symbol: true };
      if (!overlaps(W, [...keys, c], o.key + 4, round, true)) center = c; else warn.push('Geen plek voor de hartjestoets in het midden.');
    }
    const allKeys = center ? [...keys, center] : keys;

    // --- voet: omtrek (2D) ---
    const FW = o.key + 2 * o.rim; const fr = Math.min(o.rim + 2, FW / 2 - 0.1);
    const fps = allKeys.map((k) => placed(T(kshape(W, round, FW, fr)), k, T));
    const parts = [...fps];
    let outlineFull = null;    // buitenomtrek (voor oogje en vulling)
    let bandOuterExtra = 0;
    const L = o.layout;
    if (lay.closed) {
      const R0 = scale;
      if (L === 'cirkel' || L === 'krans') {
        bandOuterExtra = L === 'krans' ? 9 : 0;
        const Rk = Math.hypot(keys[0].x, keys[0].y);
        const ring = T(T(circ(W, Rk + FW / 2 + bandOuterExtra)).subtract(T(circ(W, Rk - FW / 2))));
        parts.push(ring); outlineFull = T(circ(W, Rk + FW / 2 + bandOuterExtra));
      } else if (L === 'hart' || L === 'ster') {
        const cur = T(polyCS(W, L === 'ster' ? lay.sharp(R0) : lay.curve(R0)));
        // ster: spitse punten (verstek) en daarna licht afgerond, zodat het echt een ster blijft
        const join = L === 'ster' ? 'Miter' : 'Round';
        let outer = T(cur.offset(FW / 2, join, 2.6, SEG)); let inner = T(cur.offset(-FW / 2, join, 2.6, SEG));
        if (L === 'ster') { outer = T(T(outer.offset(-5, 'Round', 2, SEG)).offset(5, 'Round', 2, SEG)); inner = T(T(inner.offset(-3, 'Round', 2, SEG)).offset(3, 'Round', 2, SEG)); }
        parts.push(LD.fill === 'vol' ? outer : T(outer.subtract(inner))); outlineFull = outer;
      } else if (L === 'bloem') {
        // blaadjes: een grote cirkel per plek (ook de lege), plus het hart van de bloem; holle hoekjes afronden
        const petals = slots.map((s) => T(T(circ(W, FW / 2 + 4)).translate([s.x * 1.05, s.y * 1.05])));
        const gp = lay.gap(R0).pos; petals.push(T(T(circ(W, FW / 2 + 4)).translate([gp[0] * 1.05, gp[1] * 1.05])));
        const Rk = Math.hypot(keys[0].x, keys[0].y);
        petals.push(circ(W, Rk)); T(petals[petals.length - 1]);
        const u = T(CrossSection.union(petals));
        outlineFull = T(T(u.offset(2.5, 'Round', 2, SEG)).offset(-2.5, 'Round', 2, SEG)); parts.push(outlineFull);
      } else if (L === 'wolk') {
        const bumps = []; slots.forEach((s, i) => bumps.push(T(T(circ(W, FW / 2 + (i % 2 ? 2 : 5))).translate([s.x * 1.04, s.y * 1.04]))));
        const gp = lay.gap(R0).pos; bumps.push(T(T(circ(W, FW / 2 + 4)).translate(gp)));
        bumps.push(T(polyCS(W, lay.curve(R0))));
        const u = T(CrossSection.union(bumps));
        outlineFull = T(T(u.offset(3, 'Round', 2, SEG)).offset(-3, 'Round', 2, SEG)); parts.push(outlineFull);
      }
    } else if (L === 'boog' || L === 'regenboog') {
      const R = Math.hypot(keys[0].x, keys[0].y); const A = lay.arc * Math.PI / 180;
      const ann = T(T(circ(W, R + FW / 2)).subtract(T(circ(W, R - FW / 2))));
      // wig van -A/2 tot A/2 rond de y-as (met de klok mee vanaf boven), ruim
      const wp = [[0, 0]]; for (let i = 0; i <= 64; i++) { const a = -A / 2 + i / 64 * A; wp.push([2 * R * Math.sin(a) * 1.5, 2 * R * Math.cos(a) * 1.5]); }
      const wedge = T(polyCS(W, wp));
      parts.push(T(ann.intersect(wedge)));
      for (const sgn of [-1, 1]) { const a = sgn * A / 2; parts.push(T(T(circ(W, FW / 2)).translate([R * Math.sin(a), R * Math.cos(a)]))); }
      if (L === 'regenboog' && o.stand) {
        // voetbalk onder de uiteinden, waarmee hij in de standaard staat
        const u0 = T(CrossSection.union(parts)); const b = u0.bounds();
        // balk van onder de standaard tot halverwege de laatste toetsen: geen inkepingen bij de uiteinden
        const yEnd = Math.min(keys[0].y, keys[keys.length - 1].y);
        const barW = b.max[0] - b.min[0], y0 = b.min[1] - 12, y1 = yEnd;
        parts.push(T(T(T(rsq(W, 10, 0.6)).scale([barW / 10, (y1 - y0) / 10])).translate([(b.min[0] + b.max[0]) / 2, (y0 + y1) / 2])));
      }
    } else if (L === 'lijn' || L === 'tweeregels') {
      for (const rs of lay.rows) if (rs.length) {
        const a = T(kshape(W, round, FW, fr)); const first = rs[0], last = rs[rs.length - 1];
        parts.push(T(CrossSection.hull([T(a.translate([first.x, first.y])), T(a.translate([last.x, last.y]))])));
      }
    }
    // oogje: los lipje buiten tegen de rand, nooit in de band
    let tab = null, tabHole = null;
    if (o.loop && L !== 'test' && !(L === 'regenboog' && o.stand)) {
      let P, dir;
      if (lay.closed) { const gq = lay.gap(scale); P = gq.pos; dir = gq.dir; }
      else { const f = slots[0]; const s2 = slots[1] || { x: f.x + 1, y: f.y }; const d = [f.x - s2.x, f.y - s2.y]; const l = Math.hypot(d[0], d[1]) || 1; dir = [d[0] / l, d[1] / l]; P = [f.x, f.y]; if (L === 'tweeregels') dir = [-1, 0]; }
      const body = T(CrossSection.union(parts));
      let ok = false;
      for (let off = FW / 2 + bandOuterExtra + 2; off <= FW / 2 + bandOuterExtra + 40 && !ok; off += 0.5) {
        const C = [P[0] + dir[0] * off, P[1] + dir[1] * off];
        const zone = T(T(circ(W, 3 + 1.8)).translate(C));
        if (T(zone.intersect(body)).area() < 0.01) {
          const disk = T(T(circ(W, 6.2)).translate(C));
          const neckP = [P[0] + dir[0] * (off - 8), P[1] + dir[1] * (off - 8)];
          tab = T(CrossSection.hull([disk, T(T(circ(W, 5)).translate(neckP))]));
          tabHole = T(T(circ(W, 3)).translate(C)); ok = true;
        }
      }
      if (!ok) warn.push('Geen plek voor het oogje gevonden.');
    }
    if (tab) parts.push(tab); // lipje hoort bij de omtrek: één gladde, afgeronde rand
    const ring = T(CrossSection.union(parts));
    const baseH = o.floor + sw.below;
    const f = o.fillet;
    let base = filletPrism(W, ring, baseH, f, T);
    let fillInfo = null;
    if (lay.closed && outlineFull) {
      if (LD.fill === 'verdiept' && o.fill && !center) { base = T(base.add(filletPrism(W, outlineFull, baseH, f, T))); fillInfo = 'vol'; }
      else if (LD.fill === 'verdiept' && o.fill) { const fh = baseH - 2; base = T(base.add(filletPrism(W, outlineFull, fh, Math.min(f, 1), T))); fillInfo = 'verdiept'; }
    }
    // vakken
    const holes = [];
    const cut = o.cut + o.holeTol, cav = sw.cavity + o.holeTol;
    for (const k of allKeys) {
      const plateHole = T(T(T(CrossSection.square([cut, cut], true)).extrude(o.plateT + 2)).translate([0, 0, baseH - o.plateT - 0.5]));
      const cavity = T(T(T(CrossSection.square([cav, cav], true)).extrude(baseH - o.plateT - o.floor)).translate([0, 0, o.floor]));
      let h = T(plateHole.add(cavity));
      if (o.pushHole) h = T(h.add(T(T(Manifold.cylinder(o.floor + 2, 4, 4, 64)).translate([0, 0, -1]))));
      holes.push(T(T(h.rotate([0, 0, k.rot])).translate([k.x, k.y, 0])));
    }
    if (tabHole) holes.push(T(T(tabHole.extrude(baseH + 2)).translate([0, 0, -1])));
    base = T(base.subtract(T(Manifold.union(holes))));

    // krans: hulstblaadjes en besjes op de buitenrand
    let decoLeaves = null, decoBerries = null;
    if (L === 'krans') {
      const Rk = Math.hypot(keys[0].x, keys[0].y); const rr = Rk + FW / 2 + 4.2; const N = lay.N;
      const leaf = (() => { const pts = []; for (let i = 0; i < 160; i++) { const t = i / 160 * 2 * Math.PI; pts.push([6.2 * Math.cos(t), 2.7 * Math.sin(t)]); }
        let e = T(polyCS(W, pts)); const bites = [];
        for (const sx of [-3.4, 0, 3.4]) for (const sy of [-1, 1]) bites.push(T(T(circ(W, 1.35)).translate([sx, sy * 3.25])));
        e = T(e.subtract(T(CrossSection.union(bites))));
        return T(T(e.offset(0.25, 'Round', 2, 24)).offset(-0.25, 'Round', 2, 24)); })();
      const lv = [], bs = [];
      for (let i = 0; i < N; i++) {
        const phi = (i + 0.5 + (lay.g + 1) / 2) / N * 360; if (o.loop && Math.abs(((phi % 360) + 360) % 360) < 20) continue;
        const a = phi * Math.PI / 180; const C = [rr * Math.sin(a), rr * Math.cos(a)];
        for (const sg of [-1, 1]) { const l = T(T(T(leaf.rotate(sg * 14)).translate([sg * 6.2, 0])).rotate(-phi)); lv.push(T(l.translate(C))); }
        for (const [dx, dy] of [[0, 1.6], [-1.5, -0.8], [1.5, -0.8]]) bs.push(T(T(circ(W, 1.3)).translate([C[0] + dx, C[1] + dy])));
      }
      const B = T(CrossSection.union(bs));
      const Lv = T(T(CrossSection.union(lv)).subtract(B));
      const lim = T(circ(W, Rk + FW / 2 + bandOuterExtra - f - 0.3)).subtract(T(circ(W, Rk + o.key / 2 + 0.6))); T(lim);
      const Lc = T(Lv.intersect(lim)), Bc = T(B.intersect(lim));
      decoLeaves = T(T(Lc.extrude(1.0)).translate([0, 0, baseH]));
      decoBerries = T(T(Bc.extrude(1.4)).translate([0, 0, baseH]));
    }

    // regenboog-standaard (los onderdeel): blok met een schuine sleuf waar de voetbalk in staat
    let standM = null;
    if (L === 'regenboog' && o.stand) {
      const bb0 = base.boundingBox(); const len = bb0.max[0] - bb0.min[0] + 10, depth = 34, hgt = 15, tilt = 12;
      const blk = filletPrism(W, T(T(rsq(W, 10, 1)).scale([len / 10, depth / 10])), hgt, 2, T);
      const slotW = baseH + 0.5, slotD = 10;
      const slot = T(T(T(T(Manifold.cube([len - 8, slotW, slotD + 20], true)).translate([0, 0, (slotD + 20) / 2])).rotate([-tilt, 0, 0])).translate([0, 2, hgt - slotD]));
      standM = T(blk.subtract(slot));
    }

    // --- toetsen ---
    const skirtGap = sw.housTop;                 // onderkant rok/steel in rust = bovenkant schakelaarhuis
    const stemTopL = sw.stemTop - skirtGap;      // 3,6 mm
    const socketD = Math.min(3.6, stemTopL);
    const ceil = sw.housTop + sw.travel + 0.4 - skirtGap;   // 4,4 mm: plafond vrij van het huis bij indrukken
    const { outer, zTop } = capSolid(W, o, round, style, ceil, T);
    const cavS = 16, cavR = 2.5;
    const cavity = T(T(T(rsq(W, cavS, cavR)).extrude(ceil + 1)).translate([0, 0, -1]));
    const post = T(Manifold.cylinder(ceil + 0.3, 2.75, 2.75, 64));
    const armL = 4.0 + o.stemTol, armW = 1.2 + o.stemTol;
    const crossCS = T(CrossSection.union([T(CrossSection.square([armL, armW], true)), T(CrossSection.square([armW, armL], true))]));
    const cross = T(T(crossCS.extrude(socketD + 1)).translate([0, 0, -1]));
    const lead = T(T(T(crossCS.offset(0.25, 'Miter', 2, 8)).extrude(0.25 + 1)).translate([0, 0, -1])); // invoerrandje tegen olifantspoot
    const capShell = T(T(T(T(outer.subtract(cavity)).add(post)).subtract(cross)).subtract(lead));

    // letters
    const em = 100; const glyphs = new Map(); const missing = [];
    for (const c of new Set(letters)) { const g = glyphContours(font, c, em); if (!g || !g.length) missing.push(c); else glyphs.set(c, g); }
    if (missing.length) throw new Error('Dit lettertype kent deze teken(s) niet: ' + missing.join(' ') + '. Kies een ander lettertype.');
    let yMin = 1e9, yMax = -1e9, wMax = 0;
    for (const g of glyphs.values()) { const b = bboxOf(g); yMin = Math.min(yMin, b.min[1]); yMax = Math.max(yMax, b.max[1]); wMax = Math.max(wMax, b.max[0] - b.min[0]); }
    const usable = round ? (o.key - 6) * 0.86 : o.key - 6;
    let s = o.textH / (yMax - yMin);
    if (s * (yMax - yMin) > usable) s = usable / (yMax - yMin);
    if (s * wMax > usable) { s = usable / wMax; warn.push('Letters iets kleiner gemaakt zodat de breedste letter past.'); }
    const yMid = (yMin + yMax) / 2;
    const face = T(round ? circ(W, o.key / 2 - 2.6) : rsq(W, o.key - 5, 2.5));
    const letterCS = (c) => {
      if (c === '♥') { const hp = T(new CrossSection([heartPts(1)], 'NonZero')); const b = hp.bounds(); const k = (o.key - 9) / Math.max(b.max[0] - b.min[0], b.max[1] - b.min[1]);
        return T(T(T(hp.translate([-(b.min[0] + b.max[0]) / 2, -(b.min[1] + b.max[1]) / 2])).scale([k, k])).intersect(face)); }
      const g = glyphs.get(c); const b = bboxOf(g);
      let cs = T(new CrossSection(g, 'NonZero'));
      cs = T(T(cs.translate([-(b.min[0] + b.max[0]) / 2, -yMid])).scale([s, s]));
      return T(T(cs.simplify(0.005)).intersect(face));
    };
    // bovenschil van de toets (volgt de bolling): buitenvorm min dezelfde vorm iets lager
    const d = Math.min(o.inlay, 1.2);
    const lowTop = T(outer.translate([0, 0, -d])), lowEng = T(outer.translate([0, 0, -0.8]));
    const caps = []; const thin = [];
    allKeys.forEach((k, i) => {
      const Lcs = letterCS(k.ch);
      const isl = Lcs.decompose().filter((p) => { trash.push(p); return p.area() > 0.3; });
      const Lc = isl.length ? T(CrossSection.union(isl)) : null;
      if (Lc) { const sh = T(Lc.offset(-0.25, 'Round', 2, 16)); const n0 = isl.length; const n1 = sh.decompose().map((p) => { trash.push(p); return p; }).length; if (n1 < n0 || sh.isEmpty()) thin.push(k.ch); }
      let body = capShell, letter = null;
      if (Lc) {
        const prism = T(T(Lc.extrude(zTop + 2)).translate([0, 0, -0.5]));
        // snijvorm = letterprisma boven de verlaagde bovenkant (steekt boven de toets uit: geen samenvallende vlakken)
        if (o.label === 'gegraveerd') body = T(capShell.subtract(T(prism.subtract(lowEng))));
        else { const cutter = T(prism.subtract(lowTop)); letter = T(capShell.intersect(cutter)); body = T(capShell.subtract(cutter)); }
      }
      caps.push({ ch: k.ch, slot: k, body, letter, symbol: !!k.symbol, nIslands: isl.length });
    });
    if (thin.length) warn.push('Dunne lijntjes (< 0,5 mm) in: ' + [...new Set(thin)].join(' ') + '. Maak de letters groter.');

    // --- in elkaar (3D-beeld) ---
    const assembled = caps.map((c) => { const pl = (m) => T(T(T(m.rotate([0, 0, c.slot.rot])).translate([c.slot.x, c.slot.y, baseH + skirtGap]))); return { body: pl(c.body), letter: c.letter ? pl(c.letter) : null }; });
    const swParts = allKeys.map((k) => {
      const hous = T(Manifold.hull([T(T(T(rsq(W, 14.6, 1)).extrude(1)).translate([0, 0, baseH])), T(T(T(rsq(W, 11.4, 1.5)).extrude(0.5)).translate([0, 0, baseH + sw.housTop - 0.5]))]));
      const st = T(T(crossCS.extrude(sw.stemTop - sw.housTop)).translate([0, 0, baseH + sw.housTop]));
      return T(T(T(hous.add(st)).rotate([0, 0, k.rot])).translate([k.x, k.y, 0]));
    });
    const switchesM = T(Manifold.union(swParts));

    // --- printplaat: voet, (standaard), toetsen met de steel omlaag in een raster ---
    const bed = 270, margin = 5, g = 4;
    const bb = base.boundingBox(); const bw = bb.max[0] - bb.min[0], bh = bb.max[1] - bb.min[1];
    const baseP = T(base.translate([-(bb.min[0] + bb.max[0]) / 2, -bb.min[1], 0]));
    const decoP = [decoLeaves, decoBerries].map((m) => (m ? T(m.translate([-(bb.min[0] + bb.max[0]) / 2, -bb.min[1], 0])) : null));
    let y = -g; let standP = null;
    if (standM) { const sb = standM.boundingBox(); standP = T(standM.translate([-(sb.min[0] + sb.max[0]) / 2, y - sb.max[1], 0])); y -= (sb.max[1] - sb.min[1]) + g; }
    const cell = o.key + g;
    let cols = Math.max(1, Math.min(Math.floor((bed - 2 * margin + g) / cell), Math.max(Math.floor((bw + g) / cell), Math.ceil(caps.length / 3))));
    const printed = caps.map((c, i) => { const col = i % cols, row = Math.floor(i / cols); const rowN = Math.min(cols, caps.length - row * cols);
      const x = (col - (rowN - 1) / 2) * cell, yy = y - o.key / 2 - row * cell; return { body: T(c.body.translate([x, yy, 0])), letter: c.letter ? T(c.letter.translate([x, yy, 0])) : null }; });
    let mn = [1e9, 1e9], mx = [-1e9, -1e9];
    const acc = (m) => { if (!m) return; const b = m.boundingBox(); mn = [Math.min(mn[0], b.min[0]), Math.min(mn[1], b.min[1])]; mx = [Math.max(mx[0], b.max[0]), Math.max(mx[1], b.max[1])]; };
    acc(baseP); acc(standP); printed.forEach((p) => acc(p.body));
    const dx = bed / 2 - (mn[0] + mx[0]) / 2, dy = bed / 2 - (mn[1] + mx[1]) / 2;
    const mv = (m) => (m ? T(m.translate([dx, dy, 0])) : null);
    const fitsBed = (mx[0] - mn[0]) <= bed - 2 && (mx[1] - mn[1]) <= bed - 2;
    if (!fitsBed) warn.push('Past niet in één keer op het printbed (270 × 270 mm): print de voet en de toetsen apart.');
    const fitsBase = bw <= bed - 2 && bh <= bed - 2;

    // --- meshes + controle ---
    const mesh = (m) => (m ? meshOf(m) : null);
    const capPreview = { body: mesh(caps[0].body), letter: mesh(caps[0].letter), sw: mesh(T(T(swParts[0].translate([-allKeys[0].x, -allKeys[0].y, -baseH - skirtGap])).rotate([0, 0, -allKeys[0].rot]))) };
    const out = {
      base: mesh(base), deco: { leaves: mesh(decoLeaves), berries: mesh(decoBerries) }, stand: mesh(standM),
      assembled: assembled.map((a) => ({ body: mesh(a.body), letter: mesh(a.letter) })),
      switches: mesh(switchesM), capPreview,
      plate: { base: mesh(mv(baseP)), leaves: mesh(mv(decoP[0])), berries: mesh(mv(decoP[1])), stand: mesh(mv(standP)),
        caps: printed.map((c, i) => ({ body: mesh(mv(c.body)), letter: mesh(mv(c.letter)), ch: caps[i].ch, symbol: caps[i].symbol })) },
    };
    const one = (m) => m.decompose().map((x) => { trash.push(x); return x; }).length === 1;
    const solids = [out.plate.base, out.plate.stand, ...out.plate.caps.map((c) => c.body)].filter(Boolean);
    const checks = [...solids, out.plate.leaves, out.plate.berries, ...out.plate.caps.map((c) => c.letter)].filter(Boolean).map(checkMesh);
    const vol = { base: base.volume() + (standM ? standM.volume() : 0), caps: caps.reduce((a, c) => a + c.body.volume(), 0), letters: caps.reduce((a, c) => a + (c.letter ? c.letter.volume() : 0), 0) + (decoLeaves ? decoLeaves.volume() + decoBerries.volume() : 0) };
    const box = (m) => { const b = m.boundingBox(); return [b.max[0] - b.min[0], b.max[1] - b.min[1], b.max[2] - b.min[2]]; };
    const info = {
      letters: letters.length, switches: allKeys.length, keycaps: caps.length, center: !!center, style, round,
      baseSize: box(base), standSize: standM ? box(standM) : null, capSize: [o.key, o.key, zTop], baseH, capH: zTop, assembledH: baseH + skirtGap + zTop,
      fitsBed, fitsBase, layout: o.layout, scale, textMM: s * (yMax - yMin), fill: fillInfo, tab: !!tab,
      volumes: vol, grams: { base: vol.base / 1000 * 1.24, caps: vol.caps / 1000 * 1.24, letters: vol.letters / 1000 * 1.24 },
      ok: checks.every((c) => c.ok) && one(base) && (!standM || one(standM)) && caps.every((c) => one(c.body)),
      checks, warn, islands: caps.map((c) => c.nIslands), status: base.status(),
    };
    return { ...out, info, opts: o };
  } finally {
    for (const x of trash) { try { x.delete(); } catch { } }
  }
}

function meshOf(man0) {
  const man = man0.simplify(0.002);
  const m = man.getMesh(); man.delete(); const k = m.numProp; const n = m.vertProperties.length / k;
  const pos = new Float32Array(n * 3); for (let i = 0; i < n; i++) { pos[i * 3] = m.vertProperties[i * k]; pos[i * 3 + 1] = m.vertProperties[i * k + 1]; pos[i * 3 + 2] = m.vertProperties[i * k + 2]; }
  const remap = new Uint32Array(n); for (let i = 0; i < n; i++) remap[i] = i;
  if (m.mergeFromVert) for (let i = 0; i < m.mergeFromVert.length; i++) remap[m.mergeFromVert[i]] = m.mergeToVert[i];
  const byPos = new Map();
  for (let i = 0; i < n; i++) { const r = remap[i]; const key = pos[r * 3] + ',' + pos[r * 3 + 1] + ',' + pos[r * 3 + 2]; const v = byPos.get(key); if (v === undefined) byPos.set(key, r); else remap[i] = v; }
  const used = new Int32Array(n).fill(-1); const out = []; let c = 0; const tri = [];
  for (let t = 0; t < m.triVerts.length; t += 3) {
    const a = remap[m.triVerts[t]], b = remap[m.triVerts[t + 1]], d = remap[m.triVerts[t + 2]];
    if (a === b || b === d || a === d) continue;
    for (const v of [a, b, d]) { if (used[v] < 0) { used[v] = c++; out.push(v); } tri.push(used[v]); }
  }
  const pos2 = new Float32Array(c * 3); out.forEach((v, j) => { pos2[j * 3] = pos[v * 3]; pos2[j * 3 + 1] = pos[v * 3 + 1]; pos2[j * 3 + 2] = pos[v * 3 + 2]; });
  return { pos: pos2, idx: Uint32Array.from(tri) };
}

// Controle zoals een slicer kijkt: elke rand precies twee keer (heen en terug).
export function checkMesh(m) {
  if (!m || !m.idx.length) return { ok: false, why: 'leeg' };
  const P = new Map(); const id = new Uint32Array(m.pos.length / 3);
  for (let i = 0; i < id.length; i++) { const k = m.pos[i * 3] + ',' + m.pos[i * 3 + 1] + ',' + m.pos[i * 3 + 2]; let v = P.get(k); if (v === undefined) P.set(k, v = P.size); id[i] = v; }
  const E = new Map();
  for (let t = 0; t < m.idx.length; t += 3) for (let j = 0; j < 3; j++) { const a = id[m.idx[t + j]], b = id[m.idx[t + (j + 1) % 3]]; if (a === b) return { ok: false, why: 'gedegenereerde driehoek' }; const k = a * 4294967296 + b; E.set(k, (E.get(k) || 0) + 1); }
  for (const [k, c] of E) { const a = Math.floor(k / 4294967296), b = k % 4294967296; if (c !== 1 || E.get(b * 4294967296 + a) !== 1) return { ok: false, why: 'open of dubbele rand' }; }
  return { ok: true, tris: m.idx.length / 3 };
}

// ---------- export ----------
export function toSTL(meshes, name = 'naam-clicker') {
  meshes = meshes.filter(Boolean);
  const n = meshes.reduce((s, m) => s + m.idx.length / 3, 0);
  const buf = new ArrayBuffer(84 + n * 50); const dv = new DataView(buf);
  const head = `binary STL ${name} - naam-clicker`.normalize('NFD').replace(/[^\x20-\x7e]/g, '').slice(0, 80);
  for (let i = 0; i < head.length; i++) dv.setUint8(i, head.charCodeAt(i));
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

const esc = (s) => String(s).replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));
function meshXML(m) {
  const f = (x) => String(parseFloat(x.toPrecision(9))); const P = m.pos; const vs = [];
  for (let i = 0; i < P.length; i += 3) vs.push(`<vertex x="${f(P[i])}" y="${f(P[i + 1])}" z="${f(P[i + 2])}"/>`);
  const ts = []; for (let t = 0; t < m.idx.length; t += 3) ts.push(`<triangle v1="${m.idx[t]}" v2="${m.idx[t + 1]}" v3="${m.idx[t + 2]}"/>`);
  return `<mesh><vertices>${vs.join('')}</vertices><triangles>${ts.join('')}</triangles></mesh>`;
}

// 3MF voor Snapmaker Orca: voet = object (T1, met hulst T4 en besjes T2 bij de krans), standaard = object (T1),
// elke toets = eigen object met twee delen: toets (T2, of om en om T2/T4) en letter (T3).
export function to3MF(r, name = 'Naam-clicker', colors = ['#FFFFFF', '#F4A6C9', '#7B2D8E', '#8FD3F4']) {
  const objs = [], items = [], cfg = []; let id = 2;
  const part = (m, nm, ex) => { const pid = id++; objs.push(`<object id="${pid}" name="${esc(nm)}" type="model" pid="1" pindex="${ex - 1}">${meshXML(m)}</object>`); return { pid, nm, ex }; };
  const group = (nm, parts) => { const oid = id++;
    objs.push(`<object id="${oid}" name="${esc(nm)}" type="model"><components>${parts.map((p) => `<component objectid="${p.pid}"/>`).join('')}</components></object>`);
    items.push(`<item objectid="${oid}" printable="1"/>`); cfg.push({ oid, nm, ex: parts[0].ex, parts }); };
  const bp = [part(r.plate.base, 'Voet', 1)];
  if (r.plate.leaves) bp.push(part(r.plate.leaves, 'Hulstblaadjes', 4));
  if (r.plate.berries) bp.push(part(r.plate.berries, 'Besjes', 2));
  group('Voet', bp);
  if (r.plate.stand) group('Standaard', [part(r.plate.stand, 'Standaard', 1)]);
  const alt = r.opts.colors === 'omenom';
  r.plate.caps.forEach((c, i) => {
    const ex = alt && i % 2 ? 4 : 2; const label = c.symbol ? 'hartje' : c.ch;
    const ps = [part(c.body, `Toets ${i + 1} ${label}`, ex)]; if (c.letter) ps.push(part(c.letter, `Letter ${i + 1} ${label}`, 3));
    group(`Toets ${i + 1} ${label}`, ps);
  });
  const model = `<?xml version="1.0" encoding="UTF-8"?>
<model unit="millimeter" xml:lang="nl-NL" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02">
<metadata name="Title">${esc(name)}</metadata>
<metadata name="Application">Tech demo 20 - Naam-clicker</metadata>
<resources>
<basematerials id="1">${colors.map((c, i) => `<base name="T${i + 1}" displaycolor="${c}FF"/>`).join('')}</basematerials>
${objs.join('\n')}
</resources>
<build>${items.join('')}</build>
</model>`;
  const ms = ['<?xml version="1.0" encoding="UTF-8"?>\n<config>'];
  for (const c of cfg) ms.push(` <object id="${c.oid}">\n  <metadata key="name" value="${esc(c.nm)}"/>\n  <metadata key="extruder" value="${c.ex}"/>\n` +
    c.parts.map((p) => `  <part id="${p.pid}" subtype="normal_part">\n   <metadata key="name" value="${esc(p.nm)}"/>\n   <metadata key="extruder" value="${p.ex}"/>\n  </part>`).join('\n') + '\n </object>');
  ms.push(' <plate>\n  <metadata key="plater_id" value="1"/>\n  <metadata key="plater_name" value="Naam-clicker"/>');
  for (const c of cfg) ms.push(`  <model_instance>\n   <metadata key="object_id" value="${c.oid}"/>\n   <metadata key="instance_id" value="0"/>\n  </model_instance>`);
  ms.push(' </plate>\n</config>\n');
  const ct = `<?xml version="1.0" encoding="UTF-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/><Default Extension="config" ContentType="text/xml"/></Types>`;
  const rels = `<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>`;
  return zipStore([['[Content_Types].xml', ct], ['_rels/.rels', rels], ['3D/3dmodel.model', model], ['Metadata/model_settings.config', ms.join('\n')]]);
}

const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
function crc32(b) { let c = 0xFFFFFFFF; for (let i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
export function zipStore(entries) {
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
