import express from "express";

import { createReservation, getAllReservation, getMyReservation, getUpdateReservationStatus, getCancelReservationStatus } from "../controller/reservation.controller.js";
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

export default router;