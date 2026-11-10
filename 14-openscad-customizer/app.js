// Tech demo 14 · OpenSCAD customizer. Licentie: MIT (deze code); OpenSCAD zelf is GPL-2.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as M from './mesh.js';

const EXAMPLES = [
  { file: 'fidget-spinner.scad', title: 'Fidget spinner', note: 'print-in-place lager' },
  { file: 'doosje-met-deksel.scad', title: 'Doosje met deksel', note: 'met tekst op het deksel' },
  { file: 'naamlabel.scad', title: 'Naamlabel', note: 'sleutelhanger met tekst' },
  { file: 'telefoonhouder.scad', title: 'Telefoonhouder', note: 'voor telefoon of tablet' },
];

const $ = (id) => document.getElementById(id);
const state = {
  name: 'model', code: '', params: [], values: {}, extraFiles: {},
  stl: null, mesh: null, svg: null, lastDefines: null, rendering: false, queued: false,
  renderCount: 0, lastResult: null, errors: [],
};
window.__td14 = state; // handig om te testen

// ---------- Worker ----------
let worker, jobId = 0; const pending = new Map();
function startWorker() {
  worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });
  worker.onmessage = (e) => {
    const m = e.data;
    if (m.status && !m.done) setStatus(m.status, 'busy');
    if (m.done && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
  };
  worker.onerror = (e) => { setStatus('De rekenmodule is gecrasht: ' + (e.message || 'onbekende fout') + '. Klik op Renderen om opnieuw te proberen.', 'err'); restartWorker(); };
}
function restartWorker() {
  try { worker.terminate(); } catch { }
  for (const [, res] of pending) res({ done: true, rc: -2, data: null, log: ['Gestopt.'], ms: 0 });
  pending.clear(); startWorker();
}
function runOpenSCAD(code, defines, format) {
  const id = ++jobId;
  return new Promise((res) => { pending.set(id, res); worker.postMessage({ id, code, defines, format, extraFiles: state.extraFiles }); });
}
startWorker();

// ---------- Status / log ----------
function setStatus(t, cls = '') { const s = $('status'); s.textContent = t; s.className = cls; }
function showLog(lines) {
  const pre = $('log'); pre.innerHTML = '';
  for (const l of lines) {
    if (/^Could not initialize localization/.test(l)) continue;
    const span = document.createElement('span');
    span.className = /ERROR:|Parser error|failed/.test(l) ? 'e' : /WARNING:|DEPRECATED/.test(l) ? 'w' : /^ECHO/.test(l) ? 'm' : '';
    span.textContent = l + '\n'; pre.appendChild(span);
  }
}
function summarizeErrors(log) {
  const errs = log.filter((l) => /ERROR:|Parser error|^ERROR\b/.test(l));
  const warns = log.filter((l) => /WARNING:/.test(l));
  return { errs, warns };
}

