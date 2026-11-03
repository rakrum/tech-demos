# 09 · Vouwdoosje-maker voor de xTool C1 en 3D-print voor de Snapmaker U1 (Maker.js, Manifold)

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

## 3D-print voor de Snapmaker U1

Bovenaan de pagina staat een tweede tab: **🖨️ 3D-print (Snapmaker U1)**. Die gebruikt dezelfde binnenmaat en dezelfde naam, maar maakt er een **3D-printbestand** van. Een kartonnen vouwdoosje kun je niet printen, dus je kiest uit twee modellen:

- **Bakje met los deksel.** Een open bakje met een instelbare wand (standaard 1,6 mm) en bodem (standaard 1,2 mm), eventueel met afgeronde hoeken. Het deksel is een **insteekdeksel** (de rand valt in het bakje) of een **opzetdeksel** (de rand valt eroverheen), met een speling van standaard 0,25 mm per kant. De buitenmaat van het bakje is de binnenmaat plus 2 × de wand.
- **Plat printen en vouwen.** Dezelfde uitslag als het klassieke insteekdoosje, maar dan als platte print van ongeveer 1 mm dik. Op elke vouwlijn zit een groefje (V-vormig of plat), met onderin een dun strookje van ongeveer 0,35 mm: dat is het scharnier. Na het printen vouw je hem met de groefjes naar binnen, en plak je de lijmrand vast.

De **naam** komt op het deksel (bij het bakje) of op de voorkant (bij de vouwdoos):

- **Ingelegd (standaard):** de naam zit vlak in de buitenkant, in de onderste laagjes op het bed. Op de U1 geef je hem een tweede kleur. In de STL (één kleur) is de naam een uitsparing.
- **In reliëf:** de naam steekt 0,8 mm uit. Bij het bakje ligt het deksel dan met de bovenkant omhoog en heeft de rand eronder support nodig. Bij de vouwdoos komt de naam aan de bovenkant van de print, en dat wordt de binnenkant van het doosje.

Je downloadt:

- een **STL**: alle onderdelen in één bestand, één kleur;
- een **3MF**: het bakje en het deksel als aparte objecten, en de naam als apart deel, zodat je hem een andere kleur kunt geven.

Alle onderdelen liggen al plat naast elkaar op het printbed van **270 × 270 mm**. Past het niet, dan zie je een rode melding.

### Zo print je hem

1. Open de **3MF** in **Snapmaker Orca** (of Luban). Vraagt het programma of het één object met meerdere delen is, kies dan **Ja**.
2. Geef per object of deel een **filament**, bijvoorbeeld wit voor het doosje en roze voor de naam.
3. Laagdikte 0,2 mm. Het bakje en het deksel hebben geen support nodig (behalve bij een naam in reliëf).
4. **Vouwdoos:** gebruik **PETG**, dat blijft buigen. **PLA** breekt na een paar keer vouwen. **TPU** is heel buigzaam, maar dan wordt het doosje slap. Print hem plat met de scharnieren in de eerste laagjes, zoals hij al in het bestand ligt, en met 100% vulling.

Nog niet getest op een echte Snapmaker U1 of in Snapmaker Orca. De bestanden zijn op mijn computer gecontroleerd: ze zijn dicht (geschikt om te slicen) en de maten kloppen.

## Gemaakt met

- [Maker.js](https://github.com/microsoft/maker.js) 0.19.2 (Apache-2.0, Microsoft): de tekening, SVG- en DXF-export en de letters als lijnen.
- [opentype.js](https://opentype.js.org/) 1.3.4 (MIT) en [bezier-js](https://github.com/Pomax/bezierjs) 2.6.1 (MIT): het lettertype inlezen.
- Lettertype [Fredoka](https://fonts.google.com/specimen/Fredoka) (SIL Open Font License 1.1), via [Fontsource](https://fontsource.org/).
- [Manifold](https://github.com/elalish/manifold) 3.5.4 (Apache-2.0): het rekenwerk voor de 3D-modellen (`box3d.js`).
- [three.js](https://threejs.org) 0.180.0 (MIT): het 3D-voorbeeld (`print3d.js`).
- Alles wordt geladen via jsDelivr.
