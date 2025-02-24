import about from "../assets/about.png";

const AboutUs = () => {
  return (
    <>
 <div className="w-full bg-[#a4d5f270] py-10 flex justify-center">
  <div className="w-full max-w-6xl mx-auto px-6 md:grid md:grid-cols-2 gap-8 items-center">
    
    {/* Left Section - About Text */}
    <div className="font-[poppins]">
      <h2 className="text-[#253E52] font-semibold text-3xl md:text-2xl lg:text-3xl text-center md:text-left pb-4">
        About Us
      </h2>
      <p className="text-[#787878] lg:tracking-wide  font-light lg:leading-[28px] text-sm md:text-[11px] lg:text-[16.5px] text-justify">
        Welcome to Datence, your partner in simplifying compliance and 
        driving growth. With our expert-driven, AI-powered solutions, we 
        ensure your business stays legally compliant while unlocking tailored 
        strategies to scale efficiently. From navigating complex regulations to 
        crafting customized growth plans, Datence empowers your business to 
        thrive in a competitive landscape. Let us handle the complexities 
        so you can focus on what truly matters—growing your business.
      </p>
    </div>

    {/* Right Section - Image */}
    <div className="sm:flex justify-center md:justify-end hidden md:block">
      <img 
        src={about} 
        className="w-full max-w-[26rem] md:max-w-[28rem] object-contain" 
        alt="About Us"
      />
    </div>
  </div>
</div>


    </>
  );
};

export default AboutUs;

