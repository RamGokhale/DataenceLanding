import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";

const images = [a, b, c, a, b]; // Repeated for infinite effect

const ImageCarousel = () => {
  const containerRef = useRef(null);

  return (
    <div className="overflow-hidden w-full bg-white py-10">
      <motion.div
        ref={containerRef}
        className="flex gap-8 w-max"
        animate={{ x: ["0%", "-100%"] }} // Move images from right to left
        transition={{
          ease: "linear",
          duration: 10, // Adjust speed
          repeat: Infinity,
        }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} className="w-32 h-auto" alt="slider-img" />
        ))}
      </motion.div>
    </div>
  );
};

export default  ImageCarousel 

