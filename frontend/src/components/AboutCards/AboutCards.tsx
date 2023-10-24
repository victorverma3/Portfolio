import React from "react";
import { Button, Card } from "react-bootstrap";

import "./AboutCards.css";

interface Card {
  title: string;
  image: string;
  description: string;
  link: string;
  url: string;
}

interface AboutCardsProps {
  cards: Card[];
}

const AboutCards = ({ cards }: AboutCardsProps) => {
  return (
    <div className="aboutCard-list">
      {cards.map((card) => (
        <Card className="aboutCards">
          <Card.Img
            className="aboutCard-image"
            variant="top"
            src={card.image}
            alt="image loading error"
          />
          <Card.Body>
            <Card.Title>
              <a className="aboutCard-title" href={card.url} target="_blank">
                {card.title}
              </a>
            </Card.Title>
            <Card.Text className="aboutCard-text">{card.description}</Card.Text>
            <Button
              className="aboutCard-button"
              href={card.url}
              target="_blank"
              variant="dark"
            >
              {card.link}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default AboutCards;
