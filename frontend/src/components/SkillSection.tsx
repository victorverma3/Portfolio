import React, { useRef } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

import DeleteModal from "./DeleteModal";
import EditSkillModal from "./EditSkillModal";

const backend = import.meta.env.VITE_BACKEND_URL;

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
    const { enqueueSnackbar } = useSnackbar();
    const dragSkill = useRef<number>(0);
    const draggedOverSkill = useRef<number>(0);
    const updateSkills = async (skills: skillsDataType[]) => {
        try {
            await Promise.all(
                skills.map((skill) =>
                    axios.put(`${backend}/skill-collection/${skill._id}`, skill)
                )
            );
            enqueueSnackbar("Sort order updated successfully", {
                variant: "success",
            });
            window.location.reload();
        } catch (error) {
            enqueueSnackbar("Error updating sort order", {
                variant: "error",
            });
            console.error(error);
        }
    };
    const handleSort = () => {
        if (isLocalMachine) {
            const skillsClone = [...skillsData];
            const temp = skillsClone[dragSkill.current];
            skillsClone[dragSkill.current] =
                skillsClone[draggedOverSkill.current];
            skillsClone[draggedOverSkill.current] = temp;

            const updatedSkills = skillsClone.map((skill, index) => ({
                ...skill,
                sortOrder: index + 1,
            }));
            updateSkills(updatedSkills);
        }
    };
    return (
        <div className="w-[80vw] mx-auto px-3">
            <h2 className="text-3xl 2xl:text-4xl">{sectionHeader}</h2>
            <div className="m-auto flex flex-row flex-wrap gap-2 justify-center content-center">
                {skillsData.map((skill, index) => (
                    <div
                        key={index}
                        className={`w-24 sm:w-32 ${
                            isLocalMachine && "cursor-grab"
                        }`}
                        draggable={isLocalMachine}
                        onDragStart={
                            isLocalMachine
                                ? () => (dragSkill.current = index)
                                : undefined
                        }
                        onDragEnter={
                            isLocalMachine
                                ? () => (draggedOverSkill.current = index)
                                : undefined
                        }
                        onDragEnd={isLocalMachine ? handleSort : undefined}
                        onDragOver={
                            isLocalMachine
                                ? (e) => e.preventDefault()
                                : undefined
                        }
                    >
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
