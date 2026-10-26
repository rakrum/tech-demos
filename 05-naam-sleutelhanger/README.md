# 05 · Naam-sleutelhanger (Manifold)

Een webpagina waarop je een naam typt en meteen een 3D-sleutelhanger ziet: een plaatje met de naam erop en een gaatje voor de sleutelring. Je kiest de vorm, het lettertype en de maten, en downloadt een printklaar bestand voor je Snapmaker U1: een **3MF met twee kleuren** of een **STL in één kleur**.

Het 3D-rekenwerk doet [Manifold](https://github.com/elalish/manifold), een gratis open-source bibliotheek die altijd een dicht en printbaar model maakt. Alles draait in je eigen browser: geen accounts, geen API-sleutels, geen kosten.

## Gebruiken

1. Open de live link: https://tech-demos-henna.vercel.app/05-naam-sleutelhanger/
2. Typ een naam (standaard staat er **Zehra**).
3. Kies een **lettertype** (Pacifico, Lobster, Lilita One of Titan One) en een **vorm**:
   - **Afgerond**: rechthoekig plaatje met ronde hoeken.
   - **Pil**: langwerpig met ronde uiteinden.
   - **Hart**: een hartje met de naam erin (mooi bij korte namen).
   - **Volgt de letters**: het plaatje volgt de omtrek van de letters.
4. Kies waar het **gaatje** komt (links, boven of geen) en stel de maten bij met de schuifjes: breedte (standaard 55 mm), dikte van het plaatje (3 mm), hoogte van de letters bovenop (1,5 mm) en het gaatje (4 mm).
5. Draai het model met je vinger of muis. Onder het model zie je de afmetingen en of hij **printklaar** is.
6. Klik op **3MF (twee kleuren)** of **STL (één kleur)**.

## Printen op de Snapmaker U1

1. Open de **3MF** in **Snapmaker Orca** (of OrcaSlicer). Vraagt hij of het één object met meerdere delen is, kies dan **Ja**.
2. Je ziet twee onderdelen: **Basis** en **Letters**. Geef elk onderdeel een eigen filament, bijvoorbeeld wit en roze.
3. Het plaatje ligt al plat. Kies PLA, 0,2 mm laaghoogte en 15–20 % vulling. Steun is niet nodig.
4. Slicen en printen. De U1 wisselt zelf van kleur.

Liever één kleur? Neem de **STL**: dat is één stevig geheel. Wil je toch twee kleuren op een printer met één kop, laat hem dan pauzeren op de hoogte waar de letters beginnen (standaard 3 mm) en wissel daar van filament.

## Beperkingen

- De demo heeft internet nodig om Manifold, three.js en de lettertypes te laden (via jsDelivr). Daarna gebeurt alles op je eigen apparaat.
- Erg lange namen worden smal en laag. Bij **Hart** worden de letters snel klein; maak de sleutelhanger dan breder of kies een andere vorm.
- Bij heel dunne letters (vooral in de sierlijke lettertypes en bij een kleine breedte) kan een printer met een 0,4 mm-spuitmond fijne details missen. 50–60 mm breed werkt goed.
- Alleen tekens die in het gekozen lettertype zitten komen op het plaatje (letters, cijfers, accenten). Emoji werken niet.
- Het 3MF-bestand is getest op een geldige opbouw (twee aparte onderdelen, elk waterdicht), maar niet in Snapmaker Orca zelf geopend.

## Credits en licenties

- [Manifold](https://github.com/elalish/manifold) van Emmett Lalish e.a., **Apache-2.0** (npm-pakket `manifold-3d` 3.5.4, geladen via jsDelivr).
- [opentype.js](https://github.com/opentypejs/opentype.js), **MIT**, om de letters uit het lettertype te halen.
- [three.js](https://threejs.org), **MIT**, voor de 3D-weergave.
- Lettertypes, alle onder de **SIL Open Font License 1.1** (via [Google Fonts](https://github.com/google/fonts)): Pacifico (Vernon Adams e.a.), Lobster (Pablo Impallari), Lilita One (Juan Montoreano) en Titan One (Rodrigo Fuenzalida).
- `keychain.js` (de vorm en de export naar STL/3MF) is voor deze demo geschreven.
