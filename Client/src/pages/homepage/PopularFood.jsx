// import React from 'react'
// import { FaLongArrowAltRight } from "react-icons/fa";
// import { FaLongArrowAltLeft } from "react-icons/fa";

// import First from "../../assets/PopularFood/First.png"
// import Second from "../../assets/PopularFood/Second.png"
// import tomato_shape from "../../assets/PopularFood/tomato-shape.png"
// import burger_shape from "../../assets/PopularFood/burger-shape.png"
// import chilli_shape from "../../assets/PopularFood/chili-shape.png"
// import fries_shape from "../../assets/PopularFood/fry-shape.png"


// function PopularFood() {
//     return (
//         <>
//             <section className='relative w-full min-h-[92vh] bg-[#F5F8FD] flex flex-col  overflow-hidden'>
//                 <img src={tomato_shape} alt="" className='absolute w-10 mt-10 hidden md:block'/>
//                 <img src={burger_shape} alt="" className='absolute w-20 mt-[450px] ml-10 hidden md:block'/>
//                 <img src={chilli_shape} alt="" className='absolute w-12 mt-[650px] ml-10 hidden md:block'/>
//                 <img src={fries_shape} alt="" className='absolute w-20 mt-[550px] ml-[1150px] hidden md:block'/>
//                 <main className='md:w-[90%] sm:w-[95%] w-full mx-auto'>

//                     <div className='py-16 md:px-20 sm:px-16 px-4 flex justify-between'>
//                         <div className='flex flex-col'>
//                             <span className='md:text-sm text-[11px] sm:text-sm  text-green-600 font-bold '>crispy, every bite taste</span>
//                             <h1 className='md:text-4xl text-md sm:text-3xl font-bold'>Popular Food Items</h1>
//                         </div>
//                         <div className='flex gap-3'>
//                             <button className='md:h-8 md:w-8 w-6 h-6 sm:h-7 sm:w-7 bg-gray-300 flex justify-center items-center rounded-full'><FaLongArrowAltLeft /></button>
//                             <button className='md:h-8 md:w-8 w-6 h-6 sm:h-7 sm:w-7 bg-yellow-300 flex justify-center items-center rounded-full'><FaLongArrowAltRight /></button>
//                         </div>
//                     </div>

//                     {/* card */}
//                     <div className='md:px-20 px-4 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 justify-items-center'>
//                         <div className='h-[270px] w-[200px] gap-6 bg-white flex flex-col justify-center items-center rounded-xl'>
//                             <div className='h-[120px] w-[120px] bg-gray-400 rounded-full'></div>
//                             <div className='flex flex-col items-center gap-0'>
//                                 <p className='text-md font-bold'>Chicken</p>
//                                 <span className='text-[10px] text-yellow-300 font-bold'>8 Prodcts</span>
//                             </div>
//                         </div>

//                         <div className='h-[270px] w-[200px] gap-6 bg-white flex flex-col justify-center items-center rounded-xl'>
//                             <div className='h-[120px] w-[120px] bg-gray-400 rounded-full'></div>
//                             <div className='flex flex-col items-center gap-0'>
//                                 <p className='text-md font-bold'>Chicken</p>
//                                 <span className='text-[10px] text-yellow-300 font-bold'>8 Prodcts</span>
//                             </div>
//                         </div>

//                         <div className='h-[270px] w-[200px] gap-6 bg-white flex flex-col justify-center items-center rounded-xl'>
//                             <div className='h-[120px] w-[120px] bg-gray-400 rounded-full'></div>
//                             <div className='flex flex-col items-center gap-0'>
//                                 <p className='text-md font-bold'>Chicken</p>
//                                 <span className='text-[10px] text-yellow-300 font-bold'>8 Prodcts</span>
//                             </div>
//                         </div>

//                         <div className='h-[270px] w-[200px] gap-6 bg-white flex flex-col justify-center items-center rounded-xl'>
//                             <div className='h-[120px] w-[120px] bg-gray-400 rounded-full'></div>
//                             <div className='flex flex-col items-center gap-0'>
//                                 <p className='text-md font-bold'>Chicken</p>
//                                 <span className='text-[10px] text-yellow-300 font-bold'>8 Prodcts</span>
//                             </div>
//                         </div>

//                     </div>

//                 </main>

//                 {/* main 2 images */}
//                 <main className='md:w-[90%] sm:w-[95%] w-full mx-auto'>
//                     <div className='md:px-32 px-16 py-10'>
//                         <div className='flex flex-col md:flex-row sm:flex-row lg:flex-row mt-12 justify-between items-center gap-6'>

