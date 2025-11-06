import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderItems: [
        {
            menuitems: { type: mongoose.Schema.Types.ObjectId, ref: "Menu", required: true },
            quantity: { type: Number, required: true }
        },
    ],
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "preparing", "served", "cancelled"],
        default: "pending"
    },
    paymentType: {
        type: String,
        enum: ["COD", "Online"],
        default: "COD",
        required: true
    },
    address: {
        type: String,
        required: true
    },
    tableNumber: {
        type: Number,
    }

}, { timestamps: true });


export const Order = mongoose.model("Order", orderSchema);