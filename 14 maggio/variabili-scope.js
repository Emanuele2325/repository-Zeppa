let globale = "visibile ovunque";

if (true){
    let locale = "visibile solo qui dentro";
    console.log(globale); // Accesso alla variabile globale
    console.log(locale);  // Accesso alla variabile locale
}

//console.log(locale); // Errore: locale non è definita, non è accessibile fuori dal blocco if

//Lo scope definisce DOVE una variabile è accessibile nel codice.
//Con le variabili LET e CONST, si ha block scope, il che significa che sono accessibili solo all'interno del blocco in cui sono dichiarate. Con VAR, si ha function scope, il che significa che sono accessibili all'interno della funzione in cui sono dichiarate, ma non al di fuori di essa.
//le variabili dichiarate fuori da qualsiasi funzione blocco hanno uno scope globale, il che significa che sono accessibili da qualsiasi 
//parte del codice. 

