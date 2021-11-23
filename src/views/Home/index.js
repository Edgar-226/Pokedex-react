import { useContext, useEffect } from "react"
import PokemonContext from "../../context/pokemons";

export default function Home() {
    const {showAlert}  = useContext(PokemonContext);

    useEffect (() =>{
        showAlert();
    }, [])
    return(<div>Home</div>)
}