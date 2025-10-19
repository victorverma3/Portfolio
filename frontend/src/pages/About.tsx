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
                Mathematics and Computer Science and a minor in Data Science. I
                love learning and solving problems, and my primary interests are
                machine learning, optimization, and full-stack web development.
            </p>

            <p className="w-9/12 m-auto pt-6 text-xl 2xl:text-2xl text-justify">
                I pursue many hobbies in my free time, ranging from casual to
                physical to intellectual. As an avid Letterboxd user and AMC
                A-List member, I typically watch over 100 movies each year. I
                live an active lifestyle; I used to play football in high school
                and rugby in college, both of which I like to watch in addition
                to soccer, UFC, and basketball. Nowadays, I spend many of my
                evenings at the Gym. Additionally, I love traveling, and some of
                my favorite places I've visited are Egypt and Jordan for their
                history, and Iceland and Alaska for their nature. My bucket list
                currently includes gorilla trekking in Rwanda and hiking Machu
                Picchu in Peru. Lastly, I've starting reading more since
                graduating college, and my favorite genres are mystery, history,
                international geopolitics, and sci-fi.
            </p>

            <br />

            {loading ? <Spinner /> : <AboutCards cards={aboutData} />}
        </div>
    );
};

export default About;
