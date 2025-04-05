import React from "react";

import EduDetails from "../../components/EduDetails";
import Footer from "../../components/Footer";
import Skills from "../../components/Skills";

const eduInfo = [
    {
        subtitle: "Boston University",
        bullets: [
            "Expected Graduation - May 2025.",
            "B.A. in Mathematics and Computer Science.",
            "Minor in Data Science.",
            "3.89 GPA.",
            "UROP Student Research Award.",
            "College of Arts and Sciences Dean's List.",
        ],
    },
    {
        subtitle: "Relevant Courses",
        bullets: [
            "Machine Learning and AI, Natural Language Processing, Algorithms, Database Systems, Distributed Systems, Cloud Computing, Software Engineering, Computer Systems, Probability in Computing.",
            "Probability, Stochastic Algorithms, Stochastic Processes, Linear Algebra, Multivariate Calculus, Differential Equations, Applied Abstract Algebra.",
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
    return (
        <div className="w-screen min-h-[80vh] pt-20 pb-8">
            <h1 className="text-5xl 2xl:text-6xl">Education</h1>
            <div className="w-[80vw] m-auto mb-6 p-3 text-left flex flex-row flex-wrap justify-around">
                <div className="w-80 m-auto bg-white rounded-3xl transition-shadow duration-200 ease-in-out hover:shadow hover:shadow-blue-400 sm:w-96 2xl:w-[30rem]">
                    <a href="https://www.bu.edu/" target="_blank">
                        <img
                            className="w-48 m-auto p-3 sm:w-80"
                            src="images/bulatinlogo.png"
                            alt="image not loading"
                        />
                    </a>
                </div>
                <EduDetails details={eduInfo} />
            </div>
            <Skills />
            <Footer />
        </div>
    );
};

export default Education;
