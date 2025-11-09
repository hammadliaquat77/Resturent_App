// import React, { useState } from "react";
// import { FiMenu, FiX, FiSearch, FiShoppingCart } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);


//   return (
//     <div className="fixed top-0 left-0 right-0 z-50 bg-gray-400">

//       {/* Navbar */}
//       <div className="md:h-[70px] h-[50px] flex justify-between items-center w-[90%] mx-auto flex-wrap">
//         {/* Logo */}
//         <h1 className="font-extrabold text-md sm:text-2xl md:text-2xl flex-1">
//           Hammad Food
//         </h1>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex gap-4 lg:gap-8 font-medium flex-1 justify-center items-center">
//           <Link to="/category" className="cursor-pointer">Shop</Link>
//           <li className="cursor-pointer">On Sale</li>
//           <li className="cursor-pointer">New Arrivals</li>
//           <li className="cursor-pointer">Brands</li>
//         </ul>

//         {/* Search + Icons (Desktop) */}
//         <div className="hidden md:flex items-center gap-3 flex-1 justify-end">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-[#F0F0F0] h-[35px] 
//               max-w-[160px] sm:max-w-[200px] md:max-w-[240px] 
//               lg:max-w-[320px] xl:max-w-[400px] 
//               rounded-full px-4 outline-none"
//           />
//           <FiSearch className="text-2xl cursor-pointer" />
//           <Link to="/cartpage" className="relative">
//             <FiShoppingCart className="text-2xl cursor-pointer" />

//           </Link>
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden flex items-center gap-4">
//           {menuOpen ? (
//             <FiX
//               className="text-3xl cursor-pointer"
//               onClick={() => setMenuOpen(false)}
//             />
//           ) : (
//             <FiMenu
//               className="text-3xl cursor-pointer"
//               onClick={() => setMenuOpen(true)}
//             />
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu with Animation */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col"
//           >
//             {/* Close Btn */}
//             <div className="flex justify-end">
//               <FiX
//                 className="text-3xl cursor-pointer"
//                 onClick={() => setMenuOpen(false)}
//               />
//             </div>

//             {/* Search Bar */}
//             <input
//               type="text"
//               placeholder="Search..."
//               className="bg-[#F0F0F0] h-[35px] w-full rounded-full px-4 outline-none mt-4"
//             />

//             {/* Links */}
//             <ul className="flex flex-col gap-6 font-medium mt-8">
//               <Link to="/category" onClick={() => setMenuOpen(false)}>Shop</Link>
//               <li className="cursor-pointer">On Sale</li>
//               <li className="cursor-pointer">New Arrivals</li>
//               <li className="cursor-pointer">Brands</li>
//             </ul>

//             {/* Icons */}
//             <div className="flex gap-6 mt-8">
//               <FiSearch className="text-2xl cursor-pointer" />
//               <Link to="/cartpage" className="relative">
//                 <FiShoppingCart className="text-2xl cursor-pointer" />

//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Floating Cart for Mobile */}
//       <Link
//         to="/cartpage"
//         className="fixed bottom-5 right-5 z-50 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg md:hidden bg-white border"
//       >
//         <FiShoppingCart className="text-2xl text-black" />


//       </Link>
//     </div>
//   );
// };

// export default Navbar;




















import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ React Router link for SPA navigation
import { FiMenu, FiX } from "react-icons/fi"; // ✅ Icons for mobile toggle

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="ml-2 font-bold text-xl text-gray-900">
              TasteNest
            </span>
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
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-1 py-2 min-w-[8rem] z-50">
                <Link
                  to="/shop/option1"
                  className="block px-4 py-2 text-gray-700 hover:bg-yellow-400 hover:text-white"
                >
                  Option 1
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

            {/* Dropdown Pages */}
            <div className="relative group">
              <button className="inline-flex items-center hover:text-yellow-400 focus:outline-none">
                Pages
                <svg
                  className="ml-1 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-1 py-2 min-w-[8rem] z-50">
                <Link
                  to="/pages/option1"
                  className="block px-4 py-2 text-gray-700 hover:bg-yellow-400 hover:text-white"
                >
                  Option 1
                </Link>
                <Link
                  to="/pages/option2"
                  className="block px-4 py-2 text-gray-700 hover:bg-yellow-400 hover:text-white"
                >
                  Option 2
                </Link>
              </div>
            </div>

            <Link to="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </div>

          {/* Right-side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Cart */}
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
                0
              </span>
            </button>

            {/* Contact Us Button */}
            <Link
              to="/login"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-md shadow-md transition duration-300"
            >
              Login
            </Link>
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
                    <Link to="/shop/option1" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">
                      Option 1
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop/option2" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">
                      Option 2
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

            {/* Pages dropdown */}
            <li>
              <details className="group">
                <summary className="cursor-pointer flex items-center justify-between list-none">
                  Pages
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
                    <Link to="/pages/option1" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">
                      Option 1
                    </Link>
                  </li>
                  <li>
                    <Link to="/pages/option2" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">
                      Option 2
                    </Link>
                  </li>
                </ul>
              </details>
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
