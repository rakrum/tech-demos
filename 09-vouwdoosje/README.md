# 09 · Vouwdoosje-maker voor de xTool C1 (Maker.js)

Een webpagina die een **uitslag voor een kartonnen doosje** tekent. Je vult de maten in, en je krijgt een **SVG** (of **DXF**) op ware grootte die je in **xTool Studio** opent en met de **xTool C1** uit karton snijdt. De **rode** lijnen zijn snijlijnen en de **blauwe** lijnen zijn vouwlijnen (rillen). De pagina gebruikt [Maker.js](https://github.com/microsoft/maker.js), een gratis open-source library (Apache-2.0) van Microsoft.

Alles draait in je eigen browser. Er wordt niets geüpload en er zijn geen accounts, API-sleutels of kosten.

## Gebruiken

1. Open de live link: https://tech-demos-henna.vercel.app/09-vouwdoosje/
2. Kies een **model**:
   - **Doosje met insteekkleppen (klassiek)**: een doosje zoals een theedoosje, met een klep boven en onder, stofkleppen opzij en een lijmrand.
   - **Doosje met insteekkleppen (beide kleppen aan de achterkant)**: hetzelfde doosje, maar beide kleppen zitten aan dezelfde kant.
   - **Bakje met los deksel**: een open bakje met lijmlipjes in de hoeken, plus een deksel dat er net overheen past.
3. Vul de **binnenmaat** in millimeters in (lengte, breedte, hoogte). Zo groot wordt de ruimte binnenin.
4. Vul de **dikte van je karton** in (standaard 0,4 mm, dat is ongeveer 250 g karton). Per paneel komt er een kleine vouwtoeslag bij.
5. Typ eventueel een **naam**. Die komt op de voorkant (bij het bakje op het deksel). Kies of je de naam met een **pen** wilt tekenen of wilt **uitsnijden**.
6. Klik op **SVG downloaden** (of **DXF downloaden**).

Het voorbeeld rechts verandert meteen mee. De stippellijn laat zien hoe groot de snijmat is. Past het ontwerp niet, dan zie je een rode melding.

## Snijden op de xTool C1

1. Open de SVG in **xTool Studio**. Het bestand staat al op ware grootte in millimeters.
2. Zet de **rode** lijnen op **Snijden** met het fijne mesje.
3. Zet de **blauwe** lijnen op **Rillen** met de rilpunt. Zie je geen rilfunctie, kies dan **Pen**, of kies in de demo **Stippellijn** (dan snijdt het mesje kleine streepjes, zoals een perforatie).
4. Zet de **zwarte** naam op **Pen**.
5. Gebruik karton van ongeveer **250 g** op de **LightGrip-mat** (12 × 12 inch). Voor grote doosjes is er de lange mat (12 × 24 inch).
6. **Proefsnede:** snijd eerst alleen het **meetvierkant** (20 × 20 mm) en meet het na. Klopt het niet, kijk dan bij het importeren naar de DPI-instelling (96 of 72).
7. Vouw langs de blauwe lijnen van je af en lijm de lijmrand aan de binnenkant van de voorkant.

## Goed om te weten

- De letters van de naam worden omgezet naar lijnen, omdat xTool Studio gewone tekst in een SVG overslaat. Met een pen krijg je dus **holle letters** (alleen de rand).
- De lijnen zitten in aparte groepen: `snijden` (rood), `rillen` (blauw), `naam` (zwart) en `meetvierkant` (rood). In de DXF zijn dat aparte lagen met dezelfde namen.
- De snijmat van de C1 is 304,8 × 304,8 mm (standaard) of 304,8 × 609,6 mm (lang), volgens de specificaties van xTool en verkopers.
- Nog niet getest op een echte C1. Of xTool Studio voor de C1 een aparte optie **Rillen** toont, is nog niet bevestigd; de C1 komt officieel uit op 11 november 2026.

## Gemaakt met

- [Maker.js](https://github.com/microsoft/maker.js) 0.19.2 (Apache-2.0, Microsoft): de tekening, SVG- en DXF-export en de letters als lijnen.
- [opentype.js](https://opentype.js.org/) 1.3.4 (MIT) en [bezier-js](https://github.com/Pomax/bezierjs) 2.6.1 (MIT): het lettertype inlezen.
- Lettertype [Fredoka](https://fonts.google.com/specimen/Fredoka) (SIL Open Font License 1.1), via [Fontsource](https://fontsource.org/).
- Alles wordt geladen via jsDelivr.
