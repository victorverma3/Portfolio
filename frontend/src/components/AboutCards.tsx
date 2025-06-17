import React from "react";
import { Button, Card } from "react-bootstrap";

import EditAboutModal from "./EditAboutModal";

import { useAuth } from "../contexts/AuthContext";

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
    const { isAuthorized } = useAuth();
    return (
        <div className="w-5/6 m-auto flex flex-row flex-wrap space-x-4 justify-around">
            {cards.map((card, index) => (
                <Card
                    className="w-11/12 xs:w-[20rem] 2xl:w-96 my-2.5 text-base sm:text-lg 2xl:text-xl transition-shadow duration-200 ease-in-out hover:shadow hover:shadow-blue-400"
                    key={index}
                >
                    <Card.Img
                        variant="top"
                        src={`images/${card.image}.png`}
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
                        {isAuthorized && <EditAboutModal id={card._id} />}
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default AboutCards;
