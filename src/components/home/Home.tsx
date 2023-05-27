import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Hello Everyone!</h1>
      <p className="lead">
        I am a third-year student at Boston University majoring in mathematics
        and computer science, and minoring in data science. Explore my personal
        website to learn about me!
      </p>
      <hr className="my-4" />
      <p>Explore my personal website to get to know about me!</p>
      <a className="btn btn-primary btn-lg" href="#" role="button">
        Learn more
      </a>
    </div>
  );
};

export default Home;
