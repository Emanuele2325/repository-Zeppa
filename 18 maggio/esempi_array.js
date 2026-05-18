//Accesso agli alementi
let numeri = [1, 2, 3 ];

console.log(numeri[0]); //1

//Aggiunta elementi
numeri.push(4); //aggiungo in fondo --> [1,2,3,4]
numeri.unshift(0); //aggiungo in testa --> [0,1,2,3,4]

//Rimozione elementi
numeri.pop(); //rimuove l'ultimo elemento --> [0,1,2,3]
numeri.shift(); //rimuove il primo elemento --> [1,2,3]

//Trasformazione
let doppi = numeri.map(n => n* 2 ); //crea un nuovo array con i valori doppi --> [2,4,6]

//filtro
let maggioreDiUno = numeri.filter(n => n > 1); //crea un nuovo array con i valori maggiori di 1 --> [2,3]

//Ricerca
let trovato = numeri.find (n => n === 2); //trova il primo elemento che è uguale a 2 --> 2

//Lunghezza
console.log(numeri.length); //ovvero il numero di elementi nell'array, ovvero 3




let numeri = [10, 20, 30];

for(let valore of numeri) {
    console.log(valore); //stampa 10, poi 20, poi 30
}



let caratteri = ["a", "b", "c"];

for(let valore of caratteri) {
    console.log(valore); //stampa "a", poi "b", poi "c"
}


