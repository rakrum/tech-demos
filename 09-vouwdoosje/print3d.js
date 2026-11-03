// 3D-print-tab van demo 09 (Snapmaker U1). Laadt Manifold en three.js pas als je de tab opent.
import { BED, buildTrayLid, buildFlatNet, toSTL, to3MF } from './box3d.js';
const $ = (id) => document.getElementById(id);
const fmt = (v) => (Math.round(v * 10) / 10).toLocaleString('nl-NL');
const f2 = (v) => (Math.round(v * 100) / 100).toLocaleString('nl-NL');
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const st = { wasm: null, THREE: null, loading: null, result: null, timer: 0, builds: 0, view: null };
window.__print3d = st;

function setMode(m3d) {
  document.body.classList.toggle('m3d', m3d);
  $('tab2d').setAttribute('aria-selected', String(!m3d)); $('tab3d').setAttribute('aria-selected', String(m3d));
  if (m3d) { if (location.hash !== '#3d') history.replaceState(null, '', '#3d'); ensureLoaded().then(schedule); }
  else if (location.hash === '#3d') history.replaceState(null, '', location.pathname + location.search);
  if (m3d && st.view) st.view.resize();
}
$('tab2d').onclick = () => setMode(false);
$('tab3d').onclick = () => setMode(true);

function ensureLoaded() {
  if (!st.loading) {
    setStatus('', ''); $('info3d').innerHTML = 'Manifold en three.js worden geladen…';
    st.loading = Promise.all([
      import('https://cdn.jsdelivr.net/npm/manifold-3d@3.5.4/manifold.js').then((M) => M.default()).then((w) => { w.setup(); st.wasm = w; }),
      import('three').then(async (THREE) => { const { OrbitControls } = await import('three/addons/controls/OrbitControls.js'); st.THREE = THREE; st.view = makeView(THREE, OrbitControls); }),
    ]).catch((e) => { console.error(e); setStatus('err', 'De 3D-onderdelen konden niet geladen worden. Herlaad de pagina.'); throw e; });
  }
  return st.loading;
}

function readParams() {
  const n = (id, d, a, b) => { const v = parseFloat(String($(id).value).replace(',', '.')); return clamp(Number.isFinite(v) ? v : d, a, b); };
  return {
    kind: $('kind3d').value, L: n('L', 75, 10, 260), W: n('W', 55, 10, 260), H: n('H', 40, 5, 260), name: $('name').value,
    wall: n('p_wall', 1.6, 0.8, 5), floor: n('p_floor', 1.2, 0.6, 5), radius: $('p_round').checked ? n('p_radius', 3, 0, 20) : 0,
    lidType: $('p_lidType').value, clr: n('p_clr', 0.25, 0, 1), lipH: n('p_lipH', 6, 2, 30), lidT: n('p_lidT', 1.2, 0.8, 5),
    panelT: n('p_panelT', 1.0, 0.6, 2.5), hingeT: n('p_hingeT', 0.35, 0.2, 1), hingeW: n('p_hingeW', 1.4, 0.6, 4), groove: $('p_groove').value,
    nameStyle: $('p_nameStyle').value, colors: [$('p_c1').value.toUpperCase(), $('p_c2').value.toUpperCase()],
  };
}

function schedule() { clearTimeout(st.timer); st.timer = setTimeout(rebuild, 120); }
function rebuild() {
  if (!document.body.classList.contains('m3d') || !st.wasm || !st.view) return;
  const p = readParams();
  document.body.classList.toggle('flat', p.kind === 'flat');
  const font = window.__box2d && window.__box2d.getFont();
  let r;
  try {
    if (p.kind === 'flat') {
      const b2 = window.__box2d;
      const lay = b2.tuckBox({ style: 'tuck-rev', L: p.L, W: p.W, H: p.H, t: p.panelT, g: 12 });
      const cls = b2.classify(lay.pieces);
      if (cls.problems.length) throw new Error('uitslag klopt niet: ' + cls.problems[0]);
      r = buildFlatNet(st.wasm, font, p, { pieces: lay.pieces, score: cls.score, namePanel: lay.namePanel, expected: lay.expected });
    } else r = buildTrayLid(st.wasm, font, p);
  } catch (e) { console.error(e); setStatus('err', 'Er ging iets mis bij het 3D-model: ' + e.message); return; }
  st.result = r; st.params = p; st.builds++;
  st.view.show(r, p.colors);
  report(r, p, font);
  $('dlStl').disabled = $('dl3mf').disabled = false;
}

