import PokemonCard from "./PokemonCard";
import "./pagesStyles/PokemonList.css";
import CardSkeleton from "../layout/CardSkeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useContext } from "react";
import PokemonContext from "../../contexts/PokemonContext"


const PokemonList = () => {
  const { pokemons, isloading } = useContext(PokemonContext)
  return (
    <div className="pokemonlist__cont">
      {isloading && !pokemons.length && <CardSkeleton cards={20} />}
    
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            pokemon={pokemon}
            key={pokemon.id}
            isloading={isloading}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
