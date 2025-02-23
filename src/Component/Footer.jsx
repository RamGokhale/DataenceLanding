import logo from "../assets/lo.png"
import message from "../assets/message.png"
import instag from "../assets/instag.png"
import linkdin  from "../assets/linkdin.png"
import facebook from "../assets/facebook.png"
import phone from "../assets/phone.png"

const Footer = ()  =>{
    return (
   <>
   <footer className="bg-black text-white py-10 px-20">
  <div className="container flex justify-between items-start">
    {/* Left Section - Logo & Description */}
    <div className="w-1/2 space-y-6 px-6">
      <img src={logo} alt="Datence Technologies" className="w-48" />
      <p className="text-gray-400 text-sm">
        Datence simplifies compliance and fuels growth with expert-driven, <br/> AI-powered solutions. 
        From legal adherence to tailored strategies, <br/> we help your business scale effortlessly.
      </p>
      {/* Social Icons */}
      <div className="flex space-x-12 mt-4">
        <img src={facebook} alt="Facebook" className="w-5 h-4 cursor-pointer" />
        <img src={instag} alt="Instagram" className="w-4 h-4 cursor-pointer" />
        <img src={message} alt="Email" className="w-4 h-4 cursor-pointer" />
        <img src={linkdin} alt="LinkedIn" className="w-4 h-4 cursor-pointer" />
        <img src={phone} alt="Phone" className="w-4 h-4 cursor-pointer" />
      </div>
    </div>

    {/* Right Sections - Company & Services (Aligned to End) */}
    <div className="flex flex-col items-end  px-24">
      <div className="flex  py-4 gap-x-20">
        {/* Company Section */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold py-2">Company</h3>
          <ul className="text-gray-400 text-sm mt-2 space-y-2">
            <li className="cursor-pointer hover:text-white py-2.5">About Us</li>
            <li className="cursor-pointer hover:text-white py-4">Contact Us</li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="space-y-3 ">
          <h3 className="text-white font-semibold py-1.5">Services</h3>
          <ul className="text-gray-400 text-sm mt-2 space-y-2">
            <li className="cursor-pointer hover:text-white py-2.5">Products</li>
            <li className="cursor-pointer hover:text-white py-3.5">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

       </>


    )
}


export default Footer