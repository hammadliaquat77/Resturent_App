// import React from 'react';
// import Bg from "../../assets/Section8/Bg.png";
// import DeliveryMen from "../../assets/Section8/delivery-man.png";

// import Zinger from "../../assets/Section8/Zinger.png";
// import Pasta from "../../assets/Section8/Pasta.png";
// import CheseeBoll from "../../assets/Section8/CheeseBoll.png";
// import BeefBurger from "../../assets/Section8/BeefBurger.png";
// import Burger from "../../assets/Section8/Burger.png";

// function Section8() {
//     return (
//         <section className='relative bg-white flex flex-col justify-center items-center overflow-hidden py-10'>
//             <main className='mt-4'>
//                 <div className='flex flex-col justify-center items-center'>
//                     <h1 className='text-2xl font-bold mb-1'>Hammad Raza</h1>
//                     <span className='text-[12px] text-yellow-500 capitalize mb-4'>Business CEO & co founder</span>
//                     <p className='text-xl font-bold capitalize'>“Thank you for dinner last night. It was amazing!! I have say it’s <br />
//                         the best meal I have had in quite some time. will definitely be <br />
//                         seeing more eating next year.”
//                     </p>
//                     <div className='mt-3 text-[12px]'>
//                         ⭐⭐⭐⭐⭐
//                     </div>
//                     <div className='flex gap-3 mt-5'>
//                         <div className='h-10 w-10 bg-gray-600 rounded-full'></div>
//                         <div className='h-10 w-10 bg-gray-600 rounded-full'></div>
//                         <div className='h-10 w-10 bg-gray-600 rounded-full'></div>
//                     </div>
//                 </div>
//             </main>

//             {/* Second Section */}
//             <main className='mt-10'>
//                <div className='w-[900px] h-[450px] bg-gray-500 rounded-md flex' style={{backgroundImage: `url(${Bg})`}} >
//                   {/* left */}
//                   <div className='flex flex-col w-[50%] py-32 px-16'>
//                      <span className='text-[12px] text-yellow-500 font-bold'>Crispy, Every Bite Taste</span>
//                      <h1 className='text-4xl text-white font-semibold '>30 Minutes Fast <br /> <span className='text-yellow-500'>Delivery</span> Challenge</h1>
//                      <button className='w-[150px] h-[50px] bg-white rounded-md mt-8'>Order Now</button>
//                   </div>
//                   {/* right */}
//                   <div className='flex flex-col w-[50%] justify-center items-center '>
//                      <img src={DeliveryMen} alt="" className='w-full' />
//                   </div>
//                </div>
//             </main>

//             {/* Third Section */}
//             <main className='mt-10'>
//                 <div className='w-[1500px] h-[250px] bg-green-900 flex'>
//                     <img src={Pasta} alt="" className='h-[250px]'/>
//                     <img src={Zinger} alt="" className='h-[250px]'/>
//                     <img src={CheseeBoll} alt="" className='h-[250px]'/>
//                     <img src={BeefBurger} alt="" className='h-[250px]'/>
//                     <img src={Burger} alt="" className='h-[250px]'/>
//                     <img src={Pasta} alt="" className='h-[250px]'/>
//                 </div>
//             </main>

//         </section>
//     )
// }

// export default Section8










// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Bg from "../../assets/Section8/Bg.png";
// import DeliveryMen from "../../assets/Section8/delivery-man.png";

// import Zinger from "../../assets/Section8/Zinger.png";
// import Pasta from "../../assets/Section8/Pasta.png";
// import CheseeBoll from "../../assets/Section8/CheeseBoll.png";
// import BeefBurger from "../../assets/Section8/BeefBurger.png";
// import Burger from "../../assets/Section8/Burger.png";

