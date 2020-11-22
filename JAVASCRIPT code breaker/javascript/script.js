var zahl1;
var zahl2;
var zahl3;
var tipp1;
var tipp2;
var tipp3;
var richtigeStelle;
var richtigeZahl;
var meinVersuch;
var meinZaehler = 12;
zahl1 = Math.round(Math.random() * 9 + 0.5);
zahl2 = Math.round(Math.random() * 9 + 0.5);
zahl3 = Math.round(Math.random() * 9 + 0.5);
console.log(zahl1);
console.log(zahl2);
console.log(zahl3);
let alle = document.getElementById('alle');
function choiseNumber() {



}
function codeBreaker() {

    meinVersuch = document.getElementById('input').value;
    console.log(meinVersuch);
    let resultP1 = document.createElement('p');
    let resultc1 = document.getElementById('result1');
    resultc1.append(resultP1);
    let resultP2 = document.createElement('p');
    let resultc2 = document.getElementById('result2');
    resultc2.append(resultP2);
    let resultP3 = document.createElement('p');
    let resultc3 = document.getElementById('result3');
    resultc3.append(resultP3);
    tipp1 = meinVersuch.charAt(0);
    tipp2 = meinVersuch.charAt(1);
    tipp3 = meinVersuch.charAt(2);
    if (meinZaehler > 0) {
        if (tipp1 == zahl1 && tipp2 == zahl2 && tipp3 == zahl3) {
            alle.style.display = 'none';
        let gewonnen = document.getElementById('gewonnen');
        gewonnen.style.display = 'block';

        } else {

            if (tipp1 == zahl1) {
                richtigeStelle++;
                resultP1.append("Erster zahl ist im richtigen platz");
            } else if (tipp1 == zahl2 || tipp1 == zahl3) {
                resultP1.append("Erster zahl ist im anderen posiiton");
            } else {
                resultP1.append("Ester zahl kommt nicht vor ");
            }
            if (tipp2 == zahl2) {
                richtigeStelle++;
                resultP2.append("Zweiter zahl ist im richtigen platz");
            } else if (tipp2 == zahl1 || tipp2 == zahl3) {
                resultP2.append("Zweiter zahl ist im anderen posiiton");
            } else {
                resultP2.append("Zweiter zahl kommt nicht vor ");
            }
            if (tipp3 == zahl3) {
                richtigeStelle++;
                resultP3.append("Drieter zahl ist im richtigen platz");
            } else if (tipp3 == zahl1 || tipp3 == zahl2) {
                resultP3.append("Drieter zahl ist im anderen posiiton");
            } else {
                resultP3.append("Drieter zahl kommt nicht vor ");

            }

        }
        meinZaehler--;
    } else {
        alle.style.display = 'none';
        let verloren = document.getElementById('verloren');
        verloren.style.display = 'block';
    }
}

function playAgain() {
location.reload();
}