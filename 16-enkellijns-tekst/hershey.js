// Enkellijns Hershey-tekst: layout en SVG op ware grootte (mm).
// Letterdata: hersheytext.js (Hershey-fonten, publiek domein; verpakking MIT).

export const CAP_HEIGHT = 21; // y=1..22 bij hoofdletters, in alle tekstfonten
export const BASELINE = 22;
export const STROKE_MM = 0.2;
export const PAD_MM = 2;

export const FONT_OPTIONS = [
  { id: 'futural',  label: 'Schreefloos, 1 lijn' },
  { id: 'futuram',  label: 'Schreefloos, dik' },
  { id: 'timesr',   label: 'Met schreef' },
  { id: 'timesi',   label: 'Met schreef, cursief' },
  { id: 'timesrb',  label: 'Met schreef, dik' },
  { id: 'scripts',  label: 'Schoonschrift, 1 lijn' },
  { id: 'scriptc',  label: 'Schoonschrift, medium' },
  { id: 'cursive',  label: 'Schoonschrift (alternatief)' },
  { id: 'gothiceng',label: 'Gotisch' },
];

const CHAR_MAP = {
  'ß': 'ss', 'æ': 'ae', 'Æ': 'AE', 'œ': 'oe', 'Œ': 'OE',
  'ĳ': 'ij', 'Ĳ': 'IJ',
  '’': "'", '‘': "'", '‚': "'", 'ʼ': "'", '´': "'",
  '“': '"', '”': '"', '„': '"',
  '–': '-', '—': '-', '−': '-',
  '…': '...',
  '\u00A0': ' ', '\u202F': ' ', '\u2009': ' ', '\u200A': ' ',
  '\t': ' ',
};

const ACCENT = {
  '\u0300': 'grave',
  '\u0301': 'acute',
  '\u0302': 'circ',
  '\u0303': 'tilde',
  '\u0308': 'diaeresis',
  '\u030A': 'ring',
  '\u0327': 'cedilla',
};

export function fmt(n, digits = 3) {
  if (!Number.isFinite(n)) return '0';
  const s = n.toFixed(digits);
  return s.replace(/\.?0+$/, '') || '0';
}

export function nlNum(n, digits = 1) {
  return fmt(n, digits).replace('.', ',');
}

function parsePts(d) {
  const pts = [];
  const re = /(-?\d+(?:\.\d+)?)[,\s]+(-?\d+(?:\.\d+)?)/g;
  let m;
  while ((m = re.exec(d || ''))) pts.push([+m[1], +m[2]]);
  return pts;
}

function bboxOf(d) {
  const pts = parsePts(d);
  if (!pts.length) return null;
  let xmin = Infinity, ymin = Infinity, xmax = -Infinity, ymax = -Infinity;
  for (const [x, y] of pts) {
    if (x < xmin) xmin = x; if (x > xmax) xmax = x;
    if (y < ymin) ymin = y; if (y > ymax) ymax = y;
  }
  return { xmin, ymin, xmax, ymax };
}

function subpaths(d) {
  const parts = [];
  (d || '').replace(/M[^M]*/g, (s) => { const t = s.trim(); if (t) parts.push(t); return ''; });
  return parts;
}

function isClosedish(d) {
  const pts = parsePts(d);
  if (pts.length < 3) return false;
  const a = pts[0], b = pts[pts.length - 1];
  return Math.hypot(a[0] - b[0], a[1] - b[1]) < 0.05;
}

/** Verwijder de i-punt (tittle) zodat een accent eroverheen kan. */
export function stripTittle(d) {
  const parts = subpaths(d);
  if (parts.length < 2) return d;
  const boxes = parts.map((p) => ({ p, b: bboxOf(p) })).filter((x) => x.b);
  if (!boxes.length) return d;
  let ymin = Infinity, ymax = -Infinity;
  for (const { b } of boxes) {
    if (b.ymin < ymin) ymin = b.ymin;
    if (b.ymax > ymax) ymax = b.ymax;
  }
  const h = ymax - ymin || 1;
  const kept = boxes.filter(({ p, b }) => {
    const w = b.xmax - b.xmin, hh = b.ymax - b.ymin;
    const cy = (b.ymin + b.ymax) / 2;
    const small = w <= 5.5 && hh <= 5.5;
    const high = cy <= ymin + h * 0.5;
    return !(small && high && isClosedish(p));
  });
  if (!kept.length) return d;
  return kept.map((x) => x.p).join(' ');
}

