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

const backend = import.meta.env.VITE_BACKEND_URL;
const isLocalMachine = window.location.hostname === "localhost";

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

    return (
        <div className="w-screen min-h-[80vh] pt-20 pb-8">
            <h1 className="text-5xl 2xl:text-6xl">Experience</h1>
            {loading ? (
                <Spinner />
            ) : (
                <VerticalTimeline>
                    {experienceData.map((element, index) => {
                        return (
                            <VerticalTimelineElement
                                key={index}
                                iconStyle={{
                                    backgroundImage: `images/${element.icon}.png?url`,
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
