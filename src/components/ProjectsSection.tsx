import { useTranslations } from "next-intl";
import { ProjectCard } from "./ProjectCard";
import { Section, SectionHeader } from "@/components/ui";

export function ProjectsSection() {
  const t = useTranslations("Home.projects");
  const tCommon = useTranslations("Common");

  const projects = [
    {
      title: t("items.ais.title"),
      description: t("items.ais.description"),
      icon: "🏥",
      href: "/projects/ais",
    },
    {
      title: t("items.smartland.title"),
      description: t("items.smartland.description"),
      icon: "🌍",
      href: "/projects/smart-land",
    },
  ];

  return (
    <Section background="gray">
      <SectionHeader title={t("title")} description={t("description")} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.href} {...project} learnMore={tCommon("learnMore")} />
        ))}
      </div>
    </Section>
  );
}
