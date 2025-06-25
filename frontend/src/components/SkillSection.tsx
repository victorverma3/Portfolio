import React, { useRef } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

import DeleteModal from "./DeleteModal";
import EditSkillModal from "./EditSkillModal";

import { useAuth } from "../contexts/AuthContext";

const backend = import.meta.env.VITE_BACKEND_URL;

type skillsDataType = {
    _id: string;
    name: string;
    image: string;
    group: string;
    sortOrder: number;
};

interface SkillSectionProps {
    skillsData: skillsDataType[];
}

const SkillSection = ({ skillsData }: SkillSectionProps) => {
    const { isAuthorized } = useAuth();
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
        if (isAuthorized) {
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
        <div className="m-auto p-3 flex flex-row flex-wrap gap-3 justify-center content-center">
            {skillsData.map((skill, index) => (
                <div
                    key={index}
                    className={`w-24 sm:w-32 ${isAuthorized && "cursor-grab"}`}
                    draggable={isAuthorized}
                    onDragStart={
                        isAuthorized
                            ? () => (dragSkill.current = index)
                            : undefined
                    }
                    onDragEnter={
                        isAuthorized
                            ? () => (draggedOverSkill.current = index)
                            : undefined
                    }
                    onDragEnd={isAuthorized ? handleSort : undefined}
                    onDragOver={
                        isAuthorized ? (e) => e.preventDefault() : undefined
                    }
                >
                    <h3 className="text-base sm:text-lg 2xl:text-xl">
                        {skill.name}
                    </h3>
                    <img
                        className="w-12 sm:w-16 m-auto"
                        src={`images/${skill.image}.png?url`}
                    />
                    {isAuthorized && (
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
    );
};

export default SkillSection;
