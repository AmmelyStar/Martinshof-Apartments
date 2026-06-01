import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import "../globals.css";
import CookieBanner from "@/components/CookieBanner";



const locales = ["de", "en"];

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

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

    applicationName: t("siteName"),
    creator: t("siteName"),
    publisher: t("siteName"),

    alternates: {
      canonical: `/${locale}`,
      languages: {
        de: "/de",
        en: "/en",
        "x-default": "/de",
      },
    },

    openGraph: {
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
      url: `/${locale}`,
      siteName: t("siteName"),
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t("siteName"),
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["/og-image.jpg"],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
           <CookieBanner />
        </NextIntlClientProvider>
      
    
  );
}
