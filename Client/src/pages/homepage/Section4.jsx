// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import Bg from "../../assets/Section4/Bg.png";

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function Section4() {
//   // Initialize AOS only once when the component mounts
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false,
//       mirror: true,
//     });
//   }, []);

//   const darkMode = useSelector((state) => state.darkMode.darkMode);

//   return (
//     <section
//       className={`relative flex flex-col justify-center items-center overflow-hidden bg-cover bg-center bg-no-repeat py-16 sm:py-20 md:py-24 ${
//         darkMode ? "bg-gray-800" : "bg-[#F5F8FD]"
//       }`}
//       style={{ backgroundImage: `url(${Bg})` }}
//     >
//       <main className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[80%] mx-auto text-center md:text-left">
//         <div data-aos="fade-left" className="flex flex-col justify-center items-center md:items-start">
//           {/* Top Text */}
//           <span className="text-[10px] sm:text-[12px] text-green-500 font-bold tracking-wider uppercase">
//             CRISPY, EVERY BITE TASTE
//           </span>

//           {/* Heading */}
//           <h1 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 leading-snug ${
//             darkMode ? "text-white" : "text-black"
//           }`}>
//             Trending Food Combo <br />
//             Offer Less <span className="text-green-500">20%</span>
//           </h1>

//           {/* Description */}
//           <p className={`text-[11px] sm:text-[13px] md:text-[14px] max-w-[400px] ${
//             darkMode ? "text-gray-300" : "text-gray-600"
//           }`}>
//             A team of dreamers and doers building unique interactive music and art festivals.
//           </p>

//           {/* Colorful Boxes */}
//           <div className="flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-8 w-full items-center md:items-start">
            
//             {/* Box 1 */}
//             <div className={`w-[90%] sm:w-[330px] h-[55px] sm:h-[50px] rounded-md flex items-center justify-start px-4 sm:px-5 relative overflow-hidden ${
//               darkMode ? "bg-gray-700 text-white" : "bg-[#F4F1EA] text-black"
//             }`}>
//               <div className="flex flex-col relative">
//                 <span className="text-[8px] sm:text-[9px]">The</span>
//                 <h2 className="font-bold text-[13px] sm:text-[14px] mt-1">Chicken</h2>
//                 <span className="text-[9px] sm:text-[10px] ml-4">Combo</span>
//               </div>
//               <span className="text-[10px] sm:text-[12px] font-bold ml-14 sm:ml-20">
//                 30% Off 4pcs Hot Crispy & 8 Pcs Wing
//               </span>
//             </div>

//             {/* Box 2 */}
//             <div className="w-[90%] sm:w-[330px] h-[55px] sm:h-[50px] bg-[#FFC222] rounded-md flex items-center justify-start px-4 sm:px-5 relative overflow-hidden text-black">
//               <div className="flex flex-col relative">
//                 <span className="text-[8px] sm:text-[9px]">The</span>
//                 <h2 className="font-bold text-[13px] sm:text-[14px] mt-1">Chicken</h2>
//                 <span className="text-[9px] sm:text-[10px] ml-4">Combo</span>
//               </div>
//               <span className="text-[10px] sm:text-[12px] font-bold ml-14 sm:ml-20">
//                 30% Off 4pcs Hot Crispy & 8 Pcs Wing
//               </span>
//             </div>

//             {/* Box 3 */}
//             <div className={`w-[90%] sm:w-[330px] h-[55px] sm:h-[50px] rounded-md flex items-center justify-start px-4 sm:px-5 relative overflow-hidden ${
//               darkMode ? "bg-gray-700 text-white" : "bg-[#F4F1EA] text-black"
//             }`}>
//               <div className="flex flex-col relative">
//                 <span className="text-[8px] sm:text-[9px]">The</span>
//                 <h2 className="font-bold text-[13px] sm:text-[14px] mt-1">Chicken</h2>
//                 <span className="text-[9px] sm:text-[10px] ml-4">Combo</span>
//               </div>
//               <span className="text-[10px] sm:text-[12px] font-bold ml-14 sm:ml-20">
//                 30% Off 4pcs Hot Crispy & 8 Pcs Wing
//               </span>
//             </div>
//           </div>
//         </div>
//       </main>
//     </section>
//   );
// }

// export default Section4;







// With DarkMode Adding
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Bg from "../../assets/Section4/Bg.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

function Section4() {

useEffect(() => {
AOS.init({
duration: 1000,
once: false,
mirror: true,
});
}, []);

const darkMode = useSelector((state) => state.darkMode.darkMode);

return (
<section
className="relative flex flex-col justify-center items-center overflow-hidden bg-cover bg-center bg-no-repeat py-16 sm:py-20 md:py-24"
style={{ backgroundImage: `url(${Bg})` }}
>


  {/* DARK OVERLAY */}
  <div 
    className={`absolute inset-0 ${darkMode ? "bg-black/70" : "bg-white/20"} transition-all duration-500`}
  ></div>

  <main className="relative z-10 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[80%] mx-auto text-center md:text-left">
    <div data-aos="fade-left" className="flex flex-col justify-center items-center md:items-start">

      {/* Top Text */}
      <span className="text-[10px] sm:text-[12px] text-green-500 font-bold tracking-wider uppercase">
        CRISPY, EVERY BITE TASTE
      </span>

      {/* Heading */}
      <h1 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 leading-snug 
        ${darkMode ? "text-white" : "text-black"}`}>
        Trending Food Combo <br />
        Offer Less <span className="text-green-500">20%</span>
      </h1>

      {/* Description */}
      <p className={`text-[11px] sm:text-[13px] md:text-[14px] max-w-[400px] 
        ${darkMode ? "text-gray-300" : "text-gray-700"}`}
      >
        A team of dreamers and doers building unique interactive music and art festivals.
      </p>

      {/* Boxes */}
      <div className="flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-8 w-full items-center md:items-start">

        {/* Box 1 */}
        <div className={`w-[90%] sm:w-[330px] h-[55px] sm:h-[50px] rounded-md flex items-center px-4 sm:px-5 
          ${darkMode ? "bg-gray-700/80 text-white" : "bg-[#F4F1EA] text-black"}`}>
          <div className="flex flex-col">
            <span className="text-[8px] sm:text-[9px]">The</span>
            <h2 className="font-bold text-[13px] sm:text-[14px] mt-1">Chicken</h2>
            <span className="text-[9px] sm:text-[10px] ml-4">Combo</span>
          </div>
          <span className="text-[10px] sm:text-[12px] font-bold ml-14 sm:ml-20">
            30% Off 4pcs Hot Crispy & 8 Pcs Wing
          </span>
        </div>

        {/* Box 2 (Yellow) */}
        <div className="w-[90%] sm:w-[330px] h-[55px] sm:h-[50px] bg-[#FFC222] rounded-md flex items-center px-4 sm:px-5 text-black">
          <div className="flex flex-col">
            <span className="text-[8px] sm:text-[9px]">The</span>
            <h2 className="font-bold text-[13px] sm:text-[14px] mt-1">Chicken</h2>
            <span className="text-[9px] sm:text-[10px] ml-4">Combo</span>
          </div>
          <span className="text-[10px] sm:text-[12px] font-bold ml-14 sm:ml-20">
            30% Off 4pcs Hot Crispy & 8 Pcs Wing
          </span>
        </div>

        {/* Box 3 */}
        <div className={`w-[90%] sm:w-[330px] h-[55px] sm:h-[50px] rounded-md flex items-center px-4 sm:px-5 
          ${darkMode ? "bg-gray-700/80 text-white" : "bg-[#F4F1EA] text-black"}`}>
          <div className="flex flex-col">
            <span className="text-[8px] sm:text-[9px]">The</span>
            <h2 className="font-bold text-[13px] sm:text-[14px] mt-1">Chicken</h2>
            <span className="text-[9px] sm:text-[10px] ml-4">Combo</span>
          </div>
          <span className="text-[10px] sm:text-[12px] font-bold ml-14 sm:ml-20">
            30% Off 4pcs Hot Crispy & 8 Pcs Wing
          </span>
        </div>

      </div>
    </div>
  </main>
</section>

);
}

export default Section4;
