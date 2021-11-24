import PokemonContext from "./index";

import apiCall from "../../api";
import { useState } from "react";

export default function PokemonProvider({ children }) {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState([]);

    const getPokemons = async () => {
        try {
            const pokemonsResult = await apiCall({ url: "https://pokeapi.co/api/v2/pokemon?limit=151", });
            setPokemons(pokemonsResult.results);
        } catch (error) {
            setPokemons([]);
        }
    };

    const getPokemonDetail = async (id) => {
        if (!id) return Promise.reject("Id es requerido");

        try {
            const pokemonDetail = await apiCall({ url: `https://pokeapi.co/api/v2/pokemon/${id}`, });
            setPokemonDetail(pokemonDetail);
        } catch (error) {
            setPokemonDetail({});
        }
    }

    return (
        <PokemonContext.Provider value={{
            getPokemons,
            pokemons,
            getPokemonDetail,
            pokemonDetail
        }}>
            {children}
        </PokemonContext.Provider>
    );
};