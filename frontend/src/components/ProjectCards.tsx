import React from "react";
import { Button, Card } from "react-bootstrap";

import DeleteModal from "./DeleteModal";
import EditProjectModal from "./EditProjectModal";

import candidatebios from "../images/candidatebios.png";
import csslogo from "../images/csslogo.png";
import flasklogo from "../images/flasklogo.png";
import gitlogo from "../images/gitlogo.png";
import htmllogo from "../images/htmllogo.png";
import javascriptlogo from "../images/javascriptlogo.png";
import ktpdatabase from "../images/ktpdatabase.png";
import mongodblogo from "../images/mongodblogo.png";
import numpylogo from "../images/numpylogo.png";
import nutrisistant from "../images/nutrisistant.png";
import pandaslogo from "../images/pandaslogo.png";
import pythonlogo from "../images/pythonlogo.png";
import portfolio from "../images/portfolio.png";
import reactlogo from "../images/reactlogo.png";
import recommendations from "../images/recommendations.png";
import scikitlearnlogo from "../images/scikitlearnlogo.png";
import sportsnews from "../images/sportsnews.png";
import statsense from "../images/statsense.png";
import supabaselogo from "../images/supabaselogo.png";
import tensorflowlogo from "../images/tensorflowlogo.png";
import typescriptlogo from "../images/typescriptlogo.png";

interface Card {
    _id: string;
    title: string;
    image: string;
    description: string;
    technologies: Array<string>;
    linkTitles: Array<string>;
    linkURLs: Array<string>;
    sortOrder: number;
}

interface ProjectCardsProps {
    cards: Card[];
}

const ProjectCards = ({ cards }: ProjectCardsProps) => {
    const projectImageMap: { [key: string]: any } = {
        candidatebios: candidatebios,
        csslogo: csslogo,
        flasklogo: flasklogo,
        gitlogo: gitlogo,
        htmllogo: htmllogo,
        javascriptlogo: javascriptlogo,
        ktpdatabase: ktpdatabase,
        mongodblogo: mongodblogo,
        numpylogo: numpylogo,
        nutrisistant: nutrisistant,
        pandaslogo: pandaslogo,
        portfolio: portfolio,
        pythonlogo: pythonlogo,
        reactlogo: reactlogo,
        recommendations: recommendations,
        scikitlearnlogo: scikitlearnlogo,
        sportsnews: sportsnews,
        statsense: statsense,
        supabaselogo: supabaselogo,
        tensorflowlogo: tensorflowlogo,
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
                            {card.linkTitles.map((title, index) => {
                                return (
                                    <Button
                                        key={index}
                                        className="w-4/12 sm:w-2/5"
                                        href={card.linkURLs[index]}
                                        target="_blank"
                                        variant="dark"
                                    >
                                        {title}
                                    </Button>
                                );
                            })}
                        </div>
                        {isLocalMachine && (
                            <div className="px-4 flex flex-row flex-wrap justify-around">
                                <EditProjectModal id={card._id} />
                                <DeleteModal
                                    id={card._id}
                                    name={card.title}
                                    deleteItem={"Project"}
                                />
                            </div>
                        )}
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default ProjectCards;
