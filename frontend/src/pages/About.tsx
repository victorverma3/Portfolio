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
                I'm currently working as an associate software developer in the
                AI-Enabled Learning domain at Savvas Learning Company, having
                recently graduated from Boston University with a B.A. in
                Mathematics and Computer Science and a minor in Data Science. My
                primary interests are natural language processing, recommender
                systems, machine learning, and optimization. I love learning and
                solving problems.
            </p>

            <p className="w-9/12 m-auto pt-6 text-xl 2xl:text-2xl text-justify">
                In my free time, I pursue many hobbies. I typically watch 100+
                movies each year, and am an active Letterboxd user and AMC
                A-List member. I've always lived an active lifestyle lifting
                weights at the gym, playing rugby in college, and football in
                high school. My favorite sports to watch are football, mma,
                soccer, and basketball. Additionally, I love traveling; my
                favorite places include Egypt, Jordan, Iceland, Alaska, Italy,
                and Japan because of their combination of food, history, and
                nature. My bucket list currently includes gorilla trekking in
                Rwanda and hiking Machu Picchu in Peru.
            </p>

            <br />

            {loading ? <Spinner /> : <AboutCards cards={aboutData} />}
        </div>
    );
};

export default About;
