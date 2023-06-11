import React from "react";
import "./CardList.css";
import { Button, Card } from "react-bootstrap";

interface Card {
  title: string;
  image: string;
  description: string;
  link: string;
  url: string;
}

interface CardListProps {
  cards: Card[];
}

const CardList = ({ cards }: CardListProps) => {
  return (
    <div className="cardList">
      {cards.map((card) => (
        <Card className="cards">
          <Card.Img variant="top" src={card.image} alt="image loading error" />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text className="cardText">{card.description}</Card.Text>
            <Button
              className="cardButton"
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

export default CardList;
