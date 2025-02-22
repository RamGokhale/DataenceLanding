import about from "../assets/about.png";

const AboutUs = () => {
  return (
    <>
      <div className="w-full bg-[#a4d5f270] flex justify-center px-6 py-10 ">
  <div className="w-[80%] grid grid-cols-2 gap-4 items-center">
    {/* Left Section - About Text */}
    <div className="">
      <h2 className="text-[#253E52] font-medium text-xl mb-4">About Us</h2>
      <p className="text-[#787878] font-light leading-relaxed">
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
      <img src={about} className="w-[28rem] object-contain" alt="About Us" />
    </div>
  </div>
</div>

    </>
  );
};

export default AboutUs;
