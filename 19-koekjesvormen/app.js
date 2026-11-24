import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import ManifoldModule from 'https://cdn.jsdelivr.net/npm/manifold-3d@3.5.4/manifold.js';
import { PRESETS, DEFAULTS, buildCutter, shapeFromMask, toSTL, to3MF } from './cutter.js';

const $ = (id) => document.getElementById(id);
const nl = (x, d = 1) => Number(x).toLocaleString('nl-NL', { minimumFractionDigits: 0, maximumFractionDigits: d });
const cc = window.__cc = { ready: false, busy: false, info: null, error: null, builds: 0 };
let wasm = null, result = null;
const state = { source: { type: 'preset', id: 'ster' }, img: null, mask: null, name: 'ster' };

function setStatus(html, cls = '') { const s = $('status'); s.innerHTML = html; s.className = 'status ' + cls; }

// ---------- vormknoppen ----------
for (const [id, p] of Object.entries(PRESETS)) {
  const b = document.createElement('button'); b.type = 'button'; b.dataset.v = id; b.textContent = p.name; if (id === 'ster') b.className = 'on';
  $('presets').appendChild(b);
}
$('presets').addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b) return;
  markPreset(b.dataset.v); state.source = { type: 'preset', id: b.dataset.v }; state.name = b.dataset.v;
  $('imgOpts').hidden = true; schedule();
});
function markPreset(id) { $('presets').querySelectorAll('button').forEach((x) => x.classList.toggle('on', x.dataset.v === id)); }

// ---------- schuifjes ----------
const sliders = {
  size: (v) => nl(v, 0) + ' mm', wall: (v) => nl(v) + ' mm', height: (v) => nl(v) + ' mm',
  rimW: (v) => nl(v) + ' mm — de platte rand op het printbed; hier duw je op', rimT: (v) => nl(v) + ' mm',
  clearance: (v) => nl(v) + ' mm — zoveel kleiner dan het koekje', plateT: (v) => nl(v) + ' mm',
  reliefH: (v) => nl(v) + ' mm — zo diep komt de tekening in het deeg', lineW: (v) => nl(v) + ' mm',
  thicken: (v) => nl(v) + ' mm', gap: (v) => nl(v) + ' mm — sluit kleine onderbrekingen in de buitenlijn',
  thr: (v) => String(v),
};
for (const [id, fmt] of Object.entries(sliders)) {
  const upd = () => { $(id + 'Val').textContent = fmt(+$(id).value); };
  upd(); $(id).addEventListener('input', () => { upd(); if (id === 'thr') remask(); schedule(); });
}
for (const id of ['thinEdge', 'stamp', 'border', 'inner']) $(id).addEventListener('change', () => { syncOff(); schedule(); });
$('invert').addEventListener('change', () => { remask(); schedule(); });
function syncOff() {
  $('stampFields').style.opacity = $('stamp').checked ? 1 : 0.45;
  $('rimTLabel').classList.toggle('off', +$('rimW').value === 0);
  $('thickLabel').classList.toggle('off', !$('inner').checked);
}
$('rimW').addEventListener('input', syncOff); syncOff();

