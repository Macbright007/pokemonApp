import { MdArrowBackIosNew } from "react-icons/md";
import "./pokmonStyles/Header.css"
import pokemon from "../../images/pokemon.svg"
import vector from "../../images/Vector.svg"

const Header = () => {
  return (
    <div className="header__container">
      <div className="top__nav">
        <MdArrowBackIosNew style={{fontSize: 30, color: "rgba(0, 0, 0, 0.87)"}}/>
      </div>
      <div className="main__nav">
        <h1>Bulbasaur</h1>
        <p>Grass, Poison</p>
      </div>
      <div className="middle__nav">
        <h3>#001</h3>
        <div className="image__side">
          <img className="img1" src={pokemon} alt="pic" />
          <img className="img2" src={vector} alt="pic" />
        </div>
      </div>
    </div>
  );
};

export default Header;
