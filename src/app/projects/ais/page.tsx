import type { Metadata } from "next";
import Link from "next/link";
import { Scan, Shield, Heart, Brain, ArrowRight, CheckCircle } from "lucide-react";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "智慧医疗 - AIS脊柱侧弯智能筛查系统 - 几何视界",
  description: "几何视界AIS脊柱侧弯智能筛查系统，无辐射3D扫描+AI分析，诊所端+家庭端双模式，守护青少年脊柱健康",
};

const features = [
  {
    icon: Scan,
    title: "无辐射3D扫描",
    description: "采用安全的光学扫描技术，无需X射线，对青少年身体无任何辐射伤害",
  },
  {
    icon: Shield,
    title: "AI智能分析",
    description: "基于深度学习的自动分析算法，快速准确识别脊柱侧弯风险",
  },
  {
    icon: Heart,
    title: "双模式应用",
    description: "支持诊所专业端和家庭端，满足不同场景的筛查需求",
  },
];

const applicationScenarios = [
  {
    title: "诊所端",
    description: "专业医疗团队使用，支持批量筛查、数据管理和报告生成",
    users: "医院、诊所、体检中心",
  },
  {
    title: "家庭端",
    description: "家长可自主完成初步筛查，随时监测孩子脊柱健康状况",
    users: "学校、家庭、健康管理机构",
  },
];

const techAdvantages = [
  "光学3D扫描，无辐射伤害",
  "AI自动分析，5秒内出结果",
  "便携式设备，上门筛查",
  "数据云端存储，追踪趋势",
  "专业报告，辅助诊断决策",
];

const partners = [
  { name: "威尔斯亲王医院", role: "临床合作" },
  { name: "香港中文大学医学院", role: "学术支持" },
  { name: "SH Ho 实验室", role: "研究合作" },
];

export default function AISPage() {
  return (
    <>
      <Hero
        icon={<Scan className="w-10 h-10 text-white" />}
        title="AIS脊柱侧弯智能筛查系统"
        description="无辐射3D扫描 + AI智能分析，守护青少年脊柱健康"
      />

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#003366] mb-12">
              青少年脊柱健康现状
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-red-50 rounded-xl border border-red-100">
                <h3 className="text-xl font-semibold text-red-700 mb-4">现状堪忧</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• 我国青少年脊柱侧弯发病率高达5-6%</li>
                  <li>• 早期症状不明显，发现时常已错过最佳干预期</li>
                  <li>• 传统X光检查有辐射，无法频繁筛查</li>
                  <li>• 专业筛查资源不足，覆盖面有限</li>
                </ul>
              </div>

              <div className="p-8 bg-green-50 rounded-xl border border-green-100">
                <h3 className="text-xl font-semibold text-green-700 mb-4">我们的方案</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• 光学3D扫描，完全无辐射</li>
                  <li>• AI辅助分析，快速精准</li>
                  <li>• 便携设备，可上门服务</li>
                  <li>• 持续追踪，守护成长</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">核心功能</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            科技赋能，让脊柱筛查更简单、更安全
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00CCFF] mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#003366] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-12">应用场景</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {applicationScenarios.map((scenario, index) => (
              <div key={index} className="p-8 border border-gray-200 rounded-xl hover:border-[#0066FF] transition-colors">
                <h3 className="text-xl font-semibold text-[#003366] mb-4">{scenario.title}</h3>
                <p className="text-gray-600 mb-4">{scenario.description}</p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">适用对象：</span>{scenario.users}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#003366] mb-8">技术优势</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">合作伙伴</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            与权威医疗机构和研究机构深度合作
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-lg font-semibold text-[#003366] mb-1">{partner.name}</h3>
                <p className="text-sm text-gray-500">{partner.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0066FF] to-[#00CCFF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            了解详情
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            欢迎医疗机构、体检中心及教育机构咨询合作
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0066FF] font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              联系我们
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              查看更多产品
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
