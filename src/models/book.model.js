import mongoose from "mongoose";
import { userModel } from "./user.model";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    uploadedBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: userModel,
    },
    thumbnail: {
        type: String,
    },
    url: {
        type: String,
    },
});

export const bookModel = mongoose.model("Book", bookSchema);
