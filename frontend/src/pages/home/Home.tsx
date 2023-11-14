import React from "react";

import "./Home.css";

import githublogo from "../../images/githublogo.png";
import maillogo from "../../images/maillogo.png";
import linkedinlogo from "../../images/linkedinlogo.png";

const Home = () => {
  return (
    <>
      <div className="home-content">
        <h1 className="home-title">Hi, I'm Victor.</h1>
        <p className="home-lead">
          I'm a third-year student at Boston University majoring in mathematics
          and computer science and minoring in data science. I have no idea what
          I want to do in the future, so I spend my time learning what I find
          interesting and creating projects that enhance my life.
        </p>
        <div className="push"></div>
      </div>
      <footer className="home-nav-logos">
        <a
          href="https://www.linkedin.com/in/victor-verma-91713022b/"
          target="_blank"
        >
          <img className="home-nav-logo" src={linkedinlogo}></img>
        </a>
        <a href="https://github.com/victorverma3" target="_blank">
          <img className="home-nav-logo" src={githublogo}></img>
        </a>
        <a href="mailto:vpverm@bu.edu" target="_blank">
          <img className="home-nav-logo" src={maillogo}></img>
        </a>
      </footer>
    </>
  );
};

export default Home;
