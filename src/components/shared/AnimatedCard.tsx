
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  tilt?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  delay = 0,
  hover = true,
  tilt = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>("");
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              card.classList.add("active");
            }, delay);
            
            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(card);
    
    return () => {
      if (card) observer.unobserve(card);
    };
  }, [delay]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = ((y - centerY) / centerY) * -8;
    const tiltY = ((x - centerX) / centerX) * 8;
    
    setTransform(`perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`);
  };
  
  const handleMouseLeave = () => {
    if (tilt) {
      setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
    }
  };
  
  return (
    <div
      ref={cardRef}
      className={cn(
        "card-animate",
        hover && "card-hover",
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        transform: tilt ? transform : undefined 
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
