import React from "react";
import "./layoutStyles/HeaderLayout.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header__container">
      <Link to="/" style={{textDecoration: "none"}}>
        <div className="header__top">
          <img src={logo} alt="logo" />
          <h1>pokedex</h1>
        </div>
      </Link>
    </div>
  );
};

export default Header;
