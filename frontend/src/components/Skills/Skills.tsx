import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import Spinner from "../Spinner/Spinner";

import bootstraplogo from "../../images/bootstraplogo.png";
import csslogo from "../../images/csslogo.png";
import gitlogo from "../../images/gitlogo.png";
import htmllogo from "../../images/htmllogo.png";
import javascriptlogo from "../../images/javascriptlogo.png";
import mongodblogo from "../../images/mongodblogo.png";
import nodelogo from "../../images/nodelogo.png";
import pythonlogo from "../../images/pythonlogo.png";
import reactlogo from "../../images/reactlogo.png";
import tensorflowlogo from "../../images/tensorflowlogo.png";
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
        bootstraplogo: bootstraplogo,
        nodelogo: nodelogo,
        mongodblogo: mongodblogo,
        gitlogo: gitlogo,
        tensorflowlogo: tensorflowlogo,
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
        <div className="mt-8">
            <h2 className="page-subtitle">Skills</h2>
            {loading ? (
                <Spinner />
            ) : (
                <div className="w-11/12 sm:w-4/5 m-auto flex flex-row flex-wrap justify-center content-center">
                    {skillsData.map((skill, index) => (
                        <div className="w-32 sm:w-40 m-4" key={index}>
                            <h3 className="text-2xl">{skill.name}</h3>
                            <img
                                className="w-16 sm:w-20 m-auto"
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
