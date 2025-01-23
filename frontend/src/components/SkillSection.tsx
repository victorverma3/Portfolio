import React from "react";

import DeleteModal from "./DeleteModal";
import EditSkillModal from "./EditSkillModal";

const isLocalMachine = window.location.hostname === "localhost";

type skillsDataType = {
    _id: string;
    name: string;
    image: string;
    group: string;
    sortOrder: number;
};

interface SkillSectionProps {
    skillsData: skillsDataType[];
    sectionHeader: string;
}

const SkillSection = ({ skillsData, sectionHeader }: SkillSectionProps) => {
    return (
        <div className="w-11/12 sm:w-4/5 max-w-[768px] mx-auto">
            <h2 className="text-3xl 2xl:text-4xl">{sectionHeader}</h2>
            <div className="m-auto flex flex-row flex-wrap gap-2 justify-center content-center">
                {skillsData.map((skill, index) => (
                    <div key={index} className="w-24 sm:w-32">
                        <h3 className="text-lg">{skill.name}</h3>
                        <img
                            className="w-12 sm:w-16 m-auto"
                            src={`images/${skill.image}.png?url`}
                        />
                        {isLocalMachine && (
                            <div className="px-4 flex flex-row flex-wrap justify-between">
                                <EditSkillModal id={skill._id} />
                                <DeleteModal
                                    id={skill._id}
                                    name={skill.name}
                                    deleteItem={"Skill"}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillSection;
