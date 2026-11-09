# 13 · QR-maker (3D-print + UV-print)

Typ een link, je wifi-gegevens of een visitekaartje en maak er een QR-code van die je kunt **3D-printen in twee kleuren** (Snapmaker U1) of als **SVG op ware grootte** kunt UV-printen op de xTool O1 of snijden op de xTool C1.

Alles draait in je eigen browser. Er wordt niets geüpload en er zijn geen accounts, API-sleutels of kosten.

## Gebruiken

1. Open de live link: https://tech-demos-henna.vercel.app/13-qr-maker/
2. Kies wat erin moet: **Link/tekst**, **Wi-Fi** (netwerknaam, wachtwoord, beveiliging, verborgen ja/nee) of **Visitekaartje** (naam, telefoon, e-mail, bedrijf, website).
3. Kies een vorm: **Plaatje** (60 × 60 mm), **Onderzetter** (90 mm, rond of vierkant) of **Sleutelhanger** (40 mm met oogje). Pas daarna gerust de maat, plaatdikte, hoogte van de QR, hoekradius en kleuren aan.
4. Kies de **foutcorrectie** (M is standaard; Q/H blijft beter leesbaar als er een krasje op komt) en de **witte rand** om de code.
5. Scan het platte voorbeeld rechts met je telefoon om te testen, en download wat je nodig hebt.

Onder het voorbeeld staat hoe groot één blokje wordt. Is dat kleiner dan ±1 mm, dan wordt printen lastig: maak het groter, kies foutcorrectie L of gebruik minder tekst.

## Snapmaker U1 · twee kleuren (3MF)

1. Klik op **3MF · twee kleuren (U1)** en open het bestand in **Snapmaker Orca**.
2. Je krijgt één object met twee onderdelen: **Plaat** en **QR**. Kies in de objectlijst bij elk onderdeel een eigen filament, bijvoorbeeld wit voor de plaat en zwart voor de QR.
3. Slice en print. Tip: laaghoogte 0,2 mm (of 0,16 mm bij kleine blokjes), plaat plat op het bed.

Liever zelf combineren? Er zijn ook STL-bestanden: **alles** in één, of **alleen plaat** en **alleen QR** los.

## xTool O1 (UV-print) en xTool C1 (snijden) · SVG

- Klik op **SVG op ware grootte**. De maten staan in millimeters, dus in **xTool Studio** komt hij meteen op de juiste grootte binnen.
- De QR is zwart op een doorzichtige achtergrond. Aangrenzende blokjes zijn samengevoegd tot nette vormen; handig voor UV-print en om vinyl te snijden.
- De **rode omtreklijn** is de buitenrand van het plaatje (met gaatje bij de sleutelhanger). Gebruik hem als snijlijn op de C1, of zet het vinkje uit als je alleen de QR wilt.
- UV-print op een donkere ondergrond? Zet in xTool Studio een **witte onderlaag** aan, anders leest je telefoon de code slecht.

## Credits en licenties

- QR-codes: [QR Code generator library](https://github.com/nayuki/QR-Code-generator) van Project Nayuki, **MIT** (zie `LICENSE-qrcodegen.txt`). Meegeleverd als `qrcodegen.js` (gecompileerd van de TypeScript-versie).
- 3D-weergave: [three.js](https://threejs.org), **MIT**, geladen via jsDelivr.
- Plaat, blokjes en de 3MF/STL/SVG-export (`qrmodel.js`) zijn speciaal voor deze demo geschreven.
