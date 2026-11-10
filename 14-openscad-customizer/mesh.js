// Hulpfuncties voor meshes: binaire STL lezen, vertices samenvoegen, gesloten-check, 3MF schrijven.
// Geschreven voor Tech demo 14. Licentie: MIT.

// Leest een binaire (of ASCII) STL en geeft een Float32Array met 9 getallen per driehoek.
export function parseSTL(bytes) {
  const u8 = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
  if (u8.length >= 84) {
    const n = dv.getUint32(80, true);
    if (84 + n * 50 === u8.length) {
      const pos = new Float32Array(n * 9);
      for (let i = 0; i < n; i++) {
        const o = 84 + i * 50 + 12;
        for (let k = 0; k < 9; k++) pos[i * 9 + k] = dv.getFloat32(o + k * 4, true);
      }
      return pos;
    }
  }
  // ASCII
  const txt = new TextDecoder().decode(u8);
  const nums = [];
  const re = /vertex\s+([-+0-9.eE]+)\s+([-+0-9.eE]+)\s+([-+0-9.eE]+)/g;
  let m; while ((m = re.exec(txt))) nums.push(+m[1], +m[2], +m[3]);
  return new Float32Array(nums);
}

// Voegt gelijke hoekpunten samen -> { verts: Float64Array, tris: Uint32Array }
export function indexMesh(pos) {
  const map = new Map(); const verts = []; const tris = new Uint32Array(pos.length / 3);
  for (let i = 0; i < pos.length; i += 3) {
    const key = pos[i] + ',' + pos[i + 1] + ',' + pos[i + 2];
    let id = map.get(key);
    if (id === undefined) { id = verts.length / 3; map.set(key, id); verts.push(pos[i], pos[i + 1], pos[i + 2]); }
    tris[i / 3] = id;
  }
  // gedegenereerde driehoeken weglaten
  const keep = [];
  for (let t = 0; t < tris.length; t += 3) {
    const a = tris[t], b = tris[t + 1], c = tris[t + 2];
    if (a !== b && b !== c && a !== c) keep.push(a, b, c);
  }
  return { verts: new Float64Array(verts), tris: Uint32Array.from(keep) };
}

// Elke rand moet precies één keer in elke richting voorkomen (gesloten, goed georiënteerd).
export function checkClosed(mesh) {
  const edges = new Map(); const T = mesh.tris;
  for (let t = 0; t < T.length; t += 3) {
    for (let k = 0; k < 3; k++) {
      const a = T[t + k], b = T[t + (k + 1) % 3];
      const key = a + '_' + b; edges.set(key, (edges.get(key) || 0) + 1);
    }
  }
  let open = 0, dup = 0;
  for (const [key, n] of edges) {
    const [a, b] = key.split('_');
    const back = edges.get(b + '_' + a) || 0;
    if (n > 1) dup++;
    if (back !== n) open++;
  }
  return { closed: open === 0 && dup === 0, openEdges: open, duplicateEdges: dup, triangles: T.length / 3, vertices: mesh.verts.length / 3 };
}

export function bbox(pos) {
  const mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < pos.length; i += 3) for (let k = 0; k < 3; k++) { const v = pos[i + k]; if (v < mn[k]) mn[k] = v; if (v > mx[k]) mx[k] = v; }
  return { min: mn, max: mx, size: [mx[0] - mn[0], mx[1] - mn[1], mx[2] - mn[2]] };
}

// Volume (mm³) via divergentiestelling
export function volume(mesh) {
  const V = mesh.verts, T = mesh.tris; let s = 0;
  for (let t = 0; t < T.length; t += 3) {
    const a = T[t] * 3, b = T[t + 1] * 3, c = T[t + 2] * 3;
    s += V[a] * (V[b + 1] * V[c + 2] - V[b + 2] * V[c + 1]) - V[a + 1] * (V[b] * V[c + 2] - V[b + 2] * V[c]) + V[a + 2] * (V[b] * V[c + 1] - V[b + 1] * V[c]);
  }
  return s / 6;
}

const esc = (s) => String(s).replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));

export function to3MF(mesh, name = 'model', color = '#4F6BFF') {
  const f = (x) => (Math.round(x * 100000) / 100000).toString();
  const V = mesh.verts, T = mesh.tris; const parts = [];
  parts.push(`<?xml version="1.0" encoding="UTF-8"?>
<model unit="millimeter" xml:lang="nl-NL" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02">
<metadata name="Title">${esc(name)}</metadata>
<metadata name="Application">Tech demo 14 - OpenSCAD customizer</metadata>
<resources>
<basematerials id="1"><base name="Filament" displaycolor="${color.toUpperCase()}FF"/></basematerials>
<object id="2" name="${esc(name)}" type="model" pid="1" pindex="0"><mesh><vertices>`);
  for (let i = 0; i < V.length; i += 3) parts.push(`<vertex x="${f(V[i])}" y="${f(V[i + 1])}" z="${f(V[i + 2])}"/>`);
  parts.push('</vertices><triangles>');
  for (let t = 0; t < T.length; t += 3) parts.push(`<triangle v1="${T[t]}" v2="${T[t + 1]}" v3="${T[t + 2]}"/>`);
  parts.push(`</triangles></mesh></object>
</resources>
<build><item objectid="2"/></build>
</model>`);
  const model = parts.join('');
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

// -D waarde in OpenSCAD-syntaxis
export function scadValue(v) {
  if (typeof v === 'boolean') return v ? 'true' : 'false';
  if (typeof v === 'number') return Number.isFinite(v) ? String(v) : '0';
  if (Array.isArray(v)) return '[' + v.map(scadValue).join(',') + ']';
  return '"' + String(v).replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
}
