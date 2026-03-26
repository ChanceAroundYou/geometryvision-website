import { cn } from "@/lib/utils";

interface IconBadgeProps {
  icon?: React.ComponentType<{ className?: string }>;
  number?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: { container: "w-12 h-12", icon: "w-6 h-6" },
  md: { container: "w-16 h-16", icon: "w-8 h-8" },
  lg: { container: "w-20 h-20", icon: "w-10 h-10" },
};

export function IconBadge({ icon: Icon, number, size = "md", className }: IconBadgeProps) {
  return (
    <div className={cn("mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00CCFF] flex items-center justify-center", sizeMap[size].container, className)}>
      {Icon && <Icon className={cn("text-white", sizeMap[size].icon)} />}
      {number !== undefined && <span className="text-white font-bold text-lg">{number}</span>}
    </div>
  );
}
