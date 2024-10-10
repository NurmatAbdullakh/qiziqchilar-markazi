/**
 * @url https://next-intl-docs.vercel.app/docs/getting-started/app-router/with-i18n-routing#i18nts
 */
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["en", "ru", "uz"];
export const defaultLocale = "ru";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
