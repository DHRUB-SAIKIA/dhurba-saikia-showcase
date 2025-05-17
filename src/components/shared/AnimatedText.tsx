
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "reveal";
  staggerChildren?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  as: Component = "div",
  className,
  delay = 0,
  animation = "fade-up",
  staggerChildren = false
}) => {
  const elementRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add("active");
              
              if (staggerChildren) {
                const childElements = element.querySelectorAll(".stagger-item");
                childElements.forEach((child, index) => {
                  setTimeout(() => {
                    child.classList.add("active");
                  }, 100 * index);
                });
              }
            }, delay);
            
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay, staggerChildren]);
  
  const getAnimationClass = () => {
    switch (animation) {
      case "fade-up": return "animate-text";
      case "fade-down": return "reveal-down animate-text";
      case "fade-left": return "reveal-left";
      case "fade-right": return "reveal-right";
      case "reveal": return "text-reveal";
      default: return "animate-text";
    }
  };
  
  return (
    <Component
      ref={elementRef}
      className={cn(getAnimationClass(), className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {animation === "reveal" ? <span>{children}</span> : children}
    </Component>
  );
};

export default AnimatedText;
