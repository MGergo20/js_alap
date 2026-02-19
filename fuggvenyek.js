import { adatLista } from "./adat.js";
export function elsoFeladat(ertekelesElem, eredmenyElem) {
  let szoveg = "";
  switch (Number(ertekelesElem.value)) {
    case 1:
      szoveg = "elégtelen";
      break;
    case 2:
      szoveg = "elégséges";
      break;
    case 3:
      szoveg = "közepes";
      break;
    case 4:
      szoveg = "jó";
      break;
    case 5:
      szoveg = "jeles";
      break;
    default:
      szoveg = "nincs ilyen";
  }
  console.log(szoveg);
  eredmenyElem.innerHTML = szoveg;
}

export function masodikFeladat() {
  let lista = [];
  let also = -10;
  let felso = 100;
  for (let i = 0; i < 12; i++) {
    let randomSzamok = Math.floor(Math.random() * (felso - also + 1)) + also;
    lista.push(randomSzamok);
  }
  return lista;
}
export function kiiras(szamokElem, lista) {
  let tartalom = "";
  for (let i = 0; i < lista.length; i++) {
    tartalom += "<div>" + lista[i] + "</div>";
  }
  szamokElem.innerHTML = tartalom;
}

export function harmadikFeladat(adatLista, tablazatElem) {
  let tartalom2 = "<table>  <th>Név</th>    <th>Átlag</th>";
  for (let i = 0; i < adatLista.length; i++) {
    tartalom2 += `
   
      <tr>
        <td>${adatLista[i].nev}</td>
        <td>${adatLista[i].atlag}</td>
      </tr>`;
  }
  tartalom2 += "</table>";
  console.log(tartalom2);
  tablazatElem.innerHTML = tartalom2;
}
