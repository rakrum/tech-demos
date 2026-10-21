# 02 · Foto naar 3D-reliëf (Depth Anything V2)

Een webpagina waar je een foto in sleept. Het AI-model [Depth Anything V2 Small](https://huggingface.co/onnx-community/depth-anything-v2-small) schat wat dichtbij en wat ver weg is en maakt daar een dieptekaart van. Van die dieptekaart bouwt de pagina een 3D-reliëf dat je kunt draaien, en je downloadt het als STL om te printen.

Alles draait in je eigen browser via [Transformers.js](https://github.com/huggingface/transformers.js) en [three.js](https://threejs.org/). Je foto wordt niet geüpload en er zijn geen API-sleutels of kosten.

## Gebruiken

1. Open de live link: https://tech-demos-henna.vercel.app/02-depth-relief/
2. Klik op **Probeer het voorbeeld**, of kies/sleep je eigen foto.
3. Stel hoogte, breedte, bodemdikte, detail en gladheid in en draai het reliëf met je muis.
4. Klik op **Download STL**. Je krijgt een dicht, printbaar blok (reliëf + vlakke bodem + zijkanten), maten in mm.

## Tip: lithofaan op de Snapmaker U1

- Kies als bron **Helderheid van de foto** (klassieke lithofaan) of de dieptekaart.
- Zet **Omdraaien** aan (licht = dun).
- Bodem ±0,8 mm en hoogte ±2,2 mm, dus samen ±0,8–3 mm dik.
- Print rechtop of plat in **wit PLA**, 100% infill, fijne laaghoogte, en houd hem voor een lamp.

## Beperkingen

- De eerste keer downloadt je browser het model eenmalig (±25–100 MB, afhankelijk van je browser); daarna staat het in de cache.
- Werkt het best in Chrome of Edge (WebGPU). Andere browsers gebruiken een tragere reserve-modus (WASM).
- De diepte wordt **geschat**, niet gemeten: het is relatieve diepte, geen echte afstand. Portretten, beelden en voorwerpen met een rustige achtergrond werken het best.
- Hoog detail (300 punten) geeft grote STL-bestanden (±10–20 MB).

## Credits en licenties

- Model: Depth Anything V2 Small (ONNX-versie van onnx-community), **Apache-2.0**. Let op: de grotere Base/Large-versies hebben een niet-commerciële licentie; deze demo gebruikt alleen Small.
- [Transformers.js](https://github.com/huggingface/transformers.js) (Apache-2.0) en [three.js](https://threejs.org/) (MIT), geladen via jsDelivr.
- Voorbeeldfoto `caesar.jpg`: [Bust of Julius Caesar](https://commons.wikimedia.org/wiki/File:Bust_of_Julius_Caesar.jpg) door Wilfredor, **CC0** (Wikimedia Commons), verkleind naar 960 px.
