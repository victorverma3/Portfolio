import React from "react";
import "./Projects.css";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import { useEffect, useState } from "react";
import axios from "axios";
import candidatebios from "../../../public/images/candidatebios.png";
import pythonlogo from "../../../public/images/pythonlogo.png";
import portfolio from "../../../public/images/portfolio.png";
import reactlogo from "../../../public/images/reactlogo.png";
import typescriptlogo from "../../../public/images/typescriptlogo.png";
import htmllogo from "../../../public/images/htmllogo.png";
import csslogo from "../../../public/images/csslogo.png";
import sportsnews from "../../../public/images/sportsnews.png";
import Disclaimer from "../../components/Disclaimer/Disclaimer";
import Reveal from "../../components/Reveal/Reveal";

type projectDataType = {
  _id: string;
  title: string;
  image: string;
  description: string;
  technologies: [string];
  links: [[string]];
  sortOrder: number;
};

const Projects = () => {
  const projectCards = [
    {
      title: "CandidateBios",
      image: candidatebios,
      description:
        "I wrote Python software to gather the biodata of 150,000 U.S. state legislators from the web while working as an undergraduate research assistant.",
      technologies: [pythonlogo],
      links: [["GitHub", "https://github.com/victorverma3/Portfolio"]],
    },
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
  const [projectData, setProjectData] = useState<projectDataType[]>([]);
  useEffect(() => {
    axios
      .get(
        "https://victor-verma-portfolio-backend.vercel.app/project-collection"
      )
      .then((response) => {
        setProjectData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="project-content">
      <h1 className="page-title">Projects</h1>
      <h3>*Temporarily Unavailable - Migrating to MERN Stack*</h3>
      <Reveal>
        <ProjectCards cards={projectData} />
      </Reveal>
      <Disclaimer />
    </div>
  );
};

export default Projects;
