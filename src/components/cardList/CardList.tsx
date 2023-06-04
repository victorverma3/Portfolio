import React from "react";
import "./CardList.css";
import { Button, Card } from "react-bootstrap";

interface Card {
  image: string;
  hobby: string;
  description: string;
  link: string;
  url: string;
}

interface CardListProps {
  cards: Card[];
}

const CardList = ({ cards }: CardListProps) => {
  return (
    <Card>
      {cards.map((card) => (
        <>
          <Card.Img
            variant="top"
            src="{card.image}"
            alt="image loading error"
          />
          <Card.Body>
            <Card.Title>{card.hobby}</Card.Title>
            <Card.Text>{card.description}</Card.Text>
            <Button variant="dark">{card.link}</Button>
          </Card.Body>
        </>
      ))}
    </Card>
  );
};

export default CardList;
