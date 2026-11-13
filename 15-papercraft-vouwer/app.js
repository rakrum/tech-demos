// Demo 15 · papercraft-vouwer: interface, inladen van modellen en 3D-weergave.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as PC from './papercraft.js';

const $ = (id) => document.getElementById(id);
const st = { name: '', soup: null, colors: null, upZ: true, model: null, R: null, seed: 0, busy: false };
window.__td15 = st;

function setStatus(kind, html) { $('status').innerHTML = html ? `<div class="msg ${kind}">${html}</div>` : ''; }
const nl = (x, d = 0) => x.toLocaleString('nl-NL', { minimumFractionDigits: d, maximumFractionDigits: d });

// ---------- voorbeelden ----------
for (const [key, ex] of Object.entries(PC.EXAMPLES)) {
  const b = document.createElement('button'); b.textContent = ex.naam; b.dataset.ex = key;
  b.onclick = () => loadExample(key); $('examples').appendChild(b);
}
function loadExample(key) {
  const ex = PC.EXAMPLES[key], { soup, colors } = ex.make();
  document.querySelectorAll('#examples button').forEach((b) => b.classList.toggle('on', b.dataset.ex === key));
  $('size').value = ex.size;
  setModel(key, soup, colors, true);
}
st.loadExample = loadExample;

// ---------- bestanden inladen ----------
const drop = $('drop');
drop.onclick = () => $('file').click();
drop.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') $('file').click(); };
$('file').onchange = (e) => { if (e.target.files.length) handleFiles(e.target.files); e.target.value = ''; };
['dragenter', 'dragover'].forEach((ev) => document.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.add('over'); }));
['dragleave', 'drop'].forEach((ev) => document.addEventListener(ev, (e) => { e.preventDefault(); if (ev === 'drop' || e.target === drop) drop.classList.remove('over'); }));
document.addEventListener('drop', (e) => { if (e.dataTransfer && e.dataTransfer.files.length) handleFiles(e.dataTransfer.files); });

async function handleFiles(list) {
  const files = [...list], main = files.find((f) => /\.(stl|obj|glb|gltf)$/i.test(f.name));
  if (!main) { setStatus('err', 'Dit bestandstype ken ik niet. Gebruik .stl, .obj, .glb of .gltf.'); return; }
  setStatus('', ''); $('info').textContent = 'Model wordt ingelezen…';
  const ext = main.name.split('.').pop().toLowerCase(), base = main.name.replace(/\.[^.]+$/, '');
  try {
    let obj, upZ = false;
    if (ext === 'stl') { const g = new STLLoader().parse(await main.arrayBuffer()); obj = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: 0xffffff })); obj.userData.stlColors = !!g.hasColors; upZ = true; }
    else if (ext === 'obj') obj = new OBJLoader().parse(await main.text());
    else {
      const urls = new Map(files.map((f) => [f.name, URL.createObjectURL(f)]));
      const mgr = new THREE.LoadingManager(); mgr.setURLModifier((u) => { const n = decodeURIComponent(u.split('/').pop()); return urls.get(n) || u; });
      const gltf = await new GLTFLoader(mgr).loadAsync(urls.get(main.name));
      obj = gltf.scene; urls.forEach((u) => URL.revokeObjectURL(u));
    }
    const { soup, colors } = objectToSoup(obj);
    if (!soup.length) throw new Error('geen driehoeken gevonden');
    document.querySelectorAll('#examples button').forEach((b) => b.classList.remove('on'));
    setModel(base, soup, colors, upZ);
  } catch (err) {
    console.error(err); $('info').textContent = '';
    setStatus('err', 'Kon het model niet lezen: ' + (err.message || err) + (ext === 'gltf' ? '. Hoort er een .bin-bestand bij? Sleep die dan tegelijk mee, of gebruik een .glb.' : ''));
  }
}
function objectToSoup(root) {
  root.updateMatrixWorld(true);
  const soup = [], colors = [], v = new THREE.Vector3(), col = new THREE.Color();
  let anyColor = false;
  // naar sRGB-hex, afgerond zodat bijna gelijke kleuren één vlak blijven
  const hex = (color) => { const t = {}; color.getRGB(t, THREE.SRGBColorSpace); const q = (x) => Math.min(255, Math.round(x * 255 / 24) * 24); return '#' + [t.r, t.g, t.b].map((x) => q(x).toString(16).padStart(2, '0')).join(''); };
  root.traverse((m) => {
    if (!m.isMesh || !m.geometry?.attributes?.position) return;
    const g = m.geometry, pos = g.attributes.position, idx = g.index, ca = g.attributes.color;
    const mats = Array.isArray(m.material) ? m.material : [m.material];
    const groups = g.groups.length ? g.groups : [{ start: 0, count: idx ? idx.count : pos.count, materialIndex: 0 }];
    for (const gr of groups) {
      const mat = mats[gr.materialIndex ?? 0] || mats[0];
      const matHex = mat && mat.color ? hex(mat.color) : null;
      const matColored = matHex && matHex !== '#ffffff';
      for (let i = gr.start; i + 2 < gr.start + gr.count; i += 3) {
        let r = 0, gg = 0, b = 0;
        for (let k = 0; k < 3; k++) {
          const vi = idx ? idx.getX(i + k) : i + k;
          v.fromBufferAttribute(pos, vi).applyMatrix4(m.matrixWorld); soup.push(v.x, v.y, v.z);
          if (ca) { col.fromBufferAttribute(ca, vi); r += col.r; gg += col.g; b += col.b; }
        }
        if (ca) { col.setRGB(r / 3, gg / 3, b / 3, THREE.LinearSRGBColorSpace); colors.push(hex(col)); anyColor = true; }
        else if (matColored) { colors.push(matHex); anyColor = true; }
        else colors.push(null);
      }
    }
  });
  if (anyColor) for (let i = 0; i < colors.length; i++) if (!colors[i]) colors[i] = '#ffffff';
  return { soup, colors: anyColor ? colors : [] };
}

