# 20 · Naam-clicker (elke letter klikt)

Maak een **naam-clicker**: elke letter is een eigen toets op een **MX-toetsenbordschakelaar**, dus je kunt op elke letter klikken. Je zet de letters in een **cirkel**, een **hart**, een **boog**, op **één regel** of op **twee regels**. Je krijgt een **3MF voor de Snapmaker U1** met de voet, de toetsen en de letters in hun eigen kleur, en losse **STL's**.

Alles draait in je eigen browser. Er wordt niets geüpload en er zijn geen accounts of kosten.

![screenshot](screenshot.png)

## Gebruiken

1. Open de live link: https://tech-demos-henna.vercel.app/20-naam-clicker/
2. Typ de **naam**. Een **ë**, **é** of **ü** werkt gewoon. Een spatie geeft een lege plek.
3. Kies een **vorm**:
   - **Cirkel**: de letters staan rechtop in een krans en je leest ze met de klok mee. Bovenaan zit het oogje en in het midden een hartjestoets.
   - **Hart**: hetzelfde, maar dan in de vorm van een hart.
   - **Boog**: de letters staan als een regenboog en draaien mee met de boog.
   - **Eén regel** of **Twee regels**: bij twee regels zet je een **/** waar de tweede regel moet beginnen, bijvoorbeeld `Sigvi/ënnely`.
   - **Passtest**: één vakje met één toets. Print die eerst, dan weet je of je schakelaars goed passen.
4. Kies of de letters **allemaal rechtop** staan of **meedraaien** (ze wijzen dan naar buiten).
5. Kies **ronde** of **vierkante** toetsen. Bij *Automatisch* krijgen de cirkel en het hart ronde toetsen.
6. Schuif aan de **maten** in millimeters: toetsmaat, letterhoogte, ruimte tussen de toetsen, bodemdikte en rand.
7. Onder **Extra's** zet je het sleutelhanger-oogje, de dichte middenplaat, de hartjestoets en de uitdrukgaatjes aan of uit, en kies je de kleuren.
8. Kijk of er **✔ printklaar** staat en download de **3MF (U1)**. De losse STL's zijn er ook: voet, toetsen en letters.

## Wat heb je nodig

- **Eén MX-schakelaar per letter**, plus één voor de hartjestoets als die aan staat. Voor *Sigviënnely* in een cirkel of hart zijn dat **12 schakelaars**: 11 letters en 1 hartje. Voor de boog of de regels zijn het er **11**.
- MX-stijl betekent: Cherry MX, Gateron, Outemu, Kailh Box of Akko, met 3 of 5 pinnetjes. **Blauwe** schakelaars klikken het hardst, **bruine** voelen een tikje en **rode** zijn stil. Een zakje van 30 tot 100 stuks kost ongeveer 10 tot 20 euro.
- Een sleutelring van 25 mm, als je het oogje wilt gebruiken.

## Printen op de Snapmaker U1

1. Open de 3MF in **Snapmaker Orca**. Alles ligt al goed op het printbed.
2. De kleuren staan per kop klaar. **Kop 1** is de voet, **kop 2** de toetsen, **kop 3** de letters en **kop 4** de tweede toetskleur als je *om en om* kiest. Zet in Orca het juiste filament op elke kop.
3. Gebruik **PLA**, een laagdikte van **0,2 mm**, 3 wanden en 15 % vulling. Je hebt **geen support** nodig.
4. De toetsen liggen **ondersteboven**: de letter ligt op het bed. Daardoor wordt de bovenkant glad en zit de letter vlak in de toets. De letter bestaat uit de eerste 3 laagjes.
5. Kies in Orca bij **Wanden** de *Arachne*-wandgenerator. Daarmee worden kleine letters en de puntjes op de **ë** mooier.

## In elkaar zetten

1. Druk elke schakelaar **van boven** in een vakje tot je hem hoort klikken. Hij staat dan vast.
2. Druk de toets op het kruisje van de schakelaar. Draai hem zo dat de letter goed staat. Het kruisje past in vier standen.
3. Wil je een schakelaar eruit halen? Duw dan met een pen door het **gaatje onder in de voet**.

## Past het niet?

Open **4. Schakelaar en speling**:

- **Zit de toets te los** op het kruisje? Zet *Extra speling kruisje* lager. Barst hij of gaat hij er niet op? Zet hem hoger.
- **Gaat de schakelaar er niet in?** Zet *Extra speling plaatgat* hoger. Valt hij eruit? Zet hem lager.
- Print na een aanpassing eerst weer de **Passtest**.

## Goed om te weten

- Het model is nog **niet getest op een echte U1**. Print daarom eerst de passtest.
- Het grammengewicht in het overzicht is voor een **massieve** print. Met 15 % vulling is het veel minder.
- Een heel lange naam wordt groot. De tool waarschuwt als het niet meer op het printbed (270 × 270 mm) past.
- Je kunt ook je **eigen lettertype** kiezen (.ttf of .otf), bijvoorbeeld een dik, rond kinderlettertype. Staat er een letter niet in dat lettertype, dan zegt de tool dat.

## Bestanden

`index.html`, `app.js` (de pagina en het 3D-beeld), `geometry.js` (de voet, de toetsen, de letters, de export naar STL/3MF en de controle met Manifold), `fonts/` (Liberation-lettertypes met licentie) en `screenshot.png`.

## Bronnen en licenties

- **Eigen ontwerp.** Het idee van één toets per letter op een MX-schakelaar, met de letter vlak in een eigen kleur, komt van de [Parametric Name Clicker Generator](https://makerworld.com/en/models/2953074) van WunschStück3D op MakerWorld. Dat model valt onder de *Standard Digital File License*, die geen bewerkingen toestaat. Daarom is er **geen code en geen vorm** van overgenomen. Alleen het idee diende als inspiratie.
- De maten van de MX-schakelaar (een plaatgat van 14 mm, een plaat van 1,5 mm en een kruisje van 4 × 1,2 mm) zijn openbare standaardmaten van Cherry.
- [Manifold](https://github.com/elalish/manifold) (Apache-2.0) maakt de 3D-vormen, [opentype.js](https://opentype.js.org) (MIT) leest de letters en [three.js](https://threejs.org) (MIT) toont het 3D-beeld. Alle drie worden via jsDelivr geladen.
- De lettertypes zijn Liberation Sans, Serif en Mono Bold (SIL Open Font License 1.1, zie `fonts/LICENSE-Liberation-fonts.txt`).
