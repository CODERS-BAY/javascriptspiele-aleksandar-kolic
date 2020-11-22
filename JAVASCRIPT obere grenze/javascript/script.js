
var max;
var rundeteZahl;
var anzahlDerVersuche;



function valueInput() {
    anzahlDerVersuche = document.getElementById('anzahlDerVersuche').value;
    if (max!=0 && anzahlDerVersuche!=0) {
        max = document.getElementById('obere').value;
        rundeteZahl = (Math.round(Math.random() * max) + 1);
        let step1 = document.getElementById('step_1');
        let step2 = document.getElementById('step_2');
        console.log(max);
        console.log(rundeteZahl);
            step1.style.display = 'none';
            step2.style.display = 'block';
    
    } else {
        let alle = document.getElementById('alle');
        alle.style.display = 'none';
        let notnull = document.getElementById('notnull');
        notnull.style.display = 'grid';
        
    }

}

console.log(max);
console.log(rundeteZahl);

function obereGraenze() {
    var gerateneZahl = document.getElementById('gerateneZahl').value;
    console.log(rundeteZahl);
    let resultP = document.createElement('p');
    let resultc = document.getElementById('result');
    resultc.append(resultP);
    if (anzahlDerVersuche > 1) {
        anzahlDerVersuche--;
        if (gerateneZahl > rundeteZahl) {
            resultP.append('Geratene zahl ist grösser' + gerateneZahl);
        } else if (gerateneZahl < rundeteZahl) {
            resultP.append('Geratene zahl ist kleiner ' + gerateneZahl);
        } else if (gerateneZahl = rundeteZahl) {

            let gewonnen = document.getElementById('gewonnen');
        gewonnen.style.display = 'grid';
        let alle = document.getElementById('alle');
        alle.style.display = 'none';
    
        }
        console.log(anzahlDerVersuche);
    }
    else {
        let verloren = document.getElementById('verloren');
        verloren.style.display = 'grid';
        let alle = document.getElementById('alle');
        alle.style.display = 'none';
    }
}

function reload () {
    location.reload();
}

