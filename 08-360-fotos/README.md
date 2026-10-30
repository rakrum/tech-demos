# 08 · 360°-foto's (Photo Sphere Viewer)

Een webpagina waarin je **360°-foto's** bekijkt alsof je er zelf staat. Je kijkt rond met de muis, met je vinger of door je telefoon te bewegen. Je kunt infopunten in de foto zetten, een kleine rondleiding lopen en het beeld side-by-side tonen voor je **Rokid AR-bril**. De pagina gebruikt [Photo Sphere Viewer](https://photo-sphere-viewer.js.org/), een gratis open-source library (MIT) van Damien Sorel.

Alles draait in je eigen browser. Je eigen foto's worden lokaal geopend en niet geüpload. Er zijn geen accounts, API-sleutels of kosten.

## Gebruiken

1. Open de live link: https://tech-demos-henna.vercel.app/08-360-fotos/
2. **Slepen** = rondkijken, **scrollen of knijpen** = zoomen. Onderin staan ook knoppen om te zoomen en te draaien, plus een knop voor **volledig scherm**.
3. **Auto-draaien** laat het beeld langzaam ronddraaien.
4. Met **–** rechtsboven in het paneel klap je het paneel in, zodat je meer van de foto ziet.

## Mini-rondleiding

Er zijn vier voorbeeldfoto's die aan elkaar gekoppeld zijn: **Werkplaats → Werkbank → Atelier → Berlijn (buiten)**. Klik op een **pijl op de grond** in de foto om naar de volgende plek te lopen, of kies een plek met de knoppen in het paneel.

## Infopunten

- De blauwe **i**-punten staan al in de voorbeeldfoto's. Ga er met de muis op staan voor een korte tekst, of klik erop voor meer uitleg.
- Zelf een punt plaatsen: klik op **➕ Infopunt plaatsen**, klik daarna op een plek in de foto, typ een korte tekst en klik op **Opslaan**. Je eigen punten zijn roze met een ★.
- Je punten worden **in deze browser bewaard** (ook na herladen), per foto. Klik op je eigen punt en kies **Dit punt verwijderen**, of wis alles op die foto met **🗑 Mijn punten wissen**.
- De punten staan alleen op jouw apparaat. Op een andere computer of browser zie je ze niet.

## Je eigen 360°-foto bekijken

Sleep een 360°-foto op de pagina, of klik op **📂 Foto kiezen**. Het moet een "equirectangular" foto zijn: een platte JPG die twee keer zo breed is als hoog (bijvoorbeeld 5760×2880). Die maakt je 360-camera meestal zelf. Bij Insta360 of een vergelijkbare camera kies je in de app **Exporteren → 360°-foto** (geen "plat"/reframed beeld). Je foto komt in de lijst als **📷 Eigen foto** en er verschijnt een pijl naar je foto in de Werkplaats. Ook op je eigen foto kun je infopunten zetten. Hele grote foto's worden automatisch verkleind tot wat je apparaat aankan.

## Rondkijken met je telefoon

Open de link op je telefoon en tik op **📱 Bewegingssensor**. Beweeg je telefoon om rond te kijken. Op een **iPhone** vraagt Safari eerst om toestemming voor "Beweging en oriëntatie"; kies dan **Sta toe**. Nog een keer tikken zet de sensor weer uit.

## Rokid AR-bril (3D)

1. Klik op **🕶 Rokid 3D (SBS)**. Het beeld gaat schermvullend en wordt twee keer naast elkaar getekend (*side-by-side*), één keer per oog. De knoppen, pijlen en infopunten verdwijnen in deze stand.
2. Houd de **helderheidsknop op het rechterpootje van je Rokid-bril ±2 seconden ingedrukt**. De bril schakelt dan naar de 3D-stand (half-SBS, 960×1080 per oog) en de twee helften vallen samen tot één groot beeld.
3. Slepen = rondkijken. Met `N` of `P` ga je naar de volgende of vorige foto.
4. Stoppen doe je met `Esc` of door één keer te tikken of te klikken (zonder te slepen). Zet daarna de bril weer terug naar 2D met dezelfde knop.

Een 360°-foto is zelf plat (beide ogen zien hetzelfde), dus je krijgt geen extra diepte zoals bij demo 07. Wel zie je de foto groot en scherp per oog, alsof je erin staat.

**Half-SBS / Full-SBS**: *Automatisch* kiest Full-SBS alleen als het scherm zelf al dubbel breed is (3840×1080). Op een gewoon scherm (1920×1080) gebruikt hij Half-SBS. Klopt de verhouding niet (alles te smal of te breed), kies dan handmatig in het keuzemenu vóór je op de knop drukt.

## Beperkingen

- **Nog niet getest op een echte Rokid-bril of de Rokid Station 2**, en ook niet op een echte telefoon met bewegingssensor. De 3D-stand is getest in een gewone browser (twee helften naast elkaar).
- Nog niet getest met een echte foto van je 360-camera (wel met een zelfgemaakte testfoto van 4000×2000).
- In Safari op de iPhone werkt echt schermvullend niet altijd. Dan gebruikt de viewer het hele venster.
- De voorbeeldfoto's zijn verkleind naar 4096×2048 (1–1,5 MB per stuk), zodat ze ook op een telefoon of de Rokid Station vlot laden.

## Credits en licenties

- [Photo Sphere Viewer](https://github.com/mistic100/Photo-Sphere-Viewer) 5.15.1 (Damien Sorel), **MIT**, via jsDelivr: core, markers-plugin, virtual-tour-plugin en gyroscope-plugin.
- [three.js](https://threejs.org/) 0.185.1, **MIT** (versie die Photo Sphere Viewer 5.15.1 vraagt).
- Voorbeeldfoto's van [Poly Haven](https://polyhaven.com/), alle **CC0** (publiek domein, vrij te gebruiken), verkleind naar 4096×2048:
  - `werkplaats.jpg`: [Carpentry Shop 01](https://polyhaven.com/a/carpentry_shop_01), Greg Zaal
  - `werkbank.jpg`: [Carpentry Shop 02](https://polyhaven.com/a/carpentry_shop_02), Greg Zaal
  - `atelier.jpg`: [Artist Workshop](https://polyhaven.com/a/artist_workshop), Oliksiy Yakovlyev
  - `berlijn.jpg`: [Rotes Rathaus](https://polyhaven.com/a/rotes_rathaus), Alexander Scholten
- De twee ruimtes van de timmerwerkplaats horen bij elkaar. Het atelier en Berlijn zijn losse plekken, die voor de rondleiding aan elkaar zijn gekoppeld.
