/**
 * @url https://next-intl-docs.vercel.app/docs/routing/navigation
 */
import { createSharedPathnamesNavigation } from "next-intl/navigation";

const locales = ["en", "ru", "uz"];

export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales,
    localePrefix,
  });
