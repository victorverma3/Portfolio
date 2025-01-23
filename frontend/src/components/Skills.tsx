import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import AddSkillModal from "./AddSkillModal";
import DeleteModal from "./DeleteModal";
import EditSkillModal from "./EditSkillModal";
import SkillSection from "./SkillSection";
import Spinner from "./Spinner";

// import awslogo from "../images/awslogo.png";
// import dockerlogo from "../images/dockerlogo.png";
// import firebaselogo from "../images/firebaselogo.png";
// import flasklogo from "../images/flasklogo.png";
// import gcplogo from "../images/gcplogo.png";
// import gitlogo from "../images/gitlogo.png";
// import huggingfacelogo from "../images/huggingfacelogo.png";
// import javalogo from "../images/javalogo.png";
// import javascriptlogo from "../images/javascriptlogo.png";
// import llamaindexlogo from "../images/llamaindexlogo.png";
// import mongodblogo from "../images/mongodblogo.png";
// import nodelogo from "../images/nodelogo.png";
// import numpylogo from "../images/numpylogo.png";
// import pandaslogo from "../images/pandaslogo.png";
// import pythonlogo from "../images/pythonlogo.png";
// import reactlogo from "../images/reactlogo.png";
// import scikitlearnlogo from "../images/scikitlearnlogo.png";
// import supabaselogo from "../images/supabaselogo.png";
// import tensorflowlogo from "../images/tensorflowlogo.png";
// import typescriptlogo from "../images/typescriptlogo.png";

type skillsDataType = {
    _id: string;
    name: string;
    image: string;
    group: string;
    sortOrder: number;
};

const Skills = () => {
    // const skillsImageMap: { [key: string]: any } = {
    //     awslogo,
    //     dockerlogo,
    //     firebaselogo,
    //     flasklogo,
    //     gcplogo,
    //     gitlogo,
    //     huggingfacelogo,
    //     javalogo,
    //     javascriptlogo,
    //     llamaindexlogo,
    //     mongodblogo,
    //     nodelogo,
    //     numpylogo,
    //     pandaslogo,
    //     pythonlogo,
    //     reactlogo,
    //     scikitlearnlogo,
    //     supabaselogo,
    //     tensorflowlogo,
    //     typescriptlogo,
    // };
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
            {loading ? (
                <Spinner />
            ) : (
                <div className="flex flex-col space-y-6">
                    <SkillSection
                        skillsData={skillsData.filter(
                            (skill) => skill.group === "languages"
                        )}
                        sectionHeader="Languages"
                    />

                    <SkillSection
                        skillsData={skillsData.filter(
                            (skill) => skill.group === "ds-ml"
                        )}
                        sectionHeader="Data Science and Machine Learning"
                    />

                    <SkillSection
                        skillsData={skillsData.filter(
                            (skill) => skill.group === "cloud-devops"
                        )}
                        sectionHeader="Cloud Technologies and DevOps"
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
