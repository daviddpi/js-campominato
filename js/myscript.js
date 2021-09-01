//funzione di numeri random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //Massimo escluso, minimo incluso
}

const numeroBombe = 15;
let bombe = [];

// while(bombe.length < numeroBombe){
//     var randomNum = getRandomInt(1,101);
//     //se non è presente l'elemento nell'array(===-1) allora lo inserisce
//     if(bombe.indexOf(randomNum) === -1){
//         bombe.push(randomNum);
//     }
//     console.log(randomNum);
// }

do{
    let randomNum = getRandomInt(1,16)
    if(!(bombe.includes(randomNum))){
        bombe.push(randomNum);
    }

}while(bombe.length < numeroBombe);

console.log(bombe);

let tuoNumero = [];

do{
    tuoNumero = parseInt( prompt("Inserisci un numero") );
    let numeroAttuale = tuoNumero;
    // if(tuoNumero.includes(numeroAttuale)){
    //     alert("Hai inserito un numero già presente!");
    //     break;
    // }
    if(tuoNumero < 1 || tuoNumero > 100){
        alert("Inserisci un numero da 1 a 100");
    }
    //FUNZIONA
    // if(bombe.includes(tuoNumero)){
    //     alert("HAI PERSO!\nHai preso la bomba!");
    //     break;
    // }
    console.log(tuoNumero);
} while( (tuoNumero >= 1 || tuoNumero <= 100) && (tuoNumero < (20 - numeroBombe) ) );