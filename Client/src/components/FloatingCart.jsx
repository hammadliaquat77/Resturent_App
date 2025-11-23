// FloatingCart.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FloatingCart = () => {

  const cartCount = useSelector((state) => state.cart.count);

  return (
    <Link
      to="/cart"
      className="fixed bottom-6 right-6 bg-yellow-400 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center hover:bg-yellow-500 transition z-[999]"
    >
      <div className="relative">
        {/* Cart Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 
            2.293a1 1 0 00.708 1.707H19m-6 
            0a1 1 0 100 2 1 1 0 000-2z"
          />
        </svg>

        {/* Cart Count Badge */}
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {cartCount}
        </span>
      </div>
    </Link>
  );
};

export default FloatingCart;
