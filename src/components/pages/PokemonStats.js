import "./pagesStyles/PokemonStat.css"
import PokemonProgressBar from "./PokemonProgressBar";

const PokemonStats = ({ pokemon }) => {
  return (
    <div className="stat__cont">
      <h1 style={{marginLeft: '29rem'}}>Base stats</h1> 
      <PokemonProgressBar pokemon={pokemon}/>
    </div>
  );
};

export default PokemonStats;
