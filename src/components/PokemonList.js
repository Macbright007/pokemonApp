import PokemonCard from "./PokemonCard";
import { useState, useEffect } from "react";
import "../components/styles/PokemonList.css";
// import { Data  } from '../Data'
import axios from "axios";

export const API_url = "https://pokeapi.co/api/v2/pokemon/";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
//   const [pokemonurl, setPokemonUrl] = useState('')
  // const [loading, setLoading] = useState(true)

  const fetchPokemons = async () => {
    const res = await axios.get(API_url);
    getAllPokemons(res.data.results);
  }

  const getAllPokemons = async(res) => {
    res.map(async(item) => {
        const results = await axios.get(item.url)
        setPokemons(state=> {
            state=[...state, results.data]
            return state;
    })
    })
  }
    
  useEffect(() => {
    // setLoading(true);
    // axios
    //   .get(API_url)
    //   .then((res) => {
    //     setPokemons(res.data.results[0]);
    //   })
    //   .catch(console.log("failed to fetch data"));
    //   .finally(() => setLoading(false));
    fetchPokemons();
  }, []);

  return (
    <div className="pokemonlist__cont">
        <PokemonCard pokemon={pokemons} key={pokemons.id} />;
    </div>
  );
};

export default PokemonList;
