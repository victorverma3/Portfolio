import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { Auth } from "../models/authModel.js";

const SECRET = process.env.JWT_SECRET;

const router = express.Router();

// Login
router.post("/login", async (request, response) => {
    try {
        const { password } = request.body;

        if (!password) {
            return response.status(400).send({
                message: "Password is required",
            });
        }

        const user = await Auth.findOne({ username: "Victor" });
        if (!user || !user.password) {
            return res.status(401).send({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return response.status(401).send({ message: "Invalid password" });
        }

        const token = jwt.sign({ user: "Victor" }, SECRET, { expiresIn: "1h" });

        return response
            .status(200)
            .send({ message: "Successfully authorized", token: token });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
