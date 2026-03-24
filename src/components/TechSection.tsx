import { TrendingUp, Shield, Brain, Cpu } from "lucide-react";

const technologies = [
  {
    icon: TrendingUp,
    title: "几何分析",
    description: "从数学理论出发，解决视觉问题",
  },
  {
    icon: Shield,
    title: "拟共形映射",
    description: "建立精确的几何对应关系",
  },
  {
    icon: Brain,
    title: "PDE 数值方法",
    description: "求解复杂物理过程的数学模型",
  },
  {
    icon: Cpu,
    title: "深度学习",
    description: "将数学先验与神经网络融合",
  },
];

export function TechSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">
          核心技术
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          基于深厚的数学积累，打造领先的视觉 AI 技术
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00CCFF] mb-4">
                <tech.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003366] mb-2">
                {tech.title}
              </h3>
              <p className="text-gray-600 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
