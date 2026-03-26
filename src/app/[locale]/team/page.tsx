import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { GraduationCap, FlaskConical, Award, Users } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader, IconBadge, Card, CTASection, TeamMemberCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Team - GeometryVision",
};

const teamMembers = [
  {
    nameKey: "Team.coreMembers.chenran.name",
    roleKey: "Team.coreMembers.chenran.role",
    descKey: "Team.coreMembers.chenran.desc",
    educationKey: "Team.coreMembers.chenran.education",
    expertiseKey: "Team.coreMembers.chenran.expertise",
  },
  {
    nameKey: "Team.coreMembers.lei.name",
    roleKey: "Team.coreMembers.lei.role",
    descKey: "Team.coreMembers.lei.desc",
    educationKey: "Team.coreMembers.lei.education",
    expertiseKey: "Team.coreMembers.lei.expertise",
  },
  {
    nameKey: "Team.coreMembers.li.name",
    roleKey: "Team.coreMembers.li.role",
    descKey: "Team.coreMembers.li.desc",
    educationKey: "Team.coreMembers.li.education",
    expertiseKey: "Team.coreMembers.li.expertise",
  },
  {
    nameKey: "Team.coreMembers.tan.name",
    roleKey: "Team.coreMembers.tan.role",
    descKey: "Team.coreMembers.tan.desc",
    educationKey: "Team.coreMembers.tan.education",
    expertiseKey: "Team.coreMembers.tan.expertise",
  },
];

const advisors = [
  {
    nameKey: "Team.advisors.luo.name",
    roleKey: "Team.advisors.luo.role",
    affiliationKey: "Team.advisors.luo.affiliation",
    descKey: "Team.advisors.luo.desc",
  },
  {
    nameKey: "Team.advisors.lee.name",
    roleKey: "Team.advisors.lee.role",
    affiliationKey: "Team.advisors.lee.affiliation",
    descKey: "Team.advisors.lee.desc",
  },
];

const researchAreas = [
  {
    icon: GraduationCap,
    titleKey: "Team.advantages.academic",
    descKey: "Team.advantages.academicDesc",
  },
  {
    icon: FlaskConical,
    titleKey: "Team.advantages.research",
    descKey: "Team.advantages.researchDesc",
  },
  {
    icon: Award,
    titleKey: "Team.advantages.recognition",
    descKey: "Team.advantages.recognitionDesc",
  },
  {
    icon: Users,
    titleKey: "Team.advantages.scale",
    descKey: "Team.advantages.scaleDesc",
  },
];

export default async function TeamPage() {
  const t = await getTranslations();

  return (
    <>
      <Hero
        title={t("Team.title")}
        description={t("Team.description")}
      />

      {/* Team Overview */}
      <Section background="white">
        <SectionHeader
          title={t("Team.advantages.title")}
          description={t("Team.advantages.description")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {researchAreas.map((item, index) => (
            <Card key={index} className="text-center">
              <IconBadge icon={item.icon} size="md" />
              <h3 className="text-lg font-semibold text-[#003366] mb-2">{t(item.titleKey)}</h3>
              <p className="text-gray-600 text-sm">{t(item.descKey)}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Core Team */}
      <Section background="gray">
        <SectionHeader
          title={t("Team.coreMembers.title")}
          description={t("Team.coreMembers.description")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={t(member.nameKey)}
              role={t(member.roleKey)}
              description={t(member.descKey)}
              education={t(member.educationKey)}
              expertise={t(member.expertiseKey).split(",")}
            />
          ))}
        </div>
      </Section>

      {/* Advisors */}
      <Section background="white">
        <SectionHeader
          title={t("Team.advisors.title")}
          description={t("Team.advisors.description")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {advisors.map((advisor, index) => (
            <TeamMemberCard
              key={index}
              name={t(advisor.nameKey)}
              role={t(advisor.roleKey)}
              description={t(advisor.descKey)}
              education={t(advisor.affiliationKey)}
            />
          ))}
        </div>
      </Section>

      {/* Join Team CTA */}
      <CTASection
        title={t("Team.cta.title")}
        description={t("Team.cta.description")}
        ctaText={t("Home.cta.ctaText")}
        ctaHref="mailto:contact@geometryvision.online"
      // secondaryCtaText={t("Team.cta.secondaryCtaText")}
      // secondaryCtaHref="/contact"
      />
    </>
  );
}