function report(r, p, font) {
  const i = r.info, msgs = [];
  let html = '';
  const sz = (b) => `${fmt(b.size[0])} × ${fmt(b.size[1])} × ${fmt(b.size[2])} mm`;
  if (r.kind === 'tray') {
    html += `<b>Bakje:</b> ${sz(i.tray)} (binnen ${fmt(p.L)} × ${fmt(p.W)} × ${fmt(p.H)} mm).<br>`;
    html += `<b>Deksel:</b> ${sz(i.lid)} · ${i.lidType === 'slip' ? 'opzetdeksel' : 'insteekdeksel'} · speling ${f2(i.clr)} mm per kant.<br>`;
    const okFit = i.overlap < 1e-3 && Math.abs(i.gap - i.clr) < 0.02;
    msgs.push([okFit ? 'ok' : 'warn', okFit ? `Deksel past: geen overlap met het bakje, kleinste spleet ${f2(i.gap)} mm.` : `Controleer de pasvorm: overlap ${fmt(i.overlap)} mm³, spleet ${f2(i.gap)} mm.`]);
    if (p.clr < 0.15) msgs.push(['warn', 'Met minder dan 0,15 mm speling zit het deksel waarschijnlijk te strak.']);
    if (i.emboss) msgs.push(['warn', 'Naam in reliëf: het deksel ligt met de bovenkant omhoog, zet in Orca support aan voor de rand eronder. Ingelegd print zonder support.']);
    if (!i.bed.fit) msgs.push(['err', `Past niet op het bed van de U1 (270 × 270 × 270 mm): samen ${fmt(i.bed.ext[0])} × ${fmt(i.bed.ext[1])} mm, hoogte ${fmt(i.bed.zmax)} mm. Maak het doosje kleiner of print de onderdelen apart.`]);
    else msgs.push(['ok', `Past op het bed van de U1: samen ${fmt(i.bed.ext[0])} × ${fmt(i.bed.ext[1])} mm, hoogte ${fmt(i.bed.zmax)} mm.`]);
  } else {
    html += `<b>Vouwdoos plat:</b> ${sz(i.net)}${i.rotated ? ' (een kwartslag gedraaid om te passen)' : ''} · ${i.hinges} scharnieren.<br>`;
    html += `<b>Plaat:</b> ${fmt(i.panelT)} mm · <b>scharnier:</b> ${f2(i.hingeT)} mm dik, groef ${fmt(i.hingeW)} mm breed.<br>`;
    if (!i.foldOk) msgs.push(['warn', `De groef is smal: voor een haakse vouw is minstens ${f2(i.minHingeW)} mm nodig (2 × (plaat − scharnier)). Anders drukken de panelen tegen elkaar.`]);
    if (p.hingeT < 0.3) msgs.push(['warn', 'Een scharnier dunner dan 0,3 mm (anderhalve laag) kan scheuren of slecht printen.']);
    if (i.fit) msgs.push(['ok', `Past op het bed van de U1 (270 × 270 mm): ${fmt(i.net.size[0])} × ${fmt(i.net.size[1])} mm.`]);
    else msgs.push(['err', `Past niet op het bed van de U1 (270 × 270 mm): de uitslag is ${fmt(i.net.size[0])} × ${fmt(i.net.size[1])} mm. Maak het doosje kleiner.`]);
  }
  if (i.textSize) html += `<b>Naam:</b> ${fmt(i.textSize[0])} × ${fmt(i.textSize[1])} mm, ${p.nameStyle === 'inlay' ? 'ingelegd (vlak, 0,6 mm diep)' : 'in reliëf (0,8 mm)'}.`;
  if (p.name.trim() && !font) msgs.push(['warn', 'Het lettertype is nog niet geladen; de naam komt er zo bij.']);
  const okStatus = i.status.every((s) => s === 'NoError' || s === 'n.v.t.');
  msgs.push([okStatus ? 'ok' : 'err', okStatus ? 'Model is dicht (manifold): klaar om te slicen.' : 'Model is niet dicht: ' + i.status.join(', ')]);
  $('info3d').innerHTML = html;
  $('checks3d').innerHTML = msgs.map(([k, t]) => `<div class="msg ${k}">${t}</div>`).join('');
  st.last = { kind: r.kind, info: JSON.parse(JSON.stringify(i)), params: p, msgs };
}

