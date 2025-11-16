import express from "express";

import  authMiddleware  from "../middleware/authMiddleware.js";
import { registerUser, loginUser, logOut } from "../controller/auth.controller.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", authMiddleware, logOut);

export default router;