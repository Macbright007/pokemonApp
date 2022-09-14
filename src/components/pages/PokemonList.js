import PokemonCard from "./PokemonCard";
import "./pagesStyles/PokemonList.css";
// import CardSkeleton from "../layout/CardSkeleton";
// import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PokemonList = ({ pokemons, isloading }) => {
  return (
    <div className="pokemonlist__cont">
      {/* {isloading && <CardSkeleton cards={20} />} */}
      {/* {isloading && <Skeleton />} */}

      {/* {!isloading && */}
        {pokemons.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} key={pokemon.id} isloading={isloading} />;
        })
      }
    </div>
  );
};

export default PokemonList;
