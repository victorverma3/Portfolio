import React from "react";
import "./CList.css";
import { Button, Card } from "react-bootstrap";

interface Card {
  title: string;
  image: string;
  description: string;
  link: string;
  url: string;
}

interface CListProps {
  cards: Card[];
}

const CList = ({ cards }: CListProps) => {
  return (
    <div className="cardList">
      {cards.map((card) => (
        <Card className="cards">
          <Card.Img variant="top" src={card.image} alt="image loading error" />
          <Card.Body>
            <Card.Title>
              <a className="titleLink" href={card.url} target="_blank">
                {card.title}
              </a>
            </Card.Title>
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

export default CList;
