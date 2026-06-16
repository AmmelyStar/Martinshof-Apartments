// components/Header.tsx

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
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gold bg-(--bezel)/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
     <a href="#top" className="flex items-center gap-4" onClick={closeMenu}>
  <Image
    src="/logo-martinshof.png"
    alt="Martinshof Apartments"
    width={120}
    height={120}
    priority
    className="h-22 w-auto"
  />

  <div className="leading-none">
    <div className="font-serif text-2xl tracking-[0.15em] uppercase text-dark-green">
      Martinshof
    </div>

    <div className="mt-1 text-xs uppercase tracking-[0.45em] text-gold">
      Apartments
    </div>
  </div>
</a>

        <nav className="hidden items-center gap-8 text-sm text-(--gray-green) lg:flex">
          <a className="transition hover:text-(--gold)" href="#apartments">
            {t("nav.apartments")}
          </a>
          <a className="transition hover:text-(--gold)" href="#vorteile">
            {t("nav.benefits")}
          </a>
          <a className="transition hover:text-(--gold)" href="#konditionen">
            {t("nav.conditions")}
          </a>
          <a className="transition hover:text-(--gold)" href="#kontakt">
            {t("nav.contact")}
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#kontakt"
            className="rounded-full bg-bezel px-5 py-2.5 text-sm font-semibold text-(--dark-green) transition-all duration-500 ease-out hover:bg-(--gold) hover:text-white font-wide font-serif border-gold border"
          >
            {t("cta")}
          </a>
          <LocalSwitcher />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LocalSwitcher />

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={t("menuLabel")}
            aria-expanded={isOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold text-gold"
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden border-t border-gold bg-(--bezel)/95 backdrop-blur-xl transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-5 text-sm uppercase tracking-[0.18em] text-(--gray-green)">
          <a
            className="border-b border-gold/30 py-3 transition hover:text-(--gold)"
            href="#apartments"
            onClick={closeMenu}
          >
            {t("nav.apartments")}
          </a>
          <a
            className="border-b border-gold/30 py-3 transition hover:text-(--gold)"
            href="#vorteile"
            onClick={closeMenu}
          >
            {t("nav.benefits")}
          </a>
          <a
            className="border-b border-gold/30 py-3 transition hover:text-(--gold)"
            href="#konditionen"
            onClick={closeMenu}
          >
            {t("nav.conditions")}
          </a>
          <a
            className="py-3 transition hover:text-(--gold)"
            href="#kontakt"
            onClick={closeMenu}
          >
            {t("nav.contact")}
          </a>

          <a
            href="#kontakt"
            onClick={closeMenu}
            className="mt-5 rounded-full bg-bezel px-5 py-3 text-center text-sm font-semibold text-(--dark-green) transition-all duration-500 ease-out hover:bg-(--gold) hover:text-white font-wide font-serif border-gold border"
          >
            {t("cta")}
          </a>
        </nav>
      </div>
    </header>
  );
}