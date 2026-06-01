import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function DatenschutzPage() {
  const t = await getTranslations("DatenschutzPage");

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

          <div className="mt-10 space-y-8 text-gray-green">
            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                {t("sections.responsible.title")}
              </h2>

              <p className="leading-7">
                Martin Michael GmbH
                <br />
                Geschäftsführer: Michael P. Martin
                <br />
                Hauptstraße 28
                <br />
                2183 Neusiedl/Zaya
                <br />
                {t("country")}
                <br />
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
                {t("sections.general.title")}
              </h2>

              <p className="leading-7">{t("sections.general.text")}</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                {t("sections.contactForm.title")}
              </h2>

              <p className="leading-7">{t("sections.contactForm.text")}</p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>{t("sections.contactForm.items.name")}</li>
                <li>{t("sections.contactForm.items.email")}</li>
                <li>{t("sections.contactForm.items.phone")}</li>
                <li>{t("sections.contactForm.items.company")}</li>
                <li>{t("sections.contactForm.items.message")}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                {t("sections.legalBasis.title")}
              </h2>

              <p className="leading-7">
                {t("sections.legalBasis.before")}{" "}
                <a
                  href="https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold transition hover:underline"
                >
                  Art. 6 Abs. 1 lit. a DSGVO
                </a>{" "}
                {t("sections.legalBasis.between")}{" "}
                <a
                  href="https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold transition hover:underline"
                >
                  Art. 6 Abs. 1 lit. b DSGVO
                </a>
                , {t("sections.legalBasis.after")}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                {t("sections.storage.title")}
              </h2>

              <p className="leading-7">{t("sections.storage.text")}</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                {t("sections.disclosure.title")}
              </h2>

              <p className="leading-7">{t("sections.disclosure.text")}</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                {t("sections.cookies.title")}
              </h2>

              <p className="leading-7">{t("sections.cookies.text")}</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                {t("sections.rights.title")}
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>{t("sections.rights.items.information")}</li>
                <li>{t("sections.rights.items.correction")}</li>
                <li>{t("sections.rights.items.deletion")}</li>
                <li>{t("sections.rights.items.restriction")}</li>
                <li>{t("sections.rights.items.portability")}</li>
                <li>{t("sections.rights.items.objection")}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                {t("sections.contact.title")}
              </h2>

              <p className="leading-7">
                {t("sections.contact.text")}{" "}
                <a
                  href="mailto:weingut@martinshof.at"
                  className="text-gold transition hover:underline"
                >
                  weingut@martinshof.at
                </a>
              </p>
            </section>

            <p className="border-t border-[#eadfcd] pt-6 text-sm text-gray-green/70">
              {t("updated")}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}