import type { Metadata } from "next";
import Link from "next/link";
import { Eye, Scan, BarChart3, Layers } from "lucide-react";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "产品中心 - 几何视界 GeometryVision",
  description: "探索几何视界的视觉AI产品线，包括图像识别、三维重建、视觉分析等创新解决方案",
};

const products = [
  {
    icon: Eye,
    title: "智能视觉识别",
    description: "基于几何分析的图像识别系统，提供高精度的目标检测与识别能力",
    features: ["几何特征提取", "多尺度分析", "实时处理"],
    status: "已上线",
  },
  {
    icon: Scan,
    title: "三维重建引擎",
    description: "利用拟共形映射技术，实现精确的三维模型重建与优化",
    features: ["高精度重建", "拓扑保持", "纹理映射"],
    status: "测试中",
  },
  {
    icon: BarChart3,
    title: "视觉分析平台",
    description: "结合深度学习与数学建模，提供深度视觉数据分析服务",
    features: ["数据可视化", "模式识别", "预测分析"],
    status: "已上线",
  },
  {
    icon: Layers,
    title: "几何处理工具包",
    description: "面向开发者的几何算法库，支持多种几何计算任务",
    features: ["API接口", "SDK支持", "文档完善"],
    status: "开发中",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Hero title="产品中心" description="数学驱动的视觉AI产品，为您带来更精准、更智能的解决方案" />

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#00CCFF] flex items-center justify-center">
                    <product.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-[#003366]">{product.title}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${product.status === "已上线"
                          ? "bg-green-100 text-green-700"
                          : product.status === "测试中"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-600"
                        }`}>
                        {product.status}
                      </span>
                    </div>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">技术优势</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            基于深厚的数学积累，我们的产品具有独特的技术优势
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-[#0066FF] mb-2">99%</div>
              <div className="text-gray-600">识别准确率</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-[#0066FF] mb-2">&lt;100ms</div>
              <div className="text-gray-600">响应时间</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-[#0066FF] mb-2">10+</div>
              <div className="text-gray-600">应用场景</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0066FF] to-[#00CCFF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            想了解更多产品详情？
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            我们的团队随时为您提供产品演示和技术咨询
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0066FF] font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            联系我们
          </Link>
        </div>
      </section>
    </>
  );
}
