"use client";

import { Send } from "lucide-react";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("Contact.form");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const company = formData.get("company") || "";
    const message = formData.get("message") || "";

    const mailtoLink = `mailto:contact@geometryvision.online?subject=${encodeURIComponent(`${t("subject")} - ${String(name)}`)}&body=${encodeURIComponent(`${t("name")}: ${name}\n${t("email")}: ${email}\n${t("company")}: ${company}\n\n${t("message")}:\n${message}`)}`;
    window.location.href = mailtoLink;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#003366] mb-6">{t("formTitle")}</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              {t("name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
              placeholder={t("namePlaceholder")}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            {t("company")}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
            placeholder={t("companyPlaceholder")}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            {t("subject")}
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
          >
            <option value="">{t("subjectPlaceholder")}</option>
            <option value="product">{t("subjects.product")}</option>
            <option value="solution">{t("subjects.solution")}</option>
            <option value="partnership">{t("subjects.partnership")}</option>
            <option value="career">{t("subjects.career")}</option>
            <option value="other">{t("subjects.other")}</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            {t("message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent resize-none"
            placeholder={t("messagePlaceholder")}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[#0066FF] to-[#00CCFF] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          <Send className="w-4 h-4" />
          {t("submit")}
        </button>
      </form>
    </div>
  );
}
