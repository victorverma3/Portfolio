import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import AboutCards from "../components/cards/AboutCards";
import Spinner from "../components/Spinner";

const backend = import.meta.env.VITE_BACKEND_URL;

type aboutDataType = {
    _id: string;
    title: string;
    image: string;
    description: string;
    link: string;
    url: string;
    sortOrder: number;
};

const About = () => {
    const [aboutData, setAboutData] = useState<aboutDataType[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get(`${backend}/about-collection`)
            .then((response) => {
                setAboutData(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    return (
        <div className="w-screen min-h-[80vh] pt-20 pb-8">
            <h1 className="mt-2 text-5xl 2xl:text-6xl">About Me</h1>

            <p className="w-9/12 m-auto pt-6 text-xl 2xl:text-2xl text-justify">
                I'm currently pursuing my Master of Science in Computer Science
                (MSCS) at Georgia Tech, with a specialization in Machine
                Learning. Previously, I worked as a SWE at Savvas Learning
                Company, where my work involved applied natural language
                processing. I completed my Bachelor of Arts in Mathematics and
                Computer Science, with a minor in Data Science from Boston
                University. My primary research interests interests are applied
                natural language processing, recommender systems, machine
                learning, and optimization. I love learning and solving
                problems.
            </p>

            <p className="w-9/12 m-auto pt-6 text-xl 2xl:text-2xl text-justify">
                I have many hobbies that I enjoy in my free time. I'm an active
                Letterboxd Patron and AMC A-Lister, typically watching 120+
                movies each year. I also try to live an active lifestyle, which
                includes weightlifting, running, playing rugby in college, and
                football in high school. My favorite sports to watch are
                football, soccer, mma, and basketball. Finally, I love
                traveling, especially to places that have a great combination of
                food, history, and nature. My most memorable trips include
                Egypt, Jordan, Iceland, Alaska, Italy, and Japan. Someday soon,
                I hope to go gorilla trekking in Rwanda and hike Machu Picchu in
                Peru.
            </p>

            <br />

            {loading ? <Spinner /> : <AboutCards cards={aboutData} />}
        </div>
    );
};

export default About;
