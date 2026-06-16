"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="top" className="relative overflow-hidden bg-bezel">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 pb-32 pt-36 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pb-44 lg:pt-40">
        <div className="mb-12 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center justify-center gap-3 text-sm uppercase tracking-[0.22em] text-gold">
            <span className="h-2 w-2 rounded-full bg-gold" />
            {t("badge")}
          </div>

          <h1 className="text-balance mx-auto max-w-3xl font-serif text-5xl font-bold uppercase leading-[1.05] tracking-[0.03em] text-dark-green md:text-6xl lg:mx-0 lg:text-[4.2rem]">
            {t("title")}
          </h1>

          <div className="mx-auto mt-7 flex max-w-sm items-center justify-center gap-4 lg:mx-0 lg:justify-start">
            <span className="h-px flex-1 bg-gold" />
            <span className="text-gold">✦</span>
            <span className="h-px flex-1 bg-gold" />
          </div>

          <p className="mx-auto mt-7 max-w-xl text-center text-lg leading-8 text-foreground/80 lg:mx-0 lg:text-left">
            {t("description")}
          </p>

          <div className="mt-10 flex justify-center lg:justify-start">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full bg-gold px-12 py-5 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:brightness-105"
            >
              {t("button")}
            </a>
          </div>
        </div>

        <div className="relative -mt-5 lg:pl-4">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/50 p-3 shadow-2xl shadow-dark-green-hover/18">
            <div className="relative aspect-16/10 overflow-hidden rounded-[1.5rem]">
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

          <div className="absolute -bottom-12 left-6 right-6 rounded-[1.4rem] border border-gold/30 bg-white/90 p-5 shadow-2xl shadow-dark-green-hover/15 backdrop-blur-xl md:left-12 md:right-12">
            <div className="grid grid-cols-3 divide-x divide-divide text-center">
              <div className="px-3">
                <div className="font-serif text-3xl font-bold text-dark-green">
                  4–6
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.08em] leading-4 text-foreground/70">
                  {t("stats.persons")}
                </div>
              </div>

              <div className="px-3">
                <div className="font-serif text-3xl font-bold text-dark-green">
                  100%
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.08em] leading-4 text-foreground/70">
                  {t("stats.beds")}
                </div>
              </div>

              <div className="px-3">
                <div className="font-serif text-3xl font-bold text-dark-green">
                  ✓
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.08em] leading-4 text-foreground/70">
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