// Importiamo lo store per le azioni
import { useTodoStore } from "../store/useTodoStore";

// TaskItem riceve come props l'oggetto "task" completo da TaskList.
// È l'unico caso in cui usiamo props — TaskList conosce già i task
// e li passa giù a ogni TaskItem, è normale e corretto farlo qui.
function TaskItem({ task }) {
  // Prendiamo le tre azioni che ci servono dallo store
const deleteTask = useTodoStore((state) => state.deleteTask);
const toggleCompletion = useTodoStore((state) => state.toggleCompletion);
const updatePriority = useTodoStore((state) => state.updatePriority);

return (
// Contenitore del singolo task
<div>

{/* Checkbox — se spuntata il task è completato */}
    <input
        type="checkbox"
        // "checked" riflette il valore attuale di isCompleted
        checked={task.isCompleted}
        // Al click chiamiamo toggleCompletion passando l'id del task
        onChange={() => toggleCompletion(task.id)}
/>

{/* Testo del task */}
<span>{task.text}</span>

{/* Select per cambiare priorità al volo */}
<select
    // Il valore mostrato è sempre quello attuale del task
    value={task.priority}
    onChange={(e) => updatePriority(task.id, e.target.value)}
>
    <option value="High">Alta</option>
    <option value="Medium">Media</option>
    <option value="Low">Bassa</option>
    </select>

    {/* Bottone elimina — passa l'id del task a deleteTask */}
<button onClick={() => deleteTask(task.id)}>Elimina</button>

</div>
);
}

export default TaskItem;

//Rappresenta il singolo task nella lista. Legge i dati del task tramite props (passate da TaskList), e scrive nello store tramite deleteTask, toggleCompletion e updatePriority.