"use client";

import { useTranslations } from "next-intl";
import { Building2, Hospital, Satellite, GraduationCap, Microscope } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/ui";

const partnerKeys = [
  { key: "cuhk", Icon: GraduationCap, color: "bg-purple-100 text-purple-700" },
  { key: "pwh", Icon: Hospital, color: "bg-blue-100 text-blue-700" },
  { key: "sth", Icon: Hospital, color: "bg-sky-100 text-sky-700" },
  { key: "gfph", Icon: Building2, color: "bg-teal-100 text-teal-700" },
  { key: "bvt", Icon: Satellite, color: "bg-green-100 text-green-700" },
  { key: "shsl", Icon: Microscope, color: "bg-orange-100 text-orange-700" },
];

export function PartnersSection() {
  const t = useTranslations("Home.partners");

  return (
    <Section background="gray" className="py-16">
      <SectionHeader title={t("title")} />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
        {partnerKeys.map(({ key, Icon, color }) => (
          <div
            key={key}
            className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#0066FF]/30 hover:shadow-md transition-all"
          >
            <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", color)}>
              <Icon className="w-6 h-6" />
            </div>
            <span className="text-xs text-gray-600 text-center font-medium leading-tight">
              {t(`items.${key}`)}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
