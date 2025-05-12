
import { useRef } from 'react';
import useParallax from '@/hooks/useParallax';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  reverse?: boolean;
  bgImage?: string;
  overlay?: boolean;
}

const ParallaxSection = ({
  children,
  className,
  speed = 0.2,
  reverse = false,
  bgImage,
  overlay = false
}: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const parallaxStyle = useParallax(backgroundRef, { speed, reverse });
  
  return (
    <div 
      ref={sectionRef} 
      className={cn("parallax-container overflow-hidden relative", className)}
    >
      {bgImage && (
        <div 
          ref={backgroundRef} 
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{
            ...parallaxStyle,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {overlay && <div className="absolute inset-0 bg-black/40"></div>}
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
