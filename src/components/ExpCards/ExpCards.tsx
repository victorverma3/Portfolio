import React from "react";
import "./ExpCards.css";
import { Card } from "react-bootstrap";

interface Card {
  title: string;
  employer: string;
  dates: string;
  location: string;
  description: string;
}

interface ExpCardProps {
  cards: Card[];
}

const ExpCards = ({ cards }: ExpCardProps) => {
  return (
    <div className="expCardsList">
      {cards.map((card) => (
        <Card className="expCards">
          <Card.Header as="h5">{card.title}</Card.Header>
          <Card.Body>
            <Card.Title>{card.employer}</Card.Title>
            <Card.Subtitle>{card.dates}</Card.Subtitle>
            <Card.Text>{card.location}</Card.Text>
            <Card.Text className="desc">{card.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ExpCards;
