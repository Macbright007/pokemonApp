import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const API_url = "https://pokeapi.co/api/v2/pokemon/";

const PokemonContext = createContext();

export const PokemonProvider = ({children}) => {
    const [pokemons, setPokemons] = useState([]);
    // const [favouritePokemon, setFavouritePokemon] = useState([])
    const [isloading, setIsLoading] = useState(false);

    const fetchPokemons = async () => {
        setIsLoading(true);

        const res = await axios.get(`${API_url}?offset=${offset}&limit=${limit}`);
        getAllPokemons(res.data.results);
    };

    const getAllPokemons = async (res) => {
        res.map(async (item) => {
        const results = await axios.get(item.url);
        setPokemons((state) => {
            state = [...state, results.data];
            return state;
        });
        setIsLoading(false);
        }); 
    };

    // function to add pokemon to favourite page
    const addToFavorite = (pokemon) => {
        // setFavouritePokemon((prevState) => [...prevState, pokemon]);
        localStorage.setItem('favPokemons', JSON.stringify([...getPokemonsFromStorage(), pokemon]))
    }

// function to get pokemon from localStorage
    const getPokemonsFromStorage = () => {
        const favPokemons = localStorage.getItem('favPokemons')
        const parsedPokemons = JSON.parse(favPokemons)
        return Array.isArray(parsedPokemons) ? parsedPokemons : []
      }


    let offset = 0;
    const limit = 20;

       useEffect(() => {
        fetchPokemons();
        window.addEventListener("scroll", handleScroll); // attaching scroll event listener
    }, []);

    // console.log(pokemons)

        //function to handle scroll
        const handleScroll = () => {
            let userScrollHeight = window.innerHeight + window.scrollY;
            let windowBottomHeight = document.documentElement.offsetHeight;
            if (userScrollHeight >= windowBottomHeight) {
                fetchPokemons();
                offset+=20;
            }
        };

    return (
        <PokemonContext.Provider value={{pokemons, isloading, addToFavorite, favouritePokemon:getPokemonsFromStorage()}}>
            {children}
        </PokemonContext.Provider>
    );
}

export default PokemonContext;