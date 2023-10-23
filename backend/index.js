import express from "express";
import cors from "cors";
import "./config.js";
import experienceRoute from "./routes/experienceRoute.js";
import projectRoute from "./routes/projectRoute.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      "https://victor-verma-portfolio.vercel.app",
      "http://localhost:5173",
    ],
  })
);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send(`Backend for Victor's Portfolio`);
});

app.use("/experience-collection", experienceRoute);

app.use("/project-collection", projectRoute);

mongoose
  .connect(process.env.mongoDBURL)
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
