/**
 * Foto naar enkellijns lijntekening, in de browser.
 *
 * Ideeën geïnspireerd op linedraw van Lingdong Huang
 * (https://github.com/LingDong-/linedraw, MIT):
 * contourlijnen uit randdetectie, plus optionele arcering in donkere delen.
 * Deze implementatie is in JavaScript herschreven (Canny-achtige randen,
 * polyline-tracing, Ramer–Douglas–Peucker, arcering onder twee hoeken).
 */

export function nlNum(n, digits = 1) {
  const s = Number(n).toFixed(digits);
  return s.replace('.', ',');
}

export function slugFilename(name, fallback = 'lijntekening') {
  const base = String(name || '')
    .replace(/\.[a-z0-9]+$/i, '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);
  return `lijntekening-${base || fallback}.svg`;
}

export const DEFAULTS = {
  maxSide: 560,
  edgeThreshold: 55,   // 0–100, lager = meer randen
  hatch: true,
  hatchDensity: 6,     // 1–10, hoger = dichter
  minLengthMm: 1.5,
  simplify: 5,         // 1–10, hoger = gladder / minder punten
  widthMm: 100,
};

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function fmtN(n) {
  return String(Math.round(n * 100) / 100);
}

function luma(r, g, b) {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function toGray(imageData) {
  const { data, width, height } = imageData;
  const gray = new Float32Array(width * height);
  for (let i = 0, j = 0; i < data.length; i += 4, j++) {
    gray[j] = luma(data[i], data[i + 1], data[i + 2]);
  }
  return gray;
}

/** Contrast oprekken, met een klein beetje afknippen van de uiteinden. */
function autocontrast(gray, clip = 0.01) {
  const hist = new Uint32Array(256);
  for (let i = 0; i < gray.length; i++) {
    hist[clamp(Math.round(gray[i]), 0, 255)]++;
  }
  const cut = Math.floor(gray.length * clip);
  let lo = 0, hi = 255, acc = 0;
  for (let i = 0; i < 256; i++) {
    acc += hist[i];
    if (acc > cut) { lo = i; break; }
  }
  acc = 0;
  for (let i = 255; i >= 0; i--) {
    acc += hist[i];
    if (acc > cut) { hi = i; break; }
  }
  if (hi <= lo) return gray;
  const scale = 255 / (hi - lo);
  const out = new Float32Array(gray.length);
  for (let i = 0; i < gray.length; i++) {
    out[i] = clamp((gray[i] - lo) * scale, 0, 255);
  }
  return out;
}

function gaussKernel(sigma) {
  const r = Math.max(1, Math.ceil(sigma * 2.5));
  const k = new Float32Array(r * 2 + 1);
  const s2 = 2 * sigma * sigma;
  let sum = 0;
  for (let i = -r; i <= r; i++) {
    const v = Math.exp(-(i * i) / s2);
    k[i + r] = v;
    sum += v;
  }
  for (let i = 0; i < k.length; i++) k[i] /= sum;
  return k;
}

function convSep(src, w, h, kernel) {
  const r = (kernel.length - 1) >> 1;
  const tmp = new Float32Array(w * h);
  const out = new Float32Array(w * h);
  for (let y = 0; y < h; y++) {
    const row = y * w;
    for (let x = 0; x < w; x++) {
      let acc = 0;
      for (let i = -r; i <= r; i++) {
        const xx = x + i < 0 ? 0 : x + i >= w ? w - 1 : x + i;
        acc += src[row + xx] * kernel[i + r];
      }
      tmp[row + x] = acc;
    }
  }
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let acc = 0;
      for (let i = -r; i <= r; i++) {
        const yy = y + i < 0 ? 0 : y + i >= h ? h - 1 : y + i;
        acc += tmp[yy * w + x] * kernel[i + r];
      }
      out[y * w + x] = acc;
    }
  }
  return out;
}

