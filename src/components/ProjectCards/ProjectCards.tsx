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
    <div className="projectCardList">
      {cards.map((card) => (
        <Card className="projectCards">
          <Card.Img
            className="projectCardImage"
            variant="top"
            src={card.image}
            alt="image loading error"
          />
          <Card.Body>
            <Card.Title>
              <h1 className="projectCardTitle">{card.title}</h1>
            </Card.Title>
            <Card.Text className="projectCardText">
              {card.description}
            </Card.Text>
            <div className="projectCardTechnologies">
              {card.technologies.map((element) => {
                return (
                  <img
                    className="projectCardLogos"
                    src={element}
                    alt="image loading error"
                  ></img>
                );
              })}
            </div>
            <div className="projectCardButtons">
              {card.links.map((element) => {
                return (
                  <Button
                    className="projectCardButton"
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
