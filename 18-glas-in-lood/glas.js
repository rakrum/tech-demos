// Glas-in-lood-maker: seeds, Voronoi, celkleuren, SVG/PNG. Geen DOM nodig (testbaar in Node).
import { Delaunay } from './d3-delaunay.bundle.js';

export const DEFAULTS = {
  cells: 600, detail: 60, lloyd: 2, boost: 115, palette: 0,
  widthMm: 150, leadMm: 1.2, frame: true, frameMm: 2.5, engraveMm: 0.2, seed: 1,
};

export function nlNum(v, d = 1) { return Number(v).toFixed(d).replace('.', ','); }
const f3 = (v) => (Math.round(v * 1000) / 1000).toString();

function rng(seed) {
  let a = (seed >>> 0) || 1;
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// Gewichtskaart: 1 + detail*9*randsterkte (0..1)
export function densityMap(img, detail) {
  const { width: w, height: h, data } = img;
  const g = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) g[i] = 0.299 * data[i * 4] + 0.587 * data[i * 4 + 1] + 0.114 * data[i * 4 + 2];
  const m = new Float32Array(w * h);
  for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
    const i = y * w + x;
    const gx = -g[i - w - 1] - 2 * g[i - 1] - g[i + w - 1] + g[i - w + 1] + 2 * g[i + 1] + g[i + w + 1];
    const gy = -g[i - w - 1] - 2 * g[i - w] - g[i - w + 1] + g[i + w - 1] + 2 * g[i + w] + g[i + w + 1];
    m[i] = Math.hypot(gx, gy);
  }
  // vervagen (box 2 keer, straal 3)
  let a = m, b = new Float32Array(w * h);
  for (let pass = 0; pass < 2; pass++) {
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      let s = 0, c = 0;
      for (let k = -3; k <= 3; k++) { const xx = x + k; if (xx >= 0 && xx < w) { s += a[y * w + xx]; c++; } }
      b[y * w + x] = s / c;
    }
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      let s = 0, c = 0;
      for (let k = -3; k <= 3; k++) { const yy = y + k; if (yy >= 0 && yy < h) { s += b[yy * w + x]; c++; } }
      a[y * w + x] = s / c;
    }
  }
  const sorted = Float32Array.from(a).sort();
  const p95 = sorted[Math.floor(sorted.length * 0.95)] || 1;
  const d = new Float32Array(w * h);
  const k = (detail / 100) * 9;
  for (let i = 0; i < w * h; i++) d[i] = 1 + k * Math.min(1, a[i] / p95);
  return d;
}

export function makeSeeds(w, h, n, dens, lloyd, seed) {
  const rand = rng(seed);
  let maxD = 1; for (let i = 0; i < dens.length; i++) if (dens[i] > maxD) maxD = dens[i];
  const pts = new Float64Array(n * 2);
  for (let i = 0; i < n; i++) {
    for (let t = 0; t < 200; t++) {
      const x = rand() * w, y = rand() * h;
      if (rand() * maxD <= dens[Math.min(h - 1, y | 0) * w + Math.min(w - 1, x | 0)]) { pts[2 * i] = x; pts[2 * i + 1] = y; break; }
      pts[2 * i] = x; pts[2 * i + 1] = y;
    }
  }
  for (let it = 0; it < lloyd; it++) {
    const del = new Delaunay(pts);
    const sx = new Float64Array(n), sy = new Float64Array(n), sw = new Float64Array(n);
    let last = 0;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      last = del.find(x + 0.5, y + 0.5, last);
      const wt = dens[y * w + x];
      sx[last] += wt * (x + 0.5); sy[last] += wt * (y + 0.5); sw[last] += wt;
    }
    for (let i = 0; i < n; i++) if (sw[i] > 0) { pts[2 * i] = sx[i] / sw[i]; pts[2 * i + 1] = sy[i] / sw[i]; }
  }
  return pts;
}

