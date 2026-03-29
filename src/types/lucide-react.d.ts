declare module "lucide-react" {
  import * as React from "react";

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
  }

  export type LucideIcon = React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;

  export const ArrowRight: LucideIcon;
  export const Award: LucideIcon;
  export const BarChart3: LucideIcon;
  export const Brain: LucideIcon;
  export const Building2: LucideIcon;
  export const Car: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const Cpu: LucideIcon;
  export const Eye: LucideIcon;
  export const Factory: LucideIcon;
  export const FlaskConical: LucideIcon;
  export const Globe: LucideIcon;
  export const GraduationCap: LucideIcon;
  export const Heart: LucideIcon;
  export const Hospital: LucideIcon;
  export const Layers: LucideIcon;
  export const Lightbulb: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const Menu: LucideIcon;
  export const Microscope: LucideIcon;
  export const Phone: LucideIcon;
  export const Satellite: LucideIcon;
  export const Scan: LucideIcon;
  export const Send: LucideIcon;
  export const Shield: LucideIcon;
  export const ShoppingCart: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Target: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const UserCheck: LucideIcon;
  export const Users: LucideIcon;
  export const X: LucideIcon;
}