import React from "react";

import "./Skills.css";

import csslogo from "../../images/csslogo.png";
import gitlogo from "../../images/gitlogo.png";
import htmllogo from "../../images/htmllogo.png";
import javascriptlogo from "../../images/javascriptlogo.png";
import mongodblogo from "../../images/mongodblogo.png";
import nodelogo from "../../images/nodelogo.png";
import pythonlogo from "../../images/pythonlogo.png";
import reactlogo from "../../images/reactlogo.png";
import typescriptlogo from "../../images/typescriptlogo.png";

const Skills = () => {
  const skills = [
    {
      name: "Python",
      image: pythonlogo,
    },
    {
      name: "HTML",
      image: htmllogo,
    },
    {
      name: "CSS",
      image: csslogo,
    },
    {
      name: "Javascript",
      image: javascriptlogo,
    },
    {
      name: "Typescript",
      image: typescriptlogo,
    },
    {
      name: "React.js",
      image: reactlogo,
    },
    {
      name: "Node.js",
      image: nodelogo,
    },
    {
      name: "MongoDB",
      image: mongodblogo,
    },
    {
      name: "Git",
      image: gitlogo,
    },
  ];
  return (
    <div className="skills-component">
      <h2 className="page-subtitle">Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill-item">
            <h3 className="skill-name">{skill.name}</h3>
            <img className="skill-image" src={skill.image}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
