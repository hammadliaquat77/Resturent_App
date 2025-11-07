import React from 'react'
import Bg from "../../assets/Section2/Bg.png"
import Patato from "../../assets/Section2/patato.png"
import Tamato from "../../assets/Section2/tomato.png"

function Section2() {
  return (
    <section className='relative w-full min-h-[62vh] flex flex-col  overflow-hidden'
      style={{backgroundImage: `url(${Bg})`}}>

       <img src={Patato} alt="" className='md:w-24 w-12 absolute mt-90'/>
       <img src={Tamato} alt="" className='md:w-24 w-12 sm:w-16 absolute md:mt-[420px] md:ml-[1120px] mt-[100px] ml-[200px] sm:ml-[570px] sm:mt-[370px]'/>

         <div className='text-white md:px-40 px-7 sm:px-20 py-40 flex flex-col gap-1'>
            <span className='md:text-xl text-md sm:text-xl font-serif'>save 20%</span>
            <h1 className='lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-black'>Today's <span className='text-[#FFC222]'>Astackin</span> Day</h1>
            <div className='flex gap-3'>
            <p className='md:text-2xl text-md font-bold'>Grilled <span className='text-[#FFC222]'>Chicken</span> </p>
            <span className='flex justify-center items-center font-bold md:text-xl text-sm text-[#FFC222]'>$59,00</span>
            </div>
            <button className='md:w-40 md:h-20 h-10 w-20 rounded-2xl flex md:items-start items-center justify-center md:pt-4 text-[12px] md:text-xl cursor-pointer bg-[#EE284B]'>Order Now</button>
         </div>
    </section>
  )
}

export default Section2