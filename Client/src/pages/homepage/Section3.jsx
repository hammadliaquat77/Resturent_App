import React from 'react'

function Section3() {

    const foodItems = [
        {
            id: 1,
            name: "Chicken Burger",
            oldPrice: 500,
            newPrice: 400,
            discount: "-25%",
            image: "https://via.placeholder.com/120x120?text=Chicken",
        },
        {
            id: 2,
            name: "Beef Burger",
            oldPrice: 600,
            newPrice: 450,
            discount: "-30%",
            image: "https://via.placeholder.com/120x120?text=Beef",
        },
        {
            id: 3,
            name: "Zinger Roll",
            oldPrice: 350,
            newPrice: 280,
            discount: "-20%",
            image: "https://via.placeholder.com/120x120?text=Roll",
        },
        {
            id: 4,
            name: "Cheese Pizza",
            oldPrice: 1200,
            newPrice: 900,
            discount: "-25%",
            image: "https://via.placeholder.com/120x120?text=Pizza",
        },
        {
            id: 5,
            name: "Fries",
            oldPrice: 300,
            newPrice: 220,
            discount: "-27%",
            image: "https://via.placeholder.com/120x120?text=Fries",
        },
        {
            id: 6,
            name: "Nuggets",
            oldPrice: 400,
            newPrice: 320,
            discount: "-20%",
            image: "https://via.placeholder.com/120x120?text=Nuggets",
        },
        {
            id: 7,
            name: "BBQ Platter",
            oldPrice: 1500,
            newPrice: 1200,
            discount: "-20%",
            image: "https://via.placeholder.com/120x120?text=BBQ",
        },
        {
            id: 8,
            name: "Chicken Wings",
            oldPrice: 600,
            newPrice: 480,
            discount: "-20%",
            image: "https://via.placeholder.com/120x120?text=Wings",
        },
        {
            id: 9,
            name: "Club Sandwich",
            oldPrice: 550,
            newPrice: 440,
            discount: "-20%",
            image: "https://via.placeholder.com/120x120?text=Sandwich",
        },
        {
            id: 10,
            name: "Grilled Fish",
            oldPrice: 1000,
            newPrice: 800,
            discount: "-20%",
            image: "https://via.placeholder.com/120x120?text=Fish",
        },
    ];


    return (
        <section className='relative w-full min-h-[92vh] bg-[#F5F8FD] flex flex-col  overflow-hidden'>
            <div className='text-center py-14 flex flex-col gap-3'>
                <h2 className='text-green-600 text-sm'>crispy, every bite taste</h2>
                <h1 className='text-3xl font-bold'>Popular Fast Foods</h1>
            </div>
            <main className='md:px-40 md:py-3 '>
                {/* cards */}
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                    {/* Card */}
                    {foodItems.map((item)=> (
                    <div key={item.id} className='flex flex-col items-center'>
                        <div className='h-[200px] w-[200px] gap-6 bg-white flex flex-col justify-center items-center rounded-xl'>
                            <div className='h-[120px] w-[120px] bg-gray-400 rounded-full'>{}</div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex mt-4 justify-center items-center gap-2'>
                                <span className='text-[10px] px-2 py-2 bg-[#FFC222] text-black text-md font-bold'>{item.discount}</span>
                                <span className='text-[14px] text-gray-400 font-semibold line-through'>Rs.{item.oldPrice}</span>
                                <span className='text-[14px] text-gray-500 font-semibold'>Rs.{item.newPrice}</span>
                            </div>
                            <p className='text-md font-bold flex justify-center items-center'>{item.name}</p>
                        </div>
                    </div>
                    ))}


                </div>
            </main>
        </section>
    )
}

export default Section3