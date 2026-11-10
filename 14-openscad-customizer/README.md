# 14 · OpenSCAD customizer (aanpasbare 3D-modellen in je browser)

Open een aanpasbaar **OpenSCAD-model** (`.scad`), schuif aan de maten en teksten, bekijk het meteen in 3D en download een printklare **STL** of **3MF** voor de Snapmaker U1.

Het echte OpenSCAD draait hier in je browser (WebAssembly, met de snelle Manifold-motor). Er wordt niets geüpload en er zijn geen accounts, API-sleutels of kosten.

## Gebruiken

1. Open de live link: https://tech-demos-henna.vercel.app/14-openscad-customizer/
2. Kies een **voorbeeld** of **sleep een `.scad`-bestand** in het vak (klikken om te kiezen mag ook). Hoort er een eigen include-bestand bij, sleep die dan tegelijk mee.
3. Onder **Pas aan** verschijnen de schuifjes, keuzelijsten, vinkjes en tekstvakken van het model, met de namen die de maker zelf heeft gekozen, gegroepeerd per tabblad. Een blauw bolletje betekent: gewijzigd. **Standaard** zet alles terug.
4. Met **Automatisch renderen** aan zie je elke wijziging na een halve seconde in 3D. Bij zware modellen zet je dat uit en klik je zelf op **Renderen**. **Stop** breekt een lange berekening af.
5. Onder het 3D-beeld staan de maten (breedte × diepte × hoogte in mm) en of de mesh gesloten is.
6. Download **3MF (U1)** of **STL**. De bestandsnaam bevat de modelnaam en je gewijzigde waarden, bijvoorbeeld `naamlabel_naam-Jarvis.3mf`. Met **Download .scad met jouw waarden** bewaar je het model met jouw instellingen.
7. Onder **Code** kun je de OpenSCAD-code zelf bekijken en aanpassen. De parameters worden daarna vanzelf opnieuw gelezen.

Een **2D-model** (bijvoorbeeld alleen `square()` of `text()`, zonder `linear_extrude`) wordt herkend. Je krijgt dan een **SVG in mm** voor de xTool O1 of C1.

## Voorbeelden (zelf geschreven, CC0/MIT)

| Bestand | Wat | Tips |
|---|---|---|
| `fidget-spinner.scad` | Print-in-place fidget spinner. De naaf heeft een ruitvormige rand die in een groef van de body valt. | Speling staat op 0,35 mm. Draai hem na het printen even los. Met *Gat in elke arm* maak je ruimte voor een muntje als gewicht. |
| `doosje-met-deksel.scad` | Doosje met opsteekdeksel en tekst op het deksel (gegraveerd of verhoogd). | Je stelt de binnenmaten in. Het deksel ligt ondersteboven naast de doos, zodat de bovenkant glad wordt. Speling 0,25 mm. |
| `naamlabel.scad` | Naamlabel of sleutelhanger. De plaat groeit vanzelf mee met de tekst. | Stijl *verhoogd* (letters erop) of *uitgesneden* (letters erin). Wissel bij de verhoogde stijl van filament op de laag waar de letters beginnen, voor twee kleuren. |
| `telefoonhouder.scad` | Standaard voor je telefoon of tablet met instelbare hoek en goot. | Hij ligt op zijn zijkant op het bed. Zo heb je geen support nodig en wordt hij sterk. Na het printen zet je hem rechtop. |

## Waar vind ik meer modellen?

- **Printables**: zoek op *customizable* of *OpenSCAD*, of kijk bij modellen met het label *Customizable*. Download het `.scad`-bestand onder *Files*.
- **Thingiverse**: zoek op *customizer* of *customizable*. Bij een "Customizable" model staat het `.scad`-bestand bij de downloads.
- De bibliotheken **MCAD** en **BOSL2** zitten erin, dus modellen met `use <MCAD/...>` of `include <BOSL2/std.scad>` werken ook. Andere bibliotheken (bijvoorbeeld NopSCADlib of BOSL v1) zitten er niet in.
- Lettertypes: **Liberation Sans**, **Liberation Serif** en **Liberation Mono** (normaal en vet, Sans ook cursief). Vraagt een model een ander lettertype, dan geeft de pagina een waarschuwing. Kies dan een Liberation-lettertype in de parameters.

