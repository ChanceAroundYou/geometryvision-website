import { useTranslations } from "next-intl";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";
import { Section, SectionHeader } from "@/components/ui";

// 辅助函数：获取带 locale 前缀的路径
const getLocalizedHref = (locale: string, path: string) => {
  return `/${locale}${path}`;
};

interface ProjectsSectionProps {
  locale: string;
  background?: "white" | "gray";
}

export function ProjectsSection({ locale, background = "gray" }: ProjectsSectionProps) {
  const t = useTranslations("Home.projects");
  const tCommon = useTranslations("Common");

  const projects = [
    {
      title: t("items.ais.title"),
      description: t("items.ais.description"),
      icon: "🏥",
      href: getLocalizedHref(locale, "/projects/ais"),
    },
    {
      title: t("items.smartland.title"),
      description: t("items.smartland.description"),
      icon: "🌍",
      href: getLocalizedHref(locale, "/projects/smart-land"),
    },
  ];

  return (
    <Section background={background}>
      <SectionHeader title={t("title")} description={t("description")} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.href} {...project} learnMore={tCommon("learnMore")} />
        ))}
      </div>
    </Section>
  );
}
