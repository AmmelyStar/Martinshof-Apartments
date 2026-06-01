"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-dark-green/90 px-5 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-[1fr_1.2fr_1fr] md:text-left">
        <div>
          <div className="font-serif text-2xl">
            Martinshof Apartments
          </div>

          <p className="mt-3 text-sm text-white/60">
            © 2026 Martinshof Apartments
          </p>
        </div>

        <address className="not-italic leading-7 text-white/70">
          Michael P. Martin · Martin Michael GmbH
          <br />
          Hauptstraße 28 · 2183 St. Ulrich – Neusiedl/Zaya
          <br />
          {t("country")}
        </address>

        <div className="flex flex-col items-center gap-3 text-sm text-white/70 md:items-end md:text-right">
          <Link
            href="/impressum"
            className="transition hover:text-gold"
          >
            {t("impressum")}
          </Link>

          <Link
            href="/datenschutz"
            className="transition hover:text-gold"
          >
            {t("privacy")}
          </Link>

          <span className="pt-2 text-white/50">
            {t("createdBy")} DVI Digital Solutions Studio
          </span>
        </div>
      </div>
    </footer>
  );
}