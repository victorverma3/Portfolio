import React from "react";
import "./Projects.css";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import { useEffect, useState } from "react";
import axios from "axios";
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
      <Reveal>
        <ProjectCards cards={projectData} />
      </Reveal>
      <Disclaimer />
    </div>
  );
};

export default Projects;
