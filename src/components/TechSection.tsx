"use client";

import { useTranslations } from "next-intl";
import { TrendingUp, Shield, Brain, Cpu } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui";

const technologies = [
  { icon: TrendingUp, key: "geometric" },
  { icon: Shield, key: "conformal" },
  { icon: Brain, key: "pde" },
  { icon: Cpu, key: "deeplearning" },
];

export function TechSection() {
  const t = useTranslations("Home.tech");

  return (
    <Section background="white">
      <SectionHeader title={t("title")} description={t("description")} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00CCFF] mb-4">
              <tech.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#003366] mb-2">
              {t(`items.${tech.key}.title`)}
            </h3>
            <p className="text-gray-600 text-sm">{t(`items.${tech.key}.description`)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
