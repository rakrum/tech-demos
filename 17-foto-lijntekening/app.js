import {
  DEFAULTS, processImage, strokesToSvg, drawPreview, nlNum, slugFilename,
} from './linedraw.js';

const $ = (id) => document.getElementById(id);

const state = {
  img: null,
  name: '',
  srcW: 0,
  srcH: 0,
  result: null,
  timer: 0,
  gen: 0,
};

function optsFromForm() {
  return {
    maxSide: Number($('detail').value) || DEFAULTS.maxSide,
    edgeThreshold: Number($('edge').value),
    hatch: $('hatch').checked,
    hatchDensity: Number($('density').value),
    minLengthMm: Number($('minlen').value),
    simplify: Number($('simplify').value),
    widthMm: Number($('widthmm').value) || DEFAULTS.widthMm,
    heightMm: (state.srcW && state.srcH)
      ? (Number($('widthmm').value) || DEFAULTS.widthMm) * (state.srcH / state.srcW)
      : undefined,
    title: (state.name || 'Lijntekening').replace(/\.[a-z0-9]+$/i, '').slice(0, 80) || 'Lijntekening',
  };
}

function updateHints() {
  const maxSide = Number($('detail').value);
  $('detailVal').textContent = `${maxSide} px (lange kant)`;
  $('edgeVal').textContent = String($('edge').value);
  $('densityVal').textContent = String($('density').value);
  $('minlenVal').textContent = `${nlNum($('minlen').value, 1)} mm`;
  $('simplifyVal').textContent = String($('simplify').value);
  $('widthVal').textContent = `${nlNum($('widthmm').value, 0)} mm`;
  $('density').disabled = !$('hatch').checked;
  $('densityLabel').classList.toggle('off', !$('hatch').checked);
}

function rasterize(img, maxSide) {
  const w0 = img.naturalWidth || img.width;
  const h0 = img.naturalHeight || img.height;
  const side = Math.max(w0, h0);
  const scale = side > maxSide ? maxSide / side : 1;
  const w = Math.max(1, Math.round(w0 * scale));
  const h = Math.max(1, Math.round(h0 * scale));
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, w, h);
  return ctx.getImageData(0, 0, w, h);
}

function showPreview(result) {
  const canvas = $('preview');
  const empty = $('previewEmpty');
  const wrap = canvas.parentElement;
  const w = Math.max(320, wrap.clientWidth || 480);
  const h = Math.max(240, Math.min(520, Math.round(w * 0.95)));
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  if (!result || !result.strokes.length) {
    ctx.clearRect(0, 0, w, h);
    canvas.hidden = true;
    empty.hidden = false;
    empty.textContent = state.img
      ? 'Geen lijnen gevonden. Probeer de randdrempel lager te zetten of de arcering aan te zetten.'
      : 'Kies een foto of het voorbeeld om te beginnen.';
    return;
  }
  empty.hidden = true;
  canvas.hidden = false;
  drawPreview(ctx, result.strokes, result.widthMm, result.heightMm, w, h);
}

function setInfo(result, opts) {
  const info = $('info');
  const dl = $('dlsvg');
  if (!result || !result.strokes.length) {
    info.textContent = 'Afmeting: —';
    dl.disabled = true;
    return;
  }
  const kb = Math.round((result.svg || '').length / 1024);
  const sec = result.elapsedMs >= 1000
    ? `${nlNum(result.elapsedMs / 1000, 1)} s`
    : `${Math.round(result.elapsedMs)} ms`;
  info.textContent =
    `Afmeting: ${nlNum(result.widthMm, 1)} × ${nlNum(result.heightMm, 1)} mm · `
    + `${result.strokeCount} lijnen · `
    + `totale lengte ${result.totalLengthMm >= 1000 ? nlNum(result.totalLengthMm / 1000, 1) + ' m' : nlNum(result.totalLengthMm, 0) + ' mm'} · `
    + `SVG ± ${kb} kB · ${sec}`;
  dl.disabled = false;
}

function expose(result, opts) {
  window.__td17 = {
    result,
    opts,
    loaded: state.img ? { name: state.name, width: state.srcW, height: state.srcH } : null,
    processImage,
    strokesToSvg,
    slugFilename,
  };
}

function schedule() {
  updateHints();
  if (state.timer) clearTimeout(state.timer);
  state.timer = setTimeout(run, 180);
}

