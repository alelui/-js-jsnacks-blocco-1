// alert('Ciaone');
// JSnack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while


//Con il for
let numUser;
let somma = 0;

// for (let i = 0; i < 5; i++){

//     numUser = parseInt(prompt('Inserire un Numbers'));
//     console.log(numUser);

//     somma = somma + numUser;
// }

//con il while
// let i = 0;
// while(i < 5){

//     numUser = parseInt(prompt('Inserire un Numbers'));
//     console.log(numUser);

//     somma = somma + numUser;

//     i++;
// }

// console.log('la somma è: ' + somma);





// JSnack 2
// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// const a = 'alfa';
// const b = 'fluscevole';

// const a = prompt('inserisci una parablas');
// const b = prompt('inserisci una parablas');

// const aWidth= `${a.length}`;
// const bWidth= `${b.length}`;

// console.log(aWidth);
// console.log(bWidth);

// if ( aWidth > bWidth ){
//     console.log(a + ' continene più lettere di ' + b);
// } else if (aWidth < bWidth){
//     console.log(b + ' continene più lettere di ' + a);
// } else {
//     console.log(a + ' continene lo settesso numero di careatteri di ' + b);
// }




// JSnack 3
// Stampa le potenze di 2 fino a 1000.

let power = 1;
let n = parseInt(prompt('Inserire elevamento a potenza del 2'));
console.log(numUser);

for (let i = 0; i < n; i++){
    
    power *=2;
    potenza=i +1

    console.log('2 elevato a ' + potenza +' è uguale a: ' + power);
}






