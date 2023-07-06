import React from "react";
import "./Projects.css";
import Footer from "../../components/footer/Footer";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import portfolio from "../../images/portfolio.png";
import reactlogo from "../../images/reactlogo.png";
import typescriptlogo from "../../images/typescriptlogo.png";
import htmllogo from "../../images/htmllogo.png";
import csslogo from "../../images/csslogo.png";
import sportsnews from "../../images/sportsnews.png";
import pythonlogo from "../../images/pythonlogo.png";
import Disclaimer from "../../components/Disclaimer/Disclaimer";

const Projects = () => {
  const projectCards = [
    {
      title: "Portfolio Website",
      image: portfolio,
      description:
        "I designed my own personal portfolio website and deployed it using Vercel. The site periodically receives maintenance, updates, and improvements. ",
      technologies: [reactlogo, typescriptlogo, htmllogo, csslogo],
      link: "GitHub",
      url: "https://github.com/victorverma3/Portfolio",
    },
    {
      title: "SportsNews",
      image: sportsnews,
      technologies: [pythonlogo, htmllogo, csslogo],
      description:
        "I created a script that scrapes the latest headlines for 6 sports and sends them as formatted emails to users on mailing lists every morning at 9:00am est. ",
      link: "GitHub",
      url: "https://github.com/victorverma3/SportsNews",
    },
  ];
  return (
    <>
      <div className="projectContent">
        <h1 className="pageTitle">Projects</h1>
        <ProjectCards cards={projectCards} />
        <Disclaimer />
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Projects;
