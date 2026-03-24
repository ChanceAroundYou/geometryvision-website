import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Eye, MapPin, Building2, CheckCircle, ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "智慧国土 - 视频图像智能分析解决方案 - 几何视界",
  description: "几何视界智慧国土解决方案，与北京瞭望神州深度合作，视频图像智能分析，耕地保护、违建检测等应用场景",
};

const features = [
  {
    icon: Eye,
    title: "智能视频分析",
    description: "基于深度学习的视频图像处理技术，实现实时目标检测与追踪",
  },
  {
    icon: MapPin,
    title: "耕地保护",
    description: "自动化监测耕地变化，及时发现占用、破坏等违法行为",
  },
  {
    icon: Building2,
    title: "违建检测",
    description: "智能识别违规建筑，辅助执法部门快速响应和处理",
  },
];

const applicationScenarios = [
  {
    title: "自然资源监测",
    description: "对耕地、林地、草地等自然资源进行动态监测，及时发现占用和破坏行为",
    cases: ["非法占用耕地监测", "耕地撂荒检测", "林地破坏预警"],
  },
  {
    title: "城乡规划监管",
    description: "辅助城乡规划部门进行建设行为监管，识别未批先建、超期建设等违规行为",
    cases: ["违建自动识别", "施工进度监控", "规划核实辅助"],
  },
  {
    title: "环境保护巡查",
    description: "对自然保护区、湿地、生态红线区域进行智能监控，保护生态环境",
    cases: ["生态破坏监测", "排污口检测", "垃圾分类巡查"],
  },
  {
    title: "应急响应支持",
    description: "在自然灾害发生时，快速评估受灾区域，辅助应急指挥决策",
    cases: ["洪涝灾害评估", "山体滑坡监测", "火灾面积测算"],
  },
];

const techAdvantages = [
  "多源数据融合，卫星+无人机+摄像头",
  "AI目标检测，准确率95%以上",
  "边缘计算，支持实时分析",
  "云端管理，跨区域统一调度",
  "开放API，便于系统集成",
];

const partners = [
  { name: "北京瞭望神州科技有限公司", role: "深度战略合作伙伴" },
  { name: "自然资源部门", role: "业务指导" },
  { name: "多个地方政府", role: "项目落地" },
];

export default function SmartLandPage() {
  return (
    <>
      <Hero
        icon={<Globe className="w-10 h-10 text-white" />}
        title="智慧国土解决方案"
        description="视频图像智能分析，守护每一寸土地"
      />

      {/* Problem & Opportunity */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#003366] mb-12">
              国土监管面临的挑战
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-red-50 rounded-xl border border-red-100">
                <h3 className="text-xl font-semibold text-red-700 mb-4">监管难点</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• 土地面积大，人工巡查效率低</li>
                  <li>• 违法行为隐蔽，发现不及时</li>
                  <li>• 证据固定难，执法依据不足</li>
                  <li>• 部门数据孤岛，协同困难</li>
                </ul>
              </div>

              <div className="p-8 bg-green-50 rounded-xl border border-green-100">
                <h3 className="text-xl font-semibold text-green-700 mb-4">智能方案</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• 24小时自动监测，无人值守</li>
                  <li>• AI实时分析，异常立即预警</li>
                  <li>• 完整证据链，执法更有力</li>
                  <li>• 数据互联，跨部门协同</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">核心功能</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            多种技术融合，打造全方位国土智能监管体系
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applicationScenarios.map((scenario, index) => (
              <div key={index} className="p-8 border border-gray-200 rounded-xl hover:border-[#0066FF] transition-colors">
                <h3 className="text-xl font-semibold text-[#003366] mb-4">{scenario.title}</h3>
                <p className="text-gray-600 mb-4">{scenario.description}</p>
                <div className="flex flex-wrap gap-2">
                  {scenario.cases.map((caseItem, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {caseItem}
                    </span>
                  ))}
                </div>
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

      {/* Partnership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">战略合作</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            与北京瞭望神州深度合作，共同推进智慧国土建设
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-lg font-semibold text-[#003366] mb-1">{partner.name}</h3>
                <p className="text-sm text-gray-500">{partner.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-[#0066FF]/10 to-[#00CCFF]/10 rounded-xl max-w-2xl mx-auto">
            <p className="text-center text-gray-700">
              几何视界与北京瞭望神州科技有限公司建立深度战略合作伙伴关系，
              结合双方在AI视觉分析和国土信息化领域的优势，共同为自然资源管理、
              城乡规划、环境保护等领域提供智能化解决方案。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0066FF] to-[#00CCFF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            开启智慧国土新篇章
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            欢迎政府部门、合作伙伴咨询合作，共同守护国土安全
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0066FF] font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              联系我们
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              查看解决方案
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
