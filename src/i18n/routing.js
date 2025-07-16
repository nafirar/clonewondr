import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "id"],

  // Used when no locale matches
  defaultLocale: "en",
  
  // Only apply to specific pathnames
  pathnames: {
    '/demo-intl': '/demo-intl'
  }
});
