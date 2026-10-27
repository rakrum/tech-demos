# 06 · Tekenen in de lucht (MediaPipe)

Een webpagina waarop je met je vingertop voor de camera tekent. Een AI-model van Google volgt live je hand en vingers in de browser. Knijp (duimtip dicht bij wijsvingertip) om de pen op te tillen; open je hand weer om een nieuwe lijn te starten. Je downloadt de tekening als **SVG** (100 mm breed) voor de xTool-laser of UV-printer, of als **PNG**.

Alles draait in je eigen browser. Camerabeelden blijven op jouw computer: er wordt niets geüpload. Geen accounts, geen API-sleutels, geen kosten.

## Gebruiken

1. Open de live link: https://tech-demos-henna.vercel.app/06-lucht-tekenen/
2. Klik op **Start camera** en geef toestemming. (Op de telefoon gebruikt hij de selfiecamera.)
3. Wijs met je **wijsvinger**. Waar de tip zit, tekent de pen. Je ziet een roze punt (of het handgeraamte) als tracking werkt.
4. **Knijp** (duim + wijsvinger) om te pauzeren; open weer voor een nieuwe lijn.
5. Kies kleur en lijndikte, of zet het handgeraamte uit.
6. **Ongedaan** verwijdert de laatste lijn; **Wissen** maakt alles leeg.
7. Download **SVG (100 mm)** of **PNG**. Bij SVG kun je kiezen voor een witte of doorzichtige achtergrond.

Werkt de camera niet (of wil je even snel testen)? Kies **Muis/touch-modus** en teken met muis of vinger op het vlak.

Na een update: doe een **harde refresh** (Ctrl/Cmd+Shift+R) zodat je browser de nieuwe pagina laadt, en sta de camera toe als de browser ernaar vraagt.

## Tip: xTool Creative Space / UV-printer

- Open de SVG in **xTool Creative Space**. De tekening is 100 mm breed; schaal hem daar naar wens.
- Voor lasergraveerwerk: gebruik een dunne lijn en een goede contrastkleur (bijv. zwart).
- Voor UV-print: PNG met doorzichtige achtergrond werkt ook; of importeer de SVG en vul/stroke naar smaak.
- Zorg op de foto-/camera-kant voor **goed licht** en een egale achtergrond, zodat de AI je hand goed ziet.

## Beperkingen

- De eerste keer downloadt je browser het model (±8 MB) en de MediaPipe-wasm. Daarna staat het in de cache.
- Werkt het best in **Chrome of Edge**. Safari kan trager zijn; de demo valt automatisch terug van GPU naar CPU als dat nodig is.
- Bij slecht licht, handschoenen of een drukke achtergrond mist hij je hand sneller.
- Heel snelle bewegingen kunnen de lijn iets laten "slepen"; de demo filtert dat met een One Euro Filter, maar is geen professionele tekentablet.
- Camerabeelden blijven lokaal; MediaPipe kan wel anonieme gebruiksstatistieken naar Google sturen (zoals bij hun web-SDK gebruikelijk is). Je tekening zelf wordt niet geüpload.

## Credits en licenties

- [MediaPipe Hand Landmarker](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker) van Google / [google-ai-edge/mediapipe](https://github.com/google-ai-edge/mediapipe), **Apache-2.0**.
- npm-pakket [`@mediapipe/tasks-vision`](https://www.npmjs.com/package/@mediapipe/tasks-vision) 0.10.18 (via jsDelivr).
- Model `hand_landmarker.task` (float16) van [Google Cloud Storage – mediapipe-models](https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task), onderdeel van MediaPipe (Apache-2.0).
