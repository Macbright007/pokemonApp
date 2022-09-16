import { MdArrowBackIosNew } from "react-icons/md";
import "../pages/pagesStyles/Header.css";
import pokemon from "../../images/pokemon.svg";
import vector from "../../images/Vector.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import PokemonContext from "../../contexts/PokemonContext"
import { useEffect, useState } from "react";
import axios from "axios";
import { API_url } from "../../contexts/PokemonContext";


const Header = () => {

  
  const { pokemons } = useContext(PokemonContext)
  const [details, setDetails] = useState();

  axios.get(`${API_url}${pokemons.id}`)
    // .then((res) => console.log(res))
    // .then((data) => {
    //   setPosts(data);
    // })
    // .catch(console.log("failed to fetch data"));
console.log(pokemons)
  return (
    <div className="header__container">
        {/* {pokemons.map((pokemon) => {
        return (

      <> */}
        <div className="top__nav">
        <Link to="/main">
          <MdArrowBackIosNew
            style={{ fontSize: 30, color: "rgba(0, 0, 0, 0.87)" }}
          />
        </Link>
      </div>
      <div className="main__nav">
        <h1>{pokemon.name}</h1>
        <p>Grass, Poison</p>
      </div>
      <div className="middle__nav">
        <h3>#001</h3>
        <div className="image__side">
          <img className="img1" src={pokemon} alt="pic" />
          <img className="img2" src={vector} alt="pic" />
        </div>
      </div>
      {/* </>
        )}
      )} */}
    </div>
  );
};

export default Header;
