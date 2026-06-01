"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const locales = [{ code: "de" }, { code: "en" }];

export default function LocalSwitcher() {
  const locale = useLocale();
  const t = useTranslations("LocaleSwitcher");
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  function switchLocale(nextLocale: string) {
    const segments = pathname.split("/").filter(Boolean);

    if (segments[0] === "de" || segments[0] === "en") {
      segments[0] = nextLocale;
    } else {
      segments.unshift(nextLocale);
    }

    setIsOpen(false);
    router.push(`/${segments.join("/")}`);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={t("ariaLabel")}
        aria-expanded={isOpen}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-gold bg-bezel font-serif text-sm font-semibold uppercase leading-none text-(--dark-green) transition-all duration-500 ease-out hover:bg-(--gold) hover:text-white"
      >
        {locale}
      </button>

      <div
        className={`absolute right-0 top-full mt-3 w-36 overflow-hidden rounded-2xl border border-gold/50 bg-bezel/95 shadow-2xl shadow-black/10 backdrop-blur-xl transition-all duration-300 ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        {locales.map((item) => {
          const isActive = item.code === locale;

          return (
            <button
              key={item.code}
              type="button"
              onClick={() => switchLocale(item.code)}
              className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition ${
                isActive
                  ? "bg-gold text-white"
                  : "text-(--dark-green) hover:bg-gold/15"
              }`}
            >
              <span className="font-serif uppercase tracking-wide">
                {item.code}
              </span>

              <span className="text-xs opacity-75">
                {t(`languages.${item.code}`)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}