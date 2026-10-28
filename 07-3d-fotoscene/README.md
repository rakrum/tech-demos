# 07 · 3D-fotoscènes (Spark)

Een webpagina waarin je **Gaussian splats** bekijkt: 3D-scènes die uit gewone foto's of een video zijn opgebouwd. Je draait er vrij omheen, zoomt in en kunt ze in echte 3D bekijken op je **Rokid AR-bril**. De pagina gebruikt [Spark](https://sparkjs.dev/), een gratis open-source library (MIT) van World Labs, bovenop three.js.

Alles draait in je eigen browser. Je eigen scans worden lokaal geopend en niet geüpload. Er zijn geen accounts, API-sleutels of kosten.

## Gebruiken

1. Open de live link: https://tech-demos-henna.vercel.app/07-3d-fotoscene/
2. Kies een **voorbeeldscène**: robothoofd, pinguïn, vlinder of open haard.
3. **Slepen** draait de scène, **scrollen of knijpen** zoomt en **rechts slepen of met twee vingers slepen** schuift het beeld.
   Met het toetsenbord: `W`/`S` of `↑`/`↓` zoomt, `A`/`D` of `←`/`→` draait en `Q`/`E` kantelt.
4. **Auto-draaien** laat de scène langzaam ronddraaien. **Beeld terug** zet de camera terug in de beginstand.
5. **Kwaliteit**: kies *Zuinig* op de Rokid Station of een telefoon (minder splats, sneller) en *Hoog* op een snelle computer. Op Android staat hij automatisch op Zuinig.

## Je eigen scan bekijken

Sleep een `.ply`-, `.spz`-, `.splat`- of `.ksplat`-bestand op de pagina, of klik op **Bestand kiezen**. Staat de scan op zijn kop? Klik dan op **Omdraaien**.

### Zelf een scan maken met Scaniverse (gratis)

1. Installeer **Scaniverse** (gratis, iPhone en Android) van Niantic.
2. Kies een nieuwe scan in de modus **Splat**. Loop langzaam rond je onderwerp, bijvoorbeeld een 3D-print, je werkplaats of de tuin, en houd het onderwerp in beeld. Zorg voor goed, gelijkmatig licht.
3. Laat de app de scan verwerken. Dat gebeurt op je telefoon zelf.
4. Open de scan en kies **Delen/Exporteren**, daarna **Splat** en dan **PLY** of **SPZ**. SPZ is veel kleiner en laadt sneller.
5. Zet het bestand op je computer of Rokid Station, bijvoorbeeld via AirDrop, Google Drive of een kabel, en sleep het in de demo.

## Rokid AR-bril (3D)

1. Klik op **🕶 Rokid 3D (SBS)**. Het beeld gaat schermvullend en wordt twee keer naast elkaar getekend (*side-by-side*), één keer per oog. De knoppen verdwijnen.
2. Houd de **helderheidsknop op het rechterpootje van je Rokid-bril ±2 seconden ingedrukt**. De bril schakelt dan naar de 3D-stand en je ziet echte diepte.
3. Je kunt blijven draaien en zoomen door te slepen. Met `[` en `]` stel je de oogafstand in en met `X` wissel je links en rechts.
4. Stoppen doe je met `Esc` of door één keer te tikken of te klikken (zonder te slepen). Zet daarna de bril weer terug naar 2D met dezelfde knop.

Instellingen in het paneel, vóór je op de knop drukt:

- **Oogafstand**: standaard 6,3 cm. Meer afstand geeft meer diepte. Wordt het ongemakkelijk, zet hem dan lager.
- **Links/rechts wisselen**: gebruik dit als de diepte "binnenstebuiten" lijkt.
- **Half-SBS / Full-SBS**: *Automatisch* kiest Full-SBS alleen als het scherm zelf al dubbel breed is (3840×1080). Op een gewoon scherm (1920×1080) gebruikt hij Half-SBS. Klopt de verhouding niet, kies dan handmatig.

Dit werkt via de browser op je **Rokid Station 2** en ook met de bril als scherm aan je Mac.

**VR (proef)**: deze knop verschijnt alleen als je browser echte WebXR-VR ondersteunt, bijvoorbeeld op een Quest. Op de Rokid verschijnt hij waarschijnlijk niet.

## Beperkingen

- Nog niet getest op een echte Rokid-bril of de Rokid Station 2. Hoe vlot het daar loopt, moet nog blijken. Begin met *Zuinig* en de kleine voorbeeldscènes.
- Grote eigen scans (honderden MB) kosten veel geheugen en laden langzaam. De demo maakt automatisch een LoD-versie (minder detail op afstand), zodat zwakkere apparaten het aankunnen.
- Werkt in recente versies van Chrome, Edge en Safari (vanaf 16.4) met WebGL2. In Safari op de iPhone werkt schermvullend niet altijd. Dan gebruikt de 3D-stand het hele venster.
- De voorbeeldscènes worden direct van sparkjs.dev geladen (1–4,5 MB per stuk). Daarvoor is internet nodig.

## Credits en licenties

- [Spark](https://github.com/sparkjsdev/spark) 2.4.0 (World Labs), **MIT**, via jsDelivr (`@sparkjsdev/spark`).
- [three.js](https://threejs.org/) 0.180.0, **MIT** (versie volgens de Spark-documentatie), plus OrbitControls.
- Voorbeeldscènes `robot-head.spz`, `penguin.spz`, `butterfly.spz` en `fireplace.spz` komen uit de officiële Spark-voorbeelden en worden live geladen van `https://sparkjs.dev/assets/splats/`, zoals in de Spark-quickstart. Ze staan niet in deze repo. Spark noemt er geen aparte licentie bij.