**Let op de licentie:** elk model van een ander heeft zijn eigen licentie (vaak CC BY, CC BY-NC of GPL). Kijk op de modelpagina of je prints mag verkopen, bijvoorbeeld in de webshop. NC betekent: niet commercieel.

## Printen op de Snapmaker U1

1. Download **3MF (U1)** en open het in **Snapmaker Orca** (STL kan ook).
2. Het model staat al plat op het bed (z = 0). Bij de telefoonhouder ligt de zijkant op het bed, dat is de bedoeling.
3. **Print-in-place spinner**: gebruik PLA, laaghoogte 0,2 mm, geen support, en zet *elephant foot compensation* aan (± 0,1-0,2 mm) zodat de onderste laag niet vastsmelt. Zit hij na het printen vast, draai dan stevig aan de naaf. Gaat het dan nog niet, zet de speling op 0,4 mm.
4. **Doosje**: zit het deksel te strak of te los, verander dan de *speling* in stappen van 0,05 mm.
5. Wil je meerdere kleuren, kies dan in Orca per object een filament. Bij tekst kun je ook op een bepaalde laag van filament wisselen.

## Beperkingen

- De eerste keer wordt OpenSCAD geladen (± 3 MB ingepakt, 9,6 MB uitgepakt). Daarna komt het uit de cache van je browser.
- Eenvoudige modellen zijn in een fractie van een seconde klaar. Zware modellen, met veel `minkowski()`, hoge `$fn` of grote BOSL2-modellen, kunnen tientallen seconden of langer duren. Je browser heeft ongeveer 2-4 GB geheugen voor de berekening. Bij heel zware modellen kan het mislukken.
- De 3MF heeft één kleur en één object. `color()` uit het model wordt niet meegenomen in de 3MF.
- `import()` van STL/SVG/DXF werkt alleen als je die bestanden tegelijk met het `.scad`-bestand insleept.
- Animatie (`$t`), de preview-modus (`%` en `#`) en de parametersets in JSON van Thingiverse worden niet gebruikt. De standaardwaarden uit het `.scad`-bestand gelden.

## Credits en licenties

- **OpenSCAD** (https://openscad.org): **GPL-2.0** (zie `LICENSE-openscad-GPL-2.txt`). De WebAssembly-build (`openscad/openscad.js` + `openscad/openscad.wasm.gz`, de wasm gzip-ingepakt, OpenSCAD 2025.03-ontwikkelversie met Manifold) komt uit het npm-pakket [openscad-playground 2.4.0](https://github.com/openscad/openscad-playground) (GPL-2.0-or-later). De broncode staat op https://github.com/openscad/openscad en https://github.com/openscad/openscad-wasm.
- **Liberation-lettertypes**: SIL Open Font License 1.1 (zie `fonts/LICENSE-Liberation-fonts.txt`).
- **MCAD**: LGPL-2.1 (zie `libraries/LICENSE-MCAD-LGPL-2.1.txt`). **BOSL2**: BSD-2-Clause (zie `libraries/LICENSE-BOSL2.txt`). Ze zitten in `libraries/` als zip, en de pagina pakt ze alleen uit als een model ze gebruikt (met [fflate](https://github.com/101arrowz/fflate), MIT, via jsDelivr).
- 3D-weergave: [three.js](https://threejs.org), **MIT**, via jsDelivr.
- De code van deze demo (`index.html`, `app.js`, `worker.js`, `mesh.js`) en de voorbeeldmodellen in `voorbeelden/` zijn zelf geschreven: **CC0 1.0 of MIT** (zie `voorbeelden/LICENSE-voorbeelden.txt`).
