import React from "react";
import "./Projects.css";
import Footer from "../../components/Footer/Footer";
import CardList from "../../components/CardList/CardList";

const Projects = () => {
  const projectCards = [
    {
      title: "SportsNews",
      image: "placeholder",
      description:
        "Daily email newsletter built using Python, HTML, and Bootstrap CSS that scrapes the latest sports headlines and sends them in email format to users on the mailing list. Deployed using Heroku in order to automate the script to run every morning at 9:00am est. Supported sports include basketball, college basketball, college football, cricket, football, and soccer.",
      link: "Github",
      url: "https://github.com/victorverma3/SportsNews",
    },
    {
      title: "MovieData",
      image: "placeholder",
      description: "placeholder",
      link: "Github",
      url: "https://github.com/victorverma3/MovieData",
    },
    {
      title: "IGBot",
      image: "placeholder",
      description:
        "Simple script that utilizes the user's inputted Instagram data to create a CSV that lists all of the accounts the user is following on Instagram that do not follow the user back in return. Many scripts for this task already exist on the internet, but I decided to create my own that I find easy to follow and can be used by my friends who are unfamilliar with programming.",
      link: "Github",
      url: "https://github.com/victorverma3/IGBot",
    },
    {
      title: "8-Puzzle Solver",
      image: "placeholder",
      description:
        "I used Python to develop an 8-puzzle solver which found the shortest move combination to sort a 3x3 grid consisting of one blank space and the digits 1-8 in ascending order. Used object-oriented programming to create a board class, state class, and searcher class. Implemented BFS, DFS, Greedy Search, and a heuristic function to build the solver.",
      link: "Github",
      url: "https://github.com/victorverma3/8-Puzzle-Solver",
    },
    {
      title: "Connect4",
      image: "placeholder",
      description: "placeholder",
      link: "Github",
      url: "https://github.com/victorverma3/Connect4",
    },
  ];
  return (
    <>
      <div className="projectContent">
        <h1 className="pageTitle">Projects</h1>
        <CardList cards={projectCards} />
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Projects;
