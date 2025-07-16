"use client";

import React, { useState, useRef, useEffect } from "react";
import { Menu, X, Download, Globe, Search, ChevronDown } from "lucide-react";
import Link from "next/link";

const navItems = [{ label: "Fitur" }, { label: "Info" }];

const InfoCards = () => (
  <div className="max-w-7xl mx-auto px-6 lg:px-[150px] py-8">
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-4">FAQ</h3>
        <ul className="list-disc list-inside space-y-3 text-sm text-gray-700">
          <li>Metode transfer apa saja yang bisa dipilih?</li>
          <li>Di mana saya bisa bertransaksi menggunakan QRIS?</li>
          <li>
            Apakah terdapat biaya transaksi saat menggunakan fitur Bayar & Beli?
          </li>
        </ul>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="mt-4 inline-block text-sm font-semibold text-orange-500 hover:underline"
        >
          Lihat Selengkapnya &rarr;
        </a>
      </div>
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Syarat, Ketentuan, dan Pemberitahuan Privasi
        </h3>
        <p className="text-sm text-gray-700 mb-4">
          Cek syarat, ketentuan, dan pemberitahuan privasi
        </p>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="inline-block text-sm font-semibold text-orange-500 hover:underline"
        >
          Lihat Selengkapnya &rarr;
        </a>
      </div>
    </div>
  </div>
);

const NavbarCards = () => {
  const cardData = [
    {
      title: "Transaksi",
      items: [
        "Transfer",
        "Bayar & Beli",
        "TapCash",
        "Transfer ke Luar Negeri",
        "Mobile Tunai",
      ],
    },
    {
      title: "Simpanan",
      items: ["Wondr Multicurrency"],
    },
    {
      title: "Investasi",
      items: ["Reksadana", "Obligasi/Sukuk"],
    },
    {
      title: "Lainnya",
      items: ["Registrasi & Referral"],
    },
  ];

  return (
    <div className="absolute top-full left-0 w-screen bg-white shadow-lg border-t border-gray-200 z-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-[150px] py-8">
        <div className="grid grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                {card.title}
              </h3>
              <ul className="space-y-3">
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 transition-colors duration-200 block py-1 text-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(`Clicked: ${item}`);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ onToggleLanguage, currentLocale }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [currentLanguage, setCurrentLanguage] = useState("ID");
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // const toggleLanguage = () => {
  //   setCurrentLanguage((prev) => (prev === "ID" ? "EN" : "ID"));
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center gap-6 mr-auto">
            <Link href="/" className="flex items-center space-x-3 group">
              <img
                src="https://wondr.bni.co.id/assets/images/wondr-color-3x.png"
                alt="WONDR"
                className="w-16 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12 object-contain transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-lg"
              />
            </Link>
            <nav className="hidden lg:flex gap-6" ref={dropdownRef}>
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  <div
                    onClick={() => handleDropdownClick(item)}
                    className={`text-black flex items-center gap-2 font-semibold text-base px-4 py-2 border-b-4 cursor-pointer transition-all duration-300 ${
                      activeDropdown === item.label
                        ? "border-orange-500 text-orange-500"
                        : "border-transparent hover:text-orange-500"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              ))}
              <Link
                href="/promo"
                className="text-black flex items-center font-semibold text-base px-4 py-2 border-b-4 border-transparent hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
              >
                Promo
              </Link>
              <Link
                href="/about"
                className="text-black flex items-center font-semibold text-base px-4 py-2 border-b-4 border-transparent hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-gray-700 font-semibold text-base hover:text-orange-500 transition-colors duration-300 rounded-lg hover:bg-gray-50"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-4 ml-auto">
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-[#71DBD3] to-[#5CCFC5] rounded-full shadow-lg hover:scale-105 transition"
            >
              <Download className="w-4 h-4" />
              <span className="hidden xl:inline">Download Sekarang</span>
              <span className="xl:hidden">Download</span>
            </button>
            <button
              onClick={onToggleLanguage}
              className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-orange-500 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300"
              aria-label={`Switch to ${
                currentLocale === "ID" ? "English" : "Indonesian"
              }`}
            >
              <Globe className="w-4 h-4" />
              {currentLocale}
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-700 hover:text-orange-500 hover:bg-gray-100 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {showDropdown && activeDropdown === "Fitur" && <NavbarCards />}
        {activeDropdown === "Info" && <InfoCards />}

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari..."
                  className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              </div>
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#71DBD3] to-[#5CCFC5] rounded-full shadow-lg"
              >
                <Download className="w-4 h-4" />
                Download Sekarang
              </button>
              <button
                onClick={onToggleLanguage}
                className="flex items-center gap-2 w-full justify-center px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
                {currentLocale}
              </button>
            </div>
          </div>
        )}
      </header>
      <div className="h-16 lg:h-20" />
    </>
  );
};

const handleDropdownClick = (item) => {
  const isActive = activeDropdown === item.label;
  setActiveDropdown(isActive ? null : item.label);
  setShowDropdown(item.label === "Fitur" && !isActive);
  // };
};

export default Navbar;
