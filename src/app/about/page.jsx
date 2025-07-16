"use client";

import { useState } from "react";
import { NextIntlClientProvider, useTranslations } from "next-intl";

import enMessages from "../../../messages/en.json";
import inMessages from "../../../messages/id.json";

const messages = {
  en: enMessages,
  id: inMessages,
};

function AboutContent() {
  const [locale, setLocale] = useState("en");

  const toggleLanguage = () => {
    setLocale((prev) => (prev === "en" ? "id" : "en"));
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages[locale]}>
      <AboutPageContent
        onToggleLanguage={toggleLanguage}
        currentLocale={locale}
      />
    </NextIntlClientProvider>
  );
}

function AboutPageContent({ onToggleLanguage, currentLocale }) {
  const t = useTranslations("About");

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-5xl font-mono font-bold">{t("title")}</h3>
        <button
          onClick={onToggleLanguage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors font-mono"
        >
          {currentLocale === "en" ? "Bahasa Indonesia" : "English"}
        </button>
      </div>
      <p className="text-3xl font-mono">{t("description")}</p>
    </div>
  );
}

// level 3: SSG
export default function About() {
  return <AboutContent />;
}
