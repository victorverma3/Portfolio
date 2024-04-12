import express from "express";

import { Projects } from "../models/projectModel.js";

const router = express.Router();

// get all projects
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

// get a project by id
router.get("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const project = await Projects.findById(id);
        return response.status(200).json(project);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// update a project
router.put("/:id", async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.image ||
            !request.body.description ||
            !request.body.technologies ||
            !request.body.linkTitles ||
            !request.body.linkURLs ||
            !request.body.sortOrder
        ) {
            return response.status(400).send({
                message:
                    "Send all required fields: Title, Image, Description, Technologies, Link Titles, Link URLs, and Sort Order",
            });
        }
        const { id } = request.params;
        const result = await Projects.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: "Project not found" });
        }
        return response
            .status(200)
            .send({ message: "Project updated successfully" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// delete a project
router.delete("/:id", async (request, response) => {
    try {
        await Projects.findByIdAndDelete(request.params.id);
        return response
            .status(200)
            .send({ message: "Project deleted successfully" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
