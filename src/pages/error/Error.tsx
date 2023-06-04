import React from "react";
import "./Error.css";
import image from "../../images/tom.jpg";

const Error = () => {
  return (
    <img className="errorImage" src={image} alt="error loading image"></img>
  );
};

export default Error;
