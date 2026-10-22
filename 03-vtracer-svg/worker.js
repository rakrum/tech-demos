// Draait VTracer (WebAssembly) in de achtergrond, zodat de pagina niet vastloopt.
import { init, vectorize_rgba } from './vtracer.js';

const ready = init().then(() => postMessage({ type: 'ready' }),
  (e) => postMessage({ type: 'error', id: -1, message: String(e && e.message || e) }));

self.onmessage = async (ev) => {
  const { id, rgba, width, height, options } = ev.data;
  try {
    await ready;
    const t0 = performance.now();
    const svg = vectorize_rgba(new Uint8Array(rgba), width, height, options);
    postMessage({ type: 'result', id, svg, ms: Math.round(performance.now() - t0) });
  } catch (e) {
    postMessage({ type: 'error', id, message: String(e && e.message || e) });
  }
};
