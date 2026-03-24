const partners = [
  "香港中文大学",
  "威尔斯亲王医院",
  "沙田医院",
  "广州第一人民医院",
  "北京瞭望神州",
  "S.H. Ho 脊柱侧弯研究实验室",
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#003366] mb-12">
          合作伙伴
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="px-6 py-4 bg-gray-50 rounded-lg text-gray-600 font-medium hover:bg-gray-100 transition-colors"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
