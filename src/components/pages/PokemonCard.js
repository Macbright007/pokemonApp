import "./pagesStyles/PokemonCard.css"
import { ColorExtractor } from "image-color-extraction";
import { useState, useEffect } from "react";

const PokemonCard = ({ pokemon, key }) => {
  const [imgColor, setImgColor] = useState({});

  const extractor = new ColorExtractor();

  useEffect(() => {
    extractor.extractColor(pokemon.sprites.front_default).then(() => {
      // console.log(extractor.colors);
      // console.log(extractor.chooseReadableColor()[1]);
      setImgColor(extractor.chooseReadableColor()[1]);
    });
  }, []);

  return (
    <div className="card__container" key={key}>
      <div className="img__cont" style={{ 
        backgroundColor: imgColor,
        }}> 
        <img src={pokemon.sprites.front_default} alt="logo" />
      </div>

      <h5>#00{pokemon.id}</h5>
      <h1>{pokemon.name}</h1>
      <p>{pokemon.types[0].type.name}</p>
    </div>
  );
};

export default PokemonCard;
