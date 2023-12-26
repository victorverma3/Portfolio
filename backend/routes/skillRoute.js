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

export default router;
