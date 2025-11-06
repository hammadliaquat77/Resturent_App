import jwt from "jsonwebtoken";

const generateToken = (user, role) => {
    try {
         const token = jwt.sign({id: user._id, email: user.emailL, role }, process.env.JWT_SECRET, {
             expiresIn: "7d"
         });

         return token
    } 
    catch (error) {
        console.log(error.message);
    }
}

export default generateToken;