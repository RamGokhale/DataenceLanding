 import React from 'react'
 import header from "../assets/heade.png";

const Landing = () => {
   return (
    <div className="bg-white flex justify-center xl:px-20 lg:px-16 px-6 ">
   <div className="relative bg-[#E2F4FE] flex items-center rounded-4xl w-full xl:h-[33rem] lg:h-[28rem] lg:px-20 md:px-9 px-2 py-6 sm:px-5">
  <div className="w-full sm:w-1/2 xl:py-10 text-center sm:text-left">
    <h1 className="text-[#253E52] font-bold xl:text-[40px] sm:text-xl xl:leading-14 sm:leading-8 sm:pb-7 pb-3 tracking-wide md:text-[25px] md:leading-10 text-[20px] lg:text-3xl lg:leading-12">
      Accelerating Legal <br /> Innovation: Smarter <br /> Tools, Faster Outcomes
    </h1>
    <p className="text-[#787878] xl:text-[18px] font-light xl:leading-[28px] lg:pt-4 md:text-[14px] text-[10px] sm:text-[10px]">
      Making legal processes faster and smarter with <br />
      technology. Simplify compliance, reduce <br />
      complexity, and stay ahead with Datence.
    </p>
    <div className="mt-8">
      <button className="text-[#253E52] border-2 rounded-md border-[#253E52] px-6 py-2 hover:bg-[#253E52] hover:text-white transition">
        Know more
      </button>
    </div>
  </div>

  {/* Image Section */}
  <div className=" w-1/2 h-full hidden sm:block absolute top-0 right-0">
    <img
      src={header}
      className="absolute top-0 right-0 h-full object-cover "
      alt="Header Image"
    />
  </div>
</div>

</div>

  )
 }

 export default Landing
