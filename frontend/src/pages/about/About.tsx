import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import AboutCards from "../../components/AboutCards";
import Disclaimer from "../../components/Disclaimer";
import Footer from "../../components/Footer";
import Spinner from "../../components/Spinner";

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
            <h1 className="text-5xl 2xl:text-6xl">About Me</h1>

            <p className="w-9/12 m-auto pt-6 text-xl text-justify">
                I am a rising senior at Boston University, graduating in May
                2025 with a B.A. in Mathematics and Computer Science and a Minor
                in Data Science. I am looking for full-time roles data
                scientist, machine-learning engine, full-stack software
                engineer, or research assistant. Ideally I want my future job to
                be a combination of elements from each. I love learning, and I
                spend a few hours each week working on personal projects and
                developing my skills. I am open to getting at a graduate degree
                in computer science at some point in the future.
            </p>

            <p className="w-9/12 m-auto pt-6 text-xl text-justify">
                My three biggest hobbies are watching movies, working out, and
                solving the Rubik's Cube. I also love to hang out with my
                friends, watch sports (football, soccer, and basketball), and
                eat food of all cuisines. I enjoy traveling with my family, with
                some of my favorite places being Egypt and Jordan for their
                history, and Iceland and Alaska for their scenery. At this
                moment, I really want to see the wildlife in sub-Saharan Africa
                and the Amazon Rainforest in South America.
            </p>

            <br />

            {loading ? <Spinner /> : <AboutCards cards={aboutData} />}
            <Disclaimer />
            <Footer />
        </div>
    );
};

export default About;
