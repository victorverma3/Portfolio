import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export const Auth = mongoose.model(
    "Auth Element",
    authSchema,
    "auth-collection"
);
