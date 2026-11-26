import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import ManifoldModule from 'https://cdn.jsdelivr.net/npm/manifold-3d@3.5.4/manifold.js';
import opentype from 'https://cdn.jsdelivr.net/npm/opentype.js@1.3.4/dist/opentype.module.js';
import { DEFAULTS, buildClicker, toSTL, to3MF } from './geometry.js';

const $ = (id) => document.getElementById(id);
const nl = (x, d = 1) => Number(x).toLocaleString('nl-NL', { minimumFractionDigits: 0, maximumFractionDigits: d });
const cc = window.__cc = { ready: false, busy: false, info: null, error: null, builds: 0 };
let wasm = null, result = null, font = null; const fontCache = {};
const state = { layout: 'cirkel', orient: 'rechtop', capShape: 'auto', label: 'verzonken', colors: 'gelijk', view: 'samen' };

function setStatus(html, cls = '') { const s = $('status'); s.innerHTML = html; s.className = 'status ' + cls; }

// ---------- knoppen ----------
for (const g of ['layout', 'orient', 'capShape', 'label', 'colors', 'view']) {
  $(g).addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    $(g).querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b)); state[g] = b.dataset.v;
    if (g === 'layout') { // handige standaard per vorm
      const o = b.dataset.v === 'boog' ? 'meedraaien' : 'rechtop'; state.orient = o;
      $('orient').querySelectorAll('button').forEach((x) => x.classList.toggle('on', x.dataset.v === o));
    }
    syncOff(); if (g === 'view') show(result, true); else if (g === 'colors') { show(result); } else schedule();
  });
}
const mm = (v) => nl(v, 2) + ' mm';
const sliders = { key: (v) => mm(v) + ' (MX-afstand is 19 mm)', textH: (v) => mm(v) + ' van de hoogste tot de laagste letterpunt', spacing: mm, arc: (v) => nl(v, 0) + '°', floor: mm, rim: mm,
  cut: (v) => mm(v) + ' (standaard 14)', plateT: (v) => mm(v) + ' (standaard 1,5)', holeTol: mm, stemTol: mm };
for (const [id, fmt] of Object.entries(sliders)) { const upd = () => { $(id + 'Val').textContent = fmt(+$(id).value); }; upd(); $(id).addEventListener('input', () => { upd(); schedule(); }); }
for (const id of ['upper', 'loop', 'fill', 'centerKey', 'pushHole']) $(id).addEventListener('change', () => { syncOff(); schedule(); });
$('name').addEventListener('input', schedule);
for (const id of ['c1', 'c2', 'c3', 'c4']) $(id).addEventListener('input', () => { mats[+id[1] - 1].color.set($(id).value); });
function syncOff() {
  const closed = state.layout === 'cirkel' || state.layout === 'hart';
  $('arcLabel').classList.toggle('off', state.layout !== 'boog');
  $('fillLabel').classList.toggle('off', !closed); $('centerLabel').classList.toggle('off', !closed);
}
syncOff();

// ---------- lettertype ----------
async function loadFont(file) {
  if (fontCache[file]) return fontCache[file];
  const buf = await (await fetch(new URL('fonts/' + file, import.meta.url))).arrayBuffer();
  return (fontCache[file] = opentype.parse(buf));
}
$('fontFile').style.display = 'none';
$('font').addEventListener('change', async () => {
  if ($('font').value === 'eigen') { $('fontFile').click(); return; }
  font = await loadFont($('font').value); schedule();
});
$('fontFile').addEventListener('change', async () => {
  const f = $('fontFile').files[0]; if (!f) return;
  try { font = opentype.parse(await f.arrayBuffer()); fontCache.eigen = font; schedule(); }
  catch (e) { setStatus('Dit lettertype kan ik niet lezen: ' + e.message, 'err'); }
});

