import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "智慧医疗",
    description: "AIS脊柱侧弯智能筛查系统，无辐射3D扫描+AI分析，诊所端+家庭端双模式",
    icon: "🏥",
    href: "/projects/ais",
  },
  {
    title: "智慧国土",
    description: "与北京瞭望神州深度合作，视频图像智能分析，耕地保护、违建检测等应用场景",
    icon: "🌍",
    href: "/projects/smart-land",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">
          核心业务
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          将数学研究成果应用于不同领域，解决实际问题
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
