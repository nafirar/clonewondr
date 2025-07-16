"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Download, Globe, Search, Bell } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("ID");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "ID" ? "EN" : "ID");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 navbar-container flex justify-between items-center h-16 lg:h-20">
          {/* Left side: Logo + Promo */}
          <div className="flex items-center gap-6 mr-auto">
            {/* Logo */}
            <Link
              href="/"
              aria-label="WONDR Homepage"
              className="flex items-center space-x-3 group"
            >
              <img
                src="https://wondr.bni.co.id/assets/images/wondr-color-3x.png"
                alt="WONDR"
                className={`w-16 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12 object-contain transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-lg ${
                  isScrolled ? "logo-hover" : ""
                }`}
              />
            </Link>

            {/* Desktop Promo Nav */}
            <nav className="hidden lg:block" role="navigation">
              <Link
                href="/promo"
                className="px-4 py-3 text-gray-700 font-semibold text-base hover:text-orange-500 transition-colors duration-300 rounded-lg hover:bg-gray-50"
              >
                Promo
              </Link>
            </nav>
          </div>

          {/* Right side: actions */}
          <div className="hidden lg:flex items-center gap-4 ml-auto">
            {/* Download Button */}
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#71DBD3] to-[#5CCFC5] hover:from-[#5CCFC5] hover:to-[#4ABFB7] disabled:from-[#A7ECE8] disabled:to-[#A7ECE8] rounded-full transition-transform duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl button-ripple"
              aria-label="Download WONDR App"
            >
              <Download className="w-4 h-4" />
              <span className="hidden xl:inline">Download Sekarang</span>
              <span className="xl:hidden">Download</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-orange-500 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300"
              aria-label={`Switch to ${
                currentLanguage === "ID" ? "English" : "Indonesian"
              }`}
            >
              <Globe className="w-4 h-4" />
              {currentLanguage}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-700 hover:text-orange-500 hover:bg-gray-100 rounded-lg transition-all duration-300"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 mobile-menu-enter">
            <div className="px-4 pt-4 pb-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari..."
                  className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              </div>

              {/* Mobile Promo Nav */}
              <a
                href="/promo"
                className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-lg transition-all duration-300"
              >
                Promo
              </a>

              {/* Mobile Actions */}
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#71DBD3] to-[#5CCFC5] hover:from-[#5CCFC5] hover:to-[#4ABFB7] rounded-full transition-transform duration-300 hover:scale-105 shadow-lg"
              >
                <Download className="w-4 h-4" />
                Download Sekarang
              </button>

              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 w-full justify-center px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
                {currentLanguage}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main content spacer */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Navbar;
