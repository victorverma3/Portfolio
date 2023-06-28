import React from "react";
import "./Projects.css";
import Footer from "../../components/footer/Footer";
import CList from "../../components/clist/CList";
import website from "../../images/website.png";
import sports from "../../images/sports.png";
import reel from "../../images/reel.png";
import bot from "../../images/bot.png";
import puzzle from "../../images/8puzzle.png";
import connect4 from "../../images/connect4.png";
import Disclaimer from "../../components/disclaimer/Disclaimer";

const Projects = () => {
  const projectCards = [
    {
      title: "Portfolio Website",
      image: website,
      description:
        "Designed and created my personal portfolio website using TypeScript, HTML, and Bootstrap CSS in a Vite + React framework. Primarily used YouTube and Google to independently learn TypeScript and React and expand my previous knowledge of HTML and CSS. Deployed using Vercel in order to make the website accessible to the internet, and periodically receives maintenance and improvements. ",
      link: "GitHub",
      url: "https://github.com/victorverma3/Portfolio",
    },
    {
      title: "SportsNews",
      image: sports,
      description:
        "Daily email newsletter built using Python, HTML, and CSS that scrapes the latest headlines in sports and sends them via an email to users on the mailing list. Deployed using Heroku in order to automate the script to run daily at 9:00am est. Currently supports basketball, college basketball, college football, cricket, football, and soccer, with plans to implement baseball, hockey, and more in the future.",
      link: "GitHub",
      url: "https://github.com/victorverma3/SportsNews",
    },
    {
      title: "MovieData",
      image: reel,
      description:
        "Created software that utilizes the pandas and BeautifulSoup libraries in Python to efficiently compile the movie metadata for all movies that a specified user has rated on the Letterboxd app. The movie's title, user rating, Letterboxd rating, Letterboxd rating count, genres, and country of origin are output into a CSV file, which is then read to create summary histograms and a CSV file with summary statistics.",
      link: "GitHub",
      url: "https://github.com/victorverma3/MovieData",
    },
    {
      title: "FakeFriends",
      image: bot,
      description:
        "Simple script that parses through the user's inputted JSON Instagram data and creates a CSV that lists the user's \"fakes\" (accounts that the user follows, but don't follow the user back) and \"fans\" (accounts that follow the user, but the user doesn't follow back. A future goal is for the script to gather the user's following and follower data with just the username as input (though only with the consent of the user).  ",
      link: "GitHub",
      url: "https://github.com/victorverma3/IGBot",
    },
    {
      title: "8-Puzzle Solver",
      image: puzzle,
      description:
        "Used Python to develop an 8-puzzle solver which finds the shortest move combination that can be used to sort a 3x3 grid consisting of one blank space and the digits 1-8 in ascending order. The solver uses object-oriented programming to create a board, state, and searcher classes. BFS, DFS, Greedy Search, and heuristic functions are implemented and allow the solver to work efficiently. Created in CS111.",
      link: "GitHub",
      url: "https://github.com/victorverma3/8-Puzzle-Solver",
    },
    {
      title: "Connect4",
      image: connect4,
      description:
        'Used Python to create the game "Connect 4". Users can play against each other or an AI capable of predicting moves using recursive backtracking. The moves are given by user inputs and the game ends in a win, loss, or tie. The difficulty of the AI is defined by how many moves it can "look ahead". The board, player, and AI classes are made using object-oriented programming. Created in CS111.',
      link: "GitHub",
      url: "https://github.com/victorverma3/Connect4",
    },
  ];
  return (
    <>
      <div className="projectContent">
        <h1 className="pageTitle">Projects</h1>
        <CList cards={projectCards} />
        <Disclaimer />
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Projects;
