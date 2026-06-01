"use client";

import { FormEvent, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("ContactSection");
  const locale = useLocale();

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const privacy = formData.get("privacy") === "on";

    const nameRegex = /^[A-Za-zÄÖÜäöüßÀ-ÿ\s'-]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      setError(t("errors.nameRequired"));
      return;
    }

    if (!nameRegex.test(name)) {
      setError(t("errors.nameInvalid"));
      return;
    }

    if (!email) {
      setError(t("errors.emailRequired"));
      return;
    }

    if (!emailRegex.test(email)) {
      setError(t("errors.emailInvalid"));
      return;
    }

    if (!message) {
      setError(t("errors.messageRequired"));
      return;
    }

    if (!privacy) {
      setError(t("errors.privacyRequired"));
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,
          message,
          privacy,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.message || t("errors.server"));
        return;
      }

      setStatus(t("success"));
      form.reset();
    } catch {
      setError(t("errors.server"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="kontakt" className="px-5 pb-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] bg-white p-6 shadow-2xl shadow-dark-green/10 md:p-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-4xl bg-dark-green/90 p-8 text-white md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">
            {t("eyebrow")}
          </p>

          <h2 className="mt-4 font-serif text-4xl tracking-wide">
            {t("title")}
          </h2>

          <p className="mt-5 border-b-2 border-gold/30 pb-10 text-balance text-white">
            {t("description")}
          </p>

          <div className="mt-10 space-y-5 text-white/86">
            <p>
              <a href="tel:+436643567360" className="transition hover:text-gold">
                +43 664 3567 360
              </a>
            </p>

            <p>
              <a
                href="mailto:weingut@martinshof.at"
                className="transition hover:text-gold"
              >
                weingut@martinshof.at
              </a>
            </p>

            <p>{t("address")}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 self-center">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="rounded-2xl border border-[#eadfcd] bg-[#fbf8f2] px-5 py-4 outline-none transition focus:border-gold"
              placeholder={t("fields.name")}
              name="name"
              type="text"
              minLength={2}
            />

            <input
              className="rounded-2xl border border-[#eadfcd] bg-[#fbf8f2] px-5 py-4 outline-none transition focus:border-gold"
              placeholder={t("fields.email")}
              name="email"
              type="email"
            />
          </div>

          <input
            className="rounded-2xl border border-[#eadfcd] bg-[#fbf8f2] px-5 py-4 outline-none transition focus:border-gold"
            placeholder={t("fields.company")}
            name="company"
            type="text"
          />

          <input
            className="rounded-2xl border border-[#eadfcd] bg-[#fbf8f2] px-5 py-4 outline-none transition focus:border-gold"
            placeholder={t("fields.phone")}
            name="phone"
            type="tel"
          />

          <textarea
            className="min-h-36 resize-none rounded-2xl border border-[#eadfcd] bg-[#fbf8f2] px-5 py-4 outline-none transition focus:border-gold"
            placeholder={t("fields.message")}
            name="message"
          />

          <label className="flex items-start gap-3 text-sm leading-6 text-gray-green">
            <input type="checkbox" className="mt-1" name="privacy" />

            <span>
              {t("privacyPrefix")}{" "}
              <a
                href={`/${locale}/datenschutz`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold transition hover:underline"
              >
                {t("privacyLink")}
              </a>{" "}
              {t("privacySuffix")}
            </span>
          </label>

          {error && <p className="text-sm font-medium text-red-600">{error}</p>}

          {status && (
            <p className="rounded-2xl bg-green-50 px-5 py-4 text-sm font-medium text-green-800">
              {status}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-full bg-gold px-7 py-4 font-semibold text-white transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-(--dark-green)/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? t("sending") : t("button")}
          </button>
        </form>
      </div>
    </section>
  );
}