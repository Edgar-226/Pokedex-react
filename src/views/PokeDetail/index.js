import { useParams } from "react-router";
import { useEffect, useContext } from "react";

import PokemonContext from "../../context/pokemons";

export default function PokeDetail() {
    const { id } = useParams()
    const { getPokemonDetail, pokemonDetail  } = useContext(PokemonContext)

    useEffect(() => {
        /**
        * Cada que se cargue la pantalla o cada que cambie el id
        * solicitar el detalle del polemon
        */
       getPokemonDetail(id ).catch(null);
    }, [])

    console.log(pokemonDetail)
    return (

        <h1>PokeDetail</h1>
    );
}