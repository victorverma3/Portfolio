import React from "react";
import "./About.css";
import Footer from "../../components/Footer/Footer";
import CardList from "../../components/CardList/CardList";
import paris from "../../images/paris.png";
import movies from "../../images/letterboxd.png";
import weights from "../../images/weights.png";
import cube from "../../images/cube.png";
import Disclaimer from "../../components/Disclaimer/Disclaimer";

const About = () => {
  const aboutCards = [
    {
      title: "Watching Movies",
      image: movies,
      description:
        "I like watching movies in my free time, mostly from any genre. I use the Letterboxd app to log, rate, and rank the movies that I watch.",
      link: "Letterboxd",
      url: "https://letterboxd.com/vic_verma/",
    },
    {
      title: "Working Out",
      image: weights,
      description:
        "I enjoy going to the gym in order to maintain a fun, healthy, and active lifestyle. I rotate my split between Push Pull Legs (PPL) and Arnold.",
      link: "Latest Workouts",
      url: "https://docs.google.com/spreadsheets/d/10zi_VmH-wYWIiWBucsQ4NTbagEHaQHntUIhvYHy9qfk/edit?usp=sharing",
    },
    {
      title: "Rubik's Cube",
      image: cube,
      description:
        "I have the 2x2, 3x3, 4x4, Pyraminx, and Megaminx speed cubes. My personal record on the 3x3 is 11.97 seconds using the CFOP method.",
      link: "CFOP Tutorial",
      url: "https://youtu.be/MS5jByTX_pk",
    },
  ];
  return (
    <>
      <div className="aboutContent">
        <h1 className="pageTitle">About Me</h1>
        <img className="aboutPic" src={paris} alt="image loading error"></img>
        <p className="aboutBio">
          My name is Victor Verma, and I'm a 20-year old who was born and raised
          in central Massachusetts. I live with my parents, my younger sister,
          and our dog. Throughout my whole life I've loved sports, primarily
          football, basketball, and soccer. I played football for 10 years and
          was a starter at left-guard at the varsity level for my high school
          team. I was awarded the varsity lineman of the week once, the junior
          varsity player of the week twice, and the best hit of the week once,
          all of which were decided by my coaches. I'm especially proud to have
          been named to the central mass all-star team in 7th grade as a
          linebacker.
        </p>
        <p className="aboutBio">
          I have a passion for learning. I created this website on the weekends
          while working 40 hours as a research assistant during the week, and I
          still wish that I had time to learn even more things. I like to watch
          youtube videos on topics ranging from computer science, mathematics,
          and physics, to the social sciences and humanities as well. I
          especially love to keep up with ideas in the fields of international
          relations and political science, and I find it equally fascinating to
          learn about history. I actually tell everyone that I wish I could
          experience college as an infinite loop and pick a new major in every
          pass.
        </p>
        <h2 className="pageSubTitle">Hobbies</h2>
        <CardList cards={aboutCards} />
        <Disclaimer />
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default About;