function canny(gray, w, h, low, high) {
  const blurred = convSep(gray, w, h, gaussKernel(1.2));
  const mag = new Float32Array(w * h);
  const dir = new Uint8Array(w * h); // 0,1,2,3 = 0°, 45°, 90°, 135°

  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const i = y * w + x;
      const gx =
        -blurred[i - w - 1] + blurred[i - w + 1]
        - 2 * blurred[i - 1] + 2 * blurred[i + 1]
        - blurred[i + w - 1] + blurred[i + w + 1];
      const gy =
        -blurred[i - w - 1] - 2 * blurred[i - w] - blurred[i - w + 1]
        + blurred[i + w - 1] + 2 * blurred[i + w] + blurred[i + w + 1];
      mag[i] = Math.hypot(gx, gy);
      let ang = Math.atan2(gy, gx) * (180 / Math.PI);
      if (ang < 0) ang += 180;
      dir[i] = ang < 22.5 || ang >= 157.5 ? 0 : ang < 67.5 ? 1 : ang < 112.5 ? 2 : 3;
    }
  }

  const nms = new Float32Array(w * h);
  // Offsets along the gradient for dir 0, 1, 2, 3 (0°, 45°, 90°, 135°)
  const dx = [1, 1, 0, -1];
  const dy = [0, 1, 1, 1];
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const i = y * w + x;
      const d = dir[i];
      const a = mag[i + dy[d] * w + dx[d]];
      const b = mag[i - dy[d] * w - dx[d]];
      if (mag[i] >= a && mag[i] >= b) nms[i] = mag[i];
    }
  }

  const edges = new Uint8Array(w * h);
  const stack = [];
  for (let i = 0; i < nms.length; i++) {
    if (nms[i] >= high) {
      edges[i] = 2; // strong
      stack.push(i);
    } else if (nms[i] >= low) {
      edges[i] = 1; // weak
    }
  }
  const n8 = [-w - 1, -w, -w + 1, -1, 1, w - 1, w, w + 1];
  while (stack.length) {
    const i = stack.pop();
    const x = i % w;
    const y = (i / w) | 0;
    for (const d of n8) {
      const j = i + d;
      if (j < 0 || j >= edges.length) continue;
      // stay in bounds for left/right wrap
      const xx = j % w;
      const yy = (j / w) | 0;
      if (Math.abs(xx - x) > 1 || Math.abs(yy - y) > 1) continue;
      if (edges[j] === 1) {
        edges[j] = 2;
        stack.push(j);
      }
    }
  }
  for (let i = 0; i < edges.length; i++) edges[i] = edges[i] === 2 ? 1 : 0;
  // clear 1px border (often noisy)
  for (let x = 0; x < w; x++) {
    edges[x] = 0;
    edges[(h - 1) * w + x] = 0;
  }
  for (let y = 0; y < h; y++) {
    edges[y * w] = 0;
    edges[y * w + w - 1] = 0;
  }
  return edges;
}

const N8 = [
  [1, 0], [1, 1], [0, 1], [-1, 1],
  [-1, 0], [-1, -1], [0, -1], [1, -1],
];

function edgeNeighbors(edges, used, w, h, x, y, onlyUnused) {
  const out = [];
  for (const [dx, dy] of N8) {
    const nx = x + dx, ny = y + dy;
    if (nx < 1 || ny < 1 || nx >= w - 1 || ny >= h - 1) continue;
    const i = ny * w + nx;
    if (!edges[i]) continue;
    if (onlyUnused && used[i]) continue;
    out.push([nx, ny, i]);
  }
  return out;
}

function walkContour(edges, used, w, h, x, y) {
  const pts = [[x, y]];
  used[y * w + x] = 1;
  let px = x, py = y, pdx = 0, pdy = 0;
  while (true) {
    const cand = edgeNeighbors(edges, used, w, h, px, py, true);
    if (!cand.length) break;
    let best = cand[0], bestScore = -1e9;
    for (const c of cand) {
      const dx = c[0] - px, dy = c[1] - py;
      const score = (pdx || pdy) ? dx * pdx + dy * pdy : 0;
      if (score > bestScore) {
        bestScore = score;
        best = c;
      }
    }
    used[best[2]] = 1;
    pts.push([best[0], best[1]]);
    pdx = best[0] - px;
    pdy = best[1] - py;
    px = best[0];
    py = best[1];
  }
  return pts;
}

