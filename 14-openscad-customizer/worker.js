// Web Worker: draait OpenSCAD (WebAssembly, Manifold-backend) los van de pagina.
// Elke opdracht krijgt een verse OpenSCAD-instantie; de wasm wordt maar één keer gecompileerd.
import OpenSCAD from './openscad/openscad.js';

const BASE = new URL('./', import.meta.url);
const FONTS = ['fonts.conf', 'LiberationSans-Regular.ttf', 'LiberationSans-Bold.ttf', 'LiberationSans-Italic.ttf', 'LiberationSans-BoldItalic.ttf',
  'LiberationSerif-Regular.ttf', 'LiberationSerif-Bold.ttf', 'LiberationMono-Regular.ttf', 'LiberationMono-Bold.ttf'];
const WASM_CDN = 'https://cdn.jsdelivr.net/npm/openscad-playground@2.4.0/dist/wasm/openscad.wasm';
const LIBS = { MCAD: 'libraries/MCAD.zip', BOSL2: 'libraries/BOSL2.zip' };

let wasmModule = null, fonts = null; const libCache = {};

async function ensureBase() {
  if (!wasmModule) {
    post({ status: 'OpenSCAD laden (±3 MB, alleen de eerste keer)…' });
    // openscad.wasm staat gzip-ingepakt naast deze pagina (2,9 MB i.p.v. 9,6 MB).
    try {
      const res = await fetch(new URL('openscad/openscad.wasm.gz', BASE));
      if (!res.ok) throw new Error('HTTP ' + res.status);
      let bytes = new Uint8Array(await res.arrayBuffer());
      if (bytes[0] === 0x1f && bytes[1] === 0x8b) { // nog ingepakt: zelf uitpakken
        bytes = new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer());
      }
      wasmModule = await WebAssembly.compile(bytes);
    } catch (err) {
      // reserve: dezelfde build via jsDelivr
      post({ status: 'OpenSCAD laden via reserve-server…' });
      wasmModule = await WebAssembly.compileStreaming(fetch(WASM_CDN));
    }
  }
  if (!fonts) {
    fonts = await Promise.all(FONTS.map(async (f) => [f, new Uint8Array(await (await fetch(new URL('fonts/' + f, BASE))).arrayBuffer())]));
  }
}

async function loadLib(name) {
  if (libCache[name]) return libCache[name];
  post({ status: `Bibliotheek ${name} laden…` });
  const { unzipSync } = await import('https://cdn.jsdelivr.net/npm/fflate@0.8.2/esm/browser.js');
  const buf = new Uint8Array(await (await fetch(new URL(LIBS[name], BASE))).arrayBuffer());
  libCache[name] = unzipSync(buf);
  return libCache[name];
}

function post(m) { self.postMessage(m); }

async function instance(log) {
  return OpenSCAD({
    noInitialRun: true,
    instantiateWasm: (imports, ok) => { WebAssembly.instantiate(wasmModule, imports).then((inst) => ok(inst, wasmModule)); return {}; },
    print: (s) => log.push(s),
    printErr: (s) => log.push(s),
    preRun: [(m) => { m.ENV.OPENSCADPATH = '/libraries'; }],
  });
}

function mkdirp(FS, dir) { const parts = dir.split('/').filter(Boolean); let p = ''; for (const s of parts) { p += '/' + s; try { FS.mkdir(p); } catch { } } }

self.onmessage = async (e) => {
  const { id, code, defines = [], format = 'binstl', extraFiles = {} } = e.data;
  const log = []; const t0 = performance.now();
  try {
    await ensureBase();
    const wanted = Object.keys(LIBS).filter((n) => new RegExp('(use|include)\\s*<\\s*' + n + '/', 'i').test(code));
    const libs = {}; for (const n of wanted) libs[n] = await loadLib(n);
    post({ id, status: format === 'param' ? 'Parameters lezen…' : 'Renderen…' });
    const m = await instance(log);
    const FS = m.FS;
    FS.mkdir('/fonts'); for (const [f, b] of fonts) FS.writeFile('/fonts/' + f, b);
    FS.mkdir('/libraries');
    for (const [n, files] of Object.entries(libs)) {
      for (const [p, b] of Object.entries(files)) {
        if (p.endsWith('/')) continue; const full = `/libraries/${n}/${p}`;
        mkdirp(FS, full.slice(0, full.lastIndexOf('/'))); FS.writeFile(full, b);
      }
    }
    FS.mkdir('/work');
    for (const [p, b] of Object.entries(extraFiles)) { const full = '/work/' + p; mkdirp(FS, full.slice(0, full.lastIndexOf('/'))); FS.writeFile(full, b); }
    FS.writeFile('/work/model.scad', code);
    const ext = format === 'param' ? 'json' : format === 'binstl' ? 'stl' : format;
    const out = '/work/out.' + ext;
    const args = ['/work/model.scad', '-o', out, '--export-format=' + format];
    if (format !== 'param') args.push('--backend=manifold');
    for (const d of defines) args.push('-D', d);
    let rc;
    try { rc = m.callMain(args); } catch (err) { rc = -1; log.push('ERROR: ' + (err && err.message || err)); }
    let data = null; try { data = FS.readFile(out); } catch { }
    if (data && data.length === 0) data = null;
    const ms = Math.round(performance.now() - t0);
    post({ id, done: true, rc, data, log, ms, libs: wanted }, data ? [data.buffer] : []);
  } catch (err) {
    post({ id, done: true, rc: -1, data: null, log: log.concat(['ERROR: ' + (err && err.message || err)]), ms: Math.round(performance.now() - t0) });
  }
};
