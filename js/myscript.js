//funzione di numeri random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //Massimo escluso, minimo incluso
}

const numeroBombe = 16;
let bombe = [];

// while(bombe.length < numeroBombe){
//     var randomNum = getRandomInt(1,101);
//     //se non è presente l'elemento nell'array(===-1) allora lo inserisce
//     if(bombe.indexOf(randomNum) === -1){
//         bombe.push(randomNum);
//     }
//     console.log(randomNum);
// }

//algoritmo che inserisce univocamente un numero random da 1 a 100
do{
    let randomNum = getRandomInt(1,101)
    if(!(bombe.includes(randomNum))){ //se il numero random non è già nell'array viene inserito
        bombe.push(randomNum);
    }

}while(bombe.length < numeroBombe); //il ciclo si ripete fino a quando l'array non è uguale al numero delle bombe

console.log(bombe);

let tuoNumero = [];
let score = 0;

//ciclo in cui l'utente inserisce un numero < 100 e > 1 che se ripetuto interrompe il ciclo
do{
    let numeroAttuale = parseInt ( prompt("Inserisci un numero") );
    if(numeroAttuale < 1 || numeroAttuale > 100 || Number.isNaN(numeroAttuale)){
        alert("Inserisci un numero da 1 a 100");
    } else if(tuoNumero.includes(numeroAttuale)){ //numero già inserito in precedenza
        alert("Hai già inserito questo numero!\nHai perso!\n\nScore: " + score);
        break;
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

    if(tuoNumero.length == (100 - numeroBombe)){
        alert("HAI VINTO!\nScore: " + score);
    }

} while( ((tuoNumero >= 1 || tuoNumero <= 100) && ( !(Number.isNaN(tuoNumero)) ) ) || (tuoNumero.length < (100 - numeroBombe)) );