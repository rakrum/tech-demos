// Naam-clicker: geometrie met Manifold (wasm). Werkt in de browser en in Node.
// Elke letter is een eigen toets op een MX-schakelaar; de voet heeft per toets een schakelaarvak.
// Eigen ontwerp. Alleen het idee (naam per toets, MX-schakelaar, verzonken letter) komt van
// "Parametric Name Clicker Generator" (MakerWorld 2953074); daar is geen code of vorm van overgenomen.

export const DEFAULTS = {
  name: 'Sigviënnely',
  layout: 'cirkel',     // lijn | cirkel | hart | boog | tweeregels | test
  orient: 'rechtop',    // rechtop | meedraaien (letters wijzen naar buiten)
  upper: false,         // hoofdletters
  key: 18,              // toetsmaat in mm (breedte of doorsnede)
  capShape: 'auto',     // auto | rond | vierkant  (auto: rond bij cirkel en hart)
  spacing: 1.5,         // ruimte tussen toetsen in mm
  textH: 12,            // letterhoogte (hoogste letter tot laagste staart) in mm
  arc: 160,             // boog: openingshoek in graden
  gap: 1,               // cirkel/hart: lege plekken (voor het oogje)
  fill: true,           // cirkel/hart: dichte middenplaat
  centerKey: true,      // cirkel/hart: extra hartjestoets in het midden (reserve-schakelaar)
  rim: 2.5,             // rand van de voet rond elke toets in mm
  floor: 1.6,           // bodemdikte van de voet in mm
  loop: true,           // sleutelhanger-oogje
  pushHole: true,       // gaatje onder elke schakelaar om hem eruit te duwen
  label: 'verzonken',   // verzonken (letter in eigen kleur) | gegraveerd
  inlay: 0.6,           // dikte van de verzonken letter in mm
  colors: 'gelijk',     // gelijk | omenom (toetsen om en om T2 en T4)
  // schakelaar (MX-stijl: Cherry, Gateron, Outemu, Kailh Box, Akko; 3- en 5-pins)
  sw: 'mx',
  cut: 14.0,            // plaatgat in mm
  plateT: 1.5,          // plaatdikte waar de klemmetjes onder haken
  holeTol: 0.1,         // extra speling plaatgat
  stemTol: 0.15,        // extra speling kruisgat in de toets
};

// MX-maten (Cherry-datasheet): onderkant huis 5,0 mm onder plaat-bovenkant, pinnen 3,3 mm daaronder;
// bovenhuis 6,6 mm boven de plaat, steeltop 10,2 mm boven de plaat, slag 4 mm.
export const SWITCHES = {
  mx: { name: 'MX (Cherry, Gateron, Outemu, Kailh Box, Akko)', below: 8.6, housTop: 6.6, stemTop: 10.2, travel: 4.0, cavity: 15.0 },
};

const SEG = 40;

// ---------- lettertype -> CrossSection ----------
function glyphContours(font, ch, size) {
  const g = font.charToGlyph(ch);
  if (!g || g.index === 0) return null; // .notdef: niet in dit lettertype
  const path = g.getPath(0, 0, size);
  const out = []; let cur = null; let x0 = 0, y0 = 0;
  const push = (x, y) => cur.push([x, -y]);
  for (const c of path.commands) {
    if (c.type === 'M') { if (cur && cur.length > 2) out.push(cur); cur = []; push(c.x, c.y); x0 = c.x; y0 = c.y; }
    else if (c.type === 'L') { push(c.x, c.y); x0 = c.x; y0 = c.y; }
    else if (c.type === 'Q') { const n = 8; for (let i = 1; i <= n; i++) { const t = i / n, u = 1 - t; push(u * u * x0 + 2 * u * t * c.x1 + t * t * c.x, u * u * y0 + 2 * u * t * c.y1 + t * t * c.y); } x0 = c.x; y0 = c.y; }
    else if (c.type === 'C') { const n = 10; for (let i = 1; i <= n; i++) { const t = i / n, u = 1 - t; push(u * u * u * x0 + 3 * u * u * t * c.x1 + 3 * u * t * t * c.x2 + t * t * t * c.x, u * u * u * y0 + 3 * u * u * t * c.y1 + 3 * u * t * t * c.y2 + t * t * t * c.y); } x0 = c.x; y0 = c.y; }
    else if (c.type === 'Z') { if (cur && cur.length > 2) out.push(cur); cur = null; }
  }
  if (cur && cur.length > 2) out.push(cur);
  // dubbele eindpunten weg
  return out.map((p) => { const q = p.filter((v, i) => { const w = p[(i + 1) % p.length]; return Math.hypot(v[0] - w[0], v[1] - w[1]) > 1e-6; }); return q; }).filter((p) => p.length > 2);
}
function bboxOf(cs) { let a = [1e9, 1e9], b = [-1e9, -1e9]; for (const p of cs) for (const [x, y] of p) { a = [Math.min(a[0], x), Math.min(a[1], y)]; b = [Math.max(b[0], x), Math.max(b[1], y)]; } return { min: a, max: b }; }

