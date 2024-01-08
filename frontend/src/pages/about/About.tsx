import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import AboutCards from "../../components/AboutCards/AboutCards";
import Disclaimer from "../../components/Disclaimer/Disclaimer";
import Footer from "../../components/Footer/Footer";
import Spinner from "../../components/Spinner/Spinner";

import "./About.css";

import cruise from "../../images/cruise.png";
import husky from "../../images/husky.png";

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
        <div className="about-content">
            <h1 className="page-title">About Me</h1>
            <div className="about-pic-container">
                <img
                    className="about-pic"
                    src={cruise}
                    alt="image loading error"
                ></img>
                <img
                    className="about-pic"
                    src={husky}
                    alt="image loading error"
                ></img>
            </div>
            <p className="about-bio">
                I consider myself to be a perpetual learner. Even though a lot
                of my time is used up with school, working, the gym, and other
                hobbies, I always spend a few hours each week working on my own
                passion projects or learning new things. I like to watch youtube
                videos on topics ranging from computer science, mathematics, and
                physics, to the social sciences and humanities as well. I
                especially love to immerse myself in the fields of international
                relations, geopolitics, and history (and their intersection). I
                tell everyone that I wish I could experience college as an
                infinite loop and pick a new major in every pass.
            </p>

            <p className="about-bio">
                My parents love to travel, and as a result, I have had the lucky
                opportunity to go to many places growing up. Some of my favorite
                locations include Egypt for its history, and Iceland and Alaska
                for their scenery. I have so many more places I want to go,
                especially the African savanna and the Amazon rainforest, so I
                plan to continue exploring the world as I grow older. I like
                nature and the outdoors, and I also want to go camping in the
                wilderness.
            </p>

            <p className="about-bio">
                I was born and raised in central Massachusetts with my parents,
                my younger sister, and our dog, Rusty. I played football for 10
                years and started at left-guard at the varsity level for my high
                school team. I'm extremely proud of my individual accolades,
                including being voted lineman of the week by my varsity coaches
                in my first start and being named a Central Mass All Star in 7th
                grade, but I will forever cherish the close friends and memories
                I made and the life lessons that I learned while playing the
                sport.
            </p>

            <br></br>
            {loading ? <Spinner /> : <AboutCards cards={aboutData} />}
            <Disclaimer />
            <Footer />
        </div>
    );
};

export default About;
