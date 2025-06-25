import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import AddSkillModal from "./AddSkillModal";
import SkillSection from "./SkillSection";
import Spinner from "./Spinner";

import { useAuth } from "../contexts/AuthContext";

type skillsDataType = {
    _id: string;
    name: string;
    image: string;
    group: string;
    sortOrder: number;
};

const Skills = () => {
    const [skillsData, setSkillsData] = useState<skillsDataType[]>([]);
    const [loading, setLoading] = useState(false);

    const [skillSection, setSkillSection] = useState<string>("languages-dbs");

    useEffect(() => {
        setLoading(true);
        axios
            .get(
                "https://victor-verma-portfolio-backend.vercel.app/skill-collection"
            )
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
        <div className="w-[80vw] mx-auto mt-3">
            {loading ? (
                <Spinner />
            ) : (
                <div className="mx-auto p-3 flex flex-col space-y-6 rounded-3xl bg-white">
                    <div className="flex justify-around border-bottom">
                        <button
                            className={`w-fit p-2 text-base md:text-2xl ${
                                skillSection === "languages-dbs" &&
                                "duration-200 ease-in-out bg-blue-100"
                            }`}
                            onClick={() => setSkillSection("languages-dbs")}
                            type="button"
                        >
                            Languages and Databases
                        </button>
                        <button
                            className={`w-fit p-2 text-base md:text-2xl ${
                                skillSection === "ds-ml" &&
                                "duration-200 ease-in-out bg-blue-100"
                            }`}
                            onClick={() => setSkillSection("ds-ml")}
                            type="button"
                        >
                            Data Science and ML
                        </button>
                        <button
                            className={`w-fit p-2 text-base md:text-2xl ${
                                skillSection === "cloud-devops" &&
                                "duration-200 ease-in-out bg-blue-100"
                            }`}
                            onClick={() => setSkillSection("cloud-devops")}
                            type="button"
                        >
                            Cloud and Devops
                        </button>
                        <button
                            className={`w-fit p-2 text-base md:text-2xl ${
                                skillSection === "web" &&
                                "duration-200 ease-in-out bg-blue-100"
                            }`}
                            onClick={() => setSkillSection("web")}
                            type="button"
                        >
                            Web Development
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
