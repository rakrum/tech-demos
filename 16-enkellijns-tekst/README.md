# 16 · Enkellijns-tekstmaker (Hershey)

Typ een naam, een cadeaulabel of een kersttekst en krijg **letters van één enkele lijn** als **SVG op ware grootte** in millimeters. Die open je in **xTool Creative Space**: met de **foliepen** of **tekenpen** van de **xTool C1**, of om te **lijngraveren** op de **xTool O1**.

Gewone computerletters bestaan uit een omtrek. Een foliepen, tekenpen of lijngravering volgt die omtrek en je krijgt **dubbele randen** (holle letters). Deze letters zijn gemaakt als één trek: de pen schrijft ze zoals je zelf zou schrijven.

Alles draait in je eigen browser. Er wordt niets geüpload en er zijn geen accounts, API-sleutels of kosten.

## Gebruiken

1. Open de live link: https://tech-demos-henna.vercel.app/16-enkellijns-tekst/
2. Typ je tekst. Je mag meerdere regels gebruiken, bijvoorbeeld een wens en een naam.
3. Kies een **lettertype**. Er zijn schreefloze letters, letters met schreef, schoonschrift en een gotische variant. Allemaal enkellijns (Hershey-graveerletters).
4. Stel de **letterhoogte** in millimeters in (de hoogte van een hoofdletter zoals de H). Pas zo nodig de **letterspatiëring** (extra ruimte tussen letters) en de **regelafstand** aan, en kies **links**, **midden** of **rechts**.
5. Optioneel: zet **Dun kader meenemen** aan voor een dunne rode rechthoek om de tekst. Standaard staat dit uit.
6. Rechts zie je een live voorbeeld en de **afmeting in mm**. Klik op **SVG op ware grootte**.

## In xTool Creative Space

1. Importeer of open het SVG-bestand.
2. Controleer of de grootte in **millimeters** overeenkomt met de afmeting in de demo (breedte × hoogte). De SVG heeft `width`/`height` in mm en een bijpassende `viewBox`.
3. Zet de zwarte lijnen op de **foliepen** of **tekenpen** (C1), of op **lijngraveren** (O1). Gebruik geen vulmodus: er is niets te vullen, alleen lijnen.
4. Als je het rode kader hebt meegenomen, kun je die lijn apart instellen (bijvoorbeeld als snijlijn) of verwijderen.

Het is nog niet op een echte C1 of O1 getest. Controleer daarom de maat in Creative Space voordat je start, en doe eerst een proefje op restmateriaal.

## Goed om te weten

- De letters dekken vooral **basis-Latin** (A–Z, a–z, cijfers en leestekens zoals `! ? . ,`). Veelgebruikte accenten in het Nederlands, zoals **é** en **ë**, worden samengesteld uit de basisletter plus een extra streepje. Tekens die het lettertype niet kent, worden overgeslagen; de pagina meldt welke dat zijn.
- Schoonschrift loopt soms iets uit buiten de letterbreedte (krullen); de afmeting volgt de echte lijn, niet alleen de stapafstand.
- De lijndikte in het bestand is **0,2 mm**. Hoe dik de lijn in het echt wordt, hangt af van je pen, folie of graveerinstelling.
- Dit is geen handschrift-nabootsing met drukverschil, en je kunt letters niet achteraf per stuk verschuiven.

## Gemaakt met

- [hersheytextjs](https://github.com/techninja/hersheytextjs) van James Todd (techninja), **MIT** (zie `LICENSE-hersheytextjs.txt`). De JSON met padgegevens is meegeleverd als `hersheytext.min.json`.
- De oorspronkelijke **Hershey-graveerletters** van Dr. A. V. Hershey zijn **publiek domein**.
- Layout en SVG-export (`hershey.js`) zijn voor deze demo geschreven.
