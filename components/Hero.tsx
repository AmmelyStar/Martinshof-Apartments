"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-32 pt-24 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pb-44 lg:pt-24">
        <div className="mb-12 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center justify-center gap-3 text-gold uppercase tracking-wide">
            <span className="h-2 w-2 rounded-full bg-gold" />
            {t("badge")}
          </div>

          <h1 className="text-balance mx-auto max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-(--dark-green) md:text-7xl lg:mx-0 lg:text-[4rem]">
            {t("title")}
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-center text-lg leading-8 text-gray-green lg:mx-0 lg:text-left">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:items-start lg:justify-start">
            <a
              href="#kontakt"
              className="rounded-full bg-(--dark-green)/80 px-12 py-4 text-center font-serif text-base tracking-wide text-white shadow-xl shadow-(--dark-green)/20 transition hover:-translate-y-0.5 hover:bg-(--dark-green-hover)"
            >
              {t("button")}
            </a>
          </div>
        </div>

        <div className="relative -mt-5 lg:pl-4">
          <div className="relative overflow-hidden rounded-4xl border border-white/70 bg-white/50 p-3 shadow-2xl shadow-(--dark-green-hover)/18">
            <div className="relative aspect-16/10 overflow-hidden rounded-3xl">
              <Image
                src="/hero.jpg"
                alt={t("imageAlt")}
                fill
                priority
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-12 left-6 right-6 rounded-[1.7rem] border border-white/65 bg-white/82 p-4 shadow-2xl shadow-(--dark-green-hover)/15 backdrop-blur-xl md:left-12 md:right-12">
            <div className="grid grid-cols-3 divide-x divide-(--divide) text-center">
              <div className="px-3">
                <div className="font-serif text-2xl font-semibold text-(--dark-green)">
                  4–6
                </div>
                <div className="mt-1 text-xs leading-4 text-(--gray-green)">
                  {t("stats.persons")}
                </div>
              </div>

              <div className="px-3">
                <div className="font-serif text-2xl font-semibold text-(--dark-green)">
                  100%
                </div>
                <div className="mt-1 text-xs leading-4 text-(--gray-green)">
                  {t("stats.beds")}
                </div>
              </div>

              <div className="px-3">
                <div className="font-serif text-2xl font-semibold text-(--dark-green)">
                  ✓
                </div>
                <div className="mt-1 text-xs leading-4 text-(--gray-green)">
                  {t("stats.kitchen")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}