// ---------- model -> vlakken -> bouwplaat ----------
function setModel(name, soup, colors, upZ) {
  Object.assign(st, { name, soup, colors, upZ, seed: 0 });
  rebuild();
}
function opts() {
  return { size: +$('size').value || 100, sheet: $('sheet').value, margin: Math.max(0, +$('margin').value || 0), tab: Math.max(0, +$('tab').value || 0), tol: Math.max(0, +$('tol').value || 0), numbers: $('numbers').checked, colorOn: $('colorOn').checked, colorSrc: $('colorSrc').value, fill: $('fill').value };
}
function rebuild() {
  if (!st.soup) return;
  const o = opts(), tris = st.soup.length / 9;
  if (tris > PC.MAX_TRIS) { setStatus('err', `Dit model heeft ${nl(tris)} driehoeken. Dat is veel te veel voor papier. Maak het eerst low-poly (zie de tips hieronder) tot een paar honderd vlakken.`); $('info').innerHTML = decimateTip(); return; }
  const t0 = performance.now();
  st.model = PC.makeModel(st.soup, st.colors, { size: o.size, tol: o.tol });
  const F = st.model.faces.length;
  if (F > 2000) { setStatus('err', `Na het samenvoegen zijn er nog ${nl(F)} vlakken. Dat wordt geen bouwplaat; maak het model eerst low-poly.`); $('info').innerHTML = decimateTip(); draw3D(); $('sheets').innerHTML = ''; st.R = null; return; }
  st.buildMs = performance.now() - t0;
  relayout();
}
function decimateTip() { return '<p class="hint"><b>Low-poly maken:</b> in <b>Tripo</b> kies je bij het genereren een laag aantal vlakken (low-poly), in <b>Blender</b> gebruik je de modifier <i>Decimate</i> (Collapse of Planar) en exporteer je weer als STL/GLB.</p>'; }
function relayout() {
  if (!st.model) return;
  const o = opts(), F = st.model.faces.length, t0 = performance.now();
  st.R = PC.layout(st.model, { sheet: o.sheet, margin: o.margin, tab: o.tab, seed: st.seed, tries: F > 400 ? 2 : F > 150 ? 4 : 12, numbers: o.numbers });
  st.layoutMs = performance.now() - t0;
  renderSheets(); draw3D(); renderInfo();
}
function svgOpts(preview) {
  const o = opts();
  return { preview, margin: o.margin, numbers: o.numbers, color: o.colorOn, fill: o.fill, override: o.colorSrc === 'eigen' || !st.model?.hasColor };
}
st.svgs = () => st.R.sheets.map((S) => PC.sheetSVG(S, svgOpts(false)));
st.dxfs = () => st.R.sheets.map((S) => PC.sheetDXF(S, { numbers: opts().numbers }));

