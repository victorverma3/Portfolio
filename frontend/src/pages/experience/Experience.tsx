import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import AddExperienceModal from "../../components/AddExperienceModal";
import DeleteModal from "../../components/DeleteModal";
import EditExperienceModal from "../../components/EditExperienceModal";
import Footer from "../../components/Footer";
import Spinner from "../../components/Spinner";

import "react-vertical-timeline-component/style.min.css";

import amazonlogo from "../../../public/images/amazonlogo.png";
import bulogo from "../../../public/images/bulogo.png";
import ktplogo from "../../../public/images/ktplogo.png";
import leslieslogo from "../../../public/images/leslieslogo.png";
import rsmlogo from "../../../public/images/rsmlogo.png";
import savvaslogo from "../../../public/images/savvaslogo.png";
import umasshospitallogo from "../../../public/images/umasshospitallogo.png";

const backend = import.meta.env.VITE_BACKEND_URL;

type experienceDataType = {
    _id: string;
    role: string;
    employer: string;
    dates: string;
    location: string;
    description: string[];
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
        <div className="w-screen min-h-[80vh] pt-20 pb-8">
            <h1 className="text-5xl 2xl:text-6xl">Experience</h1>
            {loading ? (
                <Spinner />
            ) : (
                <VerticalTimeline>
                    {experienceData.map((element, index) => {
                        const experienceImageMap: { [key: string]: any } = {
                            amazonlogo: amazonlogo,
                            bulogo: bulogo,
                            ktplogo: ktplogo,
                            leslieslogo: leslieslogo,
                            rsmlogo: rsmlogo,
                            savvaslogo: savvaslogo,
                            umasshospitallogo: umasshospitallogo,
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
                                <ul className="text-left">
                                    {element.description.map(
                                        (bullet, index) => (
                                            <li key={index}>{bullet}</li>
                                        )
                                    )}
                                </ul>

                                {isLocalMachine && (
                                    <div className="px-4 flex flex-row flex-wrap justify-around">
                                        <EditExperienceModal id={element._id} />
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
            {isLocalMachine && <AddExperienceModal />}
            <Footer />
        </div>
    );
};

export default Experience;
