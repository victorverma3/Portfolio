import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

import BackButton from "../../components/BackButton";
import Spinner from "../../components/Spinner";

const backend = import.meta.env.VITE_BACKEND_URL;

const EditSkill = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        sortOrder: "",
    });

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${backend}/skill-collection/${id}`)
            .then((response) => {
                const { name, image, sortOrder } = response.data;
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    name,
                    image,
                    sortOrder,
                }));
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar("Error", { variant: "error" });
                console.log(error);
            });
    }, [id, enqueueSnackbar]);

    const handleFieldChange = (field: string, value: string) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [field]: value,
        }));
    };

    const handleEditSkill = () => {
        setLoading(true);
        const data = {
            ...formData,
            sortOrder: parseInt(formData.sortOrder, 10),
        };
        axios
            .put(`${backend}/skill-collection/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar("Skill edited successfully", {
                    variant: "success",
                });
                navigate("/education");
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar("Error", { variant: "error" });
                console.log(error);
            });
    };

    return (
        <div className="w-screen min-h-[80vh] mt-20 mb-14">
            <h1 className="text-5xl 2xl:text-6xl">Edit Project</h1>
            {loading ? <Spinner /> : " "}
            <div className="w-fit m-auto">
                {Object.entries(formData).map(([name, value]) => (
                    <div
                        key={name}
                        className="mx-auto my-8 flex flex-row justify-between"
                    >
                        <div className="w-40 m-auto text-2xl text-start">
                            <label>
                                {name.charAt(0).toUpperCase() + name.slice(1)}
                            </label>
                        </div>
                        <div className="w-fit m-auto">
                            <input
                                className="w-80 h-8 m-auto border-1 border-gray-200"
                                type="text"
                                value={value}
                                onChange={(e) =>
                                    handleFieldChange(name, e.target.value)
                                }
                            />
                        </div>
                    </div>
                ))}
                <div className="w-60 m-auto flex flex-row justify-around">
                    <BackButton size={48} destination="/education" />
                    <button
                        className="w-20 text-2xl bg-white border-1 border-gray-200 hover:border-gray-400"
                        onClick={handleEditSkill}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditSkill;