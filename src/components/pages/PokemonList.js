import PokemonCard from "./PokemonCard";
import "./pagesStyles/PokemonList.css";
// import CardSkeleton from "../layout/CardSkeleton";
// import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";
// import { Link } from "react-router-dom";


const PokemonList = ({ pokemons, isloading }) => {
  return (
    <div className="pokemonlist__cont">
      {/* {isloading && <CardSkeleton cards={20} />} */}
      {/* {isloading && <Skeleton />} */}

      {/* {!isloading && */}
      {pokemons.map((pokemon) => {
        return (
          // <Link to="/profile" style={{ textDecoration: "none" }}>
            <PokemonCard
              pokemon={pokemon}
              key={pokemon.id}
              isloading={isloading}
            />
          // </Link>
        );
      })}
    </div>
  );
};

export default PokemonList;
