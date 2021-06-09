"use strict";


do {
  var kaina = prompt("Įveskite prekės kainą");
  kaina = Number(kaina);
} while(!kaina || isNaN(kaina));

var reikalingasPristatymas = confirm("Ar reikalingas pristatymas į namus? (taip/ne)");

if (reikalingasPristatymas) {

  do {
    var miestas = prompt("Į kurį miestą reikia pristatyti?");
  } while(!miestas || miestas >= 0 || miestas < 0);

  var prekėsPristatymas = 10;
  var bendraSuma = kaina + prekėsPristatymas;

  console.log("Prekės kaina: " + kaina.toFixed(2) + " €");
  console.log("Prekės pristatymas: " + prekėsPristatymas.toFixed(2) + " €");
  console.log("Iš viso: " + bendraSuma.toFixed(2) + " €");
  console.log("Prekę pristatysime į " + miestas + " per 1-3 dienas.");

} else {
  console.log("Prekės kaina: " + kaina.toFixed(2) + " €");
  console.log("Prekę galite atsiimti nemokamai Vilniuje, adresu: Gedimino pr. 1a. ");
}
