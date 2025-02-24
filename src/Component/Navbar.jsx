
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/log.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (event, sectionId) => {
    event.preventDefault(); // Prevent default anchor behavior
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 20 , // Adjust for fixed navbar
        behavior: "smooth",
      });
      setIsOpen(false); // Close mobile menu after click
    }
  };

  return (
    <>
      {/* Navbar Section */}
      <nav className="bg-white lg:px-20 py-6 md:px-12 sm:px-10 px-8 relative ">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div>
            <NavLink to="/">
              <img src={logo} alt="Logo" className="lg:w-48 md:w-46 sm:w-36" />
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`md:flex gap-4 ${
              isOpen ? "block" : "hidden"
            } absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-6 md:p-0 z-50`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block md:inline-block font-[poppins] font-medium lg:text-[18px] lg:px-6 lg:py-2 md:px-6 md:py-1 md:text-[12px] px-2 rounded-md transition duration-300 ${
                  isActive
                    ? "bg-[#253E52] text-white"
                    : "text-[#787878] hover:bg-[#253E52] hover:text-white"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            {/* Scroll-to-About Link */}
            <a
              href="about"
              className="block md:inline-block font-[poppins] font-medium lg:text-[18px] lg:px-6 lg:py-2 md:px-6 md:py-1 md:text-[12px] px-2 rounded-md transition duration-300 text-[#787878] hover:bg-[#253E52] hover:text-white cursor-pointer"
              onClick={(event) => scrollToSection(event, "about")}
            >
              About Us
            </a>

            {/* Scroll-to-Products Link */}
            <a
              href="product"
              className="block md:inline-block font-[poppins] font-medium lg:text-[18px] lg:px-6 lg:py-2 md:px-6 md:py-1 md:text-[12px] px-2 rounded-md transition duration-300 text-[#787878] hover:bg-[#253E52] hover:text-white cursor-pointer"
              onClick={(event) => scrollToSection(event, "product")}
            >
              Products
            </a>

            {/* Scroll-to-Contact Link */}
            <a
              href="contact"
              className="block md:inline-block font-[poppins] font-medium lg:text-[18px] lg:px-6 lg:py-2 md:px-6 md:py-1 md:text-[12px] px-2 rounded-md transition duration-300 text-[#787878] hover:bg-[#253E52] hover:text-white cursor-pointer"
              onClick={(event) => scrollToSection(event, "contact")}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
