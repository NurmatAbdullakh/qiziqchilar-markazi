import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ru", "uz"],

  defaultLocale: "uz",
});

export const config = {
  matcher: ["/", "/(ru|en|uz)/:path*"],
};
