"use client"; // (hanya jika kamu pakai app router dan client component)

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-lime-200 relative pt-6 lg:pt-[72px]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Teks Utama */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl xl:text-[56px] font-bold leading-snug md:leading-tight text-black">
            Udah siap <span className="text-black">#JadiinMaumu</span> bareng
            wondr?
          </h2>
          <p className="mt-4 text-sm md:text-lg lg:text-2xl leading-relaxed text-black max-w-3xl mx-auto">
            Cukup siapin handphone dan dokumen identitas diri, kamu siap daftar
            wondr by BNI. Jangan lupa ajak temanmu biar makin seru~
          </p>

          {/* Tombol */}
          <button
            type="button"
            className="mt-6 md:mt-10 bg-[#71DBD3] hover:bg-[#5CCFC5] disabled:bg-[#A7ECE8] text-black font-semibold text-sm md:text-base px-6 md:px-8 py-3 md:py-[19px] rounded-full transition-colors"
          >
            Lihat Cara Daftar
          </button>
        </div>

        {/* Gambar utama */}
        <div className="relative flex justify-center mt-10 md:mt-14">
          <Image
            alt="download-landing"
            width={790}
            height={464}
            priority
            className="object-cover h-auto z-10 relative"
            src="https://wondr.bni.co.id/assets/images/download-landing/download-landingID.png"
          />
        </div>
      </div>

      {/* Background bawah */}
      <div className="absolute h-[140px] md:h-[255px] w-full bottom-0">
        <div className="relative h-[150px] md:h-[255px] bg-[#ECF789] bottom-0">
          <div
            className="absolute z-[1] top-0 w-full overflow-hidden"
            style={{ height: "150px" }}
          >
            <img
              alt="ornament"
              loading="lazy"
              className="w-full h-full object-cover rotate-180"
              src="https://wondr.bni.co.id/assets/images/download-landing/ornament.png"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
