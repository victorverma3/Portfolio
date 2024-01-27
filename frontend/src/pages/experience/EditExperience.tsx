import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

import BackButton from "../../components/BackButton/BackButton";
import Spinner from "../../components/Spinner/Spinner";

import "./EditExperience.css";

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
        <div className="edit-experience-content">
            <h1 className="page-title">Edit Experience</h1>
            {loading ? <Spinner /> : " "}
            <div className="edit-experience-field-container">
                {Object.entries(formData).map(([name, value]) => (
                    <div
                        key={name}
                        className="edit-experience-individual-field-container"
                    >
                        <div className="edit-experience-field-label">
                            <label>
                                {name.charAt(0).toUpperCase() + name.slice(1)}
                            </label>
                        </div>
                        <div className="edit-experience-field">
                            <input
                                className="edit-experience-input"
                                type="text"
                                value={value}
                                onChange={(e) =>
                                    handleFieldChange(name, e.target.value)
                                }
                            />
                        </div>
                    </div>
                ))}
                <div className="edit-experience-actions">
                    <BackButton size={48} destination="/experience" />
                    <button
                        className="edit-experience-save-button"
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
