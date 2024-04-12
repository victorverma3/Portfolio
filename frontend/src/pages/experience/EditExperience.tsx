import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

import BackButton from "../../components/BackButton";
import Spinner from "../../components/Spinner";

const backend = import.meta.env.VITE_BACKEND_URL;

const EditExperience = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const [formData, setFormData] = useState({
        role: "",
        employer: "",
        dates: "",
        location: "",
        description: "",
        icon: "",
        sortOrder: "",
    });

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${backend}/experience-collection/${id}`)
            .then((response) => {
                const {
                    role,
                    employer,
                    dates,
                    location,
                    description,
                    icon,
                    sortOrder,
                } = response.data;
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    role,
                    employer,
                    dates,
                    location,
                    description,
                    icon,
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

    const handleEditExperience = () => {
        const data = {
            ...formData,
            sortOrder: parseInt(formData.sortOrder, 10),
        };
        setLoading(true);
        axios
            .put(`${backend}/experience-collection/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar("Experience edited successfully", {
                    variant: "success",
                });
                navigate("/experience");
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar("Error", { variant: "error" });
                console.log(error);
            });
    };
    return (
        <div className="w-screen min-h-[80vh] mt-20 mb-14">
            <h1 className="text-5xl 2xl:text-6xl">Edit Experience</h1>
            {loading ? <Spinner /> : " "}
            <div className="w-fit m-auto">
                {Object.entries(formData).map(([name, value]) => (
                    <div
                        key={name}
                        className="mx-auto my-8 flex flex-row justify-between"
                    >
                        <div className="w-32 m-auto text-2xl text-start">
                            <label>
                                {name.charAt(0).toUpperCase() + name.slice(1)}
                            </label>
                        </div>
                        <div className="w-fit m-auto">
                            <input
                                className="w-80 h-8 m-auto px-2 border-1 border-gray-200"
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
                    <BackButton size={48} destination="/experience" />
                    <button
                        className="w-20 text-2xl bg-white border-1 border-gray-200 hover:border-gray-400"
                        onClick={handleEditExperience}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditExperience;