function renderSheets() {
  const R = st.R, box = $('sheets'); box.innerHTML = '';
  R.sheets.forEach((S, i) => {
    const d = document.createElement('div'); d.className = 'sheet';
    d.innerHTML = PC.sheetSVG(S, svgOpts(true)).replace(/^<\?xml[^>]*>\s*/, '');
    const cap = document.createElement('div'); cap.className = 'cap';
    cap.innerHTML = `<span>Vel ${i + 1} van ${R.sheets.length} · ${S.islands.length} ${S.islands.length === 1 ? 'stuk' : 'stukken'}</span>`;
    const b1 = document.createElement('button'); b1.className = 'small'; b1.textContent = 'SVG'; b1.onclick = () => download(st.svgs()[i], `${fileBase()}_vel${i + 1}.svg`, 'image/svg+xml');
    const b2 = document.createElement('button'); b2.className = 'small'; b2.textContent = 'DXF'; b2.onclick = () => download(st.dxfs()[i], `${fileBase()}_vel${i + 1}.dxf`, 'application/dxf');
    const sp = document.createElement('span'); sp.append(b1, ' ', b2); cap.appendChild(sp); d.appendChild(cap); box.appendChild(d);
  });
}
function renderInfo() {
  const R = st.R, s = R.stats, m = st.model, sz = m.mesh.bbox.size, o = opts();
  $('dims').textContent = `Model: ${nl(sz[0], 1)} × ${nl(sz[1], 1)} × ${nl(sz[2], 1)} mm`;
  const warn = [];
  if (s.faces > PC.MAX_FACES_WARN) warn.push(`Dit model heeft <b>${nl(s.faces)} vlakken</b>. Dat is veel knip- en plakwerk. Maak het eerst simpeler: in Tripo met een low-poly instelling, of in Blender met <i>Decimate</i>.`);
  if (s.overflow || s.tooBigFaces) warn.push('Een of meer stukken passen niet op het vel. Kies een kleinere maat of een groter vel.');
  if (s.noTab) warn.push(`${s.noTab} ${s.noTab === 1 ? 'naad kreeg' : 'naden kregen'} geen lijmlipje (te kort, of geen plek). Gebruik daar een stukje plakband aan de binnenkant.`);
  if (m.openEdges) warn.push(`Het model is niet dicht (${nl(m.openEdges)} open randen). Dat mag, maar die randen worden gewoon snijlijn.`);
  if (m.nonManifold) warn.push(`${nl(m.nonManifold)} randen horen bij meer dan twee vlakken; die worden doorgesneden.`);
  if (o.colorOn && !m.hasColor && o.colorSrc === 'model') warn.push('Dit model heeft geen kleuren; ik gebruik je eigen kleur.');
  setStatus(warn.length ? 'warn' : 'ok', warn.length ? warn.join('<br>') : 'Klaar. Alle stukken passen zonder overlap.');
  $('info').innerHTML = `<b>${nl(s.faces)}</b> vlakken (uit ${nl(m.triCount)} driehoeken) · <b>${nl(s.islands)}</b> ${s.islands === 1 ? 'stuk' : 'stukken'} · <b>${nl(s.sheets)}</b> ${s.sheets === 1 ? 'vel' : 'vellen'} ${PC.SHEETS[o.sheet].naam} · ${nl(s.seams)} naden met lijmlipje en nummer.<br><span class="hint">Indeling ${s.seed + 1} · berekend in ${nl((st.buildMs || 0) + st.layoutMs)} ms. Niet tevreden? Klik op <b>Herschik</b>.</span>`
    + (s.faces > PC.MAX_FACES_WARN ? decimateTip() : '');
}

