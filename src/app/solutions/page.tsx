import type { Metadata } from "next";
import Link from "next/link";
import { Factory, Hospital, Building2, ShoppingCart, Car, Cpu } from "lucide-react";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "解决方案 - 几何视界 GeometryVision",
  description: "几何视界为制造业、医疗、建筑、零售等行业提供定制化的视觉AI解决方案",
};

const solutions = [
  {
    icon: Factory,
    title: "智能制造",
    description: "为制造业提供质量检测、工艺优化、设备监控等智能视觉解决方案",
    applications: ["产品缺陷检测", "尺寸精密测量", "装配过程监控"],
    benefits: "提高生产效率30%，降低不良率50%",
  },
  {
    icon: Hospital,
    title: "智慧医疗",
    description: "基于几何分析的医学图像处理，辅助医生进行精准诊断",
    applications: ["医学影像分析", "病灶检测定位", "手术导航辅助"],
    benefits: "提升诊断准确率，缩短诊断时间",
  },
  {
    icon: Building2,
    title: "建筑与测绘",
    description: "三维重建与几何分析技术在建筑和测绘领域的创新应用",
    applications: ["建筑三维建模", "地形测绘分析", "结构变形监测"],
    benefits: "高精度建模，快速数据采集",
  },
  {
    icon: ShoppingCart,
    title: "智慧零售",
    description: "视觉分析技术赋能零售行业，提升运营效率和客户体验",
    applications: ["客流分析", "商品识别", "智能结算"],
    benefits: "优化店铺运营，提升销售转化",
  },
  {
    icon: Car,
    title: "智能交通",
    description: "视觉感知技术在交通领域的应用，助力智慧城市建设",
    applications: ["车辆识别", "交通流量分析", "违章检测"],
    benefits: "提升交通效率，保障出行安全",
  },
  {
    icon: Cpu,
    title: "科研与教育",
    description: "为科研机构提供先进的几何计算工具和技术支持",
    applications: ["几何算法研究", "教学演示系统", "学术合作项目"],
    benefits: "加速科研进程，培养创新人才",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Hero title="解决方案" description="针对不同行业需求，提供定制化的视觉AI解决方案" />

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow bg-white">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#00CCFF] flex items-center justify-center mb-4">
                  <solution.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-[#003366] mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">应用场景</h4>
                  <ul className="space-y-1">
                    {solution.applications.map((app, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <span className="text-sm text-[#0066FF] font-medium">{solution.benefits}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">合作流程</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            从需求分析到方案落地，我们提供全程专业支持
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "需求沟通", desc: "深入了解业务场景与痛点" },
                { step: "02", title: "方案设计", desc: "定制专属技术解决方案" },
                { step: "03", title: "开发实施", desc: "敏捷开发与迭代优化" },
                { step: "04", title: "持续支持", desc: "运维保障与功能升级" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00CCFF] flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-[#003366] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0066FF] to-[#00CCFF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            找到适合您行业的解决方案
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            与我们的行业专家交流，探索视觉AI如何赋能您的业务
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0066FF] font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            咨询解决方案
          </Link>
        </div>
      </section>
    </>
  );
}
