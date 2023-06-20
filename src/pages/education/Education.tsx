import React from "react";
import "./Education.css";
import Footer from "../../components/Footer/Footer";
import { Card } from "react-bootstrap";

const Education = () => {
  return (
    <>
      <div className="educationContent">
        <h1 className="pageTitle">Education</h1>
        <div className="school">
          <div className="schoolInfo">
            <Card>
              <Card.Header as="h5">Boston University</Card.Header>
              <Card.Body>
                <Card.Title>
                  Bachelor of Arts in Mathematics and Computer Science
                </Card.Title>
                <Card.Title>Minor in Data Science</Card.Title>
                <Card.Text>September 2021 - May 2025</Card.Text>
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
                <Card.Subtitle>Accomplishments</Card.Subtitle>
                <Card.Text>
                  <ul>
                    <li>3.83 GPA (3.83 major, 4.0 minor).</li>
                    <li>
                      College of Arts and Sciences Dean's List (Spring 2023,
                      Fall 2022, Spring 2022, Fall 2021).
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="school">
          <div className="schoolInfo">
            <Card>
              <Card.Header as="h5">Shrewsbury High School</Card.Header>
              <Card.Body>
                <Card.Title>High School Diploma</Card.Title>
                <Card.Text>September 2017 - June 2021</Card.Text>
                <Card.Subtitle>Relevant Courses</Card.Subtitle>
                <Card.Text>
                  <ul>
                    <li>
                      AP Calculus BC, AP Statistics, and Honors Mathematical
                      Modeling.
                    </li>
                  </ul>
                </Card.Text>
                <Card.Subtitle>Extracurriculars</Card.Subtitle>
                <Card.Text>
                  <ul>
                    <li>Varsity Football Starter.</li>
                    <li>Member of the Société Honoraire de Français.</li>
                    <li>Lab Assistant for Honors Chemistry.</li>
                    <li>Junior Varsity Track and Field.</li>
                  </ul>
                </Card.Text>
                <Card.Subtitle>Accomplishments</Card.Subtitle>
                <Card.Text>
                  <ul>
                    <li>4.938 GPA and AP Scholar with Distinction.</li>
                    <li>
                      1 of 8 recipients of the Town of Shrewsbury Scholarship.
                    </li>
                    <li>
                      Varsity Football Lineman of the Week (voted by the
                      coaches).
                    </li>
                    <li>
                      Junior Varsity Football Player of the Week (2x) (voted by
                      the coaches).
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Education;