function kmeans(cols, wts, k, rand) {
  const n = cols.length;
  const cen = [];
  for (let i = 0; i < k; i++) cen.push(cols[Math.floor(rand() * n)].slice());
  const asg = new Int32Array(n);
  for (let it = 0; it < 12; it++) {
    for (let i = 0; i < n; i++) {
      let best = 0, bd = Infinity;
      for (let j = 0; j < k; j++) { const d = (cols[i][0] - cen[j][0]) ** 2 + (cols[i][1] - cen[j][1]) ** 2 + (cols[i][2] - cen[j][2]) ** 2; if (d < bd) { bd = d; best = j; } }
      asg[i] = best;
    }
    const s = cen.map(() => [0, 0, 0, 0]);
    for (let i = 0; i < n; i++) { const t = s[asg[i]]; t[0] += cols[i][0] * wts[i]; t[1] += cols[i][1] * wts[i]; t[2] += cols[i][2] * wts[i]; t[3] += wts[i]; }
    for (let j = 0; j < k; j++) if (s[j][3] > 0) cen[j] = [s[j][0] / s[j][3], s[j][1] / s[j][3], s[j][2] / s[j][3]];
  }
  return cols.map((_, i) => cen[asg[i]]);
}

// Bouwt het model in mm. img: {width,height,data}
export function buildModel(img, o) {
  o = { ...DEFAULTS, ...o };
  const { width: w, height: h, data } = img;
  const n = Math.max(4, Math.min(5000, Math.round(o.cells)));
  const dens = densityMap(img, o.detail);
  const pts = makeSeeds(w, h, n, dens, o.lloyd, o.seed);
  const del = new Delaunay(pts);
  const vor = del.voronoi([0, 0, w, h]);
  const sum = new Float64Array(n * 4);
  let last = 0;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    last = del.find(x + 0.5, y + 0.5, last);
    const i = (y * w + x) * 4, j = last * 4;
    sum[j] += data[i]; sum[j + 1] += data[i + 1]; sum[j + 2] += data[i + 2]; sum[j + 3]++;
  }
  let cols = [], wts = [], idx = [];
  const mid = (v) => v;
  for (let c = 0; c < n; c++) {
    const poly = vor.cellPolygon(c);
    if (!poly || poly.length < 4) continue;
    let r, g, b;
    if (sum[c * 4 + 3] > 0) { const k = sum[c * 4 + 3]; r = sum[c * 4] / k; g = sum[c * 4 + 1] / k; b = sum[c * 4 + 2] / k; }
    else { const px = Math.min(w - 1, pts[2 * c] | 0), py = Math.min(h - 1, pts[2 * c + 1] | 0), i = (py * w + px) * 4; r = data[i]; g = data[i + 1]; b = data[i + 2]; }
    // kleurboost: verzadiging en een beetje contrast
    const s = o.boost / 100, l = 0.299 * r + 0.587 * g + 0.114 * b;
    r = l + (r - l) * s; g = l + (g - l) * s; b = l + (b - l) * s;
    const ct = 1 + (s - 1) * 0.4;
    r = 128 + (r - 128) * ct; g = 128 + (g - 128) * ct; b = 128 + (b - 128) * ct;
    cols.push([r, g, b].map((v) => Math.max(0, Math.min(255, v)))); wts.push(Math.max(1, sum[c * 4 + 3])); idx.push({ c, poly });
  }
  if (o.palette >= 2 && o.palette < cols.length) cols = kmeans(cols, wts, o.palette, rng(o.seed + 7));
  const sc = o.widthMm / w, Wmm = o.widthMm, Hmm = h * sc;
  const hex = (c) => '#' + c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
  const cells = idx.map((e, i) => ({ poly: e.poly.slice(0, -1).map(([x, y]) => [x * sc, y * sc]), color: hex(cols[i]) }));
  // unieke randen
  const seen = new Set(), edges = [];
  const eps = 1e-3, onB = (x, y, ax, v) => Math.abs((ax === 0 ? x : y) - v) < eps;
  const key = (x, y) => Math.round(x / eps) + ',' + Math.round(y / eps);
  let boundary = 0;
  for (const cell of cells) {
    const p = cell.poly;
    for (let i = 0; i < p.length; i++) {
      const [x1, y1] = p[i], [x2, y2] = p[(i + 1) % p.length];
      if (Math.hypot(x2 - x1, y2 - y1) < 1e-4) continue;
      const border = (onB(x1, y1, 0, 0) && onB(x2, y2, 0, 0)) || (onB(x1, y1, 0, Wmm) && onB(x2, y2, 0, Wmm)) || (onB(x1, y1, 1, 0) && onB(x2, y2, 1, 0)) || (onB(x1, y1, 1, Hmm) && onB(x2, y2, 1, Hmm));
      if (border) { boundary++; continue; }
      const k1 = key(x1, y1), k2 = key(x2, y2);
      const kk = k1 < k2 ? k1 + '|' + k2 : k2 + '|' + k1;
      if (seen.has(kk)) continue;
      seen.add(kk); edges.push([x1, y1, x2, y2]);
    }
  }
  return { Wmm, Hmm, cells, edges, o, nCells: cells.length, colors: new Set(cells.map((c) => c.color)).size };
}

