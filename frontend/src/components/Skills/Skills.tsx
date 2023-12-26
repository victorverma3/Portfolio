import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import Spinner from "../Spinner/Spinner";

import "./Skills.css";

import csslogo from "../../images/csslogo.png";
import gitlogo from "../../images/gitlogo.png";
import htmllogo from "../../images/htmllogo.png";
import javascriptlogo from "../../images/javascriptlogo.png";
import mongodblogo from "../../images/mongodblogo.png";
import nodelogo from "../../images/nodelogo.png";
import pythonlogo from "../../images/pythonlogo.png";
import reactlogo from "../../images/reactlogo.png";
import typescriptlogo from "../../images/typescriptlogo.png";

type skillsDataType = {
    _id: string;
    name: string;
    image: string;
    sortOrder: number;
};

const Skills = () => {
    const skillsImageMap: { [key: string]: any } = {
        pythonlogo: pythonlogo,
        htmllogo: htmllogo,
        csslogo: csslogo,
        javascriptlogo: javascriptlogo,
        typescriptlogo: typescriptlogo,
        reactlogo: reactlogo,
        nodelogo: nodelogo,
        mongodblogo: mongodblogo,
        gitlogo: gitlogo,
    };
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
        <div className="skills-component">
            <h2 className="page-subtitle">Skills</h2>
            {loading ? (
                <Spinner />
            ) : (
                <div className="skills-list">
                    {skillsData.map((skill, index) => (
                        <div className="skill-item" key={index}>
                            <h3 className="skill-name">{skill.name}</h3>
                            <img
                                className="skill-image"
                                src={skillsImageMap[skill.image]}
                            ></img>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Skills;
