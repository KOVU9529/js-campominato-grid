/*Consegna
1-L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
  con difficoltà 1 => tra 1 e 100
  con difficoltà 2 => tra 1 e 81
  con difficoltà 3 => tra 1 e 49
---------------------------------------------------------------------------------------
2-Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
  I numeri nella lista delle bombe non possono essere duplicati.
---------------------------------------------------------------------------------------
3-In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
  se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
  Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
---------------------------------------------------------------------------------------
4-Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.*/

//1-
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

//2-
//Numero delle bombe
const bombNumb=16;
//Valore della funzione esterno alla funzione stessa
const generateBombArray=generateBomb(bombNumb,1,typeLevel);
//controllo
console.log(generateBombArray);

//3-
//Inserimento dei numeri
//Creo un array vuoto(che verra popolato con la seconda scelta numerica)
const arrayEmpt=[];

//Calcolo il massimale dei tentativi in funzione della difficoltà
const attempts = typeLevel-bombNumb;

//Prima di inizializzare il ciclo imposto la mia variabile
let gameResult=true;

//Tramite il ciclo while imposto le condizioni delle aggiunte
while(gameResult){
    //seconda scelta numerica
    const userAttempts=parseInt(prompt('Dimmi un numero'));

    //imposto le condizioni delle aggiunte
    if (generateBombArray.includes(userAttempts)){
        gameResult=false;
        alert('Peccato hai perso!');
        alert('Tentativi riusciti:'+ arrayEmpt)
    }else{
        if(!generateBombArray.includes(userAttempts)){
            arrayEmpt.push(userAttempts);
        } if (arrayEmpt.length===attempts){
            gameResult=false;
            alert('Complimenti hai vinto!')
        }
    }
}


//--------------------------
//Function
//--------------------------

//4-
//Funzione per generare il vincitore e i temtativi andati a buon fine
//1-risultati gioco
//2-Lunghezza array=numero di tentativi

function endGame(gameResults, arrayMatches){
    if(gameResults==='Hai vinto'){
        alert('Complimenti hai vinto!')
    } else if(gameResults==='Hai perso'){
        alert('Peccato hai perso!');
        alert('Tentativi riusciti:'+arrayMatches.lenght)
    }
}

//2-
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

//2-
//Genero una funzione per i 16 numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}