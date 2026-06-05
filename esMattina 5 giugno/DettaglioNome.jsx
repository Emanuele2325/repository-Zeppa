import { useParams } from "react-router-dom";

export function DettaglioNome() {

const { nome } = useParams()

return (
<h3>Ciao, {nome}!</h3>
)
}