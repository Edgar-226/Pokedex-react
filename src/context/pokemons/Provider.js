import PokemonContext from "./index";

import apiCall from "../../api";
import { useState } from "react";

export default function PokemonProvider({ children }) {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)


    const getPokemons = async () => {
        try {
            setIsLoading(true);
            setHasError(false)
            setErrorMessage("");

            const pokemonsResult = await apiCall({ url: "https://pokeapi.co/api/v2/pokemon?limit=151", });
            setPokemons(pokemonsResult.results);
        } catch (error) {
            setPokemons([]);
            setHasError(true)
            setErrorMessage("Algo ha pasado, verifica la conexion");
        } finally {
            setIsLoading(false)
        }
    };

    const getPokemonDetail = async (id) => {
        if (!id) return Promise.reject("Id es requerido");

        try {
            setIsLoading(true);
            setHasError(false)
            setErrorMessage("");
            const pokemonDetail = await apiCall({ url: `https://pokeapi.co/api/v2/pokemon/${id}`, });
            setPokemonDetail(pokemonDetail);
        } catch (error) {
            setPokemonDetail({});
            setHasError(true)
            setErrorMessage("Algo ha pasado, verifica la conexion");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <PokemonContext.Provider value={{
            getPokemons,
            pokemons,
            getPokemonDetail,
            pokemonDetail,
            isLoading,
            errorMessage,
            hasError
        }}>
            {children}
        </PokemonContext.Provider>
    );
};