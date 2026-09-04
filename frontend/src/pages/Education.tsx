import React from "react";

import EduDetails from "../components/EduDetails";
import Skills from "../components/Skills";
import UploadPDF from "../components/UploadPDF";

import { useAuth } from "../contexts/AuthContext";

const gtInfo = [
    {
        subtitle: "Georgia Tech",
        bullets: [
            "M.S. in Computer Science.",
            "Specialization in Machine Learning.",
        ],
    },
    {
        subtitle: "Relevant Courses",
        bullets: [
            "Machine Learning, Natural Language, Computer Vision, Graduate Algorithms.",
        ],
    },
    {
        subtitle: "Extracurriculars",
        bullets: ["Georgia Tech Men's Rugby"],
    },
];

const buInfo = [
    {
        subtitle: "Boston University",
        bullets: [
            "B.A. in Mathematics and Computer Science.",
            "Minor in Data Science.",
            "Magna Cum Laude, 3.89 GPA.",
            "UROP Student Research Award (2x), UROP Faculty Matching Grant.",
            "College of Arts & Sciences Dean's List (6x).",
        ],
    },
    {
        subtitle: "Relevant Courses",
        bullets: [
            "Machine Learning and AI, Data Science Tools and Applications, Natural Language Processing, Probability in Computing, Algorithms, Database Systems, Distributed Systems, Engineering for Big Data, Software Engineering, Computer Systems.",
            "Stochastic Algorithms, Stochastic Processes, Probability, Linear Algebra, Multivariate Calculus, Differential Equations, Applied Abstract Algebra.",
        ],
    },
    {
        subtitle: "Extracurriculars",
        bullets: [
            "Research Assistant in the Questrom School of Business.",
            "Computer Assistant in the Questrom Open Access Lab.",
            "Former App Committee Head in Kappa Theta Pi's Lambda Chapter.",
            "Boston University Men's Rugby.",
        ],
    },
];

const Education = () => {
    const { isAuthorized } = useAuth();
    return (
        <div className="w-screen min-h-[80vh] pt-20 pb-8">
            <h1 className="mt-2 text-5xl 2xl:text-6xl">Education</h1>
            <div className="w-[80vw] m-auto mb-6 p-3 text-left flex flex-row flex-wrap justify-around">
                <div className="w-[80vw] m-auto mb-6 p-3 text-left flex flex-row flex-wrap justify-around">
                    <div className="w-80 m-auto bg-white rounded-3xl transition-shadow duration-200 ease-in-out hover:shadow hover:shadow-blue-400 sm:w-96 2xl:w-[30rem]">
                        <a href="https://www.gatech.edu/" target="_blank">
                            <img
                                className="w-48 m-auto p-3 sm:w-80"
                                src="images/gtlogoseal.png"
                                alt="image not loading"
                            />
                        </a>
                    </div>
                    <EduDetails details={gtInfo} />
                </div>
                <div className="w-[80vw] m-auto mb-6 p-3 text-left flex flex-row flex-wrap justify-around">
                    <EduDetails details={buInfo} />
                    <div className="w-80 m-auto bg-white rounded-3xl transition-shadow duration-200 ease-in-out hover:shadow hover:shadow-blue-400 sm:w-96 2xl:w-[30rem]">
                        <a href="https://www.bu.edu/" target="_blank">
                            <img
                                className="w-48 m-auto p-3 sm:w-80"
                                src="images/bulogoseal.png"
                                alt="image not loading"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <Skills />
            {isAuthorized && <UploadPDF />}
        </div>
    );
};

export default Education;
