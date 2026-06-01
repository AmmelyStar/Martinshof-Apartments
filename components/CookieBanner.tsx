"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

const COOKIE_CONSENT_KEY = "martinshof-cookie-consent";

function getInitialVisibility() {
  if (typeof window === "undefined") {
    return false;
  }

  return !localStorage.getItem(COOKIE_CONSENT_KEY);
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(getInitialVisibility);

  const t = useTranslations("CookieBanner");
  const locale = useLocale();

  function acceptCookies() {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  }

  function declineCookies() {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-5 bottom-5 z-50 mx-auto max-w-5xl">
      <div className="rounded-[2rem] border border-[#eadfcd] bg-white p-5 shadow-2xl shadow-dark-green/20 md:p-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">
              {t("label")}
            </p>

            <h2 className="mt-2 font-serif text-2xl text-dark-green">
              {t("title")}
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-green">
              {t("text")}{" "}
              <Link
                href={`/${locale}/datenschutz`}
                className="text-gold transition hover:underline"
              >
                {t("privacyLink")}
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={declineCookies}
              className="rounded-full border border-dark-green px-5 py-3 text-sm font-semibold text-dark-green transition hover:bg-dark-green hover:text-white"
            >
              {t("decline")}
            </button>

            <button
              type="button"
              onClick={acceptCookies}
              className="rounded-full bg-gold px-5 py-3 text-sm font-semibold text-white transition hover:bg-dark-green"
            >
              {t("accept")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}