import about from "../assets/about.png";

const AboutUs = () => {
  return (
    <>
  <div className="w-full bg-[#a4d5f270] md:flex justify-center items-center   ">
  <div className="xl:w-[85%] lg:w-[80%] md:w-[78%]  w-full mx-auto   md:gap-x-9 md:grid md:grid-cols-2 grid-cols-1  items-center">
    {/* Left Section - About Text */}
    <div className="font-[poppins] lg:px-4  px-6 ">
      <h2 className="text-[#253E52] font-medium text-2xl  xl:py-3 lg:text-xl md:text-[16px] text-cente md:text-left">About Us</h2>
      <p className="text-[#787878] font-light leading-relaxed xl:w-[50rem] lg:w-[35rem] md:w-[28rem] w-[22rem] xl:text-xl lg:text-[15px] md:text-[12px] text-justify text-[12px] lg:py-2.5">
        Welcome to Datence, your partner in simplifying compliance and <br/>
        driving growth. With our expert-driven, AI-powered solutions,
        we  <br/>ensure your business stays legally compliant while
        unlocking tailored <br/> strategies to scale efficiently. From
        navigating complex regulations to <br/>crafting customized growth
        plans, Datence empowers your business  <br/>to thrive in a
        competitive landscape. Let us handle the complexities <br/> so you
        can focus on what truly matters—growing your business.
      </p>
    </div>

    {/* Right Section - Image */}
    <div className="flex justify-end">
      <img src={about} className="lg:w-[28rem] md:w-[24rem]  object-contain  hidden md:block" alt="About Us" />
    </div>
  </div>
</div>

    </>
  );
};

export default AboutUs;
