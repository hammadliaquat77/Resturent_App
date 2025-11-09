import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

import bgImage from "../../assets/Hero/Section.png";
import Burger from "../../assets/Hero/Burger.png";
import bager from "../../assets/Hero/bagar.png";
import Pizza from "../../assets/Hero/pizza.png";


import BurgerText from "../../assets/Hero/burgertext.png";
import PizzaText from "../../assets/Hero/pizzatext.png";


import PopularFood from "./PopularFood";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";

const ImageList = [
  {
    id: 1,
    img: Burger,
    bgTextImage: BurgerText,
    title: "Hot Spicy",
    highlight: "Chicken Burger",
    tag: "Crispy, Every Bite Taste",
    price: "Limited Offer / $5",
  },
  {
    id: 2,
    img: bager,
    title: "🔥 Flat 40% Off",
    highlight: "Juicy Burgers",
    tag: "Cheesy, crispy & loaded with flavors",
    price: "Only Today!",
  },
  {
    id: 3,
    img: Pizza,
    bgTextImage: PizzaText,
    title: "🍕 Buy 1 Get 1",
    highlight: "Free Pizza",
    tag: "Hot & Cheesy Large Pizza Offer",
    price: "Save Big Now!",
  },
];

const Home = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
    <section
      id="home"
      className="relative w-full min-h-[92vh] flex items-center overflow-hidden  pt-20 md:pt-0"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Slider Content */}
      <div className="relative z-10 md:w-[90%] w-full max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[80vh] gap-6">

                {/* Left Text Content (Styled like first design) */}
                <div className="text-center md:text-left flex flex-col justify-center px-4">
                  <p
                    data-aos="fade-down"
                    className="text-yellow-400 mb-2 text-sm sm:text-base"
                  >
                    {data.tag}
                  </p>

                  <h1
                    data-aos="fade-up"
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white uppercase tracking-wide"
                  >
                    {data.title} <br /> {data.highlight}
                  </h1>

                  {/* Price / Offer */}
                  <p
                    data-aos="fade-up"
                    className="text-lg text-white/90 mt-4 font-medium"
                  >
                    <b>{data.price}</b>
                  </p>

                  {/* Button */}
                  <div data-aos="fade-up" className="mt-6">
                    <button
                      onClick={() =>
                        handleOrderPopup ? handleOrderPopup() : null
                      }
                      className="bg-pink-600 hover:bg-pink-700 transition rounded-md md:py-3 md:px-7 py-2 px-5 font-semibold flex items-center gap-2 text-white mx-auto md:mx-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.293a1 1 0 00.708 1.707H19m-6 0a1 1 0 100 2 1 1 0 000-2z"
                        />
                      </svg>
                      Order Now
                    </button>
                  </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center md:justify-end mt-4 md:mt-0">
                <img src={data.bgTextImage} alt="" className="absolute md:mr-40 md:mt-16 md:w-80 w-24 mr-32 mt-12 " />
                  <img
                    data-aos="zoom-in"
                    src={data.img}
                    alt={data.title}
                    className="w-full md:max-w-[350px] max-w-[150px] h-auto object-contain drop-shadow-lg"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>


    <section>
       <PopularFood/>
    </section>

    <section>
      <Section2/>
    </section>

    <section>
      <Section3/>
    </section>

    <section>
      <Section4/>
    </section>

    <section>
      <Section5/>
    </section>

    <section>
      <Section6/>
    </section>

    <section>
      <Section7/>
    </section>

    <section>
      <Section8/>
    </section>
    </>

    
  );
};

export default Home;
