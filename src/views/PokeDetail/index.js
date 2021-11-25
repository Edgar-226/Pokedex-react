import { useParams } from "react-router";
import { useEffect, useContext } from "react";

import PokemonContext from "../../context/pokemons";
import PokeStats from "./components/PokeStats";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

export default function PokeDetail() {
    const { id } = useParams()
    const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } = useContext(PokemonContext)

    useEffect(() => {
        /**
        * Cada que se cargue la pantalla o cada que cambie el id
        * solicitar el detalle del polemon
        */
        getPokemonDetail(id).catch(null);
    }, [])

    if (isLoading) {
        return (<Loading title="Cargando Pokemon..." />)
    }
    return (
        <div>
            {hasError ? <ErrorMessage message={errorMessage} /> : (
                <>
                    <h3 style={{ "text-transform": "capitalize" }}>{`${pokemonDetail?.name}`}</h3>
                    {/* <img src={`${pokemonDetail.sprites.front_default}`} /> */}
                    <h4 style={{ marginTop: 30, marginBottom: 15 }}>Info General</h4>
                    <p>{`No Pokedex: ${pokemonDetail?.id}`}</p>
                    <p>{`Peso: ${pokemonDetail?.weight} kg`}</p>
                    <p>{`Altura: ${pokemonDetail?.height} cm`}</p>
                    <div>
                        <h4 style={{ marginTop: 30, marginBottom: 15 }}>Estadisticas</h4>
                        <PokeStats stats={pokemonDetail?.stats ?? []} />
                    </div>
                </>
            )}

        </div>
    );
}