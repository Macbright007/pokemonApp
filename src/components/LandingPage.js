import React from "react";
import "../components/styles/LandingPage.css";
import logo from "../images/logo.svg";

const LandingPage = () => {
  return (
    <div className="background">
      <div className="cont">
        <img src={logo} alt="logo" />
        <div className="content">
          <h3>pokemon</h3>
          <h1>pokedex</h1>
        </div>
      </div>

      {/* <button className="btn">Next Page</button> */}
    </div>
  );
};

export default LandingPage;