// ---------- Model laden ----------
function prettyName(file) { return file.replace(/\.scad$/i, '').replace(/[^A-Za-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '') || 'model'; }

async function loadExample(ex) {
  const txt = await (await fetch('voorbeelden/' + ex.file)).text();
  document.querySelectorAll('#examples .btn').forEach((b) => b.classList.toggle('on', b.dataset.file === ex.file));
  await setModel(prettyName(ex.file), txt, {}, `Voorbeeld: ${ex.title} (${ex.file}, CC0/MIT)`);
}

async function setModel(name, code, extraFiles = {}, info = '') {
  state.name = name; state.code = code; state.extraFiles = extraFiles;
  $('code').value = code; $('modelinfo').textContent = info;
  await parseParams(true);
  doRender();
}

async function handleFiles(files) {
  files = [...files]; if (!files.length) return;
  const scads = files.filter((f) => /\.scad$/i.test(f.name));
  if (!scads.length) { setStatus('Dat is geen .scad-bestand. Kies een OpenSCAD-bestand (.scad).', 'err'); return; }
  // hoofdbestand: het bestand dat niet door een ander wordt ge-include, anders het eerste
  const texts = await Promise.all(scads.map((f) => f.text()));
  let mainIdx = 0;
  if (scads.length > 1) {
    const cand = scads.findIndex((f, i) => !texts.some((t, j) => j !== i && t.includes(f.name)));
    if (cand >= 0) mainIdx = cand;
  }
  const extra = {};
  for (const f of files) if (f !== scads[mainIdx]) extra[f.name] = new Uint8Array(await f.arrayBuffer());
  document.querySelectorAll('#examples .btn').forEach((b) => b.classList.remove('on'));
  const others = Object.keys(extra);
  await setModel(prettyName(scads[mainIdx].name), texts[mainIdx], extra, `Eigen bestand: ${scads[mainIdx].name}` + (others.length ? ` + ${others.join(', ')}` : ''));
}

// ---------- Parameters ----------
async function parseParams(resetValues) {
  setStatus('Parameters lezen…', 'busy');
  const r = await runOpenSCAD(state.code, [], 'param');
  let params = [];
  if (r.data) {
    try { params = JSON.parse(new TextDecoder().decode(r.data)).parameters || []; } catch { }
  } else if (r.rc !== -2) {
    showLog(r.log);
    const { errs } = summarizeErrors(r.log);
    setStatus('Kon de parameters niet lezen: ' + (errs[0] || 'onbekende fout') + '. Kijk in het logboek.', 'err');
  }
  const old = state.values;
  state.params = params; state.values = {};
  for (const p of params) {
    const keep = !resetValues && old[p.name] !== undefined && typeof old[p.name] === typeof p.initial;
    state.values[p.name] = keep ? old[p.name] : clone(p.initial);
  }
  buildParamUI();
  return params;
}
const clone = (v) => Array.isArray(v) ? v.slice() : v;
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function label(p) { return p.caption && p.caption.trim() ? p.caption.trim() : p.name.replace(/_/g, ' '); }
const GROUP_NL = { Parameters: 'Parameters', Global: 'Algemeen', General: 'Algemeen' };

function buildParamUI() {
  const box = $('params'); box.innerHTML = '';
  if (!state.params.length) { box.innerHTML = '<p class="pad hint">Dit model heeft geen aanpasbare parameters (of ze staan onder <code>/* [Hidden] */</code>). Je kunt de code wel hieronder aanpassen.</p>'; return; }
  const groups = new Map();
  for (const p of state.params) { const g = p.group || 'Parameters'; if (!groups.has(g)) groups.set(g, []); groups.get(g).push(p); }
  let first = true;
  for (const [g, list] of groups) {
    const det = document.createElement('details'); det.open = first || groups.size <= 4; first = false;
    const sum = document.createElement('summary'); sum.textContent = GROUP_NL[g] || g; det.appendChild(sum);
    const pl = document.createElement('div'); pl.className = 'plist';
    for (const p of list) pl.appendChild(paramControl(p));
    det.appendChild(pl); box.appendChild(det);
  }
}

function paramControl(p) {
  const wrap = document.createElement('div'); wrap.className = 'param'; wrap.dataset.name = p.name;
  const cap = document.createElement('label'); cap.className = 'cap';
  cap.innerHTML = ''; cap.append(label(p) + ' ');
  const nm = document.createElement('span'); nm.className = 'nm'; nm.textContent = p.name; cap.appendChild(nm);
  wrap.appendChild(cap);
  const v = state.values[p.name];
  const mark = () => wrap.classList.toggle('changed', !same(state.values[p.name], p.initial));
  const set = (val, now) => { state.values[p.name] = val; mark(); paramChanged(now); };

  if (p.options) {
    const sel = document.createElement('select');
    p.options.forEach((o, i) => { const op = document.createElement('option'); op.value = i; op.textContent = String(o.name); if (same(o.value, v)) op.selected = true; sel.appendChild(op); });
    sel.onchange = () => set(p.options[+sel.value].value, true);
    wrap.appendChild(sel);
  } else if (p.type === 'boolean') {
    const l = document.createElement('label'); l.className = 'chk';
    const cb = document.createElement('input'); cb.type = 'checkbox'; cb.checked = !!v;
    cb.onchange = () => set(cb.checked, true);
    l.append(cb, document.createTextNode(cb.checked ? 'aan' : 'uit'));
    cb.addEventListener('change', () => { l.lastChild.textContent = cb.checked ? 'aan' : 'uit'; });
    wrap.appendChild(l);
  } else if (p.type === 'number' && Array.isArray(p.initial)) {
    const row = document.createElement('div'); row.className = 'vec';
    v.forEach((x, i) => {
      const n = document.createElement('input'); n.type = 'number'; n.value = x; n.step = p.step || 'any';
      if (p.min !== undefined) n.min = p.min; if (p.max !== undefined) n.max = p.max;
      n.oninput = () => { if (n.value === '' || isNaN(+n.value)) return; const arr = state.values[p.name].slice(); arr[i] = +n.value; set(arr, false); };
      row.appendChild(n);
    });
    wrap.appendChild(row);
  } else if (p.type === 'number') {
    const row = document.createElement('div'); row.className = 'row';
    const n = document.createElement('input'); n.type = 'number'; n.value = v; n.step = p.step !== undefined ? p.step : 'any';
    if (p.min !== undefined && p.max !== undefined) {
      const r = document.createElement('input'); r.type = 'range'; r.min = p.min; r.max = p.max; r.step = p.step || 'any'; r.value = v;
      n.min = p.min; n.max = p.max;
      r.oninput = () => { n.value = r.value; set(+r.value, false); };
      n.oninput = () => { if (n.value === '' || isNaN(+n.value)) return; r.value = n.value; set(+n.value, false); };
      row.append(r, n);
      const h = document.createElement('div'); h.className = 'hint'; h.textContent = `van ${p.min} tot ${p.max}` + (p.step ? `, stap ${p.step}` : '');
      wrap.append(row, h);
    } else {
      n.oninput = () => { if (n.value === '' || isNaN(+n.value)) return; set(+n.value, false); };
      row.append(n); wrap.appendChild(row);
    }
  } else {
    const t = document.createElement('input'); t.type = 'text'; t.value = v ?? '';
    if (p.maxLength) { t.maxLength = p.maxLength; }
    t.oninput = () => set(t.value, false);
    wrap.appendChild(t);
    if (p.maxLength) { const h = document.createElement('div'); h.className = 'hint'; h.textContent = `maximaal ${p.maxLength} tekens`; wrap.appendChild(h); }
  }
  mark();
  return wrap;
}

let debounceT = 0;
function paramChanged(now) {
  if (!$('auto').checked) { setStatus('Parameters gewijzigd. Klik op Renderen om het resultaat te zien.', 'warn'); return; }
  clearTimeout(debounceT); debounceT = setTimeout(doRender, now ? 150 : 600);
}

function definesFor() {
  const d = [];
  for (const p of state.params) {
    const v = state.values[p.name];
    if (!same(v, p.initial)) d.push(`${p.name}=${M.scadValue(v)}`);
  }
  return d;
}

function changedSuffix() {
  const parts = [];
  for (const p of state.params) {
    const v = state.values[p.name]; if (same(v, p.initial)) continue;
    let s = Array.isArray(v) ? v.join('x') : typeof v === 'boolean' ? (v ? 'aan' : 'uit') : String(v);
    s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-Za-z0-9.]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 20);
    parts.push(`${p.name}-${s}`);
  }
  return parts;
}
function fileBase() {
  let b = state.name; const s = changedSuffix();
  if (s.length) b += '_' + s.join('_');
  return b.slice(0, 90);
}

