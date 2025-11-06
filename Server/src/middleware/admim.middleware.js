import {User} from "../models/user.model.js";

const adminMiddleware = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        if (user.role !== "admin") {
            return res.status(401).json({ message: "Access denied, admin only" });
        }
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};


export default adminMiddleware;