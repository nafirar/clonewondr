"use client";

import { useTranslations } from "next-intl";

export default function Loans({ onToggleLanguage, currentLocale }) {
  const t = useTranslations("Loans");
  return (
    <section className="py-10 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-black leading-tight tracking-normal">
            {t("headline")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ubah Cicilan */}
          <div className="bg-[#E5D9FF] rounded-2xl lg:rounded-3xl flex flex-col overflow-hidden">
            <div className="p-6 lg:p-8 space-y-4">
              <h3 className="text-sm md:text-base text-black font-light">
                {t("ubahTitle")}
              </h3>
              <h2 className="text-xl md:text-3xl font-semibold text-black">
                {t("ubahHeading")}
              </h2>
              <p className="text-sm md:text-base text-black font-normal">
                {t("ubahDesc")}
              </p>
            </div>
            <div className="relative">
              <img
                alt="ubahcicilan"
                src="https://wondr.bni.co.id/api/image/frame_1597880519_1751484415405.png"
                className="w-full h-auto object-cover rounded-b-2xl lg:rounded-b-3xl"
              />
            </div>
          </div>

          {/* Card to Cash */}
          <div className="bg-[#E5D9FF] rounded-2xl lg:rounded-3xl flex flex-col overflow-hidden">
            <div className="p-6 lg:p-8 space-y-4">
              <h3 className="text-sm md:text-base text-black font-light">
                {t("cashTitle")}
              </h3>
              <h2 className="text-xl md:text-3xl font-semibold text-black">
                {t("cashHeading")}
              </h2>
              <p className="text-sm md:text-base text-black font-normal">
                {t("cashDesc")}
              </p>
            </div>
            <div className="relative">
              <img
                alt="cardtocash"
                src="https://wondr.bni.co.id/api/image/group_427323197_1751484797654.png"
                className="w-full h-auto object-cover rounded-b-2xl lg:rounded-b-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
