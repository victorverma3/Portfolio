import express from "express";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import experienceRoute from "./routes/experienceRoute.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["https://victor-verma-portfolio.vercel.app", "http://localhost"],
  })
);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send(`Backend for Victor's Portfolio`);
});

app.use("/experience-collection", experienceRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

export default app;
