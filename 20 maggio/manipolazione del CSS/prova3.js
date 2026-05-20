//In questo esempio, JavaScript modifica direttamente alcune proprietà CSS dell'elemento Div

//Seleziono elementi HTML

let box = document.getElementById("box");

let bntBord = document.getElementById("bntBordo");

let bntRotazione = document.getElementById("bntRotazione");

let bntNascondi = document.getElementById("bntNascondi");

btnBordo.addEventListener("click", function() {

    //cambio spessore e colore bordo
    box.style.border = "5px dashed red";

});



bntRotazione.addEventListener("click", function ()) {

    //Ruoto il box
    box.style.transform = "rotate(20deg)";
};

bntNascondi.addEventListener("click", function() {

    //cambio spessore e colore bordo
    box.style.visibility = "hidden";

});
