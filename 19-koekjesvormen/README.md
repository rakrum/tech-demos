# 19 · Koekjesvormenmaker

Een webpagina waarop je je eigen **koekjesuitsteker** maakt, met een passende **stempel** erbij. Je kiest een kerstvorm (ster, kerstboom, hart, peperkoekmannetje of kerstbal) of sleept een eigen tekening of foto erin. Je stelt de maat in millimeters in en downloadt een printklaar bestand voor de **Snapmaker U1**.

De stempel drukt de binnentekening in het deeg, bijvoorbeeld de ogen en knoopjes van het peperkoekmannetje of de lijnen van je eigen tekening.

Alles draait in je eigen browser. Je plaatje wordt niet geüpload en er zijn geen accounts, API-sleutels of kosten.

## Gebruiken

1. Open de live link: https://tech-demos-henna.vercel.app/19-koekjesvormen/
2. Kies een vorm, of klik op **Eigen tekening of foto** (of sleep een PNG, JPG of SVG op de pagina). **Voorbeeldtekening** laat zien hoe het werkt met een sneeuwpop.
   - Het best werkt een **donkere tekening op wit papier** (dikke stift), of een **uitgeknipte foto** met doorzichtige achtergrond (bijvoorbeeld uit demo 04).
   - De oranje lijn laat zien waar de uitsteker snijdt. Schuif aan **Drempel** als er te veel of te weinig wordt meegenomen. Met **Gaatjes dichten** sluit je kleine onderbrekingen in de buitenlijn.
3. Stel de **grootte** in (40 tot 120 mm, langste zijde van het koekje) en eventueel de wanddikte, hoogte en rand.
4. Bekijk het resultaat in 3D: links de uitsteker, rechts de stempel.
5. Download:
   - **3MF**: uitsteker en stempel als twee losse objecten in één bestand.
   - **STL uitsteker** of **STL stempel**: elk apart.

Onder het 3D-beeld staat de echte maat in mm. Als er "✔ printklaar" staat, is elk onderdeel één dicht, waterdicht geheel.

## Printen op de Snapmaker U1

- **PLA of PETG**, laagdikte **0,2 mm**, 3 wanden, 15 tot 20 % vulling.
- Print alles **zoals het ligt**: de uitsteker met de brede rand op het bed (de dunne snijrand wijst omhoog), de stempel met de tekening naar boven. Je hebt geen support nodig.
- Laat de standaardinstellingen voor de **dunne snijrand** (0,8 mm) aan. Dat zijn precies twee lijnen van een 0,4 mm-nozzle, en hij snijdt veel scherper.
- Alles is **gespiegeld**, zodat het koekje en de afdruk er net zo uitzien als je tekening. Je drukt ze tenslotte omgekeerd in het deeg. Bij de voorbeeldvormen zie je daar niets van.
- De stempel is rondom 1 mm kleiner dan het koekje (instelbaar), dus je kunt hem in de uitsteker drukken terwijl het koekje er nog in zit.

## Voedselveiligheid

Geen enkel filament is officieel voedselveilig. In de laagjes van een 3D-print blijven kleine resten achter, waar bacteriën in kunnen groeien. Voor **kort contact met koekjesdeeg** is het prima:

- Was met de hand in **lauw water** met een beetje afwasmiddel, niet in de vaatwasser (PLA vervormt bij warmte).
- Of leg **bakpapier of huishoudfolie** tussen de vorm en het deeg.
- Gebruik bij voorkeur een eigen rol filament zonder kleurstofjes of glitters voor dingen die met eten in aanraking komen.

## Beperkingen

- Niet getest op een echte U1; bekijk het model altijd even in de slicer voordat je print.
- Bij een eigen tekening wordt alleen de **grootste vorm** de uitsteker. Losse stukjes ernaast worden genegeerd (de demo meldt dat).
- Lijntjes dunner dan ongeveer 0,6 mm verdwijnen van de stempel, omdat de printer ze toch niet kan maken. Met **Lijnen op de stempel dikker maken** kun je ze steviger maken.
- Een foto wordt intern verkleind tot ongeveer 400 pixels. Voor een koekje is dat ruim genoeg.
- Er zit geen handvat op de stempel. De plaat is 4 mm dik, zodat je hem goed kunt vastpakken.

## Bestanden

`index.html`, `app.js` (pagina, plaatje inlezen, 3D-beeld), `cutter.js` (de vormen, uitsteker en stempel met Manifold, STL/3MF-export en controle), `LICENSE-cookie-cutter-designer.txt`, `screenshot.png`.

## Bronnen

- Geïnspireerd op [Cookie Cutter Designer](https://github.com/razorglyon/cookie-cutter-designer) van razorglyon (MIT-licentie, zie `LICENSE-cookie-cutter-designer.txt`): het idee van uitsteker met losse stempel, wand en flens in millimeters, en een controle op dichte modellen. De code hier is opnieuw en veel kleiner geschreven.
- [Manifold](https://github.com/elalish/manifold) (Apache-2.0) voor de 3D-vormen, [three.js](https://threejs.org) (MIT) voor het 3D-beeld, beide via jsDelivr.
