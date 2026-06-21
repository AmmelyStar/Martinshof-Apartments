"use client";

import { useTranslations } from "next-intl";

const processItems = [
  "rentalDuration",
  "pricing",
  "invoice",
  "transparentProcess",
  "shortNotice",
];

export default function ConditionsSection() {
  const t = useTranslations("ConditionsSection");

  return (
    <section id="konditionen" className="bg-dark-green py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <div className="text-center xl:text-left">
            <p className="text-sm uppercase tracking-wide text-gold">
              {t("eyebrow")}
            </p>

            <h2 className="mx-auto mt-4 max-w-xl font-serif text-4xl tracking-wide text-white md:text-5xl xl:mx-0">
              {t("title")}
            </h2>

            <p className="text-balance mx-auto mt-6 max-w-lg text-lg leading-8 text-white/72 xl:mx-0">
              {t("description")}
            </p>

            <div className="mt-8 flex justify-center xl:justify-start">
              <a
                href="#kontakt"
                className="inline-flex rounded-full bg-gold px-7 py-4 text-sm font-semibold tracking-[0.03em] text-white shadow-xl shadow-black/20 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-dark-green"
              >
                {t("button")}
              </a>
            </div>
          </div>

          <div className="mx-auto grid w-full max-w-140 gap-3 xl:max-w-none">
            {processItems.map((item, index) => (
              <div
                key={item}
                className="group grid grid-cols-1 items-center rounded-3xl border border-white/10 bg-white/8 px-6 py-5 text-center backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/12 sm:grid-cols-[44px_1fr] sm:gap-5 sm:text-left"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-gold font-serif text-base font-semibold text-white shadow-lg shadow-black/15 sm:mx-0 xl:h-11 xl:w-11 xl:text-lg">
                  {index + 1}
                </div>

                <p className="mt-3 text-base leading-7 text-white/82 sm:mt-0">
                  {t(`process.${item}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}