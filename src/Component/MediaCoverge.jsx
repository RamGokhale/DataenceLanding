
import image from "../assets/image.png"

const MediaCoverge = () =>{
    return(
        <>
        
    <div className="w-full flex flex-col items-center py-24">
  {/* Section Title with Dotted Line */}
  <div className=" flex flex-col items-center py-5">
    <h2 className="text-center text-xl font-semibold text-[#253E52]/80 tracking-wide ">Media & Coverage</h2>
  </div>

  {/* Image Section with Rounded Borders */}
  <div className="w-[75%] rounded-3xl overflow-hidden z-40  ">
    <img src={image} className="w-full object-cover " alt="Media Coverage" />
  </div>

  {/* Description Section */}
  <div className="w-full bg-[#D9D9D933] py-40 px-44 rounded-xl text-left relative bottom-36">
    <h2 className="text-[#E3501F] font-semibold text-lg my-5 mb-8"> 
      Datence Technologies recognised by DD News at IMC 2024 while presenting ABYD
    </h2>
    <p className="font-light text-gray-600 mt-4">
      DD News covered Datence Technologies at India Mobile Congress 2024 held at Bharat Mandapam, New Delhi from 
      <br /> October 27-October 29, 2024. Datence presented their advisory-first, aggregator legal service model for startups 
      <br /> and small companies.
    </p>
  </div>
</div>

        
        
        </>
    )

}

export default MediaCoverge;