function accentPath(kind, cx, topY, botY) {
  const y = topY - 2.2;
  switch (kind) {
    case 'acute':
      return `M${fmt(cx - 2.3, 2)},${fmt(y + 1.4, 2)} L${fmt(cx + 2.3, 2)},${fmt(y - 2.4, 2)}`;
    case 'grave':
      return `M${fmt(cx - 2.3, 2)},${fmt(y - 2.4, 2)} L${fmt(cx + 2.3, 2)},${fmt(y + 1.4, 2)}`;
    case 'circ':
      return `M${fmt(cx - 3.1, 2)},${fmt(y + 0.6, 2)} L${fmt(cx, 2)},${fmt(y - 2.5, 2)} ${fmt(cx + 3.1, 2)},${fmt(y + 0.6, 2)}`;
    case 'tilde':
      return `M${fmt(cx - 3.3, 2)},${fmt(y, 2)} L${fmt(cx - 1.1, 2)},${fmt(y - 2.2, 2)} ${fmt(cx + 1.1, 2)},${fmt(y, 2)} ${fmt(cx + 3.3, 2)},${fmt(y - 2.2, 2)}`;
    case 'diaeresis':
      return `M${fmt(cx - 3.1, 2)},${fmt(y + 0.2, 2)} L${fmt(cx - 3.1, 2)},${fmt(y - 2.4, 2)} M${fmt(cx + 3.1, 2)},${fmt(y + 0.2, 2)} L${fmt(cx + 3.1, 2)},${fmt(y - 2.4, 2)}`;
    case 'ring': {
      const r = 1.9, cy = y - 1.6, n = 8;
      let d = '';
      for (let i = 0; i <= n; i++) {
        const a = (-Math.PI / 2) + (i / n) * Math.PI * 2;
        const x = cx + Math.cos(a) * r, yy = cy + Math.sin(a) * r;
        d += (i === 0 ? 'M' : ' L') + `${fmt(x, 2)},${fmt(yy, 2)}`;
      }
      return d;
    }
    case 'cedilla':
      return `M${fmt(cx, 2)},${fmt(botY, 2)} L${fmt(cx, 2)},${fmt(botY + 2.4, 2)} ${fmt(cx - 0.6, 2)},${fmt(botY + 4, 2)} ${fmt(cx - 2.2, 2)},${fmt(botY + 4.4, 2)}`;
    default:
      return '';
  }
}

export function getGlyph(font, ch) {
  if (!font || ch == null) return null;
  const i = ch.charCodeAt(0) - 33;
  if (i < 0 || i >= font.chars.length) return null;
  const g = font.chars[i];
  if (!g || !g.d) return null;
  return g;
}

function spaceAdvance(font) {
  const n = getGlyph(font, 'n');
  if (n && n.o) return n.o;
  return 10;
}

/** Vervang exotic letters en splits in basis + accenten. */
export function normalizeInput(text) {
  let s = String(text ?? '');
  s = s.replace(/[ßæÆœŒĳĲ’‘‚ʼ“”„–—−…\u00A0\u202F\u2009\u200A\t]/g, (c) => CHAR_MAP[c] ?? c);
  try { s = s.normalize('NFD'); } catch { /* ignore */ }
  return s;
}

function glyphForCluster(font, base, marks) {
  const g = getGlyph(font, base);
  if (!g) return { missing: base, paths: [], advance: 0 };
  let d = g.d;
  const kinds = [];
  for (const m of marks) {
    if (ACCENT[m]) kinds.push(ACCENT[m]);
  }
  const hasAbove = kinds.some((k) => k !== 'cedilla');
  if (hasAbove && 'ijIJ'.includes(base)) d = stripTittle(d);
  const b = bboxOf(d) || { xmin: 0, ymin: 1, xmax: g.o || 8, ymax: BASELINE };
  const cx = (b.xmin + b.xmax) / 2;
  const extras = [];
  for (const k of kinds) {
    const p = accentPath(k, cx, b.ymin, b.ymax);
    if (p) extras.push(p);
  }
  return { missing: null, paths: [d, ...extras], advance: g.o, base };
}

/**
 * Zet een stuk tekst om in paden in fonteenheden (y omlaag, basislijn = 22).
 * options: { font, letterSpacing (fonteenheden), align: 'left'|'center'|'right', lineGap (fonteenheden, basislijn-tot-basislijn) }
 */
