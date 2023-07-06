import React from "react";
import "./ProjectCards.css";
import { Button, Card } from "react-bootstrap";

interface Card {
  title: string;
  image: string;
  description: string;
  technologies: Array<string>;
  link: string;
  url: string;
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
              <a className="projectCardTitle" href={card.url} target="_blank">
                {card.title}
              </a>
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
            <Button
              className="projectCardButton"
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

export default ProjectCards;
