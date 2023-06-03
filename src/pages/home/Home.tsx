import React from "react";
import "./Home.css";
import MainCard from "../../components/homeCard/HomeCard";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <div className="content">
        <div className="jumbotron">
          <h1 className="display-4">Hello Everyone!</h1>
          <p className="lead">
            I am a third-year student at Boston University majoring in
            mathematics and computer science and minoring in data science.
            Explore my personal website to learn about me!
          </p>
        </div>
        <div className="pic">
          <MainCard />
        </div>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Home;
