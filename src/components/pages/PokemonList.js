import PokemonCard from "./PokemonCard";
import "./pagesStyles/PokemonList.css";
// import CardSkeleton from "../layout/CardSkeleton";
// import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";
import { useContext } from "react";
import PokemonContext from "../../contexts/PokemonContext"


const PokemonList = () => {
  const { pokemons, isloading } = useContext(PokemonContext)
  return (
    <div className="pokemonlist__cont">
      {/* {isloading && <CardSkeleton cards={20} />} */}
      {/* {isloading && <Skeleton />} */}

      {/* {!isloading && */}
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