function traceContours(edges, w, h) {
  const used = new Uint8Array(w * h);
  const starts = [];
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const i = y * w + x;
      if (!edges[i]) continue;
      const n = edgeNeighbors(edges, used, w, h, x, y, false).length;
      if (n <= 1) starts.push([x, y, i, 0]); // endpoints first
      else starts.push([x, y, i, 1]);
    }
  }
  starts.sort((a, b) => a[3] - b[3]);
  const strokes = [];
  for (const [x, y, i] of starts) {
    if (used[i]) continue;
    // walk one way, then from the start the other way (if leftover neighbors)
    const fwd = walkContour(edges, used, w, h, x, y);
    // The start pixel is used; try to extend backward from original start
    // by looking at unused neighbors of the first point before it was fully consumed.
    // walkContour already ate the start; check if first point still has unused neighbors
    // (shouldn't, we started there). For endpoints this is a single walk.
    // For mid-line starts (loops or leftover), one walk is enough if we also
    // reverse-extend: temporarily... we marked start used first. To get both
    // directions, walk, then walk from start's unused neighbors and prepend.
    const backCand = edgeNeighbors(edges, used, w, h, x, y, true);
    if (backCand.length) {
      const back = walkContour(edges, used, w, h, backCand[0][0], backCand[0][1]);
      fwd.unshift(...back.reverse());
    }
    if (fwd.length >= 2) strokes.push(fwd);
  }
  return strokes;
}

function dist2(a, b) {
  const dx = a[0] - b[0], dy = a[1] - b[1];
  return dx * dx + dy * dy;
}

function polylineLength(pts) {
  let len = 0;
  for (let i = 1; i < pts.length; i++) {
    len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  }
  return len;
}

/** Greedy merge van polylines waarvan de uiteinden dicht bij elkaar liggen. */
function mergeStrokes(strokes, maxDist) {
  const maxD2 = maxDist * maxDist;
  const lines = strokes.map((p) => p.slice());
  let changed = true;
  let guard = 0;
  while (changed && guard++ < 8) {
    changed = false;
    for (let i = 0; i < lines.length; i++) {
      if (!lines[i] || lines[i].length < 2) continue;
      const aS = lines[i][0];
      const aE = lines[i][lines[i].length - 1];
      let best = -1, bestD = maxD2, how = 0;
      for (let j = 0; j < lines.length; j++) {
        if (i === j || !lines[j] || lines[j].length < 2) continue;
        const bS = lines[j][0];
        const bE = lines[j][lines[j].length - 1];
        const d1 = dist2(aE, bS);
        const d2 = dist2(aE, bE);
        const d3 = dist2(aS, bS);
        const d4 = dist2(aS, bE);
        if (d1 < bestD) { bestD = d1; best = j; how = 1; }
        if (d2 < bestD) { bestD = d2; best = j; how = 2; }
        if (d3 < bestD) { bestD = d3; best = j; how = 3; }
        if (d4 < bestD) { bestD = d4; best = j; how = 4; }
      }
      if (best < 0) continue;
      const b = lines[best];
      if (how === 1) lines[i] = lines[i].concat(b.slice(1));
      else if (how === 2) lines[i] = lines[i].concat(b.slice(0, -1).reverse());
      else if (how === 3) lines[i] = b.slice(1).reverse().concat(lines[i]);
      else lines[i] = b.slice(0, -1).concat(lines[i]);
      lines[best] = null;
      changed = true;
    }
  }
  return lines.filter((l) => l && l.length >= 2);
}

function pointLineDist(p, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const len2 = dx * dx + dy * dy;
  if (len2 < 1e-12) return Math.hypot(p[0] - a[0], p[1] - a[1]);
  return Math.abs(dy * p[0] - dx * p[1] + b[0] * a[1] - b[1] * a[0]) / Math.sqrt(len2);
}


