import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    personCount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected", "cancelled"],
        default: "pending"
    },
    specialRequest: {
        type: String,
    }
}, { timestamps: true });


export const Reservation = mongoose.model("Reservation", reservationSchema);