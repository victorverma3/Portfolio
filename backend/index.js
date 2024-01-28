import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import "./config.js";

import aboutRoute from "./routes/aboutRoute.js";
import experienceRoute from "./routes/experienceRoute.js";
import projectRoute from "./routes/projectRoute.js";
import skillRoute from "./routes/skillRoute.js";

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: [
            "https://www.victorverma.com",
            "https://victor-verma-portfolio.vercel.app",
            "http://localhost:5173",
            "http://192.168.0.12:5173",
            "http://192.168.0.21:5173",
        ],
    })
);

app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send(`Backend for Victor's Portfolio`);
});

app.use("/about-collection", aboutRoute);
app.use("/experience-collection", experienceRoute);
app.use("/project-collection", projectRoute);
app.use("/skill-collection", skillRoute);

mongoose
    .connect(process.env.mongoDBURI)
    .then(() => {
        console.log("App connected to database");
        app.listen(process.env.PORT, () => {
            console.log(`App is listening to port: ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

export default app;