/** Lichte hoekafvlakking, zodat getraceerde pixelranden minder hoekig worden. */
function smoothPolyline(pts, passes = 2) {
  if (pts.length < 3) return pts;
  let cur = pts;
  for (let p = 0; p < passes; p++) {
    const next = [cur[0]];
    for (let i = 1; i < cur.length - 1; i++) {
      next.push([
        (cur[i - 1][0] + 2 * cur[i][0] + cur[i + 1][0]) / 4,
        (cur[i - 1][1] + 2 * cur[i][1] + cur[i + 1][1]) / 4,
      ]);
    }
    next.push(cur[cur.length - 1]);
    cur = next;
  }
  return cur;
}

export function rdp(points, epsilon) {
  if (points.length <= 2) return points.slice();
  let maxD = 0, idx = 0;
  const a = points[0], b = points[points.length - 1];
  for (let i = 1; i < points.length - 1; i++) {
    const d = pointLineDist(points[i], a, b);
    if (d > maxD) { maxD = d; idx = i; }
  }
  if (maxD > epsilon) {
    const left = rdp(points.slice(0, idx + 1), epsilon);
    const right = rdp(points.slice(idx), epsilon);
    return left.slice(0, -1).concat(right);
  }
  return [a, b];
}

function hatchAngle(gray, w, h, angleDeg, spacing, threshold) {
  const ang = (angleDeg * Math.PI) / 180;
  const ca = Math.cos(ang), sa = Math.sin(ang);
  const nx = -sa, ny = ca;
  const corners = [[0, 0], [w, 0], [w, h], [0, h]];
  let tMin = Infinity, tMax = -Infinity;
  for (const [x, y] of corners) {
    const t = x * nx + y * ny;
    if (t < tMin) tMin = t;
    if (t > tMax) tMax = t;
  }
  const strokes = [];
  const step = 1;
  for (let t = tMin; t <= tMax + 1e-6; t += spacing) {
    const hits = [];
    if (Math.abs(ca) > 1e-8) {
      for (const x of [0, w]) {
        const s = (x - t * nx) / ca;
        const y = t * ny + s * sa;
        if (y >= -0.5 && y <= h + 0.5) hits.push(s);
      }
    }
    if (Math.abs(sa) > 1e-8) {
      for (const y of [0, h]) {
        const s = (y - t * ny) / sa;
        const x = t * nx + s * ca;
        if (x >= -0.5 && x <= w + 0.5) hits.push(s);
      }
    }
    if (hits.length < 2) continue;
    let s0 = Math.min(...hits), s1 = Math.max(...hits);
    if (s1 - s0 < 2) continue;

    let run = null;
    for (let s = s0; s <= s1; s += step) {
      const x = t * nx + s * ca;
      const y = t * ny + s * sa;
      const xi = clamp(Math.round(x), 0, w - 1);
      const yi = clamp(Math.round(y), 0, h - 1);
      const dark = gray[yi * w + xi] < threshold;
      const inside = x >= 0 && y >= 0 && x < w && y < h;
      if (inside && dark) {
        if (!run) run = [[x, y]];
        else run.push([x, y]);
      } else if (run) {
        if (run.length >= 2) strokes.push(run);
        run = null;
      }
    }
    if (run && run.length >= 2) strokes.push(run);
  }
  return strokes;
}

/**
 * Zet een RGBA-ImageData om in open polylines in millimeters.
 * @param {{data:Uint8ClampedArray,width:number,height:number}} imageData
 * @param {object} opts
 */