function setStatus(kind, text) { const s = $('status3d'); s.className = 'msg ' + kind; s.textContent = text; s.style.display = text ? '' : 'none'; }
function fileBase() {
  const p = st.params; const nm = p.name.trim() ? '-' + p.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : '';
  return `${p.kind === 'flat' ? 'vouwdoos-print' : 'bakje-deksel-print'}-${p.L}x${p.W}x${p.H}mm${nm}`;
}
function download(bytes, name, type) {
  const url = URL.createObjectURL(new Blob([bytes], { type }));
  const a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
st.stl = () => toSTL(st.result.stl, fileBase());
st.threemf = () => to3MF(st.result, st.params.colors, fileBase());
$('dlStl').onclick = () => { if (!st.result) return; download(st.stl(), fileBase() + '.stl', 'model/stl'); setStatus('ok', 'STL gedownload (één kleur, alle onderdelen in één bestand).'); };
$('dl3mf').onclick = () => { if (!st.result) return; download(st.threemf(), fileBase() + '.3mf', 'model/3mf'); setStatus('ok', '3MF gedownload. Open hem in Snapmaker Orca en geef per onderdeel een filament.'); };

// ---------- three.js-voorbeeld ----------
function makeView(THREE, OrbitControls) {
  const box = $('view3d'); const ov = box.querySelector('.ov');
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  box.prepend(renderer.domElement);
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0xeef0f8);
  const cam = new THREE.PerspectiveCamera(35, 1, 1, 5000);
  const controls = new OrbitControls(cam, renderer.domElement); controls.enableDamping = true;
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8890a8, 1.6));
  const sun = new THREE.DirectionalLight(0xffffff, 1.6); sun.position.set(150, 400, 250); scene.add(sun);
  const world = new THREE.Group(); world.rotation.x = -Math.PI / 2; scene.add(world); // z omhoog (printer) -> y omhoog (three)
  const bed = new THREE.Mesh(new THREE.PlaneGeometry(BED, BED), new THREE.MeshStandardMaterial({ color: 0xc9cede, roughness: 1 }));
  bed.position.set(BED / 2, BED / 2, -0.05); world.add(bed);
  const grid = new THREE.GridHelper(BED, 27, 0x9aa3c7, 0xb3bad3); grid.rotation.x = Math.PI / 2; grid.position.set(BED / 2, BED / 2, 0); world.add(grid);
  let group = null, framed = '';
  const resize = () => { const w = box.clientWidth || 600, h = box.clientHeight || 400; renderer.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); };
  new ResizeObserver(resize).observe(box); resize();
  const show = (r, colors) => {
    if (group) { world.remove(group); group.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); }); }
    group = new THREE.Group();
    for (const pt of r.parts) {
      const g = new THREE.BufferGeometry(); const k = pt.mesh.numProp;
      const pos = k === 3 ? pt.mesh.pos : Float32Array.from({ length: pt.mesh.pos.length / k * 3 }, (_, i) => pt.mesh.pos[Math.floor(i / 3) * k + (i % 3)]);
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setIndex(new THREE.BufferAttribute(pt.mesh.tri, 1));
      const ng = g.toNonIndexed(); ng.computeVertexNormals(); g.dispose();
      const hidden = pt.role === 'name' && r.parts.length && !r.info.emboss; // ingelegde naam zit aan de onderkant: doorschijnend tonen
      const m = new THREE.Mesh(ng, new THREE.MeshStandardMaterial({ color: pt.role === 'name' ? colors[1] : colors[0], roughness: 0.65, metalness: 0.02,
        polygonOffset: pt.role !== 'name', polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: hidden, opacity: hidden ? 0.8 : 1, depthTest: !hidden }));
      if (hidden) m.renderOrder = 10;
      group.add(m);
    }
    world.add(group);
    ov.textContent = r.info.textSize && !r.info.emboss ? 'De ingelegde naam zit aan de onderkant (op het bed); hier zie je hem doorschijnend en gespiegeld. Slepen = draaien · scrollen = zoomen' : 'Slepen = draaien · scrollen = zoomen · grijs vlak = printbed 270 × 270 mm';
    const key = r.kind + ':' + JSON.stringify(r.kind === 'tray' ? [r.info.tray.size, r.info.lid.size] : r.info.net.size);
    if (key !== framed) { // camera alleen opnieuw richten als de maat verandert
      framed = key;
      const bb = new THREE.Box3().setFromObject(group); const c = bb.getCenter(new THREE.Vector3()); const s = bb.getSize(new THREE.Vector3()).length();
      controls.target.copy(c); const d = new THREE.Vector3(0.12, 0.8, 0.95).normalize().multiplyScalar(s * 1.45); cam.position.copy(c).add(d); cam.near = s / 100; cam.far = s * 20; cam.updateProjectionMatrix();
    }
  };
  const loop = () => { controls.update(); renderer.render(scene, cam); requestAnimationFrame(loop); }; loop();
  return { show, resize, renderer };
}

$('form').addEventListener('input', () => { if (document.body.classList.contains('m3d')) schedule(); });
$('form').addEventListener('change', () => { if (document.body.classList.contains('m3d')) schedule(); });
window.addEventListener('box-font', () => { if (st.wasm) schedule(); });
if (location.hash === '#3d') setMode(true);
