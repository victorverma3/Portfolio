import React from "react";
import "./ProjectCards.css";
import { Button, Card } from "react-bootstrap";

interface Card {
  title: string;
  image: string;
  description: string;
  technologies: Array<string>;
  links: Array<Array<string>>;
}

interface ProjectCardsProps {
  cards: Card[];
}

const ProjectCards = ({ cards }: ProjectCardsProps) => {
  return (
    <div className="projectCard-list">
      {cards.map((card) => (
        <Card className="projectCards">
          <Card.Img
            className="projectCard-image"
            variant="top"
            src={card.image}
            alt="image loading error"
          />
          <Card.Body>
            <Card.Title>
              <h1 className="projectCard-title">{card.title}</h1>
            </Card.Title>
            <Card.Text className="projectCard-text">
              {card.description}
            </Card.Text>
            <div className="projectCard-technologies">
              {card.technologies.map((element) => {
                return (
                  <img
                    className="projectCard-logos"
                    src={element}
                    alt="image loading error"
                  ></img>
                );
              })}
            </div>
            <div className="projectCard-buttons">
              {card.links.map((element) => {
                return (
                  <Button
                    className="projectCard-button"
                    href={element[1]}
                    target="_blank"
                    variant="dark"
                  >
                    {element[0]}
                  </Button>
                );
              })}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProjectCards;