export function processImage(imageData, opts = {}) {
  const t0 = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
  const w = imageData.width;
  const h = imageData.height;
  if (!w || !h) {
    return emptyResult(opts, t0);
  }

  const widthMm = Math.max(5, Number(opts.widthMm) || DEFAULTS.widthMm);
  const heightMm = Math.max(5, Number(opts.heightMm) || (widthMm * (h / w)));
  const sx = widthMm / w;
  const sy = heightMm / h;
  const pxToMm = (sx + sy) / 2; // voor drempels in mm (min. lengte, vereenvoudiging, arceringsafstand)

  const edgeThreshold = clamp(Number(opts.edgeThreshold ?? DEFAULTS.edgeThreshold), 0, 100);
  const hatchOn = opts.hatch !== false;
  const hatchDensity = clamp(Number(opts.hatchDensity ?? DEFAULTS.hatchDensity), 1, 10);
  const minLengthMm = Math.max(0, Number(opts.minLengthMm ?? DEFAULTS.minLengthMm));
  const simplify = clamp(Number(opts.simplify ?? DEFAULTS.simplify), 1, 10);

  // Canny-drempels: slider 0–100 → high ≈ 40–220 (hoger = minder, alleen sterke randen)
  const high = 40 + edgeThreshold * 1.8;
  const low = high * 0.38;

  const gray = autocontrast(toGray(imageData), 0.012);
  const edges = canny(gray, w, h, low, high);

  let contours = traceContours(edges, w, h);
  contours = mergeStrokes(contours, 2.2);

  let hatches = [];
  if (hatchOn) {
    // Dichtheid 1 → ruime arcering (~2,4 mm), 10 → fijn (~0,45 mm)
    const spacingMm = 2.6 - (hatchDensity - 1) * (2.15 / 9);
    const spacing = Math.max(1.6, spacingMm / pxToMm);
    // Midtonen: één hoek; donkere delen: tweede hoek; diepe schaduw: extra dichte lijnen
    const a = 42, b = -48;
    const mid = hatchAngle(gray, w, h, a, spacing, 168);
    const dark = hatchAngle(gray, w, h, b, spacing, 96);
    const deep = hatchAngleOffset(gray, w, h, a, spacing, 48, spacing * 0.5);
    hatches = mergeStrokes(mid.concat(dark, deep), 1.6);
  }

  const epsilonPx = (0.08 + (simplify - 1) * 0.07) / pxToMm; // ~0,08–0,71 mm
  const minLenPx = minLengthMm / pxToMm;

  const strokesPx = [];
  for (const raw of contours) {
    const simple = rdp(smoothPolyline(raw, 2), Math.max(0.35, epsilonPx * 0.85));
    if (simple.length < 2) continue;
    if (polylineLength(simple) < minLenPx) continue;
    strokesPx.push(simple);
  }
  for (const raw of hatches) {
    const simple = rdp(raw, Math.max(0.5, epsilonPx));
    if (simple.length < 2) continue;
    if (polylineLength(simple) < minLenPx) continue;
    strokesPx.push(simple);
  }

  const strokes = strokesPx.map((pts) => pts.map(([x, y]) => [x * sx, y * sy]));
  const strokeCount = strokes.length;
  let totalLengthMm = 0;
  for (const s of strokes) totalLengthMm += polylineLength(s);

  const svg = strokesToSvg(strokes, widthMm, heightMm, opts.title || 'Lijntekening');
  const t1 = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();

  return {
    strokes,
    widthMm,
    heightMm,
    strokeCount,
    totalLengthMm,
    svg,
    workWidth: w,
    workHeight: h,
    elapsedMs: t1 - t0,
  };
}

