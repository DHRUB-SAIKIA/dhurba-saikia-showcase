
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ParallaxSection from "@/components/shared/ParallaxSection";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current || !imageRef.current) return;
      
      const scrollY = window.scrollY;
      // Move text up slower than scroll (parallax)
      textRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      // Move image down slower than scroll (reverse parallax)
      imageRef.current.style.transform = `translateY(${-scrollY * 0.15}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container-custom z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="order-2 lg:order-1 animate-slide-up">
            <h1 className="heading-xl">
              <span className="text-primary-600">Design</span> &{" "}
              <span className="text-accent-500 relative inline-block">
                Development
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </span> Solutions
            </h1>
            <p className="text-xl mt-6 text-muted-foreground max-w-xl">
              I'm Dhruba Saikia, a multidisciplinary designer and developer creating beautiful, functional digital experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8 hover-scale">
                <Link to="/portfolio">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 hover-scale">
                <Link to="/contact">Let's Talk</Link>
              </Button>
            </div>
            
            <div className="mt-12">
              <p className="text-sm font-medium text-muted-foreground mb-4">Trusted by</p>
              <div className="flex flex-wrap gap-8 items-center opacity-70">
                <div className="w-24 grayscale hover:grayscale-0 transition-all hover-lift">
                  <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&auto=format&fit=crop" alt="Client logo" className="w-full" />
                </div>
                <div className="w-24 grayscale hover:grayscale-0 transition-all hover-lift">
                  <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop" alt="Client logo" className="w-full" />
                </div>
                <div className="w-24 grayscale hover:grayscale-0 transition-all hover-lift">
                  <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop" alt="Client logo" className="w-full" />
                </div>
              </div>
            </div>
          </div>
          
          <div ref={imageRef} className="order-1 lg:order-2 animate-fade-in perspective-wrapper">
            <div className="relative">
              <div 
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl card-3d"
                style={{ 
                  transform: "perspective(1000px) rotateY(-5deg) rotateX(5deg)",
                  transition: "transform 0.5s ease-out"
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  
                  const tiltX = ((y - centerY) / centerY) * -7;
                  const tiltY = ((x - centerX) / centerX) * 7;
                  
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "perspective(1000px) rotateY(-5deg) rotateX(5deg)";
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop" 
                  alt="Dhruba Saikia - Designer and Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-[-20px] right-[-20px] w-64 h-64 bg-primary-200 rounded-full opacity-70 blur-3xl -z-10 animate-pulse"></div>
              <div className="absolute bottom-[-30px] left-[-30px] w-72 h-72 bg-accent-200 rounded-full opacity-70 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-100 rounded-full opacity-30 filter blur-3xl dark:opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-100 rounded-full opacity-30 filter blur-3xl dark:opacity-10"></div>
      </div>
    </section>
  );
};

export default Hero;
