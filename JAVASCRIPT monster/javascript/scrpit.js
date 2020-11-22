
var enfernungZumMonster = Math.random() * 90 + 10;
var result = Math.floor(enfernungZumMonster);
console.log('enfernungZumMonster' + '=' + result);
var anzahl;

function anzahlDerVersuche() {
    anzahl = document.getElementById('anzahl').value;
    if (anzahl == 0) {
        let invalid = document.getElementById('invalid');
        invalid.style.display = 'block';
        let zweite = document.getElementById('zweite');
        zweite.style.display = 'none';
        let btn = document.getElementById('btn');
        btn.style.display = 'none';
    } else {
        zweite.style.display = 'none';
        let erst = document.getElementById('erst');
        erst.style.display = 'block';
    }
}


function getMonster() {
    resultP = document.createElement('p');
    let resultc = document.getElementById('result');
    resultc.append(resultP);
    let erst = document.getElementById('erst');
    let invalid = document.getElementById('invalid');
    let verloren = document.getElementById('verloren');
    let gewonnen = document.getElementById('gewonnen');
    var v0 = document.getElementById("speed").value;
    console.log(speed);
    let winkel = document.getElementById("winkel").value;
    const select = document.getElementById('fallbescheuning');
    g = select.options[select.selectedIndex].value;
    var derWinkel = winkel * (Math.PI / 180);
    var wurfweite = Math.round(((v0 * v0) * Math.sin(2 * derWinkel)) / g);
    console.log('wurfweite' + wurfweite);
    if (anzahl < 1) {
        erst.style.display = 'none';
        verloren.style.display = 'block';
        resultP.style.display = 'none';



        console.log('anzahl' + '=' + anzahl);
        console.log('versuche' + '=' + versuche);
    } else {
        anzahl--;
        if (wurfweite == 0) {

            invalid.style.display = 'block';
            let erst = document.getElementById('erst');
            erst.style.display = 'none';
            let btn = document.getElementById('btn');
            btn.style.display = 'none';
           
        } else {

            if (wurfweite < enfernungZumMonster) {
                resultP.append(wurfweite + ' Sie haben zu wenig weit geschossen - das Monster ist weiter weg');
            } else if (wurfweite > enfernungZumMonster) {
                resultP.append(wurfweite + ' Sie haben zu weit geschossen - das Monster ist näher');
            } else if (wurfweite == enfernungZumMonster) {
                erst.style.display = 'none';
                gewonnen.style.display = 'block';
            }
        }

    }

}

function playAgain() {
    location.reload();
}


// var enfernungZumMonster = Math.random() * 90 + 10;
// var result = Math.floor(enfernungZumMonster);
// console.log('enfernungZumMonster' + '=' + result);
// var anzahl;
// function anzahlDerVersuches() {
//     anzahl = document.getElementById('anzahl').value;
//     if (anzahl == 0) {
//         let invalid = document.getElementById('invalid');
//         invalid.style.display = 'block';
//         let btn = document.getElementById('btn');
//         btn.style.display = 'none';
//     } else {
//         let erst = document.getElementById('erst');
//         erst.style.display = 'block';
//     }
//     //zweite wird sowieso auf display none gestellt - egal ob du in den if oder else zweig gehst
//     //mach es einfach außerhalb der Bedinung, dann hast du weniger code
//     let zweite = document.getElementById('zweite');
//     zweite.style.display = 'none';
// }
// function getMonsters() {
//     let resultP = document.createElement('p');
//     let resultc = document.getElementById('result');
//     resultc.append(resultP);
//     let erst = document.getElementById('erst');
//     let invalid = document.getElementById('invalid');
//     let verloren = document.getElementById('verloren');
//     let gewonnen = document.getElementById('gewonnen');
// ​ var v0 = document.getElementById("speed").value;
//     console.log(speed);
//     let winkel = document.getElementById("winkel").value;
//     const select = document.getElementById('fallbescheuning');
//     g = select.options[select.selectedIndex].value;
//     let derWinkel = winkel * (Math.PI / 180);
//     let wurfweite = Math.round(((v0 * v0) * Math.sin(2 * derWinkel)) / g);
//     console.log('wurfweite' + wurfweite);
//     if (anzahl < 1) {
//         erst.style.display = 'none';
//         verloren.style.display = 'block';
//         resultP.style.display = 'none';
//         console.log('anzahl' + '=' + anzahl);
//         console.log('versuche' + '=' + versuche);
//     } else {
//         anzahl--;
//         if (wurfweite == 0) {
//             invalid.style.display = 'block';
//             //let erst = document.getElementById('erst'); -> hast du oben schon angelegt
//             erst.style.display = 'none';
//             let btn = document.getElementById('btn');
//             btn.style.display = 'none';
//         } else {
//             if (wurfweite < enfernungZumMonster) {
//                 resultP.append(wurfweite + ' Sie haben zu wenig weit geschossen - das Monster ist weiter weg');
//             } else if (wurfweite > enfernungZumMonster) {
//                 resultP.append(wurfweite + ' Sie haben zu weit geschossen - das Monster ist näher');
//             } else if (wurfweite == enfernungZumMonster) {
//                 erst.style.display = 'none';
//                 gewonnen.style.display = 'block';
//             }
//         }
//     }
// }
// function playAgain() {
//     location.reload();
// }