import React from "react";

import YourImage from "../images/hero.png";
import "../App";

const Home = () => {
  return (
    <div className="d-flex justify-content-center ">
      <img className="p-2" src={YourImage} />
    </div>
  );
};

export default Home;
