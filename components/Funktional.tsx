"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const houses = [
  {
    key: "anneMari",
    img: "/01a.png",
  },
  {
    key: "erich",
    img: "/02a.png",
  },
  {
    key: "herwig",
    img: "/03a.png",
  },
];

const apartmentFeatures = [
  "apartments",
  "persons",
  "kitchen",
  "livingArea",
  "equipped",
];

export default function Funktional() {
  const t = useTranslations("Funktional");

  return (
    <section id="apartments" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-wide text-gold">
          {t("eyebrow")}
        </p>

        <h2 className="text-balance mt-4 font-serif text-4xl text-dark-green md:text-6xl">
          {t("title")}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-green">
          {t("description")}
        </p>
      </div>

      <div className="mt-16 grid items-center gap-14 xl:grid-cols-[0.9fr_1fr]">
        <div className="relative mx-auto min-h-90 w-full max-w-85 md:max-w-130 xl:max-w-none">
          <div className="absolute left-0 top-16 h-65 w-52.5 overflow-hidden rounded-[1.7rem] bg-white p-2 shadow-2xl shadow-dark-green/30 ring-1 ring-white/70 md:h-82.5 md:w-67.5">
            <div className="relative h-full w-full overflow-hidden rounded-[1.25rem]">
              <Image
                src="/02.jpg"
                alt={t("images.bedroom")}
                fill
                priority
                sizes="(min-width: 1280px) 270px, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute left-37.5 top-0 h-62.5 w-47.5 overflow-hidden rounded-[1.7rem] bg-white p-2 shadow-2xl shadow-dark-green/30 ring-1 ring-white/70 md:left-55 md:h-80 md:w-60">
            <div className="relative h-full w-full overflow-hidden rounded-[1.25rem]">
              <Image
                src="/03.jpg"
                alt={t("images.livingArea")}
                fill
                priority
                sizes="(min-width: 1280px) 240px, 42vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-160 xl:max-w-none">
          <div className="mx-auto w-full max-w-130 space-y-5 xl:mx-0 xl:max-w-none">
            {apartmentFeatures.map((feature) => (
              <div
                key={feature}
                className="grid grid-cols-1 border-b border-gold/30 pb-5 xl:grid-cols-[8px_1fr] xl:gap-4"
              >
                <span className="mt-2 hidden h-2 w-2 rounded-full bg-gold xl:block" />

                <div className="text-center xl:text-left">
                  <h3 className="font-serif text-lg uppercase tracking-wide text-dark-green">
                    {t(`features.${feature}.title`)}
                  </h3>

                  <p className="mt-2 text-base leading-7 text-gray-green">
                    {t(`features.${feature}.text`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 grid gap-5 xl:grid-cols-3">
        {houses.map((house) => (
          <article
            key={house.key}
            className="group overflow-hidden rounded-4xl bg-white shadow-xl shadow-[#10251d]/8 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#10251d]/14"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-[#eee4d4]">
              <Image
                src={house.img}
                alt={t(`houses.${house.key}.name`)}
                fill
                sizes="(min-width: 1280px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/5 to-transparent opacity-80" />
            </div>

            <div className="p-7">
              <h3 className="font-serif text-lg uppercase tracking-wide text-dark-green">
                {t(`houses.${house.key}.name`)}
              </h3>

              <p className="mt-3 leading-7 text-gray-green">
                {t(`houses.${house.key}.text`)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}