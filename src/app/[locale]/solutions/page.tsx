import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Factory, Hospital, Building2, ShoppingCart, Car, Cpu, TrendingUp, Shield, Brain } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Section, SectionHeader, Card, CTASection, IconBadge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Solutions - GeometryVision",
};

const solutions = [
  {
    icon: Factory,
    titleKey: "Solutions.items.manufacturing.title",
    descKey: "Solutions.items.manufacturing.desc",
    appsKey: "Solutions.items.manufacturing.apps",
    benefitsKey: "Solutions.items.manufacturing.benefits",
  },
  {
    icon: Hospital,
    titleKey: "Solutions.items.healthcare.title",
    descKey: "Solutions.items.healthcare.desc",
    appsKey: "Solutions.items.healthcare.apps",
    benefitsKey: "Solutions.items.healthcare.benefits",
  },
  {
    icon: Building2,
    titleKey: "Solutions.items.construction.title",
    descKey: "Solutions.items.construction.desc",
    appsKey: "Solutions.items.construction.apps",
    benefitsKey: "Solutions.items.construction.benefits",
  },
  {
    icon: ShoppingCart,
    titleKey: "Solutions.items.retail.title",
    descKey: "Solutions.items.retail.desc",
    appsKey: "Solutions.items.retail.apps",
    benefitsKey: "Solutions.items.retail.benefits",
  },
  {
    icon: Car,
    titleKey: "Solutions.items.transportation.title",
    descKey: "Solutions.items.transportation.desc",
    appsKey: "Solutions.items.transportation.apps",
    benefitsKey: "Solutions.items.transportation.benefits",
  },
  {
    icon: Cpu,
    titleKey: "Solutions.items.education.title",
    descKey: "Solutions.items.education.desc",
    appsKey: "Solutions.items.education.apps",
    benefitsKey: "Solutions.items.education.benefits",
  },
];

const advantages = [
  { key: "academic" },
  { key: "crossdisciplinary" },
  { key: "clinical" },
  { key: "industry" },
];

const technologies = [
  { icon: TrendingUp, key: "geometric" },
  { icon: Shield, key: "conformal" },
  { icon: Brain, key: "pde" },
  { icon: Cpu, key: "deeplearning" },
];

const processSteps = [
  { step: "01", titleKey: "Solutions.process.step1", descKey: "Solutions.process.step1Desc" },
  { step: "02", titleKey: "Solutions.process.step2", descKey: "Solutions.process.step2Desc" },
  { step: "03", titleKey: "Solutions.process.step3", descKey: "Solutions.process.step3Desc" },
  { step: "04", titleKey: "Solutions.process.step4", descKey: "Solutions.process.step4Desc" },
];

export default async function SolutionsPage({
  params,
}: {
  params?: Promise<{ locale: string }>;
}) {
  const locale = (await params)?.locale ?? "zh-cn";
  const t = await getTranslations({ locale });

  // 辅助函数：获取带 locale 前缀的路径
  const getLocalizedHref = (path: string) => `/${locale}${path}`;

  return (
    <>
      <Hero
        title={t("Solutions.title")}
        description={t("Solutions.description")}
      />

      {/* Advantages Section */}
      <Section background="white">
        <SectionHeader title={t("Solutions.advantages.title")} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} hover className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00CCFF] flex items-center justify-center">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-[#003366] mb-2">
                {t(`Solutions.advantages.items.${advantage.key}.title`)}
              </h3>
              <p className="text-gray-600 text-sm">
                {t(`Solutions.advantages.items.${advantage.key}.description`)}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Technologies Section */}
      <Section background="gray">
        <SectionHeader
          title={t("Solutions.tech.title")}
          description={t("Solutions.tech.description")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00CCFF] mb-4">
                <tech.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003366] mb-2">
                {t(`Solutions.tech.${tech.key}.title`)}
              </h3>
              <p className="text-gray-600 text-sm">
                {t(`Solutions.tech.${tech.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Core Business Section - ProjectsSection */}
      <ProjectsSection locale={locale} background="white" />

      {/* Industry Solutions Grid */}
      <Section background="gray">
        <SectionHeader
          title={t("Solutions.industrySolutions.title")}
          description={t("Solutions.industrySolutions.description")}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} bordered hover>
              <IconBadge icon={solution.icon} />

              <h3 className="text-xl font-semibold text-[#003366] mb-2">{t(solution.titleKey)}</h3>
              <p className="text-gray-600 mb-4">{t(solution.descKey)}</p>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">{t("Solutions.applications")}</h4>
                <ul className="space-y-1">
                  {(t(solution.appsKey) as any).split(",").map((app: string, idx: number) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></span>
                      {app.trim()}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <span className="text-sm text-[#0066FF] font-medium">{t(solution.benefitsKey)}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section background="white">
        <SectionHeader
          title={t("Solutions.process.title")}
          description={t("Solutions.process.description")}
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <div key={index} className="text-center">
                <IconBadge number={Number(item.step)} size="md" />
                <h3 className="font-semibold text-[#003366] mb-1">{t(item.titleKey)}</h3>
                <p className="text-sm text-gray-600">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection
        title={t("Solutions.cta.title")}
        description={t("Solutions.cta.description")}
        ctaText={t("Solutions.cta.ctaText")}
        ctaHref={getLocalizedHref("/contact")}
      />
    </>
  );
}