// ---------- Renderen ----------
async function doRender() {
  if (state.rendering) { state.queued = true; return; }
  state.rendering = true; state.queued = false;
  $('render').disabled = true; $('stop').hidden = false;
  const defines = definesFor(); const t0 = performance.now();
  setStatus('Renderen…', 'busy');
  let r = await runOpenSCAD(state.code, defines, 'binstl');
  let is2D = false;
  if (!r.data && r.rc !== -2 && r.log.some((l) => /not a 3D object|2D object/i.test(l))) {
    is2D = true; const r2 = await runOpenSCAD(state.code, defines, 'svg'); r2.log = r.log.concat(r2.log); r = r2;
  }
  state.rendering = false; $('render').disabled = false; $('stop').hidden = true;
  state.lastResult = { rc: r.rc, ms: r.ms, ok: !!r.data, is2D, defines };
  showLog(r.log);
  const { errs, warns } = summarizeErrors(r.log);
  state.errors = errs;
  if (r.rc === -2) { setStatus('Gestopt. Pas iets aan of klik op Renderen.', 'warn'); }
  else if (!r.data) {
    const empty = r.log.some((l) => /top level object is empty/i.test(l));
    setStatus(empty ? 'Het model is leeg: er komt geen vorm uit met deze instellingen.' : 'Renderen mislukt: ' + (errs[0] || 'onbekende fout') + ' (zie logboek).', 'err');
    $('dl3mf').disabled = $('dlstl').disabled = true;
  } else if (is2D) {
    show2D(r.data, warns, r.ms);
  } else {
    show3D(r.data, warns, performance.now() - t0);
  }
  state.renderCount++;
  if (state.queued) doRender();
}

