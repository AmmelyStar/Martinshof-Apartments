import BenefitsSection from "@/components/BenefitsSection";
import ConditionsSection from "@/components/ConditionsSection";
import ContactSection from "@/components/ContactSection";
import First from "@/components/First";
import Footer from "@/components/Footer";
import Funktional from "@/components/Funktional";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TargetGroups from "@/components/TargetGroups";
import WhyMartinshof from "@/components/WhyMartinshof";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`../../messages/${locale}.json`)).default;

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://martinshof-rothenburg.de";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: messages.Metadata.organizationName,
    url: `${baseUrl}/${locale}`,
    logo: `${baseUrl}/logo.png`,
    sameAs: [],
    address: {
      "@type": "PostalAddress",
      addressCountry: "DE",
    },
  };

  return (
    <main className="pt-10 bg-(--bezel) text-[#14231c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <Header />
      <Hero />
      <First />
      <BenefitsSection />
      <Funktional />
      <TargetGroups />
      <ConditionsSection />
      <WhyMartinshof />
      <ContactSection />
      <Footer />
    </main>
  );
}
