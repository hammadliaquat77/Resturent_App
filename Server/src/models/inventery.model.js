import mongoose from "mongoose";

const inventrySchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        enum: ["pcs","kg","littre"],
        default: "pcs"
    },
    threshold: { type: Number, required: true }, // low stock alert limit

}, {timestamps: true})

export const Inventry = mongoose.model("Inventry", inventrySchema);