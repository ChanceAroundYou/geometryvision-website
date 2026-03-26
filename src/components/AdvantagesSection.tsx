import { useTranslations } from "next-intl";
import { Section, SectionHeader, Card } from "@/components/ui";

export function AdvantagesSection() {
  const t = useTranslations("Home.advantages");

  const advantages = [
    {
      title: t("items.academic.title"),
      description: t("items.academic.description"),
    },
    {
      title: t("items.crossdisciplinary.title"),
      description: t("items.crossdisciplinary.description"),
    },
    {
      title: t("items.clinical.title"),
      description: t("items.clinical.description"),
    },
    {
      title: t("items.industry.title"),
      description: t("items.industry.description"),
    },
  ];

  return (
    <Section background="white">
      <SectionHeader title={t("title")} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {advantages.map((advantage, index) => (
          <Card key={index} hover className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00CCFF] flex items-center justify-center">
              <span className="text-white font-bold">{index + 1}</span>
            </div>
            <h3 className="text-lg font-semibold text-[#003366] mb-2">
              {advantage.title}
            </h3>
            <p className="text-gray-600 text-sm">{advantage.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
