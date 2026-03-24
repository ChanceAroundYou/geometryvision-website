import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TechSection } from "@/components/TechSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { PartnersSection } from "@/components/PartnersSection";

export default function Home() {
  return (
    <>
      <Hero
        label="几何视界"
        title={<>用数学的力量<br />开启视觉智能的新视界</>}
        description="源自香港中文大学数学系，将几何分析与拟共形映射等数学研究成果转化为 AI 驱动的视觉智能解决方案"
        actions={
          <>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#00CCFF] text-white font-medium rounded-lg hover:bg-[#00BBFF] transition-colors"
            >
              查看产品
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#003366] font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              联系我们
            </Link>
          </>
        }
      />
      <TechSection />
      <ProjectsSection />
      <AdvantagesSection />
      <PartnersSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0066FF] to-[#00CCFF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            加入我们
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            几何视界正在寻找志同道合的伙伴，共同探索数学与 AI 的无限可能
          </p>
          <a
            href="mailto:contact@geometryvision.online"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0066FF] font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            投递简历
          </a>
        </div>
      </section>
    </>
  );
}
