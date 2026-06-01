"use client";

import { useTranslations } from "next-intl";
import { MapPin, MessageCircle, Home } from "lucide-react";

const reasons = [
  {
    key: "location",
    icon: MapPin,
  },
  {
    key: "communication",
    icon: MessageCircle,
  },
  {
    key: "apartments",
    icon: Home,
  },
];

export default function WhyMartinshof() {
  const t = useTranslations("WhyMartinshof");

  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto flex max-w-2xl flex-col gap-6 text-center text-balance">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">
              {t("eyebrow")}
            </p>

            <h2 className="mt-4 font-serif text-4xl text-dark-green md:text-5xl">
              {t("title")}
            </h2>
          </div>

          <p className="text-lg leading-8 text-gray-green">
            {t("description")}
          </p>
        </div>

        <div className="mt-12 rounded-4xl bg-white p-3 shadow-2xl shadow-dark-green/10">
          <div className="grid gap-3 md:grid-cols-3">
            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.key}
                  className="flex min-h-58 flex-col items-center justify-center rounded-[1.6rem] bg-[#f7f2ea] p-6 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-dark-green">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>

                  <h3 className="max-w-72 font-serif text-base uppercase tracking-wide text-dark-green">
                    {t(`cards.${item.key}`)}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}