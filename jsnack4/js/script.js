// - Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// arrey con numero diverso di elementi
const bigArray = [1, 2, 3, 4, 5, 6];
const smallArray = [1, 2, 3];

// li stampo così infondo vedo ala differenza
console.log(bigArray);
console.log(smallArray);

// ciclo while  dove dico che finchè i due array non saranno lunghi uguali, deve aggiungere numeri random
while( smallArray.length < bigArray.length){

    // numeri random
    let randomNumber = Math.floor(Math.random() * 100) + 1;


    // aggiungo numero generato all'array
    smallArray.push(randomNumber);

}

// stampo di nuovo per vedere la differenza dall'inizio
console.log(bigArray);
console.log(smallArray);

