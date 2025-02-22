import { NavLink } from "react-router-dom";
import logo from "../assets/log.png";
import ImageCarousel from "./imageCarousel";
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
    </>
  );
};

export default Navbar;
