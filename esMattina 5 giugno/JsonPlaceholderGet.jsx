import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SubmitPostButton from "./SubmitPostButton.jsx";

export default function JsonPlaceholderGet() {

// Stato che contiene tutti i post ottenuti dalla GET
const [posts, setPosts] = useState([]);

// Stato per eventuali errori della GET
const [error, setError] = useState(null);

// Inizializzo React Hook Form
const { register, handleSubmit, reset } = useForm();

// GET di tutti i post al montaggio del componente
useEffect(() => {
    const fetchPosts = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data); // salvo i post nello stato
    } catch {
        setError("Errore nel caricamento dei post");
    }
    };

    fetchPosts();
}, []);

// Funzione che React Hook Form chiama quando il form è valido
const onSubmit = (formData) => {
    console.log("Dati raccolti dal form:", formData);
    // NON faccio la POST qui → la farà il componente figlio
};

return (
    <div style={{ padding: "1rem" }}>
    <h2>Inserisci un nuovo post</h2>



      {/* Form gestito da React Hook Form */}
    <form onSubmit={handleSubmit(onSubmit)}>

        {/* Campo titolo */}
        <div>
        <label>Titolo:</label>
        <input
            type="text"
            {...register("title", { required: true })}
        />
        </div>



        {/* Campo contenuto */}
        <div>
        <label>Contenuto:</label>
        <textarea
            {...register("body", { required: true })}
        />
        </div>

        {/* Campo userId */}
        <div>
        <label>User ID:</label>
        <input
            type="number"
            {...register("userId", { required: true })}
        />
        </div>

        {/* Componente figlio */}
        <SubmitPostButton
        getFormData={() => {
            return new Promise((resolve) => {
            handleSubmit((data) => resolve(data))();
            });
        }}
        resetForm={reset}
        />
    </form>

    <hr />

    <h2>Tutti i post</h2>

      {/* Se c’è un errore, lo mostro */}
    {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Mostro tutti i post */}
    <ul>
        {posts.map(post => (
        <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
        </li>
        ))}
    </ul>

    </div>
);
}


//leggere per pezzi per una comprensione maggiore. 
