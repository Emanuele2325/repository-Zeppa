const body = document.body;
const temaButton = document.getElementById('temaButton');

//controllo del tema salvato
const temaSalvato = localStorage.getItem('tema');

if (temaSalvato === "scuro") {
    body.classList.add("dark");
}

//cambio tema
temaButton.addEventListener("click", function() {
body.classList.toggle("dark");
 


// Salvataggio stato tema

    if (body.classList.contains("dark")) {

        localStorage.setItem("tema", "dark");

    } else {

        localStorage.setItem("tema", "light");

    }

});
