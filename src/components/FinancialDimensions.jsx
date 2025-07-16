"use client";

import { useTranslations } from "next-intl";

function Card({ imgSrc, title, desc }) {
  return (
    <div className="bg-white rounded-3xl lg:rounded-[40px] flex flex-col h-full shadow-sm">
      <div className="pt-6 lg:pt-8 px-6">
        <img
          alt={title}
          loading="lazy"
          className="w-full h-auto object-contain"
          src={imgSrc}
        />
      </div>
      <div className="px-6 pt-4 lg:pt-6 pb-6 lg:pb-8 text-left">
        <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold text-black mb-2">
          {title}
        </h3>
        <p className="text-sm md:text-lg lg:text-xl text-neutral-900 font-normal leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function FinancialDimensions({
  onToggleLanguage,
  currentLocale,
}) {
  const t = useTranslations("FinancialDimensions");
  return (
    <section className="py-10 md:py-[72px] bg-off-white">
      <div className="container-120 mx-auto text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] !leading-snug lg:!leading-tight text-black font-semibold mb-4">
          {t("title")}
        </h2>
        <p className="text-sm md:text-lg lg:text-2xl text-neutral-900 leading-[140%] font-normal max-w-4xl mx-auto">
          {t("description")}
        </p>
      </div>

      <div className="px-6 lg:px-[54px] mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            imgSrc="https://wondr.bni.co.id/api/image/3_dimension_illustration_1751484975817.png"
            title={t("transaksiTitle")}
            desc={t("transaksiDesc")}
          />
          <Card
            imgSrc="https://wondr.bni.co.id/api/image/3_dimension_illustration_(1)_1751485012612.png"
            title={t("insightTitle")}
            desc={t("insightDesc")}
          />
          <Card
            imgSrc="https://wondr.bni.co.id/api/image/3_dimension_illustration_(2)_1751485081149.png"
            title={t("growthTitle")}
            desc={t("growthDesc")}
          />
        </div>
      </div>
    </section>
  );
}