function show3D(data, warns, ms) {
  state.stl = data; state.svg = null;
  const pos = M.parseSTL(data); const mesh = M.indexMesh(pos); const chk = M.checkClosed(mesh); const bb = M.bbox(pos);
  state.mesh = mesh; state.check = chk; state.bbox = bb;
  $('view').style.display = 'block'; $('svgview').style.display = 'none';
  $('dlsvg').hidden = true; $('dl3mf').hidden = $('dlstl').hidden = false;
  $('dl3mf').disabled = $('dlstl').disabled = false;
  setGeometry(pos, bb);
  const f = (x) => x.toFixed(1).replace('.', ',');
  $('dims').innerHTML = `<span>Breedte (x) <b>${f(bb.size[0])} mm</b></span><span>Diepte (y) <b>${f(bb.size[1])} mm</b></span><span>Hoogte (z) <b>${f(bb.size[2])} mm</b></span><span>${chk.triangles.toLocaleString('nl-NL')} driehoeken</span><span>${chk.closed ? 'Gesloten mesh ✓' : 'Let op: mesh niet gesloten'}</span>`;
  const notes = [];
  if (Math.abs(bb.min[2]) > 0.01) notes.push(`het laagste punt ligt op z = ${f(bb.min[2])} mm (de slicer legt hem vanzelf op het bed)`);
  if (bb.size[0] > 270 || bb.size[1] > 270 || bb.size[2] > 270) notes.push('groter dan het bed van de U1 (270 × 270 × 270 mm)');
  if (warns.some((w) => /Can't get font/i.test(w))) notes.push('een lettertype uit het model zit er niet in; kies Liberation Sans, Liberation Serif of Liberation Mono');
  if (warns.length) notes.push(`${warns.length} waarschuwing(en) in het logboek`);
  setStatus(`Klaar in ${(ms / 1000).toFixed(1).replace('.', ',')} s.` + (notes.length ? ' Let op: ' + notes.join('; ') + '.' : ''), notes.length ? 'warn' : 'ok');
}

function show2D(data, warns, ms) {
  state.svg = data; state.stl = null; state.mesh = null;
  const url = URL.createObjectURL(new Blob([data], { type: 'image/svg+xml' }));
  $('svgview').querySelector('img').src = url;
  $('view').style.display = 'none'; $('svgview').style.display = 'flex';
  $('dl3mf').hidden = $('dlstl').hidden = true; $('dlsvg').hidden = false; $('dlsvg').disabled = false;
  $('dims').innerHTML = '<span>Dit is een <b>2D-model</b>: download het als SVG (in mm) voor de xTool O1 of C1, of zet er in de code <code>linear_extrude()</code> omheen voor 3D.</span>';
  setStatus(`2D-model klaar in ${(ms / 1000).toFixed(1).replace('.', ',')} s.`, 'ok');
}

// ---------- three.js ----------
const canvas = $('view');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 5000); camera.up.set(0, 0, 1);
const controls = new OrbitControls(camera, canvas); controls.enableDamping = true;
scene.add(new THREE.HemisphereLight(0xffffff, 0x8890a0, 2.2));
const dl = new THREE.DirectionalLight(0xffffff, 1.6); dl.position.set(-1, -2, 3); scene.add(dl);
const dl2 = new THREE.DirectionalLight(0xffffff, 0.6); dl2.position.set(2, 1, 1); scene.add(dl2);
const bed = new THREE.Group(); scene.add(bed);
(function makeBed() {
  const S = 270; // Snapmaker U1-bed 270 × 270 mm
  const g = new THREE.GridHelper(S, S / 10, 0xa8b0c4, 0xc9cfdc); g.rotation.x = Math.PI / 2; bed.add(g);
  const plate = new THREE.Mesh(new THREE.PlaneGeometry(S, S), new THREE.MeshBasicMaterial({ color: 0xe9ecf4, transparent: true, opacity: 0.6 }));
  plate.position.z = -0.05; bed.add(plate);
})();
let modelMesh = null;
const mat = new THREE.MeshStandardMaterial({ color: 0x4f6bff, roughness: 0.55, metalness: 0.05, flatShading: true });
function setGeometry(pos, bb) {
  if (modelMesh) { scene.remove(modelMesh); modelMesh.geometry.dispose(); }
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.computeVertexNormals();
  modelMesh = new THREE.Mesh(geo, mat); scene.add(modelMesh);
  const cx = (bb.min[0] + bb.max[0]) / 2, cy = (bb.min[1] + bb.max[1]) / 2;
  bed.position.set(cx, cy, Math.min(bb.min[2], 0));
  const key = state.name + ':' + bb.size.map((s) => Math.round(s / 20)).join(',');
  if (key !== state.viewKey) {
    state.viewKey = key;
    const r = Math.max(...bb.size, 10);
    controls.target.set(cx, cy, (bb.min[2] + bb.max[2]) / 2);
    camera.position.set(cx + r * 0.9, cy - r * 1.6, bb.max[2] + r * 1.1);
  }
}
function resize() { const w = canvas.clientWidth, h = canvas.clientHeight; if (canvas.width !== Math.floor(w * renderer.getPixelRatio()) || canvas.height !== Math.floor(h * renderer.getPixelRatio())) { renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); } }
(function loop() { resize(); controls.update(); renderer.render(scene, camera); requestAnimationFrame(loop); })();

