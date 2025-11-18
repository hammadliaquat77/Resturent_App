import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

// Routes
import authRoute from "./routes/user.route.js";
import menuRoute from "./routes/menu.route.js";
import orderRoute from "./routes/order.route.js";
import reservationRoute from "./routes/reservation.route.js";
import inventryRoute from "./routes/inventry.route.js";
import staffRoute from "./routes/staff.route.js";
import cartRoute from "./routes/cart.route.js";



dotenv.config();
const app = express();


// Middle Ware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/menu", menuRoute);
app.use("/api/order", orderRoute);
app.use("/api/reservation", reservationRoute);
app.use("/api/inventry", inventryRoute);
app.use("/api/staff", staffRoute);
app.use("/api/cart", cartRoute);


const Port = process.env.PORT || 5000;
app.listen(Port, () => {
    connectDB();
    console.log(`Server is running on port ${Port}`);
});
