import { useContext } from "react";
import PokemonContext from "../../contexts/PokemonContext";
import "./pagesStyles/PokemonCard.css"
import PokemonCard from "./PokemonCard";

const FavouritesPage = () => {
  const { favouritePokemon } = useContext(PokemonContext);

  return (
    <div className="fav__cont">
      {favouritePokemon?.map((fkp, key) => {
        return (
          // <div className="card__container" key={key}>
          //   <div
          //     className="img__cont"
              
          //   >
          //     <img src={fkp.sprites.front_default} alt="logo" />
          //   </div>
          //   <h5>#00{fkp?.id}</h5>
          //   <h1>{fkp?.name}</h1>
          //   <p>{fkp.types[0].type.name}</p>
          // </div><PokemonCard
          <PokemonCard
            pokemon={fkp}
            key={key}
            // isloading={isloading}
          />

        );
      })}
    </div>
  );
};

export default FavouritesPage;
