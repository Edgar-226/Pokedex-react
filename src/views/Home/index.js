import { useContext, useEffect } from "react"
import PokemonContext from "../../context/pokemons";
import PokemonList from "./components/PokemonList";

export default function Home() {
    const { getPokemons, pokemons } = useContext(PokemonContext);
    
    useEffect(() => {
        getPokemons().catch(null);
    }, [])

    console.log(pokemons)
    return (
        <div>
            <PokemonList pokemons = {pokemons}/>
        </div>
    )
}