import PokemonCard from "./PokemonCard";
import "./pagesStyles/PokemonList.css";
import CardSkeleton from "../layout/CardSkeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useContext, useEffect, useRef } from "react";
import PokemonContext from "../../contexts/PokemonContext"


const PokemonList = () => {
  const { pokemons, isloading, handleScroll } = useContext(PokemonContext)


  const observer = useRef(null);
  useEffect(() => {
    const watch = new IntersectionObserver(handleScroll);
    if (observer.current) {
      watch.observe(observer.current);
    }
  }, []);



  return (
    <div  className="pokemonlist__cont">
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
      <div ref={observer}></div>
    </div>
  );
};

export default PokemonList;
