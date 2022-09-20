import "./App.css";
import PokemonProfile from "./components/pages/PokemonProfile";
import LandingPage from "./components/pages/LandingPage";
import Main from "./components/layout/Main";
import { Routes, Route } from "react-router-dom";
// import { SkeletonTheme } from "react-loading-skeleton";
// import { useState, useEffect } from "react";
import FavouritesPage from "./components/pages/FavouritesPage";
import { PokemonProvider } from "./contexts/PokemonContext";
import PokemonList from "./components/pages/PokemonList"

function App() {
  return (
    // <SkeletonTheme color="grey" highlightColor="#444">
    <div className="App">
      <PokemonProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="main" element={<Main />}>
            <Route path="pokemon-list" element={<PokemonList />} />
            <Route path="favourite" element={<FavouritesPage />} />
          </Route>
          <Route path="profile/:id" element={<PokemonProfile />} />
        </Routes>
      </PokemonProvider>
    </div>
    // </SkeletonTheme>
  );
}

export default App;
