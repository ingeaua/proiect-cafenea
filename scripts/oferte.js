function genereazaCodReducere(dificultate) { 

    dificultate = dificultate - 2;

    const alfabet = [];

    for (let i = 65; i <= 90; i++) {
        alfabet.push(String.fromCharCode(i));
    }

    const data = new Date();

    const partea1 = (data.getHours() + data.getMonth() + data.getMinutes()) % data.getSeconds() + 10;

    const partea2aux = [];

    for (let i = 1; i <= 6; i++) {

        const nrrandom = Math.floor(Math.random() * 27);
        partea2aux.push(alfabet[nrrandom]);

    }

    const partea2= partea2aux.join('');

    const partea3 = data.getTime() % 1000;

    const partea4 = dificultate * 10;

    arraycod = [partea1, partea2, partea3, partea4];

    cod = arraycod.join('-');

    return cod;

}

let nrDreptunghiuri = 3;

const adaugaBTN = document.getElementById('adauga');
const eliminaBTN = document.getElementById('elimina');
const incepeBTN = document.getElementById('incepe');

const sectiuneJoc = document.getElementById('game-field');

adaugaBTN.addEventListener('click', adaugaDreptunghi);
eliminaBTN.addEventListener('click', eliminaDreptunghi);
incepeBTN.addEventListener('click', incepeJoc);

function adaugaDreptunghi() {

    if (nrDreptunghiuri == 9)
    {
        alert("Vă aflați la dificultatea maximă!");
        return;
    }
    const divNou = document.createElement('div');
    divNou.className = 'dreptunghi';
    sectiuneJoc.appendChild(divNou);

    nrDreptunghiuri++;


}

function eliminaDreptunghi() {

    if (nrDreptunghiuri == 3)
    {
        alert("Vă aflați la dificultatea minimă!");
        return;
    }

    const listaDivuri = sectiuneJoc.getElementsByClassName('dreptunghi');
    const ultimDiv = listaDivuri[listaDivuri.length - 1];
    ultimDiv.remove();

    nrDreptunghiuri--;

}

function incepeJoc() {

    adaugaBTN.removeEventListener('click', adaugaDreptunghi);
    eliminaBTN.removeEventListener('click', eliminaDreptunghi);
    incepeBTN.removeEventListener('click', incepeJoc);

    const stopBTN = document.getElementById('stop');
    
    const butoane = document.getElementById('butoane').children;

    stopBTN.classList.remove("ascuns");

    stopBTN.addEventListener('click', reincarcaPagina);

    for (let i = 0; i < 3; i++)
    {
        butoane[i].classList.add("ascuns");
    }

    let zonaJoc = document.getElementById('game-field');

    listaDreptunghiuri = zonaJoc.children;

    for (let i = 0; i < nrDreptunghiuri; i++)
    {
        const inaltimeRandom = Math.floor(Math.random() * (830 - 50 + 1)) + 50;
        listaDreptunghiuri[i].style.height = inaltimeRandom + 'px';
    }


} 
 
function reincarcaPagina()
{

    location.reload();

}




/// to do 
// 
//  joc cu dreptunghiuri in care ai intre 3 si 9 si daca reusesti sa le aranjezi crescator ca inaltime primesti un cod de reducere printr un alert
//  da trebuie cumva facut sa poti sa adaugi cate vrei tu da minim 3 max 9 also localstorage daca ai castigat deja in ultima luna