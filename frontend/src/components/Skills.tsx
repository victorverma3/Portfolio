import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import AddSkillModal from "./AddSkillModal";
import SkillSection from "./SkillSection";
import Spinner from "./Spinner";

const isLocalMachine = window.location.hostname === "localhost";

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

    return (
        <div className="mt-8">
            {loading ? (
                <Spinner />
            ) : (
                <div className="flex flex-col space-y-8">
                    <SkillSection
                        skillsData={skillsData.filter(
                            (skill) => skill.group === "languages-dbs"
                        )}
                        sectionHeader="Languages and Databases"
                    />

                    <SkillSection
                        skillsData={skillsData.filter(
                            (skill) => skill.group === "ds-ml"
                        )}
                        sectionHeader="Data Science and ML"
                    />

                    <SkillSection
                        skillsData={skillsData.filter(
                            (skill) => skill.group === "cloud-devops"
                        )}
                        sectionHeader="Cloud and DevOps"
                    />

                    <SkillSection
                        skillsData={skillsData.filter(
                            (skill) => skill.group === "web"
                        )}
                        sectionHeader="Web Development"
                    />

                    {isLocalMachine && <AddSkillModal />}
                </div>
            )}
        </div>
    );
};

export default Skills;