function hatchAngleOffset(gray, w, h, angleDeg, spacing, threshold, offset) {
  // Same as hatchAngle but start t at tMin+offset
  const ang = (angleDeg * Math.PI) / 180;
  const ca = Math.cos(ang), sa = Math.sin(ang);
  const nx = -sa, ny = ca;
  const corners = [[0, 0], [w, 0], [w, h], [0, h]];
  let tMin = Infinity, tMax = -Infinity;
  for (const [x, y] of corners) {
    const t = x * nx + y * ny;
    if (t < tMin) tMin = t;
    if (t > tMax) tMax = t;
  }
  const strokes = [];
  const step = 1;
  for (let t = tMin + offset; t <= tMax + 1e-6; t += spacing) {
    const hits = [];
    if (Math.abs(ca) > 1e-8) {
      for (const x of [0, w]) {
        const s = (x - t * nx) / ca;
        const y = t * ny + s * sa;
        if (y >= -0.5 && y <= h + 0.5) hits.push(s);
      }
    }
    if (Math.abs(sa) > 1e-8) {
      for (const y of [0, h]) {
        const s = (y - t * ny) / sa;
        const x = t * nx + s * ca;
        if (x >= -0.5 && x <= w + 0.5) hits.push(s);
      }
    }
    if (hits.length < 2) continue;
    let s0 = Math.min(...hits), s1 = Math.max(...hits);
    if (s1 - s0 < 2) continue;
    let run = null;
    for (let s = s0; s <= s1; s += step) {
      const x = t * nx + s * ca;
      const y = t * ny + s * sa;
      const xi = clamp(Math.round(x), 0, w - 1);
      const yi = clamp(Math.round(y), 0, h - 1);
      const dark = gray[yi * w + xi] < threshold;
      const inside = x >= 0 && y >= 0 && x < w && y < h;
      if (inside && dark) {
        if (!run) run = [[x, y]];
        else run.push([x, y]);
      } else if (run) {
        if (run.length >= 2) strokes.push(run);
        run = null;
      }
    }
    if (run && run.length >= 2) strokes.push(run);
  }
  return strokes;
}

function emptyResult(opts, t0) {
  const widthMm = Math.max(5, Number(opts.widthMm) || DEFAULTS.widthMm);
  const t1 = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
  return {
    strokes: [],
    widthMm,
    heightMm: widthMm,
    strokeCount: 0,
    totalLengthMm: 0,
    svg: '',
    workWidth: 0,
    workHeight: 0,
    elapsedMs: t1 - t0,
  };
}

export function strokesToSvg(strokes, widthMm, heightMm, title = 'Lijntekening') {
  const w = fmtN(widthMm);
  const h = fmtN(heightMm);
  const chunks = [];
  const perPath = 180;
  for (let i = 0; i < strokes.length; i += perPath) {
    const parts = [];
    const end = Math.min(strokes.length, i + perPath);
    for (let s = i; s < end; s++) {
      const pts = strokes[s];
      if (!pts || pts.length < 2) continue;
      let d = `M ${fmtN(pts[0][0])} ${fmtN(pts[0][1])}`;
      for (let k = 1; k < pts.length; k++) {
        d += ` L ${fmtN(pts[k][0])} ${fmtN(pts[k][1])}`;
      }
      parts.push(d);
    }
    if (parts.length) {
      chunks.push(`  <path d="${parts.join(' ')}"/>`);
    }
  }
  const titleEsc = String(title).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}mm" height="${h}mm" viewBox="0 0 ${w} ${h}">
  <title>${titleEsc}</title>
  <g fill="none" stroke="#000000" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round">
${chunks.join('\n')}
  </g>
</svg>
`;
}

export function drawPreview(ctx, strokes, widthMm, heightMm, canvasW, canvasH) {
  ctx.clearRect(0, 0, canvasW, canvasH);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvasW, canvasH);
  if (!strokes.length || !widthMm || !heightMm) return;
  const pad = 8;
  const scale = Math.min((canvasW - pad * 2) / widthMm, (canvasH - pad * 2) / heightMm);
  const ox = (canvasW - widthMm * scale) / 2;
  const oy = (canvasH - heightMm * scale) / 2;
  ctx.save();
  ctx.translate(ox, oy);
  ctx.scale(scale, scale);
  ctx.strokeStyle = '#111';
  // Minimaal ±1 schermpixel, anders worden 0,2 mm-lijnen in het voorbeeld te vaal.
  ctx.lineWidth = Math.max(0.2, 1.15 / scale);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  for (const pts of strokes) {
    if (pts.length < 2) continue;
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
  }
  ctx.stroke();
  ctx.restore();
}
