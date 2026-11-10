// Parametrisch doosje met schuifdeksel (opsteekdeksel)
// Geschreven voor Tech demo 14 (OpenSCAD customizer). Licentie: CC0 1.0 / MIT.
// Doos en deksel liggen naast elkaar op het bed; het deksel ligt
// ondersteboven zodat de bovenkant mooi glad wordt.

/* [Binnenmaten] */
// Binnenbreedte (mm)
breedte = 60; // [20:1:200]
// Binnendiepte (mm)
diepte = 40; // [20:1:200]
// Binnenhoogte (mm)
hoogte = 25; // [5:1:120]

/* [Wanden] */
// Wanddikte (mm)
wand = 2; // [1.2:0.2:4]
// Bodemdikte (mm)
bodem = 1.6; // [0.8:0.2:4]
// Hoekradius buitenkant (mm)
hoekradius = 4; // [0:0.5:15]

/* [Deksel] */
// Deksel maken
met_deksel = true;
// Hoogte van de rand die in de doos valt (mm)
deksel_rand = 5; // [2:0.5:15]
// Speling tussen deksel en doos (mm)
speling = 0.25; // [0.1:0.05:0.6]
// Tekst op het deksel (leeg = geen tekst)
tekst = "SPULLEN";
// Tekstgrootte (mm)
tekst_grootte = 8; // [4:0.5:20]
// Lettertype
lettertype = "Liberation Sans:style=Bold"; // [Liberation Sans:style=Bold, Liberation Sans, Liberation Serif:style=Bold, Liberation Mono:style=Bold]
// Tekst graveren (in plaats van verhoogd)
graveren = true;

/* [Hidden] */
$fn = 48;
bw = breedte + 2 * wand;
bd = diepte + 2 * wand;
r = min(hoekradius, bw / 2 - 0.1, bd / 2 - 0.1);

module rrect(w, d, rad) {
  if (rad <= 0) square([w, d], center = true);
  else offset(r = rad) square([w - 2 * rad, d - 2 * rad], center = true);
}

module doos() {
  difference() {
    linear_extrude(bodem + hoogte) rrect(bw, bd, r);
    translate([0, 0, bodem]) linear_extrude(hoogte + 1) rrect(breedte, diepte, max(r - wand, 0));
  }
}

module deksel() {
  // plaat (ondersteboven op het bed) + rand die in de doos past
  ri = max(r - wand, 0);
  rw = breedte - 2 * speling;
  rd = diepte - 2 * speling;
  difference() {
    union() {
      linear_extrude(bodem) rrect(bw, bd, r);
      translate([0, 0, bodem - 0.01]) linear_extrude(deksel_rand) difference() {
        rrect(rw, rd, max(ri - speling, 0));
        rrect(rw - 2 * wand, rd - 2 * wand, max(ri - speling - wand, 0));
      }
    }
    if (tekst != "" && graveren)
      translate([0, 0, -0.01]) linear_extrude(0.6) mirror([1, 0]) tekst2d();
  }
  if (tekst != "" && !graveren)
    translate([0, 0, bodem - 0.01]) linear_extrude(0.8) mirror([1, 0]) tekst2d();
}

module tekst2d() {
  text(tekst, size = tekst_grootte, font = lettertype, halign = "center", valign = "center");
}

doos();
if (met_deksel) translate([bw + 8, 0, 0]) deksel();
