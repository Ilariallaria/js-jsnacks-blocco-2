// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.


// crea array vuoto
let userArray = [];

// variabile somma che contiene la somma dei numeri
let sum = 0;

// ciclo da eseguire finche sum è minore di 50
while(sum < 50){

    // chiedi numero
    let userNumber = prompt('Inserisci un numero');
    // trasforma numero
    userNumber = parseInt(userNumber);

    // aggiungi numero in sum
    sum += userNumber
    // inserisci numero nell'array
    userArray.push(userNumber);

}
// atampa array
console.log(userArray);




