# 10 · Stickermaker met snijlijn (Clipper2)

Een webpagina die van een plaatje met een **doorzichtige achtergrond** een **sticker** maakt. De pagina zoekt de rand van je plaatje, legt er een **witte rand** omheen (standaard 3 mm) en tekent daaromheen een **rode snijlijn**. Alles op ware grootte in millimeters: printen op de **xTool O1** (UV-printer), snijden op de **xTool C1** (mesjes, geen laser).

Het rekenwerk voor de rand gebeurt met [Clipper2](https://github.com/AngusJohnson/Clipper2), een gratis open-source library, via de browserversie [Clipper2-WASM](https://github.com/ErikSom/Clipper2-WASM) (Boost Software License 1.0). Alles draait in je eigen browser. Er wordt niets geüpload, en er zijn geen accounts, API-sleutels of kosten.

## Gebruiken

1. Open de live link: https://tech-demos-henna.vercel.app/10-sticker-snijlijn/
2. Sleep een **PNG** of **WebP** met een doorzichtige achtergrond in het vak, of klik op een **voorbeeld** (raket of smiley).
   - Heb je een **JPG** met een witte achtergrond? Zet dan **Witte achtergrond doorzichtig maken** aan. Standaard haalt hij alleen het wit weg dat aan de rand vastzit, zodat wit binnenin je plaatje blijft.
   - Tip: haal eerst de achtergrond van een foto weg met [demo 04](../04-background-cutout/).
3. Kies de **breedte** van de sticker (standaard 60 mm, dat is de buitenmaat van de snijlijn) en de **witte rand** (standaard 3 mm).
4. Met **Gladheid** rond je smalle inhammen af, zodat het mesje makkelijker snijdt.
5. **Eén snijlijn** (staat standaard aan) voegt losse stukjes, zoals sterretjes naast je plaatje, samen tot één sticker en maakt gaten dicht.
6. Wil je er meer tegelijk? Zet **Vel vullen** aan en kies A4 of de C1-snijmat (12 × 12 inch). Eventueel met zwarte **uitlijnmerkjes** in drie hoeken.
7. Download wat je nodig hebt.

## Wat je krijgt

| Knop | Bestand | Waarvoor |
|------|---------|----------|
| Sticker-SVG | `sticker-…mm.svg` | Alles in één: groep **print** (witte vorm + je plaatje) en groep **snijlijn** (rood `#ff0000`, geen vulling, 0,1 mm dik). |
| Alleen print (SVG) | `…-print.svg` | Alleen de groep **print**, voor de O1. |
| Alleen print (PNG) | `…-print-300dpi.png` | Hetzelfde als plaatje, 300 dpi, doorzichtig om de sticker heen. |
| Alleen snijlijn (SVG) | `…-snijlijn.svg` | Alleen de rode lijn, voor de C1. |
| Alleen snijlijn (DXF) | `…-snijlijn.dxf` | De snijlijn als DXF in mm, laag `SNIJLIJN`. |

Alle bestanden hebben dezelfde maat en hetzelfde nulpunt, dus print en snijlijn passen precies op elkaar. Om de snijlijn zit 1 mm extra ruimte (bij de vel-modus is het bestand zo groot als het vel).

## Printen en snijden

1. **Printen op de O1:** open de Sticker-SVG (of Alleen print) in xTool Studio en print op stickervinyl of stickerpapier. De witte vorm is bedoeld als witte onderlaag. Zet de rode lijn uit (niet printen).
2. **Snijden op de C1:** leg het geprinte vel op de snijmat, open **Alleen snijlijn** en zet de rode lijn op **Snijden**, zo dat het mesje alleen door het vinyl gaat (kiss-cut) en niet door het rugpapier.
3. **Uitlijnen:** of xTool Studio de print van de O1 en de snede van de C1 automatisch op elkaar kan uitlijnen (print-then-cut), is **nog niet bevestigd**. Ga er voorlopig van uit dat je dat met de hand doet: leg het vel steeds op dezelfde plek, snijd eerst één proefsticker en neem liever een wat ruimere witte rand (3–4 mm).

## Goed om te weten

- **Nog niet getest op een echte O1 of C1.** De bestanden zijn op mijn computer gecontroleerd: de snijlijn is één gesloten lijn rond het hele plaatje, op 3 mm afstand (gemeten: 2,98 mm, de rest is afronding van pixels), en de DXF opent zonder fouten.
- Ingesloten plaatjes worden maximaal 600 dpi op ware grootte; bij een vel staat het plaatje er per sticker in, dus een vol vel kan een paar MB worden.
- Het herkennen van de rand werkt op de doorzichtigheid (alfa) van je plaatje. Halfdoorzichtige randjes of schaduwen stel je bij met **Meer instellingen → alfa-drempel**.

## Gemaakt met

- [Clipper2](https://github.com/AngusJohnson/Clipper2) van Angus Johnson, via [Clipper2-WASM](https://github.com/ErikSom/Clipper2-WASM) 0.4.0 van Erik Sombroek (npm `clipper2-wasm`). Licentie: Boost Software License 1.0, zie `LICENSE-clipper2.txt`. De bestanden `clipper2z.js` en `clipper2z.wasm` staan in deze map.
- De rand van het plaatje zoeken (marching squares), de DXF en de PNG maakt de pagina zelf.
- De voorbeeldplaatjes (raket en smiley) zijn zelf getekend met een script; vrij te gebruiken.
