import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Users, Target, Award, Lightbulb, ArrowRight, Sparkles, FlaskConical, UserCheck } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader, IconBadge, Card, Button, TimelineItem } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params?: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params)?.locale ?? "zh-cn";
  const t = await getTranslations({ locale });
  return {
    title: `${t("about")} - ${t("brand")}`,
  };
};


const values = [
  {
    icon: Lightbulb,
    titleKey: "About.values.items.innovation",
    descKey: "About.values.items.innovationDesc",
  },
  {
    icon: Target,
    titleKey: "About.values.items.precision",
    descKey: "About.values.items.precisionDesc",
  },
  {
    icon: Users,
    titleKey: "About.values.items.collaboration",
    descKey: "About.values.items.collaborationDesc",
  },
  {
    icon: Award,
    titleKey: "About.values.items.excellence",
    descKey: "About.values.items.excellenceDesc",
  },
];

export default async function AboutPage({
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
        title={t("About.title")}
        description={t("About.description")}
      />

      {/* Mission Section */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            title={t("About.mission.title")}
            align="center"
          />
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {t("About.mission.content")}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("About.mission.content2")}
          </p>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="gray">
        <SectionHeader
          title={t("About.values.title")}
          description={t("About.values.description")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <IconBadge icon={value.icon} size="md" />
              <h3 className="text-lg font-semibold text-[#003366] mb-2">{t(value.titleKey)}</h3>
              <p className="text-gray-600 text-sm">{t(value.descKey)}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Timeline Section */}
      <Section background="white">
        <SectionHeader
          title={t("About.timeline.title")}
          align="center"
        />

        <div className="max-w-2xl mx-auto">
          <TimelineItem year="2023" event={t("About.timeline.items.2023")} />
          <TimelineItem year="2024" event={t("About.timeline.items.2024_1")} />
          <TimelineItem year="2024" event={t("About.timeline.items.2024_2")} />
          <TimelineItem year="2025" event={t("About.timeline.items.2025")} />
        </div>
      </Section>

      {/* Team Section */}
      <Section background="gray">
        <SectionHeader
          title={t("About.teamPreview.title")}
          description={t("About.teamPreview.description")}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00CCFF] mx-auto mb-4 flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#003366] mb-2">{t("About.teamPreview.foundingTeam")}</h3>
            <p className="text-gray-600 text-sm">{t("About.teamPreview.foundingTeamDesc")}</p>
          </Card>

          <Card className="text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00CCFF] mx-auto mb-4 flex items-center justify-center">
              <FlaskConical className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#003366] mb-2">{t("About.teamPreview.rdTeam")}</h3>
            <p className="text-gray-600 text-sm">{t("About.teamPreview.rdTeamDesc")}</p>
          </Card>

          <Card className="text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00CCFF] mx-auto mb-4 flex items-center justify-center">
              <UserCheck className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#003366] mb-2">{t("About.teamPreview.advisors")}</h3>
            <p className="text-gray-600 text-sm">{t("About.teamPreview.advisorsDesc")}</p>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button href={getLocalizedHref("/team")} variant="ghost">
            {t("About.teamPreview.viewFullTeam")} <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </Section>
    </>
  );
}
