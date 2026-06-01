"use client";

import { useTranslations } from "next-intl";
import { Building2, Hammer, Factory, UsersRound } from "lucide-react";

const targetGroups = [
  {
    key: "construction",
    icon: Building2,
  },
  {
    key: "assembly",
    icon: Hammer,
  },
  {
    key: "industry",
    icon: Factory,
  },
  {
    key: "teams",
    icon: UsersRound,
  },
];

export default function TargetGroups() {
  const t = useTranslations("TargetGroups");

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="text-center lg:text-left">
            <p className="mb-6 text-sm uppercase tracking-wide text-gold">
              {t("eyebrow")}
            </p>

            <h2 className="text-balance mt-4 font-serif text-4xl text-dark-green md:text-5xl">
              {t("title")}
            </h2>

            <p className="text-balance mt-6 text-lg leading-8 text-gray-green">
              {t("description")}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {targetGroups.map((group) => {
              const Icon = group.icon;

              return (
                <div
                  key={group.key}
                  className="flex min-h-48 flex-col items-center justify-center rounded-[1.6rem] border border-gold/30 bg-[#f7f2ea] p-7 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-dark-green">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.8} />
                  </div>

                  <h3 className="font-serif text-lg uppercase tracking-wide text-dark-green">
                    {t(`cards.${group.key}`)}
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