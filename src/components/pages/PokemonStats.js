import "./pagesStyles/PokemonStat.css";
import PokemonProgressBar from "./PokemonProgressBar";

const PokemonStats = ({ pokemon }) => {
  return (
    <div className="stat__cont">
      <div className="stat__wrapper">
        <h1>Base stats</h1>
        <PokemonProgressBar pokemon={pokemon} />
      </div>
    </div>
  );
};

export default PokemonStats;
