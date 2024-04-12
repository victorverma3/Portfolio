import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import DeleteModal from "../../components/DeleteModal";
import Footer from "../../components/Footer";
import Spinner from "../../components/Spinner";

import "react-vertical-timeline-component/style.min.css";

import amazonlogo from "../../images/amazonlogo.png";
import bulogo from "../../images/bulogo.png";
import ktplogo from "../../images/ktplogo.png";
import leslieslogo from "../../images/leslieslogo.png";
import rsmlogo from "../../images/rsmlogo.png";
import umasshospitallogo from "../../images/umasshospitallogo.png";

const backend = import.meta.env.VITE_BACKEND_URL;

type experienceDataType = {
    _id: string;
    role: string;
    employer: string;
    dates: string;
    location: string;
    description: string;
    icon: string;
    sortOrder: number;
};

const Experience = () => {
    const [experienceData, setExperienceData] = useState<experienceDataType[]>(
        []
    );
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get(`${backend}/experience-collection`)
            .then((response) => {
                setExperienceData(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    const isLocalMachine = window.location.hostname === "localhost";
    return (
        <div className="w-screen min-h-[80vh] mt-20 mb-8">
            <h1 className="text-5xl 2xl:text-6xl">Experience</h1>
            {loading ? (
                <Spinner />
            ) : (
                <VerticalTimeline>
                    {experienceData.map((element, index) => {
                        const experienceImageMap: { [key: string]: any } = {
                            bulogo: bulogo,
                            ktplogo: ktplogo,
                            leslieslogo: leslieslogo,
                            amazonlogo: amazonlogo,
                            umasshospitallogo: umasshospitallogo,
                            rsmlogo: rsmlogo,
                        };
                        return (
                            <VerticalTimelineElement
                                key={index}
                                iconStyle={{
                                    backgroundImage: `url(${
                                        experienceImageMap[element.icon]
                                    })`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}
                            >
                                <h3 className="text-left">{element.role}</h3>
                                <h5 className="text-left">
                                    {element.employer}
                                </h5>
                                <h6 className="text-left">{element.dates}</h6>
                                <h6 className="text-left">
                                    {element.location}
                                </h6>
                                <p className="text-justify">
                                    {element.description}
                                </p>
                                {isLocalMachine && (
                                    <div className="px-4 flex flex-row flex-wrap justify-around">
                                        <Link
                                            to={`/experience/edit/${element._id}`}
                                        >
                                            <AiOutlineEdit
                                                className="mx-auto mt-2.5"
                                                size={24}
                                            />
                                        </Link>
                                        <DeleteModal
                                            id={element._id}
                                            name={element.role}
                                            deleteItem={"Experience"}
                                        />
                                    </div>
                                )}
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            )}
            <Footer />
        </div>
    );
};

export default Experience;
