import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assuming you have these assets; replace with actual paths if needed
// import Bg from "../../assets/Section8/Bg.png";
import Bg from "../../assets/Section2/Bg.png"

import DeliveryMen from "../../assets/Section8/delivery-man.png";
import Zinger from "../../assets/Section8/Zinger.png";
import Pasta from "../../assets/Section8/Pasta.png";
import CheseeBoll from "../../assets/Section8/CheeseBoll.png";
import BeefBurger from "../../assets/Section8/BeefBurger.png";
import Burger from "../../assets/Section8/Burger.png";

function Blog() {
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

    const blogPosts = [
        {
            id: 1,
            title: "The Ultimate Guide to Crispy Burgers",
            excerpt: "Learn how to make the perfect crispy burger at home with our step-by-step guide.",
            image: Burger,
            date: "October 10, 2023",
            author: "Hammad Raza"
        },
        {
            id: 2,
            title: "Exploring Pasta Varieties Around the World",
            excerpt: "Dive into the rich history and flavors of pasta from different cultures.",
            image: Pasta,
            date: "September 25, 2023",
            author: "Chef Maria"
        },
        {
            id: 3,
            title: "Zinger Chicken: A Spicy Delight",
            excerpt: "Discover the secrets behind our famous zinger chicken recipe.",
            image: Zinger,
            date: "August 15, 2023",
            author: "Hammad Raza"
        },
        {
            id: 4,
            title: "Cheese Balls: The Perfect Snack",
            excerpt: "How to make cheesy, crispy cheese balls that everyone will love.",
            image: CheseeBoll,
            date: "July 5, 2023",
            author: "Chef Maria"
        },
        {
            id: 5,
            title: "Beef Burgers: A Classic Favorite",
            excerpt: "Explore the art of crafting the juiciest beef burgers.",
            image: BeefBurger,
            date: "June 20, 2023",
            author: "Hammad Raza"
        },
        {
            id: 6,
            title: "Fast Food Trends in 2023",
            excerpt: "Stay updated with the latest trends in the fast food industry.",
            image: Pasta,
            date: "May 10, 2023",
            author: "Chef Maria"
        }
    ];

    return (
        <section className='relative bg-white flex flex-col overflow-hidden'>
            {/* Hero Section */}
            <div className='relative w-full h-[400px] md:h-[500px] bg-gray-500 flex items-center justify-center' style={{backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className='text-center text-white px-4'>
                    <h1 className='text-3xl md:text-5xl font-bold mb-4'>TasteNest Blog</h1>
                    <p className='text-lg md:text-xl'>Recipes, Tips, and Stories from Our Kitchen</p>
                </div>
            </div>

            {/* Blog Posts Section */}
            <div className='py-16 px-4 md:px-20'>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='text-2xl md:text-3xl font-bold text-center mb-12'>Latest Posts</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {blogPosts.map((post) => (
                            <div key={post.id} className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                                <img src={post.image} alt={post.title} className='w-full h-48 object-cover' />
                                <div className='p-6'>
                                    <h3 className='text-xl font-bold mb-2'>{post.title}</h3>
                                    <p className='text-gray-600 mb-4'>{post.excerpt}</p>
                                    <div className='flex justify-between items-center text-sm text-gray-500'>
                                        <span>{post.date}</span>
                                        <span>By {post.author}</span>
                                    </div>
                                    <button className='mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition'>Read More</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Dishes Slider */}
            <div className='bg-[#F5F8FD] py-16 px-4 md:px-20'>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='text-2xl md:text-3xl font-bold text-center mb-8'>Featured Dishes</h2>
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

            {/* Newsletter Section */}
            <div className='py-16 px-4 md:px-20 bg-gray-100'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='text-2xl md:text-3xl font-bold mb-4'>Subscribe to Our Newsletter</h2>
                    <p className='text-gray-700 mb-8'>Get the latest recipes, tips, and updates delivered to your inbox.</p>
                    <form className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="p-3 rounded-lg border border-gray-300 flex-1 max-w-md"
                        />
                        <button
                            type="submit"
                            className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

        </section>
    );
}

export default Blog;
