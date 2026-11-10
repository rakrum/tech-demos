// Telefoonhouder / tabletstandaard
// Geschreven voor Tech demo 14 (OpenSCAD customizer). Licentie: CC0 1.0 / MIT.
// Ligt op zijn zijkant op het bed: geen support nodig en sterk in de lagen.

/* [Houder] */
// Breedte van de houder (mm)
breedte = 70; // [30:1:160]
// Kijkhoek ten opzichte van verticaal (graden)
hoek = 20; // [5:1:40]
// Dikte van je telefoon met hoesje (mm)
telefoon_dikte = 12; // [6:0.5:25]
// Lengte van de rugsteun (mm)
rug_lengte = 75; // [40:1:140]
// Lengte van de voet (mm)
voet_lengte = 80; // [50:1:150]
// Hoogte van de voorrand (mm)
voorrand = 10; // [5:0.5:25]
// Dikte van de delen (mm)
dikte = 4; // [3:0.5:8]

/* [Hidden] */
$fn = 40;

module staaf(a, b, d) { hull() { translate(a) circle(d = d); translate(b) circle(d = d); } }

module profiel() {
  r = dikte / 2;
  // goot: voorrand bij x=0, achterkant goot bij x = telefoon_dikte + dikte
  bak = telefoon_dikte + dikte;
  top = [bak + sin(hoek) * rug_lengte, dikte + cos(hoek) * rug_lengte];
  union() {
    staaf([r, r], [voet_lengte - r, r], dikte);                  // voet
    staaf([r, r], [r, voorrand], dikte);                          // voorrand
    staaf([bak, r], [top[0], top[1]], dikte);                     // rugsteun
    staaf([voet_lengte - r, r], [bak + sin(hoek) * rug_lengte * 0.55, dikte + cos(hoek) * rug_lengte * 0.55], dikte); // schoor
  }
}

linear_extrude(breedte) profiel();
