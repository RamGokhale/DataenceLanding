import key1 from '../assets/key1.png'
import key2 from '../assets/key2.png'
import key3 from '../assets/key3.png'

const KeyFeature = () =>{
    return (

        <div className="my-28">
        <div className="flex flex-col justify-center items-center mt-8">
        <h1 className="font-[poppins]  font-semibold text-[#253E52]/90 text-2xl text-center tracking-wide">
          Key Features
        </h1>
        <p className="font-light text-sm text-center py-3 text-[#787878]/80">
          Discover Key Features Designed to Save Time, Cut Costs, and Drive
          Growth
        </p>
      </div>
<div className="flex justify-center items-center gap-x-20 px-20 mt-20">
  {/* Card 1 */}
  <div className=" xl:w-[280px]  lg:w-[440px]  bg-[#ff7e8b41] rounded-2xl p-6 flex flex-col items-center  ">
    <div className="flex space-x-4">
      <img src={key1} alt="feature one" />
    </div>
    <div className="text-center xl:py-9 lg:pt-10">
      <h2 className="text-[#253E52] font-semibold xl:text-xl lg:text-[16px]">User-Friendly Solutions</h2>
      <p className="text-[#787878] font-light mt-5 text-sm xl:py-3.5 lg:py-4 ">
        Easy-to-use legal tools designed for <br /> individuals to businesses of all sizes.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className=" xl:w-[280px]  lg:w-[440px] bg-[#ff7e8b41] rounded-2xl p-6  flex flex-col items-center  ">
    <div className="flex space-x-4">
      <img src={key2} alt="key2" />
    </div>
    <div className="text-center xl:py-9 lg:pt-10">
      <h2 className="text-[#253E52] font-semibold xl:text-xl lg:text-[16px]">User-Friendly Solutions</h2>
      <p className="text-[#787878] font-light mt-5 text-sm xl:py-3.5 lg:py-4">
        Easy-to-use legal tools designed for <br /> individuals to businesses of all sizes.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className=" xl:w-[280px]  lg:w-[440px] bg-[#ff7e8b41] rounded-2xl p-6  flex flex-col items-center  ">
    <div className="flex space-x-4">
      <img src={key3} alt="key3" />
    </div>
    <div className="text-center xl:py-9 lg:pt-10">
      <h2 className="text-[#253E52] font-semibold xl:text-xl lg:text-[16px]">User-Friendly Solutions</h2>
      <p className="text-[#787878] font-light mt-5 text-sm xl:py-3.5 lg:py-4">
        Easy-to-use legal tools designed for <br /> individuals to businesses of all sizes.
      </p>
    </div>
  </div>
</div>

    
        </div>
    )
}

export default KeyFeature