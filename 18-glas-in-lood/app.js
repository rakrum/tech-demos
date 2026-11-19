import { DEFAULTS, buildModel, colourSvg, leadSvg, outlineSvg, draw, pngSize, nlNum, slugFilename } from './glas.js';

const $ = (id) => document.getElementById(id);
const state = { img: null, name: '', srcW: 0, srcH: 0, raster: null, model: null, seed: 1, timer: 0 };
const MAXSIDE = 480; // interne verkleining voor snelheid
const MAXPX = 50e6;

function rasterize(img, maxSide) {
  const w0 = img.naturalWidth || img.width, h0 = img.naturalHeight || img.height;
  const k = Math.min(1, maxSide / Math.max(w0, h0));
  const w = Math.max(1, Math.round(w0 * k)), h = Math.max(1, Math.round(h0 * k));
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const ctx = c.getContext('2d', { willReadFrequently: true });
  ctx.imageSmoothingQuality = 'high'; ctx.drawImage(img, 0, 0, w, h);
  return ctx.getImageData(0, 0, w, h);
}

function opts() {
  return {
    cells: +$('cells').value, detail: +$('detail').value, lloyd: +$('lloyd').value,
    boost: +$('boost').value, palette: +$('palette').value, leadMm: +$('lead').value,
    frame: $('frame').checked, frameMm: +$('framemm').value, widthMm: +$('widthmm').value,
    engraveMm: +$('engrave').value, seed: state.seed,
  };
}

function hints() {
  $('cellsVal').textContent = $('cells').value; $('detailVal').textContent = $('detail').value;
  $('lloydVal').textContent = $('lloyd').value; $('boostVal').textContent = $('boost').value;
  const p = +$('palette').value; $('paletteVal').textContent = p < 2 ? 'alle kleuren (geen beperking)' : `${p} kleuren`;
  $('leadVal').textContent = `${nlNum($('lead').value, 1)} mm`;
  $('framemmVal').textContent = `${nlNum($('framemm').value, 1)} mm`;
  $('frameLabel').classList.toggle('off', !$('frame').checked); $('framemm').disabled = !$('frame').checked;
  $('widthVal').textContent = `${nlNum($('widthmm').value, 0)} mm`;
  $('engraveVal').textContent = `${nlNum($('engrave').value, 2)} mm — ${+$('engrave').value <= 0.3 ? 'dun, om te graveren of te snijden' : 'dikker dan nodig voor graveren'}`;
}

function pngInfo() {
  if (!state.model) return;
  const [w, h] = pngSize(state.model, +$('dpi').value);
  $('pngInfo').textContent = w * h > MAXPX ? `PNG zou ${w} × ${h} px zijn: te groot, kies een lagere dpi.` : `PNG: ${w} × ${h} px.`;
  $('dlpng').disabled = w * h > MAXPX;
}

function render() {
  if (!state.raster) return;
  const t0 = performance.now();
  const m = buildModel(state.raster, opts());
  state.model = m;
  const c = $('preview');
  const ppm = Math.min(1000 / m.Wmm, 4);
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  c.width = Math.round(m.Wmm * ppm * dpr); c.height = Math.round(m.Hmm * ppm * dpr);
  c.style.width = Math.round(m.Wmm * ppm) + 'px';
  draw(c.getContext('2d'), m, ppm * dpr);
  c.hidden = false; $('previewEmpty').hidden = true;
  $('info').textContent = `Afmeting: ${nlNum(m.Wmm, 1)} × ${nlNum(m.Hmm, 1)} mm · ${m.nCells} vlakjes · ${m.edges.length} loodlijnen · ${m.colors} kleuren · ${Math.round(performance.now() - t0)} ms`;
  for (const id of ['dlsvg', 'dllead', 'dlout']) $(id).disabled = false;
  pngInfo();
  window.__td18.model = m;
}

function schedule() { hints(); clearTimeout(state.timer); state.timer = setTimeout(render, 120); }

function setStatus(t, err) { $('status').textContent = t; $('status').classList.toggle('err', !!err); }

function loadImage(src, name) {
  const img = new Image();
  img.onload = () => {
    state.img = img; state.name = name; state.srcW = img.naturalWidth; state.srcH = img.naturalHeight;
    state.raster = rasterize(img, MAXSIDE);
    $('photoMeta').textContent = `${name} · ${state.srcW} × ${state.srcH} px (intern verkleind voor snelheid)`;
    setStatus('Foto geladen.'); render();
  };
  img.onerror = () => setStatus('Deze foto kon niet worden gelezen. Probeer een JPG of PNG.', true);
  img.src = src;
}

function loadFile(f) {
  if (!f) return;
  if (!/^image\//.test(f.type)) { setStatus('Dit is geen afbeelding. Kies een JPG of PNG.', true); return; }
  const url = URL.createObjectURL(f);
  loadImage(url, f.name);
}

function save(blob, name) {
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
const base = () => slugFilename(state.name);
const svgBlob = (s) => new Blob([s], { type: 'image/svg+xml' });

window.__td18 = { model: null, build: buildModel, colourSvg, leadSvg, outlineSvg };

$('pick').onclick = () => $('file').click();
$('file').onchange = (e) => loadFile(e.target.files[0]);
$('sample').onclick = () => loadImage('voorbeeld-meisje.jpg', 'voorbeeld-meisje.jpg');
const drop = $('drop');
['dragenter', 'dragover'].forEach((ev) => document.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.add('drag'); }));
['dragleave', 'drop'].forEach((ev) => document.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.remove('drag'); }));
document.addEventListener('drop', (e) => loadFile(e.dataTransfer.files[0]));
['cells', 'detail', 'lloyd', 'boost', 'palette', 'lead', 'frame', 'framemm', 'widthmm'].forEach((id) => $(id).addEventListener('input', schedule));
$('engrave').addEventListener('input', hints);
$('dpi').onchange = pngInfo;
$('reshuffle').onclick = () => { state.seed = (state.seed * 7 + 13) % 100000; schedule(); };
$('dlsvg').onclick = () => { hints(); save(svgBlob(colourSvg(state.model, 'Glas in lood')), `${base()}-glas-in-lood-kleur.svg`); };
$('dllead').onclick = () => { state.model.o.engraveMm = +$('engrave').value; save(svgBlob(leadSvg(state.model)), `${base()}-loodlijnen.svg`); };
$('dlout').onclick = () => save(svgBlob(outlineSvg(state.model)), `${base()}-buitenrand.svg`);
$('dlpng').onclick = () => {
  const m = state.model, [w, h] = pngSize(m, +$('dpi').value);
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), m, w / m.Wmm);
  c.toBlob((b) => save(b, `${base()}-glas-in-lood-${$('dpi').value}dpi.png`), 'image/png');
};
hints();
