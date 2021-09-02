//funzione di numeri random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //Massimo escluso, minimo incluso
}

//funzione che verifica la difficoltà
function verificaDifficolta(strDifficolta){
    if( (strDifficolta != "pari") && (strDifficolta != "media") && (strDifficolta != "difficile") ){
        return true;
    }
    return false;
}

//variabili inizializzate
let difficolta;
let numeroBombe;
let bombe = [];
let tuoNumero = [];
let score = 0;
let numeroMassimo;
let livello;

//ciclo per scelgliere una difficolta
do{
    difficolta = prompt("Seleziona la difficoltà:\n-pari-\n-media-\n-difficile-");
    if(difficolta != difficolta.trim().toLowerCase()){
        difficolta = difficolta.trim().toLowerCase();
    }
    if( verificaDifficolta(difficolta) == true ){
        alert("Devi inserire una difficolta esistente");
    }

}while( verificaDifficolta(difficolta) );

console.log(difficolta);

//in base alla difficolta cambiano il numero delle bombe e il numero totale che l'utente dovrà inserire
switch(difficolta){
    case "pari":
        numeroBombe = 2;
        numeroMassimo = 10;
        break;
    case "media":
        numeroBombe = 6;
        numeroMassimo = 25;
        break;
    case "difficile":
        numeroBombe = 10;
        numeroMassimo = 40;
        break;
    default:
        numeroBombe = 16;
        numeroMassimo = 100;
        break;
}

//livello ha adesso un valore
livello = numeroMassimo - numeroBombe

//algoritmo che inserisce univocamente un numero random da 1 a 100
do{
    let randomNum = getRandomInt(1,numeroMassimo+1)
    if(!(bombe.includes(randomNum))){ //se il numero random non è già nell'array viene inserito
        bombe.push(randomNum);
    }

}while(bombe.length < numeroBombe); //il ciclo si ripete fino a quando l'array non è uguale al numero delle bombe

console.log(bombe);

//ciclo in cui l'utente inserisce un numero < 100 e > 1 che se ripetuto interrompe il ciclo
do{
    let numeroAttuale = parseInt ( prompt("Inserisci un numero da 1 a " + numeroMassimo) );
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