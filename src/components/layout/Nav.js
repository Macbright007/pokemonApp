import React from "react";
import { Link } from "react-router-dom";
import "./layoutStyles/NavLayout.css";

const Nav = () => {
  return (
    // <div className='nav__container'>
    <div className="nav__content">
      <Link to="/main" style={{textDecoration: "none"}}>
        <h1>All Pokemons</h1>
      </Link>
      <Link to="/favourite" style={{textDecoration: "none"}}>
        <h2>
          Favourites <span>1</span>
        </h2>
      </Link>
    </div>
    // </div>
  );
};

export default Nav;
