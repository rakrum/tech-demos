// Print-in-place fidget spinner
// Geschreven voor Tech demo 14 (OpenSCAD customizer). Licentie: CC0 1.0 / MIT.
// Het lager zit erin geprint: de naaf heeft een ruitvormige rand die in een
// groef van de body valt. Na het printen even losdraaien en hij draait.

/* [Vorm] */
// Aantal armen
armen = 3; // [2:1:6]
// Afstand van het midden tot het midden van een arm (mm)
arm_afstand = 22; // [15:0.5:35]
// Straal van de ronde armkop (mm)
arm_straal = 11; // [7:0.5:16]
// Dikte van de spinner (mm)
hoogte = 8; // [6:0.5:14]
// Gat in elke arm voor een gewichtje, bv. een muntje (0 = geen gat, mm)
gewicht_gat = 0; // [0:0.5:24]

/* [Lager] */
// Straal van de naaf/as (mm)
naaf_straal = 7; // [5:0.5:10]
// Hoe ver de ruitrand uitsteekt (mm)
rand = 2; // [1:0.25:3]
// Speling tussen naaf en body (mm); 0.35-0.4 werkt goed op de U1
speling = 0.35; // [0.2:0.05:0.6]
// Kuiltje voor je vinger in de naaf
vingerkuil = true;

/* [Hidden] */
$fn = 96;
eps = 0.01;

// 2D-profiel van de naaf (x = straal, y = hoogte)
module naaf_profiel(extra = 0) {
  h = hoogte;
  polygon([
    [0, -extra], [naaf_straal, -extra],
    [naaf_straal, h/2 - rand], [naaf_straal + rand, h/2],
    [naaf_straal, h/2 + rand], [naaf_straal, h + extra], [0, h + extra]
  ]);
}

module body2d() {
  kern = naaf_straal + rand + 4;
  union() {
    circle(r = kern);
    for (i = [0 : armen - 1]) rotate(i * 360 / armen)
      hull() { circle(r = kern * 0.8); translate([arm_afstand, 0]) circle(r = arm_straal); }
  }
}

module body() {
  difference() {
    linear_extrude(hoogte) body2d();
    // holte = naafprofiel + speling rondom
    rotate_extrude() intersection() {
      offset(delta = speling) naaf_profiel(1);
      translate([0, -2]) square([naaf_straal + rand + speling + 1, hoogte + 4]);
    }
    if (gewicht_gat > 0)
      for (i = [0 : armen - 1]) rotate(i * 360 / armen)
        translate([arm_afstand, 0, -1]) cylinder(d = gewicht_gat, h = hoogte + 2);
  }
}

module naaf() {
  difference() {
    rotate_extrude() naaf_profiel(0);
    if (vingerkuil) {
      kr = naaf_straal * 2.2;
      translate([0, 0, hoogte + kr - 0.8]) sphere(r = kr, $fn = 64);
      translate([0, 0, -kr + 0.8]) sphere(r = kr, $fn = 64);
    }
  }
}

body();
naaf();
