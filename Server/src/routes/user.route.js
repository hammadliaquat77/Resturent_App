import express from "express";

import  authMiddleware  from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/admim.middleware.js";

import { registerUser, loginUser, logOut, getAllUser } from "../controller/auth.controller.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", authMiddleware, logOut);


router.get("/users", authMiddleware, adminMiddleware, getAllUser);


export default router;