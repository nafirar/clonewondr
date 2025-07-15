"use client";
import React, { useState } from "react";

const Carousel = () => {
  const images = [
    "https://wondr.bni.co.id/_next/image?url=%2Fapi%2Fimage%2Fbanner_1_1751643019762.png&w=1920&q=75",
    "https://wondr.bni.co.id/_next/image?url=%2Fapi%2Fimage%2Fbanner_2_1751643120295.png&w=1920&q=75",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-auto overflow-hidden">
      {/* Image */}
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-cover transition-all duration-500"
      />

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 z-10
             w-12 h-12 bg-[#71DBD3] rounded-full flex justify-center items-center
             cursor-pointer hover:bg-[#5CCFC5] hover:shadow-lg hover:scale-110 transition-all duration-200"
      >
        <img src="/leftarr.png" alt="Previous" className="w-4 h-4" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 z-10
             w-12 h-12 bg-[#71DBD3] rounded-full flex justify-center items-center
             cursor-pointer hover:bg-[#5CCFC5] hover:shadow-lg hover:scale-110 transition-all duration-200"
      >
        <img src="/rightarr.png" alt="Previous" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Carousel;
