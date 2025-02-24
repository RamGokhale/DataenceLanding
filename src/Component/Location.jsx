import React, { useState } from "react";
import insta from "../assets/insta.png";
import Email from "../assets/Email.png";
import phone from "../assets/socialPH.png";
import linkedIn from "../assets/socialn.png";
import msgSend from "../assets/msgSend.png";
import Modal from "./Modal";

const Location = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="container mx-auto px-6 mb-40 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start w-11/12 mx-auto">
        {/* Left Section (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:order-1 order-2 ">
          {/* Email */}
          <div className="bg-red-100 p-6 py-10 rounded-2xl text-center shadow-md">
            <img src={Email} alt="Email" className="mx-auto w-14 mb-2" />
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-600">datascitech@gmail.com</p>
          </div>

          {/* Instagram */}
          <div className="bg-pink-100 p-6 py-10 rounded-2xl text-center shadow-md">
            <img src={insta} alt="Instagram" className="mx-auto w-14 mb-2" />
            <h3 className="text-lg font-semibold">Instagram</h3>
            <p className="text-gray-600">datascitech@gmail.com</p>
          </div>

          {/* LinkedIn */}
          <div className="bg-blue-100 p-6 py-10 rounded-2xl text-center shadow-md">
            <img src={linkedIn} alt="LinkedIn" className="mx-auto w-10 mb-2" />
            <h3 className="text-lg font-semibold">LinkedIn</h3>
            <p className="text-gray-600">Datascitech Technology</p>
          </div>

          {/* Phone */}
          <div className="bg-green-100 p-6 py-10 rounded-2xl text-center shadow-md">
            <img src={phone} alt="Phone" className="mx-auto w-10 mb-2" />
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-gray-600">+91 9876543210</p>
          </div>

          <div className="rounded-4xl overflow-hidden xl:w-[33rem] lg:w-[26rem] md:w-[42rem]  ">
            <iframe
              className="w-full h-[16.8rem]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.953736315639!3d-37.8162797420214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1638983417555!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Section (Form + Map) */}
        <div className="w-full max-w-2xl flex flex-col lg:order-2 order-1 ">
          <h2 className="text-2xl font-[poppins] font-semibold mb-3 md:text-left text-center">
            Get In Touch
          </h2>
          <p className="text-[#787878] font-normal py-7 md:text-left text-center">
            We’d love to hear from you! Whether it’s a question, <br className="hidden sm:block"/>{" "}
            feedback, or just to connect, reach out and we’ll get <br className="hidden sm:block" /> back to
            you as soon as possible..
          </p>

          {/* Form */}
          <div className="space-y-4" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="flex flex-col">
                <label className="text-[#000000] font-medium py-3">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="border-none  p-3 rounded-md w-full bg-blue-50 outline-none"
                />
              </div>

              {/* Email Address Field */}
              <div className="flex flex-col">
                <label className="text-[#000000] font-medium py-3 ">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="border-none  p-3 rounded-md w-full bg-blue-50 outline-none font-normal "
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[#000000] font-medium py-3 ">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your Mobile Number"
                  className="border-none  p-3 rounded-md w-full bg-blue-50 outline-none font-normal "
                />
              </div>
            </div>
           
           <div className="flex flex-col mt-8">
           <label className="text-[#000000] font-medium mb-7 ">
              Your suggestions and feedbacks{" "}
              <span className="text-red-500">*</span>
            </label>

            <textarea
              placeholder="Your suggestions and feedbacks"
              className="border-none outline-none p-4 rounded-md w-full h-36 bg-blue-50"
            ></textarea>
           </div>
            
            <button className="bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-700" onClick={() => setisOpen(true)}>
              Send Message
            </button>
          </div>
          <Modal isOPen={isOpen} onClose={() => setisOpen(false)}>
            <div className="px-8 py-4 flex flex-col items-center justify-center ">
              <img
                src={msgSend}
                alt="img"
              />

              <div className="text-center">
                <p className="text-green-500 font-semibold traching-wide py-3">Message Sent Successfully!</p>
                <span className="text-[#787878] text-[12px] leading-5">
                <p>Thank you for reaching out! Your message has been sent</p> 
                <p>successfully. Our team will get back to you soon.</p>
                </span>
              </div>

              <button className="mt-5 px-10 py-2 rounded-lg text-white bg-[#253E52] cursor-pointer" onClick={() => setisOpen(false)}>Ok</button>
              
            </div>
          </Modal>

        </div>
      </div>
    </div>
  );
};

export default Location;
