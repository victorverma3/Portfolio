import express from "express";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import experienceRoute from "./routes/experienceRoute.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "https://victor-verma-portfolio.vercel.app",
  })
);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send(`Backend for Victor's Portfolio`);
});

app.use("/experience-collection", experienceRoute);

const cspHeader =
  "default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;";

app.use((request, response, next) => {
  response.setHeader("Content-Security-Policy", cspHeader);
  next();
});

app.use("/images", express.static("../frontend/public/images"));

app.get("/get-image/:imagePath", (request, response) => {
  const imagePath = request.params.imagePath;
  const serverBaseUrl = "https://victor-verma-portfolio-backend.vercel.app";
  const imageUrl = `${serverBaseUrl}/images/${imagePath}`;
  response.sendFile(imageUrl);
});

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
