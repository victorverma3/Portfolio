import express from "express";

import { Experiences } from "../models/experienceModel.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const experienceElements = await Experiences.find({}).sort({
      sortOrder: 1,
    });
    return response.status(200).json({
      count: experienceElements.length,
      data: experienceElements,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const experience = await Experiences.findById(id);
    return response.status(200).json(experience);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
