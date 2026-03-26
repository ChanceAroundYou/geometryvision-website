import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  background?: 'white' | 'gray' | 'gradient' | 'dark';
  className?: string;
}

const bgMap = {
  white: "bg-white",
  gray: "bg-gray-100",
  gradient: "bg-gradient-to-r from-[#0066FF] to-[#00CCFF]",
  dark: "bg-gray-900",
};

export function Section({ children, background = "white", className }: SectionProps) {
  return (
    <section className={cn("py-20", bgMap[background], className)}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}