// ---------- three.js ----------
const viewer = $('viewer');
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
renderer.setClearColor(0x000000, 0); renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
viewer.prepend(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, 1, 1, 4000);
const controls = new OrbitControls(camera, renderer.domElement); controls.enableDamping = true;
scene.add(new THREE.HemisphereLight(0xffffff, 0x8a7aa0, 1.5));
const sun = new THREE.DirectionalLight(0xffffff, 2.0); sun.position.set(60, 160, 90); scene.add(sun);
const sun2 = new THREE.DirectionalLight(0xffffff, 0.6); sun2.position.set(-80, 60, -60); scene.add(sun2);
const group = new THREE.Group(); group.rotation.x = -Math.PI / 2; scene.add(group);
const mats = ['c1', 'c2', 'c3', 'c4'].map((id) => new THREE.MeshStandardMaterial({ color: $(id).value, roughness: 0.5 }));
const matSw = new THREE.MeshStandardMaterial({ color: 0x9aa3b5, roughness: 0.6, transparent: true, opacity: 0.55 });
let meshes = [];
function geomFrom(m) {
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(m.pos, 3)); g.setIndex(new THREE.BufferAttribute(m.idx, 1));
  const flat = g.toNonIndexed(); flat.computeVertexNormals(); g.dispose(); return flat;
}
function fitView() {
  const box = new THREE.Box3().setFromObject(group); if (box.isEmpty()) return;
  const c = box.getCenter(new THREE.Vector3()); const s = box.getSize(new THREE.Vector3());
  const vf = THREE.MathUtils.degToRad(camera.fov) / 2, hf = Math.atan(Math.tan(vf) * camera.aspect);
  const d = Math.max(s.x / 2 / Math.tan(hf), s.z / 2 / Math.tan(vf) * 1.25, 30) * 1.2;
  controls.target.copy(c); camera.position.set(c.x, c.y + d * 0.8, c.z + d * 0.6); camera.near = d / 50; camera.far = d * 20; camera.updateProjectionMatrix(); controls.update();
}
function resize() { const w = viewer.clientWidth, h = viewer.clientHeight; if (!w || !h) return; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); if (meshes.length) fitView(); }
new ResizeObserver(resize).observe(viewer); resize();
(function loop() { requestAnimationFrame(loop); controls.update(); renderer.render(scene, camera); })();
let lastView = null;
function show(r, refit = false) {
  if (!r) return;
  for (const m of meshes) { group.remove(m); m.geometry.dispose(); } meshes = [];
  const alt = state.colors === 'omenom';
  const add = (m, mat) => { if (m) meshes.push(new THREE.Mesh(geomFrom(m), mat)); };
  if (state.view === 'samen') {
    add(r.base, mats[0]); add(r.switches, matSw); r.assembled.forEach((a, i) => { add(a.body, mats[alt && i % 2 ? 3 : 1]); add(a.letter, mats[2]); });
  } else {
    add(r.plate.base, mats[0]); r.plate.caps.forEach((a, i) => { add(a.body, mats[alt && i % 2 ? 3 : 1]); add(a.letter, mats[2]); });
  }
  group.position.set(0, 0, 0);
  group.add(...meshes);
  if (state.view === 'plaat') { // printbed tonen
    const bed = new THREE.Mesh(new THREE.PlaneGeometry(270, 270), new THREE.MeshBasicMaterial({ color: 0xd9dde8, transparent: true, opacity: 0.7 }));
    bed.position.set(135, 135, -0.05); bed.geometry = bed.geometry; meshes.push(bed); group.add(bed);
  }
  if (refit || lastView !== state.view + state.layout) fitView(); else fitView();
  lastView = state.view + state.layout;
}

