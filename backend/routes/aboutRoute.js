import express from "express";

import { About } from "../models/aboutModel.js";
import { validateApiKey } from "../index.js";

const router = express.Router();

// get all about
router.get("/", async (request, response) => {
    try {
        const aboutElements = await About.find({}).sort({
            sortOrder: 1,
        });
        return response.status(200).json({
            count: aboutElements.length,
            data: aboutElements,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// get an about by id
router.get("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const about = await About.findById(id);
        return response.status(200).json(about);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// update an about
router.put("/:id", validateApiKey, async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.image ||
            !request.body.description ||
            !request.body.link ||
            !request.body.url ||
            !request.body.sortOrder
        ) {
            return response.status(400).send({
                message:
                    "Send all required fields: Title, Image, Description, Link, URL, and Sort Order",
            });
        }
        const { id } = request.params;
        const result = await About.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: "About not found" });
        }
        return response
            .status(200)
            .send({ message: "About updated successfully" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
