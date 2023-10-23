import mongoose from "mongoose";

const experienceSchema = mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  employer: {
    type: String,
    required: true,
  },
  dates: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  sortOrder: {
    type: Number,
    required: true,
  },
});

export const Experiences = mongoose.model(
  "Experience Element",
  experienceSchema,
  "experience-collection"
);
