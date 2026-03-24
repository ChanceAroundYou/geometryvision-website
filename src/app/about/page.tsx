import type { Metadata } from "next";
import Link from "next/link";
import { Users, Target, Award, Lightbulb, ArrowRight, Sparkles, FlaskConical, UserCheck } from "lucide-react";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "关于我们 - 几何视界 GeometryVision",
  description: "了解几何视界团队，源自香港中文大学数学系的科技创业公司，致力于将数学研究成果应用于视觉AI领域",
};

const values = [
  {
    icon: Lightbulb,
    title: "创新驱动",
    description: "以数学理论为基础，探索视觉智能的新可能",
  },
  {
    icon: Target,
    title: "精准严谨",
    description: "追求数学般的精确，确保技术方案的可靠性",
  },
  {
    icon: Users,
    title: "协作共赢",
    description: "与合作伙伴共同成长，创造更大的价值",
  },
  {
    icon: Award,
    title: "追求卓越",
    description: "不断突破技术边界，引领行业发展",
  },
];

const milestones = [
  { year: "2023", event: "公司成立，获得种子轮融资" },
  { year: "2024", event: "推出首批视觉AI产品" },
  { year: "2024", event: "与多家企业建立合作关系" },
  { year: "2025", event: "拓展国际市场，建立全球合作伙伴网络" },
];

export default function AboutPage() {
  return (
    <>
      <Hero title="关于我们" description="用数学的力量，开启视觉智能的新视界" />

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#003366] mb-6">我们的使命</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              几何视界是一家源自香港中文大学数学系的科技创业公司。我们致力于将几何分析与拟共形映射等数学研究成果应用于视觉AI领域，打造具有数学理论支撑的创新产品。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              我们相信，数学的严谨性和优美性能够为AI技术带来新的突破。通过将深厚的数学理论与现代深度学习技术相结合，我们为客户提供更精准、更可靠的视觉智能解决方案。
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">核心价值观</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            指引我们前行的信念
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00CCFF] mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#003366] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-12">发展历程</h2>

          <div className="max-w-2xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#0066FF] to-[#00CCFF] text-white font-medium rounded-full text-sm">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-gray-600">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">核心团队</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            来自香港中文大学数学系及业界顶尖机构
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00CCFF] mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003366] mb-2">创始团队</h3>
              <p className="text-gray-600 text-sm">香港中文大学数学系博士，深耕几何分析领域多年</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00CCFF] mx-auto mb-4 flex items-center justify-center">
                <FlaskConical className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003366] mb-2">研发团队</h3>
              <p className="text-gray-600 text-sm">数学、计算机科学交叉背景，技术实力雄厚</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00CCFF] mx-auto mb-4 flex items-center justify-center">
                <UserCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003366] mb-2">顾问团队</h3>
              <p className="text-gray-600 text-sm">国际知名学者与行业专家提供战略指导</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-[#0066FF] font-medium hover:gap-3 transition-all"
            >
              查看完整团队 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
