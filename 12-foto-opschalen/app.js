// Real-ESRGAN general x4v3 in-browser upscaler (onnxruntime-web).
const ORT_URL = 'https://cdn.jsdelivr.net/npm/onnxruntime-web@1.22.0/dist/ort.webgpu.bundle.min.mjs';
const MODEL_URL = './models/realesr-general-x4v3.onnx';
const MODEL_SCALE = 4;
const MAX_SIDE = 512;       // input long side before tiling
const TILE = 128;           // tile size (input pixels)
const PAD = 8;              // overlap padding (input pixels)
const SAMPLE_URL = './voorbeeld-beeld.jpg';

const $ = (id) => document.getElementById(id);
const statusEl = $('status'), progEl = $('progress'), progBar = progEl.firstElementChild;
const photoEl = $('photo'), photoEmpty = $('photoEmpty');
const outCanvas = $('out'), outEmpty = $('outEmpty');
const deviceEl = $('device'), origInfo = $('origInfo'), outInfo = $('outInfo'), sizeInfo = $('sizeInfo');

function setStatus(msg, err = false) {
  statusEl.textContent = msg;
  statusEl.classList.toggle('err', !!err);
}
function setProgress(p) {
  if (p == null) { progEl.style.display = 'none'; return; }
  progEl.style.display = 'block';
  progBar.style.width = Math.max(0, Math.min(100, Math.round(p * 100))) + '%';
}

let scaleChoice = 4;
let sourceBitmap = null;   // ImageBitmap or HTMLImageElement
let sourceName = 'foto';
let resultBlob = null;
let ort = null, session = null, epLabel = '';
let busy = false;

$('segScale').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-v]');
  if (!btn) return;
  for (const b of $('segScale').querySelectorAll('button')) b.classList.toggle('on', b === btn);
  scaleChoice = Number(btn.dataset.v);
  if (sourceBitmap) maybeAutoRun();
});

$('pick').onclick = () => $('file').click();
$('file').onchange = () => {
  const f = $('file').files && $('file').files[0];
  if (f) loadFile(f);
};
$('sample').onclick = () => loadUrl(SAMPLE_URL, 'voorbeeld-beeld.jpg');

const drop = $('drop');
['dragenter', 'dragover'].forEach((ev) => drop.addEventListener(ev, (e) => {
  e.preventDefault(); drop.classList.add('drag');
}));
['dragleave', 'drop'].forEach((ev) => drop.addEventListener(ev, (e) => {
  e.preventDefault(); drop.classList.remove('drag');
}));
drop.addEventListener('drop', (e) => {
  const f = e.dataTransfer.files && e.dataTransfer.files[0];
  if (f) loadFile(f);
});

$('run').onclick = () => runUpscale();
$('download').onclick = () => {
  if (!resultBlob) return;
  const a = document.createElement('a');
  a.href = URL.createObjectURL(resultBlob);
  const base = sourceName.replace(/\.[^.]+$/, '') || 'foto';
  a.download = `${base}-x${scaleChoice}.png`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
};

async function loadFile(file) {
  if (!file.type || !file.type.startsWith('image/')) {
    setStatus('Kies een afbeeldingsbestand (JPG, PNG, WebP…).', true);
    return;
  }
  setStatus('Foto laden…');
  const bmp = await createImageBitmap(file);
  await showSource(bmp, file.name || 'foto');
}

async function loadUrl(url, name) {
  setStatus('Foto laden…');
  const res = await fetch(url);
  if (!res.ok) throw new Error('Voorbeeld laden mislukt');
  const blob = await res.blob();
  const bmp = await createImageBitmap(blob);
  await showSource(bmp, name || 'foto');
}

async function showSource(bmp, name) {
  setProgress(null);
  resultBlob = null;
  $('download').disabled = true;
  outCanvas.hidden = true;
  outEmpty.hidden = false;
  outInfo.textContent = '';
  sizeInfo.textContent = '';
  if (sourceBitmap && sourceBitmap.close) try { sourceBitmap.close(); } catch {}
  sourceBitmap = bmp;
  sourceName = name || 'foto';
  const c = document.createElement('canvas');
  c.width = bmp.width; c.height = bmp.height;
  c.getContext('2d').drawImage(bmp, 0, 0);
  photoEl.src = c.toDataURL('image/jpeg', 0.92);
  photoEl.hidden = false;
  photoEmpty.hidden = true;
  origInfo.textContent = `(${bmp.width}×${bmp.height})`;
  $('run').disabled = false;
  setStatus('Foto geladen. Bezig met opschalen…');
  maybeAutoRun();
}

function maybeAutoRun() {
  // Auto-run after load so one-click sample works; skip if already busy.
  if (!busy && sourceBitmap) runUpscale();
}

