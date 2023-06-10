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
        "I enjoy going to the gym in order to maintain a fun, healthy, and active lifestyle. I rotate my split between Push Pull Legs (PPL) and Arnold.",
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
        <p className="bio">
          My name is Victor Verma, and I'm a 20-year old who was born and raised
          in central Massachusetts. Throughout my whole life I've loved sports,
          primarily football, basketball, and soccer. I played football for 10
          years and was a starter at left-guard at the varsity level for my high
          school. Additonally, I enjoy traveling the world with my family,
          hanging out with my friends, and watching movies with whoever is
          interested.
        </p>
        <p className="bio">
          I have a passion for learning, and often watch youtube videos on
          topics ranging from STEM fields such as computer science and physics,
          to the social sciences and humanities as well. I really love to keep
          up with ideas in international relations and political science, and I
          find it equally fascinating to learn about history. Sometimes I even
          tell my friends that I wish I could experience college as an infinite
          loop, and pick a new major everytime.
        </p>
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
