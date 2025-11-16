import express from "express";

import { addToCart, getCart, updateCart ,deleteCart, clearCart } from "../controller/cart.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";


const router = express.Router();


// Customer Routes
router.get("/all", authMiddleware, getCart); // Completed frontend
router.post("/add", authMiddleware, addToCart); // Complete With Frontend
router.delete("/remove/:id", authMiddleware, deleteCart); // Completed with Frontend
router.put("/update/:id", authMiddleware, updateCart); // last me dekhu ga
router.delete("/clear", authMiddleware, clearCart); // last me dekhu ga


export default router;