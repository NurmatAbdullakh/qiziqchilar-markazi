const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  //   i18n: {
  //     locales: ["en", "ru", "uz"],
  //     defaultLocale: "en",
  //   },
};

module.exports = withNextIntl(nextConfig);
