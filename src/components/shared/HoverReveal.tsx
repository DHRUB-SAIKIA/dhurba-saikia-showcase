
import { useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { cn } from '@/lib/utils';

interface HoverRevealProps {
  children: React.ReactNode;
  revealContent: React.ReactNode;
  className?: string;
  contentClassName?: string;
  type?: 'overlay' | 'card';
}

const HoverReveal = ({
  children,
  revealContent,
  className = '',
  contentClassName = '',
  type = 'overlay'
}: HoverRevealProps) => {
  const [isHovering, setIsHovering] = useState(false);

  // For simple overlay hover effect
  if (type === 'overlay') {
    return (
      <div 
        className={cn("hover-reveal", className)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {children}
        <div className={cn("hover-reveal-content", contentClassName)}>
          {revealContent}
        </div>
      </div>
    );
  }

  // For hover card effect
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className={cn("cursor-pointer", className)}>
          {children}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className={cn("p-4", contentClassName)}>
        {revealContent}
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverReveal;
