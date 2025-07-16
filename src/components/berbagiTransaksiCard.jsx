"use client";
import { useState } from "react";
import Image from "next/image";

export default function BerbagiTransaksiCard({ data }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      className="2xl:!h-[550px] 2xl:!max-w-[400px] xl:!h-[465px] md:!h-[420px] !h-[272px] !my-2 perspective-container rounded-3xl md:rounded-4xl"
      style={{
        width: "330px",
      }}
    >
      <div
        className={`relative w-full h-full pr-4 flip-card-inner ${
          isExpanded ? "is-expanded" : ""
        }`}
      >
        <div className="absolute w-full h-full rounded-3xl md:rounded-4xl flex flex-col justify-between [backface-visibility:hidden] min-h-[272px] md:min-h-[420px] flip-card-front">
          <div className="px-4 pt-6 lg:px-6 text-left">
            <h3 className="text-xs md:text-sm xl:text-base font-light text-black">
              {data.title}
            </h3>
            <p className="text-sm md:text-xl lg:text-2xl xl:text-3xl font-demibold !font-semibold !leading-[120%] mt-1 lg:mt-[10px]">
              {data.frontDescription}
            </p>
          </div>
          <div className="w-full rounded-b-3xl md:rounded-b-4xl overflow-hidden flex justify-center items-end h-full max-h-[250px] md:max-h-[450px]">
            <Image
              alt={data.title}
              loading="lazy"
              width="500"
              height="300"
              decoding="async"
              data-nimg="1"
              className="md:w-full object-contain md:object-cover w-[110%] max-w-[110%] max-h-[250px] md:max-h-[450px]"
              style={{
                color: "transparent",
                objectPosition: "center botto",
                aspectRatio: "auto",
              }}
              src={data.image}
            />
          </div>
          <button
            onClick={toggleExpand}
            className="absolute bottom-4 left-4 w-6 h-6 md:bottom-6 md:left-6 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center opacity-50 border border-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 md:w-5 md:h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flip-card-back absolute top-0 left-0 w-full h-full bg-off-white rounded-3xl md:rounded-4xl flex flex-col justify-between overflow-hidden [backface-visibility:hidden] min-h-[272px] md:min-h-[420px]">
          <div className="p-6 text-left">
            <h3 className="text-xs md:text-sm lg:text-base font-light text-black">
              {data.title}
            </h3>
            <div className="text-sm md:text-lg lg:text-2xl font-light font-normal text-black !leading-[140%] mt-1 lg:mt-[10px] mb-6">
              <div className="ql-content-wrapper">
                <div className="ql-content ql-editor font-light text-blac">
                  <p>{data.backDescription}</p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={toggleExpand}
            className="relative bottom-4 left-4 w-6 h-6 md:bottom-6 md:left-6 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center opacity-50 border border-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 md:w-5 md:h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 12H4"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
