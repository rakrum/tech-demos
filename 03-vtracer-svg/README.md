# 03 · Afbeelding naar SVG (VTracer)

Een webpagina waar je een tekening, logo of foto in sleept. [VTracer](https://github.com/visioncortex/vtracer) zet hem om in een strak SVG-bestand met aparte kleurlagen. Met schuifjes kies je hoeveel kleuren en hoeveel detail je wilt; je ziet het origineel en het resultaat naast elkaar (met zoom).

Alles draait in je eigen browser (VTracer als WebAssembly). Je afbeelding wordt niet geüpload en er zijn geen accounts, API-sleutels of kosten.

## Gebruiken

1. Open de live link: https://tech-demos-henna.vercel.app/03-vtracer-svg/
2. Klik op **Probeer het voorbeeld**, of kies/sleep je eigen PNG of JPG.
3. Kies **Kleur** of **Zwart-wit** en schuif met de instellingen (aantal kleurlagen, ruis weghalen, vorm van de lijnen, enz.). Het resultaat past zich meteen aan.
4. Klik op **Download SVG**, download één kleurlaag, of **Alle kleurlagen los (zip)**.

## Tip: xTool

- Importeer de SVG in **xTool Creative Space**. De SVG krijgt de breedte in mm die je instelt (standaard 100 mm).
- **Zwart-wit** is het handigst voor graveren en snijden.
- **Kleur** met losse lagen is handig voor UV-print, of om elke kleur een eigen bewerking te geven. Zet **Lagen uitsnijden** aan als lagen niet over elkaar heen mogen liggen.
- De lichtste laag is vaak de achtergrond: die kun je weglaten.

## Beperkingen

- Werkt het best met tekeningen, logo's en plaatjes met vlakke kleuren. Foto's geven duizenden paden en bestanden van een paar MB.
- Grote afbeeldingen worden eerst verkleind (standaard 1200 px langste kant; instelbaar).
- Kleurlagen zijn gegroepeerd per exacte kleur. Bij foto's of zachte randen helpt **Max. aantal kleurlagen** lager zetten.
- Gebruikt een vroege versie van VTracer (1.0.0-alpha.4).

## Credits en licenties

- [VTracer](https://github.com/visioncortex/vtracer) van visioncortex, **MIT of Apache-2.0** (zie `LICENSE-vtracer.txt`). De WebAssembly-build (`vtracer_bg.wasm`) en de lijmcode (`vtracer.js`) komen uit het npm-pakket `@visioncortex/vtracer` 1.0.0-alpha.4, aangepast om in de browser te draaien.
- Voorbeeldafbeelding `voorbeeld-papegaai.png`: papegaai-emoji uit [Twemoji](https://github.com/jdecked/twemoji), © Twitter/X en andere bijdragers, **CC-BY 4.0**, omgezet naar PNG (640 px).
