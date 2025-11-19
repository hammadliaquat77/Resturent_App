import express from "express";

import { placeOrder, getAllOrders, getMyOrders, getUpdateOrderStatus, getCancelOrderStatus, getDelete } from "../controller/order.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/admim.middleware.js";

const router = express.Router();

// Admin Routes
router.get("/all", authMiddleware, adminMiddleware, getAllOrders); 
router.put("/update/:id", authMiddleware, adminMiddleware, getUpdateOrderStatus);
router.delete("/delete/:id", authMiddleware, adminMiddleware, getDelete);



// Customer Routes
router.post("/place", authMiddleware, placeOrder); 
router.get("/my", authMiddleware, getMyOrders); 
router.delete("/cancel/:id", authMiddleware,  getCancelOrderStatus);


export default router;