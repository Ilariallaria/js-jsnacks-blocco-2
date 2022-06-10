// - Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


// let sum = 0;

// for(let i=0; i<5; i++){

//     // chiedi numero
//     let userNumber = prompt('Inserisci un numero');
//     // trasforma numero
//     userNumber = parseInt(userNumber);
    
//     // verifica numeri
//     // console.log(userNumber);

//     // somma numeri
//     sum += userNumber

// }

// // stampa somma
// console.log('La somma dei numeri inseriti è: '+ sum);



let sum = 0
let i = 0;
while(i<5){

    // chiedi numero
    let userNumber = prompt('Inserisci un numero');
    // trasforma numero
    userNumber = parseInt(userNumber);

    i++;
    
    // verifica numeri
    // console.log(userNumber);

    // somma numeri
    sum += userNumber
}

console.log('La somma dei numeri inseriti è: '+ sum);
