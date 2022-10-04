
let kedvencek = [
    'Gyűrűk ura',
    'Harry Potter és a bölcsek köve',
    'Ragyogás',
    'Orion expressz',
    'Film',
    'Ratitouille',
];

function ujKedvencElem(cim) {
    let label = document.createElement('label');
    label.textContent = cim;+': ';
    let number = document.createElement('input');
    number.type='number';
    number.min=1;
    number.max=5;
    number.value=3;
    label.appendChild(number);
    return label;
}

function kedvencekBetoltese() {
    let szuloElem = document.getElementById('lista');
    szuloElem.textContent = '';
    for (let k of kedvencek) {
        let listaElem = document.createElement('li');
        //listaElem.textContent = k;
        listaElem.appendChild(ujKedvencElem(k));
        let torlesGomb = document.createElement('button');
        torlesGomb.textContent='x';

        function torlesKatt() {
            listaElem.remove();    
        }

        torlesGomb.addEventListener('click',torlesKatt);
        listaElem.appendChild(torlesGomb);
        szuloElem.appendChild(listaElem);
    }
}

function szinezes() {
    let szuloElem = document.getElementById('lista');
    for (let li of szuloElem.children) {
        let randInt = Math.floor(Math.random()* (2**24))  
        li.style.backgroundColor= '#' + randInt.toString(16);
    }

    let inputMezok = document.querySelectorAll('#lista input');
    for (let i of inputMezok) {
        let randInt = Math.floor(Math.random()* (2**24))  
        i.style.backgroundColor= '#' + randInt.toString(16);
    }
}

//vizsgán kérdezhetik -->
//document.getElementsByClassName('fontos');
//document.getElementsByTagName('p');
//document.getElementsByName('ertekeles');

function init() {
    document.getElementById('kedvencBetoltGomb').addEventListener('click',kedvencekBetoltese);
    document.getElementById('szinezes').addEventListener('click',szinezes);
}

document.addEventListener('DOMContentLoaded',init);