const frameRect = (m, wd) => ({ x: wd / 2, y: wd / 2, w: m.Wmm - wd, h: m.Hmm - wd });
const head = (m, title) => `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${f3(m.Wmm)}mm" height="${f3(m.Hmm)}mm" viewBox="0 0 ${f3(m.Wmm)} ${f3(m.Hmm)}">\n<title>${title}</title>\n`;
const edgePath = (edges) => edges.map(([a, b, c, d]) => `M${f3(a)} ${f3(b)}L${f3(c)} ${f3(d)}`).join('');

export function colourSvg(m, title = 'Glas in lood') {
  let s = head(m, title);
  s += `<g id="glas" stroke-width="0.05" stroke-linejoin="round">\n`;
  for (const c of m.cells) s += `<polygon fill="${c.color}" stroke="${c.color}" points="${c.poly.map(([x, y]) => f3(x) + ',' + f3(y)).join(' ')}"/>\n`;
  s += `</g>\n<g id="lood" fill="none" stroke="#000000" stroke-width="${f3(m.o.leadMm)}" stroke-linecap="round" stroke-linejoin="round">\n<path d="${edgePath(m.edges)}"/>\n`;
  if (m.o.frame) { const r = frameRect(m, m.o.frameMm); s += `<rect x="${f3(r.x)}" y="${f3(r.y)}" width="${f3(r.w)}" height="${f3(r.h)}" stroke-width="${f3(m.o.frameMm)}" stroke-linejoin="miter"/>\n`; }
  return s + `</g>\n</svg>\n`;
}

export function leadSvg(m, title = 'Loodlijnen') {
  const wd = m.o.engraveMm;
  let s = head(m, title);
  s += `<g id="loodlijnen" fill="none" stroke="#000000" stroke-width="${f3(wd)}" stroke-linecap="round" stroke-linejoin="round">\n<path d="${edgePath(m.edges)}"/>\n`;
  if (m.o.frame) { const r = frameRect(m, wd); s += `<rect x="${f3(r.x)}" y="${f3(r.y)}" width="${f3(r.w)}" height="${f3(r.h)}"/>\n`; }
  return s + `</g>\n</svg>\n`;
}

export function outlineSvg(m, title = 'Buitenrand') {
  let s = head(m, title);
  return s + `<rect id="buitenrand" x="0.05" y="0.05" width="${f3(m.Wmm - 0.1)}" height="${f3(m.Hmm - 0.1)}" fill="none" stroke="#ff0000" stroke-width="0.1"/>\n</svg>\n`;
}

// Tekent het kleurwerk op een canvas-context, pxPerMm = schaal
export function draw(ctx, m, pxPerMm) {
  const W = m.Wmm * pxPerMm, H = m.Hmm * pxPerMm;
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, W, H);
  ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.lineWidth = Math.max(0.6, 0.05 * pxPerMm);
  for (const c of m.cells) {
    ctx.beginPath();
    c.poly.forEach(([x, y], i) => (i ? ctx.lineTo(x * pxPerMm, y * pxPerMm) : ctx.moveTo(x * pxPerMm, y * pxPerMm)));
    ctx.closePath(); ctx.fillStyle = c.color; ctx.strokeStyle = c.color; ctx.fill(); ctx.stroke();
  }
  ctx.strokeStyle = '#000'; ctx.lineWidth = m.o.leadMm * pxPerMm;
  ctx.beginPath();
  for (const [a, b, c, d] of m.edges) { ctx.moveTo(a * pxPerMm, b * pxPerMm); ctx.lineTo(c * pxPerMm, d * pxPerMm); }
  ctx.stroke();
  if (m.o.frame) {
    const r = frameRect(m, m.o.frameMm); ctx.lineWidth = m.o.frameMm * pxPerMm; ctx.lineJoin = 'miter';
    ctx.strokeRect(r.x * pxPerMm, r.y * pxPerMm, r.w * pxPerMm, r.h * pxPerMm);
  }
}

export function pngSize(m, dpi) { return [Math.round(m.Wmm / 25.4 * dpi), Math.round(m.Hmm / 25.4 * dpi)]; }
export function slugFilename(name) { return (name || 'glas-in-lood').replace(/\.[a-z0-9]+$/i, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'glas-in-lood'; }
