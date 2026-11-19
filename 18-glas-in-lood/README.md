# 18 · Glas in lood

Een webpagina waar je een foto in sleept (of het meegeleverde voorbeeld gebruikt). De foto wordt verdeeld in **vlakjes** (een Voronoi-verdeling, gemaakt met [d3-delaunay](https://github.com/d3/d3-delaunay)). Elk vlakje krijgt de **gemiddelde kleur** van de foto op die plek, en tussen de vlakjes komen zwarte **loodlijnen**, zoals bij een glas-in-lood-raam.

Alles draait in je eigen browser. Je foto wordt niet geüpload en er zijn geen accounts, API-sleutels of kosten.

## Waarom anders dan de AI-generator van xTool?

De AI-generator beslist zelf hoe het raam eruitziet en gaat daarbij nog vaak de mist in. Hier **bepaal je het zelf**: je kiest het aantal vlakjes, de dikte van het lood, het aantal kleuren en de breedte. De vlakjes **volgen je eigen foto**: bij ogen, randen en contrast worden ze automatisch kleiner, zodat een gezicht herkenbaar blijft. Wil je een andere verdeling, klik dan op "Andere verdeling".

## Gebruiken

1. Open de live link: https://tech-demos-henna.vercel.app/18-glas-in-lood/
2. Klik op **Probeer het voorbeeld**, of kies/sleep je eigen foto.
3. Speel met de schuifjes. Het voorbeeld past zich meteen aan.
4. Download wat je nodig hebt:
   - **Kleur-SVG**: vlakjes met kleur plus loodlijnen, op ware grootte in mm.
   - **PNG**: hetzelfde beeld, op de dpi die je kiest (150, 300 of 600). De pixelgrootte staat eronder.
   - **Alleen loodlijnen (SVG)**: alleen de lijnen, zwart, zonder vulling. Elke rand staat er maar één keer in, dus geen dubbele lijnen.
   - **Alleen buitenrand (SVG)**: een rode snijlijn rond het raam.

## Met de xTool O1 Omni en de C1

- **UV-printen op de Omni:** gebruik de kleur-SVG of de PNG. Controleer na het openen in xTool Creative Space of de grootte in millimeters klopt met de afmeting die in de demo staat.
- **Graveren of snijden op de C1 of O1:** gebruik "Alleen loodlijnen". Dat zijn open lijnen zonder vulling; zet ze op lijnen graveren of snijden, niet op vullen. De standaarddikte is 0,2 mm; je kunt die met het schuifje aanpassen.
- De buitenrand-SVG is handig om het raam netjes op maat uit te snijden.

## Tips

- **Minder vlakjes = een steviger, grover glas-in-lood-gevoel.** Probeer 200 tot 400.
- **Gezichten hebben meer vlakjes nodig**, ongeveer 800 of meer, en een hoge waarde bij "Meer vlakjes bij details".
- Met **Aantal kleuren** (bijvoorbeeld 8 tot 12) krijg je echte glasstukken in beperkte kleuren.
- Met **Kleurkracht** boven 100 % wordt het levendiger, zoals gekleurd glas.
- Een foto met goed contrast en een rustige achtergrond werkt het best.

## Beperkingen

- Niet getest op een echte O1 Omni, C1 of O1; controleer de maat in mm voordat je echt gaat werken.
- Het is een afbeelding van glas-in-lood, geen constructietekening: er is geen rekening gehouden met de breedte van het lood bij het knippen van glas, en de kleine vlakjes kunnen bij hoge aantallen te klein zijn om te snijden.
- De foto wordt intern verkleind tot ongeveer 480 px (lange kant) voor snelheid. Voor een raam van 150 mm is dat ruim genoeg; de vlakken zijn vector, dus het resultaat is scherp op elke dpi.
- Een PNG groter dan 50 miljoen pixels wordt geweigerd (kies dan een lagere dpi).
- Geen handmatig vlakjes verplaatsen.

## Bestanden

`index.html`, `app.js`, `glas.js` (de berekening en de export), `d3-delaunay.bundle.js` (d3-delaunay 6.0.4 met delaunator, lokaal gebundeld), `voorbeeld-meisje.jpg`, `LICENSE-d3-delaunay.txt`, `screenshot.png`.

## Bronnen

- [d3-delaunay](https://github.com/d3/d3-delaunay), ISC-licentie.
- Voorbeeldfoto: Johannes Vermeer, *Meisje met de parel* (ca. 1665), publiek domein, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Meisje_met_de_parel.jpg).