// function Section8() {
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 5, // default (desktop)
//         slidesToScroll: 1,
//         arrows: true,
//         responsive: [
//             {
//                 breakpoint: 1024, // md
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 768, // sm
//                 settings: {
//                     slidesToScroll: 1,
//                     slidesToShow: 2
//                 },
//             },
//             {
//                 breakpoint: 640, // mobile
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <section className='relative bg-white flex flex-col justify-center items-center overflow-hidden py-10 px-4 md:px-8'>
//             {/* First Section - Testimonial */}
//             <main className='mt-4 max-w-4xl'>
//                 <div className='flex flex-col justify-center items-center text-center'>
//                     <h1 className='text-xl md:text-2xl font-bold mb-1'>Hammad Raza</h1>
//                     <span className='text-[12px] text-yellow-500 capitalize mb-4'>Business CEO & co founder</span>
//                     <p className='text-lg md:text-xl font-bold capitalize leading-relaxed'>
//                         “Thank you for dinner last night. It was amazing!! I have say it’s <br className='hidden md:block' />
//                         the best meal I have had in quite some time. will definitely be <br className='hidden md:block' />
//                         seeing more eating next year.”
//                     </p>
//                     <div className='mt-3 text-[12px]'>
//                         ⭐⭐⭐⭐⭐
//                     </div>
//                     <div className='flex gap-3 mt-5'>
//                         <div className='h-10 w-10 bg-gray-600 rounded-full'></div>
//                         <div className='h-10 w-10 bg-gray-600 rounded-full'></div>
//                         <div className='h-10 w-10 bg-gray-600 rounded-full'></div>
//                     </div>
//                 </div>
//             </main>

//             {/* Second Section - Delivery Challenge */}
//             <main className='mt-10 w-full max-w-6xl'>
//                 <div className='h-auto md:h-[450px] bg-gray-500 rounded-md flex flex-col md:flex-row' style={{backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
//                     {/* left */}
//                     <div className='flex flex-col w-full md:w-[50%] py-8 md:py-32 px-4 md:px-16 text-center md:text-left'>
//                         <span className='text-[12px] text-yellow-500 font-bold'>Crispy, Every Bite Taste</span>
//                         <h1 className='text-2xl md:text-4xl text-white font-semibold mt-2'>
//                             30 Minutes Fast <br /> <span className='text-yellow-500'>Delivery</span> Challenge
//                         </h1>
//                         <button className='w-[150px] h-[50px] bg-white rounded-md mt-4 md:mt-8 mx-auto md:mx-0'>Order Now</button>
//                     </div>
//                     {/* right */}
//                     <div className='flex flex-col w-full md:w-[50%] justify-center items-center mt-4 md:mt-0'>
//                         <img src={DeliveryMen} alt="Delivery Man" className='w-full max-w-sm md:max-w-full' />
//                     </div>
//                 </div>
//             </main>

//             {/* Third Section - Food Images Slider */}
//             <main className='mt-10 w-full max-w-7xl'>
//                 <Slider {...settings}>
//                     <div>
//                         <img src={Pasta} alt="Pasta" className='h-[200px] md:h-[250px] w-full object-cover rounded-md' />
//                     </div>
//                     <div>
//                         <img src={Zinger} alt="Zinger" className='h-[200px] md:h-[250px] w-full object-cover rounded-md' />
//                     </div>
//                     <div>
//                         <img src={CheseeBoll} alt="Cheese Boll" className='h-[200px] md:h-[250px] w-full object-cover rounded-md' />
//                     </div>
//                     <div>
//                         <img src={BeefBurger} alt="Beef Burger" className='h-[200px] md:h-[250px] w-full object-cover rounded-md' />
//                     </div>
//                     <div>
//                         <img src={Burger} alt="Burger" className='h-[200px] md:h-[250px] w-full object-cover rounded-md' />
//                     </div>
//                     <div>
//                         <img src={Pasta} alt="Pasta" className='h-[200px] md:h-[250px] w-full object-cover rounded-md' />
//                     </div>
//                 </Slider>
//             </main>
//         </section>
//     )
// }

// export default Section8;



import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';

import Bg from "../../assets/Section8/Bg.png";
import DeliveryMen from "../../assets/Section8/delivery-man.png";

import Zinger from "../../assets/Section8/Zinger.png";
import Pasta from "../../assets/Section8/Pasta.png";
import CheseeBoll from "../../assets/Section8/CheeseBoll.png";
import BeefBurger from "../../assets/Section8/BeefBurger.png";
import Burger from "../../assets/Section8/Burger.png";

