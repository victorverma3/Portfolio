import React from "react";
import { useEffect, useState } from "react";

const HomeTitle = () => {
    const titlePhrases = [
        "H",
        "Hi",
        "Hi,",
        "Hi, I",
        "Hi, I'",
        "Hi, I'm",
        "Hi, I'm V",
        "Hi, I'm Vi",
        "Hi, I'm Vic",
        "Hi, I'm Vict",
        "Hi, I'm Victo",
        "Hi, I'm Victor",
        "Hi, I'm Victor",
        "Hi, I'm Victor",
        "Hi, I'm Victor",
        "Hi, I'm Victor",
        "Hi, I'm Victor",
        "D",
        "Da",
        "Dat",
        "Data",
        "Data S",
        "Data Sc",
        "Data Sci",
        "Data Scie",
        "Data Scien",
        "Data Scient",
        "Data Scienti",
        "Data Scientis",
        "Data Scientist",
        "Data Scientist",
        "Data Scientist",
        "Data Scientist",
        "Data Scientist",
        "S",
        "So",
        "Sof",
        "Soft",
        "Softw",
        "Softwa",
        "Softwar",
        "Software",
        "Software E",
        "Software En",
        "Software Eng",
        "Software Engi",
        "Software Engin",
        "Software Engine",
        "Software Enginee",
        "Software Engineer",
        "Software Engineer",
        "Software Engineer",
        "Software Engineer",
        "Software Engineer",
        "Software Engineer",
    ];
    const [index, setIndex] = useState(0);
    const [currentTitle, setCurrentTitle] = useState(titlePhrases[index]);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % titlePhrases.length);
        }, 200);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setCurrentTitle(titlePhrases[index] + " ");
    }, [index]);
    return (
        <div>
            <h1 className="text-4xl m-auto sm:text-7xl">{currentTitle}</h1>
        </div>
    );
};

export default HomeTitle;
