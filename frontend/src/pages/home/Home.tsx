import React from "react";

import Footer from "../../components/Footer/Footer";
import HomeTitle from "../../components/HomeTitle/HomeTitle";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-content">
        <HomeTitle />
        <p className="home-lead">
          I'm a third-year student at Boston University majoring in mathematics
          and computer science and minoring in data science. I am constantly
          striving to learn new skills and further develop myself academically
          and professionally. With experience in academics, project development,
          and research already under my belt, I am actively searching for an
          internship in Summer 2024!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
