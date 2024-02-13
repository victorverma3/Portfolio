import React from "react";

import Disclaimer from "../../components/Disclaimer/Disclaimer";
import EduDetails from "../../components/EduDetails/EduDetails";
import Footer from "../../components/Footer/Footer";
import Skills from "../../components/Skills";

import "./Education.css";

import bulatinlogo from "../../images/bulatinlogo.png";

const Education = () => {
    const eduInfo = [
        {
            subtitle: "Boston University",
            bullets: [
                "Expected Graduation - May 2025.",
                "B.A. in Mathematics and Computer Science.",
                "Minor in Data Science.",
                "3.85 GPA (3.86 major, 4.0 minor).",
                "$7500 Student Research Award (Summer 2023 - Fall 2023).",
                "College of Arts and Sciences Dean's List.",
            ],
        },
        {
            subtitle: "Relevant Courses",
            bullets: [
                "Algorithms, Combinatoric Structures, Computer Systems, Concepts of Programming Languages, Data Science Tools and Applications, Introduction to Machine Learning and AI, Probability in Computing, and Software Engineering.",
                "Applied Abstract Algebra, Differential Equations, Introduction to Stochastic Processes, Linear Algebra, Multivariate Calculus, and Probability.",
            ],
        },
        {
            subtitle: "Extracurriculars",
            bullets: [
                "Undergraduate Research Assistant at the Questrom School of Business.",
                "Computer Assistant at the Questrom Open Access Lab.",
                "App Committee Head in the Kappa Theta Pi Professional Fraternity.",
                "Boston University Barbell Club.",
            ],
        },
    ];
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
                    <EduDetails details={eduInfo} />
                </div>
            </div>
            <Skills />
            <Disclaimer />
            <Footer />
        </div>
    );
};

export default Education;
