import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ProjectDetailTemplate } from "@/components/ProjectDetailTemplate";

export const metadata: Metadata = {
  title: "AIS - GeometryVision",
};

const features = [
  {
    icon: "scan" as const,
    titleKey: "Project.AIS.features.scan.title",
    descKey: "Project.AIS.features.scan.description",
  },
  {
    icon: "shield" as const,
    titleKey: "Project.AIS.features.ai.title",
    descKey: "Project.AIS.features.ai.description",
  },
  {
    icon: "heart" as const,
    titleKey: "Project.AIS.features.dual.title",
    descKey: "Project.AIS.features.dual.description",
  },
];

const applicationScenarios = [
  {
    titleKey: "Project.AIS.scenarios.clinic.title",
    descKey: "Project.AIS.scenarios.clinic.description",
    users: "Project.AIS.scenarios.clinic.users",
  },
  {
    titleKey: "Project.AIS.scenarios.home.title",
    descKey: "Project.AIS.scenarios.home.description",
    users: "Project.AIS.scenarios.home.users",
  },
];

const techAdvantagesKeys = [
  "Project.AIS.techAdvantage.items.1",
  "Project.AIS.techAdvantage.items.2",
  "Project.AIS.techAdvantage.items.3",
  "Project.AIS.techAdvantage.items.4",
  "Project.AIS.techAdvantage.items.5",
];

const partners = [
  { name: "威尔斯亲王医院", role: "临床合作" },
  { name: "香港中文大学医学院", role: "学术支持" },
  { name: "SH Ho 实验室", role: "研究合作" },
];

export default async function AISPage({
  params,
}: {
  params?: Promise<{ locale: string }>;
}) {
  const locale = (await params)?.locale ?? "zh-cn";
  const t = await getTranslations({ locale });

  // 辅助函数：获取带 locale 前缀的路径
  const getLocalizedHref = (path: string) => `/${locale}${path}`;

  // Get problem items as array
  const problemItems = [
    t("Project.AIS.problemItems.1"),
    t("Project.AIS.problemItems.2"),
    t("Project.AIS.problemItems.3"),
    t("Project.AIS.problemItems.4"),
  ];

  // Get solution items as array
  const solutionItems = [
    t("Project.AIS.solutionItems.1"),
    t("Project.AIS.solutionItems.2"),
    t("Project.AIS.solutionItems.3"),
    t("Project.AIS.solutionItems.4"),
  ];

  const techAdvantages = techAdvantagesKeys.map(k => t(k));

  return (
    <ProjectDetailTemplate
      projectName="AIS"
      heroIcon="scan"
      heroTitle={t("Project.AIS.hero.title")}
      heroDescription={t("Project.AIS.hero.description")}
      problemTitle={t("Project.AIS.problem")}
      problemItems={problemItems}
      solutionTitle={t("Project.AIS.solution")}
      solutionItems={solutionItems}
      features={features.map(f => ({
        icon: f.icon,
        title: t(f.titleKey),
        description: t(f.descKey),
      }))}
      applicationScenarios={applicationScenarios.map(s => ({
        title: t(s.titleKey),
        description: t(s.descKey),
        users: t(s.users),
      }))}
      techAdvantages={techAdvantages}
      partners={partners}
      ctaTitle={t("Project.AIS.cta.title")}
      ctaDescription={t("Project.AIS.cta.description")}
      ctaText={t("Project.AIS.cta.ctaText")}
      ctaHref={getLocalizedHref("/contact")}
      secondaryCtaText={t("Project.AIS.cta.secondaryCtaText")}
      secondaryCtaHref={getLocalizedHref("/products")}
    />
  );
}
