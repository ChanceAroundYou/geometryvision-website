import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { TechSection } from "@/components/TechSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { PartnersSection } from "@/components/PartnersSection";
import { CTASection } from "@/components/ui";

export default async function Home() {
  const t = await getTranslations();

  return (
    <>
      <Hero
        label={t("Home.hero.label")}
        title={<>{t("Home.hero.title")}</>}
        description={t("Home.hero.description")}
        actions={
          <>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#00CCFF] text-white font-medium rounded-lg hover:bg-[#00BBFF] transition-colors"
            >
              {t("Home.hero.viewProducts")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#003366] font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t("Home.hero.contactUs")}
            </Link>
          </>
        }
      />
      <TechSection />
      <ProjectsSection />
      <AdvantagesSection />
      <PartnersSection />

      <CTASection
        title={t("Home.cta.title")}
        description={t("Home.cta.description")}
        ctaText={t("Home.cta.ctaText")}
        ctaHref="mailto:contact@geometryvision.online"
      />
    </>
  );
}
