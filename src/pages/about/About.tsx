import React from "react";
import "./About.css";
import Footer from "../../components/footer/Footer";
import CardList from "../../components/cardList/CardList";
import hobby2 from "../../images/letterboxd.jpg";

const About = () => {
  const aboutCards = [
    {
      hobby: "Gym",
      image: "placeholder",
      description:
        "I enjoy going to the gym in order to maintain a healthy and active lifestyle. I rotate my split between Push Pull Legs (PPL) and Arnold.",
      link: "placeholder",
      url: "placeholder",
    },
    {
      hobby: "Watching Movies",
      image: "placeholder",
      description:
        "I like watching movies in my free time, mostly from any genre except romance. I use the Letterboxd app to log and rate the movies I watch.",
      link: "Letterboxd",
      url: "https://letterboxd.com/vic_verma/",
    },
    {
      hobby: "Rubik's Cube",
      image: "placeholder",
      description:
        "I have the 2x2, 3x3, 4x4, Pyraminx, and Megaminx speed cubes. The 3x3 is my favorite one and my personal record is 11.97 seconds.",
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
