import mongoose from "mongoose";

const cartSchma = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Menu"
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
})

export const Cart = mongoose.model("Cart", cartSchma);