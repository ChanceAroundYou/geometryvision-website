import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

const variantMap = {
  primary: "bg-[#0066FF] text-white hover:bg-[#0052CC]",
  secondary: "bg-white text-[#003366] hover:bg-gray-100",
  outline: "text-[#0066FF] hover:text-[#0052CC]",
  ghost: "text-[#0066FF] hover:text-[#0052CC]",
};

const sizeMap = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3",
  lg: "px-8 py-4",
};

export function Button({ variant = "primary", size = "md", href, children, className, ...props }: ButtonProps) {
  const classes = cn("inline-flex items-center justify-center font-medium rounded-lg transition-colors", variantMap[variant], sizeMap[size], className);
  
  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return <button className={classes} {...props}>{children}</button>;
}
