// app/[locale]/about/page.js
import { useTranslations } from "next-intl";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function DemoIntl() {
  const t = useTranslations("About");

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-5xl font-mono font-bold">{t("title")}</h3>
        <LanguageSwitcher />
      </div>
      <p className="text-3xl font-mono mb-6">{t("description")}</p>

      {/* Navigation back to other pages */}
      <div className="mt-8 space-x-4">
        <Link
          href="/"
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          {t("backToHome")}
        </Link>
        <Link
          href="/contact"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          {t("goToContact")}
        </Link>
      </div>
    </div>
  );
}
