import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function ImpressumPage() {
  const t = await getTranslations("ImpressumPage");

  return (
    <main className="min-h-screen bg-[#f6f1e8] px-5 py-8 text-[#14231c] lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 flex flex-col gap-5 rounded-[2rem] bg-dark-green px-6 py-6 text-white shadow-2xl shadow-dark-green/10 md:flex-row md:items-center md:justify-between md:px-8">
          <Link href={t("homeHref")} className="font-serif text-3xl tracking-wide">
            Martinshof Apartments
          </Link>

          <Link
            href={t("homeHref")}
            className="w-fit rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-dark-green"
          >
            {t("backHome")}
          </Link>
        </header>

        <section className="rounded-[2.5rem] bg-white p-6 shadow-2xl shadow-dark-green/10 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">
            {t("eyebrow")}
          </p>

          <h1 className="mt-4 font-serif text-4xl text-dark-green md:text-5xl">
            {t("title")}
          </h1>

          <div className="mt-10 grid gap-8 text-gray-green md:grid-cols-2">
            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                {t("sections.operator.title")}
              </h2>

              <p className="leading-7">
                Martin Michael GmbH
                <br />
                {t("sections.operator.manager")}: Michael P. Martin
                <br />
                Hauptstraße 28
                <br />
                2183 Neusiedl/Zaya
                <br />
                {t("country")}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                {t("sections.contact.title")}
              </h2>

              <p className="leading-7">
                {t("sections.contact.phone")}:{" "}
                <a
                  href="tel:+43253389777"
                  className="text-gold transition hover:underline"
                >
                  +43 2533 89777
                </a>

                <br />

                {t("sections.contact.mobile")}:{" "}
                <a
                  href="tel:+436643567360"
                  className="text-gold transition hover:underline"
                >
                  +43 664 3567360
                </a>

                <br />

                E-Mail:{" "}
                <a
                  href="mailto:weingut@martinshof.at"
                  className="text-gold transition hover:underline"
                >
                  weingut@martinshof.at
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                {t("sections.company.title")}
              </h2>

              <p className="leading-7">
                UID-Nr.: ATU39826104
                <br />
                Firmenbuchnummer: FN 72006 T
                <br />
                {t("sections.company.court")}: Landesgericht Korneuburg
                <br />
                DVR: 0908495
                <br />
                EORI-Nr.: ATEOS1000012026
                <br />
                ÖNACE-Nr.: 47.25-0
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                {t("sections.responsible.title")}
              </h2>

              <p className="leading-7">
                Michael Martin
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:weingut@martinshof.at"
                  className="text-gold transition hover:underline"
                >
                  weingut@martinshof.at
                </a>
              </p>
            </section>
          </div>

          <div className="mt-10 border-t border-[#eadfcd] pt-6">
            <p className="text-sm text-gray-green/70">
              {t("webdesign.label")}:{" "}
              <span className="font-medium text-gray-green">
                DVI Digital Solutions Studio
              </span>{" "}
              ·{" "}
              <a
                href="mailto:dvi.digital2025@gmail.com"
                className="text-gold transition hover:underline"
              >
                dvi.digital2025@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}