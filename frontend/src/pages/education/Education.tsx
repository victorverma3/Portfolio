import React from "react";
import { useState } from "react";

import PDF from "../../components/VictorVerma.pdf";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import "./Education.css";

import bueast from "../../images/bueast.png";
import bulatinlogo from "../../images/bulatinlogo.png";
import comlawn from "../../images/comlawn.png";

const Education = () => {
  const [eduCardOne, setEduCardOne] = useState(false);
  const [eduCardTwo, setEduCardTwo] = useState(false);
  const [eduCardThree, setEduCardThree] = useState(false);
  const handleArrowDownClick = (num: number) => {
    if (num === 1) {
      setEduCardOne(true);
    } else if (num === 2) {
      setEduCardTwo(true);
    } else if (num === 3) {
      setEduCardThree(true);
    }
  };
  const handleArrowUpClick = (num: number) => {
    if (num === 1) {
      setEduCardOne(false);
    } else if (num === 2) {
      setEduCardTwo(false);
    } else if (num === 3) {
      setEduCardThree(false);
    }
  };
  return (
    <div className="education-content">
      <h1 className="page-title">Education</h1>
      <div className="education-display">
        <div className="education-display-column">
          <div className="education-display-item">
            <a
              className="education-display-image-link"
              href="https://www.bu.edu/"
              target="_blank"
            >
              <img
                className="education-display-image"
                src={bulatinlogo}
                alt="image not loading"
              ></img>
            </a>
          </div>
        </div>
        <div className="education-display-column">
          <div className="education-display-item">
            {eduCardOne ? (
              <div className="education-display-body">
                <ul>
                  <li>Expected Graduation - May 2025</li>
                  <li>B.A. in Mathematics and Computer Science</li>
                  <li>Minor in Data Science</li>
                  <li>3.83 GPA (3.83 major, 4.0 minor).</li>
                  <li>
                    $7500 Student Research Award (Summer 2023 - Fall 2023)
                  </li>
                  <li>College of Arts and Sciences Dean's List.</li>
                </ul>
                <div className="arrow" onClick={() => handleArrowUpClick(1)}>
                  <KeyboardArrowUpIcon />
                </div>
              </div>
            ) : (
              <div className="education-display-header">
                <h5 className="education-display-subtitle">
                  Boston University
                </h5>
                <div className="arrow" onClick={() => handleArrowDownClick(1)}>
                  <KeyboardArrowDownIcon />
                </div>
              </div>
            )}
          </div>
          <div className="education-display-item">
            {eduCardTwo ? (
              <div className="education-display-body">
                <ul>
                  <li>
                    Applied Abstract Algebra, Differential Equations, Linear
                    Algebra, Multivariate Calculus, and Probability.
                  </li>
                  <li>
                    Combinatoric Structures, Computer Systems, Concepts of
                    Programming Languages, Introduction to Analysis of
                    Algorithms, Introduction to Computer Science I & II,
                    Probability in Computing, and Software Engineering.
                  </li>
                  <li>Introduction to Machine Learning and AI.</li>
                </ul>
                <div className="arrow" onClick={() => handleArrowUpClick(2)}>
                  <KeyboardArrowUpIcon />
                </div>
              </div>
            ) : (
              <div className="education-display-header">
                <h5 className="education-display-subtitle">Relevant Courses</h5>
                <div className="arrow" onClick={() => handleArrowDownClick(2)}>
                  <KeyboardArrowDownIcon />
                </div>
              </div>
            )}
          </div>
          <div className="education-display-item">
            {eduCardThree ? (
              <div className="education-display-body">
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
                <div className="arrow" onClick={() => handleArrowUpClick(3)}>
                  <KeyboardArrowUpIcon />
                </div>
              </div>
            ) : (
              <div className="education-display-header">
                <h5 className="education-display-subtitle">Extracurriculars</h5>
                <div className="arrow" onClick={() => handleArrowDownClick(3)}>
                  <KeyboardArrowDownIcon />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <a className="pdf-button" href={PDF} target="_blank">
        View Resume
      </a>
      <div className="school-pic-container">
        <img className="school-pic" src={comlawn} alt="image not loading"></img>
        <img className="school-pic" src={bueast} alt="image not loading"></img>
      </div>
    </div>
  );
};

export default Education;
