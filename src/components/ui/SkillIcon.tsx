import type { ReactNode } from "react";

interface SkillIconProps {
  icon: ReactNode;
  label: string;
}

export default function SkillIcon({ icon, label }: SkillIconProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-4xl">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
