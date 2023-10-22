import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import cors from 'cors';
import experienceRoute from './routes/experienceRoute.js';
import mongoose, { model } from 'mongoose';

const app = express();

app.use(express.json());

/* app.use(cors(
    {
        origin: 'https://victor-verma-portfolio-frontend.vercel.app/*',
        methods: 'GET',
    }
)); */

app.use((req, res, next) => {
    const allowedOrigins = [
        'https://victor-verma-portfolio-frontend.vercel.app', // Your frontend URL
    ];

    const origin = req.get('origin');
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

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
