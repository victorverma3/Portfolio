import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import AboutCards from "../../components/AboutCards";
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
                I graduated from Boston University in May 2025 with a B.A. in
                Mathematics and Computer Science and a minor in Data Science.
                I'm currently working as an associate software engineer at
                Savvas Learning Company, but I may pursue a graduate degree in
                computer science. I love learning and spend a lot of time
                working on personal projects and developing new skills.
            </p>

            <p className="w-9/12 m-auto pt-6 text-xl text-justify">
                In my free time, I love to watch movies, go to the gym, and
                solve the Rubik's Cube. I also like to hang out with my friends,
                watch sports (football, soccer, basketball, and rugby), and eat
                food of all cuisines. I enjoy traveling, with some of my
                favorite places being Egypt and Jordan for their history, and
                Iceland and Alaska for their nature.
            </p>

            <br />

            {loading ? <Spinner /> : <AboutCards cards={aboutData} />}

            <Footer />
        </div>
    );
};

export default About;
