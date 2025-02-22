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
        <p className="text-center font-light font-[poppins] text-[#787878] text-sm">
          Discover our cutting-edge apps and websites designed to enhance your
          productivity and simplify your digital life.
        </p>
      </div>

      {/* card section */}

      <div className="bg-white flex flex-wrap justify-center items-center gap-x-48   ">
       <div className='flex flex-col items-center gap-y-8'>
         {/* Card 1 */}
        <div className="relative bg-white border border-gray-300 rounded-2xl shadow-lg text-center w-80 h-[400px]">
          {/* Dark Top Border */}
          <div className="absolute top-0 left-0 w-full h-4 bg-gray-900 rounded-t-2xl"></div>

          <div className="flex justify-center mb-6 mt-6">
            <img
              src={card}
              alt="Abyd"
              className="w-70 h-40 object-contain rounded-lg"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-900">Abyd</h3>
          <p className="text-gray-600 mt-3 text-sm">
            A powerful trademark management tool that simplifies searching and
            reporting.
          </p>
        </div>
        <button className="bg-gray-900 text-white py-3 px-8 rounded-md hover:bg-gray-700">
          Explore Abyd
        </button>
       </div>
       <div className='flex flex-col items-center gap-y-8'>
         {/* Card 2 */}
        <div className="relative bg-white border border-gray-300 rounded-2xl shadow-lg text-center w-80 h-[400px]">
          {/* Dark Top Border */}
          <div className="absolute top-0 left-0 w-full h-4 bg-gray-900 rounded-t-2xl"></div>

          <div className="flex justify-center mb-6 mt-6">
            <img
              src={scripta}
              alt="Scripta"
              className="w-70 h-40 object-contain rounded-lg"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-900">Scripta</h3>
          <p className="text-gray-600 mt-3 text-sm">
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
  )
}

export default Products
