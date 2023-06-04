import React from "react";
import "./About.css";
import Footer from "../../components/footer/Footer";
import CardList from "../../components/cardList/CardList";

const About = () => {
  const aboutCards = [
    {
      hobby: "Gym",
      image: "placeholder",
      description: "I like going to the gym.",
      link: "placeholder",
      url: "placeholder",
    },
    {
      hobby: "Watching Movies",
      image: "placeholder",
      description: "I like watching movies.",
      link: "Letterboxd",
      url: "placeholder",
    },
    {
      hobby: "Rubik's Cube",
      image: "placeholder",
      description: "I enjoying solving the Rubik's Cube.",
      link: "placeholder",
      url: "placeholder",
    },
  ];
  return (
    <>
      <div className="aboutContent">
        <h1 className="pageTitle">About Me</h1>
        <h2 className="pageSubTitle">Hobbies</h2>
        <br></br>
        <CardList cards={aboutCards} />
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default About;
