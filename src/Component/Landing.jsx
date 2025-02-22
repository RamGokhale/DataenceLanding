import React from 'react'
import header from "../assets/heade.png";

const Landing = () => {
  return (
    <div className="bg-white flex justify-center px-20">
            {/* Full-width section */}
            <div className="bg-[#E2F4FE] flex items-center justify-between rounded-4xl w-full h-[35rem] px-20 py-10 gap-x-10">
              {/* Left Side: Text */}
              <div className="w-1/2 font-[poppins]">
                <h1 className="text-[#253E52] font-semibold text-[30px] leading-[50px] pb-7">
                  Accelerating Legal <br /> Innovation: Smarter <br /> Tools, Faster
                  Outcomes
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
    
              {/* Right Side: Image */}
              <div className="flex justify-center">
                <img
                  src={header}
                  className="w-ful h-auto "
                  alt="Header Image"
                />
              </div>
            </div>
          </div>
  )
}

export default Landing
