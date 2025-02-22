import React from 'react'
import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";

const Crousel = () => {
  return (
    <div>
      <div className="text-center py-12 text-[#253E52] text-2xl font-[poppins] font-medium">
        {" "}
        Supported By{" "}
      </div>

      <div className="flex justify-between items-center px-20 py-12 bg-[#F7F7F799]">
        <img src={a} className="w-32" />
        <img src={b} className="w-32" />
        <img src={c} className="w-32" />
        <img src={a} className="w-32" />
        <img src={b} className="w-32" />
      </div>
    </div>
  )
}

export default Crousel
