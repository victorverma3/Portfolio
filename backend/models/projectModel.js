import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    technologies: {
        type: [String],
        required: true,
    },
    links: {
        type: [[String]],
        required: true,
    },
    sortOrder: {
        type: Number,
        required: true,
    },
});

export const Projects = mongoose.model(
    "Project Element",
    projectSchema,
    "project-collection"
);
