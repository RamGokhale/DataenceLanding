const KeyFeature = () =>{
    return (

        <>
        <div className="flex flex-col justify-center items-center mt-8">
        <h1 className="font-[poppins]  font-medium text-[#253E52] text-2xl text-center ">
          Key Features
        </h1>
        <p className="font-light text-xl text-center py-1.5 text-[#787878]">
          Discover Key Features Designed to Save Time, Cut Costs, and Drive
          Growth
        </p>
      </div>
<div className="flex justify-center items-center gap-x-20 px-20 mt-20">
  {/* Card 1 */}
  <div className=" xl:w-[280px] xl:h-[268px] lg:w-[440px] lg:h-[300px]  bg-[#ff7e8b41] rounded-2xl p-8 flex flex-col items-center  ">
    <div className="flex space-x-4">
      <div className="w-16 h-16 bg-[#FF6B7A] rounded-full flex items-center justify-center">
        <span className="text-white text-2xl">⏳</span> {/* Clock Icon */}
      </div>
      <div className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center">
        <span className="text-white text-lg">🔄</span> {/* Refresh Icon */}
      </div>
    </div>
    <div className="text-center xl:py-9 lg:pt-10">
      <h2 className="text-[#253E52] font-semibold xl:text-xl lg:text-[16px]">User-Friendly Solutions</h2>
      <p className="text-[#787878] font-light mt-5 text-sm xl:py-3.5 lg:py-4 ">
        Easy-to-use legal tools designed for <br /> individuals to businesses of all sizes.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className=" xl:w-[280px] xl:h-[268px] lg:w-[440px] lg:h-[300px]  bg-[#ff7e8b41] rounded-2xl p-8 flex flex-col items-center  ">
    <div className="flex space-x-4">
      <div className="w-16 h-16 bg-[#FF6B7A] rounded-full flex items-center justify-center">
        <span className="text-white text-2xl">⏳</span> {/* Clock Icon */}
      </div>
      <div className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center">
        <span className="text-white text-lg">🔄</span> {/* Refresh Icon */}
      </div>
    </div>
    <div className="text-center xl:py-9 lg:pt-10">
      <h2 className="text-[#253E52] font-semibold xl:text-xl lg:text-[16px]">User-Friendly Solutions</h2>
      <p className="text-[#787878] font-light mt-5 text-sm xl:py-3.5 lg:py-4">
        Easy-to-use legal tools designed for <br /> individuals to businesses of all sizes.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className=" xl:w-[280px] xl:h-[268px] lg:w-[440px] lg:h-[300px]  bg-[#ff7e8b41] rounded-2xl p-8 flex flex-col items-center  ">
    <div className="flex space-x-4">
      <div className="w-16 h-16 bg-[#FF6B7A] rounded-full flex items-center justify-center">
        <span className="text-white text-2xl">⏳</span> {/* Clock Icon */}
      </div>
      <div className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center">
        <span className="text-white text-lg">🔄</span> {/* Refresh Icon */}
      </div>
    </div>
    <div className="text-center xl:py-9 lg:pt-10">
      <h2 className="text-[#253E52] font-semibold xl:text-xl lg:text-[16px]">User-Friendly Solutions</h2>
      <p className="text-[#787878] font-light mt-5 text-sm xl:py-3.5 lg:py-4">
        Easy-to-use legal tools designed for <br /> individuals to businesses of all sizes.
      </p>
    </div>
  </div>
</div>

    
        </>
    )
}

export default KeyFeature