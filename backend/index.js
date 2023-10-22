import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import cors from 'cors';
import experienceRoute from './routes/experienceRoute.js';
import mongoose, { model } from 'mongoose';

const app = express();

app.use(express.json());

app.use(cors(
    {
        origin: "*",
        methods: 'GET',
    }
));

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send(`Backend for Victor's Portfolio`)
});

app.use('/experience-collection', experienceRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error);
    });

export default app;