// ---------- plaatjes ----------
const MAXPX = 400;
function otsu(lum, valid) {
  const hist = new Float64Array(256); let n = 0;
  for (let i = 0; i < lum.length; i++) if (!valid || valid[i]) { hist[lum[i]]++; n++; }
  let sum = 0; for (let i = 0; i < 256; i++) sum += i * hist[i];
  let sB = 0, wB = 0, best = 0, thr = 128;
  for (let t = 0; t < 256; t++) { wB += hist[t]; if (!wB) continue; const wF = n - wB; if (!wF) break; sB += t * hist[t];
    const mB = sB / wB, mF = (sum - sB) / wF, v = wB * wF * (mB - mF) ** 2; if (v > best) { best = v; thr = t; } }
  return Math.min(245, Math.max(10, thr + 1));
}
function useImage(img, name) {
  const iw = img.naturalWidth || img.width || 512, ih = img.naturalHeight || img.height || 512;
  const k = Math.min(1, MAXPX / Math.max(iw, ih)) || 1; const sc = Math.max(iw, ih) < 200 ? 200 / Math.max(iw, ih) : k;
  const w = Math.max(8, Math.round(iw * sc)), h = Math.max(8, Math.round(ih * sc));
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h; const g = cv.getContext('2d', { willReadFrequently: true });
  g.drawImage(img, 0, 0, w, h);
  const d = g.getImageData(0, 0, w, h).data;
  const lum = new Uint8Array(w * h), alpha = new Uint8Array(w * h); let clear = 0;
  for (let i = 0; i < w * h; i++) { const a = d[i * 4 + 3] / 255; alpha[i] = a >= 0.5 ? 1 : 0; if (!alpha[i]) clear++;
    lum[i] = Math.round((0.299 * d[i * 4] + 0.587 * d[i * 4 + 1] + 0.114 * d[i * 4 + 2]) * a + 255 * (1 - a)); }
  const alphaMode = clear > w * h * 0.03;
  state.img = { w, h, lum, alpha, alphaMode };
  $('thr').value = otsu(lum, alphaMode ? alpha : null); $('thrVal').textContent = $('thr').value;
  $('invert').checked = false;
  state.source = { type: 'image' }; state.name = (name || 'tekening').replace(/\.[a-z0-9]+$/i, '');
  markPreset(null); $('imgOpts').hidden = false;
  remask(); schedule();
}
function remask() {
  const I = state.img; if (!I) return;
  const thr = +$('thr').value, inv = $('invert').checked; const n = I.w * I.h;
  const dark = new Uint8Array(n); for (let i = 0; i < n; i++) dark[i] = (inv ? I.lum[i] > thr : I.lum[i] < thr) ? 1 : 0;
  if (I.alphaMode) { const rm = new Uint8Array(n); for (let i = 0; i < n; i++) rm[i] = I.alpha[i] && dark[i]; state.mask = { mask: I.alpha, relief: rm }; }
  else state.mask = { mask: dark, relief: null };
}
function loadFile(f) {
  if (!f) return;
  if (f.size > 15e6) { setStatus('Dit bestand is te groot (max. 15 MB).', 'err'); return; }
  const url = URL.createObjectURL(f); const img = new Image();
  img.onload = () => { useImage(img, f.name); URL.revokeObjectURL(url); };
  img.onerror = () => setStatus('Dit plaatje kon niet worden geopend. Probeer een PNG of JPG.', 'err');
  img.src = url;
}
$('pick').onclick = () => $('file').click();
$('file').onchange = (e) => { loadFile(e.target.files[0]); e.target.value = ''; };
const drop = $('drop');
['dragenter', 'dragover'].forEach((t) => drop.addEventListener(t, (e) => { e.preventDefault(); drop.classList.add('drag'); }));
['dragleave', 'drop'].forEach((t) => drop.addEventListener(t, (e) => { e.preventDefault(); drop.classList.remove('drag'); }));
drop.addEventListener('drop', (e) => loadFile(e.dataTransfer.files[0]));
window.addEventListener('dragover', (e) => e.preventDefault());
window.addEventListener('drop', (e) => { e.preventDefault(); if (e.target !== drop) loadFile(e.dataTransfer?.files?.[0]); });

// voorbeeldtekening: een sneeuwpop met zwarte lijnen, zoals met een stift getekend
function sampleDrawing() {
  const cv = document.createElement('canvas'); cv.width = 360; cv.height = 460; const g = cv.getContext('2d');
  g.fillStyle = '#fff'; g.fillRect(0, 0, 360, 460); g.strokeStyle = '#111'; g.fillStyle = '#111'; g.lineWidth = 9; g.lineCap = 'round'; g.lineJoin = 'round';
  const circ = (x, y, r, fill) => { g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); fill ? g.fill() : g.stroke(); };
  circ(180, 330, 105); circ(180, 165, 72);
  g.beginPath(); g.rect(120, 82, 120, 20); g.fill(); g.beginPath(); g.rect(146, 26, 68, 60); g.fill(); // hoed (raakt het hoofd)
  circ(155, 150, 9, true); circ(205, 150, 9, true);
  g.beginPath(); g.moveTo(178, 172); g.lineTo(222, 182); g.lineTo(178, 186); g.stroke(); // wortelneus
  g.beginPath(); g.arc(180, 182, 32, 0.25 * Math.PI, 0.75 * Math.PI); g.stroke();
  circ(180, 280, 10, true); circ(180, 330, 10, true); circ(180, 380, 10, true);
  g.beginPath(); g.moveTo(118, 232); g.quadraticCurveTo(180, 262, 242, 232); g.stroke(); // sjaal
  return cv;
}
$('sample').onclick = () => useImage(sampleDrawing(), 'sneeuwpop');

