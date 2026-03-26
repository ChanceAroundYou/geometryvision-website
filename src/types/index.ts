import { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Scenario {
  title: string;
  description: string;
  users?: string;
  cases?: string[];
}

export interface Partner {
  name: string;
  role: string;
}

export interface Project {
  name: string;
  hero: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  };
  problemItems: string[];
  solutionItems: string[];
  features: Feature[];
  applicationScenarios: Scenario[];
  techAdvantages: string[];
  partners: Partner[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
}
