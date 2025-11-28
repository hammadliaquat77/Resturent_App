// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
// import { LuLogOut } from "react-icons/lu";
// import { MdDashboardCustomize, MdTableBar  } from "react-icons/md";
// // import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
// import { Sun, MoonStar  } from 'lucide-react';

// import { useSelector, useDispatch } from "react-redux";
// import { fetchCart } from "../redux/slices/cart.Slice";
// import { toggleDarkMode } from "../redux/slices/darkMode.Slice"; // ✅ import slice
// import axios from "axios";

// import { toast } from "react-toastify";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const cartCount = useSelector((state) => state.cart.count);
//   const darkMode = useSelector((state) => state.darkMode.darkMode); // ✅ get dark mode state

//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");

//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     if (role === "customer") dispatch(fetchCart());
//   }, [role, dispatch]);

//   const handleLogout = async () => {
//     try {
//       const res = await axios.post(
//         "http://localhost:8000/api/auth/logout",
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       // alert(res.data.message);
//       toast.success(res.data.message);
//       localStorage.removeItem("token");
//       localStorage.removeItem("role");

//       navigate("/login");
//     } catch (error) {
//       // alert(error.response?.data?.message || "Logout failed");
//       toast.error(error.response?.data?.message || "Logout failed");
//     }
//   };

//   return (
//   <nav className="bg-white shadow-md fixed w-full z-50 transition-colors duration-300">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="font-bold text-xl text-gray-900">TasteNest</div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8 items-center font-semibold text-gray-700">
//             <Link to="/" className="hover:text-yellow-400">Home</Link>
//             <Link to="/about" className="hover:text-yellow-400">About Us</Link>

//             <div className="relative group">
//               <button className="inline-flex items-center hover:text-yellow-400">
//                 Shop
//                 <svg className="ml-1 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                   <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
//                 </svg>
//               </button>

//               <div className="absolute hidden group-hover:block bg-white  shadow-lg rounded-md mt-1 py-2 min-w-32">
//                 <Link to="/shop" className="block px-4 py-2 hover:bg-yellow-400 hover:text-white">Menu</Link>
//                 <Link to="/reservation" className="block px-4 py-2 hover:bg-yellow-400 hover:text-white">Table</Link>
//               </div>
//             </div>

//             <Link to="/blog" className="hover:text-yellow-400">Blog</Link>
//             <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
//             {/* <Link to="/reservation" className="hover:text-yellow-400">Tabel Booking</Link> */}
//           </div>

//           {/* Right Side Desktop Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             {/* Dark Mode Toggle */}
//             <button
//               onClick={() => dispatch(toggleDarkMode())}
//               className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
//             >
//               {darkMode ? <Sun className="w-5 h-5 text-gray-800" /> : <MoonStar className="w-5 h-5 text-gray-800" />}
//             </button>

//             {/* Admin Dashboard */}
//             {role === "admin" && (
//               <Link
//                 to="/dashboard"
//                 className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md"
//               >
//                 <MdDashboardCustomize size={20} />
//               </Link>
//             )}

//             {/* Cart (Customer) */}
//             {role === "customer" && (
//               <Link to="/cart">
//                 <button className="relative text-gray-700 cursor-pointer flex justify-center items-center dark:text-gray-200 hover:text-yellow-400 transition">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
//                     viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                       d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 
//                       2.293a1 1 0 00.708 1.707H19m-6 
//                       0a1 1 0 100 2 1 1 0 000-2z"
//                     />
//                   </svg>
//                   <span className="absolute -top-2 -right-2 bg-yellow-400 text-white rounded-full px-1 text-xs font-bold">
//                     {cartCount}
//                   </span>
//                 </button>
//               </Link>
//             )}

            
//             {/* My Reservation */}
//                         {role === "customer" && (
//                           <Link
//                             to="/myreservation"
//                             className="bg-yellow-400 cursor-pointer hover:bg-yellow-500  px-4 py-2 rounded-md"
//                           >
//                             <MdTableBar size={20}/>
//                           </Link>
//                         )}

//             {/* My Orders */}
//             {role === "customer" && (
//               <Link
//                 to="/myorders"
//                 className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-white px-4 py-2 rounded-md"
//               >
//                 MyOrders
//               </Link>
//             )}


//             {/* Logout */}
//             {token && (
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-400 cursor-pointer hover:bg-red-500 text-white px-4 py-2 rounded-md"
//               >
//                 <LuLogOut size={20} />
//               </button>
//             )}

