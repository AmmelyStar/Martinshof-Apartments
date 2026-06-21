"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import LocalSwitcher from "./LocalSwitcher";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Header");

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gold bg-bezel/95 backdrop-blur-xl">
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gold" />

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-5 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3" onClick={closeMenu}>
          <Image
            src="/logo-martinshof.png"
            alt="Martinshof Apartments"
            width={110}
            height={110}
            priority
            className="h-18 w-auto sm:h-16 lg:h-20"
          />

          <div className="min-w-0 leading-none">
            <div className="font-serif text-2xl font-bold tracking-[0.12em] text-[#0b4563] sm:text-3xl xl:text-4xl">
              MARTINSHOF
            </div>

            <div className="mt-2 flex items-center gap-2">
              <span className="hidden h-px w-8 bg-gold sm:block" />
              <span className="text-[10px] uppercase tracking-[0.38em] text-gold sm:text-xs">
                Apartments
              </span>
              <span className="hidden h-px w-8 bg-gold sm:block" />
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.12em] text-[#0b4563] xl:flex">
          <a className="transition hover:text-gold" href="#apartments">
            {t("nav.apartments")}
          </a>
          <a className="transition hover:text-gold" href="#vorteile">
            {t("nav.benefits")}
          </a>
          <a className="transition hover:text-gold" href="#konditionen">
            {t("nav.conditions")}
          </a>
          <a className="transition hover:text-gold" href="#kontakt">
            {t("nav.contact")}
          </a>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href="#kontakt"
            className="rounded-full border border-[#0b4563] bg-transparent px-5 py-2.5 font-serif text-sm font-bold tracking-[0.08em] text-[#0b4563] transition-all duration-500 ease-out hover:bg-[#0b4563] hover:text-white"
          >
            {t("cta")}
          </a>

          <LocalSwitcher />
        </div>

        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <LocalSwitcher />

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={t("menuLabel")}
            aria-expanded={isOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0b4563] text-[#0b4563]"
          >
            <span className="relative h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-gold/40 bg-bezel/98 backdrop-blur-xl transition-all duration-300 xl:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-5 text-sm uppercase tracking-[0.18em] text-[#0b4563]">
          <a className="border-b border-gold/30 py-3 transition hover:text-gold" href="#apartments" onClick={closeMenu}>
            {t("nav.apartments")}
          </a>
          <a className="border-b border-gold/30 py-3 transition hover:text-gold" href="#vorteile" onClick={closeMenu}>
            {t("nav.benefits")}
          </a>
          <a className="border-b border-gold/30 py-3 transition hover:text-gold" href="#konditionen" onClick={closeMenu}>
            {t("nav.conditions")}
          </a>
          <a className="py-3 transition hover:text-gold" href="#kontakt" onClick={closeMenu}>
            {t("nav.contact")}
          </a>

          <a
            href="#kontakt"
            onClick={closeMenu}
            className="mt-5 rounded-full border border-[#0b4563] px-5 py-3 text-center font-serif text-sm font-bold tracking-[0.08em] text-[#0b4563] transition hover:bg-[#0b4563] hover:text-white"
          >
            {t("cta")}
          </a>
        </nav>
      </div>
    </header>
  );
}