import React from "react";
import "./Education.css";
import { Card } from "react-bootstrap";
import bueast from "../../../public/images/bueast.png";
import comlawn from "../../../public/images/comlawn.png";

const Education = () => {
  return (
    <div className="education-content">
      <h1 className="page-title">Education</h1>
      <div className="school">
        <div className="school-info">
          <Card className="edu-card">
            <Card.Header as="h5">Boston University</Card.Header>
            <Card.Body>
              <Card.Title>
                Bachelor of Arts in Mathematics and Computer Science
              </Card.Title>
              <Card.Title>Minor in Data Science</Card.Title>
              <Card.Text>September 2021 - May 2025</Card.Text>
              <Card.Subtitle>Accomplishments</Card.Subtitle>
              <Card.Text>
                <ul>
                  <li>3.83 GPA (3.83 major, 4.0 minor).</li>
                  <li>
                    College of Arts and Sciences Dean's List (Spring 2023, Fall
                    2022, Spring 2022, Fall 2021).
                  </li>
                </ul>
              </Card.Text>
              <Card.Subtitle>Extracurriculars</Card.Subtitle>
              <Card.Text>
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
              </Card.Text>
              <Card.Subtitle>Relevant Courses</Card.Subtitle>
              <Card.Text>
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
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="school-pic-container">
          <img
            className="school-pic"
            src={comlawn}
            alt="image not loading"
          ></img>
          <img
            className="school-pic"
            src={bueast}
            alt="image not loading"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Education;
