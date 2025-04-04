import React, { useEffect, useState } from "react";
import axios from "axios";

import AddProjectModal from "../../components/AddProjectModal";
import Footer from "../../components/Footer";
import ProjectCards from "../../components/ProjectCards";
import Spinner from "../../components/Spinner";

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
    const isLocalMachine = window.location.hostname === "localhost";
    return (
        <div className="w-screen min-h-[80vh] pt-20 pb-8">
            <h1 className="text-5xl 2xl:text-6xl">Projects</h1>
            {loading ? <Spinner /> : <ProjectCards cards={projectData} />}
            {isLocalMachine && <AddProjectModal />}
            <Footer />
        </div>
    );
};

export default Projects;