async function ensureSession() {
  if (session) return session;
  setStatus('AI-model laden (±4,7 MB)…');
  setProgress(0.05);
  if (!ort) {
    const mod = await import(ORT_URL);
    ort = mod.default || mod;
    // Bundle build embeds WASM; keep threads modest for browser stability.
    try { ort.env.wasm.numThreads = Math.min(4, navigator.hardwareConcurrency || 2); } catch {}
  }
  const modelBuf = await fetchModel();
  setProgress(0.35);

  const tryCreate = async (eps) => {
    return ort.InferenceSession.create(modelBuf, {
      executionProviders: eps,
      graphOptimizationLevel: 'all',
    });
  };

  // Prefer WebGPU; fall back to WASM.
  let lastErr = null;
  if (navigator.gpu) {
    try {
      session = await tryCreate(['webgpu']);
      epLabel = 'WebGPU';
    } catch (e) {
      lastErr = e;
      session = null;
    }
  }
  if (!session) {
    try {
      session = await tryCreate(['wasm']);
      epLabel = 'WASM';
    } catch (e) {
      throw lastErr || e;
    }
  }
  deviceEl.textContent = `Model: realesr-general-x4v3 · ${epLabel}`;
  setProgress(0.45);
  return session;
}

async function fetchModel() {
  const res = await fetch(MODEL_URL);
  if (!res.ok) throw new Error(`Model download mislukt (${res.status})`);
  const total = Number(res.headers.get('content-length')) || 0;
  if (!res.body || !total || !res.body.getReader) {
    return new Uint8Array(await res.arrayBuffer());
  }
  const reader = res.body.getReader();
  const chunks = [];
  let received = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    received += value.length;
    setProgress(0.05 + 0.3 * (received / total));
    setStatus(`Model downloaden… ${Math.round(received / 1024)} KB`);
  }
  const out = new Uint8Array(received);
  let off = 0;
  for (const c of chunks) { out.set(c, off); off += c.length; }
  return out;
}

function fitWorkSize(w, h) {
  const long = Math.max(w, h);
  if (long <= MAX_SIDE) return { w, h, scale: 1 };
  const s = MAX_SIDE / long;
  return {
    w: Math.max(1, Math.round(w * s)),
    h: Math.max(1, Math.round(h * s)),
    scale: s,
  };
}

function imageToFloatCHW(imgData, w, h) {
  // RGB float32 NCHW in [0,1]
  const { data } = imgData;
  const out = new Float32Array(3 * w * h);
  const plane = w * h;
  for (let i = 0, p = 0; i < plane; i++, p += 4) {
    out[i] = data[p] / 255;
    out[plane + i] = data[p + 1] / 255;
    out[2 * plane + i] = data[p + 2] / 255;
  }
  return out;
}

function floatCHWToImageData(chw, w, h) {
  const plane = w * h;
  const data = new Uint8ClampedArray(plane * 4);
  for (let i = 0, p = 0; i < plane; i++, p += 4) {
    data[p] = Math.max(0, Math.min(255, Math.round(chw[i] * 255)));
    data[p + 1] = Math.max(0, Math.min(255, Math.round(chw[plane + i] * 255)));
    data[p + 2] = Math.max(0, Math.min(255, Math.round(chw[2 * plane + i] * 255)));
    data[p + 3] = 255;
  }
  return new ImageData(data, w, h);
}

function getInputName(sess) {
  return sess.inputNames[0];
}
function getOutputName(sess) {
  return sess.outputNames[0];
}

async function runTile(sess, chw, tw, th) {
  const tensor = new ort.Tensor('float32', chw, [1, 3, th, tw]);
  const feeds = { [getInputName(sess)]: tensor };
  const out = await sess.run(feeds);
  const t = out[getOutputName(sess)];
  return { data: t.data, w: t.dims[3], h: t.dims[2] };
}

