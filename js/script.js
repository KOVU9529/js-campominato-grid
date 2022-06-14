/*Consegna
1-L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
  con difficoltà 1 => tra 1 e 100
  con difficoltà 2 => tra 1 e 81
  con difficoltà 3 => tra 1 e 49
---------------------------------------------------------------------------------------
2-Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
  I numeri nella lista delle bombe non possono essere duplicati.
---------------------------------------------------------------------------------------
In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.*/

//Chiedo all'utente la difficiltà (attraverso la scelta di un numero)
const userLevel=parseInt(prompt('Dimmi un numero da 1 a 3 (Più alto è il valore del numero scelto maggiore sarà la difficoltà)'));

//Imposto i diversi livelli di difficoltà
let typeLevel;

switch(userLevel){
    case 1:
    typeLevel=100;
    break;
    case 2:
    typeLevel=81;
    break;
    case 3:
    typeLevel=49;
    break;
}

//Testo il funzionamento
console.log(typeLevel);

//Numero delle bombe
const bombNumb=16;
//Valore della funzione esterno alla funzione stessa
const generateBombArray=generateBomb(bombNumb,1,typeLevel);
//controllo
console.log(generateBombArray);


//Funzione per il popolamento dell'array(contenitore delle bombe)
//bombElement-> popoleranno bombArray
//imposto come due ultimi input il min e max

function generateBomb(bombElement,rangeMin,rangeMax){
    const bombArray=[];
    //Ciclo while per il popolamento dell'array
    while(bombArray.length < bombElement){
        //Aggiorno gli argomenti
        const numbRandom=getRndInteger(rangeMin, rangeMax);
        //imposto le condizioni
        if(!bombArray.includes(numbRandom)){
            bombArray.push(numbRandom);
        }
    }
    return bombArray;
}

//Genero una funzione per i 16 numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}