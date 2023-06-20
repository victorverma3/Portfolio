import React from "react";
import "./Error.css";
import image from "../../images/tom.jpg";
import Footer from "../../components/Footer/Footer";

const Error = () => {
  return (
    <>
      <img className="errorImage" src={image} alt="error loading image"></img>
      <Footer />
    </>
  );
};

export default Error;
