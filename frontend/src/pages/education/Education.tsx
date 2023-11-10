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
        <div className="education-display-header"></div>
        <h3>Boston University</h3>
        <h5>Expected Graduation - May 2025</h5>
        <h5>B.A. in Mathematics and Computer Science</h5>
        <h5>Minor in Data Science</h5>
        <div className="education-display-body">
          <div className="education-display-column">
            <h5 className="education-display-subtitle">Accomplishments</h5>
            <ul>
              <li>3.83 GPA (3.83 major, 4.0 minor).</li>
              <li>
                College of Arts and Sciences Dean's List (Spring 2023, Fall
                2022, Spring 2022, Fall 2021).
              </li>
            </ul>
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
              <li>Member of the Boston University Barbell Club.</li>
            </ul>
          </div>
          <img
            className="education-display-image"
            src={bulatinlogo}
            alt="image not loading"
          ></img>
          <div className="education-display-column">
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
