import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  bordered?: boolean;
  hover?: boolean;
  className?: string;
}

export function Card({ children, bordered, hover, className }: CardProps) {
  return (
    <div className={cn(
      "p-6 bg-white rounded-lg",
      bordered && "border border-gray-200",
      hover && "hover:shadow-lg transition-shadow",
      !bordered && !hover && "shadow-sm",
      className
    )}>
      {children}
    </div>
  );
}
