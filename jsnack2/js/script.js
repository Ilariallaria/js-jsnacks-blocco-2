// Calcola la somma e la media dei primi 10 numeri.

sum = 0;
average = 0;

// la i non può partire da zero perchè zero no nè un numero e poi <= 10 altrimenti si ferma a 9
// a te servono i numeri da 1 a 10

for(let i=0; i<10; i++){

    // chiedi numero
    let userNumber = prompt('Inserisci un numero');
    // trasforma numero
    userNumber = parseInt(userNumber);
    
    console.log(userNumber);

    sum += userNumber
    average = sum / 10;

}

console.log('La somma dei numeri inseriti è: '+ sum);
console.log('La media dei numeri inseriti è: ' + average);
