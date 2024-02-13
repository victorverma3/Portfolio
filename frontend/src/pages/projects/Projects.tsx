import React, { useEffect, useState } from "react";
import axios from "axios";

import Disclaimer from "../../components/Disclaimer/Disclaimer";
import Footer from "../../components/Footer/Footer";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import Reveal from "../../components/Reveal";
import Spinner from "../../components/Spinner";

import "./Projects.css";

const backend = import.meta.env.VITE_BACKEND_URL;

type projectDataType = {
    _id: string;
    title: string;
    image: string;
    description: string;
    technologies: [string];
    links: [[string]];
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
    return (
        <div className="project-content">
            <h1 className="page-title">Projects</h1>
            {loading ? (
                <Spinner />
            ) : (
                <Reveal>
                    <ProjectCards cards={projectData} />
                </Reveal>
            )}
            <Disclaimer />
            <Footer />
        </div>
    );
};

export default Projects;
