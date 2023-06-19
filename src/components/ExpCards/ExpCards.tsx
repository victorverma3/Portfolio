import React from "react";
import "./ExpCards.css";
import { Card } from "react-bootstrap";

interface Card {
  employer: string;
  title: string;
  dates: string;
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
          <Card.Header as="h5">{card.employer}</Card.Header>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.dates}</Card.Text>
            <Card.Text>{card.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ExpCards;
