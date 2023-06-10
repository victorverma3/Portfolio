import React from "react";
import "./Projects.css";
import Footer from "../../components/footer/Footer";

const Projects = () => {
  return (
    <>
      <div className="projectContent">
        <h1 className="pageTitle">Projects</h1>
        <h2 className="pageSubTitle">Personal</h2>
        <h2 className="pageSubTitle">Classwork</h2>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Projects;