// ---------- Downloads ----------
function download(bytes, name, type) {
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([bytes], { type })); a.download = name;
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}
export function make3MF() { return M.to3MF(state.mesh, fileBase()); }
state.make3MF = make3MF; state.fileBase = fileBase; state.definesFor = definesFor; state.scadWithValues = scadWithValues;
$('dlstl').onclick = () => state.stl && download(state.stl, fileBase() + '.stl', 'model/stl');
$('dl3mf').onclick = () => state.mesh && download(make3MF(), fileBase() + '.3mf', 'model/3mf');
$('dlsvg').onclick = () => state.svg && download(state.svg, fileBase() + '.svg', 'image/svg+xml');
function scadWithValues() {
  let code = state.code;
  for (const p of state.params) {
    const v = state.values[p.name]; if (same(v, p.initial)) continue;
    const re = new RegExp('^(\\s*' + p.name.replace(/[$]/g, '\\$') + '\\s*=\\s*)([^;]*)(;)', 'm');
    code = code.replace(re, (all, a, b, c) => a + M.scadValue(v) + c);
  }
  return code;
}
$('dlscad').onclick = () => download(scadWithValues(), fileBase() + '.scad', 'text/plain');

// ---------- UI ----------
$('render').onclick = () => doRender();
$('stop').onclick = () => { restartWorker(); };
$('reset').onclick = () => { for (const p of state.params) state.values[p.name] = clone(p.initial); buildParamUI(); doRender(); };
$('reparse').onclick = async () => { state.code = $('code').value; await parseParams(false); doRender(); };
let codeT = 0;
$('code').addEventListener('input', () => { clearTimeout(codeT); codeT = setTimeout(async () => { state.code = $('code').value; await parseParams(false); if ($('auto').checked) doRender(); else setStatus('Code gewijzigd. Klik op Renderen.', 'warn'); }, 1200); });
$('code').addEventListener('keydown', (e) => { if (e.key === 'Tab') { e.preventDefault(); const t = e.target, s = t.selectionStart; t.setRangeText('  ', s, t.selectionEnd, 'end'); } });

const drop = $('drop');
drop.onclick = () => $('file').click();
drop.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') $('file').click(); };
$('file').onchange = (e) => handleFiles(e.target.files);
['dragenter', 'dragover'].forEach((ev) => document.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.add('over'); }));
['dragleave', 'drop'].forEach((ev) => document.addEventListener(ev, (e) => { e.preventDefault(); if (ev === 'drop' || e.target === drop) drop.classList.remove('over'); }));
document.addEventListener('drop', (e) => { if (e.dataTransfer && e.dataTransfer.files.length) handleFiles(e.dataTransfer.files); });

for (const ex of EXAMPLES) {
  const b = document.createElement('button'); b.className = 'btn'; b.dataset.file = ex.file;
  b.innerHTML = `<span><b>${ex.title}</b><br><span class="hint">${ex.note}</span></span>`;
  b.onclick = () => loadExample(ex); $('examples').appendChild(b);
}
state.loadExample = (file) => loadExample(EXAMPLES.find((e) => e.file === file));
state.setModel = setModel; state.doRender = doRender;
state.setParam = (name, v) => { state.values[name] = v; buildParamUI(); };

const q = new URLSearchParams(location.search).get('voorbeeld');
loadExample(EXAMPLES.find((e) => q && e.file.startsWith(q)) || EXAMPLES[0]);
