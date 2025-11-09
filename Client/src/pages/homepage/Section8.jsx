import React from 'react';
import Bg from "../../assets/Section8/Bg.png";
import DeliveryMen from "../../assets/Section8/delivery-man.png";

import Zinger from "../../assets/Section8/Zinger.png";
import Pasta from "../../assets/Section8/Pasta.png";
import CheseeBoll from "../../assets/Section8/CheeseBoll.png";
import BeefBurger from "../../assets/Section8/BeefBurger.png";
import Burger from "../../assets/Section8/Burger.png";

function Section8() {
    return (
        <section className='relative bg-white flex flex-col justify-center items-center overflow-hidden py-10'>
            <main className='mt-4'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-2xl font-bold mb-1'>Hammad Raza</h1>
                    <span className='text-[12px] text-yellow-500 capitalize mb-4'>Business CEO & co founder</span>
                    <p className='text-xl font-bold capitalize'>“Thank you for dinner last night. It was amazing!! I have say it’s <br />
                        the best meal I have had in quite some time. will definitely be <br />
                        seeing more eating next year.”
                    </p>
                    <div className='mt-3 text-[12px]'>
                        ⭐⭐⭐⭐⭐
                    </div>
                    <div className='flex gap-3 mt-5'>
                        <div className='h-10 w-10 bg-gray-600 rounded-full'></div>
                        <div className='h-10 w-10 bg-gray-600 rounded-full'></div>
                        <div className='h-10 w-10 bg-gray-600 rounded-full'></div>
                    </div>
                </div>
            </main>

            {/* Second Section */}
            <main className='mt-10'>
               <div className='w-[900px] h-[450px] bg-gray-500 rounded-md flex' style={{backgroundImage: `url(${Bg})`}} >
                  {/* left */}
                  <div className='flex flex-col w-[50%] py-32 px-16'>
                     <span className='text-[12px] text-yellow-500 font-bold'>Crispy, Every Bite Taste</span>
                     <h1 className='text-4xl text-white font-semibold '>30 Minutes Fast <br /> <span className='text-yellow-500'>Delivery</span> Challenge</h1>
                     <button className='w-[150px] h-[50px] bg-white rounded-md mt-8'>Order Now</button>
                  </div>
                  {/* right */}
                  <div className='flex flex-col w-[50%] justify-center items-center '>
                     <img src={DeliveryMen} alt="" className='w-full' />
                  </div>
               </div>
            </main>

            {/* Third Section */}
            <main className='mt-10'>
                <div className='w-[1500px] h-[250px] bg-green-900 flex'>
                    <img src={Pasta} alt="" className='h-[250px]'/>
                    <img src={Zinger} alt="" className='h-[250px]'/>
                    <img src={CheseeBoll} alt="" className='h-[250px]'/>
                    <img src={BeefBurger} alt="" className='h-[250px]'/>
                    <img src={Burger} alt="" className='h-[250px]'/>
                    <img src={Pasta} alt="" className='h-[250px]'/>
                </div>
            </main>

        </section>
    )
}

export default Section8










// import React from "react";
// import Bg from "../../assets/Section8/Bg.png";
// import DeliveryMen from "../../assets/Section8/delivery-man.png";

// import Zinger from "../../assets/Section8/Zinger.png";
// import Pasta from "../../assets/Section8/Pasta.png";
// import CheeseBoll from "../../assets/Section8/CheeseBoll.png";
// import BeefBurger from "../../assets/Section8/BeefBurger.png";
// import Burger from "../../assets/Section8/Burger.png";

// function Section8() {
//   return (
//     <section className="relative bg-white flex flex-col justify-center items-center overflow-hidden py-10 px-4">
//       {/* --- First Section --- */}
//       <main className="mt-4 text-center max-w-3xl">
//         <div className="flex flex-col justify-center items-center">
//           <h1 className="text-2xl md:text-3xl font-bold mb-1">Hammad Raza</h1>
//           <span className="text-[12px] md:text-sm text-yellow-500 capitalize mb-4">
//             Business CEO & Co-Founder
//           </span>
//           <p className="text-sm sm:text-base md:text-lg font-semibold capitalize text-gray-800 leading-relaxed">
//             “Thank you for dinner last night. It was amazing! I have to say it’s <br className="hidden sm:block" />
//             the best meal I’ve had in quite some time. I will definitely be <br className="hidden sm:block" />
//             seeing more eating next year.”
//           </p>

//           <div className="mt-3 text-[14px] sm:text-base">⭐⭐⭐⭐⭐</div>

//           <div className="flex gap-3 mt-5">
//             <div className="h-8 w-8 sm:h-10 sm:w-10 bg-gray-600 rounded-full"></div>
//             <div className="h-8 w-8 sm:h-10 sm:w-10 bg-gray-600 rounded-full"></div>
//             <div className="h-8 w-8 sm:h-10 sm:w-10 bg-gray-600 rounded-full"></div>
//           </div>
//         </div>
//       </main>

//       {/* --- Second Section (Delivery Offer) --- */}
//       <main className="mt-10 w-full max-w-6xl">
//         <div
//           className="w-full rounded-md flex flex-col md:flex-row items-center justify-between bg-cover bg-center"
//           style={{ backgroundImage: `url(${Bg})` }}
//         >
//           {/* Left Content */}
//           <div className="flex flex-col w-full md:w-1/2 py-10 md:py-24 px-6 md:px-16 text-center md:text-left">
//             <span className="text-[12px] md:text-sm text-yellow-500 font-bold">
//               Crispy, Every Bite Taste
//             </span>
//             <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold leading-snug mt-2">
//               30 Minutes Fast <br />{" "}
//               <span className="text-yellow-500">Delivery</span> Challenge
//             </h1>
//             <button className="mt-6 bg-white text-gray-800 rounded-md py-3 px-6 sm:py-4 sm:px-8 font-semibold text-sm hover:bg-yellow-500 hover:text-white transition-all duration-300">
//               Order Now
//             </button>
//           </div>

//           {/* Right Image */}
//           <div className="flex justify-center items-center w-full md:w-1/2">
//             <img
//               src={DeliveryMen}
//               alt="Delivery Man"
//               className="w-[70%] sm:w-[60%] md:w-[80%] lg:w-[85%]"
//             />
//           </div>
//         </div>
//       </main>

//       {/* --- Third Section (Food Items Row) --- */}
//       <main className="mt-10 w-full bg-green-900 overflow-x-auto rounded-md scrollbar-hide">
//         <div className="flex justify-center items-center min-w-max sm:justify-start gap-2 sm:gap-4 py-4">
//           <img src={Pasta} alt="Pasta" className="h-[140px] sm:h-[180px] md:h-[200px]" />
//           <img src={Zinger} alt="Zinger" className="h-[140px] sm:h-[180px] md:h-[200px]" />
//           <img src={CheeseBoll} alt="CheeseBoll" className="h-[140px] sm:h-[180px] md:h-[200px]" />
//           <img src={BeefBurger} alt="BeefBurger" className="h-[140px] sm:h-[180px] md:h-[200px]" />
//           <img src={Burger} alt="Burger" className="h-[140px] sm:h-[180px] md:h-[200px]" />
//           <img src={Pasta} alt="Pasta" className="h-[140px] sm:h-[180px] md:h-[200px]" />
//         </div>
//       </main>
//     </section>
//   );
// }

// export default Section8;