async function upscaleCHW(sess, srcCHW, sw, sh, onTile) {
  // Reflect-pad so every tile has PAD margin where possible.
  const pad = PAD;
  const pw = sw + 2 * pad;
  const ph = sh + 2 * pad;
  const padded = new Float32Array(3 * pw * ph);
  const srcPlane = sw * sh;
  const dstPlane = pw * ph;

  const sample = (c, x, y) => {
    // reflect
    let xx = x, yy = y;
    if (xx < 0) xx = -xx;
    if (yy < 0) yy = -yy;
    if (xx >= sw) xx = 2 * sw - xx - 2;
    if (yy >= sh) yy = 2 * sh - yy - 2;
    xx = Math.max(0, Math.min(sw - 1, xx));
    yy = Math.max(0, Math.min(sh - 1, yy));
    return srcCHW[c * srcPlane + yy * sw + xx];
  };
  for (let c = 0; c < 3; c++) {
    for (let y = 0; y < ph; y++) {
      for (let x = 0; x < pw; x++) {
        padded[c * dstPlane + y * pw + x] = sample(c, x - pad, y - pad);
      }
    }
  }

  const outW = sw * MODEL_SCALE;
  const outH = sh * MODEL_SCALE;
  const out = new Float32Array(3 * outW * outH);
  const outPlane = outW * outH;
  const outPad = pad * MODEL_SCALE;

  const tilesX = Math.ceil(sw / TILE);
  const tilesY = Math.ceil(sh / TILE);
  const total = tilesX * tilesY;
  let done = 0;

  for (let ty = 0; ty < tilesY; ty++) {
    for (let tx = 0; tx < tilesX; tx++) {
      const x0 = tx * TILE;
      const y0 = ty * TILE;
      const tw = Math.min(TILE, sw - x0);
      const th = Math.min(TILE, sh - y0);

      // Extract tile with padding from padded buffer
      const tileX0 = x0; // in padded coords: +pad already in buffer origin
      const tileY0 = y0;
      const twp = tw + 2 * pad;
      const thp = th + 2 * pad;
      const tile = new Float32Array(3 * twp * thp);
      const tPlane = twp * thp;
      for (let c = 0; c < 3; c++) {
        for (let y = 0; y < thp; y++) {
          const srcOff = c * dstPlane + (tileY0 + y) * pw + tileX0;
          const dstOff = c * tPlane + y * twp;
          tile.set(padded.subarray(srcOff, srcOff + twp), dstOff);
        }
      }

      const { data: od, w: ow, h: oh } = await runTile(sess, tile, twp, thp);
      // Crop padding from output and paste
      const cropW = tw * MODEL_SCALE;
      const cropH = th * MODEL_SCALE;
      const ox = x0 * MODEL_SCALE;
      const oy = y0 * MODEL_SCALE;
      const oPlane = ow * oh;
      for (let c = 0; c < 3; c++) {
        for (let y = 0; y < cropH; y++) {
          const srcOff = c * oPlane + (y + outPad) * ow + outPad;
          const dstOff = c * outPlane + (oy + y) * outW + ox;
          out.set(od.subarray(srcOff, srcOff + cropW), dstOff);
        }
      }

      done++;
      if (onTile) onTile(done / total);
      // Yield so the UI can paint
      await new Promise((r) => setTimeout(r, 0));
    }
  }
  return { data: out, w: outW, h: outH };
}

async function runUpscale() {
  if (!sourceBitmap || busy) return;
  busy = true;
  $('run').disabled = true;
  $('download').disabled = true;
  resultBlob = null;
  try {
    const sess = await ensureSession();
    const nw = sourceBitmap.width;
    const nh = sourceBitmap.height;
    const fit = fitWorkSize(nw, nh);
    setStatus(`Opschalen (${fit.w}×${fit.h} → ×${MODEL_SCALE}, daarna ×${scaleChoice})…`);

    const work = document.createElement('canvas');
    work.width = fit.w; work.height = fit.h;
    const wctx = work.getContext('2d', { willReadFrequently: true });
    wctx.drawImage(sourceBitmap, 0, 0, fit.w, fit.h);
    const imgData = wctx.getImageData(0, 0, fit.w, fit.h);
    const chw = imageToFloatCHW(imgData, fit.w, fit.h);

    const { data, w, h } = await upscaleCHW(sess, chw, fit.w, fit.h, (p) => {
      setProgress(0.45 + 0.5 * p);
      setStatus(`Tegels verwerken… ${Math.round(p * 100)}% (${epLabel})`);
    });

    let finalW = w, finalH = h;
    let finalData = floatCHWToImageData(data, w, h);

    if (scaleChoice === 2) {
      // Soft-downscale 4× AI result to 2× of the work image.
      finalW = fit.w * 2;
      finalH = fit.h * 2;
      const tmp = document.createElement('canvas');
      tmp.width = w; tmp.height = h;
      tmp.getContext('2d').putImageData(finalData, 0, 0);
      const down = document.createElement('canvas');
      down.width = finalW; down.height = finalH;
      const dctx = down.getContext('2d');
      dctx.imageSmoothingEnabled = true;
      dctx.imageSmoothingQuality = 'high';
      dctx.drawImage(tmp, 0, 0, finalW, finalH);
      finalData = dctx.getImageData(0, 0, finalW, finalH);
    }

    outCanvas.width = finalW;
    outCanvas.height = finalH;
    outCanvas.getContext('2d').putImageData(finalData, 0, 0);
    outCanvas.hidden = false;
    outEmpty.hidden = true;
    outInfo.textContent = `(${finalW}×${finalH})`;

    resultBlob = await new Promise((resolve) => outCanvas.toBlob(resolve, 'image/png'));
    $('download').disabled = !resultBlob;
    const mb = resultBlob ? (resultBlob.size / (1024 * 1024)).toFixed(2) : '?';
    const note = fit.scale < 1
      ? ` · invoer eerst verkleind van ${nw}×${nh} naar ${fit.w}×${fit.h}`
      : '';
    sizeInfo.textContent = `PNG ±${mb} MB${note}`;
    setProgress(1);
    setStatus(`Klaar: ${finalW}×${finalH} (${scaleChoice}× via Real-ESRGAN, ${epLabel}).`);
  } catch (e) {
    console.error(e);
    setStatus(`Mislukt: ${e && e.message ? e.message : e}`, true);
    setProgress(null);
  } finally {
    busy = false;
    $('run').disabled = !sourceBitmap;
  }
}

setStatus('Klaar om te beginnen.');
