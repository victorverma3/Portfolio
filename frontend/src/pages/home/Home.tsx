import React from "react";
import { useEffect, useState } from "react";

import Footer from "../../components/Footer/Footer";

import "./Home.css";

const Home = () => {
  const titlePhrases = [
    "Hi, I'm Victor.",
    "Software Engineer",
    "Academic Weapon",
  ];
  const [index, setIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(titlePhrases[index]);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titlePhrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentTitle(titlePhrases[index]);
  }, [index]);

  return (
    <>
      <div className="home-content">
        <h1 className="home-title">{currentTitle}</h1>
        <p className="home-lead">
          I'm a third-year student at Boston University majoring in mathematics
          and computer science and minoring in data science. I am constantly
          striving to learn new skills and further develop myself academically
          and professionally. With course, project, and research experience
          already under my belt, I am actively searching for an internship in
          Summer 2024!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
