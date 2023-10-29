import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./ProjectCards.css";

import candidatebios from "../../images/candidatebios.png";
import csslogo from "../../images/csslogo.png";
import htmllogo from "../../images/htmllogo.png";
import pythonlogo from "../../images/pythonlogo.png";
import portfolio from "../../images/portfolio.png";
import reactlogo from "../../images/reactlogo.png";
import sportsnews from "../../images/sportsnews.png";
import typescriptlogo from "../../images/typescriptlogo.png";

interface Card {
  _id: string;
  title: string;
  image: string;
  description: string;
  technologies: Array<string>;
  links: Array<Array<string>>;
  sortOrder: number;
}

interface ProjectCardsProps {
  cards: Card[];
}

const ProjectCards = ({ cards }: ProjectCardsProps) => {
  const projectImageMap: { [key: string]: any } = {
    candidatebios: candidatebios,
    pythonlogo: pythonlogo,
    portfolio: portfolio,
    reactlogo: reactlogo,
    typescriptlogo: typescriptlogo,
    htmllogo: htmllogo,
    csslogo: csslogo,
    sportsnews: sportsnews,
  };
  return (
    <div className="projectCard-list">
      {cards.map((card) => (
        <Card className="projectCards">
          <Card.Img
            className="projectCard-image"
            variant="top"
            src={projectImageMap[card.image]}
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
                    src={projectImageMap[element]}
                    alt="image loading error"
                  ></img>
                );
              })}
            </div>
            <div className="projectCard-buttons">
              <Link to={`/projects/edit/${card._id}`}>
                <AiOutlineEdit className="project-edit-button" size={24} />
              </Link>
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