//                             {/* First Image Box */}
//                             <div className='lg:w-[390px] md:w-[290px] sm:w-[180px] w-full flex justify-center'>
//                                 <img
//                                     src={First}
//                                     alt=""
//                                     className="w-full max-w-[220px] sm:max-w-none"
//                                 />
//                             </div>

//                             {/* Second Image Box */}
//                             <div className='lg:w-[530px] md:w-[400px] sm:w-[250px] w-full flex justify-center'>
//                                 <img
//                                     src={Second}
//                                     alt=""
//                                     className="w-full max-w-[250px] sm:max-w-none"
//                                 />
//                             </div>

//                         </div>
//                     </div>
//                 </main>

//             </section>
//         </>
//     )
// }

// export default PopularFood








import React, { useState } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

import First from "../../assets/PopularFood/First.png";
import Second from "../../assets/PopularFood/Second.png";
import tomato_shape from "../../assets/PopularFood/tomato-shape.png";
import burger_shape from "../../assets/PopularFood/burger-shape.png";
import chilli_shape from "../../assets/PopularFood/chili-shape.png";
import fries_shape from "../../assets/PopularFood/fry-shape.png";

function PopularFood() {
  const cards = [
    { id: 1, name: "Chicken Burger", items: 8 },
    { id: 2, name: "Zinger Roll", items: 5 },
    { id: 3, name: "Pasta", items: 10 },
    { id: 4, name: "Cheese Balls", items: 6 },
    { id: 5, name: "Beef Burger", items: 7 },
    { id: 6, name: "Crispy Wings", items: 4 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // total cards to show according to screen width
  const cardsPerView = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4;

  const nextSlide = () => {
    if (currentIndex < cards.length - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <section className="relative w-full min-h-[92vh] bg-[#F5F8FD] flex flex-col overflow-hidden">
        {/* background shapes */}
        <img src={tomato_shape} alt="" className="absolute w-10 mt-10 hidden md:block" />
        <img src={burger_shape} alt="" className="absolute w-20 mt-[450px] ml-10 hidden md:block" />
        <img src={chilli_shape} alt="" className="absolute w-12 mt-[650px] ml-10 hidden md:block" />
        <img src={fries_shape} alt="" className="absolute w-20 mt-[550px] ml-[1150px] hidden md:block" />

        <main className="md:w-[90%] sm:w-[95%] w-full mx-auto">
          {/* Header Section */}
          <div className="py-16 md:px-20 sm:px-16 px-4 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="md:text-sm text-[11px] sm:text-sm text-green-600 font-bold">
                crispy, every bite taste
              </span>
              <h1 className="md:text-4xl text-md sm:text-3xl font-bold">
                Popular Food Items
              </h1>
            </div>
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="md:h-8 md:w-8 w-6 h-6 sm:h-7 sm:w-7 bg-gray-300 flex justify-center items-center rounded-full"
              >
                <FaLongArrowAltLeft />
              </button>
              <button
                onClick={nextSlide}
                className="md:h-8 md:w-8 w-6 h-6 sm:h-7 sm:w-7 bg-yellow-300 flex justify-center items-center rounded-full"
              >
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>

          {/* Cards Slider */}
          <div className="overflow-hidden md:px-20 px-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="min-w-full sm:min-w-[50%] md:min-w-[25%] flex justify-center"
                >
                  <div className="h-[270px] w-[200px] gap-6 bg-white flex flex-col justify-center items-center rounded-xl shadow-sm">
                    <div className="h-[120px] w-[120px] bg-gray-400 rounded-full"></div>
                    <div className="flex flex-col items-center gap-0">
                      <p className="text-md font-bold">{card.name}</p>
                      <span className="text-[10px] text-yellow-400 font-bold">
                        {card.items} Products
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* 2 Main Images */}
        <main className="md:w-[90%] sm:w-[95%] w-full mx-auto">
          <div className="md:px-32 px-16 py-10">
            <div className="flex flex-col md:flex-row sm:flex-row lg:flex-row mt-12 justify-between items-center gap-6">
              <div className="lg:w-[390px] md:w-[290px] sm:w-[180px] w-full flex justify-center">
                <img src={First} alt="" className="w-full max-w-[220px] sm:max-w-none" />
              </div>
              <div className="lg:w-[530px] md:w-[400px] sm:w-[250px] w-full flex justify-center">
                <img src={Second} alt="" className="w-full max-w-[250px] sm:max-w-none" />
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default PopularFood;
