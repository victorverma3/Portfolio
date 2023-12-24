import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

import BackButton from "../../components/BackButton/BackButton";
import Spinner from "../../components/Spinner/Spinner";

import "./EditAbout.css";

const backend: string = import.meta.env.VITE_BACKEND_URL;

const EditAbout = () => {
  const [title, setTitle] = useState(" ");
  const [image, setImage] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [link, setLink] = useState(" ");
  const [url, setURL] = useState(" ");
  const [sortOrder, setSortOrder] = useState(" ");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${backend}/about-collection/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setImage(response.data.image);
        setDescription(response.data.description);
        setLink(response.data.link);
        setURL(response.data.url);
        setSortOrder(response.data.sortOrder);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  }, [id, enqueueSnackbar]);

  const handleEditAbout = () => {
    const data = {
      title,
      image,
      description,
      link,
      url,
      sortOrder: parseInt(sortOrder),
    };
    setLoading(true);
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
    <div className="edit-project-content">
      <h1 className="page-title">Edit About</h1>
      {loading ? <Spinner /> : " "}
      <div className="about-project-field-container">
        <div className="about-project-individual-field-container">
          <div className="about-project-field-label">
            <label>Title</label>
          </div>
          <div className="about-project-field">
            <input
              className="about-project-input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="about-project-individual-field-container">
          <div className="about-project-field-label">
            <label>Image</label>
          </div>
          <div className="about-project-field">
            <input
              className="about-project-input"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>
        <div className="about-project-individual-field-container">
          <div className="about-project-field-label">
            <label>Description</label>
          </div>
          <div className="about-project-field">
            <input
              className="about-project-input"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="about-project-individual-field-container">
          <div className="about-project-field-label">
            <label>Link</label>
          </div>
          <div className="about-project-field">
            <input
              className="about-project-input"
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
        </div>
        <div className="about-project-individual-field-container">
          <div className="about-project-field-label">
            <label>URL</label>
          </div>
          <div className="about-project-field">
            <input
              className="about-project-input"
              type="text"
              value={url}
              onChange={(e) => setURL(e.target.value)}
            />
          </div>
        </div>
        <div className="about-project-individual-field-container">
          <div className="about-project-field-label">
            <label>Sort Order</label>
          </div>
          <div className="about-project-field">
            <input
              className="about-project-input"
              type="text"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            />
          </div>
        </div>
        <div className="about-project-actions">
          <BackButton size={48} destination="/about" />
          <button
            className="about-project-save-button"
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
