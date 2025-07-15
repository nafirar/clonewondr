"use client";

import React from "react";
import { ChevronDown, Menu } from "lucide-react";

const navItems = [{ label: "Fitur" }, { label: "Info" }];

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="hidden md:flex flex-wrap w-full h-16 items-center justify-between md:px-6 lg:px-[150px]">
        {/* Left: Logo and Nav */}
        <div className="flex gap-16 items-center">
          {/* Logo */}
          <a className="flex items-center space-x-3" href="/">
            <img
              src="https://wondr.bni.co.id/assets/images/wondr-color-3x.png"
              alt="logo"
              className="w-[64px] h-[32px] md:w-[100px] object-contain"
            />
          </a>

          {/* Navigation*/}
          <div className="flex gap-6">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="text-black flex items-center gap-[14px] font-semibold text-base px-6 py-[18px] border-b-[4px] cursor-pointer transition-all duration-500 origin-top border-transparent hover:text-orange-500"
              >
                <span>{item.label}</span>
                <ChevronDown
                  className="w-4 h-4 transition-transform duration-500"
                  strokeWidth={3}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Download + Language */}
        <div className="flex justify-end gap-6 items-center">
          <button
            type="button"
            className="px-8 py-[19px] text-base text-black font-semibold focus:outline-none bg-[#71DBD3] hover:bg-[#5CCFC5] disabled:bg-[#A7ECE8] rounded-[32px] !px-6 !py-[9px]"
          >
            Download Sekarang
          </button>
          <div className="flex items-center space-x-1">
            <div className="flex items-center divide-x divide-[#7A7A7A]">
              <button className="text-[16px] leading-[24px] font-semibold pe-2 text-[#141414]">
                ID
              </button>
              <button className="text-[16px] leading-[24px] font-semibold ps-2 text-[#8c8c8c]">
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
