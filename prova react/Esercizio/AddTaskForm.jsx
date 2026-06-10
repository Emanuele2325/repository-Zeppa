// Importiamo useState per gestire i valori del form localmente
import { useState } from "react";
// Importiamo lo store per accedere all'azione addTask
import { useTodoStore } from "../store/useTodoStore";

function AddTaskForm() {
// "text" e "setText" gestiscono il campo testo del form.
// È uno stato locale perché interessa solo questo componente.
const [text, setText] = useState("");

// "priority" e "setPriority" gestiscono il valore della select.
// Partiamo con "Medium" come valore predefinito.
const [priority, setPriority] = useState("Medium");

// Prendiamo dal store solo la funzione addTask.
// (state) => state.addTask è il "selettore" — dice a Zustand
// quale parte dello store ci interessa.
const addTask = useTodoStore((state) => state.addTask);

// Funzione chiamata quando l'utente clicca "Aggiungi"
function handleSubmit() {
// Se il testo è vuoto (o solo spazi), non facciamo nulla
if (text.trim() === "") {
    return;
}
// Chiamiamo addTask dello store passando testo e priorità
addTask(text, priority);
// Svuotiamo il campo testo dopo l'aggiunta
setText("");
// Resettiamo la priorità al valore predefinito
setPriority("Medium");
}

return (
// Contenitore del form
<div>
<h2>Aggiungi un Task</h2>

{/* Input di testo — value e onChange lo tengono in sync con lo stato */}
<input
    type="text"
    placeholder="Descrizione del task..."
    value={text}
    // "e" è l'evento — e.target.value è il testo digitato
    onChange={(e) => setText(e.target.value)}
/>

{/* Select per scegliere la priorità */}
<select
    value={priority}
    onChange={(e) => setPriority(e.target.value)}
>
{/* Ogni option corrisponde a un valore valido di priority */}
    <option value="High">Alta</option>
    <option value="Medium">Media</option>
    <option value="Low">Bassa</option>
</select>

{/* Bottone che chiama handleSubmit al click */}
<button onClick={handleSubmit}>Aggiungi</button>
</div>
);
}

// Esportiamo il componente così App.jsx può importarlo
export default AddTaskForm;