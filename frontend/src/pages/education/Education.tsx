import React from "react";

import Disclaimer from "../../components/Disclaimer";
import EduDetails from "../../components/EduDetails";
import Footer from "../../components/Footer";
import Skills from "../../components/Skills";

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
        <div className="w-screen min-h-[80vh] mt-20 mb-8">
            <h1 className="text-5xl 2xl:text-6xl">Education</h1>
            <div className="w-[80vw] m-auto mb-6 p-4 text-left flex flex-row flex-wrap justify-around">
                <div className="w-72 m-auto bg-white rounded-3xl transition-shadow duration-200 ease-in-out hover:shadow hover:shadow-blue-400 sm:w-96 2xl:w-[30rem]">
                    <a href="https://www.bu.edu/" target="_blank">
                        <img
                            className="w-48 m-auto p-4 sm:w-80"
                            src={bulatinlogo}
                            alt="image not loading"
                        ></img>
                    </a>
                </div>
                <div className="m-auto flex flex-column justify-around">
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
