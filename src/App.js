import './App.css';
// import Pokemon from './components/pages/Pokemon';
// import LandingPage from './components/pages/LandingPage';
import Main from './components/layout/Main';
// import {
//   Routes,
//   Route,
// } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";

export const API_url = "https://pokeapi.co/api/v2/pokemon/";

function App() {

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
      fetchPokemons();
    }, []);
  

  return (
    <div className="App">
      {/* <LandingPage /> */}
      <Main pokemons={pokemons} />
      {/* <Pokemon pokemons={pokemons} /> */}
    </div>
  );
}

export default App;
