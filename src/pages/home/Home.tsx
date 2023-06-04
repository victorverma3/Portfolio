import React from "react";
import "./Home.css";
import Footer from "../../components/footer/Footer";
import { Card } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="homeContent">
        <div className="jumbotron">
          <h1 className="display-4">Hello Everyone!</h1>
          <p className="homeLead">
            I am a third-year student at Boston University majoring in
            mathematics and computer science and minoring in data science.
            Explore my personal website to learn about me!
          </p>
        </div>
        <div className="homeEmpty"></div>
        {/*<div className="homePic">
          <Card className="homeCard">
            <Card.Img variant="top" src={image} alt="error loading image" />
            <Card.Body>
              <Card.Text>I like solving problems.</Card.Text>
            </Card.Body>
          </Card>
  </div>*/}
      </div>
      <Footer />
    </>
  );
};

export default Home;