//             {/* Login */}
//             {!token && (
//               <Link to="/login" className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md">
//                 Login
//               </Link>
//             )}
//           </div>



//           {/* Mobile Hamburger */}
//           <div className="md:hidden flex">
//             {menuOpen ? (
//               <FiX className="text-3xl cursor-pointer" onClick={() => setMenuOpen(false)} />
//             ) : (
//               <FiMenu className="text-3xl cursor-pointer" onClick={() => setMenuOpen(true)} />
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-lg transition-colors duration-300">
//           <ul className="px-4 pt-4 pb-6 space-y-4 text-gray-700 font-semibold">

//             <Link to="/" onClick={() => setMenuOpen(false)} className="block">Home</Link>
//             <Link to="/about" onClick={() => setMenuOpen(false)} className="block">About Us</Link>

//             <details className="group">
//               <summary className="cursor-pointer flex items-center justify-between">
//                 Shop
//                 <svg className="h-4 w-4 transform group-open:rotate-180"
//                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                   <path d="M5.23 7.21a.75.75 0 011.04.02L10 11.293l3.72-4.06a.75.75 0 111.08 1.04l-4.25 
//                   4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z" />
//                 </svg>
//               </summary>

//               <ul className="pl-4 pt-2 space-y-2">
//                 <Link to="/shop" onClick={() => setMenuOpen(false)} className="block">
//                   Menu
//                 </Link>
//                 <Link to="/reservation" onClick={() => setMenuOpen(false)} className="block">
//                   Tabel
//                 </Link>
                
//               </ul>
//             </details>

//             <Link to="/blog" onClick={() => setMenuOpen(false)} className="block">Blog</Link>
//             <Link to="/contact" onClick={() => setMenuOpen(false)} className="block">Contact</Link>

//             {/* Dark Mode Toggle Mobile */}
//             <button
//               onClick={() => dispatch(toggleDarkMode())}
//               className="w-full p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
//             >
//               {darkMode ? "Light Mode" : "Dark Mode"}
//             </button>

//             {/* Mobile Admin Dashboard */}
//             {role === "admin" && (
//               <Link
//                 to="/dashboard"
//                 onClick={() => setMenuOpen(false)}
//                 className="block bg-yellow-400 text-white text-center py-2 rounded-md"
//               >
//                 Dashboard
//               </Link>
//             )}

//             {/* Mobile My Reservation */}
//             {role === "customer" && (
//               <Link
//                 to="/myreservation"
//                 onClick={() => setMenuOpen(false)}
//                 className="flex justify-center bg-blue-400 text-white py-2 px-3 rounded-md"
//               >
//                 <span>My Table</span>
                
//               </Link>
//             )}

//             {/* Mobile My Orders */}
//             {role === "customer" && (
//               <Link
//                 to="/myorders"
//                 onClick={() => setMenuOpen(false)}
//                 className="block bg-yellow-400 text-white text-center py-2 rounded-md "
//               >
//                 My Orders
//               </Link>
//             )}

//             {/* Mobile Logout */}
//             {token && (
//               <button
//                 onClick={() => { handleLogout(); setMenuOpen(false); }}
//                 className="w-full bg-red-400 text-white py-2 rounded-md"
//               >
//                 Logout
//               </button>
//             )}

//             {/* Mobile Login */}
//             {!token && (
//               <Link
//                 to="/login"
//                 onClick={() => setMenuOpen(false)}
//                 className="block bg-yellow-400 text-white text-center py-2 rounded-md"
//               >
//                 Login
//               </Link>
//             )}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
























