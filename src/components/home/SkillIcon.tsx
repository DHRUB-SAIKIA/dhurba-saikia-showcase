
import { ReactNode } from 'react';

interface SkillIconProps {
  icon: ReactNode;
  label: string;
  variant?: 'primary' | 'secondary' | 'accent';
  iconClassName?: string;
}

const SkillIcon = ({ icon, label, variant = 'primary', iconClassName }: SkillIconProps) => {
  // Determine background color based on variant
  const bgColorClass = {
    primary: 'bg-primary-100',
    secondary: 'bg-secondary-100',
    accent: 'bg-accent-100',
  }[variant];

  // Determine text color based on variant
  const textColorClass = {
    primary: 'text-primary-600',
    secondary: 'text-secondary-600',
    accent: 'text-accent-500',
  }[variant];

  return (
    <div className="flex flex-col items-center stagger-item hover-lift">
      <div className={`h-12 w-12 flex items-center justify-center ${bgColorClass} rounded-lg mb-2 shadow-sm`}>
        <div className={`${iconClassName || `h-6 w-6 ${textColorClass}`}`}>{icon}</div>
      </div>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
};

export default SkillIcon;
