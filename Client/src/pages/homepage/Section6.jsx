// import React from 'react'
// import Banner from "../../assets/Section6/Banner.png"
// import Burger from "../../assets/Section6/burger.png"
// import Icon from "../../assets/Section6/Icon.png"
// import Vector from "../../assets/Section6/Vector.png"
// import BurgerDeal from "../../assets/Section6/BurgerDeal.png"
// import FastfoodDeal from "../../assets/Section6/FastFood.png"


// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function Section6() {

//   AOS.init({
//       duration: 1000,
//       once: false,
//       mirror: true,
//     });


//   return (
//     <section className="relative bg-[#FFFFFF] flex flex-col justify-center items-center overflow-hidden py-10 sm:py-16 md:py-20 lg:py-24">

//       {/* FIRST SECTION (Banner) */}
//       <main data-aos="fade-down" className="w-full flex justify-center px-4 sm:px-8 md:px-16 lg:px-40">
//         <img
//           src={Banner}
//           alt="Banner"
//           className="w-full max-w-[900px] object-contain"
//         />
//       </main>

//       {/* SECOND SECTION */}
//       <main className="w-full flex flex-col md:flex-row items-center justify-center gap-10 mt-12 px-4 sm:px-8 md:px-16 lg:px-40 mb-5">
//         {/* LEFT SIDE */}
//         <div data-aos="fade-right" className="flex justify-center md:justify-start">
//           <img
//             src={Burger}
//             alt="Burger"
//             className="w-[250px] sm:w-[300px] md:w-[650px] object-contain"
//           />
//         </div>

//         {/* RIGHT SIDE */}
//         <div data-aos="fade-left" className="flex flex-col items-start text-center md:text-left">
//           <span className="text-[12px] sm:text-[13px] uppercase font-bold text-green-500">
//             About OUR FOOD
//           </span>

//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
//             Where Quality Meets <br />
//             Excellent <span className="text-green-500">Service.</span>
//           </h1>

//           <p className="text-[12px] sm:text-[13px] text-gray-600 leading-relaxed">
//             It’s the perfect dining experience where every dish is crafted with fresh,
//             high-quality ingredients. Experience quick and efficient service that ensures
//             your food is served fresh and satisfying every time.
//           </p>

//           {/* FEATURES */}
//           <div className="flex flex-col sm:flex-row gap-6 mt-6">
//             {/* FEATURE 1 */}
//             <div className="flex gap-3 items-start">
//               <img src={Vector} alt="Vector" className="w-8 h-8 sm:w-10 sm:h-10" />
//               <div className="flex flex-col text-left">
//                 <span className="text-sm sm:text-base font-bold uppercase tracking-tighter">
//                   Super Quality Food
//                 </span>
//                 <p className="text-[11px] sm:text-[12px] text-gray-600">
//                   A team of dreamers and doers building unique interactive food and art experiences.
//                 </p>
//               </div>
//             </div>

//             {/* FEATURE 2 */}
//             <div className="flex gap-3 items-start">
//               <img src={Icon} alt="Icon" className="w-8 h-8 sm:w-10 sm:h-10" />
//               <div className="flex flex-col text-left">
//                 <span className="text-sm sm:text-base font-bold uppercase tracking-tighter">
//                   Well Reputation
//                 </span>
//                 <p className="text-[11px] sm:text-[12px] text-gray-600">
//                   A team of dreamers and doers building unique interactive food and art experiences.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* BUTTON + CUSTOMER TEXT */}
//           <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mt-6">
//             <button className="px-6 py-3 bg-green-500 rounded-md text-[11px] sm:text-[12px] font-bold text-white hover:bg-green-600 transition-all duration-300">
//               More About Us
//             </button>

//             <div className="flex flex-col text-center sm:text-left">
//               <span className="text-yellow-400 text-[11px] sm:text-[12px] tracking-tighter font-bold">
//                 BRENDON GARREY
//               </span>
//               <span className="text-[11px] sm:text-[12px] tracking-tighter font-semibold text-gray-800">
//                 CUSTOMER’S EXPERIENCE IS OUR HIGHEST PRIORITY.
//               </span>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* THIRD SECTION */}
//       <main  className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 mt-12 px-4 sm:px-8 md:px-16 lg:px-40">
//         <img data-aos="fade-down"
//           src={BurgerDeal}
//           alt="Burger Deal"
//           className="w-full sm:w-[430px] h-auto sm:h-[250px] object-cover rounded-lg"
//         />
//         <img data-aos="fade-up"
//           src={FastfoodDeal}
//           alt="Fast Food Deal"
//           className="w-full sm:w-[350px] h-auto sm:h-[250px] object-cover rounded-lg"
//         />
//       </main>
//     </section>
//   )
// }

