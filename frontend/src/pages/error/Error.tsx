import React from "react";

import "./Error.css";

import tom from "../../../public/images/tom.png";

const Error = () => {
  return (
    <div className="error-background">
      <img className="error-image" src={tom} alt="error loading image"></img>
    </div>
  );
};

export default Error;
