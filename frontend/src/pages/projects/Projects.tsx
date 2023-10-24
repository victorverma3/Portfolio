import React, { useEffect, useState } from "react";
import axios from "axios";

import Disclaimer from "../../components/Disclaimer/Disclaimer";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import Reveal from "../../components/Reveal/Reveal";

import "./Projects.css";

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
  /*
  // projectTest is used to simulate database in local development
  const projectTest = [
    {
      title: "CandidateBios",
      image: "test",
      description:
        "I designed Python software to gather the biodata of 150,000 U.S. state legislators from the web. I utilized the Google Search API, ChatGPT API, BeautifulSoup, and pandas. I also implemented multithreading, rate-limiting, and error-handling.",
      technologies: ["test"],
      links: [["test"]],
      sortOrder: 1,
    },
    {
      title: "Portfolio Website",
      image: "test",
      description:
        "I created this portfolio website with the MERN stack using TypeScript and Bootstrap. I deployed both the backend and frontend on Vercel. The site periodically receives maintenance and improvements as I accomplish more and learn new skills.",
      technologies: ["test"],
      links: [["Live Demo"], ["GitHub"]],
      sortOrder: 2,
    },
    {
      title: "SportsNews",
      image: "test",
      description:
        "I developed a Python script to facilitate the real-time news retrieval for 6 sports, automating headline formatting, data scraping, and newsletter creation. I used HTML and CSS to design email newsletters that are delivered daily at 9:00am EST.",
      technologies: ["test"],
      links: [["GitHub"]],
      sortOrder: 3,
    },
  ]; */
  return (
    <div className="project-content">
      <h1 className="page-title">Projects</h1>
      <Reveal>
        <ProjectCards cards={projectData} />
      </Reveal>
      <Disclaimer />
    </div>
  );
};

export default Projects;
