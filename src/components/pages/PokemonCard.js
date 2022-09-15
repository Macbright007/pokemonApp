import "./pagesStyles/PokemonCard.css"
import { ColorExtractor } from "image-color-extraction";
import { useState, useEffect } from "react";
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
// import CardSkeleton from "../layout/CardSkeleton";



const PokemonCard = ({ pokemon, key, isloading }) => {
  const [imgColor, setImgColor] = useState({});

  const extractor = new ColorExtractor();

  useEffect(() => {
    extractor.extractColor(pokemon.sprites.front_default).then(() => {
      setImgColor(`${extractor.chooseReadableColor()[1]}6b`);
    });
  }, []);


  return (
   
    <div className="card__container" key={key}>
      {/* {!isloading ? (<Skeleton height={100} width= {100} style={{backgroundColor: '#D3D3D3'}} />) : 
        ( */}
          <div className="img__cont" style={{ 
            backgroundColor: imgColor,
            }}> 
            <img src={pokemon.sprites.front_default} alt="logo" />
          </div>
        {/* )
      } */}
      

      <h5>#00{pokemon.id}</h5>
      <h1>{pokemon.name}</h1>
      <p>{pokemon.types[0].type.name}</p>
    </div>
  );
};

export default PokemonCard;
