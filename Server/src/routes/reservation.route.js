import express from "express";

import { createReservation, getAllReservation, getMyReservation, getUpdateReservationStatus, getCancelReservationStatus, getDeleteReservation } from "../controller/reservation.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/admim.middleware.js";

const router = express.Router();

// customer Route

router.post("/create", authMiddleware, createReservation);
router.get("/myreservation", authMiddleware, getMyReservation);
router.delete("/cancel/:id", authMiddleware, getCancelReservationStatus);


// Admin Route
router.get("/all", authMiddleware, adminMiddleware, getAllReservation);
router.put("/update/:id", authMiddleware, adminMiddleware, getUpdateReservationStatus);
router.delete("/delete/:id", authMiddleware, adminMiddleware, getDeleteReservation);

export default router;