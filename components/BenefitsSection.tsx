"use client";

import { useTranslations } from "next-intl";
import {
  Trees,
  SquareParking,
  Wifi,
  Sparkles,
  MapPinned,
} from "lucide-react";

const benefits = [
  {
    key: "location",
    icon: Trees,
  },
  {
    key: "parking",
    icon: SquareParking,
  },
  {
    key: "wifi",
    icon: Wifi,
  },
  {
    key: "cleaning",
    icon: Sparkles,
  },
  {
    key: "vienna",
    icon: MapPinned,
  },
];

export default function BenefitsSection() {
  const t = useTranslations("BenefitsSection");

  return (
    <section id="vorteile" className="relative z-10 -mt-10 px-5 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 rounded-[2rem] bg-white p-4 shadow-2xl shadow-dark-green/10 sm:grid-cols-2 lg:grid-cols-5">
        {benefits.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.key}
              className="group flex flex-col items-center border border-gold/20 bg-bezel px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center border border-gold/30 bg-white text-gold transition-all duration-300 group-hover:bg-dark-green group-hover:text-white">
                <Icon className="h-6 w-6" strokeWidth={1.6} />
              </div>

              <div className="mb-3 flex w-full items-center gap-2">
                <span className="h-px flex-1 bg-gold/40" />
                <span className="text-gold">✦</span>
                <span className="h-px flex-1 bg-gold/40" />
              </div>

              <h3 className="font-serif text-base font-bold uppercase tracking-[0.1em] text-dark-green">
                {t(`cards.${item.key}.title`)}
              </h3>

              <p className="mt-2 text-sm leading-6 text-foreground/75">
                {t(`cards.${item.key}.text`)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}