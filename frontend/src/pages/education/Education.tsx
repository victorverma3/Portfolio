import React from "react";
import { useState } from "react";

import Disclaimer from "../../components/Disclaimer/Disclaimer";
import Footer from "../../components/Footer/Footer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Skills from "../../components/Skills/Skills";

import "./Education.css";

import bulatinlogo from "../../images/bulatinlogo.png";

const Education = () => {
    const [eduCardOne, setEduCardOne] = useState(false);
    const [eduCardTwo, setEduCardTwo] = useState(false);
    const [eduCardThree, setEduCardThree] = useState(false);
    const toggleCard = (num: number) => {
        if (num === 1) {
            eduCardOne ? setEduCardOne(false) : setEduCardOne(true);
        } else if (num === 2) {
            eduCardTwo ? setEduCardTwo(false) : setEduCardTwo(true);
        } else if (num === 3) {
            eduCardThree ? setEduCardThree(false) : setEduCardThree(true);
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
                    <div
                        className="education-display-item"
                        onClick={() => toggleCard(1)}
                    >
                        {eduCardOne ? (
                            <div className="education-display-body">
                                <ul>
                                    <li>Expected Graduation - May 2025</li>
                                    <li>
                                        B.A. in Mathematics and Computer Science
                                    </li>
                                    <li>Minor in Data Science</li>
                                    <li>3.85 GPA (3.86 major, 4.0 minor).</li>
                                    <li>
                                        $7500 Student Research Award (Summer
                                        2023 - Fall 2023)
                                    </li>
                                    <li>
                                        College of Arts and Sciences Dean's
                                        List.
                                    </li>
                                </ul>
                                <div className="arrow">
                                    <KeyboardArrowUpIcon />
                                </div>
                            </div>
                        ) : (
                            <div className="education-display-header">
                                <h5 className="education-display-subtitle">
                                    Boston University
                                </h5>
                                <div className="arrow">
                                    <KeyboardArrowDownIcon />
                                </div>
                            </div>
                        )}
                    </div>
                    <div
                        className="education-display-item"
                        onClick={() => toggleCard(2)}
                    >
                        {eduCardTwo ? (
                            <div className="education-display-body">
                                <ul>
                                    <li>
                                        Algorithms, Combinatoric Structures,
                                        Computer Systems, Concepts of
                                        Programming Languages, Introduction to
                                        Machine Learning and AI, Probability in
                                        Computing, and Software Engineering.
                                    </li>
                                    <li>
                                        Applied Abstract Algebra, Differential
                                        Equations, Linear Algebra, Multivariate
                                        Calculus, and Probability.
                                    </li>
                                </ul>
                                <div className="arrow">
                                    <KeyboardArrowUpIcon />
                                </div>
                            </div>
                        ) : (
                            <div className="education-display-header">
                                <h5 className="education-display-subtitle">
                                    Relevant Courses
                                </h5>
                                <div className="arrow">
                                    <KeyboardArrowDownIcon />
                                </div>
                            </div>
                        )}
                    </div>
                    <div
                        className="education-display-item"
                        onClick={() => toggleCard(3)}
                    >
                        {eduCardThree ? (
                            <div className="education-display-body">
                                <ul>
                                    <li>
                                        Undergraduate Research Assistant at the
                                        Questrom School of Business.
                                    </li>
                                    <li>
                                        Computer Assistant at the Questrom Open
                                        Access Lab.
                                    </li>
                                    <li>
                                        App Committee Head in the Kappa Theta Pi
                                        Professional Fraternity.
                                    </li>
                                    <li>Boston University Barbell Club.</li>
                                </ul>
                                <div className="arrow">
                                    <KeyboardArrowUpIcon />
                                </div>
                            </div>
                        ) : (
                            <div className="education-display-header">
                                <h5 className="education-display-subtitle">
                                    Extracurriculars
                                </h5>
                                <div className="arrow">
                                    <KeyboardArrowDownIcon />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Skills />
            <Disclaimer />
            <Footer />
        </div>
    );
};

export default Education;
