# 15 · Papercraft-vouwer: van 3D-model naar bouwplaat voor de xTool C1

Een webpagina die een **low-poly 3D-model** omzet in een **bouwplaat** (uitslag) van papier of karton. Je krijgt een **SVG** of **DXF** op ware grootte in millimeters, die je in **xTool Studio** opent en met de **xTool C1** snijdt: **rood = snijden**, **blauw = rillen (vouwen)**. Op de naden komen lijmlipjes en nummers, zodat je weet welke randen bij elkaar horen.

Alles draait in je eigen browser. Er wordt niets geüpload en er zijn geen accounts, API-sleutels of kosten.

## Gebruiken

1. Open de live link: https://tech-demos-henna.vercel.app/15-papercraft-vouwer/
2. Kies een **voorbeeld** (kubus, 3D-ster, kerstboom, huisje of kerstbal) of **sleep je eigen model** in het vak: `.stl` (ASCII of binair), `.obj`, `.glb` of `.gltf`. Klikken om een bestand te kiezen mag ook.
3. Vul de **grootste maat** in mm in. Het model wordt zo geschaald dat de langste kant precies zo groot wordt.
4. Kies het **vel**: A4, A3, de C1-mat (305 × 305 mm) of de lange C1-mat (305 × 610 mm), en de **marge** rondom.
5. Bekijk het resultaat. Links draait het model in 3D (rood = snijnaad, blauw = vouw). Daaronder staan de vellen met alle stukken.
6. Niet tevreden met de indeling? Klik op **🔀 Herschik** voor een andere verdeling.
7. Klik op **SVG downloaden** of **DXF downloaden**. Bij meer vellen krijg je een zip met één bestand per vel. Elk vel heeft ook eigen knopjes.

### Wat de pagina doet

- **Vlakken samenvoegen:** driehoeken die (bijna) in één vlak liggen worden één vlak. Een kubus wordt dus 6 vierkanten in plaats van 12 driehoeken. De tolerantie (standaard 1°) stel je zelf in.
- **Uitvouwen:** de vlakken worden één voor één plat naast elkaar gelegd, het liefst langs de langste randen. Zou een vlak over een ander vlak vallen, of past het stuk niet meer op het vel, dan begint er een nieuw stuk.
- **Lijmlipjes:** op elke snijnaad komt aan één kant een schuin lipje (standaard 6 mm). Past het niet, dan wordt het kleiner; lukt het helemaal niet, dan meldt de pagina dat.
- **Nummers:** beide kanten van een naad krijgen hetzelfde nummer, in een aparte zwarte laag voor de pen. Het streepje onder elk nummer laat zien wat onder is (handig bij 6 en 9). Je kunt de nummers ook uitzetten.
- **Kleurlaag (optioneel):** heeft je GLB of OBJ kleuren (vertexkleuren of materiaalkleuren), dan worden de vlakken daarmee gevuld. Anders kies je zelf één kleur. Die laag is voor **eerst printen, dan snijden**. De kleur loopt 0,5 mm over de snijlijn heen, zodat er geen wit randje blijft.

## Snijden op de xTool C1

1. Open de SVG in **xTool Studio**. Het bestand staat al op ware grootte in millimeters (100 mm in het model is 100 mm in de SVG).
2. De lagen hebben namen: `cut` (rood), `score` (blauw, met `score-berg` en `score-dal`), `tekst` (zwart) en eventueel `kleur`.
3. Zet **rood** op **Snijden** met het mesje en **blauw** op **Rillen** (of Pen als je geen rilpunt hebt). Zet **zwart** op **Pen**, of verwijder die laag.
4. In de DXF heten de lagen `CUT`, `SCORE` en `TEXT` (eenheid mm).
5. Gebruik karton van **160–250 g/m²** op de LightGrip-mat. Dunner papier wordt slap, dikker karton vouwt lastig.
6. Vouw de **bergvouwen** van je af en de **dalvouwen** naar je toe, gezien vanaf de bedrukte buitenkant. Op het scherm is een bergvouw gestreept en een dalvouw streep-punt.
7. Lijm elk lipje onder de rand met hetzelfde nummer. Begin met het grootste stuk.

## Tips

- **Low-poly werkt het best:** tot ongeveer 100 vlakken is goed te doen. Boven de 300 vlakken waarschuwt de pagina. Maak het model dan simpeler: in **Tripo** met een low-poly instelling, of in **Blender** met de modifier **Decimate** (Collapse of Planar).
- Een **kerstbal**, **ster** of **huisje** van 80–120 mm is een mooi eerste project.
- Het model mag open zijn (geen gesloten vorm); open randen worden gewoon snijlijnen.
- Een `.gltf` met een los `.bin`-bestand: sleep beide tegelijk in het vak, of gebruik een `.glb`.

## Goed om te weten

- Nog niet getest op een echte C1 of in xTool Studio. De bestanden zijn op mijn computer gecontroleerd: geen overlap tussen de stukken, alle stukken binnen de marge, en de randen in de SVG zijn op 0,001 mm na even lang als in het 3D-model.
- Texturen (afbeeldingen op het model) worden niet overgenomen, alleen kleuren per vlak.
- De pagina kiest zelf waar de naden komen. Wil je zelf naden kiezen of stukken verschuiven, gebruik dan het echte Papercraft-programma (zie hieronder).

## Gemaakt met

- Eigen code (`papercraft.js`), geïnspireerd door **[Papercraft](https://github.com/rodrigorc/papercraft)** van Rodrigo Rivas Costa (GPL-3.0). Er is geen code uit dat project overgenomen. Papercraft zelf is een gratis desktopprogramma met veel meer mogelijkheden: zelf naden kiezen, stukken verschuiven en printen met texturen.
- [three.js](https://threejs.org) 0.180.0 (MIT): de 3D-weergave en het inlezen van STL, OBJ en GLB/GLTF, geladen via jsDelivr.
- De voorbeeldmodellen worden in de code zelf gemaakt (CC0).
