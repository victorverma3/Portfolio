import React from "react";
import "./Experiences.css";
import Footer from "../../components/footer/Footer";

const Experiences = () => {
  return (
    <>
      <div className="experienceContent">
        <h1 className="pageTitle">Experiences</h1>
        <h2 className="pageSubTitle">Professional</h2>
        <h2 className="pageSubTitle">Personal</h2>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Experiences;
