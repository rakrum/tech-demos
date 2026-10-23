# 04 · Achtergrond weghalen (BiRefNet)

Een webpagina waar je een foto in sleept. Een AI-model haalt de achtergrond weg, ook rond haar, vacht en fijne randjes. Je krijgt een PNG met een doorzichtige achtergrond, of met een witte of gekleurde achtergrond.

Alles draait in je eigen browser via [Transformers.js](https://github.com/huggingface/transformers.js). Je foto wordt niet geüpload en er zijn geen accounts, API-sleutels of kosten.

## Gebruiken

1. Open de live link: https://tech-demos-henna.vercel.app/04-background-cutout/
2. Klik op **Probeer het voorbeeld** (een herdershond op gras), of kies/sleep je eigen foto.
3. Je ziet je foto en de uitsnede naast elkaar (de uitsnede op een ruitjespatroon = doorzichtig).
4. Kies de achtergrond: **Doorzichtig**, **Wit** of **Kleur**. Met **Randzachtheid** en **Drempel** stel je de rand bij.
5. Klik op **Download PNG** (volle resolutie van je foto), of op **Naar SVG (VTracer)** om de uitsnede meteen in [demo 03](../03-vtracer-svg/) om te zetten naar een SVG.

## Tip: UV-print met de xTool O1

- Download de PNG met een **doorzichtige** achtergrond en sleep hem in **xTool Creative Space**. Dan wordt alleen het onderwerp geprint.
- Print je op een donkere of gekleurde ondergrond (sneaker, telefoonhoesje)? Zet dan een **witte onderlaag** aan, zodat de kleuren dekken en niet doorschijnen.
- Zie je nog een randje van de oude achtergrond? Zet **Randzachtheid** wat lager of **Drempel** wat hoger.

## Beperkingen

- De eerste keer downloadt je browser het AI-model (BiRefNet: ±115–225 MB). Daarna staat het in de cache.
- Werkt het best in **Chrome of Edge** op een computer met een stevige grafische kaart (WebGPU). Kan je browser of GPU BiRefNet niet aan, dan schakelt de demo vanzelf over op het lichtere reservemodel **ormbg** (±45 MB). Dat werkt overal, maar is minder netjes rond haar en vacht. Bovenaan de pagina zie je welk model er draait.
- De AI kijkt naar een verkleinde versie (1024 × 1024). De download heeft wel de volle resolutie, maar heel grote foto's maken de pagina trager.
- Bij drukke foto's met meerdere dingen kiest de AI zelf wat "het onderwerp" is.
- **Naar SVG** stuurt een versie met harde randen door, omdat halfdoorzichtige randjes in een SVG als lelijke lijntjes eindigen.

## Credits en licenties

- Model: [BiRefNet lite](https://github.com/ZhengPeng7/BiRefNet) van Peng Zheng e.a., **MIT**, ONNX-versie [onnx-community/BiRefNet_lite-ONNX](https://huggingface.co/onnx-community/BiRefNet_lite-ONNX).
- Reservemodel: [ormbg](https://huggingface.co/schirrmacher/ormbg) van Maximilian Schirrmacher, **Apache-2.0**, ONNX-versie [onnx-community/ormbg-ONNX](https://huggingface.co/onnx-community/ormbg-ONNX).
- [Transformers.js](https://github.com/huggingface/transformers.js) van Hugging Face, **Apache-2.0** (geladen via jsDelivr).
- Voorbeeldfoto `voorbeeld-hond.jpg`: [White Swiss Shepherd portrait](https://commons.wikimedia.org/wiki/File:White_Swiss_Shepherd_portrait.jpg) door Joselodos, **CC0** (Wikimedia Commons), verkleind naar 1280 px.
