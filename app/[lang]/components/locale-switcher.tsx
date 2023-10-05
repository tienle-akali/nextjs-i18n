"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "../../../i18n-config";

export default function LocaleSwitcher({ lang }: { lang: string }) {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link
                href={redirectedPathName(locale)}
                style={{
                  fontWeight: lang === locale ? "bold" : "normal",
                  color: lang === locale ? "red" : "inherit",
                }}
              >
                {locale}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
