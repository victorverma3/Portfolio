import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import candidatebios from "../images/candidatebios.png";
import csslogo from "../images/csslogo.png";
import gitlogo from "../images/gitlogo.png";
import htmllogo from "../images/htmllogo.png";
import javascriptlogo from "../images/javascriptlogo.png";
import ktpdatabase from "../images/ktpdatabase.png";
import mongodblogo from "../images/mongodblogo.png";
import nutrisistant from "../images/nutrisistant.png";
import pythonlogo from "../images/pythonlogo.png";
import portfolio from "../images/portfolio.png";
import reactlogo from "../images/reactlogo.png";
import sportsnews from "../images/sportsnews.png";
import statsense from "../images/statsense.png";
import typescriptlogo from "../images/typescriptlogo.png";

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
        csslogo: csslogo,
        gitlogo: gitlogo,
        htmllogo: htmllogo,
        javascriptlogo: javascriptlogo,
        ktpdatabase: ktpdatabase,
        mongodblogo: mongodblogo,
        nutrisistant: nutrisistant,
        portfolio: portfolio,
        pythonlogo: pythonlogo,
        reactlogo: reactlogo,
        sportsnews: sportsnews,
        statsense: statsense,
        typescriptlogo: typescriptlogo,
    };
    const isLocalMachine = window.location.hostname === "localhost";
    return (
        <div className="w-11/12 m-auto flex flex-row flex-wrap justify-around">
            {cards.map((card) => (
                <Card className="w-[22rem] my-2.5 border-1 border-solid border-gray-200 text-base 2xl:w-96 2xl:text-xl">
                    <Card.Img
                        className="m-auto"
                        variant="top"
                        src={projectImageMap[card.image]}
                        alt="image loading error"
                    />
                    <Card.Body>
                        <Card.Title>
                            <h1 className="text-3xl text-black no-underline 2xl:text-4xl">
                                {card.title}
                            </h1>
                        </Card.Title>
                        <Card.Text className="text-justify">
                            {card.description}
                        </Card.Text>
                        <div className="my-2.5 flex flex-row flex-wrap justify-around">
                            {card.technologies.map((element) => {
                                return (
                                    <img
                                        className="w-1/6 bg-white"
                                        src={projectImageMap[element]}
                                        alt="image loading error"
                                    ></img>
                                );
                            })}
                        </div>
                        <div className="w-full mt-2.5 flex flex-row justify-around">
                            {card.links.map((element) => {
                                return (
                                    <Button
                                        className="w-4/12 sm:w-2/5"
                                        href={element[1]}
                                        target="_blank"
                                        variant="dark"
                                    >
                                        {element[0]}
                                    </Button>
                                );
                            })}
                        </div>
                        {isLocalMachine && (
                            <Link to={`/projects/edit/${card._id}`}>
                                <AiOutlineEdit
                                    className="mx-auto mt-2"
                                    size={24}
                                />
                            </Link>
                        )}
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default ProjectCards;
