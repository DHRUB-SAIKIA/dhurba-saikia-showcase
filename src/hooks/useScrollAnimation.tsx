
import { useEffect, useRef, RefObject } from "react";

// Options for scroll animation
interface ScrollAnimationOptions {
  threshold?: number; // Percentage of element visible before triggering (0-1)
  root?: Element | null; // Viewport by default
  rootMargin?: string; // Margin around the root
  delay?: number; // Delay before animation starts (ms)
}

/**
 * Hook to add scroll-based animations to elements
 */
export const useScrollAnimation = (
  options: ScrollAnimationOptions = {}
): [RefObject<HTMLElement>, boolean] => {
  const elementRef = useRef<HTMLElement>(null);
  const entryRef = useRef<IntersectionObserverEntry>();
  
  const { 
    threshold = 0.1, 
    root = null,
    rootMargin = "0px",
    delay = 0 
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entryRef.current = entry;
          
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add("active", "visible");
            }, delay);
            
            // Once animation is triggered, we can stop observing
            observer.unobserve(element);
          }
        });
      },
      { 
        threshold,
        root,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, root, rootMargin, delay]);
  
  const isVisible = entryRef.current?.isIntersecting || false;

  return [elementRef, isVisible];
};

export default useScrollAnimation;
