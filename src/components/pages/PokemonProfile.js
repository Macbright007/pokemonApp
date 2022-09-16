import Header from "./Header";
import "./pagesStyles/Pokemon.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { API_url } from "../../contexts/PokemonContext";

const PokemonProfile = () => {
  // const [details, setDetails] = useState();

  // axios.get(`${API_url}${id}`)
  //   .then((res) => console.log(res))
  //   // .then((data) => {
  //   //   setPosts(data);
  //   // })
  //   // .catch(console.log("failed to fetch data"));

  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default PokemonProfile;
