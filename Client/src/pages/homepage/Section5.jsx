// import React from "react";

// function Section5() {
//   return (
//     <section className="relative overflow-hidden bg-white py-8 flex justify-center items-center">
//       <div className="whitespace-nowrap flex items-center animate-marquee">
//         {/* 1st Text */}
//         <h1 className="text-[80px] sm:text-[100px] md:text-[150px] font-extrabold text-transparent stroke-gray">
//           Populer Dishes
//         </h1>
//         <span className="text-[70px] sm:text-[80px] md:text-[100px] mx-10">🍔</span>

//         {/* 2nd Text */}
//         <h1 className="text-[80px] sm:text-[100px] md:text-[150px] font-extrabold text-transparent stroke-yellow">
//           Populer Dishes
//         </h1>
//         <span className="text-[70px] sm:text-[80px] md:text-[100px] mx-10">🍕</span>

//         {/* 3rd Text */}
//         <h1 className="text-[80px] sm:text-[100px] md:text-[150px] font-extrabold text-transparent stroke-gray">
//           Trending Foods
//         </h1>
//       </div>
//     </section>
//   );
// }

// export default Section5;







import React from "react";

function Section5() {
  return (
    <section className="relative overflow-hidden bg-white py-8 flex justify-center items-center">
      <div
        className="whitespace-nowrap flex items-center"
        style={{
          animation: "marquee 20s linear infinite",
        }}
      >
        {/* 1st Text */}
        <h1
          className="text-[80px] sm:text-[100px] md:text-[150px] font-extrabold text-transparent"
          style={{
            WebkitTextStroke: "1px #bfbfbf",
            color: "transparent",
          }}
        >
          Populer Dishes
        </h1>

        <span className="text-[70px] sm:text-[80px] md:text-[100px] mx-10">🍔</span>

        {/* 2nd Text */}
        <h1
          className="text-[80px] sm:text-[100px] md:text-[150px] font-extrabold text-transparent"
          style={{
            WebkitTextStroke: "1px #ffc222",
            color: "transparent",
          }}
        >
          Populer Dishes
        </h1>

        <span className="text-[70px] sm:text-[80px] md:text-[100px] mx-10">🍕</span>

        {/* 3rd Text */}
        <h1
          className="text-[80px] sm:text-[100px] md:text-[150px] font-extrabold text-transparent"
          style={{
            WebkitTextStroke: "1px #bfbfbf",
            color: "transparent",
          }}
        >
          Trending Foods
        </h1>
      </div>

      {/* Inline <style> for keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

export default Section5;