export function heartPts(k = 1, n = 120) {
  const p = []; for (let i = 0; i < n; i++) { const t = (i / n) * Math.PI * 2;
    p.push([k * 16 * Math.sin(t) ** 3, k * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))]); }
  return p.reverse(); // tegen de klok in
}

export function splitName(name, upper) {
  let s = (name || '').normalize('NFC').trim(); if (upper) s = s.toLocaleUpperCase('nl-NL');
  return Array.from(s);
}

// ---------- indeling: middelpunten en draaiing van elke toets ----------
// geeft [{x,y,rot,ch|null}] (ch null = lege plek), closed, loopAt
function layoutSlots(chars, o) {
  const p = o.key + o.spacing; const L = o.layout;
  const slots = [];
  const rotFor = (deg) => (o.orient === 'meedraaien' ? deg : 0);
  if (L === 'test') return { slots: [{ x: 0, y: 0, rot: 0, ch: chars.find((c) => c.trim()) || 'S' }], closed: false, grow: null };
  if (L === 'lijn' || L === 'tweeregels') {
    let rows = [chars];
    if (L === 'tweeregels') {
      const cut = chars.findIndex((c) => c === '/' || c === '|');
      if (cut >= 0) rows = [chars.slice(0, cut), chars.slice(cut + 1)];
      else { const h = Math.ceil(chars.length / 2); rows = [chars.slice(0, h), chars.slice(h)]; }
      rows = rows.map((r) => { while (r.length && !r[0].trim()) r.shift(); while (r.length && !r[r.length - 1].trim()) r.pop(); return r; });
    }
    rows.forEach((r, j) => { const y = (rows.length - 1) * p / 2 - j * p; r.forEach((c, i) => slots.push({ x: (i - (r.length - 1) / 2) * p, y, rot: 0, ch: c.trim() ? c : null })); });
    return { slots, closed: false, rows, grow: null };
  }
  if (L === 'cirkel') {
    const g = o.loop ? Math.max(1, o.gap) : o.gap; const N = chars.length + g;
    const make = (R) => chars.map((c, i) => { const phi = (i + (g + 1) / 2) * 360 / N * (g ? 1 : 1) - (g ? 0 : 180 / N) ; const a = phi * Math.PI / 180;
      return { x: R * Math.sin(a), y: R * Math.cos(a), rot: rotFor(-phi), ch: c.trim() ? c : null }; });
    const R0 = N * p / (2 * Math.PI);
    return { make, start: R0, closed: true, gapDir: [0, 1], gapPos: (R) => [0, R], grow: true };
  }
  if (L === 'boog') {
    const A = o.arc; const n = chars.length;
    const make = (R) => chars.map((c, i) => { const phi = -A / 2 + (i + 0.5) * A / n; const a = phi * Math.PI / 180;
      return { x: R * Math.sin(a), y: R * Math.cos(a) - R * (1 + Math.cos(A / 2 * Math.PI / 180)) / 2, rot: rotFor(-phi), ch: c.trim() ? c : null }; });
    const R0 = n * p / (A * Math.PI / 180);
    return { make, start: R0, closed: false, grow: true };
  }
  if (L === 'hart') {
    const g = o.loop ? Math.max(1, o.gap) : o.gap; const N = chars.length + g;
    // dichte bemonstering van de hartlijn (met de klok mee, start in het kuiltje bovenaan)
    const M = 2000; const base = []; for (let i = 0; i <= M; i++) { const t = i / M * Math.PI * 2; base.push([16 * Math.sin(t) ** 3, 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)]); }
    const cum = [0]; for (let i = 1; i <= M; i++) cum.push(cum[i - 1] + Math.hypot(base[i][0] - base[i - 1][0], base[i][1] - base[i - 1][1]));
    const Ltot = cum[M]; const yc = 0; // hart iets omhoog: middelpunt rond (0,-2)
    const at = (s) => { let lo = 0, hi = M; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (cum[m] < s) lo = m; else hi = m; } const f = (s - cum[lo]) / (cum[hi] - cum[lo] || 1);
      const P = [base[lo][0] + f * (base[hi][0] - base[lo][0]), base[lo][1] + f * (base[hi][1] - base[lo][1])]; const T = [base[hi][0] - base[lo][0], base[hi][1] - base[lo][1]]; return { P, T }; };
    const make = (k) => chars.map((c, i) => { const s = (i + (g + 1) / 2) / N * Ltot; const { P, T } = at(s % Ltot);
      const n = [-T[1], T[0]]; // links van de looprichting = buiten (met de klok mee)
      const rot = Math.atan2(-n[0], n[1]) * 180 / Math.PI;
      return { x: P[0] * k, y: (P[1] - yc) * k, rot: rotFor(rot), ch: c.trim() ? c : null }; });
    return { make, start: N * p / Ltot, closed: true, gapPos: (k) => { const { P } = at(0); return [P[0] * k, (P[1] - yc) * k]; }, gapDir: [0, 1], grow: true };
  }
  throw new Error('Onbekende vorm: ' + L);
}

