import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./AboutCards.css";

import cube from "../../images/cube.png";
import movies from "../../images/letterboxd.png";
import weights from "../../images/weights.png";

interface Card {
  _id: string;
  title: string;
  image: string;
  description: string;
  link: string;
  url: string;
  sortOrder: number;
}

interface AboutCardsProps {
  cards: Card[];
}

const AboutCards = ({ cards }: AboutCardsProps) => {
  const aboutImageMap: { [key: string]: any } = {
    movies: movies,
    weights: weights,
    cube: cube,
  };
  const isLocalMachine = window.location.hostname === "localhost";
  return (
    <div className="aboutCard-list">
      {cards.map((card) => (
        <Card className="aboutCards">
          <Card.Img
            className="aboutCard-image"
            variant="top"
            src={aboutImageMap[card.image]}
            alt="image loading error"
          />
          <Card.Body>
            <Card.Title>
              <a className="aboutCard-title" href={card.url} target="_blank">
                {card.title}
              </a>
            </Card.Title>
            <div className="aboutCard-text">
              <Card.Text className="aboutCard-text">
                {card.description}
              </Card.Text>
            </div>
            <div className="aboutCard-buttons">
              <Button
                className="aboutCard-button"
                href={card.url}
                target="_blank"
                variant="dark"
              >
                {card.link}
              </Button>
            </div>
            {isLocalMachine && (
              <Link to={`/about/edit/${card._id}`}>
                <AiOutlineEdit className="about-edit-button" size={24} />
              </Link>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default AboutCards;
