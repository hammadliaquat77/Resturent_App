import express from "express";

import { addInventryItem, getAllInventry, getLowStockItem } from "../controller/inventry.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/admim.middleware.js";

const router = express.Router();

router.post("/add", authMiddleware, adminMiddleware, addInventryItem);
router.get("/all", authMiddleware, adminMiddleware, getAllInventry);
router.get("/lowstock", authMiddleware, adminMiddleware, getLowStockItem);



export default router;
