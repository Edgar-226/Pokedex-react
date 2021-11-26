import create from "zustand";
import apiCall from "../../api"

const usePokemonStore = create((set, get) => ({
    getPokemons: async () => {
        try {
            set({ isLoading: true, errorMessage: "", hasError: false });
            const pokemonsResult = await apiCall({ url: "https://pokeapi.co/api/v2/pokemon?limit=151", });
            set({ pokemons: pokemonsResult.results });
            
        } catch (error) {
            set({ pokemon: [], errorMessage: "Algo ha pasado, verifica tu conexion", hasError: true });
        } finally {
            set({ isLoading: false })
        }

    },
    pokemons: [],
    getPokemonDetail: async (id) => {
        if (!id) return Promise.reject("Id es requerido");

        try {
            set({ isLoading: true, errorMessage: "", hasError: false });
            const pokemonDetail = await apiCall({ url: `https://pokeapi.co/api/v2/pokemon/${id}`, });
            set({ pokemonDetail });
        } catch (error) {
            set({ pokemonDetail: {}, errorMessage: "Algo ha pasado, verifica tu conexion", hasError: true });
        } finally {
            set({ isLoading: false });
        }
    },
    pokemonDetail: {},
    isLoading: false,
    errorMessage: "",
    hasError: false
}));

export default usePokemonStore;