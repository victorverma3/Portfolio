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
    const [role, setRole] = useState(" ");
    const [employer, setEmployer] = useState(" ");
    const [dates, setDates] = useState(" ");
    const [location, setLocation] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [icon, setIcon] = useState(" ");
    const [sortOrder, setSortOrder] = useState(" ");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${backend}/experience-collection/${id}`)
            .then((response) => {
                setRole(response.data.role);
                setEmployer(response.data.employer);
                setDates(response.data.dates);
                setLocation(response.data.location);
                setDescription(response.data.description);
                setIcon(response.data.icon);
                setSortOrder(response.data.sortOrder);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar("Error", { variant: "error" });
                console.log(error);
            });
    }, [id, enqueueSnackbar]);
    const handleEditExperience = () => {
        const data = {
            role,
            employer,
            dates,
            location,
            description,
            icon,
            sortOrder: parseInt(sortOrder),
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
                <div className="edit-experience-individual-field-container">
                    <div className="edit-experience-field-label">
                        <label>Role</label>
                    </div>
                    <div className="edit-experience-field">
                        <input
                            className="edit-experience-input"
                            type="text"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div>
                </div>
                <div className="edit-experience-individual-field-container">
                    <div className="edit-experience-field-label">
                        <label>Employer</label>
                    </div>
                    <div className="edit-experience-field">
                        <input
                            className="edit-experience-input"
                            type="text"
                            value={employer}
                            onChange={(e) => setEmployer(e.target.value)}
                        />
                    </div>
                </div>
                <div className="edit-experience-individual-field-container">
                    <div className="edit-experience-field-label">
                        <label>Dates</label>
                    </div>
                    <div className="edit-experience-field">
                        <input
                            className="edit-experience-input"
                            type="text"
                            value={dates}
                            onChange={(e) => setDates(e.target.value)}
                        />
                    </div>
                </div>
                <div className="edit-experience-individual-field-container">
                    <div className="edit-experience-field-label">
                        <label>Location</label>
                    </div>
                    <div className="edit-experience-field">
                        <input
                            className="edit-experience-input"
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                </div>
                <div className="edit-experience-individual-field-container">
                    <div className="edit-experience-field-label">
                        <label>Description</label>
                    </div>
                    <div className="edit-experience-field">
                        <input
                            className="edit-experience-input"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="edit-experience-individual-field-container">
                    <div className="edit-experience-field-label">
                        <label>Icon</label>
                    </div>
                    <div className="edit-experience-field">
                        <input
                            className="edit-experience-input"
                            type="text"
                            value={icon}
                            onChange={(e) => setIcon(e.target.value)}
                        />
                    </div>
                </div>
                <div className="edit-experience-individual-field-container">
                    <div className="edit-experience-field-label">
                        <label>Sort Order</label>
                    </div>
                    <div className="edit-experience-field">
                        <input
                            className="edit-experience-input"
                            type="text"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        />
                    </div>
                </div>
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
