import React from "react";
import "./Error.css";
import tom from "../../images/tom.png";

const Error = () => {
  return (
    <div className="errorBackground">
      <img className="errorImage" src={tom} alt="error loading image"></img>
    </div>
  );
};

export default Error;
