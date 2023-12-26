import express from "express";

import { Experiences } from "../models/experienceModel.js";

const router = express.Router();

// get all experiences
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

// get an experience by id
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

// update an experience
router.put("/:id", async (request, response) => {
    try {
        if (
            !request.body.role ||
            !request.body.employer ||
            !request.body.dates ||
            !request.body.location ||
            !request.body.description ||
            !request.body.icon ||
            !request.body.sortOrder
        ) {
            return response.status(400).send({
                message:
                    "Send all required fields: Role, Employer, Dates, Location, Description, Icon, and Sort Order",
            });
        }
        const { id } = request.params;
        const result = await Experiences.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response
                .status(404)
                .json({ message: "Experience not found" });
        }
        return response
            .status(200)
            .send({ message: "Experience updated successfully" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