function drawTrace(shape) {
  const I = state.img, M = state.mask; if (!I || !M) return;
  const cv = $('trace'); cv.width = I.w; cv.height = I.h; const g = cv.getContext('2d');
  const im = g.createImageData(I.w, I.h);
  for (let i = 0; i < I.w * I.h; i++) { const on = M.mask[i], r = M.relief ? M.relief[i] : on; const v = r ? 90 : on ? 175 : 238;
    im.data[i * 4] = v; im.data[i * 4 + 1] = v; im.data[i * 4 + 2] = r || on ? v : 246; im.data[i * 4 + 3] = 255; }
  g.putImageData(im, 0, 0);
  if (shape) {
    g.strokeStyle = '#e0682b'; g.lineWidth = Math.max(2, I.w / 160); g.beginPath();
    for (const p of shape.outline.toPolygons()) { p.forEach(([x, y], i) => (i ? g.lineTo(x, -y) : g.moveTo(x, -y))); g.closePath(); }
    g.stroke();
  }
}

// ---------- three.js ----------
const viewer = $('viewer');
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
renderer.setClearColor(0x000000, 0); renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
viewer.prepend(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, 1, 1, 4000);
const controls = new OrbitControls(camera, renderer.domElement); controls.enableDamping = true;
scene.add(new THREE.HemisphereLight(0xffffff, 0x9a8a70, 1.6));
const sun = new THREE.DirectionalLight(0xffffff, 2.0); sun.position.set(60, 140, 80); scene.add(sun);
const sun2 = new THREE.DirectionalLight(0xffffff, 0.6); sun2.position.set(-80, 60, -60); scene.add(sun2);
const group = new THREE.Group(); group.rotation.x = -Math.PI / 2; scene.add(group);
const matCut = new THREE.MeshStandardMaterial({ color: 0xe8a33c, roughness: 0.5 });
const matStamp = new THREE.MeshStandardMaterial({ color: 0xf3d9a4, roughness: 0.55 });
let meshes = [], firstFit = true;
function geomFrom(m) {
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(m.pos, 3)); g.setIndex(new THREE.BufferAttribute(m.idx, 1));
  const flat = g.toNonIndexed(); flat.computeVertexNormals(); g.dispose(); return flat;
}
function fitView() {
  const box = new THREE.Box3().setFromObject(group); if (box.isEmpty()) return;
  const c = box.getCenter(new THREE.Vector3()); const s = box.getSize(new THREE.Vector3());
  const vf = THREE.MathUtils.degToRad(camera.fov) / 2, hf = Math.atan(Math.tan(vf) * camera.aspect);
  const d = Math.max(s.x / 2 / Math.tan(hf), s.z / 2 / Math.tan(vf) * 1.4, 30) * 1.3;
  controls.target.copy(c); camera.position.set(c.x, c.y + d * 0.62, c.z + d * 0.78); camera.near = d / 50; camera.far = d * 20; camera.updateProjectionMatrix(); controls.update();
}
function resize() { const w = viewer.clientWidth, h = viewer.clientHeight; if (!w || !h) return; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); if (meshes.length) fitView(); }
new ResizeObserver(resize).observe(viewer); resize();
(function loop() { requestAnimationFrame(loop); controls.update(); renderer.render(scene, camera); })();
function show(r) {
  for (const m of meshes) { group.remove(m); m.geometry.dispose(); } meshes = [];
  meshes.push(new THREE.Mesh(geomFrom(r.cutter), matCut)); if (r.stamp) meshes.push(new THREE.Mesh(geomFrom(r.stamp), matStamp));
  group.add(...meshes);
  if (firstFit) { fitView(); firstFit = false; } else fitView();
}

