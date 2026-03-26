import { LucideIcon } from "lucide-react";
import { Card, Tag } from "./index";

export interface TeamMemberCardProps {
  name: string;
  role: string;
  description?: string;
  education?: string;
  expertise?: string[];
  icon?: LucideIcon;
  showAvatar?: boolean;
}

export function TeamMemberCard({
  name,
  role,
  description,
  education,
  expertise,
  icon: Icon,
  showAvatar = false,
}: TeamMemberCardProps) {
  return (
    <Card className="text-center border border-gray-200 hover:border-[#0066FF] hover:shadow-lg transition-all">
      {showAvatar && Icon && (
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00CCFF] mx-auto mb-4 flex items-center justify-center">
          <Icon className="w-10 h-10 text-white" />
        </div>
      )}
      {showAvatar && !Icon && (
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00CCFF] mx-auto mb-4 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">{name.charAt(0)}</span>
        </div>
      )}
      <h3 className="text-lg font-semibold text-[#003366] mb-1">{name}</h3>
      <p className="text-[#0066FF] font-medium mb-2">{role}</p>
      {description && <p className="text-gray-600 text-sm mb-3">{description}</p>}
      {education && (
        <div className="text-xs text-gray-500 mb-3">
          <span className="font-medium">{education}</span>
        </div>
      )}
      {expertise && expertise.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2">
          {expertise.map((exp, idx) => (
            <Tag key={idx}>{exp}</Tag>
          ))}
        </div>
      )}
    </Card>
  );
}
