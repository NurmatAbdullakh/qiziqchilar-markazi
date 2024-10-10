// navigation.js
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const localePrefix = "always";
const locales = ["en", "ru", "uz"];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
