import { NavLink } from "react-router-dom";
import logo from "../assets/log.png";
import header from "../assets/heade.png";
import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import ImageCarousel from "./imageCarousel";
import card from "../assets/card.png";
import loop from "../assets/loop.png";
import watch from "../assets/watch.png";
import AboutUs from "./AboutUs";
import MediaCoverge from "./MediaCoverge";
import Location from "./Location";
import Footer from "./Footer";
import KeyFeature from "./KeyFeature";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between  px-20 py-6 bg-white">
        {/* Logo Section */}
        <div>
          <img src={logo} alt="Logo" className="w-[146px]" />
        </div>

        {/* Navigation Links */}
        <div className="flex  gap-8 ">
          {[
            { name: "Home", path: "/" },
            { name: "About us", path: "/about" },
            { name: "Products", path: "/product" },
            { name: "Contact", path: "/contact" },
          ].map(item => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-[poppins] font-medium px-6 py-2 rounded-md transition duration-300 ${
                  isActive
                    ? "bg-[#253E52] text-white"
                    : "text-[#787878] hover:bg-[#253E52] hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
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
          <div className="w-1/2 flex justify-center">
            <img
              src={header}
              className="max-w-[90%] h-auto object-cover"
              alt="Header Image"
            />
          </div>
        </div>
      </div>

      {/* crousel  */}

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

      <div className="flex flex-col justify-center items-center py-12  mb-8">
        <div className=" font-[poppins] font-medium text-2xl  text-center text-[#253E52] py-9">
          Explore Our Digital Products
        </div>
        <p className="text-center font-light font-[poppins] text-[#787878] text-xl">
          Discover our cutting-edge apps and websites designed to enhance your
          productivity and simplify your digital life.
        </p>
      </div>

      {/* card section */}

      <div className="bg-white flex flex-wrap justify-center gap-x-48   ">
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
        {/* Card 2 */}
        <div className="relative bg-white border border-gray-300 rounded-2xl shadow-lg text-center w-80 h-[400px]">
          {/* Dark Top Border */}
          <div className="absolute top-0 left-0 w-full h-4 bg-gray-900 rounded-t-2xl"></div>

          <div className="flex justify-center mb-6 mt-6">
            <img
              src={card}
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
      </div>

      {/* Buttons */}
      <div className="flex justify-center iteam center gap-x-72 p-6">
        <button className="bg-gray-900 text-white py-3 px-8 rounded-md hover:bg-gray-700">
          Explore Abyd
        </button>
        <button className="bg-gray-900 text-white py-3 px-8 rounded-md hover:bg-gray-700">
          Explore Scripta
        </button>
      </div>

      {/*  */}

      <div className="flex flex-col justify-center items-center mt-8">
        <h1 className="font-[poppins]  font-medium text-[#253E52] text-2xl text-center ">
          Key Features
        </h1>
        <p className="font-light text-xl text-center py-1.5 text-[#787878]">
          Discover Key Features Designed to Save Time, Cut Costs, and Drive
          Growth
        </p>
      </div>
<div className="mb-28 ">

<KeyFeature />

</div>
      

      {/* colour full icon */}
<div className="py-20">
<AboutUs />
</div>
     

      <MediaCoverge />

      <Location />

      <Footer />
    </>
  );
};

export default Navbar;
