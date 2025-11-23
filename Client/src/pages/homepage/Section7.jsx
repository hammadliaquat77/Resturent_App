import React from "react";
import DealBg from "../../assets/Section7/DealBg.png";
import Bg from "../../assets/Section7/Bg.png";
import { Link } from "react-router-dom";


import AOS from 'aos';
import 'aos/dist/aos.css';

function Section7() {

  AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });


  return (
    <section className="relative bg-white flex flex-col justify-center items-center overflow-hidden py-10">
      <main className="flex flex-col md:flex-row w-full max-w-8xl mx-auto">
        {/* Left Section */}
        <div
          className="w-full md:w-1/2 h-[250px] md:h-[500px] bg-gray-600"
          style={{
            backgroundImage: `url(${DealBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Right Section */}
        <div
          className="w-full md:w-1/2 h-auto md:h-[500px] flex flex-col justify-center items-center text-center px-6 py-10 md:py-16"
          style={{
            backgroundImage: `url(${Bg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <span data-aos="fade-up" className="text-[12px] sm:text-sm tracking-tighter text-green-500 mb-3">
            Crispy, Every Bite Taste
          </span>

          <h1 data-aos="fade-up" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
            KFC Chicken Hot <br /> Wing & French Fries
          </h1>

          <p data-aos="fade-up" className="text-[11px] sm:text-[13px] md:text-sm text-gray-600 mb-4">
            Wheat tortilla with spicy chicken bites, cheese sauce <br className="hidden sm:block" />
            tomatoes and soft cheese
          </p>

          {/* Countdown Timer */}
          <div data-aos="fade-up" className="flex justify-center gap-4 mt-3 sm:mt-5">
            {[
              { value: "30", label: "Days" },
              { value: "22", label: "Hours" },
              { value: "48", label: "Mins" },
              { value: "22", label: "Sec" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-yellow-500 text-2xl sm:text-3xl font-bold font-mono">
                  {item.value}
                </span>
                <p className="text-[10px] sm:text-[12px] tracking-tighter font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

         <Link to="/shop">
          <button data-aos="fade-up" className="py-3 sm:py-4 px-6 sm:px-8 bg-green-500 mt-6 text-white rounded-md text-[12px] sm:text-sm hover:bg-green-600 transition-all duration-300 cursor-pointer">
            Order Now
          </button>
         </Link>
        </div>
      </main>
    </section>
  );
}

export default Section7;
