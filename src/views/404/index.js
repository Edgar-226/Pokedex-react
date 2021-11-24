import PokemonContext from "../../context/pokemons"
import { useContext } from "react"

export default function FourOFour() {
    const { pokemons } = useContext(PokemonContext);
    console.log(pokemons)
    return(
        <div>404: Ruta no encontrada</div>
    )
}