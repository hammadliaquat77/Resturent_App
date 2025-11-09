// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function Section3() {
//   const foodItems = [
//     { id: 1, name: "Chicken Burger", oldPrice: 500, newPrice: 400, discount: "-25%", image: "https://via.placeholder.com/120x120?text=Chicken" },
//     { id: 2, name: "Beef Burger", oldPrice: 600, newPrice: 450, discount: "-30%", image: "https://via.placeholder.com/120x120?text=Beef" },
//     { id: 3, name: "Zinger Roll", oldPrice: 350, newPrice: 280, discount: "-20%", image: "https://via.placeholder.com/120x120?text=Roll" },
//     { id: 4, name: "Cheese Pizza", oldPrice: 1200, newPrice: 900, discount: "-25%", image: "https://via.placeholder.com/120x120?text=Pizza" },
//     { id: 5, name: "Fries", oldPrice: 300, newPrice: 220, discount: "-27%", image: "https://via.placeholder.com/120x120?text=Fries" },
//     { id: 6, name: "Nuggets", oldPrice: 400, newPrice: 320, discount: "-20%", image: "https://via.placeholder.com/120x120?text=Nuggets" },
//     { id: 7, name: "BBQ Platter", oldPrice: 1500, newPrice: 1200, discount: "-20%", image: "https://via.placeholder.com/120x120?text=BBQ" },
//     { id: 8, name: "Chicken Wings", oldPrice: 600, newPrice: 480, discount: "-20%", image: "https://via.placeholder.com/120x120?text=Wings" },
//     { id: 9, name: "Club Sandwich", oldPrice: 550, newPrice: 440, discount: "-20%", image: "https://via.placeholder.com/120x120?text=Sandwich" },
//     { id: 10, name: "Grilled Fish", oldPrice: 1000, newPrice: 800, discount: "-20%", image: "https://via.placeholder.com/120x120?text=Fish" },
//   ];

//   const [seeAll, setSeeAll] = useState(false);
//   const visibleItems = seeAll ? foodItems : foodItems.slice(0, 8);

//   // 🔹 Slick Slider settings for responsiveness
//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     responsive: [
//       {
//         breakpoint: 1024, // tablets
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 2,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 768, // mobile
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 480, // extra small
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="relative w-full min-h-[92vh] bg-[#F5F8FD] flex flex-col overflow-hidden">
//       <div className="text-center py-14 flex flex-col gap-3">
//         <h2 className="text-green-600 text-sm uppercase">crispy, every bite taste</h2>
//         <h1 className="text-3xl font-bold">Popular Fast Foods</h1>
//       </div>

//       <main className="md:px-20 px-6 pb-10">
//         {/* 👇 Grid for large screens */}
//         <div className="hidden md:grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
//           {visibleItems.map((item) => (
//             <div key={item.id} className="flex flex-col items-center">
//               <div className="h-[200px] w-[200px] gap-6 bg-white flex flex-col justify-center items-center rounded-xl shadow-md hover:scale-105 duration-200">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="h-[120px] w-[120px] rounded-full object-cover"
//                 />
//               </div>
//               <div className="flex flex-col gap-3">
//                 <div className="flex mt-4 justify-center items-center gap-2">
//                   <span className="text-[10px] px-2 py-2 bg-[#FFC222] text-black text-md font-bold rounded">
//                     {item.discount}
//                   </span>
//                   <span className="text-[14px] text-gray-400 font-semibold line-through">
//                     Rs.{item.oldPrice}
//                   </span>
//                   <span className="text-[14px] text-gray-500 font-semibold">
//                     Rs.{item.newPrice}
//                   </span>
//                 </div>
//                 <p className="text-md font-bold flex justify-center items-center">{item.name}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* 👇 Slider for mobile screens */}
//         <div className="block md:hidden">
//           <Slider {...settings}>
//             {foodItems.map((item) => (
//               <div key={item.id} className="flex flex-col items-center px-2">
//                 <div className="h-[200px] w-[200px] gap-6 bg-white flex flex-col justify-center items-center rounded-xl shadow-md hover:scale-105 duration-200">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="h-[120px] w-[120px] rounded-full object-cover"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-3">
//                   <div className="flex mt-4 justify-center items-center gap-2">
//                     <span className="text-[10px] px-2 py-2 bg-[#FFC222] text-black text-md font-bold rounded">
//                       {item.discount}
//                     </span>
//                     <span className="text-[14px] text-gray-400 font-semibold line-through">
//                       Rs.{item.oldPrice}
//                     </span>
//                     <span className="text-[14px] text-gray-500 font-semibold">
//                       Rs.{item.newPrice}
//                     </span>
//                   </div>
//                   <p className="text-md font-bold flex justify-center items-center">{item.name}</p>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>

