import React from "react";
import "./Home.css";
import Footer from "../../components/footer/Footer";
import { Card } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="homeContent">
        <h1 className="homeTitle">Hello Everyone!</h1>
        <p className="homeLead">
          I'm Victor, a third-year student at Boston University majoring in
          mathematics and computer science and minoring in data science. I have
          no idea what I want to do in the future, so I just create whatever
          pops into my head. Sometimes these projects have a functional purpose
          in my life; otherwise, I just work on what I am feeling passionate
          about...
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