export function layoutText(text, font, options = {}) {
  const letterSpacing = Number(options.letterSpacing) || 0;
  const align = options.align || 'left';
  const lineGap = options.lineGap || CAP_HEIGHT * 1.6;
  const skipped = [];
  const rawLines = String(text ?? '').split(/\r\n|\n|\r/);
  const lines = [];

  for (const raw of rawLines) {
    const s = normalizeInput(raw);
    const glyphs = [];
    let i = 0;
    while (i < s.length) {
      const ch = s[i];
      if (ch === ' ') {
        glyphs.push({ type: 'space', advance: spaceAdvance(font), paths: [] });
        i++;
        continue;
      }
      // basis + volgende combining marks
      let base = ch;
      i++;
      const marks = [];
      while (i < s.length && ACCENT[s[i]]) { marks.push(s[i]); i++; }
      // combining mark zonder basis? sla over
      if (ACCENT[base]) { skipped.push(base); continue; }
      const g = glyphForCluster(font, base, marks);
      if (g.missing) {
        skipped.push(marks.length ? base + marks.join('') : base);
        continue;
      }
      glyphs.push({ type: 'char', ...g });
    }
    // plaats op x vanaf 0
    let x = 0;
    const placed = [];
    for (let gi = 0; gi < glyphs.length; gi++) {
      const g = glyphs[gi];
      if (g.type === 'space') {
        x += g.advance;
        // spaties krijgen geen extra letterspatiëring aan beide kanten dubbel:
        // letterspatiëring alleen tussen zichtbare letters, niet rond spaties? typografisch vaak wel "tracking" overal.
        // We tellen letterSpacing tussen alle advances behalve na het laatste glyf.
        if (gi < glyphs.length - 1) x += letterSpacing;
        continue;
      }
      for (const d of g.paths) {
        placed.push({ d, x });
      }
      x += g.advance;
      if (gi < glyphs.length - 1) x += letterSpacing;
    }
    const advanceW = x;
    let xmin = Infinity, xmax = -Infinity, ymin = Infinity, ymax = -Infinity, hasInk = false;
    for (const p of placed) {
      const b = bboxOf(p.d);
      if (!b) continue;
      hasInk = true;
      const x0 = b.xmin + p.x, x1 = b.xmax + p.x;
      if (x0 < xmin) xmin = x0;
      if (x1 > xmax) xmax = x1;
      if (b.ymin < ymin) ymin = b.ymin;
      if (b.ymax > ymax) ymax = b.ymax;
    }
    if (!hasInk) { xmin = 0; xmax = Math.max(advanceW, 0); ymin = 1; ymax = BASELINE; }
    lines.push({ placed, advanceW, xmin, xmax, ymin, ymax, hasInk });
  }

  // uitlijnen op visuele breedte (xmin..xmax), zodat namen netjes gecentreerd ogen
  const contentW = Math.max(0, ...lines.map((l) => l.xmax - l.xmin));
  const out = [];
  let gyMin = Infinity, gyMax = -Infinity, gxMin = Infinity, gxMax = -Infinity;
  let any = false;

  lines.forEach((line, li) => {
    const yBase = li * lineGap; // verschuiving t.o.v. eerste basislijn
    const w = line.xmax - line.xmin;
    let dx = -line.xmin;
    if (align === 'center') dx = (contentW - w) / 2 - line.xmin;
    else if (align === 'right') dx = contentW - w - line.xmin;
    for (const p of line.placed) {
      const x = p.x + dx;
      const y = yBase; // pad-y is al t.o.v. basislijn 22
      out.push({ d: p.d, x, y });
      const b = bboxOf(p.d);
      if (!b) continue;
      any = true;
      const x0 = b.xmin + x, x1 = b.xmax + x;
      const y0 = b.ymin + y, y1 = b.ymax + y;
      if (x0 < gxMin) gxMin = x0; if (x1 > gxMax) gxMax = x1;
      if (y0 < gyMin) gyMin = y0; if (y1 > gyMax) gyMax = y1;
    }
    if (!line.hasInk && lines.length > 1) {
      // lege regel: houd verticale ruimte in de bbox
      const y0 = 1 + yBase, y1 = BASELINE + yBase;
      if (y0 < gyMin) gyMin = y0; if (y1 > gyMax) gyMax = y1;
    }
  });

  if (!any) {
    return {
      paths: [],
      bbox: { xmin: 0, ymin: 0, xmax: 0, ymax: 0 },
      skipped: uniqueSkipped(skipped),
      empty: true,
      lineCount: rawLines.length,
    };
  }
  return {
    paths: out,
    bbox: { xmin: gxMin, ymin: gyMin, xmax: gxMax, ymax: gyMax },
    skipped: uniqueSkipped(skipped),
    empty: false,
    lineCount: rawLines.length,
  };
}

