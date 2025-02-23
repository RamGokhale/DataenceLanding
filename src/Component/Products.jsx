import React from 'react'
import card from "../assets/card.png";
import scripta from "../assets/scripta.png";


const Products = () => {
  return (
    <div className='mb-32'>
       <div className="flex flex-col justify-center items-center py-12  mb-8">
        <div className=" font-[poppins] font-semibold text-2xl  text-center text-[#253E52] pt-10 pb-3">
          Explore Our Digital Products
        </div>
        <p className="text-center font-light font-[poppins] text-[#787878] text-sm lg:w-full md:w-[35rem] sm:w-[30rem] w-[18rem] ">
          Discover our cutting-edge apps and websites designed to enhance your
          productivity and simplify your digital life.
        </p>
      </div>

      {/* card section */}

      <div className='w-full bg-white'>
        <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-center items-center  lg:gap-x-48 md:gap-x-10 sm:gap-x-4   ">
       <div className='flex flex-col items-center gap-y-8 py-3 md:mb-0 mb-10 '>
         {/* Card 1 */}
        <div className="relative bg-white border border-gray-300 rounded-2xl shadow-lg text-center md:w-80 md:h-[400px] sm:w-70 sm:h-[350px] w-[60] h-[300px]">
          {/* Dark Top Border */}
          <div className="absolute top-0 left-0 w-full h-4 bg-gray-900 rounded-t-2xl"></div>

          <div className="flex justify-center mb-6 mt-6">
            <img
              src={card}
              alt="Abyd"
              className="md:w-70 md:h-40 sm:w-60 sm:h-30  w-40 object-contain rounded-lg"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-900">Abyd</h3>
          <p className="text-gray-600 mt-3 md:text-sm sm:text-[16px] ">
            A powerful trademark management tool that simplifies searching and
            reporting.
          </p>
        </div>
        <button className="bg-gray-900 text-white py-3 px-8 rounded-md hover:bg-gray-700">
          Explore Abyd
        </button>
       </div>
       <div className='flex flex-col items-center gap-y-8 '>
         {/* Card 2 */}
        <div className="relative bg-white border border-gray-300 rounded-2xl shadow-lg text-center md:w-80 md:h-[400px] sm:w-70 sm:h-[350px]  w-[60] h-[300px]">
          {/* Dark Top Border */}
          <div className="absolute top-0 left-0 w-full h-4 bg-gray-900 rounded-t-2xl"></div>

          <div className="flex justify-center mb-6 mt-6">
            <img
              src={scripta}
              alt="Scripta"
              className="md:w-70 md:h-40 sm:w-60 sm:h-30 w-30  object-contain rounded-lg"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-900">Scripta</h3>
          <p className="text-gray-600 mt-3 md:text-sm sm:text-[16px]">
            Effortless trademark management—search trademarks and generate
            opinion reports with ease.
          </p>
        </div>
         <button className="bg-gray-900 text-white py-3 px-8 rounded-md hover:bg-gray-700">
          Explore Scripta
        </button>
       </div>
      </div>
      </div>

    </div>
  )
}

export default Products
