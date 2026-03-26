import { IconBadge } from "./index";

export interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
}

export function ProcessStep({ step, title, description }: ProcessStepProps) {
  return (
    <div className="text-center">
      <IconBadge number={Number(step)} size="md" />
      <h3 className="font-semibold text-[#003366] mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
