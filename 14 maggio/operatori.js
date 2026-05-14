let a = 10;
let b = 5;

//operatori aritmetici
let somma = a + b; // 15
let differenza = a - b; // 5
let prodotto = a*b // 50
let divisione = a / b; // 2

//operatori di confronto
let uguale = (a == "10"); // true (coercizione)
let strettamenteUguale = (a === "10"); // false (tipo diverso)
let maggiore = (a > b); //true

// Operatori logici
let condizione = (a > 5 && b < 10); // true
let alternativa = (a < 5 || b < 10); // true
let negazione =!(a > b); // false

// Operatori di assegnazione
let x = 10;
x += 5; // x = x + 5 -> 15

console.log(somma, uguale, strettamenteUguale, condizione);