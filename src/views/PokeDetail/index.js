import { useParams } from "react-router";
import { useEffect, useContext } from "react";

import PokemonContext from "../../context/pokemons";
import PokeStats from "./components/PokeStats";

export default function PokeDetail() {
    const { id } = useParams()
    const { getPokemonDetail, pokemonDetail, isLoading } = useContext(PokemonContext)

    useEffect(() => {
        /**
        * Cada que se cargue la pantalla o cada que cambie el id
        * solicitar el detalle del polemon
        */
        getPokemonDetail(id).catch(null);
    }, [])

    if (isLoading) {
        return (<p>Cargando pokemon...</p>)
    }
    return (
        <div>
            <h3 style={{"text-transform": "capitalize"}}>{`${pokemonDetail?.name}`}</h3>
            <img src={`${pokemonDetail.sprites.front_default}`} />
            <h4 style={{ marginTop: 30, marginBottom: 15 }}>Info General</h4>
            <p>{`No Pokedex: ${pokemonDetail?.id}`}</p>
            <p>{`Peso: ${pokemonDetail?.weight}`}</p>
            <p>{`Altura: ${pokemonDetail?.height}`}</p>
            <div>
                <h4 style={{ marginTop: 30, marginBottom: 15 }}>Estadisticas</h4>
                <PokeStats stats={pokemonDetail?.stats ?? []} />
            </div>
        </div>
    );
}