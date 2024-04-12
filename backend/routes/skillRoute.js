import express from "express";

import { Skills } from "../models/skillModel.js";

const router = express.Router();

// get all skills
router.get("/", async (request, response) => {
    try {
        const skillElements = await Skills.find({}).sort({
            sortOrder: 1,
        });
        return response.status(200).json({
            count: skillElements.length,
            data: skillElements,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// get a skill by id
router.get("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const project = await Skills.findById(id);
        return response.status(200).json(project);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// update a skill
router.put("/:id", async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.image ||
            !request.body.sortOrder
        ) {
            return response.status(400).send({
                message:
                    "Send all required fields: Name, Image, and Sort Order",
            });
        }
        const { id } = request.params;
        const result = await Skills.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: "Skill not found" });
        }
        return response
            .status(200)
            .send({ message: "Skill updated successfully" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// delete a skill
router.delete("/:id", async (request, response) => {
    try {
        await Skills.findByIdAndDelete(request.params.id);
        return response
            .status(200)
            .send({ message: "Skill deleted successfully" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
