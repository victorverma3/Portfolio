import React from "react";
import { Button } from "react-bootstrap";

import PDF from "../../components/VictorVerma.pdf";

import "./Education.css";

import bueast from "../../images/bueast.png";
import bulatinlogo from "../../images/bulatinlogo.png";
import comlawn from "../../images/comlawn.png";

const Education = () => {
  return (
    <div className="education-content">
      <h1 className="page-title">Education</h1>
      <div className="education-display">
        <div className="education-display-column">
          <div className="education-display-item">
            <img
              className="education-display-image"
              src={bulatinlogo}
              alt="image not loading"
            ></img>
          </div>
        </div>
        <div className="education-display-column">
          <div className="education-display-item">
            <h5 className="education-display-subtitle">Boston University</h5>
            <ul>
              <li>Expected Graduation - May 2025</li>
              <li>B.A. in Mathematics and Computer Science</li>
              <li>Minor in Data Science</li>
              <li>3.83 GPA (3.83 major, 4.0 minor).</li>
              <li>$7500 Student Research Award (Summer 2023 - Fall 2023)</li>
              <li>College of Arts and Sciences Dean's List.</li>
            </ul>
          </div>
          <div className="education-display-item">
            <h5 className="education-display-subtitle">Relevant Courses</h5>
            <ul>
              <li>
                Applied Abstract Algebra, Differential Equations, Linear
                Algebra, Multivariate Calculus, and Probability.
              </li>
              <li>
                Combinatoric Structures, Computer Systems, Concepts of
                Programming Languages, Introduction to Analysis of Algorithms,
                Introduction to Computer Science I & II, Probability in
                Computing, and Software Engineering.
              </li>
              <li>Introduction to Machine Learning and AI.</li>
            </ul>
          </div>
          <div className="education-display-item">
            <h5 className="education-display-subtitle">Extracurriculars</h5>
            <ul>
              <li>
                Undergraduate Research Assistant at the Questrom School of
                Business.
              </li>
              <li>Computer Assistant at the Questrom Open Access Lab.</li>
              <li>
                App Committee Head in the Kappa Theta Pi Professional
                Fraternity.
              </li>
              <li>Boston University Barbell Club.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="resume-view">
        <Button
          className="pdf-button"
          variant="dark"
          href={PDF}
          target="_blank"
        >
          Resume
        </Button>
      </div>
      <div className="school-pic-container">
        <img className="school-pic" src={comlawn} alt="image not loading"></img>
        <img className="school-pic" src={bueast} alt="image not loading"></img>
      </div>
    </div>
  );
};

export default Education;