// ---------- downloads ----------
function fileBase() { const o = opts(); return `bouwplaat_${(st.name || 'model').replace(/[^\w-]+/g, '-')}_${Math.round(o.size)}mm_${o.sheet}`; }
function download(data, name, type) {
  const url = URL.createObjectURL(new Blob([data], { type })); const a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 4000);
}
function dlAll(kind) {
  if (!st.R) return;
  const list = kind === 'svg' ? st.svgs() : st.dxfs();
  if (list.length === 1) download(list[0], `${fileBase()}.${kind}`, kind === 'svg' ? 'image/svg+xml' : 'application/dxf');
  else download(PC.makeZip(list.map((d, i) => ({ name: `${fileBase()}_vel${i + 1}.${kind}`, data: d }))), `${fileBase()}_${kind}.zip`, 'application/zip');
  setStatus('ok', kind === 'svg' ? 'SVG gedownload. Open hem in xTool Studio: rood = snijden, blauw = rillen, zwart = pen.' : 'DXF gedownload (lagen CUT, SCORE en TEXT, in mm).');
}
$('dlsvg').onclick = () => dlAll('svg');
$('dldxf').onclick = () => dlAll('dxf');
$('herschik').onclick = () => { if (!st.model) return; const F = st.model.faces.length; st.seed += F > 400 ? 2 : F > 150 ? 4 : 12; relayout(); };

let tmr = null; const later = (fn) => { clearTimeout(tmr); tmr = setTimeout(fn, 250); };
['size', 'tol'].forEach((id) => $(id).addEventListener('input', () => later(rebuild)));
['sheet', 'margin', 'tab', 'numbers'].forEach((id) => $(id).addEventListener('input', () => later(relayout)));
['colorOn', 'colorSrc', 'fill'].forEach((id) => $(id).addEventListener('input', () => { $('colorOpts').hidden = !$('colorOn').checked; if (st.R) { renderSheets(); draw3D(); renderInfo(); } }));

// ---------- 3D-weergave ----------
const view = (() => {
  const el = $('view3d'), renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(2, devicePixelRatio)); el.prepend(renderer.domElement);
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0xeef0f8);
  const cam = new THREE.PerspectiveCamera(40, 1, 0.1, 10000);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8890a8, 2.2)); const dl = new THREE.DirectionalLight(0xffffff, 1.6); dl.position.set(1, 2, 1.5); scene.add(dl);
  const ctl = new OrbitControls(cam, renderer.domElement); ctl.enableDamping = true;
  const world = new THREE.Group(); scene.add(world);
  const resize = () => { const w = el.clientWidth, h = el.clientHeight; renderer.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); };
  new ResizeObserver(resize).observe(el); resize();
  (function loop() { requestAnimationFrame(loop); ctl.update(); renderer.render(scene, cam); })();
  return { scene, cam, ctl, world, renderer };
})();
let lastFitKey = '';
function draw3D() {
  const m = st.model; if (!m) return;
  view.world.clear();
  const o = opts(), useOwn = o.colorOn && (o.colorSrc === 'eigen' || !m.hasColor);
  const pos = [], col = [], c = new THREE.Color(), V = m.mesh.verts;
  for (const f of m.faces) {
    c.set(useOwn ? o.fill : (f.color || '#e8eaf3'));
    for (const t of f.tris) for (const vi of m.mesh.tris[t]) { pos.push(...V[vi]); col.push(c.r, c.g, c.b); }
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.computeVertexNormals();
  const mesh = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.85, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }));
  const lp = [], lc = [], red = new THREE.Color(0xff0000), blue = new THREE.Color(0x2040ff);
  const folds = st.R ? st.R.U.foldSet : new Set();
  m.faces.forEach((f, fi) => f.edges.forEach((e, ei) => {
    if (e.pf >= 0 && fi > e.pf) return;
    const fold = folds.has(fi + ':' + ei); if (fold && e.angle <= 0.5) return;
    const cc = fold ? blue : red; lp.push(...V[e.a], ...V[e.b]); lc.push(cc.r, cc.g, cc.b, cc.r, cc.g, cc.b);
  }));
  const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute(lp, 3)); lg.setAttribute('color', new THREE.Float32BufferAttribute(lc, 3));
  const lines = new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ vertexColors: true }));
  const grp = new THREE.Group(); grp.add(mesh, lines);
  if (st.upZ) grp.rotation.x = -Math.PI / 2;
  view.world.add(grp);
  const box = new THREE.Box3().setFromObject(grp), ctr = box.getCenter(new THREE.Vector3()), r = box.getSize(new THREE.Vector3()).length() / 2 || 1;
  grp.position.sub(ctr);
  const key = st.name + '|' + o.size;
  if (key !== lastFitKey) { lastFitKey = key; view.cam.position.set(r * 1.6, r * 1.2, r * 2.2); view.cam.near = r / 100; view.cam.far = r * 100; view.cam.updateProjectionMatrix(); view.ctl.target.set(0, 0, 0); view.ctl.update(); }
}

loadExample('ster');
