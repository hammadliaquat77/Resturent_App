
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom"; // ✅ React Router link for SPA navigation
// import { FiMenu, FiX } from "react-icons/fi"; // ✅ Icons for mobile toggle

// import axios from "axios"

// const Navbar = () => {

//   const navigate = useNavigate();

//   const token = localStorage.getItem("token")
//   const role = localStorage.getItem("role")

//   const [cartCount, setCartCount] = useState(0);

//   const fetchCartCount = async () => {
//   if (!token) return;

//   try {
//     const res = await axios.get("http://localhost:8000/api/cart/all", {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     const items = res.data?.cart?.items || [];
//     const totalCount = items.reduce((sum, item) => sum + (item.quantity || 0), 0);
//     setCartCount(totalCount);
//   } catch (err) {
//     console.log("Cart Fetch Error:", err.message);
//     setCartCount(0);
//   }
// };


// useEffect(() => {
//   fetchCartCount();
// }, []);


//   const [menuOpen, setMenuOpen] = useState(false);



//   const handlelogout = async ()=> {
//     try {
//        const res = await axios.post("http://localhost:8000/api/auth/logout",
//         {},
//         {headers: {Authorization: `Bearer ${token}` }}
//        )

//       alert(res.data.message)
//       localStorage.removeItem("token");
//       localStorage.removeItem("role");
      
//       navigate("/login")

//     } catch (error) {
//        alert(error.response.data.message || "Logout Failed")      
//     }
//   }

//   return (
//     <nav className="bg-white shadow-md fixed w-full z-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="shrink-0 flex items-center">
//             <span className="ml-2 font-bold text-xl text-gray-900">
//               TasteNest
//             </span>
//           </div>

//           {/* Menu (Desktop) */}
//           <div className="hidden md:flex space-x-8 items-center font-semibold text-gray-700">
//             <Link to="/" className="hover:text-yellow-400">
//               Home
//             </Link>
//             <Link to="/about" className="hover:text-yellow-400">
//               About Us
//             </Link>

//             {/* Dropdown Shop */}
//             <div className="relative group">
//               <button className="inline-flex items-center hover:text-yellow-400 focus:outline-none">
//                 Shop
//                 <svg
//                   className="ml-1 h-4 w-4 fill-current"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
//                 </svg>
//               </button>
//               <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-1 py-2 min-w-32 z-50">
//                 <Link
//                   to="/shop"
//                   className="block px-4 py-2 text-gray-700 hover:bg-yellow-400 hover:text-white"
//                 >
//                   Menu
//                 </Link>
//                 <Link
//                   to="/shop/option2"
//                   className="block px-4 py-2 text-gray-700 hover:bg-yellow-400 hover:text-white"
//                 >
//                   Option 2
//                 </Link>
//               </div>
//             </div>

//             <Link to="/blog" className="hover:text-yellow-400">
//               Blog
//             </Link>


//             <Link to="/contact" className="hover:text-yellow-400">
//               Contact
//             </Link>
//           </div>

//           {/* Right-side buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             {/* Cart */}
            
//             {role === "admin" ? (
//                 <Link
//               to="/"
//               className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-md shadow-md transition duration-300"
//             >
//               Dashboard
//             </Link>  
//             ) : (
//               <Link to={"/cart"}>
//             <button
//               aria-label="Cart"
//               className="relative text-gray-700 hover:text-yellow-400 focus:outline-none"
//               >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.293a1 1 0 00.708 1.707H19m-6 0a1 1 0 100 2 1 1 0 000-2z"
//                   />
//               </svg>
//               <span className="absolute -top-2 -right-2 bg-yellow-400 text-white rounded-full px-1 text-xs font-bold">
//                 {cartCount}
//               </span>
//             </button>
//                 </Link>

//             )
//              }

//             {/* Contact Us Button */} 
//             {token && (
//             <Link
//               onClick={handlelogout}
//               className="bg-red-400 hover:bg-red-500 text-white font-semibold px-4 py-2 rounded-md shadow-md transition duration-300"
//             >
//               LogOut
//             </Link>
//             )}

//             {!token && (
//             <Link
//               to="/login"
//               className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-md shadow-md transition duration-300"
//             >
//               Login
//             </Link>
//             )}
//           </div>

//           {/* Mobile menu toggle */}
//           <div className="md:hidden flex items-center gap-4">
//             {menuOpen ? (
//               <FiX
//                 className="text-3xl cursor-pointer"
//                 onClick={() => setMenuOpen(false)}
//               />
//             ) : (
//               <FiMenu
//                 className="text-3xl cursor-pointer"
//                 onClick={() => setMenuOpen(true)}
//               />
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-lg">
//           <ul className="px-4 pt-4 pb-6 space-y-4 text-gray-700 font-semibold">
//             <li>
//               <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">
//                 About Us
//               </Link>
//             </li>

