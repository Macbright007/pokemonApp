import React from "react";
import "./pagesStyles/LandingPage.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="background">
      <div>
        <div className="cont">
          <img src={logo} alt="logo" />
          <div className="content">
            <h3>pokemon</h3>
            <h1>pokedex</h1>
          </div>
        </div>

        <Link to="/main">
          <button className="btn">Load Pokemons</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
