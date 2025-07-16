import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Only apply i18n to /demo-intl routes
  if (pathname.startsWith('/demo-intl') || pathname.match(/^\/(en|id)\/demo-intl/)) {
    return intlMiddleware(request);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
