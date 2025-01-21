import mongoose from "mongoose";

const skillSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    group: {
        type: String,
        required: true,
    },
    sortOrder: {
        type: Number,
        required: true,
    },
});

export const Skills = mongoose.model(
    "Skill Element",
    skillSchema,
    "skill-collection"
);