//             {/* Shop dropdown */}
//             <li>
//               <details className="group">
//                 <summary className="cursor-pointer flex items-center justify-between list-none">
//                   Shop
//                   <svg
//                     className="h-4 w-4 transform group-open:rotate-180 transition-transform"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path d="M5.23 7.21a.75.75 0 011.04.02L10 11.293l3.72-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z" />
//                   </svg>
//                 </summary>
//                 <ul className="pl-4 pt-2 space-y-2">
//                   <li>
//                     <Link to="/shop" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">
//                       Menu
//                     </Link>
//                   </li>
//                 </ul>
//               </details>
//             </li>

//             <li>
//               <Link to="/blog" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">
//                 Blog
//               </Link>
//             </li>

//             <li>
//               <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">
//                 Contact
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/contact"
//                 onClick={() => setMenuOpen(false)}
//                 className="w-full block text-center bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-md"
//               >
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
  









import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ React Router link for SPA navigation
import { FiMenu, FiX } from "react-icons/fi"; // ✅ Icons for mobile toggle

import {useSelector, useDispatch } from 'react-redux';    
import { fetchCart } from "../redux/slices/cart.Slice";

// import  Logo  from "../assets/Navbar/Logo.png";

import axios from "axios";

const Navbar = () => {

  const  dispatch = useDispatch();
  const cartCount = useSelector((state)=> state.cart.count)

  const navigate = useNavigate();

  const token = localStorage.getItem("token")
  const role = localStorage.getItem("role")

useEffect(() => {
  
    dispatch(fetchCart());
  
}, []);


  const [menuOpen, setMenuOpen] = useState(false);



  const handlelogout = async ()=> {
    try {
       const res = await axios.post("http://localhost:8000/api/auth/logout",
        {},
        {headers: {Authorization: `Bearer ${token}` }}
       )

      alert(res.data.message)
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      
      navigate("/login")

    } catch (error) {
       alert(error.response.data.message || "Logout Failed")      
    }
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <span className="ml-2 font-bold text-xl text-gray-900">
              TasteNest
            </span>
            {/* <img src={Logo} alt="Logo" 
            className="h-12 w-32 rounded-2xl" /> */}
          </div>

          {/* Menu (Desktop) */}
          <div className="hidden md:flex space-x-8 items-center font-semibold text-gray-700">
            <Link to="/" className="hover:text-yellow-400">
              Home
            </Link>
            <Link to="/about" className="hover:text-yellow-400">
              About Us
            </Link>

            {/* Dropdown Shop */}
            <div className="relative group">
              <button className="inline-flex items-center hover:text-yellow-400 focus:outline-none">
                Shop
                <svg
                  className="ml-1 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-1 py-2 min-w-32 z-50">
                <Link
                  to="/shop"
                  className="block px-4 py-2 text-gray-700 hover:bg-yellow-400 hover:text-white"
                >
                  Menu
                </Link>
                <Link
                  to="/shop/option2"
                  className="block px-4 py-2 text-gray-700 hover:bg-yellow-400 hover:text-white"
                >
                  Option 2
                </Link>
              </div>
            </div>

            <Link to="/blog" className="hover:text-yellow-400">
              Blog
            </Link>


            <Link to="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </div>

          {/* Right-side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Cart */}
            
            {role === "admin" ? (
                <Link
              to="/dashboard"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-md shadow-md transition duration-300"
            >
              Dashboard
            </Link>  
            ) : (
              <Link to={"/cart"}>
            <button
              aria-label="Cart"
              className="relative text-gray-700 hover:text-yellow-400 focus:outline-none"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.293a1 1 0 00.708 1.707H19m-6 0a1 1 0 100 2 1 1 0 000-2z"
                  />
              </svg>
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-white rounded-full px-1 text-xs font-bold">
                {cartCount}
              </span>
            </button>
                </Link>

            )
             }

            {/* Contact Us Button */} 
            {token && (
            <Link
              onClick={handlelogout}
              className="bg-red-400 hover:bg-red-500 text-white font-semibold px-4 py-2 rounded-md shadow-md transition duration-300"
            >
              LogOut
            </Link>
            )}

            {!token && (
            <Link
              to="/login"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-md shadow-md transition duration-300"
            >
              Login
            </Link>
            )}

          {role === "customer" && (
            <Link
              to="/myorders"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-md shadow-md transition duration-300"
            >
              MyOrders
            </Link>
          )}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center gap-4">
            {menuOpen ? (
              <FiX
                className="text-3xl cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="px-4 pt-4 pb-6 space-y-4 text-gray-700 font-semibold">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">
                About Us
              </Link>
            </li>

            {/* Shop dropdown */}
            <li>
              <details className="group">
                <summary className="cursor-pointer flex items-center justify-between list-none">
                  Shop
                  <svg
                    className="h-4 w-4 transform group-open:rotate-180 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.04.02L10 11.293l3.72-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z" />
                  </svg>
                </summary>
                <ul className="pl-4 pt-2 space-y-2">
                  <li>
                    <Link to="/shop" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">
                      Menu
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <Link to="/blog" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">
                Blog
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-full block text-center bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-md"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
  