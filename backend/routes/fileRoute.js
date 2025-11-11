import express from "express";
import multer from "multer";
import { verifyToken } from "../auth.js";
import supabaseClient from "../supabaseClient.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Get resume URL
router.get("/get-resume-url", async (request, response) => {
    try {
        const fileName = "VictorVermaResume.pdf";

        const { data, error } = await supabaseClient.storage
            .from("files")
            .createSignedUrl(fileName, 60 * 60);

        if (error) {
            console.error(error);
            return response
                .status(500)
                .send({ message: "Failed to retrieve resume URL" });
        }

        return response
            .status(200)
            .send({ url: data.signedUrl, message: "Retrieved resume URL" });
    } catch (error) {
        console.error(error.message);
        return response.status(500).send({ message: error.message });
    }
});

// Get CV URL
router.get("/get-cv-url", async (request, response) => {
    try {
        const fileName = "VictorVermaCV.pdf";

        const { data, error } = await supabaseClient.storage
            .from("files")
            .createSignedUrl(fileName, 60 * 60);

        if (error) {
            console.error(error);
            return response
                .status(500)
                .send({ message: "Failed to retrieve CV URL" });
        }

        return response
            .status(200)
            .send({ url: data.signedUrl, message: "Retrieved CV URL" });
    } catch (error) {
        console.error(error.message);
        return response.status(500).send({ message: error.message });
    }
});

// upload resume or CV
router.post(
    "/upload-resume-cv",
    verifyToken,
    upload.single("file"),
    async (request, response) => {
        try {
            if (!request.file) {
                return response
                    .status(400)
                    .send({ message: "No file uploaded" });
            }

            const file = request.file;

            if (
                !file.originalname.includes("Resume") &&
                !file.originalname.includes("CV")
            ) {
                return response.status(400).send({
                    message:
                        '"Resume" or "CV" must be included in the file name',
                });
            }

            const { error } = await supabaseClient.storage
                .from("files")
                .upload(file.originalname, file.buffer, {
                    upsert: true,
                    contentType: "application/pdf",
                });

            if (error) {
                console.error("Supabase upload failed:", error.message);
                return response
                    .status(500)
                    .send({ message: "Failed to upload to Supabase" });
            }

            return response
                .status(200)
                .send({ message: "File uploaded successfully" });
        } catch (error) {
            console.error(error.message);
            return response.status(500).send({ message: error.message });
        }
    }
);

export default router;
