// import React, {useState} from "react";
// import { Link } from "react-router-dom";

// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// import { toast } from "react-toastify";

// function Signup() {

//   const navigate = useNavigate();

//   const [deta, setData]= useState({
//     name: "",
//     email: "",
//     password: "",
//   })

//   const handleChange = (e)=> {
//     setData({...deta, [e.target.name]: e.target.value})
//   }


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8000/api/auth/register", deta);
//       console.log("Data==>", response.data);
//       // alert("Signup Successfully");
//       toast.success("Signup successful!");

//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("role", response.data.newUser.role);
//       navigate("/");
//     } catch (error) {
//       // alert(error.response.data.message);
//       toast.error(error.response.data.message);
//     }
//   }

//   return (
//     <section className="flex justify-center items-center min-h-screen from-yellow-200 via-yellow-100 to-yellow-50">
//       <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl px-10 py-12 w-[90%] sm:w-[400px] text-center">
//         {/* Title */}
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back 👋</h1>
//         <p className="text-gray-500 mb-8 text-sm">Create to your account</p>

//         {/* Signup Form */}
//         <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//           {/* Name Input */}
//           <div className="flex flex-col text-left">
//             <label className="text-gray-700 font-semibold mb-2">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               onChange={handleChange}
//               placeholder="Enter your FullName"
//               className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               required
//             />
//           </div>


//           {/* Email Input */}
//           <div className="flex flex-col text-left">
//             <label className="text-gray-700 font-semibold mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div className="flex flex-col text-left">
//             <label className="text-gray-700 font-semibold mb-2">Password</label>
//             <input
//               type="password"
//               name="password"
//               onChange={handleChange}
//               placeholder="Enter your password"
//               className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               required
//             />
//           </div>

//           {/* Remember Me + Forgot Password */}
//           <div className="flex justify-between items-center text-sm">
//             <label className="flex items-center gap-2 text-gray-600">
//               <input type="checkbox" className="accent-yellow-400" />
//               Remember Me
//             </label>
//             <a href="#" className="text-yellow-500 hover:underline">
//               Forgot Password?
//             </a>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200"
//           >
//             Login
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="flex items-center gap-3 mt-8 mb-5">
//           <hr className="w-full border-gray-300" />
//           <span className="text-gray-400 text-sm">OR</span>
//           <hr className="w-full border-gray-300" />
//         </div>

        
//         {/* Signup link */}
//         <p className="text-gray-500 text-sm mt-6">
//           Don’t have an account?{" "}
//           <Link to="/login" className="text-yellow-500 font-semibold hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Signup;










// DarkMode Adding With Redux

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { FiUser, FiMail, FiLock, FiUserPlus } from "react-icons/fi";

function Signup() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const navigate = useNavigate();

  const [deta, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...deta, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://resturent-api-cg1s.onrender.com/api/auth/register", deta);
      console.log("Data==>", response.data);
      toast.success("Signup successful!");

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.newUser.role);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className={`flex justify-center items-center min-h-screen transition-colors duration-300 ${
      darkMode
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700'
        : 'bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-50'
    }`}>
      <div className={`backdrop-blur-md shadow-2xl rounded-3xl px-10 py-12 w-[90%] sm:w-[400px] text-center transition-all duration-300 ${
        darkMode ? 'bg-gray-800/90 text-white' : 'bg-white/90 text-gray-900'
      }`}>
        {/* Title */}
        <h1 className={`text-3xl font-bold mb-6 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          Join Us! 🍽️
        </h1>
        <p className={`mb-8 text-sm ${
          darkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          Create your account
        </p>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name Input */}
          <div className="flex flex-col text-left">
            <label className={`font-semibold mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Full Name
            </label>
            <div className="relative">
              <FiUser className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-300 ${
                  darkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'border-gray-300 bg-white text-gray-900'
                }`}
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="flex flex-col text-left">
            <label className={`font-semibold mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Email
            </label>
            <div className="relative">
              <FiMail className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-300 ${
                  darkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'border-gray-300 bg-white text-gray-900'
                }`}
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="flex flex-col text-left">
            <label className={`font-semibold mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Password
            </label>
            <div className="relative">
              <FiLock className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-300 ${
                  darkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'border-gray-300 bg-white text-gray-900'
                }`}
                required
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex justify-center items-center text-sm">
            <label className={`flex items-center gap-2 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <input type="checkbox" className="accent-yellow-400" required />
              I agree to the{" "}
              <a href="#" className={`hover:underline ${
                darkMode ? 'text-yellow-400' : 'text-yellow-500'
              }`}>
                Terms & Conditions
              </a>
            </label>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <FiUserPlus />
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 mt-8 mb-5">
          <hr className={`w-full ${
            darkMode ? 'border-gray-600' : 'border-gray-300'
          }`} />
          <span className={`text-sm ${
            darkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
            OR
          </span>
          <hr className={`w-full ${
            darkMode ? 'border-gray-600' : 'border-gray-300'
          }`} />
        </div>

        {/* Login link */}
        <p className={`text-sm mt-6 ${
          darkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          Already have an account?{" "}
          <Link to="/login" className={`font-semibold hover:underline ${
            darkMode ? 'text-yellow-400' : 'text-yellow-500'
          }`}>
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;
