import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

import AddProjectModal from "../../components/AddProjectModal";
import Footer from "../../components/Footer";
import ProjectCards from "../../components/ProjectCards";
import Spinner from "../../components/Spinner";

import { useAuth } from "../../contexts/AuthContext";

const backend = import.meta.env.VITE_BACKEND_URL;

type projectDataType = {
    _id: string;
    title: string;
    image: string;
    description: string;
    technologies: string[];
    linkTitles: string[];
    linkURLs: string[];
    sortOrder: number;
};

const Projects = () => {
    const [projectData, setProjectData] = useState<projectDataType[]>([]);
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${backend}/project-collection`)
            .then((response) => {
                setProjectData(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const dragProject = useRef<number>(0);
    const draggedOverProject = useRef<number>(0);
    const updateProjects = async (projects: projectDataType[]) => {
        try {
            await Promise.all(
                projects.map((project) =>
                    axios.put(
                        `${backend}/project-collection/${project._id}`,
                        project,
                        {
                            headers: {
                                Authorization: `Bearer ${sessionStorage.getItem(
                                    "authToken"
                                )}`,
                            },
                        }
                    )
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
        const projectsClone = [...projectData];
        const temp = projectsClone[dragProject.current];
        projectsClone[dragProject.current] =
            projectsClone[draggedOverProject.current];
        projectsClone[draggedOverProject.current] = temp;

        const updatedProjects = projectsClone.map((project, index) => ({
            ...project,
            sortOrder: index + 1,
        }));
        updateProjects(updatedProjects);
    };

    const { isAuthorized } = useAuth();
    return (
        <div className="w-screen min-h-[80vh] pt-20 pb-8">
            <h1 className="text-5xl 2xl:text-6xl">Projects</h1>
            {loading ? <Spinner /> : <ProjectCards cards={projectData} />}

            {isAuthorized && <AddProjectModal />}

            {isAuthorized && (
                <div className="w-128 max-w-[80vw] mt-8 mx-auto flex flex-col">
                    <h3>Edit Sort Order</h3>
                    <div className="mx-auto flex flex-wrap justify-around gap-3">
                        {projectData.map((project, index) => (
                            <div
                                key={index}
                                className="w-56 border-2 border-gray-300 rounded-md transition-shadow duration-200 ease-in-out hover:shadow hover:shadow-blue-400 cursor-grab"
                                draggable
                                onDragStart={() =>
                                    (dragProject.current = index)
                                }
                                onDragEnter={() =>
                                    (draggedOverProject.current = index)
                                }
                                onDragEnd={handleSort}
                                onDragOver={(e) => e.preventDefault()}
                            >
                                <p className="h-fit m-auto p-2">
                                    {project.title} {`(${project.sortOrder})`}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Projects;
