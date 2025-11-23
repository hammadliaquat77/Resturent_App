import React, {useState} from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

function Signup() {

  const navigate = useNavigate();

  const [deta, setData]= useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e)=> {
    setData({...deta, [e.target.name]: e.target.value})
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/auth/register", deta);
      console.log("Data==>", response.data);
      // alert("Signup Successfully");
      toast.success("Signup successful!");

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.newUser.role);
      navigate("/");
    } catch (error) {
      // alert(error.response.data.message);
      toast.error(error.response.data.message);
    }
  }

  return (
    <section className="flex justify-center items-center min-h-screen from-yellow-200 via-yellow-100 to-yellow-50">
      <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl px-10 py-12 w-[90%] sm:w-[400px] text-center">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back 👋</h1>
        <p className="text-gray-500 mb-8 text-sm">Create to your account</p>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name Input */}
          <div className="flex flex-col text-left">
            <label className="text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Enter your FullName"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>


          {/* Email Input */}
          <div className="flex flex-col text-left">
            <label className="text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col text-left">
            <label className="text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-yellow-400" />
              Remember Me
            </label>
            <a href="#" className="text-yellow-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 mt-8 mb-5">
          <hr className="w-full border-gray-300" />
          <span className="text-gray-400 text-sm">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        
        {/* Signup link */}
        <p className="text-gray-500 text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/login" className="text-yellow-500 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;