const T_ = (trash) => (x) => { if (x) trash.push(x); return x; };

function kshape(W, round, s, r) { return round ? W.CrossSection.circle(s / 2, SEG * 2) : rsq(W, s, r); }
function rsq(W, s, r) { const { CrossSection } = W; const a = CrossSection.square([s - 2 * r, s - 2 * r], true); const b = a.offset(r, 'Round', 2, SEG); a.delete(); return b; }
function placed(cs, sl, T) { return T(T(cs.rotate(sl.rot)).translate([sl.x, sl.y])); }

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

// ---------- hoofdfunctie ----------
// font: opentype.js Font. Geeft { base, caps:[{body, letter, ch, slot}], info }
export function buildClicker(W, font, opts = {}) {
  const o = { ...DEFAULTS, ...opts };
  const { CrossSection, Manifold } = W;
  const trash = []; const T = T_(trash);
  const sw = SWITCHES[o.sw] || SWITCHES.mx;
  const warn = [];
  try {
    const chars = splitName(o.name, o.upper).filter((c) => !(o.layout !== 'tweeregels' && (c === '/' || c === '|')));
    const letters = chars.filter((c) => c.trim() && c !== '/' && c !== '|');
    if (!letters.length) throw new Error('Typ eerst een naam.');
    if (letters.length > 24) throw new Error('Maximaal 24 letters, anders wordt hij te groot voor het printbed.');

    // --- indeling (met groeien tot niets meer overlapt) ---
    const round = o.capShape === 'rond' || (o.capShape === 'auto' && (o.layout === 'cirkel' || o.layout === 'hart'));
    if (o.layout === 'hart' && o.loop) o.gap = Math.max(2, o.gap);
    const lay = layoutSlots(chars, o);
    let slots = lay.slots, scale = null;
    if (lay.grow) {
      scale = lay.start; let ok = false;
      for (let it = 0; it < 80; it++) { slots = lay.make(scale); if (!overlaps(W, slots.filter((s) => s.ch), o.key + Math.min(o.spacing, 0.8), round)) { ok = true; break; } scale *= 1.025; }
      if (!ok) warn.push('Toetsen raken elkaar nog; maak de ruimte tussen toetsen groter.');
    }
    const keys = slots.filter((s) => s.ch);

    // middenknop (hartje) bij cirkel/hart
    let center = null;
    if (lay.closed && o.centerKey) {
      const cx = keys.reduce((s, k) => s + k.x, 0) / keys.length, cy = keys.reduce((s, k) => s + k.y, 0) / keys.length;
      const c = { x: cx, y: lay.closed && o.layout === 'hart' ? cy + 2 : cy, rot: 0, ch: '♥', symbol: true };
      if (!overlaps(W, [...keys, c], o.key + 4, round, true)) center = c; else warn.push('Geen plek voor de hartjestoets in het midden.');
    }
    const allKeys = center ? [...keys, center] : keys;

    // --- voet 2D ---
    const FW = o.key + 2 * o.rim; const fr = Math.min(o.rim + 1.5, FW / 2 - 0.1);
    const fps = allKeys.map((k) => placed(T(kshape(W, round, FW, fr)), k, T));
    const ringParts = [...fps];
    // banden tussen opeenvolgende plekken (ook over lege plekken heen)
    const pathSlots = slots.map((s) => placed(T(kshape(W, round, FW, fr)), s, T));
    const conn = [];
    for (let i = 0; i + 1 < pathSlots.length; i++) conn.push([pathSlots[i], pathSlots[i + 1]]);
    if (lay.closed && pathSlots.length > 2) {
      // over de opening (gat) heen sluiten via het gat-punt
      const gp = lay.gapPos(scale); const gs = placed(T(kshape(W, round, FW, fr)), { x: gp[0], y: gp[1], rot: 0 }, T);
      conn.push([pathSlots[pathSlots.length - 1], gs]); conn.push([gs, pathSlots[0]]); ringParts.push(gs);
    }
    if (o.layout === 'cirkel') { // echte ronde krans
      const R = Math.hypot(keys[0].x, keys[0].y);
      ringParts.push(T(T(CrossSection.circle(R + FW / 2, SEG * 4)).subtract(T(CrossSection.circle(R - FW / 2, SEG * 4)))));
    } else for (const [a, b] of conn) ringParts.push(T(CrossSection.hull([a, b])));
    // oogje
    let loopCS = null, loopHole = null;
    if (o.loop) {
      let P, dir;
      if (lay.closed) { const gp = lay.gapPos(scale); P = gp; dir = lay.gapDir; }
      else if (o.layout === 'test') { P = [0, 0]; dir = [-1, 0]; }
      else { const f = slots[0]; const s2 = slots[1] || { x: f.x + 1, y: f.y }; const d = [f.x - s2.x, f.y - s2.y]; const l = Math.hypot(d[0], d[1]) || 1; dir = [d[0] / l, d[1] / l]; P = [f.x, f.y]; if (o.layout === 'tweeregels') dir = [-1, 0]; }
      const capFoot = keys.map((k) => placed(T(kshape(W, round, o.key + 1, 1)), k, T));
      let hit = true;
      for (let off = FW / 2 + 1; off <= FW / 2 + 14 && hit; off += 0.5) {
        const C = [P[0] + dir[0] * off, P[1] + dir[1] * off];
        const disk = T(T(CrossSection.circle(6, SEG)).translate(C));
        const neck = T(T(CrossSection.circle(4.5, SEG)).translate([P[0] + dir[0] * Math.min(off - 6, FW / 2 - 2), P[1] + dir[1] * Math.min(off - 6, FW / 2 - 2)]));
        loopCS = T(CrossSection.hull([disk, neck]));
        loopHole = T(T(CrossSection.circle(2.7, SEG)).translate(C));
        const ringZone = T(T(CrossSection.circle(4.4, SEG)).translate(C)); // gat + ruimte voor de ringdraad
        hit = false; for (const cf of capFoot) { const x = T(cf.intersect(ringZone)); if (x.area() > 0.01) { hit = true; break; } }
      }
      if (hit) { warn.push('Oogje zit in de weg; het is een gat in de rand geworden.'); loopCS = null; loopHole = T(T(CrossSection.circle(2.7, SEG)).translate(P)); }
      else ringParts.push(loopCS);
    }
    let ring = T(CrossSection.union(ringParts));
    let fill = null;
    if (lay.closed && o.fill) {
      const poly = slots.map((s) => [s.x, s.y]); if (lay.gapPos) { const gp = lay.gapPos(scale); poly.push(gp); }
      // volgorde: met de klok mee; CrossSection wil tegen de klok in -> Positive/NonZero
      fill = o.layout === 'cirkel' ? T(CrossSection.circle(Math.hypot(keys[0].x, keys[0].y), SEG * 4)) : T(T(new CrossSection([poly], 'NonZero')).offset(1, 'Round', 2, SEG));
    }
    const baseH = o.floor + (sw.below - o.plateT) + o.plateT; // = floor + below
    const fillH = Math.min(baseH, o.floor + 0.8);
    let base = T(ring.extrude(baseH));
    if (fill) base = T(base.add(T(fill.extrude(fillH))));
    // vakken
    const holes = [];
    const cut = o.cut + o.holeTol, cav = sw.cavity + o.holeTol;
    for (const k of allKeys) {
      const plateHole = T(T(T(CrossSection.square([cut, cut], true)).extrude(o.plateT + 2)).translate([0, 0, baseH - o.plateT - 0.5]));
      const cavity = T(T(T(CrossSection.square([cav, cav], true)).extrude(baseH - o.plateT - o.floor)).translate([0, 0, o.floor]));
      let h = T(plateHole.add(cavity));
      if (o.pushHole) h = T(h.add(T(T(Manifold.cylinder(o.floor + 2, 4, 4, SEG)).translate([0, 0, -1]))));
      holes.push(T(T(h.rotate([0, 0, k.rot])).translate([k.x, k.y, 0])));
    }
    if (loopHole) holes.push(T(T(loopHole.extrude(baseH + 2)).translate([0, 0, -1])));
    base = T(base.subtract(T(Manifold.union(holes))));
    // ondergrens: alles op z=0
    // --- toetsen ---
    const wallC = 1.2;
    const skirtGap = 4.5;                                     // onderkant toets boven de voet in rust
    const stemTop = sw.stemTop - skirtGap;                    // in toets-coördinaten (0 = onderrand)
    const socketD = 3.6;
    const stemBot = stemTop - socketD;
    const ceil = Math.max(stemTop + 0.6, sw.housTop - skirtGap + sw.travel + 0.4);
    const topT = 1.8; const capH = ceil + topT; const ch = 0.6; // afschuining bovenrand
    let outer, inner;
    if (round) { // typemachine-toets: ronde schijf op een steeltje, zonder rok (past om elk MX-huis)
      outer = T(Manifold.hull([T(T(T(CrossSection.circle(o.key / 2, SEG * 2)).extrude(topT - ch)).translate([0, 0, ceil])), T(T(T(CrossSection.circle(o.key / 2 - ch, SEG * 2)).extrude(ch)).translate([0, 0, capH - ch]))]));
      inner = null;
    } else {
      outer = T(Manifold.hull([T(T(rsq(W, o.key, 2)).extrude(capH - ch)), T(T(T(rsq(W, o.key - 2 * ch, 2 - ch * 0.4)).extrude(ch)).translate([0, 0, capH - ch]))]));
      inner = T(T(T(rsq(W, o.key - 2 * wallC, 1.2)).extrude(ceil + 1)).translate([0, 0, -1]));
    }
    const cyl = T(T(Manifold.cylinder(ceil - stemBot + 0.3, 2.75, 2.75, SEG)).translate([0, 0, stemBot]));
    const armL = 4.0 + o.stemTol, armW = 1.2 + o.stemTol;
    const cross = T(T(T(CrossSection.union([T(CrossSection.square([armL, armW], true)), T(CrossSection.square([armW, armL], true))])).extrude(socketD + 1)).translate([0, 0, stemBot - 1]));
    const capShell = T(T(T(inner ? outer.subtract(inner) : outer).add(cyl)).subtract(cross));

    // letters: één schaal voor de hele naam, zodat ze even groot zijn en op één lijn staan
    const em = 100; const glyphs = new Map(); const missing = [];
    for (const c of new Set(letters)) { const g = glyphContours(font, c, em); if (!g || !g.length) missing.push(c); else glyphs.set(c, g); }
    if (missing.length) throw new Error('Dit lettertype kent deze teken(s) niet: ' + missing.join(' ') + '. Kies een ander lettertype.');
    let yMin = 1e9, yMax = -1e9, wMax = 0;
    for (const g of glyphs.values()) { const b = bboxOf(g); yMin = Math.min(yMin, b.min[1]); yMax = Math.max(yMax, b.max[1]); wMax = Math.max(wMax, b.max[0] - b.min[0]); }
    const usable = round ? (o.key - 3.4) * 0.86 : o.key - 2 * wallC - 1.6;
    let s = o.textH / (yMax - yMin);
    if (s * (yMax - yMin) > usable) s = usable / (yMax - yMin);
    if (s * wMax > usable) { s = usable / wMax; warn.push('Letters iets kleiner gemaakt zodat de breedste letter past.'); }
    const yMid = (yMin + yMax) / 2;
    const face = T(round ? CrossSection.circle(o.key / 2 - 1.4, SEG * 2) : rsq(W, o.key - 2 * wallC - 0.6, 1));
    const letterCS = (c) => {
      if (c === '♥') { const hp = T(new CrossSection([heartPts(1)], 'NonZero')); const b = hp.bounds(); const k = (o.key - 2 * wallC - 3) / Math.max(b.max[0] - b.min[0], b.max[1] - b.min[1]);
        return T(T(T(hp.translate([-(b.min[0] + b.max[0]) / 2, -(b.min[1] + b.max[1]) / 2])).scale([k, k])).intersect(face)); }
      const g = glyphs.get(c); const b = bboxOf(g);
      let cs = T(new CrossSection(g, 'NonZero'));
      cs = T(T(cs.translate([-(b.min[0] + b.max[0]) / 2, -yMid])).scale([s, s]));
      cs = T(T(cs.simplify(0.005)).intersect(face));
      return cs;
    };
    const caps = []; const minFeature = [];
    allKeys.forEach((k, i) => {
      const L = letterCS(k.ch);
      // piepkleine stukjes (< 0,3 mm²) weghalen
      const parts = L.decompose().filter((p) => { trash.push(p); return p.area() > 0.3; });
      const Lc = parts.length ? T(CrossSection.union(parts)) : null;
      // dunste lijn: krimp met 0,25 mm; verdwijnt er een eiland dan is er iets dunner dan 0,5 mm
      if (Lc) { const sh = T(Lc.offset(-0.25, 'Round', 2, 16)); const n0 = Lc.decompose().map((p) => { trash.push(p); return p; }).length; const n1 = sh.decompose().map((p) => { trash.push(p); return p; }).length; if (n1 < n0 || sh.isEmpty()) minFeature.push(k.ch); }
      let body = capShell, letter = null;
      if (Lc) {
        if (o.label === 'gegraveerd') body = T(capShell.subtract(T(T(Lc.extrude(2)).translate([0, 0, capH - 0.8]))));
        else { const d = Math.min(o.inlay, topT - 0.6); letter = T(T(Lc.extrude(d)).translate([0, 0, capH - d])); body = T(capShell.subtract(T(T(Lc.extrude(d + 1)).translate([0, 0, capH - d])))); }
      }
      caps.push({ ch: k.ch, slot: k, body, letter, symbol: !!k.symbol, index: i, nIslands: parts.length });
    });
    if (minFeature.length) warn.push('Dunne lijntjes (< 0,5 mm) in: ' + [...new Set(minFeature)].join(' ') + '. Maak de letters groter.');

    // --- in elkaar (voor het 3D-beeld) en printplaat ---
    const assembled = []; const printed = [];
    for (const c of caps) {
      const place = (m) => T(T(T(m.rotate([0, 0, c.slot.rot])).translate([c.slot.x, c.slot.y, baseH + skirtGap])));
      assembled.push({ body: place(c.body), letter: c.letter ? place(c.letter) : null });
    }
    // schakelaars (alleen voor het 3D-beeld)
    const swParts = allKeys.map((k) => {
      const hous = T(Manifold.hull([T(T(T(rsq(W, 14.6, 1)).extrude(1)).translate([0, 0, baseH])), T(T(T(rsq(W, 11.4, 1.5)).extrude(0.5)).translate([0, 0, baseH + sw.housTop - 0.5]))]));
      const st = T(T(T(CrossSection.union([T(CrossSection.square([4, 1.2], true)), T(CrossSection.square([1.2, 4], true))])).extrude(sw.stemTop - sw.housTop)).translate([0, 0, baseH + sw.housTop]));
      return T(T(T(hous.add(st)).rotate([0, 0, k.rot])).translate([k.x, k.y, 0]));
    });
    const switchesM = T(Manifold.union(swParts));
    // printplaat: voet, en daaronder de toetsen ondersteboven (letter op het bed) in een raster
    const bb = base.boundingBox(); const bw = bb.max[0] - bb.min[0], bh = bb.max[1] - bb.min[1];
    const g = 4; const cell = o.key + g; const bed = 270, margin = 6;
    let cols = Math.max(1, Math.floor((Math.max(bw, 120) + g) / cell)); cols = Math.min(cols, Math.floor((bed - 2 * margin + g) / cell));
    const rowsN = Math.ceil(caps.length / cols);
    const gridW = cols * cell - g, gridH = rowsN * cell - g;
    let totalW = Math.max(bw, gridW), totalH = bh + g + 2 + gridH;
    let side = false;
    if (totalH > bed - 2 * margin) { // naast elkaar proberen
      const cols2 = Math.max(1, Math.floor((bed - 2 * margin - bw - 6 + g) / cell)); const rows2 = Math.ceil(caps.length / cols2);
      if (cols2 > 0 && rows2 * cell - g <= bed - 2 * margin) { side = true; cols = cols2; }
    }
    const flip = (m) => { const r = T(m.rotate([180, 0, 0])); return T(r.translate([0, 0, capH])); };
    const baseP = T(base.translate([-(bb.min[0] + bb.max[0]) / 2, 0, 0]));
    const bp = baseP.boundingBox();
    caps.forEach((c, i) => {
      const col = i % cols, row = Math.floor(i / cols);
      let x, y;
      if (!side) { const rowN = Math.min(cols, caps.length - row * cols); x = (col - (rowN - 1) / 2) * cell; y = bp.min[1] - g - 2 - o.key / 2 - row * cell; }
      else { x = bp.max[0] + 6 + o.key / 2 + col * cell; y = bp.max[1] - o.key / 2 - row * cell; }
      printed.push({ body: T(flip(c.body).translate([x, y, 0])), letter: c.letter ? T(flip(c.letter).translate([x, y, 0])) : null });
    });
    // alles centreren op het bed (0..270)
    let mn = [1e9, 1e9], mx = [-1e9, -1e9];
    const acc = (m) => { const b = m.boundingBox(); mn = [Math.min(mn[0], b.min[0]), Math.min(mn[1], b.min[1])]; mx = [Math.max(mx[0], b.max[0]), Math.max(mx[1], b.max[1])]; };
    acc(baseP); printed.forEach((p) => acc(p.body));
    const dx = bed / 2 - (mn[0] + mx[0]) / 2, dy = bed / 2 - (mn[1] + mx[1]) / 2;
    const mv = (m) => (m ? T(m.translate([dx, dy, 0])) : null);
    const plate = { base: mv(baseP), caps: printed.map((p) => ({ body: mv(p.body), letter: mv(p.letter) })) };
    const fitsBed = (mx[0] - mn[0]) <= bed - 2 && (mx[1] - mn[1]) <= bed - 2;
    if (!fitsBed) warn.push('Past niet in één keer op het printbed (270 × 270 mm): print de voet en de toetsen apart.');
    const fitsBase = bw <= bed - 2 && bh <= bed - 2;

    // --- meshes + controle ---
    const mesh = (m) => (m ? meshOf(m) : null);
    const out = {
      base: mesh(base),
      assembled: assembled.map((a) => ({ body: mesh(a.body), letter: mesh(a.letter) })),
      switches: mesh(switchesM),
      plate: { base: mesh(plate.base), caps: plate.caps.map((c, i) => ({ body: mesh(c.body), letter: mesh(c.letter), ch: caps[i].ch, symbol: caps[i].symbol })) },
    };
    const bodies = [base, ...caps.map((c) => c.body), ...caps.filter((c) => c.letter).map((c) => c.letter)];
    const pieces = bodies.map((b) => b.decompose().map((m) => { trash.push(m); return m; }).length);
    const checks = [checkMesh(out.plate.base), ...out.plate.caps.map((c) => checkMesh(c.body)), ...out.plate.caps.filter((c) => c.letter).map((c) => checkMesh(c.letter))];
    const vol = { base: base.volume(), caps: caps.reduce((s, c) => s + c.body.volume(), 0), letters: caps.reduce((s, c) => s + (c.letter ? c.letter.volume() : 0), 0) };
    const box = (m) => { const b = m.boundingBox(); return [b.max[0] - b.min[0], b.max[1] - b.min[1], b.max[2] - b.min[2]]; };
    const info = {
      letters: letters.length, switches: allKeys.length, keycaps: caps.length, center: !!center,
      round, baseSize: box(base), capSize: [o.key, o.key, round ? capH - stemBot : capH], baseH, capH, assembledH: baseH + skirtGap + capH,
      fitsBed, fitsBase, layout: o.layout, scale, textMM: s * (yMax - yMin), capHeightMM: s * (font.tables.os2 && font.tables.os2.sCapHeight ? font.tables.os2.sCapHeight / font.unitsPerEm * em : 70),
      volumes: vol, grams: { base: vol.base / 1000 * 1.24, caps: vol.caps / 1000 * 1.24, letters: vol.letters / 1000 * 1.24 },
      ok: checks.every((c) => c.ok) && pieces[0] === 1 && pieces.slice(1, 1 + caps.length).every((p) => p === 1),
      checks, pieces, warn, islands: caps.map((c) => c.nIslands),
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

// 3MF voor Snapmaker Orca: voet = object (T1); elke toets = eigen object met twee onderdelen:
// toets (T2, of om en om T2/T4) en letter (T3). Kleuren per gereedschapskop staan in model_settings.config.
export function to3MF(r, name = 'Naam-clicker', colors = ['#FFFFFF', '#F4A6C9', '#7B2D8E', '#8FD3F4']) {
  const objs = [], items = [], cfg = []; let id = 2;
  const part = (m, nm, ex) => { const pid = id++; objs.push(`<object id="${pid}" name="${esc(nm)}" type="model" pid="1" pindex="${ex - 1}">${meshXML(m)}</object>`); return { pid, nm, ex }; };
  const group = (nm, parts) => { const oid = id++;
    objs.push(`<object id="${oid}" name="${esc(nm)}" type="model"><components>${parts.map((p) => `<component objectid="${p.pid}"/>`).join('')}</components></object>`);
    items.push(`<item objectid="${oid}" printable="1"/>`); cfg.push({ oid, nm, ex: parts[0].ex, parts }); };
  group('Voet', [part(r.plate.base, 'Voet', 1)]);
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