//         {/* See All Button */}
//         {foodItems.length > 8 && (
//           <div className="flex justify-center mt-8">
//             <button
//               onClick={() => setSeeAll(!seeAll)}
//               className="hidden md:block px-6 py-2 bg-[#FFC222] mb-14 text-black font-semibold rounded-lg shadow hover:bg-[#ffb800] transition"
//             >
//               {seeAll ? "See Less" : "See All"}
//             </button>
//           </div>
//         )}
//       </main>
//     </section>
//   );
// }

// export default Section3;









// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function Section3() {
//   const foodItems = [
//     { id: 1, name: "Chicken Burger", oldPrice: 500, newPrice: 400, discount: "-25%", image: "https://via.placeholder.com/120x120?text=Chicken" },
//     { id: 2, name: "Beef Burger", oldPrice: 600, newPrice: 450, discount: "-30%", image: "https://via.placeholder.com/120x120?text=Beef" },
//     { id: 3, name: "Zinger Roll", oldPrice: 350, newPrice: 280, discount: "-20%", image: "https://via.placeholder.com/120x120?text=Roll" },
//     { id: 4, name: "Cheese Pizza", oldPrice: 1200, newPrice: 900, discount: "-25%", image: "https://via.placeholder.com/120x120?text=Pizza" },
//     { id: 5, name: "Fries", oldPrice: 300, newPrice: 220, discount: "-27%", image: "https://via.placeholder.com/120x120?text=Fries" },
//     { id: 6, name: "Nuggets", oldPrice: 400, newPrice: 320, discount: "-20%", image: "https://via.placeholder.com/120x120?text=Nuggets" },
//     { id: 7, name: "BBQ Platter", oldPrice: 1500, newPrice: 1200, discount: "-20%", image: "https://via.placeholder.com/120x120?text=BBQ" },
//     { id: 8, name: "Chicken Wings", oldPrice: 600, newPrice: 480, discount: "-20%", image: "https://via.placeholder.com/120x120?text=Wings" },
//     { id: 9, name: "Club Sandwich", oldPrice: 550, newPrice: 440, discount: "-20%", image: "https://via.placeholder.com/120x120?text=Sandwich" },
//     { id: 10, name: "Grilled Fish", oldPrice: 1000, newPrice: 800, discount: "-20%", image: "https://via.placeholder.com/120x120?text=Fish" },
//   ];

//   const [seeAll, setSeeAll] = useState(false);
//   const visibleItems = seeAll ? foodItems : foodItems.slice(0, 8);

//   // 🔹 Slick Slider settings for responsiveness with arrows enabled
//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     arrows: true, // Arrows enabled for navigation
//     responsive: [
//       {
//         breakpoint: 1024, // tablets
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 2,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 768, // mobile
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           centerMode: true, // Center the slides on mobile
//           centerPadding: '20px',
//         },
//       },
//       {
//         breakpoint: 480, // extra small
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           centerMode: true, // Center the single slide
//           centerPadding: '40px',
//         },
//       },
//     ],
//   };

//   return (
//     <section className="relative w-full min-h-[92vh] bg-[#F5F8FD] flex flex-col overflow-hidden">
//       <div className="text-center py-14 flex flex-col gap-3">
//         <h2 className="text-green-600 text-sm uppercase">crispy, every bite taste</h2>
//         <h1 className="text-3xl font-bold">Popular Fast Foods</h1>
//       </div>

//       <main className="md:px-20 px-6 pb-10">
//         {/* 👇 Slider for all screens with arrows and responsiveness */}
//         <Slider {...settings}>
//           {visibleItems.map((item) => (
//             <div key={item.id} className="flex flex-col items-center px-2">
//               <div className="h-[200px] w-[200px] gap-6 bg-white flex flex-col justify-center items-center rounded-xl shadow-md hover:scale-105 duration-200">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="h-[120px] w-[120px] rounded-full object-cover"
//                 />
//               </div>
//               <div className="flex flex-col gap-3">
//                 <div className="flex mt-4 justify-center items-center gap-2">
//                   <span className="text-[10px] px-2 py-2 bg-[#FFC222] text-black text-md font-bold rounded">
//                     {item.discount}
//                   </span>
//                   <span className="text-[14px] text-gray-400 font-semibold line-through">
//                     Rs.{item.oldPrice}
//                   </span>
//                   <span className="text-[14px] text-gray-500 font-semibold">
//                     Rs.{item.newPrice}
//                   </span>
//                 </div>
//                 <p className="text-md font-bold flex justify-center items-center">{item.name}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>

