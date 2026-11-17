import {
  FONT_OPTIONS, renderSvg, slugFilename, nlNum, fmt,
} from './hershey.js';

const $ = (id) => document.getElementById(id);

const state = {
  fonts: null,
  last: null,
};

function optsFromForm() {
  return {
    letterHeightMm: Number($('height').value) || 12,
    letterSpacingMm: Number($('tracking').value) || 0,
    lineSpacing: Number($('leading').value) || 1.6,
    align: document.querySelector('#align button.on')?.dataset.a || 'center',
    box: $('box').checked,
    title: ($('text').value || '').split(/\r\n|\n|\r/)[0].slice(0, 80) || 'Enkellijns-tekst',
  };
}

function currentFont() {
  const id = $('font').value;
  return state.fonts[id] || state.fonts.futural;
}

function updateLeadingHint() {
  const h = Number($('height').value) || 12;
  const f = Number($('leading').value) || 1.6;
  $('leadingHint').textContent = `Basislijn tot basislijn: ${nlNum(h * f, 1)} mm`;
}

function update() {
  if (!state.fonts) return;
  updateLeadingHint();
  const text = $('text').value;
  const o = optsFromForm();
  const font = currentFont();
  const result = renderSvg(text, font, o);
  state.last = result;

  const stage = $('stage');
  const info = $('info');
  const warn = $('warn');
  const dl = $('dlsvg');

  if (!result.svg) {
    stage.innerHTML = '<p class="empty">Typ een tekst om een voorbeeld te zien.</p>';
    info.textContent = 'Afmeting: —';
    warn.hidden = true;
    dl.disabled = true;
    expose(result, o);
    return;
  }

  // Voorbeeld: zelfde SVG, geschaald naar het vak (stroke schaalt mee).
  const doc = new DOMParser().parseFromString(result.svg, 'image/svg+xml');
  const svg = doc.documentElement;
  svg.removeAttribute('width');
  svg.removeAttribute('height');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  svg.classList.add('preview-svg');
  stage.innerHTML = '';
  stage.appendChild(document.importNode(svg, true));

  info.textContent = `Afmeting: ${nlNum(result.width, 1)} × ${nlNum(result.height, 1)} mm`;
  const skipped = result.layout.skipped || [];
  if (skipped.length) {
    warn.hidden = false;
    warn.textContent = 'Deze tekens zitten niet in het lettertype en zijn overgeslagen: ' + skipped.join(' ');
  } else {
    warn.hidden = true;
    warn.textContent = '';
  }
  dl.disabled = false;
  expose(result, o);
}

function expose(result, o) {
  window.__td16 = { result, o, fontId: $('font').value, renderSvg, slugFilename };
}

function downloadSvg() {
  if (!state.last?.svg) return;
  const name = slugFilename($('text').value);
  const blob = new Blob([state.last.svg], { type: 'image/svg+xml;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}

function fillFonts() {
  const sel = $('font');
  sel.innerHTML = '';
  for (const f of FONT_OPTIONS) {
    if (!state.fonts[f.id]) continue;
    const opt = document.createElement('option');
    opt.value = f.id;
    opt.textContent = f.label;
    sel.appendChild(opt);
  }
  sel.value = 'futural';
}

async function init() {
  try {
    const res = await fetch('hersheytext.min.json');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    state.fonts = await res.json();
    fillFonts();
    $('status').hidden = true;
    $('app').hidden = false;
    for (const el of document.querySelectorAll('#text, #font, #height, #tracking, #leading, #box')) {
      el.addEventListener('input', update);
      el.addEventListener('change', update);
    }
    for (const b of document.querySelectorAll('#align button')) {
      b.addEventListener('click', () => {
        for (const x of document.querySelectorAll('#align button')) x.classList.toggle('on', x === b);
        update();
      });
    }
    $('dlsvg').addEventListener('click', downloadSvg);
    update();
  } catch (err) {
    $('status').className = 'msg err';
    $('status').textContent = 'De lettertypen konden niet worden geladen. Controleer of hersheytext.min.json naast deze pagina staat.';
    console.error(err);
  }
}

init();
