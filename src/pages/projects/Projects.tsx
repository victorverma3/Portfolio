import React from "react";
import "./Projects.css";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import portfolio from "../../images/portfolio.png";
import reactlogo from "../../images/reactlogo.png";
import typescriptlogo from "../../images/typescriptlogo.png";
import htmllogo from "../../images/htmllogo.png";
import csslogo from "../../images/csslogo.png";
import sportsnews from "../../images/sportsnews.png";
import pythonlogo from "../../images/pythonlogo.png";
import Disclaimer from "../../components/Disclaimer/Disclaimer";
import Reveal from "../../components/Reveal/Reveal";

const Projects = () => {
  const projectCards = [
    {
      title: "Portfolio Website",
      image: portfolio,
      description:
        "I designed my own personal portfolio website and deployed it using Vercel. The site periodically receives maintenance, updates, and improvements. ",
      technologies: [reactlogo, typescriptlogo, htmllogo, csslogo],
      links: [
        ["Live Demo", "https://victor-verma-portfolio.vercel.app/"],
        ["GitHub", "https://github.com/victorverma3/Portfolio"],
      ],
    },
    {
      title: "SportsNews",
      image: sportsnews,
      technologies: [pythonlogo, htmllogo, csslogo],
      description:
        "I created a script that scrapes the latest headlines for 6 sports and sends them as formatted emails to users on mailing lists every morning at 9:00am est. ",
      links: [["GitHub", "https://github.com/victorverma3/SportsNews"]],
    },
  ];
  return (
    <>
      <div className="projectContent">
        <h1 className="pageTitle">Projects</h1>
        <Reveal>
          <ProjectCards cards={projectCards} />
        </Reveal>
        <Disclaimer />
      </div>
    </>
  );
};

export default Projects;
