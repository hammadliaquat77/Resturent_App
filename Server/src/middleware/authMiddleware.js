import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
    try {
        
        const authHeader = req.header("Authorization");
        
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const token = authHeader.replace("Bearer ", "").trim();
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};

export default authMiddleware;   







// with cookie

// import jwt from "jsonwebtoken";
// import { User } from "../models/user.model.js";

// export const authMiddleware = async (req, res, next) => {
//   try {
//     // 🍪 Cookie se token nikalo
//     const token = req.cookies?.token;

//     if (!token) {
//       return res.status(401).json({ message: "Not authorized, no token" });
//     }

//     // ✅ Token verify karo
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // ✅ User DB se fetch karo (password exclude karke)
//     const user = await User.findById(decoded.id).select("-password");

//     if (!user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     // ✅ User data request me daal do
//     req.user = user;

//     next(); // Proceed to next route handler
//   } catch (error) {
//     console.error("Auth middleware error:", error);
//     res.status(401).json({ message: "Not authorized, token failed" });
//   }
// };