// ---------- opbouwen ----------
function opts() {
  const o = { name: $('name').value, layout: state.layout, orient: state.orient, capShape: state.capShape, label: state.label, colors: state.colors, upper: $('upper').checked };
  for (const k of ['key', 'textH', 'spacing', 'arc', 'floor', 'rim', 'cut', 'plateT', 'holeTol', 'stemTol']) o[k] = +$(k).value;
  for (const k of ['loop', 'fill', 'centerKey', 'pushHole']) o[k] = $(k).checked;
  o.sw = $('sw').value; if (o.layout === 'test') { o.loop = false; }
  return o;
}
let timer = null, pending = false;
function schedule() { clearTimeout(timer); timer = setTimeout(rebuild, 150); }
async function rebuild() {
  if (!wasm || !font) return;
  if (cc.busy) { pending = true; return; }
  cc.busy = true; $('busy').style.display = 'block';
  await new Promise((r) => setTimeout(r, 0));
  try {
    const t0 = performance.now();
    const r = buildClicker(wasm, font, opts());
    result = r; cc.info = r.info; cc.error = null; cc.builds++;
    show(r);
    const i = r.info; const b = i.baseSize;
    const g = (v) => nl(v, 0) + ' g';
    $('info').innerHTML = `<b>${i.letters} letters</b> → <b>${i.switches} MX-schakelaars</b> en <b>${i.keycaps} toetsen</b>${i.center ? ' (1 hartjestoets in het midden)' : ''}` +
      `<table><tr><td>Voet</td><td><b>${nl(b[0])} × ${nl(b[1])} × ${nl(b[2])} mm</b></td></tr>` +
      `<tr><td>Toets</td><td>${i.round ? 'rond Ø' + nl(i.capSize[0]) : nl(i.capSize[0]) + ' × ' + nl(i.capSize[1])} mm, ${nl(i.capSize[2])} mm hoog · letters ${nl(i.textMM)} mm</td></tr>` +
      `<tr><td>In elkaar</td><td>${nl(i.assembledH)} mm hoog</td></tr>` +
      `<tr><td>Filament (massief, echt minder)</td><td>voet ${g(i.grams.base)} · toetsen ${g(i.grams.caps)} · letters ${nl(i.grams.letters, 1)} g</td></tr></table>` +
      (i.warn.length ? '<div style="color:#b5651d;margin-top:6px">⚠ ' + i.warn.join('<br>⚠ ') + '</div>' : '');
    const ok = i.ok && i.fitsBase;
    setStatus((ok ? '<b>✔ printklaar</b>: elk onderdeel is één dicht, waterdicht geheel' + (i.fitsBed ? ' en alles past op één printbed' : '') : '⚠ niet helemaal in orde: ' + (i.fitsBase ? 'een onderdeel is niet dicht' : 'de voet is groter dan het printbed (270 mm)')) +
      ` <span style="opacity:.6">· ${Math.round(performance.now() - t0)} ms</span>`, ok ? 'ok' : 'err');
    for (const id of ['dl3mf', 'dlBase', 'dlCaps', 'dlLetters']) $(id).disabled = false;
    $('dlLetters').disabled = !r.plate.caps.some((c) => c.letter);
  } catch (e) {
    console.warn(e); cc.error = String(e.message || e);
    setStatus('Dit lukte niet: ' + cc.error, 'err');
  } finally {
    cc.busy = false; $('busy').style.display = 'none';
    if (pending) { pending = false; schedule(); }
  }
}

function fileBase() { return 'naam-clicker-' + ($('name').value || 'naam').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase() + '-' + state.layout; }
function download(bytes, name, type) {
  const url = URL.createObjectURL(new Blob([bytes], { type })); const a = document.createElement('a');
  a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 5000);
}
const colorsNow = () => ['c1', 'c2', 'c3', 'c4'].map((id) => $(id).value.toUpperCase());
cc.threemf = () => to3MF(result, fileBase(), colorsNow());
cc.stl = (what) => toSTL(what === 'base' ? [result.plate.base] : result.plate.caps.map((c) => (what === 'caps' ? c.body : c.letter)), fileBase());
cc.set = (o) => { // voor tests: { layout, name, ... }
  if (o.name !== undefined) $('name').value = o.name;
  for (const g of ['layout', 'orient', 'capShape', 'label', 'colors', 'view']) if (o[g]) $(g).querySelector(`[data-v="${o[g]}"]`).click();
  schedule();
};
$('dl3mf').onclick = () => result && download(cc.threemf(), fileBase() + '_U1.3mf', 'model/3mf');
$('dlBase').onclick = () => result && download(cc.stl('base'), fileBase() + '-voet.stl', 'model/stl');
$('dlCaps').onclick = () => result && download(cc.stl('caps'), fileBase() + '-toetsen.stl', 'model/stl');
$('dlLetters').onclick = () => result && download(cc.stl('letters'), fileBase() + '-letters.stl', 'model/stl');

try {
  const [m, f] = await Promise.all([ManifoldModule(), loadFont('LiberationSans-Bold.ttf')]);
  m.setup(); wasm = m; font = f; cc.ready = true;
  await rebuild();
} catch (e) {
  console.warn(e); cc.error = String(e.message || e);
  setStatus('Laden mislukt: ' + cc.error + '. Controleer je internetverbinding en herlaad de pagina.', 'err');
}
