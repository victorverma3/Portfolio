import React from "react";
import "./Projects.css";
import Footer from "../../components/footer/Footer";
import CardList from "../../components/CardList/CardList";

const Projects = () => {
  const projectCards = [
    {
      title: "SportsNews",
      image: "placeholder",
      description: "placeholder",
      link: "Github",
      url: "placeholder",
    },
    {
      title: "MovieData",
      image: "placeholder",
      description: "placeholder",
      link: "Github",
      url: "placeholder",
    },
    {
      title: "IGBot",
      image: "placeholder",
      description: "placeholder",
      link: "Github",
      url: "placeholder",
    },
    {
      title: "8-Puzzle Solver",
      image: "placeholder",
      description: "placeholder",
      link: "Github",
      url: "placeholder",
    },
    {
      title: "Connect4",
      image: "placeholder",
      description: "placeholder",
      link: "Github",
      url: "placeholder",
    },
  ];
  return (
    <>
      <div className="projectContent">
        <h1 className="pageTitle">Projects</h1>
        <CardList cards={projectCards} />
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Projects;