// export default Section6






import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Banner from "../../assets/Section6/Banner.png";
import Burger from "../../assets/Section6/burger.png";
import Icon from "../../assets/Section6/Icon.png";
import Vector from "../../assets/Section6/Vector.png";
import BurgerDeal from "../../assets/Section6/BurgerDeal.png";
import FastfoodDeal from "../../assets/Section6/FastFood.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

function Section6() {
  // Initialize AOS only once when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <section className={`relative flex flex-col justify-center items-center overflow-hidden py-10 sm:py-16 md:py-20 lg:py-24 ${
      darkMode ? "bg-gray-800 text-white" : "bg-[#FFFFFF] text-black"
    }`}>

      {/* FIRST SECTION (Banner) */}
      <main data-aos="fade-down" className="w-full flex justify-center px-4 sm:px-8 md:px-16 lg:px-40">
        <img
          src={Banner}
          alt="Banner"
          className="w-full max-w-[900px] object-contain"
        />
      </main>

      {/* SECOND SECTION */}
      <main className="w-full flex flex-col md:flex-row items-center justify-center gap-10 mt-12 px-4 sm:px-8 md:px-16 lg:px-40 mb-5">
        {/* LEFT SIDE */}
        <div data-aos="fade-right" className="flex justify-center md:justify-start">
          <img
            src={Burger}
            alt="Burger"
            className="w-[250px] sm:w-[300px] md:w-[650px] object-contain"
          />
        </div>

        {/* RIGHT SIDE */}
        <div data-aos="fade-left" className="flex flex-col items-start text-center md:text-left">
          <span className="text-[12px] sm:text-[13px] uppercase font-bold text-green-500">
            About OUR FOOD
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Where Quality Meets <br />
            Excellent <span className="text-green-500">Service.</span>
          </h1>

          <p className={`text-[12px] sm:text-[13px] leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            It’s the perfect dining experience where every dish is crafted with fresh,
            high-quality ingredients. Experience quick and efficient service that ensures
            your food is served fresh and satisfying every time.
          </p>

          {/* FEATURES */}
          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            {/* FEATURE 1 */}
            <div className="flex gap-3 items-start">
              <img src={Vector} alt="Vector" className="w-8 h-8 sm:w-10 sm:h-10" />
              <div className="flex flex-col text-left">
                <span className={`text-sm sm:text-base font-bold uppercase tracking-tighter ${
                  darkMode ? "text-white" : "text-black"
                }`}>
                  Super Quality Food
                </span>
                <p className={`text-[11px] sm:text-[12px] ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                  A team of dreamers and doers building unique interactive food and art experiences.
                </p>
              </div>
            </div>

            {/* FEATURE 2 */}
            <div className="flex gap-3 items-start">
              <img src={Icon} alt="Icon" className="w-8 h-8 sm:w-10 sm:h-10" />
              <div className="flex flex-col text-left">
                <span className={`text-sm sm:text-base font-bold uppercase tracking-tighter ${
                  darkMode ? "text-white" : "text-black"
                }`}>
                  Well Reputation
                </span>
                <p className={`text-[11px] sm:text-[12px] ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                  A team of dreamers and doers building unique interactive food and art experiences.
                </p>
              </div>
            </div>
          </div>

          {/* BUTTON + CUSTOMER TEXT */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mt-6">
            <button className="px-6 py-3 bg-green-500 rounded-md text-[11px] sm:text-[12px] font-bold text-white hover:bg-green-600 transition-all duration-300">
              More About Us
            </button>

            <div className="flex flex-col text-center sm:text-left">
              <span className="text-yellow-400 text-[11px] sm:text-[12px] tracking-tighter font-bold">
                BRENDON GARREY
              </span>
              <span className={`text-[11px] sm:text-[12px] tracking-tighter font-semibold ${
                darkMode ? "text-gray-300" : "text-gray-800"
              }`}>
                CUSTOMER’S EXPERIENCE IS OUR HIGHEST PRIORITY.
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* THIRD SECTION */}
      <main className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 mt-12 px-4 sm:px-8 md:px-16 lg:px-40">
        <img data-aos="fade-down"
          src={BurgerDeal}
          alt="Burger Deal"
          className="w-full sm:w-[430px] h-auto sm:h-[250px] object-cover rounded-lg"
        />
        <img data-aos="fade-up"
          src={FastfoodDeal}
          alt="Fast Food Deal"
          className="w-full sm:w-[350px] h-auto sm:h-[250px] object-cover rounded-lg"
        />
      </main>
    </section>
  );
}

export default Section6;
