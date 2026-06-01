"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function First() {
  const t = useTranslations("First");

  return (
    <div className="mx-auto max-w-9xl">
      <Image
        src="/1.jpg"
        alt={t("imageAlt")}
        width={1400}
        height={560}
        className="aspect-10/2 w-full object-cover"
      />
    </div>
  );
}