function Section8() {
    const darkMode = useSelector((state) => state.darkMode.darkMode);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // default (desktop)
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // md
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // sm
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2
                },
            },
            {
                breakpoint: 640, // mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className={`relative flex flex-col justify-center items-center overflow-hidden py-10 px-4 md:px-8 ${
            darkMode ? "bg-gray-800" : "bg-white"
        }`}>
            {/* First Section - Testimonial */}
            <main className='mt-4 max-w-4xl'>
                <div className='flex flex-col justify-center items-center text-center'>
                    <h1 className={`text-xl md:text-2xl font-bold mb-1 ${
                        darkMode ? "text-white" : "text-black"
                    }`}>Hammad Raza</h1>
                    <span className='text-[12px] text-yellow-500 capitalize mb-4'>Business CEO & co founder</span>
                    <p className={`text-lg md:text-xl font-bold capitalize leading-relaxed ${
                        darkMode ? "text-gray-300" : "text-black"
                    }`}>
                        “Thank you for dinner last night. It was amazing!! I have say it’s <br className='hidden md:block' />
                        the best meal I have had in quite some time. will definitely be <br className='hidden md:block' />
                        seeing more eating next year.”
                    </p>
                    <div className='mt-3 text-[12px]'>
                        ⭐⭐⭐⭐⭐
                    </div>
                    <div className='flex gap-3 mt-5'>
                        <div className={`h-10 w-10 rounded-full ${
                            darkMode ? "bg-gray-600" : "bg-gray-600"
                        }`}></div>
                        <div className={`h-10 w-10 rounded-full ${
                            darkMode ? "bg-gray-600" : "bg-gray-600"
                        }`}></div>
                        <div className={`h-10 w-10 rounded-full ${
                            darkMode ? "bg-gray-600" : "bg-gray-600"
                        }`}></div>
                    </div>
                </div>
            </main>

            {/* Second Section - Delivery Challenge */}
            <main className='mt-10 w-full max-w-6xl'>
                <div className={`h-auto md:h-[450px] rounded-md flex flex-col md:flex-row ${
                    darkMode ? "bg-gray-700" : "bg-gray-500"
                }`} style={{backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    {/* left */}
                    <div className='flex flex-col w-full md:w-[50%] py-8 md:py-32 px-4 md:px-16 text-center md:text-left'>
                        <span className='text-[12px] text-yellow-500 font-bold'>Crispy, Every Bite Taste</span>
                        <h1 className='text-2xl md:text-4xl text-white font-semibold mt-2'>
                            30 Minutes Fast <br /> <span className='text-yellow-500'>Delivery</span> Challenge
                        </h1>
                        <button className={`w-[150px] h-[50px] rounded-md mt-4 md:mt-8 mx-auto md:mx-0 ${
                            darkMode ? "bg-gray-200 text-black hover:bg-gray-300" : "bg-white text-black hover:bg-gray-100"
                        }`}>Order Now</button>
                    </div>
                    {/* right */}
                    <div className='flex flex-col w-full md:w-[50%] justify-center items-center mt-4 md:mt-0'>
                        <img src={DeliveryMen} alt="Delivery Man" className='w-full max-w-sm md:max-w-full' />
                    </div>
                </div>
            </main>

            {/* Third Section - Food Images Slider */}
            <main className='mt-10 w-full max-w-7xl'>
                <Slider {...settings}>
                    <div>
                        <img src={Pasta} alt="Pasta" className='h-[200px] md:h-[250px] w-full object-cover rounded-md' />
                    </div>
                    <div>
                        <img src={Zinger} alt="Zinger" className='h-[200px] md:h-[250px] w-full object-cover rounded-md' />
                    </div>
                    <div>
                        <img src={CheseeBoll} alt="Cheese Boll" className='h-[200px] md:h-[250px] w-full object-cover rounded-md' />
                    </div>
                    <div>
                        <img src={BeefBurger} alt="Beef Burger" className='h-[200px] md:h-[250px] w-full object-cover rounded-md' />
                    </div>
                    <div>
                        <img src={Burger} alt="Burger" className='h-[200px] md:h-[250px] w-full object-cover rounded-md' />
                    </div>
                    <div>
                        <img src={Pasta} alt="Pasta" className='h-[200px] md:h-[250px] w-full object-cover rounded-md' />
                    </div>
                </Slider>
            </main>
        </section>
    )
}

export default Section8;
