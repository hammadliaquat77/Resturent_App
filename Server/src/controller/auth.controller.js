import generateToken from "../utils/generateToken.js";
import { User } from "../models/user.model.js";

const registerUser = async (req, res)=> {
   try {
      const {name, email, password} = req.body;

      const existUser = await User.findOne({email});

      if (existUser) return res.status(400).json({message: "User already exists"});

      const newUser = await User.create({
         name,
         email,
         password,
         role: "customer"
      });
      
      await newUser.save();

      const token = generateToken(newUser, newUser.role);

      res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });


      res.status(201).json({
          newUser,
          token,
          success: true,
          message: "User created successfully"
      });

   } catch (error) {
        res.status(500).json({message: "Error in creating user", error});
   }
}


const loginUser = async (req, res)=> {
   try {
    const {email, password} = req.body;

    const user = await User.findOne({email})
    if (!user) return res.status(400).json({message: "User not found"});

    const isMatch = await user.comparePassword(String(password, user.password));

    const token = generateToken(user, user.role);

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    
    if (isMatch) {
        return res.status(200).json({
            user,
            token,
            success: true,
            message: "User logged in successfully"
        });
    }else{
        return res.status(400).json({message: "Invalid credentials"});
    }
    
   } catch (error) {
        res.status(500).json({message: "Error in login user", error});
   }
}



const logOut = async (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({message: "User logged out successfully"});

    } catch (error) {
        res.status(500).json({message: "Error in logout user", error});
    }
}


const getAllUser = async (req, res) => {
    try {
        const allUser = await User.find();
        res.status(200).json({ success: true, allUser });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export {registerUser, loginUser, logOut, getAllUser};


