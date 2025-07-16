// app/[locale]/about/components/LanguageSwitcher.js
"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLanguage = (newLocale) => {
    // Replace current locale in pathname
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => switchLanguage("en")}
        className={`px-3 py-1 rounded text-sm font-mono ${
          locale === "en"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        English
      </button>
      <button
        onClick={() => switchLanguage("id")}
        className={`px-3 py-1 rounded text-sm font-mono ${
          locale === "id"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Bahasa
      </button>
    </div>
  );
}
