import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useSelector } from 'react-redux';

// Assuming you have these assets; replace with actual paths if needed
// import Bg from "../../assets/Section8/Bg.png";
import Bg from "../../assets/Section2/Bg.png"
import DeliveryMen from "../../assets/Section8/delivery-man.png";
import Zinger from "../../assets/Section8/Zinger.png";
import Pasta from "../../assets/Section8/Pasta.png";
import CheseeBoll from "../../assets/Section8/CheeseBoll.png";
import BeefBurger from "../../assets/Section8/BeefBurger.png";
import Burger from "../../assets/Section8/Burger.png";

function Contact() {

    const darkMode = useSelector((state)=> state.darkMode.darkMode);

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
                    <h1 className='text-3xl md:text-5xl font-bold mb-4 text-[#FFC222]'>Contact Us</h1>
                    <p className='text-lg md:text-xl'>Get in touch with TasteNest for reservations, feedback, or inquiries.</p>
                </div>
            </div>

            {/* Contact Form and Info Section */}
            <div className={`py-16 px-4 md:px-20 ${darkMode ? "bg-gray-900 text-white" : "text-gray-700"} `}>
                <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
                    {/* Contact Info */}
                    <div>
                        <h2 className='text-2xl md:text-3xl font-bold mb-8'>Get In Touch</h2>
                        <div className='space-y-6'>
                            <div className='flex items-start space-x-4'>
                                <div className='bg-red-500 text-white p-3 rounded-full'>
                                    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>Address</h3>
                                    <p className={`${darkMode ? "text-white" : "text-gray-700"}`}>Karachi City Pakistan</p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-4'>
                                <div className='bg-red-500 text-white p-3 rounded-full'>
                                    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
                                        <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>Phone</h3>
                                    <p className={`${darkMode ? "text-white" : "text-gray-700"}`}>+92 316-3093-120</p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-4'>
                                <div className='bg-red-500 text-white p-3 rounded-full'>
                                    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
                                        <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                                        <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>Email</h3>
                                    <p className={`${darkMode ? "text-white" : "text-gray-700"}`}>hammadraza9391@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <h3 className='font-bold text-lg mb-4'>Business Hours</h3>
                            <p className={`${darkMode ? "text-white" : "text-gray-700"}`}>Monday - Saturday: 12:00pm - 12:00am</p>
                            <p className={`${darkMode ? "text-white" : "text-gray-700"}`}>Closed on Sunday</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className='text-2xl md:text-3xl font-bold mb-8'>Send Us a Message</h2>
                        <form className='space-y-6'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <input
                                    type='text'
                                    placeholder='Your Name'
                                    className={`p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500
                                        ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
                                    required
                                />
                                <input
                                    type='email'
                                    placeholder='Your Email'
                                    className={`p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 
                                         ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
                                    required
                                />
                            </div>
                            <input
                                type='text'
                                placeholder='Subject'
                                className={`w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 *:
                                     ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
                                required
                            />
                            <textarea
                                placeholder='Your Message'
                                rows='6'
                                className={`w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 
                                     ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
                                required
                            ></textarea>
                            <button
                                type='submit'
                                className='bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition'
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Map Section (Placeholder) */}
            <div className={`py-16 px-4 md:px-20 bg-gray-100 ${darkMode ? "bg-gray-800" : ""}`}>
                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-2xl md:text-3xl font-bold text-center mb-8'>Find Us</h2>
                    <div className='h-64 bg-gray-300 rounded-lg flex items-center justify-center'>
                        <p className='text-gray-600'>Map Placeholder - Embed Google Maps here</p>
                    </div>
                </div>
            </div>

            {/* Featured Dishes Slider */}
            <div className={`py-16 px-4 md:px-20 ${darkMode ? "bg-gray-900" : ""}`}>
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

export default Contact;
