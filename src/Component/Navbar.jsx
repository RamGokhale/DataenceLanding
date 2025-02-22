import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/log.png"


const Navbar = ({  }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-6 md:px-20 py-6 ">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div>
          <img src={logo} alt="Logo" className="lg:w-48 md:w-40" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex gap-4 md:gap-5 ${isOpen ? "block" : "hidden"} absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto  md:bg-transparent shadow-md md:shadow-none p-6 md:p-0 ` }>
          {[
            { name: "Home", path: "/" },
            { name: "About us", path: "/about" },
            { name: "Products", path: "/product" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block md:inline-block font-[poppins] font-medium  lg:text-[18px] lg:px-6 lg:py-2 md:px-6 md:py-1 md:text-[12px] px-2   rounded-md transition duration-300 ${
                  isActive
                    ? "bg-[#253E52] text-white"
                    : "text-[#787878] hover:bg-[#253E52] hover:text-white"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
