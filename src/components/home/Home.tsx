import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Hello Everyone</h1>
      <p className="lead">I am Victor Verma</p>
      <hr className="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <a className="btn btn-primary btn-lg" href="#" role="button">
        Learn more
      </a>
    </div>
  );
};

export default Home;
