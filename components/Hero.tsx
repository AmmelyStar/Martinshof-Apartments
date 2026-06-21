"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="top" className="relative overflow-hidden bg-bezel">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 pb-24 pt-28 sm:px-6 sm:pb-28 sm:pt-32 xl:grid-cols-[0.92fr_1.08fr] xl:gap-14 xl:px-8 xl:pb-44 xl:pt-40">
        <div className="text-center xl:text-left">
          <div className="mb-5 inline-flex max-w-full items-center justify-center gap-2 text-[10px] uppercase tracking-[0.18em] text-gold sm:text-sm sm:tracking-[0.22em]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold sm:h-2 sm:w-2" />
            <span className="truncate">{t("badge")}</span>
          </div>

          <h1 className="mx-auto max-w-[22rem] break-words font-serif text-[2.45rem] font-bold uppercase leading-[1.08] tracking-[0.02em] text-dark-green sm:max-w-2xl sm:text-5xl md:text-6xl xl:mx-0 xl:max-w-3xl xl:text-[4.2rem]">
            {t("title")}
          </h1>

          <div className="mx-auto mt-7 flex max-w-xs items-center justify-center gap-4 sm:max-w-sm xl:mx-0 xl:justify-start">
            <span className="h-px flex-1 bg-gold" />
            <span className="text-gold">✦</span>
            <span className="h-px flex-1 bg-gold" />
          </div>

          <p className="mx-auto mt-7 max-w-[21rem] text-base leading-7 text-foreground/80 sm:max-w-xl sm:text-lg sm:leading-8 xl:mx-0 xl:text-left">
            {t("description")}
          </p>

          <div className="mt-9 flex justify-center xl:justify-start">
            <a
              href="#kontakt"
              className="inline-flex w-full max-w-[17rem] items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:brightness-105 sm:w-auto sm:max-w-none sm:px-12 sm:py-5 sm:text-base"
            >
              {t("button")}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl xl:max-w-none xl:pl-4">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/50 p-2 shadow-2xl shadow-dark-green-hover/18 sm:rounded-[2rem] sm:p-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.2rem] sm:aspect-[16/10] sm:rounded-[1.5rem]">
              <Image
                src="/hero.jpg"
                alt={t("imageAlt")}
                fill
                priority
                sizes="(min-width: 1280px) 56vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative z-20 mx-auto -mt-10 w-[92%] rounded-[1.2rem] border border-gold/30 bg-white/90 p-3 shadow-2xl shadow-dark-green-hover/15 backdrop-blur-xl sm:absolute sm:-bottom-12 sm:left-12 sm:right-12 sm:mt-0 sm:w-auto sm:p-5">
            <div className="grid grid-cols-3 divide-x divide-divide text-center">
              <div className="px-2">
                <div className="font-serif text-2xl font-bold text-dark-green sm:text-3xl">
                  4–6
                </div>
                <div className="mt-1 text-[10px] uppercase leading-4 tracking-[0.06em] text-foreground/70 sm:text-xs">
                  {t("stats.persons")}
                </div>
              </div>

              <div className="px-2">
                <div className="font-serif text-2xl font-bold text-dark-green sm:text-3xl">
                  100%
                </div>
                <div className="mt-1 text-[10px] uppercase leading-4 tracking-[0.06em] text-foreground/70 sm:text-xs">
                  {t("stats.beds")}
                </div>
              </div>

              <div className="px-2">
                <div className="font-serif text-2xl font-bold text-dark-green sm:text-3xl">
                  ✓
                </div>
                <div className="mt-1 text-[10px] uppercase leading-4 tracking-[0.06em] text-foreground/70 sm:text-xs">
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