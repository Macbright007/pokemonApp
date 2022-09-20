import ProgressBar from "@ramonak/react-progress-bar";
import "./pagesStyles/PokemonStat.css"
import PokemonContext from "../../contexts/PokemonContext";
import { useContext } from "react";

const PokemonProgressBar = ({pokemon}) => {
  const {addToFavorite} = useContext(PokemonContext)

  return (
    <div className="progress_cont">
      <div className="stats">
        <p>
          {pokemon.stats[0].stat.name}
          <span className="inner__stat">{pokemon.stats[0].base_stat}</span>
        </p>
        <ProgressBar
          completed={pokemon.stats[0].base_stat}
          width={350}
          height={8}
          bgColor="#CD2873"
          isLabelVisible={false}
        />
      </div>
      <div className="stats">
        <p>
          {pokemon.stats[1].stat.name}
          <span className="inner__stat">{pokemon.stats[1].base_stat}</span>
        </p>
        <ProgressBar
          completed={pokemon.stats[1].base_stat}
          width={350}
          height={8}
          bgColor="#CD2873"
          isLabelVisible={false}
        />
      </div>
      <div className="stats">
        <p>
          {pokemon.stats[2].stat.name}
          <span className="inner__stat">{pokemon.stats[2].base_stat}</span>
        </p>
        <ProgressBar
          completed={pokemon.stats[2].base_stat}
          width={350}
          height={8}
          bgColor="#CD2873"
          isLabelVisible={false}
        />
      </div>
      <div className="stats">
        <p>
          {pokemon.stats[3].stat.name}
          <span className="inner__stat">{pokemon.stats[3].base_stat}</span>
        </p>
        <ProgressBar
          completed={pokemon.stats[3].base_stat}
          width={350}
          height={8}
          bgColor="#EEC218"
          isLabelVisible={false}
        />
      </div>
      <div className="stats">
        <p>
          {pokemon.stats[4].stat.name}
          <span className="inner__stat">{pokemon.stats[4].base_stat}</span>
        </p>
        <ProgressBar
          completed={pokemon.stats[4].base_stat}
          width={350}
          height={8}
          bgColor="#EEC218"
          isLabelVisible={false}
        />
      </div>
      <div className="stats">
        <p>
          {pokemon.stats[5].stat.name}
          <span className="inner__stat">{pokemon.stats[5].base_stat}</span>
        </p>
        <ProgressBar
          completed={pokemon.stats[5].base_stat}
          width={350}
          height={8}
          bgColor="#CD2873"
          isLabelVisible={false}
        />
      </div>
      <button className="btn__btn" onClick={() => addToFavorite(pokemon)}>Mark as favourite</button>
    </div>
  );
};

export default PokemonProgressBar;
