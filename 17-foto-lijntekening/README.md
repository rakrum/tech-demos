# 17 · Foto naar lijntekening

Een webpagina waar je een foto in sleept (of het meegeleverde voorbeeld gebruikt). De demo zet hem om in een tekening van **losse pennenstreken**: eerst de randen, daarna optioneel arcering in de donkere delen. Met schuifjes kies je het detail, de randdrempel, de arcering, de minimale lijnlengte, de vereenvoudiging en de breedte in millimeters. Je krijgt een **SVG op ware grootte**.

Dat is handig voor de **foliepen** of **tekenpen** van de xTool C1, of om te **lijngraveren** op de O1. Die pennen en de graveerstand volgen een lijn. Een gewone foto of een gevulde tekening heeft vlakken en omtrekken; deze export bestaat alleen uit open lijnen, zonder vulling, zodat de pen niet twee keer om elke vorm heen gaat.

Alles draait in je eigen browser. Je foto wordt niet geüpload en er zijn geen accounts, API-sleutels of kosten.

## Gebruiken

1. Open de live link: https://tech-demos-henna.vercel.app/17-foto-lijntekening/
2. Klik op **Probeer het voorbeeld**, of kies/sleep je eigen JPG of PNG.
3. Schuif aan de instellingen tot het voorbeeld er goed uitziet. Rechts zie je meteen het resultaat, plus het aantal lijnen, de totale lijnlengte en de afmeting in mm.
4. Klik op **SVG op ware grootte**.

## In xTool Creative Space

1. Importeer of open het SVG-bestand.
2. Controleer of de grootte in **millimeters** overeenkomt met de afmeting in de demo (breedte × hoogte). De SVG heeft `width`/`height` in mm en een bijpassende `viewBox`.
3. Zet de zwarte lijnen op de **foliepen** of **tekenpen** (C1), of op **lijngraveren** (O1). Gebruik geen vulmodus: er is niets te vullen, alleen lijnen.

Het is nog niet op een echte C1 of O1 getest. Controleer daarom de maat in Creative Space voordat je start, en doe eerst een proefje op restmateriaal.

## Tips

- **Portretten met goed contrast** werken het best: een duidelijk gezicht of een huisdier, liefst tegen een rustige achtergrond.
- **Minder lijnen** betekent een kortere bewerking. Zet de arcering uit of de dichtheid lager als je vooral de omtrek wilt, of haal de minimale lijnlengte iets omhoog om krasjes weg te laten.
- Een donkere of drukke achtergrond geeft veel arcering. Knip de foto eerst bij, of haal de achtergrond weg (bijvoorbeeld met demo 04).
- Grote foto's (bijvoorbeeld 2000 px) worden intern verkleind tot de gekozen detailstand, zodat je browser het aankan.

## Goed om te weten

- De lijndikte in het bestand is **0,2 mm**. Hoe dik de lijn in het echt wordt, hangt af van je pen, folie of graveerinstelling.
- Kleur wordt genegeerd: de omzetting werkt in grijswaarden.
- Tekst op een foto komt meestal niet als nette letters uit de bus; gebruik daarvoor de [enkellijns-tekstmaker](../16-enkellijns-tekst/).
- Heel fijne details kunnen verdwijnen, vooral bij een lagere detailstand of sterkere vereenvoudiging.
- Dit is geen 1-op-1-kopie van het oorspronkelijke Python-programma linedraw (dat gebruikt OpenCV). De aanpak — randen plus arcering — is hetzelfde, maar de uitvoering is voor de browser herschreven.

## Gemaakt met

- Ideeën uit [linedraw](https://github.com/LingDong-/linedraw) van Lingdong Huang, **MIT** (zie `LICENSE-linedraw.txt`).
- Randdetectie (Canny-achtig), lijnvolging, vereenvoudiging (Ramer–Douglas–Peucker) en arcering onder twee hoeken zijn voor deze demo in JavaScript geschreven (`linedraw.js`).
- Voorbeeldfoto `voorbeeld-meisje.jpg`: Johannes Vermeer, *Meisje met de parel* (ca. 1665), **publiek domein**, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Meisje_met_de_parel.jpg). Verkleind voor de demo.
