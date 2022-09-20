import { MdArrowBackIosNew } from "react-icons/md";
import "../pages/pagesStyles/Header.css";
import vector from "../../images/Vector.svg";
import { Link } from "react-router-dom";



const Header = ({pokemon}) => {

  return (
    <div className="header__cont">
        <div className="top__nav">
        <Link to="/main/pokemon-list">
          <MdArrowBackIosNew
            style={{ fontSize: 30, color: "rgba(0, 0, 0, 0.87)" }}
          />
        </Link>
      </div>
      <div className="main__nav">
        <h1>{pokemon.name}</h1>
        <p>{pokemon.types[0].type.name}</p>
      </div>
      <div className="middle__nav">
        <h3>#00{pokemon.id}</h3>
        <div className="image__side">
          <img className="img1" src={pokemon.sprites.front_default} alt="pic" />
          <img className="img2" src={vector} alt="pic" />
        </div>
      </div>
    </div>
  );
};

export default Header;
