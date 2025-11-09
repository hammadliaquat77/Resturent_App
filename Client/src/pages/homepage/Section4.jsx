// import React from 'react'
// import Bg from "../../assets/Section4/Bg.png"

// function Section4() {
//     return (
//         <section className='relative min-h-[62vh] bg-[#F5F8FD] flex flex-col overflow-hidden'
//             style={{ backgroundImage: `url(${Bg})` }}>
//             <main className='md:px-50 py-20'>
//                 <div className='flex flex-col'>
//                     <span className='text-[12px] text-green-500 font-bold'>CRISPY, EVERY BITE TASTE</span>
//                     <h1 className='text-4xl font-bold mb-7 '>Trending Food Combo <br />
//                         Offer Less <span className='text-green-500'>20%</span>
//                     </h1>
//                     <p className='text-[11px]'>A team of dreamers and doers building unique interactive music and art festivals.</p>

//                     {/* colorfull div */}
//                     <div className=' flex flex-col mt-6 gap-4'>
//                        <div className='w-[330px] h-[50px] bg-[#F4F1EA] rounded-md'>
//                           <div className='flex px-5 items-center'>
//                               <div className='flex flex-col relative '>
//                                 <span className='text-[8px] absolute mt-1'>The</span>
//                                 <h2 className='font-bold absolute mt-3'>Chiken</h2>
//                                 <span className='text-[9px] absolute mt-8 ml-6'>Combo</span>
//                               </div>
//                               <div className='flex'>
//                                 <span className='text-[12px] absolute ml-20 mt-4 font-bold'>30% Off 4pcs Hot Crispy & 8 Pcs Wing </span>
//                               </div>
//                           </div>
//                        </div>

//                        <div className='w-[330px] h-[50px] bg-[#FFC222] rounded-md'>
//                           <div className='flex px-5 items-center'>
//                               <div className='flex flex-col relative '>
//                                 <span className='text-[8px] absolute mt-1'>The</span>
//                                 <h2 className='font-bold absolute mt-3'>Chiken</h2>
//                                 <span className='text-[9px] absolute mt-8 ml-6'>Combo</span>
//                               </div>
//                               <div className='flex'>
//                                 <span className='text-[12px] absolute ml-20 mt-4 font-bold'>30% Off 4pcs Hot Crispy & 8 Pcs Wing </span>
//                               </div>
//                           </div>
//                        </div>

//                        <div className='w-[330px] h-[50px] bg-[#F4F1EA] rounded-md'>
//                           <div className='flex px-5 items-center'>
//                               <div className='flex flex-col relative '>
//                                 <span className='text-[8px] absolute mt-1'>The</span>
//                                 <h2 className='font-bold absolute mt-3'>Chiken</h2>
//                                 <span className='text-[9px] absolute mt-8 ml-6'>Combo</span>
//                               </div>
//                               <div className='flex'>
//                                 <span className='text-[12px] absolute ml-20 mt-4 font-bold'>30% Off 4pcs Hot Crispy & 8 Pcs Wing </span>
//                               </div>
//                           </div>
//                        </div>

//                     </div>

//                 </div>
//             </main>
//         </section>
//     )
// }

// export default Section4





import React from 'react'
import Bg from "../../assets/Section4/Bg.png"

function Section4() {
  return (
    <section
      className="relative bg-[#F5F8FD] flex flex-col justify-center items-center overflow-hidden bg-cover bg-center bg-no-repeat py-16 sm:py-20 md:py-24"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <main className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[80%] mx-auto text-center md:text-left">
        <div className="flex flex-col justify-center items-center md:items-start">
          {/* Top Text */}
          <span className="text-[10px] sm:text-[12px] text-green-500 font-bold tracking-wider uppercase">
            CRISPY, EVERY BITE TASTE
          </span>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 leading-snug">
            Trending Food Combo <br />
            Offer Less <span className="text-green-500">20%</span>
          </h1>

          {/* Description */}
          <p className="text-[11px] sm:text-[13px] md:text-[14px] text-gray-600 max-w-[400px]">
            A team of dreamers and doers building unique interactive music and art festivals.
          </p>

          {/* Colorful Boxes */}
          <div className="flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-8 w-full items-center md:items-start">
            
            {/* Box 1 */}
            <div className="w-[90%] sm:w-[330px] h-[55px] sm:h-[50px] bg-[#F4F1EA] rounded-md flex items-center justify-start px-4 sm:px-5 relative overflow-hidden">
              <div className="flex flex-col relative">
                <span className="text-[8px] sm:text-[9px]">The</span>
                <h2 className="font-bold text-[13px] sm:text-[14px] mt-1">Chicken</h2>
                <span className="text-[9px] sm:text-[10px] ml-4">Combo</span>
              </div>
              <span className="text-[10px] sm:text-[12px] font-bold ml-14 sm:ml-20">
                30% Off 4pcs Hot Crispy & 8 Pcs Wing
              </span>
            </div>

            {/* Box 2 */}
            <div className="w-[90%] sm:w-[330px] h-[55px] sm:h-[50px] bg-[#FFC222] rounded-md flex items-center justify-start px-4 sm:px-5 relative overflow-hidden">
              <div className="flex flex-col relative">
                <span className="text-[8px] sm:text-[9px]">The</span>
                <h2 className="font-bold text-[13px] sm:text-[14px] mt-1">Chicken</h2>
                <span className="text-[9px] sm:text-[10px] ml-4">Combo</span>
              </div>
              <span className="text-[10px] sm:text-[12px] font-bold ml-14 sm:ml-20">
                30% Off 4pcs Hot Crispy & 8 Pcs Wing
              </span>
            </div>

            {/* Box 3 */}
            <div className="w-[90%] sm:w-[330px] h-[55px] sm:h-[50px] bg-[#F4F1EA] rounded-md flex items-center justify-start px-4 sm:px-5 relative overflow-hidden">
              <div className="flex flex-col relative">
                <span className="text-[8px] sm:text-[9px]">The</span>
                <h2 className="font-bold text-[13px] sm:text-[14px] mt-1">Chicken</h2>
                <span className="text-[9px] sm:text-[10px] ml-4">Combo</span>
              </div>
              <span className="text-[10px] sm:text-[12px] font-bold ml-14 sm:ml-20">
                30% Off 4pcs Hot Crispy & 8 Pcs Wing
              </span>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Section4
