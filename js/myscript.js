// alert('Ciaone');
// JSnack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while

let numUser;
let somma = 0;

// for (let i = 0; i < 5; i++){

//     numUser = parseInt(prompt('Inserire un Numbers'));
//     console.log(numUser);

//     somma = somma + numUser;
// }

let i;
while(i < 5){

    numUser = parseInt(prompt('Inserire un Numbers'));
    console.log(numUser);

    somma = somma + numUser;

    i++;
}

console.log('la somma è: ' + somma);
