let symbolComputer;
let symbolSpieler;
let gewinneComputer = 1;
let gewinneSpieler = 1;
let gewinnBedingung = 3;
let anzahlSpiele = gewinneComputer + gewinneSpieler;
var num;
let anzahlRunden;


function anzahlDerRunde() {
  anzahlRunden = document.getElementById('anzahlRunden').value;
  let zweite = document.getElementById('zweite');
  zweite.style.display = 'flex';
  let input = document.getElementById('input');
  input.style.display = 'none';
}



function takeWinners(num) {

  ausgedachteZahl = Math.random() * 3 + 1;
  ausgedachteZahl = Math.floor(ausgedachteZahl);
  console.log(ausgedachteZahl);
  let displayP = document.createElement('p');
  let result = document.getElementById('result');
  let erst = document.getElementById('erst');
  result.append(displayP);
if (gewinneSpieler == gewinnBedingung || (anzahlRunden > 0 && gewinneSpieler>gewinneComputer)) {
    let gewonnen = document.getElementById('gewonnen');
    gewonnen.style.display = 'grid';
    erst.style.display = 'none';
  } else if (gewinneComputer == gewinnBedingung|| (anzahlRunden > 0 && gewinneComputer>gewinneSpieler)) {
    let verloren = document.getElementById('verloren');
    verloren.style.display = 'block';
    erst.style.display = 'none';
 } else if (anzahlRunden > 0) {
    anzahlRunden--;
    if (ausgedachteZahl == 1 && num == 1 || ausgedachteZahl == 2 && num == 2 || ausgedachteZahl == 3 && num == 3) {

      result.append('Unentschieden');
    }
    if (ausgedachteZahl == 2 && num == 1 || ausgedachteZahl == 1 && num == 3 || ausgedachteZahl == 3 && num == 2) {

     // result.append('Computer gewonnen' + gewinneComputer++);
      document.getElementById('computer').innerHTML = gewinneComputer++;
    }
    if (ausgedachteZahl == 3 && num == 1 || ausgedachteZahl == 2 && num == 3 || ausgedachteZahl == 1 && num == 2) {

      document.getElementById('spieler').innerHTML = gewinneSpieler++;
     // result.append('Spieler gewonnen!' + gewinneSpieler++); 
  }

 }   
  
} 



function reload() {
  location.reload();
}



































// function takeWinners(num) {
 
//   ausgedachteZahl = Math.random() * 3 + 1;
//   ausgedachteZahl = Math.floor(ausgedachteZahl);
//   console.log(ausgedachteZahl);
//   let displayP = document.createElement('p');
//   let result = document.getElementById('result');
//   result.append(displayP);
 

//   if (gewinnBedingung > gewinneComputer && anzahlRunden > 0) {

//     anzahlRunden--;

//     if (ausgedachteZahl == 1) {
//       symbolComputer = 'Schere';
//     }
//     if (ausgedachteZahl == 2) {
//       symbolComputer = 'Stein';
//     }
//     if (ausgedachteZahl == 3) {
//       symbolComputer = 'Papier';
//     }
//     if (num == 1) {
//       symbolSpieler = 'Schere';
//     }
//     if (num == 2) {
//       symbolSpieler = 'Stein';
//     }
//     if (num == 3) {
//       symbolSpieler = 'Papier';
//     }
//     if (symbolComputer == symbolSpieler) {
//       result.append('Unentschieden');
//     }
//     if (symbolComputer == 'Schere' && symbolSpieler == 'Stein') {

//       gewinneSpieler++;
//       result.append('Du hast mit Stein gegen Schere gewonnnen!' + gewinneSpieler);

//     }
//     if (symbolComputer == 'Stein' && symbolSpieler == 'Schere') {

//       gewinneComputer++;
//       result.append('Du hast mit Schere gegen Stein verloren!' + gewinneComputer);

//     }
//     if (symbolComputer == 'Papier' && symbolSpieler == 'Schere') {

//       gewinneSpieler++;
//       result.append('Du hast mit Schere gegen Papier gewonnen!' + gewinneSpieler);
//     }
//     if (symbolComputer == 'Schere' && symbolSpieler == 'Papier') {

//       gewinneComputer++;
//       result.append('Du hast mit Papier gegen Schere verloren!' + gewinneComputer);
//     }
//     if (symbolComputer == 'Stein' && symbolSpieler == 'Papier') {

//       gewinneSpieler++;
//       result.append('Du hast mit Stein gegen Papier gewonnen!' + gewinneSpieler);
//     }
//     if (symbolComputer == 'Papier' && symbolSpieler == 'Stein') {

//       gewinneComputer++;
//       result.append('Du hast mit Stein gegen Papier gewonnen!' + gewinneComputer);
//     }

//   } else if (gewinneSpieler == gewinnBedingung) {
//     let gewonnen = document.getElementById('gewonnen');

//     gewonnen.style.display = 'block';
//   }
//   else if (gewinneComputer == gewinnBedingung) {
//     let verloren = document.getElementById('verloren');

//     verloren.style.display = 'block';

//   }
// }

// function reload() {
//   location.reload();
// }
