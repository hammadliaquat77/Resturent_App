import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["customer", "admin", "staff"],
        default: "customer",
    },
}, {timestamps: true});


userSchema.pre("save", async function(next) {
     if (!this.isModified("password")) return next();
     
     const hasedPassword = await bcrypt.hashSync(this.password, 10);
      this.password = hasedPassword;
      next();
});

userSchema.methods.comparePassword = async function(password) {
        if (!password || !this.password)  throw new Error("Password is required");
        
        return await bcrypt.compare(password, this.password);
    }


export const User = mongoose.model("User", userSchema); 