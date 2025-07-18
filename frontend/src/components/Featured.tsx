import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Spinner from "./Spinner";

const backend = import.meta.env.VITE_BACKEND_URL;

type projectDataType = {
    _id: string;
    title: string;
    image: string;
    description: string;
    technologies: string[];
    linkTitles: string[];
    linkURLs: string[];
    sortOrder: number;
};

const featuredProjects = [
    "Movie Recommendations",
    "KTPaul Chatbot",
    "Ekman Emotion Classifier",
    "Electricity Consumption",
];

const featuredLinks: { [key: string]: string } = {
    "Movie Recommendations": "Website",
    "KTPaul Chatbot": "GitHub",
    "Ekman Emotion Classifier": "GitHub",
    "Electricity Consumption": "GitHub",
};

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1280 },
        items: 2,
        slidesToSlide: 2,
    },
    tablet: {
        breakpoint: { max: 1280, min: 540 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 540, min: 0 },
        items: 1,
    },
};

const Featured = () => {
    const [projectData, setProjectData] = useState<projectDataType[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get(`${backend}/project-collection`)
            .then((response) => {
                setProjectData(
                    response.data.data.filter(
                        (project: projectDataType) =>
                            project.title &&
                            featuredProjects.includes(project.title)
                    )
                );
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1280);
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1280);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return loading ? (
        <Spinner />
    ) : (
        <div className="w-[65vw] sm:w-[60vw] mx-auto mt-4 rounded-lg shadow shadow-blue-400 bg-gray-100">
            <h2 className="pt-3">Featured Work</h2>
            <Carousel
                swipeable={isDesktop ? false : true}
                draggable={false}
                showDots={true}
                arrows={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                rewindWithAnimation={true}
                customTransition="transform 1500ms ease-in-out"
                containerClass="carousel-container pb-4"
                dotListClass=""
            >
                {projectData.map((project, index) => (
                    <Card
                        key={index}
                        className="w-[14rem] xs:w-[18rem] sm:w-[20rem] xl:w-[22rem] mx-auto transition-shadow duration-200 ease-in-out hover:shadow hover:shadow-blue-400"
                    >
                        <a
                            href={
                                project.linkURLs[
                                    project.linkTitles.indexOf(
                                        featuredLinks[project.title]
                                    )
                                ]
                            }
                            target="_blank"
                            className="no-underline"
                        >
                            <Card.Img
                                className="m-auto"
                                variant="top"
                                src={`images/${project.image}.png`}
                                alt="image loading error"
                            />
                            <Card.Body>
                                <Card.Title>
                                    <h1 className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl text-black no-underline">
                                        {project.title}
                                    </h1>
                                </Card.Title>
                            </Card.Body>
                        </a>
                    </Card>
                ))}
            </Carousel>
        </div>
    );
};

export default Featured;
