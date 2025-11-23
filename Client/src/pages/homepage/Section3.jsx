// with Out redux


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

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4, // default (desktop)
//     slidesToScroll: 2,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 1024, // md devices
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 2,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 768, // sm devices
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           centerMode: false,
//         },
//       },
//       {
//         breakpoint: 480, // mobile
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           centerMode: false, // ❌ turn off center mode
//         },
//       },
//     ],
//   };

//   return (
//     <section className="relative w-full bg-[#F5F8FD] flex flex-col overflow-hidden">
//       <div className="text-center py-14 flex flex-col gap-3">
//         <h2 className="text-green-600 text-sm uppercase">crispy, every bite taste</h2>
//         <h1 className="text-3xl font-bold">Popular Fast Foods</h1>
//       </div>

//       <main className="md:px-20 px-4 pb-10">
//         <Slider {...settings}>
//           {visibleItems.map((item) => (
//             <div key={item.id} className="px-3">
//               {/* <div className="bg-white rounded-2xl flex flex-col justify-center items-center py-6 shadow-md hover:scale-105 transition-transform duration-200">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="h-[120px] w-[120px] rounded-full object-cover"
//                 />
//                 <div className="flex mt-4 justify-center items-center gap-2">
//                   <span className="text-[10px] px-2 py-1 bg-[#FFC222] text-black font-bold rounded">
//                     {item.discount}
//                   </span>
//                   <span className="text-[13px] text-gray-400 font-semibold line-through">
//                     Rs.{item.oldPrice}
//                   </span>
//                   <span className="text-[14px] text-gray-600 font-semibold">
//                     Rs.{item.newPrice}
//                   </span>
//                 </div>
//                 <p className="text-md font-bold mt-2">{item.name}</p>
//               </div> */}

//               <div className="bg-white rounded-2xl grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 justify-center items-center py-6 shadow-md hover:scale-105 transition-transform duration-200">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="h-[120px] w-[120px] flex justify-center items-center rounded-full object-cover"
//                 />
//                 <div className="flex mt-4 justify-center items-center gap-2">
//                   <span className="text-[10px] px-2 py-1 bg-[#FFC222] text-black font-bold rounded">
//                     {item.discount}
//                   </span>
//                   <span className="text-[13px] text-gray-400 font-semibold line-through">
//                     Rs.{item.oldPrice}
//                   </span>
//                   <span className="text-[14px] text-gray-600 font-semibold">
//                     Rs.{item.newPrice}
//                   </span>
//                 </div>
//                 <p className="text-md font-bold mt-2">{item.name}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>

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













// with redux

// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// import {useDispatch, useSelector} from 'react-redux';
// import { fetchMenu } from "../../redux/slices/product.Slice";


// function Section3() {

//       const dispatch = useDispatch();
  
//       const {items, status } = useSelector((state) => state.menu);

//       console.log("ITEMS==> ", items);
      
  

//   const [seeAll, setSeeAll] = useState(false);
//   const visibleItems = seeAll ? items : items.slice(0, 8);

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4, // default (desktop)
//     slidesToScroll: 2,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 1024, // md devices
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 2,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 768, // sm devices
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           centerMode: false,
//         },
//       },
//       {
//         breakpoint: 480, // mobile
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           centerMode: false, //  turn off center mode
//         },
//       },
//     ],
//   };

//   return (
//     <section className="relative w-full bg-[#F5F8FD] flex flex-col overflow-hidden">
//   <div className="text-center py-14 flex flex-col gap-3">
//     <h2 className="text-green-600 text-sm uppercase">crispy, every bite taste</h2>
//     <h1 className="text-3xl font-bold">Popular Fast Foods</h1>
//   </div>

//   <main className="md:px-20 px-4 pb-10">
// <Slider {...settings}>
//   {visibleItems.map((item) => (
//     <div key={item.id} className="px-2 min-w-0">
//       <div className="bg-white rounded-2xl flex flex-col items-center py-6 shadow-md hover:scale-105 transition-transform duration-200">
//         <img
//           src={item.image}
//           alt={item.name}
//           className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-full object-cover"
//         />
//         <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
//           <span className="text-[10px] px-2 py-1 bg-[#FFC222] text-black font-bold rounded">
//             {item.discount}
//           </span>
//           <span className="text-[13px] text-gray-400 font-semibold line-through">
//             Rs.{item.oldPrice}
//           </span>
//           <span className="text-[14px] text-gray-600 font-semibold">
//             Rs.{item.newPrice}
//           </span>
//         </div>
//         <p className="text-md font-bold mt-2 text-center">{item.name}</p>
//       </div>
//     </div>
//   ))}
// </Slider>


//     {items.length > 8 && (
//       <div className="flex justify-center mt-8">
//         <button
//           onClick={() => setSeeAll(!seeAll)}
//           className="hidden md:block px-6 py-2 bg-[#FFC222] mb-14 text-black font-semibold rounded-lg shadow hover:bg-[#ffb800] transition"
//         >
//           {seeAll ? "See Less" : "See All"}
//         </button>
//       </div>
//     )}
//   </main>
// </section>

//   );
// }

// export default Section3;



import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useDispatch, useSelector } from 'react-redux';
import { fetchMenu } from "../../redux/slices/product.Slice";
import { Link } from "react-router-dom";


import AOS from 'aos';
import 'aos/dist/aos.css';


function Section3() {

  AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });


  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.menu);

  useEffect(()=> {
     dispatch(fetchMenu())
  },[dispatch])

  // console.log("ITEMS==> ", items);

  const [seeAll, setSeeAll] = useState(false);
  const visibleItems = seeAll ? items : items.slice(0, 8);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // default (lg and above)
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // md and below
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // sm and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 640, // mobile and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
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
            <Link to={`/single/${item._id}`}>

            <div data-aos="fade-up" key={item._id} className="px-2 min-w-0">
              <div className="bg-white rounded-2xl flex flex-col items-center py-6 shadow-md hover:scale-105 transition-transform duration-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-full object-cover"
                />
                <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
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
                <p className="text-md font-bold mt-2 text-center">{item.name}</p>
              </div>
            </div>
            </Link>

          ))}
        </Slider>

        {items.length > 8 && (
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