function uniqueSkipped(arr) {
  const s = [];
  for (const c of arr) if (!s.includes(c)) s.push(c);
  return s;
}

function transformPath(d, dx, dy, sx, sy) {
  return (d || '').replace(/(-?\d+(?:\.\d+)?)[,\s]+(-?\d+(?:\.\d+)?)/g, (_, xs, ys) => {
    const x = (parseFloat(xs) + dx) * sx;
    const y = (parseFloat(ys) + dy) * sy;
    return `${fmt(x)},${fmt(y)}`;
  });
}

/**
 * Maak een SVG-string op ware grootte.
 * opts: { letterHeightMm, letterSpacingMm, lineSpacing, align, box, title }
 * lineSpacing is factor × letterhoogte (basislijn tot basislijn).
 */
export function renderSvg(text, font, opts = {}) {
  const letterHeight = Math.max(0.5, Number(opts.letterHeightMm) || 12);
  const scale = letterHeight / CAP_HEIGHT;
  const letterSpacingFu = (Number(opts.letterSpacingMm) || 0) / scale;
  const lineFactor = Math.max(0.8, Number(opts.lineSpacing) || 1.6);
  const lineGap = letterHeight * lineFactor / scale; // fonteenheden
  const layout = layoutText(text, font, {
    letterSpacing: letterSpacingFu,
    align: opts.align || 'left',
    lineGap,
  });
  if (layout.empty) {
    return { svg: '', width: 0, height: 0, layout, scale };
  }
  const pad = opts.padMm != null ? Number(opts.padMm) : PAD_MM;
  const b = layout.bbox;
  const contentW = (b.xmax - b.xmin) * scale;
  const contentH = (b.ymax - b.ymin) * scale;
  const width = contentW + pad * 2;
  const height = contentH + pad * 2;
  // x_mm = (x_fu - xmin) * scale + pad
  // => dx in fu is -xmin, then *scale + pad... easier: origin shift then scale, then add pad
  const shiftX = -b.xmin;
  const shiftY = -b.ymin;
  const parts = [];
  parts.push('<?xml version="1.0" encoding="UTF-8"?>');
  const title = (opts.title || 'Enkellijns-tekst').replace(/[<>&"]/g, '');
  parts.push(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${fmt(width)}mm" height="${fmt(height)}mm" viewBox="0 0 ${fmt(width)} ${fmt(height)}" fill="none">`
  );
  parts.push(`  <title>${title}</title>`);
  parts.push(
    `  <g id="tekst" fill="none" stroke="#000000" stroke-width="${fmt(STROKE_MM, 2)}" stroke-linecap="round" stroke-linejoin="round">`
  );
  for (const p of layout.paths) {
    // X = (x_fu + shiftX) * scale + pad
    // transform: first add (shiftX + p.x), then * scale, then + pad
    // Our transformPath does (coord + dx) * s, so we need a second add of pad.
    // Do: (coord + p.x + shiftX + pad/scale) * scale
    const dx = p.x + shiftX + pad / scale;
    const dy = p.y + shiftY + pad / scale;
    const d = transformPath(p.d, dx, dy, scale, scale);
    parts.push(`    <path d="${d}"/>`);
  }
  parts.push('  </g>');
  if (opts.box) {
    const m = 0.3; // kader iets binnen de rand, zodat de lijn niet wordt afgesneden
    const bw = Math.max(0, width - m * 2);
    const bh = Math.max(0, height - m * 2);
    parts.push(
      `  <g id="kader" fill="none" stroke="#ff0000" stroke-width="${fmt(STROKE_MM, 2)}" stroke-linecap="square" stroke-linejoin="miter">`
    );
    parts.push(`    <rect x="${fmt(m)}" y="${fmt(m)}" width="${fmt(bw)}" height="${fmt(bh)}"/>`);
    parts.push('  </g>');
  }
  parts.push('</svg>');
  return {
    svg: parts.join('\n') + '\n',
    width,
    height,
    contentW,
    contentH,
    layout,
    scale,
  };
}

export function slugFilename(text) {
  const first = String(text || '').split(/\r\n|\n|\r/)[0] || 'tekst';
  let s = first.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  s = s.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40);
  return 'enkellijn-' + (s || 'tekst') + '.svg';
}
