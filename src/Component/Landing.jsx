import React from 'react'
import header from "../assets/heade.png";

const Landing = () => {
  return (
    <div className="bg-white flex justify-center xl:px-20 lg:px-16 px-6">
  <div className="bg-[#E2F4FE] flex items-center rounded-4xl w-full xl:h-[33rem] lg:h-[28rem] lg:px-20">
    <div className="w-full sm:w-1/2  xl:py-10  text-center sm:text-left">
      <h1 className="text-[#253E52] font-bold xl:text-[40px] sm:text-3xl text-2xl xl:leading-14 sm:leading-12 sm:pb-7 pb-3 tracking-wide">
        Accelerating Legal <br /> Innovation: Smarter <br /> Tools, Faster Outcomes
      </h1>
      <p className="text-[#787878] xl:text-[18px] font-light xl:leading-[28px] pt-4  text-sm">
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

    <div className="hidden  sm:w-1/2 sm:flex justify-end">
      <img
        src={header}
        className="w-full 2xl:scale-150 lg:scale-135 relative xl:bottom-15 lg:bottom-20 xl:left-26 left-24 h-auto object-cover rounded-2xl"
        alt="Header Image"
      />
    </div>
  </div>
</div>

  )
}

export default Landing

