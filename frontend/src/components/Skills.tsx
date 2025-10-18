import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import AddSkillModal from "./editing/AddSkillModal";
import SkillSection from "./SkillSection";
import Spinner from "./Spinner";

import { useAuth } from "../contexts/AuthContext";

const backend = import.meta.env.VITE_BACKEND_URL;

type skillsDataType = {
    _id: string;
    name: string;
    image: string;
    group: string;
    sortOrder: number;
};

const Skills = () => {
    const [skillsData, setSkillsData] = useState<skillsDataType[]>([]);
    const [skillSection, setSkillSection] = useState<string>("langs-tools");

    const handleUpdate = (skillSection: string) => {
        setSkillSection(skillSection);
    };

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${backend}/skill-collection`)
            .then((response) => {
                setSkillsData(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const { isAuthorized } = useAuth();

    return (
        <div className="w-[75vw] mx-auto mt-4">
            {loading ? (
                <Spinner />
            ) : (
                <div className="mx-auto p-3 flex flex-col space-y-6 rounded-3xl shadow shadow-blue-400 bg-white">
                    <div className="flex justify-evenly border-bottom">
                        <button
                            className={`w-64 p-2 text-base md:text-2xl ${
                                skillSection === "langs-tools" && "bg-blue-100"
                            } hover:shadow hover:shadow-blue-400 duration-200 ease-in-out`}
                            onClick={() => handleUpdate("langs-tools")}
                            type="submit"
                        >
                            Languages and Tools
                        </button>
                        <button
                            className={`w-64 p-2 text-base md:text-2xl ${
                                skillSection === "ds-ml" && "bg-blue-100"
                            } hover:shadow hover:shadow-blue-400 duration-200 ease-in-out`}
                            onClick={() => handleUpdate("ds-ml")}
                            type="submit"
                        >
                            Data Science and ML
                        </button>
                        <button
                            className={`w-64 p-2 text-base md:text-2xl ${
                                skillSection === "cloud-web" && "bg-blue-100"
                            } hover:shadow hover:shadow-blue-400 duration-200 ease-in-out`}
                            onClick={() => handleUpdate("cloud-web")}
                            type="submit"
                        >
                            Cloud and Web
                        </button>
                    </div>

                    <SkillSection
                        skillsData={skillsData.filter(
                            (skill) => skill.group === skillSection
                        )}
                    />
                </div>
            )}
            {isAuthorized && <AddSkillModal />}
        </div>
    );
};

export default Skills;
