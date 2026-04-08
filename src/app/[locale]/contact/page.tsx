import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./contact-form";
import { Hero } from "@/components/Hero";

export async function generateMetadata({
  params,
}: {
  params?: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params)?.locale ?? "zh-cn";
  const t = await getTranslations({ locale });
  return {
    title: `${t("contact")} - ${t("brand")}`,
  };
};


const contactInfo = [
  {
    icon: Mail,
    titleKey: "Contact.info.email.title",
    content: "contact@geometryvision.online",
    href: "mailto:contact@geometryvision.online",
  },
  {
    icon: Phone,
    titleKey: "Contact.info.phone.title",
    contentKey: "Contact.info.phone.content",
    href: null,
  },
  {
    icon: MapPin,
    titleKey: "Contact.info.address.title",
    contentKey: "Contact.info.address.content",
    href: null,
  },
];

export default async function ContactPage({
  params,
}: {
  params?: Promise<{ locale: string }>;
}) {
  const locale = (await params)?.locale ?? "zh-cn";
  const t = await getTranslations({ locale });

  const faqs = [
    { qKey: "Contact.faq.q1", aKey: "Contact.faq.a1" },
    { qKey: "Contact.faq.q2", aKey: "Contact.faq.a2" },
    { qKey: "Contact.faq.q3", aKey: "Contact.faq.a3" },
  ];

  return (
    <>
      <Hero
        title={t("Contact.title")}
        description={t("Contact.description")}
      />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#003366] mb-6">{t("Contact.contactTitle")}</h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#00CCFF] flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#003366] mb-1">{t(info.titleKey)}</h3>
                        {info.href ? (
                          <a href={info.href} className="text-gray-600 hover:text-[#0066FF] transition-colors">
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.contentKey ? t(info.contentKey) : ''}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Office Hours */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-[#003366] mb-2">{t("Contact.hours.title")}</h3>
                <p className="text-gray-600 text-sm">{t("Contact.hours.weekdays")}</p>
                <p className="text-gray-600 text-sm">{t("Contact.hours.response")}</p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#003366] mb-8 text-center">{t("Contact.faq.title")}</h2>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#003366] mb-2">{t(faq.qKey)}</h3>
                <p className="text-gray-600 text-sm">{t(faq.aKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
