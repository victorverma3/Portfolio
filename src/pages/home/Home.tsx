import React from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer.tsx";

const Home = () => {
  return (
    <>
      <div className="homeContent">
        <h1 className="homeTitle">Hello Everyone!</h1>
        <p className="homeLead">
          I'm Victor, a third-year student at Boston University majoring in
          mathematics and computer science and minoring in data science. I have
          no idea what I want to do in the future, so I try to learn a little
          bit of everything and create whatever I find interesting...
        </p>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Home;
