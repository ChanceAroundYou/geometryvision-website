import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Eye, Scan, BarChart3, Layers } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader, Card, CTASection, Tag } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params?: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params)?.locale ?? "zh-cn";
  const t = await getTranslations({ locale, namespace: "Products" });
  return {
    title: t("metaTitle"),
  };
};


const products = [
  {
    icon: Eye,
    titleKey: "Products.items.vision.title",
    descKey: "Products.items.vision.desc",
    featuresKey: "Products.items.vision.features",
    statusKey: "Products.items.vision.status",
    statusVariant: "success" as const,
  },
  {
    icon: Scan,
    titleKey: "Products.items.reconstruction.title",
    descKey: "Products.items.reconstruction.desc",
    featuresKey: "Products.items.reconstruction.features",
    statusKey: "Products.items.reconstruction.status",
    statusVariant: "warning" as const,
  },
  {
    icon: BarChart3,
    titleKey: "Products.items.analytics.title",
    descKey: "Products.items.analytics.desc",
    featuresKey: "Products.items.analytics.features",
    statusKey: "Products.items.analytics.status",
    statusVariant: "success" as const,
  },
  {
    icon: Layers,
    titleKey: "Products.items.toolkit.title",
    descKey: "Products.items.toolkit.desc",
    featuresKey: "Products.items.toolkit.features",
    statusKey: "Products.items.toolkit.status",
    statusVariant: "default" as const,
  },
];

export default async function ProductsPage({
  params,
}: {
  params?: Promise<{ locale: string }>;
}) {
  const locale = (await params)?.locale ?? "zh-cn";
  const t = await getTranslations({ locale });

  // 辅助函数：获取带 locale 前缀的路径
  const getLocalizedHref = (path: string) => `/${locale}${path}`;

  return (
    <>
      <Hero
        title={t("Products.title")}
        description={t("Products.description")}
      />

      {/* Products Grid */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card key={index} bordered hover>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#00CCFF] flex items-center justify-center">
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-[#003366]">{t(product.titleKey)}</h3>
                    <Tag variant={product.statusVariant}>{t(product.statusKey)}</Tag>
                  </div>
                  <p className="text-gray-600">{t(product.descKey)}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {(t(product.featuresKey) as any).split(",").map((feature: string, idx: number) => (
                  <Tag key={idx}>{feature.trim()}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Technology Section */}
      <Section background="gray">
        <SectionHeader
          title={t("Products.techAdvantage.title")}
          description={t("Products.techAdvantage.description")}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center">
            <div className="text-4xl font-bold text-[#0066FF] mb-2">99%</div>
            <div className="text-gray-600">{t("Products.techAdvantage.accuracy")}</div>
          </Card>
          <Card className="text-center">
            <div className="text-4xl font-bold text-[#0066FF] mb-2">&lt;100ms</div>
            <div className="text-gray-600">{t("Products.techAdvantage.latency")}</div>
          </Card>
          <Card className="text-center">
            <div className="text-4xl font-bold text-[#0066FF] mb-2">10+</div>
            <div className="text-gray-600">{t("Products.techAdvantage.scenarios")}</div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection
        title={t("Products.cta.title")}
        description={t("Products.cta.description")}
        ctaText={t("Products.cta.ctaText")}
        ctaHref={getLocalizedHref("/contact")}
      />
    </>
  );
}
