// i18n.config.ts
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "ru", "uz"];

export const localeNames = {
  en: "English",
  ru: "Russian",
  uz: "Uzbek",
};

export const { Link, useRouter, usePathname, redirect } =
  createSharedPathnamesNavigation({ locales });
