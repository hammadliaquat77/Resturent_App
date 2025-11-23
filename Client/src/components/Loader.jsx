import React from "react";

function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-br from-red-400 to-yellow-300 z-50">
      {/* Pizza slice animation */}
      <div className="w-24 h-24 relative mb-6 animate-bounce">
        <div className="absolute w-6 h-6 bg-white rounded-full top-0 left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-24 h-24 border-8 border-dashed border-white rounded-full animate-spin"></div>
      </div>

      {/* Loading text */}
      <h1 className="text-white text-2xl md:text-3xl font-bold animate-pulse">
        Preparing Delicious Food...
      </h1>

      {/* Optional small subtitle */}
      <p className="text-white text-sm mt-2">Please wait a moment</p>
    </div>

  );
}


export default Loader;




    