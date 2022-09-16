import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const API_url = "https://pokeapi.co/api/v2/pokemon/";

const PokemonContext = createContext();

export const PokemonProvider = ({children}) => {
    const [pokemons, setPokemons] = useState([]);
    const [favouritePokemon, setFavouritePokemon] = useState([])
    const [isloading, setIsLoading] = useState(false);

    const fetchPokemons = async () => {
        const res = await axios.get(API_url);
        getAllPokemons(res.data.results);
    };

    const getAllPokemons = async (res) => {
        res.map(async (item) => {
        const results = await axios.get(item.url);
        setPokemons((state) => {
            state = [...state, results.data];
            return state;
        });
        setIsLoading(true);
        });
    };

    const addToFavorite = (pokemons) => {
        setFavouritePokemon((prevState) => [...prevState, {pokemons}]);
    }

    useEffect(() => {
        fetchPokemons();
    }, []);

    return (
        <PokemonContext.Provider value={{pokemons, isloading, addToFavorite}}>
            {children}
        </PokemonContext.Provider>
    );
}

export default PokemonContext;