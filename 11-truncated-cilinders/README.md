# 11 · Afgeknotte vormen-maker (JSCAD)

Een Nederlandse webpagina voor **afgeknotte cilinders**, **afgeknotte kegels**, **afgeknotte piramides** en **buizen/ringen**. Je stelt de maten in millimeters in, ziet het model direct in 3D en downloadt een **binaire STL** of **3MF** voor de Snapmaker U1.

Alles draait in je eigen browser: geen accounts, uploads, API-sleutels of runtime-npm. De benodigde libraries zitten in `vendor.js`.

## Gebruiken

1. Start vanuit de bovenliggende map bijvoorbeeld `python3 -m http.server 8000`.
2. Open http://localhost:8000/11-truncated-cilinders/.
3. Kies een vorm en vul de buitenmaten en hoogte in.
4. Bij een cilinder, kegel of piramide kies je een **snijhoek** of een rechte **snijhoogte**. Een snijhoek van 0° geeft een vlakke bovenkant. Bij een schuine snede is de opgegeven hoogte de hoogte in het midden van de bovensnede; de laagste en hoogste rand wijken daarvan af.
5. Zet **Massief** aan of kies een wanddikte (minimaal 0,8 mm). Een holle vorm heeft een even dikke bodem en een open bovenzijde. Bij een ring kun je de wanddikte of direct de binnendiameter instellen, met optionele afschuining van de buitenranden.
6. Kies 16–128 segmenten en draai/zoom het voorbeeld. De maten en het volume staan eronder.
7. Download **STL** of **3MF**. Beide bevatten hetzelfde ene gesloten object in millimeters.

Voorbeelden: telefoonstandaard (schuin massief blok), plantenpot (holle afgeknotte kegel) en doorvoerring met afschuining.

## Techniek en printen

- [JSCAD / OpenJSCAD](https://github.com/jscad/OpenJSCAD.org), npm `@jscad/modeling` **2.13.0** en `@jscad/io` **2.4.14**: parametrische geometrie en STL/3MF-export.
- [three.js](https://threejs.org/) **0.180.0**: live 3D-voorbeeld en orbit-besturing.
- Alles is MIT-gelicentieerd; de volledige notices staan in `LICENSE-jscad.txt` en `LICENSE-three.txt`. De directe, gesloten driehoeksmeshes worden in `model.js` opgebouwd en met JSCAD geëxporteerd.
- Bundelen gebeurt met esbuild **0.25.10**; de demo zelf heeft geen bundler of netwerk nodig.
- De vorm ligt op Z = 0. Controleer in Snapmaker Orca de support bij schuine bovenvlakken, en kies zelf materiaal, laaghoogte en vulling. Bij een 0,4 mm-spuitmond is 0,8 mm meestal twee lijndiktes.
- **Nog niet getest op een echte Snapmaker U1 of in Snapmaker Orca.** Lokaal zijn alle vier de vormen (massief en hol), binaire STL-opbouw, gesloten randen en 3MF als geldig ZIP-pakket getest.
