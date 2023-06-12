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
        "Daily email newsletter built using Python, HTML, and Bootstrap CSS that scrapes the latest headlines in sports and sends them in email format to users on the mailing list. Deployed using Heroku in order to automate the script to run daily at 9:00am est. Currently supported sports include basketball, college basketball, college football, cricket, football, and soccer, with further sports coverage in development.",
      link: "Github",
      url: "https://github.com/victorverma3/SportsNews",
    },
    {
      title: "MovieData",
      image: "placeholder",
      description:
        "Software that utilizes the pandas and BeautifulSoup libraries in Python to efficiently compile movie metadata for all of the movies that a specified user has rated on the Letterboxd app. The movie's title, user rating, Letterboxd rating, Letterboxd rating count, genres, and country of origin are output into a CSV file, which is read to create summary histograms and a CSV containing summary statistics.",
      link: "Github",
      url: "https://github.com/victorverma3/MovieData",
    },
    {
      title: "IGBot",
      image: "placeholder",
      description:
        "Simple script that utilizes the user's inputted Instagram data to create a CSV that lists all of the accounts the user is following on Instagram that do not follow the user back in return. Many scripts for this task already exist on the internet, but I decided to create my own version that is customized to my needs and can be used easily by friends, especially those who are unfamilliar with programming.",
      link: "Github",
      url: "https://github.com/victorverma3/IGBot",
    },
    {
      title: "8-Puzzle Solver",
      image: "placeholder",
      description:
        "Used Python to develop an 8-puzzle solver which finds the shortest move combination that can be used to sort a 3x3 grid consisting of one blank space and the digits 1-8 in ascending order. The solver uses object-oriented programming to create a board, state, and searcher classes. BFS, DFS, Greedy Search, and heuristic functions are implemented and allow the solver to work efficiently.",
      link: "Github",
      url: "https://github.com/victorverma3/8-Puzzle-Solver",
    },
    {
      title: "Connect4",
      image: "placeholder",
      description:
        'Used Python to create the game "Connect 4". Users can play against each other or against an AI capable of predicting moves using recursive backtracking. The moves are given by user inputs and the game ends in a win, loss, or tie. The difficulty of the AI is defined by how many moves it can "look ahead". Utilized object-oriented programming to make a board class, player class, and AI class.',
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
