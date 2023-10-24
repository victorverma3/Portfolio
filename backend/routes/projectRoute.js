import express from "express";

import { Projects } from "../models/projectModel.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const projectElements = await Projects.find({}).sort({
      sortOrder: 1,
    });
    return response.status(200).json({
      count: projectElements.length,
      data: projectElements,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
