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
                "3.87 GPA (3.88 major, 4.0 minor).",
                "UROP Student Research Award (Summer 2023 - Spring 2024).",
                "6x College of Arts and Sciences Dean's List.",
            ],
        },
        {
            subtitle: "Relevant Courses",
            bullets: [
                " Machine Learning and AI, Natural Language Processing, Algorithms, Database Systems, Distributed Systems, Software Engineering, Computer Systems, Probability in Computing.",
                "Probability, Stochastic Algorithms, Stochastic Processes, Linear Algebra, Multivariate Calculus, Differential Equations, Applied Abstract Algebra.",
            ],
        },
        {
            subtitle: "Extracurriculars",
            bullets: [
                "Undergraduate Research Assistant in the Questrom School of Business.",
                "Computer Assistant in the Questrom Open Access Lab.",
                "Former App Committee Head in Kappa Theta Pi's Lambda Chapter.",
                "Boston University Men's Rugby.",
            ],
        },
    ];
    return (
        <div className="w-screen min-h-[80vh] mt-20 mb-8">
            <h1 className="text-5xl 2xl:text-6xl">Education</h1>
            <div className="w-[80vw] m-auto mb-6 p-3 text-left flex flex-row flex-wrap justify-around">
                <div className="w-80 m-auto bg-white rounded-3xl transition-shadow duration-200 ease-in-out hover:shadow hover:shadow-blue-400 sm:w-96 2xl:w-[30rem]">
                    <a href="https://www.bu.edu/" target="_blank">
                        <img
                            className="w-48 m-auto p-3 sm:w-80"
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
