import { Link } from "react-router-dom";
import "./layoutStyles/NavLayout.css";
import PokemonContext from "../../contexts/PokemonContext";
import { useContext } from "react";

const Nav = () => {
  const {favouritePokemon} = useContext(PokemonContext)

  console.log("meeee", favouritePokemon)
  return (
    // <div className='nav__container'>
    <div className="nav__content">
      <Link to="/main/pokemon-list" style={{textDecoration: "none"}}>
        <h1>All Pokemons</h1>
      </Link>
      <Link to="/main/favourite" style={{textDecoration: "none"}}>
        <h2>
          Favourites <span>{favouritePokemon.length}</span>
        </h2>
      </Link>
    </div>
    // </div>
  );
};

export default Nav;
