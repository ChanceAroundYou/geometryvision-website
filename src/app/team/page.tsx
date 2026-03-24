import type { Metadata } from "next";
import { GraduationCap, FlaskConical, Award, Users } from "lucide-react";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "团队介绍 - 几何视界 GeometryVision",
  description: "了解几何视界的核心团队，源自香港中文大学数学系的专家团队",
};

const teamMembers = [
  {
    name: "Prof. Zhang Wei",
    role: "创始人 & 首席科学家",
    description: "香港中文大学数学系教授，几何分析领域国际知名学者",
    education: "Ph.D., Princeton University",
    expertise: ["几何分析", "拟共形映射", "Teichmüller 理论"],
  },
  {
    name: "Dr. Li Ming",
    role: "联合创始人 & CEO",
    description: "连续创业者，前微软研究员，拥有丰富的AI产品开发经验",
    education: "Ph.D., CUHK",
    expertise: ["计算机视觉", "深度学习", "产品战略"],
  },
  {
    name: "Dr. Wang Xiaofeng",
    role: "首席技术官",
    description: "前阿里巴巴技术专家，PDE数值方法领域资深研究者",
    education: "Ph.D., Stanford University",
    expertise: ["PDE 数值解", "高性能计算", "系统架构"],
  },
];

const advisors = [
  {
    name: "Prof. Chen Jin",
    role: "学术顾问",
    affiliation: "Stanford University",
    description: "国际数学家大会(ICM)邀请报告人，菲尔兹奖候选人",
  },
  {
    name: "Prof. Liu Hong",
    role: "医学顾问",
    affiliation: "威尔斯亲王医院",
    description: "脊柱侧弯治疗领域权威，SH Ho 实验室主任",
  },
  {
    name: "Dr. Zhou Jian",
    role: "产业顾问",
    affiliation: "红杉资本中国",
    description: "前 Google Brain 工程师，专注于 AI 投资",
  },
];

const researchAreas = [
  {
    icon: GraduationCap,
    title: "学术背景",
    description: "核心团队成员均来自 CUHK 数学系，在国际顶级期刊发表论文 50+ 篇",
  },
  {
    icon: FlaskConical,
    title: "研究实力",
    description: "专注于几何分析与视觉 AI 的交叉研究，拥有多项核心专利技术",
  },
  {
    icon: Award,
    title: "行业认可",
    description: "获得多项国际学术奖项，与全球顶尖研究机构保持紧密合作",
  },
  {
    icon: Users,
    title: "团队规模",
    description: "团队成员来自数学、计算机科学、医学等多元背景，跨学科融合创新",
  },
];

export default function TeamPage() {
  return (
    <>
      <Hero title="核心团队" description="源自香港中文大学数学系，用数学的力量推动视觉 AI 革新" />

      {/* Team Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">团队优势</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            深厚学术积累 + 产业落地经验 = 真正的创新
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00CCFF] mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#003366] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">核心成员</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            行业顶尖人才，共同探索数学与 AI 的无限可能
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00CCFF] mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#003366] mb-1">{member.name}</h3>
                <p className="text-[#0066FF] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <div className="text-xs text-gray-500 mb-3">
                  <span className="font-medium">{member.education}</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((exp, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">顾问团队</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            国际知名学者与行业专家，为团队提供战略指导
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {advisors.map((advisor, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-xl hover:border-[#0066FF] transition-colors">
                <h3 className="text-lg font-semibold text-[#003366] mb-1">{advisor.name}</h3>
                <p className="text-[#0066FF] text-sm mb-2">{advisor.role}</p>
                <p className="text-gray-500 text-sm mb-2">{advisor.affiliation}</p>
                <p className="text-gray-600 text-sm">{advisor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0066FF] to-[#00CCFF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            加入我们
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            如果你热爱数学，热爱 AI，渴望用技术改变世界，欢迎加入几何视界
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@geometryvision.online"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0066FF] font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              查看招聘信息
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              联系我们
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
