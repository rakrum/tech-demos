# 12 · Foto opschalen (Real-ESRGAN)

Sleep een kleine of wat wazige foto erin. Een AI-model (Real-ESRGAN) maakt hem scherper en groter — 2× of 4× — en je downloadt een PNG, klaar voor UV-print op de xTool O1 of voor de andere demo's (achtergrond weghalen, SVG).

Alles draait in je eigen browser via [onnxruntime-web](https://github.com/microsoft/onnxruntime). Je foto wordt niet geüpload en er zijn geen accounts, API-sleutels of kosten.

## Gebruiken

1. Open de live link: https://tech-demos-henna.vercel.app/12-foto-opschalen/
2. Klik op **Probeer het voorbeeld**, of kies/sleep je eigen foto.
3. Kies **2×** of **4×** en wacht tot de "Na"-kant klaar is.
4. Klik op **Download PNG** en sleep het bestand in **xTool Creative Space**, of stuur het door naar [demo 04](../04-background-cutout/) / [demo 03](../03-vtracer-svg/).

## Tip: UV-print met de xTool O1

- Telefoonfoto of klein logo? Schaal eerst hier op, dan print je scherper.
- Op een donkere ondergrond: zet in xTool Creative Space een **witte onderlaag** aan.
- Heel grote bronfoto's worden eerst verkleind (max. ±512 px aan de lange kant) zodat je browser het aankan; de download is 2× of 4× die werkgrootte.

## Beperkingen

- De eerste keer downloadt je browser het AI-model (**realesr-general-x4v3**, ±4,7 MB) plus onnxruntime (±paar MB). Daarna staan die in de cache; daarna werkt de pagina ook offline.
- Werkt het best in **Chrome of Edge** (WebGPU). Andere browsers of systemen zonder WebGPU gebruiken WASM (trager).
- Het model schaalt intern altijd 4×. Bij **2×** wordt het AI-resultaat daarna zacht verkleind naar 2× — nog steeds scherper dan gewoon opblazen.
- Geheugen: grote foto's + WebGPU/WASM kunnen op telefoons vastlopen. Gebruik bij voorkeur een computer; houd bronnen onder ±2–4 megapixels (de demo verkleint zelf tot max. 512 px lange kant).

## Lokaal draaien

Open de map via een lokale webserver (modules + model-fetch vereisen `http://`, niet `file://`):

```bash
cd 12-foto-opschalen && python3 -m http.server 8080
```

Ga naar http://localhost:8080/

## Credits en licenties

- Model: [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) van Xintao Wang e.a., **BSD-3-Clause** (zie `LICENSE-realesrgan.txt`). Weights: `realesr-general-x4v3` (SRVGGNetCompact, ±1,2M params).
- ONNX-export: [jonathanst29/tinier-upscale-models](https://huggingface.co/jonathanst29/tinier-upscale-models) (zelfde BSD-3-Clause). Bestand: `models/realesr-general-x4v3.onnx` (±4,7 MB).
- Runtime: [onnxruntime-web](https://github.com/microsoft/onnxruntime) van Microsoft, **MIT**, geladen via jsDelivr.
- Voorbeeldfoto `voorbeeld-beeld.jpg`: uitsnede/verkleining van [Bust of Julius Caesar](https://commons.wikimedia.org/wiki/File:Bust_of_Julius_Caesar.jpg) door Wilfredor, **CC0**.
