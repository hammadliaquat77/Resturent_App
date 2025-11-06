import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";

// cloudinary Storage setup

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "Menu",
        allowedFormats: ["jpg", "png", "jpeg"]
    },
})

const upload = multer({ storage });

export default upload;

