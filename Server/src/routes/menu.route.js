// import express from "express";

// import adminMiddleware from "../middleware/admim.middleware.js";
// import authMiddleware from "../middleware/authMiddleware.js";
// import { addMenuItems, getAllMenu, singleFoodItem, updatedMenu, deleteItems } from "../controller/menu.controller.js";

// const router = express.Router();

// router.post("/add", authMiddleware, adminMiddleware, addMenuItems);
// router.get("/all", getAllMenu);
// router.get("/single/:id", authMiddleware,  singleFoodItem);
// router.put("/update/:id", authMiddleware, adminMiddleware, updatedMenu);
// router.delete("/delete/:id", authMiddleware, adminMiddleware, deleteItems);

// export default router;





// with multer
import express from "express";
import upload from "../middleware/uploadMiddleware.js";

import adminMiddleware from "../middleware/admim.middleware.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { addMenuItems, getAllMenu, singleFoodItem, updatedMenu, deleteItems, getMenuByCategory } from "../controller/menu.controller.js";


const router = express.Router();

router.post("/add", authMiddleware, adminMiddleware, upload.single("image"), addMenuItems);
router.get("/all", getAllMenu);
router.get("/single/:id", authMiddleware,  singleFoodItem);
router.put("/update/:id", authMiddleware, adminMiddleware, upload.single("image"), updatedMenu);
router.delete("/delete/:id", authMiddleware, adminMiddleware, deleteItems);

router.get("/category/:category", authMiddleware,  getMenuByCategory);



export default router;

