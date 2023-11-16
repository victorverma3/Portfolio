import mongoose from "mongoose";

const aboutSchema = mongoose.Schema({
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
  link: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  sortOrder: {
    type: Number,
    required: true,
  },
});

export const About = mongoose.model(
  "About Element",
  aboutSchema,
  "about-collection"
);
