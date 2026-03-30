import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProjectDetailTemplate } from "@/components/ProjectDetailTemplate";

export const metadata: Metadata = {
  title: "Smart Land - GeometryVision",
};

const features = [
  {
    icon: "eye" as const,
    titleKey: "Project.SmartLand.features.video.title",
    descKey: "Project.SmartLand.features.video.description",
  },
  {
    icon: "mapPin" as const,
    titleKey: "Project.SmartLand.features.farmland.title",
    descKey: "Project.SmartLand.features.farmland.description",
  },
  {
    icon: "building2" as const,
    titleKey: "Project.SmartLand.features.building.title",
    descKey: "Project.SmartLand.features.building.description",
  },
];

const applicationScenarios = [
  {
    titleKey: "Project.SmartLand.scenarios.natural.title",
    descKey: "Project.SmartLand.scenarios.natural.description",
    casesKey: "Project.SmartLand.scenarios.natural.cases",
  },
  {
    titleKey: "Project.SmartLand.scenarios.urban.title",
    descKey: "Project.SmartLand.scenarios.urban.description",
    casesKey: "Project.SmartLand.scenarios.urban.cases",
  },
  {
    titleKey: "Project.SmartLand.scenarios.environment.title",
    descKey: "Project.SmartLand.scenarios.environment.description",
    casesKey: "Project.SmartLand.scenarios.environment.cases",
  },
  {
    titleKey: "Project.SmartLand.scenarios.emergency.title",
    descKey: "Project.SmartLand.scenarios.emergency.description",
    casesKey: "Project.SmartLand.scenarios.emergency.cases",
  },
];

const techAdvantagesKeys = [
  "Project.SmartLand.techAdvantage.items.1",
  "Project.SmartLand.techAdvantage.items.2",
  "Project.SmartLand.techAdvantage.items.3",
  "Project.SmartLand.techAdvantage.items.4",
  "Project.SmartLand.techAdvantage.items.5",
];

const partners = [
  { name: "北京瞭望神州科技有限公司", role: "深度战略合作伙伴" },
  { name: "自然资源部门", role: "业务指导" },
  { name: "多个地方政府", role: "项目落地" },
];

export default async function SmartLandPage({
  params,
}: {
  params?: Promise<{ locale: string }>;
}) {
  const locale = (await params)?.locale ?? "zh-cn";
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  // 辅助函数：获取带 locale 前缀的路径
  const getLocalizedHref = (path: string) => `/${locale}${path}`;

  const problemItems = [
    t("Project.SmartLand.problemItems.1"),
    t("Project.SmartLand.problemItems.2"),
    t("Project.SmartLand.problemItems.3"),
    t("Project.SmartLand.problemItems.4"),
  ];

  const solutionItems = [
    t("Project.SmartLand.solutionItems.1"),
    t("Project.SmartLand.solutionItems.2"),
    t("Project.SmartLand.solutionItems.3"),
    t("Project.SmartLand.solutionItems.4"),
  ];

  const techAdvantages = techAdvantagesKeys.map(k => t(k));

  return (
    <ProjectDetailTemplate
      projectName="Smart Land"
      heroIcon="globe"
      heroTitle={t("Project.SmartLand.hero.title")}
      heroDescription={t("Project.SmartLand.hero.description")}
      problemTitle={t("Project.SmartLand.problem")}
      problemItems={problemItems}
      solutionTitle={t("Project.SmartLand.solution")}
      solutionItems={solutionItems}
      features={features.map(f => ({
        icon: f.icon,
        title: t(f.titleKey),
        description: t(f.descKey),
      }))}
      applicationScenarios={applicationScenarios.map(s => ({
        title: t(s.titleKey),
        description: t(s.descKey),
        cases: (() => {
          const rawCases = t.raw(s.casesKey) as unknown;
          if (Array.isArray(rawCases)) {
            return rawCases as string[];
          }
          return String(rawCases)
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean);
        })(),
      }))}
      techAdvantages={techAdvantages}
      partners={partners}
      showPartnerDescription={true}
      partnerDescription={t("Project.SmartLand.partnerDescription")}
      ctaTitle={t("Project.SmartLand.cta.title")}
      ctaDescription={t("Project.SmartLand.cta.description")}
      ctaText={t("Project.SmartLand.cta.ctaText")}
      ctaHref={getLocalizedHref("/contact")}
      secondaryCtaText={t("Project.SmartLand.cta.secondaryCtaText")}
      secondaryCtaHref={getLocalizedHref("/solutions")}
    />
  );
}
