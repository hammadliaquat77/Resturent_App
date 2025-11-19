import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["chef", "waiter", "manager", "delivery"],
        default: "chef",
        required: true
    },
    shift: { 
        type: String, 
        enum: ["morning", "evening", "night"],
        default: "night",
        required: true
    },           

    contact: {
        type: String,
        required: true,
        unique: true,
        min: 11,
        max: 11,
    }

}, {timestamps: true})

export const Staff = mongoose.model("Staff", staffSchema);