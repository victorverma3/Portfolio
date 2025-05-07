import React from "react";
import { Button, Card } from "react-bootstrap";

import DeleteModal from "./DeleteModal";
import EditProjectModal from "./EditProjectModal";

const isLocalMachine = window.location.hostname === "localhost";

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
    return (
        <div className="w-11/12 m-auto flex flex-row flex-wrap justify-around">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    className="w-[22rem] my-2.5 text-base 2xl:w-96 2xl:text-xl transition-shadow duration-200 ease-in-out hover:shadow hover:shadow-blue-400"
                >
                    <Card.Img
                        className="m-auto"
                        variant="top"
                        src={`images/${card.image}.png`}
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
                            {card.technologies.map((element, index) => {
                                return (
                                    <img
                                        key={index}
                                        className="w-1/6 bg-white"
                                        src={`images/${element}.png`}
                                        alt="image loading error"
                                    />
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
