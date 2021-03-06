//funzione di numeri random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //Massimo escluso, minimo incluso
}

//funzione genera bombe, che inserisce univocamente in un array un numero random da 1 a x (in base alla difficolta)
function generaBombe(){
    bombe = [];
    do{
        let randomNum = getRandomInt(1,numeroMassimo+1)
        if(!(bombe.includes(randomNum))){ //se il numero random non è già nell'array viene inserito
            bombe.push(randomNum);
        }
    
    }while(bombe.length < numeroBombe); //il ciclo si ripete fino a quando l'array non è uguale al numero delle bombe

    return bombe;
}

//funzione scelta della difficoltà
function sceltaDifficolta(){
    difficolta = document.getElementById("my-selection-difficulty").value;
    //in base alla difficolta cambiano il numero delle bombe e il numero totale che l'utente dovrà inserire
    switch(difficolta){
        case "1": //facile
            numeroBombe = 1;
            numeroMassimo = 10;
            document.getElementById("errore-difficolta").className = "d-none";
            break;
        case "2": // normale
            numeroBombe = 3;
            numeroMassimo = 15;
            document.getElementById("errore-difficolta").className = "d-none";
            break;
        case "3": //difficile
            numeroBombe = 5;
            numeroMassimo = 20;
            document.getElementById("errore-difficolta").className = "d-none";
            break;
        case "0": //errore, selezionare una difficolta
            document.getElementById("errore-difficolta").className = "text-danger text-start pt-2";
            tuoNumero.length = livello;
            break;
        default:
            numeroBombe = 3;
            numeroMassimo = 15;
            break;
    }
    return (numeroBombe,numeroMassimo)
}


//funzione gameplay
function gamePlay(){
    tuoNumero = [];
    score = 0;
    //ciclo in cui l'utente inserisce un numero < 100 e > 1 che se ripetuto interrompe il ciclo
    do{
        let numeroAttuale = parseInt ( prompt("Inserisci " + (livello-tuoNumero.length) +" numeri da 1 a " + numeroMassimo) );
        if(numeroAttuale < 1 || numeroAttuale > numeroMassimo || Number.isNaN(numeroAttuale)){
            alert("Devi inserire un numero da 1 a " + numeroMassimo +"!");
        } else if(tuoNumero.includes(numeroAttuale)){ //numero già inserito in precedenza
            alert("Hai già inserito questo numero! " + numeroAttuale);
        } else if(bombe.includes(numeroAttuale)){ //caso in cui esiste un numero nell'array delle bombe
            alert("HAI PERSO!\nHai preso la bomba!\n\nScore: " + score);
            break;
        } else {
            tuoNumero.push(numeroAttuale);
            score++;                     
        }
        
        console.log("Numero inserito: " + numeroAttuale);
        console.log(" array: " + tuoNumero);
        console.log(" punteggio: " + score);
        console.log(tuoNumero.length);
        console.log(livello);

        if(tuoNumero.length == livello){
            alert("HAI VINTO!\nScore: " + score);
        }

    }while( ((tuoNumero >= 1 || tuoNumero <= numeroMassimo) && ( !(Number.isNaN(tuoNumero)) ) ) || (tuoNumero.length < livello) );
}

//variabili inizializzate
let difficolta;
let numeroBombe;
let bombe = [];
let numeroMassimo;
let livello;
let tuoNumero = [];
let score = 0;

let btnPlay = document.getElementById("my_btn-play");

btnPlay.addEventListener("click",function(){

    sceltaDifficolta();
    console.log(difficolta);

    generaBombe();
    console.log(bombe);

    //livello ha adesso un valore
    livello = numeroMassimo - numeroBombe

    gamePlay();
});
