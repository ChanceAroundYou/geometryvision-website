const advantages = [
  {
    title: "学术背景深厚",
    description: "核心团队来自 CUHK 数学系",
  },
  {
    title: "跨学科融合",
    description: "数学 + 医学 + AI",
  },
  {
    title: "临床验证",
    description: "与威尔斯亲王医院等机构合作",
  },
  {
    title: "产业落地",
    description: "已实现项目落地应用",
  },
];

export function AdvantagesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#003366] mb-12">
          为什么选择我们
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00CCFF] flex items-center justify-center">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-[#003366] mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-600 text-sm">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