//         {/* See All Button */}
//         {foodItems.length > 8 && (
//           <div className="flex justify-center mt-8">
//             <button
//               onClick={() => setSeeAll(!seeAll)}
//               className="px-6 py-2 bg-[#FFC222] mb-14 text-black font-semibold rounded-lg shadow hover:bg-[#ffb800] transition"
//             >
//               {seeAll ? "See Less" : "See All"}
//             </button>
//           </div>
//         )}
//       </main>
//     </section>
//   );
// }

// export default Section3;

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Section3() {
  const foodItems = [
    { id: 1, name: "Chicken Burger", oldPrice: 500, newPrice: 400, discount: "-25%", image: "https://via.placeholder.com/120x120?text=Chicken" },
    { id: 2, name: "Beef Burger", oldPrice: 600, newPrice: 450, discount: "-30%", image: "https://via.placeholder.com/120x120?text=Beef" },
    { id: 3, name: "Zinger Roll", oldPrice: 350, newPrice: 280, discount: "-20%", image: "https://via.placeholder.com/120x120?text=Roll" },
    { id: 4, name: "Cheese Pizza", oldPrice: 1200, newPrice: 900, discount: "-25%", image: "https://via.placeholder.com/120x120?text=Pizza" },
    { id: 5, name: "Fries", oldPrice: 300, newPrice: 220, discount: "-27%", image: "https://via.placeholder.com/120x120?text=Fries" },
    { id: 6, name: "Nuggets", oldPrice: 400, newPrice: 320, discount: "-20%", image: "https://via.placeholder.com/120x120?text=Nuggets" },
    { id: 7, name: "BBQ Platter", oldPrice: 1500, newPrice: 1200, discount: "-20%", image: "https://via.placeholder.com/120x120?text=BBQ" },
    { id: 8, name: "Chicken Wings", oldPrice: 600, newPrice: 480, discount: "-20%", image: "https://via.placeholder.com/120x120?text=Wings" },
    { id: 9, name: "Club Sandwich", oldPrice: 550, newPrice: 440, discount: "-20%", image: "https://via.placeholder.com/120x120?text=Sandwich" },
    { id: 10, name: "Grilled Fish", oldPrice: 1000, newPrice: 800, discount: "-20%", image: "https://via.placeholder.com/120x120?text=Fish" },
  ];

  const [seeAll, setSeeAll] = useState(false);
  const visibleItems = seeAll ? foodItems : foodItems.slice(0, 8);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // default (desktop)
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // md devices
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // sm devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false, // ❌ turn off center mode
        },
      },
    ],
  };

  return (
    <section className="relative w-full bg-[#F5F8FD] flex flex-col overflow-hidden">
      <div className="text-center py-14 flex flex-col gap-3">
        <h2 className="text-green-600 text-sm uppercase">crispy, every bite taste</h2>
        <h1 className="text-3xl font-bold">Popular Fast Foods</h1>
      </div>

      <main className="md:px-20 px-4 pb-10">
        <Slider {...settings}>
          {visibleItems.map((item) => (
            <div key={item.id} className="px-3">
              <div className="bg-white rounded-2xl flex flex-col justify-center items-center py-6 shadow-md hover:scale-105 transition-transform duration-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[120px] w-[120px] rounded-full object-cover"
                />
                <div className="flex mt-4 justify-center items-center gap-2">
                  <span className="text-[10px] px-2 py-1 bg-[#FFC222] text-black font-bold rounded">
                    {item.discount}
                  </span>
                  <span className="text-[13px] text-gray-400 font-semibold line-through">
                    Rs.{item.oldPrice}
                  </span>
                  <span className="text-[14px] text-gray-600 font-semibold">
                    Rs.{item.newPrice}
                  </span>
                </div>
                <p className="text-md font-bold mt-2">{item.name}</p>
              </div>
            </div>
          ))}
        </Slider>

        {foodItems.length > 8 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setSeeAll(!seeAll)}
              className="hidden md:block px-6 py-2 bg-[#FFC222] mb-14 text-black font-semibold rounded-lg shadow hover:bg-[#ffb800] transition"
            >
              {seeAll ? "See Less" : "See All"}
            </button>
          </div>
        )}
      </main>
    </section>
  );
}

export default Section3;
