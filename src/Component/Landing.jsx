import React from 'react'
import header from "../assets/heade.png";

const Landing = () => {
  return (
    <div className="bg-white flex justify-center px-20">
  <div className="bg-[#E2F4FE] flex items-center rounded-4xl w-full h-[33rem] px-20">
    <div className="w-1/2 py-10">
      <h1 className="text-[#253E52] font-bold text-[40px] leading-14 pb-7 tracking-wide">
        Accelerating Legal <br /> Innovation: Smarter <br /> Tools, Faster Outcomes
      </h1>
      <p className="text-[#787878] text-[18px] font-light leading-[28px] pt-4">
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

    <div className="w-1/2 flex justify-end">
      <img
        src={header}
        className="w-[150%] scale-150 relative bottom-10 left-20 h-auto object-cover rounded-2xl"
        alt="Header Image"
      />
    </div>
  </div>
</div>

  )
}

export default Landing

