import "./App.css";
import Pokemon from './components/pages/Pokemon';
import LandingPage from './components/pages/LandingPage';
import Main from "./components/layout/Main";
import { Routes, Route } from "react-router-dom";
// import { SkeletonTheme } from "react-loading-skeleton";
import { useState, useEffect } from "react";
import axios from "axios";
import Favourites from "./components/pages/Favourites";

export const API_url = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [pokemons, setPokemons] = useState([]);
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

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    // <SkeletonTheme color="grey" highlightColor="#444">
      // <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/main" element={<Main pokemons={pokemons} isloading={isloading} />} />
            <Route path="/favourite" element={<Favourites />} />
            <Route path="/profile" element={<Pokemon pokemons={pokemons} />} />
          </Routes>
        </div>
      // </Router>
    // </SkeletonTheme>
  );
}

export default App;
