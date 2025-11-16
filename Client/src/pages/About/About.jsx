import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assuming you have these assets; replace with actual paths if needed
import delivery_Bg from "../../assets/Section8/Bg.png";
import Bg from "../../assets/Section2/Bg.png"

import DeliveryMen from "../../assets/Section8/delivery-man.png";
import Zinger from "../../assets/Section8/Zinger.png";
import Pasta from "../../assets/Section8/Pasta.png";
import CheseeBoll from "../../assets/Section8/CheeseBoll.png";
import BeefBurger from "../../assets/Section8/BeefBurger.png";
import Burger from "../../assets/Section8/Burger.png";

function About() {
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
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // sm
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640, // mobile
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className='relative bg-white flex flex-col overflow-hidden'>
            {/* Hero Section */}
            <div className='relative w-full h-[400px] md:h-[500px] bg-gray-500 flex items-center justify-center' style={{backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className='text-center text-white px-4'>
                    <h1 className='text-3xl md:text-5xl font-bold mb-4'>About TasteNest</h1>
                    <p className='text-lg md:text-xl'>Discover our story, passion for food, and commitment to quality.</p>
                </div>
            </div>

            {/* About Content Section */}
            <div className='py-16 px-4 md:px-20'>
                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-2xl md:text-3xl font-bold text-center mb-8'>Our Story</h2>
                    <p className='text-gray-700 text-lg leading-relaxed mb-8'>
                        At TasteNest, we believe in serving the crispiest, most delicious fast foods with every bite. Founded in 2020, our mission is to bring joy to your meals through fresh ingredients, quick service, and unbeatable taste. From our signature burgers to our special dishes, every item is crafted with care.
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div>
                            <h3 className='text-xl font-bold mb-4'>Our Mission</h3>
                            <p className='text-gray-700'>To provide high-quality, affordable fast food that delights our customers and keeps them coming back for more.</p>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold mb-4'>Our Vision</h3>
                            <p className='text-gray-700'>To be the leading fast-food chain known for innovation, sustainability, and exceptional customer service.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team/Testimonial Section (Similar to Section8) */}
            <div className='bg-[#F5F8FD] py-16 px-4 md:px-20'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='text-2xl md:text-3xl font-bold mb-8'>What Our Customers Say</h2>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-xl md:text-2xl font-bold mb-1'>Hammad Raza</h1>
                        <span className='text-[12px] text-yellow-500 capitalize mb-4'>Business CEO & co founder</span>
                        <p className='text-lg md:text-xl font-bold capitalize leading-relaxed mb-4'>
                            “Thank you for dinner last night. It was amazing!! I have say it’s <br className='hidden md:block' />
                            the best meal I have had in quite some time. will definitely be <br className='hidden md:block' />
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
                </div>
            </div>

            {/* Delivery Challenge Section (Similar to Section8) */}
            <div className='py-16 px-4 md:px-20'>
                <div className='max-w-6xl mx-auto'>
                    <div className='h-auto md:h-[450px] bg-gray-500 rounded-md flex flex-col md:flex-row' style={{backgroundImage: `url(${delivery_Bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        <div className='flex flex-col w-full md:w-[50%] py-8 md:py-32 px-4 md:px-16 text-center md:text-left'>
                            <span className='text-[12px] text-yellow-500 font-bold'>Crispy, Every Bite Taste</span>
                            <h1 className='text-2xl md:text-4xl text-white font-semibold mt-2'>
                                30 Minutes Fast <br /> <span className='text-yellow-500'>Delivery</span> Challenge
                            </h1>
                            <button className='w-[150px] h-[50px] bg-white rounded-md mt-4 md:mt-8 mx-auto md:mx-0'>Order Now</button>
                        </div>
                        <div className='flex flex-col w-full md:w-[50%] justify-center items-center mt-4 md:mt-0'>
                            <img src={DeliveryMen} alt="Delivery Man" className='w-full max-w-sm md:max-w-full' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Food Images Slider (Similar to Section8) */}
            <div className='py-16 px-4 md:px-20'>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='text-2xl md:text-3xl font-bold text-center mb-8'>Our Popular Dishes</h2>
                    <Slider {...settings}>
                        <div>
                            <img src={Pasta} alt="Pasta" className='h-[200px] md:h-[250px] w-full object-cover rounded-lg' />
                        </div>
                        <div>
                            <img src={Zinger} alt="Zinger" className='h-[200px] md:h-[250px] w-full object-cover rounded-lg' />
                        </div>
                        <div>
                            <img src={CheseeBoll} alt="Cheese Boll" className='h-[200px] md:h-[250px] w-full object-cover rounded-lg' />
                        </div>
                        <div>
                            <img src={BeefBurger} alt="Beef Burger" className='h-[200px] md:h-[250px] w-full object-cover rounded-lg' />
                        </div>
                        <div>
                            <img src={Burger} alt="Burger" className='h-[200px] md:h-[250px] w-full object-cover rounded-lg' />
                        </div>
                        <div>
                            <img src={Pasta} alt="Pasta" className='h-[200px] md:h-[250px] w-full object-cover rounded-lg' />
                        </div>
                    </Slider>
                </div>
            </div>
           
        </section>
    );
}

export default About;
