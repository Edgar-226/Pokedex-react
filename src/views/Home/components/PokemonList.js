export default function PokemonList({ pokemons }) {
    return (
        <div>
            {pokemons?.map(({name}, index) => (
                <div key={index}>
                {<p>{name}</p>}
                </div>
            ))}
        </div>
    );
}