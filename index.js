import { adatLista } from "./adat.js";
import {
  elsoFeladat,
  harmadikFeladat,
  kiiras,
  masodikFeladat,
} from "./fuggvenyek.js";

let gombElem = document.getElementById("gomb");
let ertekelesElem = document.getElementById("ertekeles");
let eredmenyElem = document.getElementById("eredmeny");
let szamokElem = document.getElementById("szamok");
let tablazatElem = document.getElementById("tablazat");

gombElem.addEventListener("click", feladat);

function feladat() {
  elsoFeladat(ertekelesElem, eredmenyElem);
}
let lista = masodikFeladat();
console.log(lista);

kiiras(szamokElem, lista);
harmadikFeladat(adatLista, tablazatElem);

