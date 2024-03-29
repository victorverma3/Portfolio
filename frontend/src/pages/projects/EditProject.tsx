import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

import BackButton from "../../components/BackButton";
import Spinner from "../../components/Spinner";

const backend = import.meta.env.VITE_BACKEND_URL;

const EditProject = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [technologies, setTechnologies] = useState<string[]>([]);
    const [links, setLinks] = useState<string[][]>([]);
    const [sortOrder, setSortOrder] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${backend}/project-collection/${id}`)
            .then((response) => {
                setTitle(response.data.title);
                setImage(response.data.image);
                setDescription(response.data.description);
                setTechnologies(response.data.technologies);
                setLinks(response.data.links);
                setSortOrder(response.data.sortOrder);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar("Error", { variant: "error" });
                console.log(error);
            });
    }, [id, enqueueSnackbar]);

    const handleEditProject = () => {
        const data = {
            title,
            image,
            description,
            technologies,
            links,
            sortOrder: parseInt(sortOrder),
        };
        setLoading(true);
        axios
            .put(`${backend}/project-collection/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar("Project edited successfully", {
                    variant: "success",
                });
                navigate("/projects");
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar("Error", { variant: "error" });
                console.log(error);
            });
    };
    const handleLinkUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const pairArray = JSON.parse(e.target.value as string);
        console.log(pairArray);
        setLinks(pairArray);
    };
    return (
        <div className="w-screen min-h-[80vh] mt-20 mb-14">
            <h1 className="text-5xl 2xl:text-6xl">Edit Project</h1>
            {loading ? <Spinner /> : " "}
            <div className="w-fit m-auto">
                <div className="mx-auto my-8 flex flex-row justify-between">
                    <div className="w-40 m-auto text-2xl text-start">
                        <label>Title</label>
                    </div>
                    <div className="w-fit m-auto">
                        <input
                            className="w-80 h-8 m-auto border-1 border-gray-200"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mx-auto my-8 flex flex-row justify-between">
                    <div className="w-40 m-auto text-2xl text-start">
                        <label>Image</label>
                    </div>
                    <div className="w-fit m-auto">
                        <input
                            className="w-80 h-8 m-auto border-1 border-gray-200"
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mx-auto my-8 flex flex-row justify-between">
                    <div className="w-40 m-auto text-2xl text-start">
                        <label>Description</label>
                    </div>
                    <div className="w-fit m-auto">
                        <input
                            className="w-80 h-8 m-auto border-1 border-gray-200"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mx-auto my-8 flex flex-row justify-between">
                    <div className="w-40 m-auto text-2xl text-start">
                        <label>Technologies</label>
                    </div>
                    <div className="w-fit m-auto">
                        <input
                            className="w-80 h-8 m-auto border-1 border-gray-200"
                            type="text"
                            value={technologies}
                            onChange={(e) =>
                                setTechnologies(e.target.value.split(","))
                            }
                        />
                    </div>
                </div>
                <div className="mx-auto my-8 flex flex-row justify-between">
                    <div className="w-40 m-auto text-2xl text-start">
                        <label>Links</label>
                    </div>
                    <div className="w-fit m-auto">
                        <input
                            className="w-80 h-8 m-auto border-1 border-gray-200"
                            type="text"
                            value={JSON.stringify(links)}
                            onChange={(e) => handleLinkUpdate(e)}
                        />
                    </div>
                </div>
                <div className="mx-auto my-8 flex flex-row justify-between">
                    <div className="w-40 m-auto text-2xl text-start">
                        <label>Sort Order</label>
                    </div>
                    <div className="w-fit m-auto">
                        <input
                            className="w-80 h-8 m-auto border-1 border-gray-200"
                            type="text"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-60 m-auto flex flex-row justify-around">
                    <BackButton size={48} destination="/projects" />
                    <button
                        className="w-20 text-2xl bg-white border-1 border-gray-200 hover:border-gray-400"
                        onClick={handleEditProject}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProject;
