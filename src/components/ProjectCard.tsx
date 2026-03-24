import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export function ProjectCard({ title, description, icon, href }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-[#0066FF] hover:shadow-lg transition-all"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#003366] mb-2 group-hover:text-[#0066FF] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-[#0066FF] font-medium">
        <span>了解更多</span>
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
