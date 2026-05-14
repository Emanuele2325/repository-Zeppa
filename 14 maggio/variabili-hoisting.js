// console.log(a); // Errore: a non è definita, non è accessibile prima della dichiarazione
let a = 10;

//con Var (comportamento diverso)
console.log(b); // undefined, non errore, ma b è accessibile prima della dichiarazione
var b = 20;

//l'Hoisting è il comportamento per cui le dichiarazioni di variabili e funzioni vengono spostate
//in cima al loro scope, durante la fase di compilazione

//Con let e const, le variabili  non sono utilizzabili prima della dichiarazione (Temporal Dead Zone)