// ---------- opbouwen ----------
function opts() {
  const o = {}; for (const k of ['size', 'wall', 'height', 'rimW', 'rimT', 'clearance', 'plateT', 'reliefH', 'lineW', 'thicken']) o[k] = +$(k).value;
  o.thinEdge = $('thinEdge').checked; o.stamp = $('stamp').checked; o.border = $('border').checked; return o;
}
let timer = null, pending = false;
function schedule() { clearTimeout(timer); timer = setTimeout(rebuild, 120); }
async function rebuild() {
  if (!wasm) return;
  if (cc.busy) { pending = true; return; }
  cc.busy = true; $('busy').style.display = 'block';
  await new Promise((r) => setTimeout(r, 0));
  let shape = null;
  try {
    const o = opts(); const t0 = performance.now();
    if (state.source.type === 'preset') shape = PRESETS[state.source.id].build(wasm);
    else {
      const I = state.img, M = state.mask;
      // gaatjes in mm omrekenen naar pixels: de tekening wordt o.size mm op zijn langste kant
      let x0 = I.w, x1 = 0, y0 = I.h, y1 = 0;
      for (let y = 0; y < I.h; y++) for (let x = 0; x < I.w; x++) if (M.mask[y * I.w + x]) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
      if (x1 < x0) throw new Error('Geen tekening gevonden. Schuif aan de drempel of zet “omkeren” aan.');
      const pxPerMm = Math.max(x1 - x0 + 1, y1 - y0 + 1) / o.size;
      shape = shapeFromMask(wasm, M.mask, I.w, I.h, { gapPx: Math.max(0.01, +$('gap').value * pxPerMm / 2), inner: $('inner').checked, reliefMask: M.relief });
      drawTrace(shape);
    }
    const r = buildCutter(wasm, shape, o);
    result = r; cc.info = r.info; cc.error = null; cc.builds++;
    show(r);
    const i = r.info; const ok = i.cutterCheck.ok && i.cutterPieces === 1 && (!r.stamp || (i.stampCheck.ok && i.stampPieces === 1));
    $('info').innerHTML = `Koekje <b>${nl(i.cookie[0])} × ${nl(i.cookie[1])} mm</b> · uitsteker ${nl(i.cutterSize[0])} × ${nl(i.cutterSize[1])} × ${nl(i.cutterSize[2])} mm` +
      (r.stamp ? ` · stempel ${nl(i.stampSize[0])} × ${nl(i.stampSize[1])} × ${nl(i.stampSize[2])} mm` : '') +
      (r.stamp && i.reliefArea < 1 ? '<br>Let op: er staat (bijna) geen tekening op de stempel.' : '');
    setStatus((ok ? '<b>✔ printklaar</b>: elk onderdeel is één dicht, waterdicht geheel' : '⚠ niet helemaal dicht of in losse stukjes; probeer meer “gaatjes dichten” of een grotere maat') +
      (shape.nIslands > 1 ? ' · alleen de grootste vorm is gebruikt' : '') + ` <span style="opacity:.6">· ${Math.round(performance.now() - t0)} ms</span>`, ok ? 'ok' : 'err');
    $('dl3mf').disabled = $('dlCut').disabled = false; $('dlStamp').disabled = !r.stamp;
  } catch (e) {
    console.warn(e); cc.error = String(e.message || e);
    setStatus('Dit lukte niet: ' + cc.error, 'err');
  } finally {
    if (shape) { try { shape.outline.delete(); } catch {} try { shape.reliefCS && shape.reliefCS.delete(); } catch {} }
    cc.busy = false; $('busy').style.display = 'none';
    if (pending) { pending = false; schedule(); }
  }
}

function fileBase() { return 'koekjesvorm-' + (state.name || 'vorm').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase() + '-' + $('size').value + 'mm'; }
function download(bytes, name, type) {
  const url = URL.createObjectURL(new Blob([bytes], { type })); const a = document.createElement('a');
  a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 5000);
}
cc.threemf = () => to3MF(result.cutter, result.stamp, fileBase());
cc.stlCutter = () => toSTL([result.cutter], fileBase());
cc.stlStamp = () => toSTL([result.stamp], fileBase());
cc.select = (id) => { $('presets').querySelector(`[data-v="${id}"]`).click(); };
cc.sample = () => $('sample').click();
$('dl3mf').onclick = () => result && download(cc.threemf(), fileBase() + '.3mf', 'model/3mf');
$('dlCut').onclick = () => result && download(cc.stlCutter(), fileBase() + '-uitsteker.stl', 'model/stl');
$('dlStamp').onclick = () => result && result.stamp && download(cc.stlStamp(), fileBase() + '-stempel.stl', 'model/stl');

try {
  const m = await ManifoldModule(); m.setup(); wasm = m; cc.ready = true;
  await rebuild();
} catch (e) {
  console.warn(e); cc.error = String(e.message || e);
  setStatus('Laden mislukt: ' + cc.error + '. Controleer je internetverbinding en herlaad de pagina.', 'err');
}
