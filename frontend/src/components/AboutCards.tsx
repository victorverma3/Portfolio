import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import cube from "../images/cube.png";
import movies from "../images/letterboxd.png";
import weights from "../images/weights.png";

interface Card {
    _id: string;
    title: string;
    image: string;
    description: string;
    link: string;
    url: string;
    sortOrder: number;
}

interface AboutCardsProps {
    cards: Card[];
}

const AboutCards = ({ cards }: AboutCardsProps) => {
    const aboutImageMap: { [key: string]: any } = {
        movies: movies,
        weights: weights,
        cube: cube,
    };
    const isLocalMachine = window.location.hostname === "localhost";
    return (
        <div className="w-11/12 m-auto flex flex-row flex-wrap justify-around">
            {cards.map((card, index) => (
                <Card
                    className="w-11/12 text-base my-2.5 border-1 border-solid border-gray-200 sm:w-80 sm:text-lg 2xl:2-96 2xl:text-xl"
                    key={index}
                >
                    <Card.Img
                        variant="top"
                        src={aboutImageMap[card.image]}
                        alt="image loading error"
                    />
                    <Card.Body>
                        <Card.Title>
                            <a
                                className="text-3xl text-black no-underline 2xl:text-4xl"
                                href={card.url}
                                target="_blank"
                            >
                                {card.title}
                            </a>
                        </Card.Title>
                        <Card.Text className="text-justify">
                            {card.description}
                        </Card.Text>
                        <div className="my-4">
                            <Button
                                className="w-3/5"
                                href={card.url}
                                target="_blank"
                                variant="dark"
                            >
                                {card.link}
                            </Button>
                        </div>
                        {isLocalMachine && (
                            <Link to={`/about/edit/${card._id}`}>
                                <AiOutlineEdit className="m-auto" size={24} />
                            </Link>
                        )}
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default AboutCards;
