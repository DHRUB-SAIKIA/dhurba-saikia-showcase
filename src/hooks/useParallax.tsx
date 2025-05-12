
import { useEffect, useState, RefObject } from 'react';

interface ParallaxOptions {
  speed?: number;
  reverse?: boolean;
  disabled?: boolean;
}

export const useParallax = (
  ref: RefObject<HTMLElement>,
  options: ParallaxOptions = {}
) => {
  const { speed = 0.1, reverse = false, disabled = false } = options;
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    if (disabled) return;
    
    const handleScroll = () => {
      if (!ref.current) return;
      
      const elementTop = ref.current.getBoundingClientRect().top;
      const elementHeight = ref.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element is in the viewport
      const visiblePart = Math.max(0, Math.min(elementHeight, windowHeight + elementTop));
      const percentageVisible = visiblePart / windowHeight;
      
      // Calculate the parallax offset
      const parallaxOffset = (elementTop * speed) * (reverse ? -1 : 1);
      setOffset(parallaxOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial calculation
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, speed, reverse, disabled]);
  
  return { transform: `translateY(${offset}px)` };
};

export default useParallax;
