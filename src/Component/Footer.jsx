import logo from "../assets/lo.png"
import message from "../assets/message.png"
import instag from "../assets/instag.png"
import linkdin  from "../assets/linkdin.png"
import facebook from "../assets/facebook.png"
import phone from "../assets/phone.png"
import { Link } from "react-router-dom"

const Footer = ()  =>{
    return (
   <>
   <footer className="bg-black text-white py-10 md:px-20 px-6">
  <div className="container flex flex-col sm:flex-row justify-between items-start">
    {/* Left Section - Logo & Description */}
    <div className="md:w-1/2  space-y-6 px-6">
      <img src={logo} alt="Datence Technologies" className="lg:w-48 md:w-30" />
      <p className="text-gray-400 xl:text-sm lg:text-[12px] md:text-[12px] text-[15px]">
        Datence simplifies compliance and fuels growth with expert-driven, <br className="hidden sm:block"/> AI-powered solutions. 
        From legal adherence to tailored strategies, <br className="hidden sm:block"/> we help your business scale effortlessly.
      </p>
      {/* Social Icons */}
      <div className="flex md:space-x-12 mt-4 space-x-10">
        <img src={facebook} alt="Facebook" className="w-5 h-4 cursor-pointer" />
        <img src={instag} alt="Instagram" className="w-4 h-4 cursor-pointer" />
        <img src={message} alt="Email" className="w-4 h-4 cursor-pointer" />
        <img src={linkdin} alt="LinkedIn" className="w-4 h-4 cursor-pointer" />
        <img src={phone} alt="Phone" className="w-4 h-4 cursor-pointer" />
      </div>
    </div>

    {/* Right Sections - Company & Services (Aligned to End) */}
    <div className="flex flex-col items-end  md:px-24 px-6 mt-5 sm:mt-0">
      <div className="flex  py-4 gap-x-20">
        {/* Company Section */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold py-2">Company</h3>
          <ul className="text-gray-400 text-sm mt-2 space-y-2">
            <li className="cursor-pointer hover:text-white md:py-2.5">About Us</li>
            <li className="cursor-pointer hover:text-white md:py-4">Contact Us</li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="space-y-3 ">
          <h3 className="text-white font-semibold py-1.5">Services</h3>
          <ul className="text-gray-400 text-sm mt-2 space-y-2">
            <li className="cursor-pointer hover:text-white sm:py-2.5">Products</li>
            <li className="cursor-pointer hover:text-white sm:py-3.5">
              <Link to='/privacy-policy' >Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

       </>


    )
}


export default Footer;