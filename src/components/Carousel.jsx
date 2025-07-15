"use client";
import React, { useState, useEffect } from "react";

const SimpleCarousel = () => {
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

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slide Track */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 z-10
                   w-12 h-12 bg-[#71DBD3] rounded-full flex justify-center items-center
                   hover:bg-[#5CCFC5] hover:shadow-lg hover:scale-110 transition-all"
      >
        <img src="/leftarr.png" alt="Previous" className="w-4 h-4" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 z-10
                   w-12 h-12 bg-[#71DBD3] rounded-full flex justify-center items-center
                   hover:bg-[#5CCFC5] hover:shadow-lg hover:scale-110 transition-all"
      >
        <img src="/rightarr.png" alt="Next" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default SimpleCarousel;
