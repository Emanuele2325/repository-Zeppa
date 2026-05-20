let bottone = document.getElementById("btn");

let output = document.getElementById("output");


//CALLBACK

function operazioneConCallback(callback) {

    setTimeout(function() {

        callback("Dati ricevuti tramite callback");

    }, 2000);

}

// In questo esempio, setTimeOut simula una operazione lenta, come richiesta ad un server



//PROMISE

function operazioneConPromise() {

    return new Promise(function(resolve, reject) {

        setTimeout(function() {

            resolve("Dati ricevuti tramite Promise");

        }, 2000);

    });

}


//La funzione con callback mostra il modello tradizionale, mentra con Promise rappresenta un risultato futuro


// ASYNC / AWAIT
async function caricaDati() {

    output.textContent = "Caricamento in corso...";


    try {

        let risultato = await operazioneConPromise();

        output.textContent = risultato;

    } catch (errore) {

        output.textContent = "Errore nel caricamento";

    }

}


bottone.addEventListener("click", function() {

    caricaDati();

});

//La funzione caricaDati(), dichiarata con async, usa await per aspettare il completamento della Promise senza bloccare l'interfaccia della pagina