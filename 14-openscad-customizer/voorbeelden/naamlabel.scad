// Naamlabel / sleutelhanger met tekst
// Geschreven voor Tech demo 14 (OpenSCAD customizer). Licentie: CC0 1.0 / MIT.
// De plaat groeit automatisch mee met de tekst (hull + offset).

/* [Tekst] */
// Naam of tekst
naam = "Rashied";
// Tekstgrootte (mm)
grootte = 10; // [5:0.5:25]
// Lettertype
lettertype = "Liberation Sans:style=Bold"; // [Liberation Sans:style=Bold, Liberation Sans, Liberation Sans:style=Bold Italic, Liberation Serif:style=Bold, Liberation Mono:style=Bold]
// Letterafstand
spatiering = 1; // [0.8:0.05:1.5]

/* [Plaat] */
// Rand rond de tekst (mm)
rand = 3; // [1.5:0.5:8]
// Plaatdikte (mm)
plaat = 2; // [1:0.2:5]
// Hoogte van de letters boven de plaat (mm)
letter_hoogte = 1.2; // [0.4:0.2:4]
// Stijl
stijl = "verhoogd"; // [verhoogd, uitgesneden]

/* [Sleutelring] */
// Oogje voor een sleutelring
oogje = true;
// Gatdiameter (mm)
gat = 4.5; // [3:0.5:8]

/* [Hidden] */
$fn = 48;

module tekst2d() {
  text(naam, size = grootte, font = lettertype, spacing = spatiering, halign = "left", valign = "center");
}

module plaat2d() {
  ring_r = gat / 2 + 2.2;
  difference() {
    hull() {
      offset(r = rand) tekst2d();
      if (oogje) translate([-rand - ring_r + 1, 0]) circle(r = ring_r);
    }
    if (oogje) translate([-rand - ring_r + 1, 0]) circle(d = gat);
  }
}

if (stijl == "verhoogd") {
  linear_extrude(plaat) plaat2d();
  translate([0, 0, plaat - 0.01]) linear_extrude(letter_hoogte + 0.01) tekst2d();
} else {
  difference() {
    linear_extrude(plaat + letter_hoogte) plaat2d();
    translate([0, 0, plaat]) linear_extrude(letter_hoogte + 1) tekst2d();
  }
}
