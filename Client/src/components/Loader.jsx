
import React from "react";

function Loader() {
  return (
    <div
      className="fixed inset-0 flex flex-col justify-center items-center bg-gray-900 z-50"
      role="status"
      aria-live="polite"
      aria-label="Loading content, please wait"
    >
      {/* Modern spinner with subtle glow */}
      <div className="relative w-32 h-32 mb-6">
        {/* Outer glowing ring */}
        <div className="absolute inset-0 border-4 border-transparent border-t-blue-400 border-r-blue-400 rounded-full animate-spin shadow-lg shadow-blue-400/50"></div>
        
        {/* Inner icon (pizza slice) with glow */}
        <div className="absolute inset-4 flex justify-center items-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-pulse drop-shadow-lg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Loading text with sleek font */}
      <h1 className="text-white text-2xl md:text-4xl font-light tracking-wider animate-pulse">
        Loading...
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-sm md:text-base mt-3 animate-pulse">
        Your delicious meal is almost ready
      </p>
    </div>
  );
}

export default Loader;
