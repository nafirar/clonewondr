"use client";

import InvesmentIntro from "@/components/InvesmentIntro";
import FinancialDimensions from "@/components/FinancialDimensions";
import Loans from "@/components/Loans";
import Insight from "@/components/Insight";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Join from "@/components/Join";
import BerbagiTransaksiSwiper from "@/components/berbagiTransaksiSlider";

import { useState } from "react";
import { NextIntlClientProvider } from "next-intl";

import enMessages from "../../messages/en.json";
import inMessages from "../../messages/id.json";

const messages = {
  en: enMessages,
  id: inMessages,
};

export default function Home() {
  const [locale, setLocale] = useState("id");

  const toggleLanguage = () => {
    setLocale((prev) => (prev === "id" ? "en" : "id"));
  };

  return (
    <>
      <NextIntlClientProvider locale={locale} messages={messages[locale]}>
        <Navbar onToggleLanguage={toggleLanguage} currentLocale={locale} />
        <Carousel />
        <FinancialDimensions />
        <BerbagiTransaksiSwiper />
        <Insight />
        <InvesmentIntro />
        <Loans />
        <Join />
        <Footer onToggleLanguage={toggleLanguage} currentLocale={locale} />
      </NextIntlClientProvider>
    </>
  );
}
