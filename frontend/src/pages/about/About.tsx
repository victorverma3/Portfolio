import React from "react";

import AboutCards from "../../components/AboutCards/AboutCards";
import Disclaimer from "../../components/Disclaimer/Disclaimer";

import "./About.css";

import cruise from "../../../public/images/cruise.png";
import cube from "../../../public/images/cube.png";
import husky from "../../../public/images/husky.png";
import movies from "../../../public/images/letterboxd.png";
import weights from "../../../public/images/weights.png";

const About = () => {
  const aboutCards = [
    {
      title: "Watching Movies",
      image: movies,
      description:
        "I like watching movies in my free time, mostly from any genre. I use the Letterboxd app to log, rate, and rank the movies that I watch. I generally enjoy movies of all genres, languages, and runtimes.",
      link: "Letterboxd",
      url: "https://letterboxd.com/victorverma/",
    },
    {
      title: "Working Out",
      image: weights,
      description:
        "I enjoy going to the gym in order to maintain a fun, healthy, and active lifestyle. I rotate between Push Pull Legs (PPL) and the Arnold split. I love leg day and my favorite exercise is the barbell front squat.",
      link: "Latest Workouts",
      url: "https://docs.google.com/spreadsheets/d/14F7ALQbKsob1XG1ll3aoSl_ZWfQGW3Bu9Tz27Be7nIg/edit?usp=sharing",
    },
    {
      title: "Rubik's Cube",
      image: cube,
      description:
        "I have the 2x2, 3x3, 4x4, Pyraminx, and Megaminx speed cubes. The 3x3 is my favorite, and my personal record is 9.71 seconds using the CFOP method. I hope to achieve a 10 second average in my lifetime.",
      link: "CFOP Tutorial",
      url: "https://youtu.be/MS5jByTX_pk",
    },
  ];
  return (
    <div className="about-content">
      <h1 className="page-title">About Me</h1>
      <div className="about-pic-container">
        <img className="about-pic" src={cruise} alt="image loading error"></img>
        <img className="about-pic" src={husky} alt="image loading error"></img>
      </div>
      <p className="about-bio">
        My name is Victor Verma, and I'm a 20-year old who was born and raised
        in central Massachusetts. I live with my parents, my younger sister, and
        our dog. Throughout my whole life I've loved sports, primarily football,
        basketball, and soccer. I played football for 10 years and started at
        left-guard at the varsity level for my high school team. I'm extremely
        proud of receiving multiple player of the week awards in high school and
        being named as a Central Mass All-Star in 7th grade, but my accolades
        pale in comparison to the close friends I made and the life lessons that
        I learned while playing the sport.
      </p>
      <p className="about-bio">
        I've been lucky to have had the opportunity to travel to many places
        with my family, some of my favorites being Egypt, Iceland, and Alaska,
        and I'm excited to continue traveling as I grow up. I have so many more
        places I want to go, especially the African savanna and the Amazon
        rainforest. I like nature and the outdoors, and I also want to go
        camping in the wilderness.
      </p>
      <p className="about-bio">
        I have a passion for learning. Even though a lot of my time is used up
        with school, working, the gym, and other hobbies, I always spend a few
        hours each week working on my own passion projects or learning new
        things. I like to watch youtube videos on topics ranging from computer
        science, mathematics, and physics, to the social sciences and humanities
        as well. I especially love to immerse myself in the fields of
        international relations, political science, and history. I actually tell
        everyone that I wish I could experience college as an infinite loop and
        pick a new major in every pass.
      </p>
      <br></br>
      <AboutCards cards={aboutCards} />
      <Disclaimer />
    </div>
  );
};

export default About;
