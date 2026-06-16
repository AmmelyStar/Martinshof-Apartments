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
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-white p-6 shadow-2xl shadow-black/10 md:p-10 lg:grid-cols-[0.85fr_1.15fr]">

        <div className="rounded-[2rem] bg-[#0b4563] p-8 text-white md:p-10">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">
            {t("eyebrow")}
          </p>

          <h2 className="mt-4 font-serif text-3xl font-bold uppercase leading-tight tracking-[0.04em] text-white md:text-4xl">
  {t("title")}
</h2>

          <div className="mt-5 flex items-center gap-4">
            <span className="h-px flex-1 bg-gold/50" />
            <span className="text-gold">✦</span>
            <span className="h-px flex-1 bg-gold/50" />
          </div>

          <p className="mt-6 text-white/85">
            {t("description")}
          </p>

          <div className="mt-10 space-y-5 text-white/85">
            <p>
              <a
                href="tel:+436643567360"
                className="transition hover:text-gold"
              >
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
              name="name"
              type="text"
              placeholder={t("fields.name")}
              className="rounded-xl border border-gold/20 bg-white px-5 py-4 outline-none transition focus:border-gold"
            />

            <input
              name="email"
              type="email"
              placeholder={t("fields.email")}
              className="rounded-xl border border-gold/20 bg-white px-5 py-4 outline-none transition focus:border-gold"
            />
          </div>

          <input
            name="company"
            type="text"
            placeholder={t("fields.company")}
            className="rounded-xl border border-gold/20 bg-white px-5 py-4 outline-none transition focus:border-gold"
          />

          <input
            name="phone"
            type="tel"
            placeholder={t("fields.phone")}
            className="rounded-xl border border-gold/20 bg-white px-5 py-4 outline-none transition focus:border-gold"
          />

          <textarea
            name="message"
            placeholder={t("fields.message")}
            className="min-h-40 resize-none rounded-xl border border-gold/20 bg-white px-5 py-4 outline-none transition focus:border-gold"
          />

          <label className="flex items-start gap-3 text-sm text-foreground/70">
            <input
              type="checkbox"
              name="privacy"
              className="mt-1"
            />

            <span>
              {t("privacyPrefix")}{" "}
              <a
                href={`/${locale}/datenschutz`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                {t("privacyLink")}
              </a>{" "}
              {t("privacySuffix")}
            </span>
          </label>

          {error && (
            <p className="text-sm font-medium text-red-600">
              {error}
            </p>
          )}

          {status && (
            <p className="rounded-xl bg-green-50 px-5 py-4 text-sm text-green-800">
              {status}
            </p>
          )}

          <div className="mt-4">
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-5 rounded-full bg-gold px-10 py-4 font-bold text-white shadow-lg shadow-gold/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#b98b3c]"
            >
              <span>
                {loading ? t("sending") : t("button")}
              </span>

              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}