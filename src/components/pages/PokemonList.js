import PokemonCard from "./PokemonCard";
import "./pagesStyles/PokemonList.css";

const PokemonList = ({pokemons}) => {

  return (
    <div className="pokemonlist__cont">
        {
          pokemons.map((pokemon)=> {
            return <PokemonCard pokemon={pokemon} key={pokemon.id} />
          })
        }
    </div>
  );
};

export default PokemonList;
