"use client";

import { CheckCircle, Scan, Shield, Heart, Globe, Eye, MapPin, Building2 } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader, Card, CTASection, IconBadge, Tag } from "@/components/ui";

type IconName = 'scan' | 'shield' | 'heart' | 'globe' | 'eye' | 'mapPin' | 'building2';

interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

interface Scenario {
  title: string;
  description: string;
  users?: string;
  cases?: string[];
}

interface Partner {
  name: string;
  role: string;
}

interface ProjectDetailProps {
  projectName: "AIS" | "Smart Land";
  heroIcon: IconName;
  heroTitle: string;
  heroDescription: string;
  problemTitle: string;
  problemItems: string[];
  solutionTitle: string;
  solutionItems: string[];
  features: Feature[];
  applicationScenarios: Scenario[];
  techAdvantages: string[];
  partners: Partner[];
  showPartnerDescription?: boolean;
  partnerDescription?: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

const iconMap: Record<IconName, React.ComponentType<{ className?: string }>> = {
  scan: Scan,
  shield: Shield,
  heart: Heart,
  globe: Globe,
  eye: Eye,
  mapPin: MapPin,
  building2: Building2,
};

function getHeroIconComponent(iconName: IconName): React.ReactNode {
  const Icon = iconMap[iconName];
  return <Icon className="w-10 h-10 text-white" />;
}

export function ProjectDetailTemplate(props: ProjectDetailProps) {
  const {
    projectName,
    heroIcon,
    heroTitle,
    heroDescription,
    problemTitle,
    problemItems,
    solutionTitle,
    solutionItems,
    features,
    applicationScenarios,
    techAdvantages,
    partners,
    showPartnerDescription = false,
    partnerDescription,
    ctaTitle,
    ctaDescription,
    ctaText,
    ctaHref,
    secondaryCtaText,
    secondaryCtaHref,
  } = props;

  return (
    <>
      {/* Hero */}
      <Hero
        icon={getHeroIconComponent(heroIcon)}
        title={heroTitle}
        description={heroDescription}
      />

      {/* Problem & Solution */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title={problemTitle.replace("现状堪忧", "").replace("监管难点", "").trim() || "现状分析"}
            align="center"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-red-50 rounded-xl border border-red-100">
              <h3 className="text-xl font-semibold text-red-700 mb-4">{problemTitle}</h3>
              <ul className="space-y-3 text-gray-700">
                {problemItems.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-green-50 rounded-xl border border-green-100">
              <h3 className="text-xl font-semibold text-green-700 mb-4">{solutionTitle}</h3>
              <ul className="space-y-3 text-gray-700">
                {solutionItems.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section background="gray">
        <SectionHeader
          title="核心功能"
          description={projectName === "AIS" ? "科技赋能，让脊柱筛查更简单、更安全" : "多种技术融合，打造全方位国土智能监管体系"}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <IconBadge icon={iconMap[feature.icon]} size="lg" />
              <h3 className="text-lg font-semibold text-[#003366] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Application Scenarios */}
      <Section background="white">
        <SectionHeader
          title="应用场景"
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {applicationScenarios.map((scenario, index) => (
            <Card key={index} bordered hover>
              <h3 className="text-xl font-semibold text-[#003366] mb-4">{scenario.title}</h3>
              <p className="text-gray-600 mb-4">{scenario.description}</p>
              {scenario.users && (
                <p className="text-sm text-gray-500">
                  <span className="font-medium">适用对象：</span>{scenario.users}
                </p>
              )}
              {scenario.cases && (
                <div className="flex flex-wrap gap-2">
                  {scenario.cases.map((caseItem, idx) => (
                    <Tag key={idx}>{caseItem}</Tag>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Technology Advantages */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            title="技术优势"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techAdvantages.map((advantage, index) => (
              <Card key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{advantage}</span>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Partners / Strategic Cooperation */}
      <Section background="white">
        <SectionHeader
          title={projectName === "Smart Land" ? "战略合作" : "合作伙伴"}
          description={projectName === "Smart Land" 
            ? "与北京瞭望神州深度合作，共同推进智慧国土建设"
            : "与权威医疗机构和研究机构深度合作"
          }
        />

        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner, index) => (
            <Card key={index} className="text-center">
              <h3 className="text-lg font-semibold text-[#003366] mb-1">{partner.name}</h3>
              <p className="text-sm text-gray-500">{partner.role}</p>
            </Card>
          ))}
        </div>

        {showPartnerDescription && partnerDescription && (
          <div className="mt-12 p-8 bg-gradient-to-r from-[#0066FF]/10 to-[#00CCFF]/10 rounded-xl max-w-2xl mx-auto">
            <p className="text-center text-gray-700">
              {partnerDescription}
            </p>
          </div>
        )}
      </Section>

      {/* CTA */}
      <CTASection
        title={ctaTitle}
        description={ctaDescription}
        ctaText={ctaText}
        ctaHref={ctaHref}
        secondaryCtaText={secondaryCtaText}
        secondaryCtaHref={secondaryCtaHref}
      />
    </>
  );
}
