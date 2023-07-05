import React from "react";
import "./AboutCards.css";
import { Button, Card } from "react-bootstrap";

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
    <div className="aboutCardList">
      {cards.map((card) => (
        <Card className="aboutCards">
          <Card.Img
            className="aboutCardImage"
            variant="top"
            src={card.image}
            alt="image loading error"
          />
          <Card.Body>
            <Card.Title>
              <a className="aboutCardTitle" href={card.url} target="_blank">
                {card.title}
              </a>
            </Card.Title>
            <Card.Text className="aboutCardText">{card.description}</Card.Text>
            <Button
              className="aboutCardButton"
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
