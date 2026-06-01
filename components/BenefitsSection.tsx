"use client";

import { useTranslations } from "next-intl";
import { Trees, SquareParking, Wifi, Sparkles } from "lucide-react";

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
];

export default function BenefitsSection() {
  const t = useTranslations("BenefitsSection");

  return (
    <section id="vorteile" className="relative z-10 -mt-10 px-5 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 rounded-4xl bg-white p-3 shadow-2xl shadow-[#10251d]/10 md:grid-cols-4">
        {benefits.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.key}
              className="flex flex-col items-center rounded-[1.4rem] border border-[#eadfcd] bg-[#fbf8f2] px-3 py-6 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c69b4a]/12 text-gold">
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </div>

              <h3 className="font-serif text-lg uppercase tracking-wide text-dark-green">
                {t(`cards.${item.key}.title`)}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-green">
                {t(`cards.${item.key}.text`)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}