import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart, FiLogOut } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { MdDashboardCustomize, MdTableBar } from "react-icons/md";
import { Sun, MoonStar } from 'lucide-react';
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../redux/slices/cart.Slice";
import { toggleDarkMode } from "../redux/slices/darkMode.Slice";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.count);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (role === "customer") dispatch(fetchCart());
  }, [role, dispatch]);

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/logout",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success(res.data.message);
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 shadow-lg ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl text-yellow-500 hover:text-yellow-600 transition">
            TasteNest
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center font-semibold">
            <Link to="/" className="hover:text-yellow-500 transition">Home</Link>
            <Link to="/about" className="hover:text-yellow-500 transition">About Us</Link>

            <div className="relative group">
              <button className="inline-flex items-center hover:text-yellow-500 transition">
                Shop
                <svg className="ml-1 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
              <div className={`absolute hidden group-hover:block ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg rounded-md mt-1 py-2 min-w-32 border ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <Link to="/shop" className="block px-4 py-2 hover:bg-yellow-500 hover:text-white transition">Menu</Link>
                <Link to="/reservation" className="block px-4 py-2 hover:bg-yellow-500 hover:text-white transition">Table</Link>
              </div>
            </div>

            <Link to="/blog" className="hover:text-yellow-500 transition">Blog</Link>
            <Link to="/contact" className="hover:text-yellow-500 transition">Contact</Link>
          </div>

          {/* Right Side Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className={`p-2 rounded-full cursor-pointer ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
              } transition`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <MoonStar className="w-5 h-5" />}
            </button>

            {/* Admin Dashboard */}
            {role === "admin" && (
              <Link
                to="/dashboard"
                className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-full shadow-md transition transform hover:scale-110"
                title="Dashboard"
              >
                <MdDashboardCustomize size={20} />
              </Link>
            )}

            {/* Cart (Customer) */}
            {role === "customer" && (
              <Link to="/cart" className="relative">
                <button className={`relative p-2 rounded-full cursor-pointer ${
                  darkMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-500'
                } transition transform hover:scale-110`}>
                  <FiShoppingCart className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs font-bold">
                    {cartCount}
                  </span>
                </button>
              </Link>
            )}

            {/* My Reservation */}
            {role === "customer" && (
              <Link
                to="/myreservation"
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-md transition transform hover:scale-110"
                title="My Table"
              >
                <MdTableBar size={20} />
              </Link>
            )}

            {/* My Orders */}
            {role === "customer" && (
              <Link
                to="/myorders"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-full shadow-md transition transform hover:scale-110"
              >
                My Orders
              </Link>
            )}

            {/* Logout */}
            {token && (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 cursor-pointer text-white p-2 rounded-full shadow-md transition transform hover:scale-110"
                title="Logout"
              >
                <FiLogOut size={20} />
              </button>
            )}

            {/* Login */}
            {!token && (
              <Link to="/login" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full shadow-md transition transform hover:scale-110">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-full ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
              } transition`}
            >
              {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
        <ul className="px-4 pt-4 pb-6 space-y-4 font-semibold">
          <li><Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-500 transition">Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-500 transition">About Us</Link></li>

          <li>
            <details className="group">
              <summary className="cursor-pointer flex items-center justify-between hover:text-yellow-500 transition">
                Shop
                <svg className="h-4 w-4 transform group-open:rotate-180 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.23 7.21a.75.75 0 011.04.02L10 11.293l3.72-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z" />
                </svg>
              </summary>
              <ul className="pl-4 pt-2 space-y-2">
                <li><Link to="/shop" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-500 transition">Menu</Link></li>
                <li><Link to="/reservation" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-500 transition">Table</Link></li>
              </ul>
            </details>
          </li>

          <li><Link to="/blog" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-500 transition">Blog</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-500 transition">Contact</Link></li>

          {/* Dark Mode Toggle Mobile */}
          <li>
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className={`w-full p-3 rounded-lg ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
              } transition`}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>

          {/* Mobile Admin Dashboard */}
          {role === "admin" && (
            <li>
              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="block bg-yellow-500 text-white text-center py-3 rounded-lg hover:bg-yellow-600 transition"
              >
                Dashboard
              </Link>
            </li>
          )}

          {/* Mobile My Reservation */}
          {role === "customer" && (
            <li>
              <Link
                to="/myreservation"
                onClick={() => setMenuOpen(false)}
                className="block bg-blue-500 text-white text-center py-3 rounded-lg hover:bg-blue-600 transition"
              >
                My Table
              </Link>
            </li>
          )}

          {/* Mobile My Orders */}
          {role === "customer" && (
            <li>
              <Link
                to="/myorders"
                onClick={() => setMenuOpen(false)}
                className="block bg-yellow-500 text-white text-center py-3 rounded-lg hover:bg-yellow-600 transition"
              >
                My Orders
              </Link>
            </li>
          )}

          {/* Mobile Logout */}
          {token && (
            <li>
              <button
                onClick={() => { handleLogout(); setMenuOpen(false); }}
                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </li>
          )}

          {/* Mobile Login */}
          {!token && (
            <li>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block bg-yellow-500 text-white text-center py-3 rounded-lg hover:bg-yellow-600 transition"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
