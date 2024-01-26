import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

import BackButton from "../../components/BackButton/BackButton";
import Spinner from "../../components/Spinner/Spinner";

import "./EditAbout.css";

const backend = import.meta.env.VITE_BACKEND_URL;

const EditAbout = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        description: "",
        link: "",
        url: "",
        sortOrder: "",
    });

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${backend}/about-collection/${id}`)
            .then((response) => {
                const { title, image, description, link, url, sortOrder } =
                    response.data;
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    title,
                    image,
                    description,
                    link,
                    url,
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

    const handleFieldChange = (name: string, value: string) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleEditAbout = () => {
        setLoading(true);
        const data = {
            ...formData,
            sortOrder: parseInt(formData.sortOrder, 10),
        };
        axios
            .put(`${backend}/about-collection/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar("About edited successfully", {
                    variant: "success",
                });
                navigate("/about");
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar("Error", { variant: "error" });
                console.log(error);
            });
    };
    return (
        <div className="edit-about-content">
            <h1 className="page-title">Edit About</h1>
            {loading ? <Spinner /> : " "}
            <div className="edit-about-field-container">
                {Object.entries(formData).map(([name, value]) => (
                    <div
                        key={name}
                        className="edit-about-individual-field-container"
                    >
                        <div className="edit-about-field-label">
                            <label>
                                {name.charAt(0).toUpperCase() + name.slice(1)}
                            </label>
                        </div>
                        <div className="edit-about-field">
                            <input
                                className="edit-about-input"
                                type="text"
                                value={value}
                                onChange={(e) =>
                                    handleFieldChange(name, e.target.value)
                                }
                            />
                        </div>
                    </div>
                ))}
                <div className="edit-about-actions">
                    <BackButton size={48} destination="/about" />
                    <button
                        className="edit-about-save-button"
                        onClick={handleEditAbout}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditAbout;
