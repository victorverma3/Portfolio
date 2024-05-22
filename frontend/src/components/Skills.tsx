import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import AddSkillModal from "./AddSkillModal";
import DeleteModal from "./DeleteModal";
import EditSkillModal from "./EditSkillModal";
import Spinner from "./Spinner";

import bootstraplogo from "../images/bootstraplogo.png";
import csslogo from "../images/csslogo.png";
import flasklogo from "../images/flasklogo.png";
import gitlogo from "../images/gitlogo.png";
import htmllogo from "../images/htmllogo.png";
import javascriptlogo from "../images/javascriptlogo.png";
import mongodblogo from "../images/mongodblogo.png";
import nodelogo from "../images/nodelogo.png";
import numpylogo from "../images/numpylogo.png";
import pandaslogo from "../images/pandaslogo.png";
import pythonlogo from "../images/pythonlogo.png";
import reactlogo from "../images/reactlogo.png";
import scikitlearnlogo from "../images/scikitlearnlogo.png";
import supabaselogo from "../images/supabaselogo.png";
import tensorflowlogo from "../images/tensorflowlogo.png";
import typescriptlogo from "../images/typescriptlogo.png";

type skillsDataType = {
    _id: string;
    name: string;
    image: string;
    sortOrder: number;
};

const Skills = () => {
    const skillsImageMap: { [key: string]: any } = {
        bootstraplogo: bootstraplogo,
        csslogo: csslogo,
        flasklogo: flasklogo,
        gitlogo: gitlogo,
        htmllogo: htmllogo,
        javascriptlogo: javascriptlogo,
        mongodblogo: mongodblogo,
        nodelogo: nodelogo,
        numpylogo: numpylogo,
        pandaslogo: pandaslogo,
        pythonlogo: pythonlogo,
        reactlogo: reactlogo,
        scikitlearnlogo: scikitlearnlogo,
        supabaselogo: supabaselogo,
        tensorflowlogo: tensorflowlogo,
        typescriptlogo: typescriptlogo,
    };
    const isLocalMachine = window.location.hostname === "localhost";
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
            <h2 className="text-4xl 2xl:text-5xl">Skills</h2>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <div className="w-11/12 sm:w-4/5 m-auto flex flex-row flex-wrap justify-center content-center">
                        {skillsData.map((skill, index) => (
                            <div className="w-32 sm:w-40 m-4" key={index}>
                                <h3 className="text-2xl">{skill.name}</h3>
                                <img
                                    className="w-16 sm:w-20 m-auto"
                                    src={skillsImageMap[skill.image]}
                                ></img>
                                {isLocalMachine && (
                                    <div className="px-4 flex flex-row flex-wrap justify-around">
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
                    {isLocalMachine && <AddSkillModal />}
                </>
            )}
        </div>
    );
};

export default Skills;
