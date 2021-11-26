import { useEffect } from "react"
import shallow from "zustand/shallow"
// import PokemonContext from "../../context/pokemons";
import PokemonList from "./components/PokemonList";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import usePokemonStore from "../../zustand/stores/pokemons";

export default function Home() {
    const {
        getPokemons,
        pokemons,
        isLoading,
        hasError,
        errorMessage
    } = usePokemonStore(state => ({
        getPokemons: state.getPokemons,
        pokemons: state.pokemons,
        isLoading: state.isLoading,
        hasError: state.hasError,
        errorMessage: state.errorMessage
    }), shallow)
    // const { getPokemons, pokemons, isLoading, hasError, errorMessage } = useContext(PokemonContext);

    useEffect(() => {
        getPokemons().catch(null);
    }, [])

    if (isLoading) {
        return (<Loading title="Cargando resultados.." />)
    }

    console.log(pokemons)
    return (
        <>
            {hasError ? <ErrorMessage message={errorMessage} /> : <PokemonList pokemons={pokemons} />}
        </>
    );

}