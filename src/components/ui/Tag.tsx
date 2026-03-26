import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  className?: string;
}

const variantMap = {
  default: "bg-gray-100 text-gray-700",
  success: "bg-green-100 text-green-700",
  warning: "bg-yellow-100 text-yellow-700",
  error: "bg-red-100 text-red-700",
};

export function Tag({ children, variant = "default", className }: TagProps) {
  return (
    <span className={cn("px-3 py-1 text-sm rounded-full inline-block", variantMap[variant], className)}>
      {children}
    </span>
  );
}
