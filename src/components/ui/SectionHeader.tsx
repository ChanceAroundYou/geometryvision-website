import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ title, description, align = "center", className }: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", "mb-12", className)}>
      <h2 className="text-3xl font-bold text-[#003366] mb-4">{title}</h2>
      {description && (
        <p className={cn("text-gray-600", align === "center" && "max-w-2xl mx-auto")}>{description}</p>
      )}
    </div>
  );
}
