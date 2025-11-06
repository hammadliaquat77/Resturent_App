import express from "express";

import { addStaff, getAllStaff, getDeleteStaff } from "../controller/staff.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/admim.middleware.js";

const router = express.Router();

router.post("/add", authMiddleware, adminMiddleware, addStaff);
router.get("/all", authMiddleware, adminMiddleware, getAllStaff);
router.delete("/delete/:id", authMiddleware, adminMiddleware, getDeleteStaff);


export default router;
