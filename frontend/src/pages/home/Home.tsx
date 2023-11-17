import React from "react";

import Footer from "../../components/Footer/Footer";

import "./Home.css";

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
      </div>
      <Footer />
    </>
  );
};

export default Home;
