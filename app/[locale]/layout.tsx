import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";
import "../globals.css";
import CookieBanner from "@/components/CookieBanner";

const nunitoSans = localFont({
  src: [
    {
      path: "../fonts/NunitoSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/NunitoSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/NunitoSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/NunitoSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-nunito",
  display: "swap",
});

const crimsonPro = localFont({
  src: [
    {
      path: "../fonts/CrimsonPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/CrimsonPro-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/CrimsonPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-crimson",
  display: "swap",
});

const locales = ["de", "en"] as const;

type Locale = (typeof locales)[number];

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://martinshof-rothenburg.de";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t("title"),
      template: `%s | ${t("siteName")}`,
    },
    description: t("description"),
    keywords: t("keywords"),
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <div className={`${nunitoSans.variable} ${crimsonPro.variable}`}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
        <CookieBanner />
      </NextIntlClientProvider>
    </div>
  );
}