import Header from "./Header";
import "./pagesStyles/PokemonProfile.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import PokemonContext from "../../contexts/PokemonContext"
import PokemonFeatures from "./PokemonFeatures";
import PokemonStats from "./PokemonStats";



const PokemonProfile = () => {
  const { pokemons} = useContext(PokemonContext)
  const params = useParams()

  const pokemon = pokemons.find(pok => pok.id === Number(params.id))

  console.log('ppl',pokemon)

  return (
    <div className="container">
      <Header pokemon={pokemon} />
      <PokemonFeatures pokemon={pokemon} />
      <PokemonStats pokemon={pokemon} />
    </div>
  );
};

export default PokemonProfile;