async function run() {
  state.timer = 0;
  updateHints();
  const opts = optsFromForm();
  if (!state.img) {
    state.result = null;
    showPreview(null);
    setInfo(null, opts);
    $('status').textContent = 'Klaar om te beginnen.';
    expose(null, opts);
    return;
  }
  const gen = ++state.gen;
  $('status').textContent = 'Bezig met omzetten…';
  $('status').classList.remove('err');
  // laat de status eerst zien
  await new Promise((r) => setTimeout(r, 20));
  if (gen !== state.gen) return;
  try {
    const imageData = rasterize(state.img, opts.maxSide);
    const result = processImage(imageData, opts);
    if (gen !== state.gen) return;
    state.result = result;
    showPreview(result);
    setInfo(result, opts);
    $('status').textContent = result.strokeCount
      ? `Klaar: ${result.strokeCount} lijnen.`
      : 'Geen lijnen gevonden met deze instellingen.';
    expose(result, opts);
  } catch (err) {
    console.error(err);
    if (gen !== state.gen) return;
    $('status').classList.add('err');
    $('status').textContent = 'Het omzetten is mislukt. Probeer een andere foto of een lagere detailstand.';
    state.result = null;
    showPreview(null);
    setInfo(null, opts);
    expose(null, opts);
  }
}

function showOriginal(img, name, w, h) {
  const el = $('photo');
  const empty = $('photoEmpty');
  el.src = img.src || el.src;
  if (img instanceof HTMLImageElement && img.src) {
    el.src = img.src;
  }
  el.hidden = false;
  empty.hidden = true;
  $('photoMeta').textContent = `${name} · ${w} × ${h} px`;
}

async function bitmapToImage(bitmap, name) {
  const canvas = document.createElement('canvas');
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  canvas.getContext('2d').drawImage(bitmap, 0, 0);
  const url = canvas.toDataURL('image/png');
  bitmap.close && bitmap.close();
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = rej;
    img.src = url;
  });
  state.img = img;
  state.name = name;
  state.srcW = img.naturalWidth;
  state.srcH = img.naturalHeight;
  showOriginal(img, name, state.srcW, state.srcH);
  await run();
}

async function loadBlob(blob, name) {
  if (!blob || !/^image\/(jpeg|jpg|png|webp)$/i.test(blob.type) && !/\.(jpe?g|png|webp)$/i.test(name || '')) {
    // try anyway if the browser can read it; otherwise show an error
  }
  try {
    let bitmap;
    if (typeof createImageBitmap === 'function') {
      try {
        bitmap = await createImageBitmap(blob, { imageOrientation: 'from-image' });
      } catch {
        bitmap = await createImageBitmap(blob);
      }
      await bitmapToImage(bitmap, name || 'foto');
      return;
    }
    const url = URL.createObjectURL(blob);
    const img = new Image();
    await new Promise((res, rej) => {
      img.onload = res;
      img.onerror = rej;
      img.src = url;
    });
    state.img = img;
    state.name = name || 'foto';
    state.srcW = img.naturalWidth;
    state.srcH = img.naturalHeight;
    showOriginal(img, state.name, state.srcW, state.srcH);
    await run();
  } catch (err) {
    console.error(err);
    $('status').classList.add('err');
    $('status').textContent = 'Dit bestand kon niet als foto worden gelezen. Kies een JPG of PNG.';
  }
}

async function loadSample() {
  $('status').textContent = 'Voorbeeld laden…';
  $('status').classList.remove('err');
  const res = await fetch('voorbeeld-meisje.jpg');
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const blob = await res.blob();
  await loadBlob(blob, 'voorbeeld-meisje.jpg');
}

function downloadSvg() {
  if (!state.result?.svg) return;
  const name = slugFilename(state.name, 'foto');
  const blob = new Blob([state.result.svg], { type: 'image/svg+xml;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}

function bindDrop(el) {
  el.addEventListener('dragover', (e) => {
    e.preventDefault();
    el.classList.add('drag');
  });
  el.addEventListener('dragleave', () => el.classList.remove('drag'));
  el.addEventListener('drop', (e) => {
    e.preventDefault();
    el.classList.remove('drag');
    const f = e.dataTransfer?.files?.[0];
    if (f) loadBlob(f, f.name);
  });
}

function init() {
  updateHints();
  showPreview(null);
  setInfo(null, optsFromForm());
  expose(null, optsFromForm());

  $('pick').addEventListener('click', () => $('file').click());
  $('file').addEventListener('change', () => {
    const f = $('file').files?.[0];
    if (f) loadBlob(f, f.name);
    $('file').value = '';
  });
  $('sample').addEventListener('click', () => {
    loadSample().catch((err) => {
      console.error(err);
      $('status').classList.add('err');
      $('status').textContent = 'Het voorbeeld kon niet worden geladen.';
    });
  });
  bindDrop($('drop'));
  bindDrop(document.body);

  for (const id of ['detail', 'edge', 'density', 'minlen', 'simplify', 'widthmm']) {
    $(id).addEventListener('input', schedule);
    $(id).addEventListener('change', schedule);
  }
  $('hatch').addEventListener('change', schedule);
  $('dlsvg').addEventListener('click', downloadSvg);
  window.addEventListener('resize', () => {
    if (state.result) showPreview(state.result);
  });
}

init();
