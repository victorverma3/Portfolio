import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

import BackButton from "../../components/BackButton/BackButton";
import Spinner from "../../components/Spinner/Spinner";

import "./EditProject.css";

const backend: string = import.meta.env.VITE_BACKEND_URL;

const EditProject = () => {
  const [title, setTitle] = useState(" ");
  const [image, setImage] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [technologies, setTechnologies] = useState(" ");
  const [links, setLinks] = useState([{ title: " ", url: " " }]);
  const [sortOrder, setSortOrder] = useState(" ");
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
  return (
    <div className="edit-project-content">
      <h1 className="page-title">Edit Project</h1>
      {loading ? <Spinner /> : " "}
      <div className="edit-project-field-container">
        <div className="edit-project-individual-field-container">
          <div className="edit-project-field-label">
            <label>Title</label>
          </div>
          <div className="edit-project-field">
            <input
              className="edit-project-input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="edit-project-individual-field-container">
          <div className="edit-project-field-label">
            <label>Image</label>
          </div>
          <div className="edit-project-field">
            <input
              className="edit-project-input"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>
        <div className="edit-project-individual-field-container">
          <div className="edit-project-field-label">
            <label>Description</label>
          </div>
          <div className="edit-project-field">
            <input
              className="edit-project-input"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="edit-project-individual-field-container">
          <div className="edit-project-field-label">
            <label>Sort Order</label>
          </div>
          <div className="edit-project-field">
            <input
              className="edit-project-input"
              type="text"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            />
          </div>
        </div>
        <div className="edit-project-actions">
          <BackButton size={48} destination="/projects" />
          <button
            className="edit-project-save-button"
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
