import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'

export function DettaglioPost() {

const { id } = useParams
const navigate = useNavigate()
const [post, setPost] = useState(null)
const [loading, setLoading] = useState(true)

useEffect(() => {
axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then(response => {
setPost(response.data)
setLoading(false)
})
}, [id])

if (loading) return <h2>Caricamento in corso</h2>

return (
<>
<button onClick={() => navigate(-1)}>Torna indietro</button>
<h2>{post.title}</h2>
<p>{post.body}</p>
<p>Id autore: {post.userId}</p>
</>
)
}