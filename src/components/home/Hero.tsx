
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ParallaxSection from "@/components/shared/ParallaxSection";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { UserRound } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

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

  // Add 3D effect for profile picture
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      // Get container dimensions
      const container = imageRef.current;
      const rect = container.getBoundingClientRect();
      
      // Calculate mouse position relative to the center of the container
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate rotation based on mouse distance from center
      // Limit rotation to a reasonable amount (15 degrees)
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10;
      const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 10;
      
      setRotation({ x: rotateX, y: rotateY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button asChild size="lg" className="rounded-full px-8 hover-scale">
                    <Link to="/portfolio" className="flex items-center gap-1">
                      View My Work
                    </Link>
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-0 overflow-hidden rounded-lg border-2 border-primary-200">
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12 border-2 border-primary-200">
                        <AvatarImage 
                          src="/lovable-uploads/af01a282-9f2a-4125-84a4-c7f2e0a7956c.png" 
                          alt="Dhruba Saikia" 
                          className="object-cover object-top"
                        />
                        <AvatarFallback>DS</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium text-primary-800">Hey, I'm Dhruba!</h3>
                        <p className="text-sm text-primary-600">How can I help you today?</p>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
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
          
          <div 
            ref={imageRef} 
            className="order-1 lg:order-2 animate-fade-in perspective-wrapper flex justify-center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div 
              className="relative profile-container"
              style={{ 
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: 'transform 0.2s ease-out',
                width: '280px',
                height: '280px'
              }}
            >
              {/* 3D Animation Layers */}
              <div className="absolute inset-0 bg-primary-100 rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <div className="absolute inset-2 bg-accent-100 rounded-full blur-xl opacity-30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              
              {/* Circle Frame */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{ 
                  boxShadow: "0 10px 30px -5px rgba(103, 71, 204, 0.4)",
                  border: "4px solid rgba(155, 135, 245, 0.3)",
                  overflow: "hidden"
                }}
              >
                {/* Message Popup on Hover */}
                {isHovering && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20 transition-opacity duration-300">
                    <div className="text-white text-center p-4">
                      <p className="font-medium text-lg">Hey, I'm Dhruba!</p>
                      <p className="text-sm text-white/80">How can I help you today?</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Main Profile Image - Adjusted Position */}
              <div 
                className="absolute inset-0 z-10 overflow-hidden"
                style={{
                  transform: "translate(0, 30px) scale(1.6)",
                }}
              >
                <img 
                  src="/lovable-uploads/af01a282-9f2a-4125-84a4-c7f2e0a7956c.png" 
                  alt="Dhruba Saikia - Designer and Developer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Glass Reflection Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-60 z-15 rounded-full"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-[-30px] right-[-20px] w-48 h-48 bg-primary-200 rounded-full opacity-50 blur-3xl -z-10 animate-pulse"></div>
              <div className="absolute bottom-[-40px] left-[-30px] w-56 h-56 bg-accent-200 rounded-full opacity-50 blur-3xl -z-10" style={{animationDelay: '0.7s'}}></div>
              
              {/* 3D Floating Elements */}
              <div 
                className="absolute w-10 h-10 bg-primary-500 rounded-full top-10 left-0 z-20 opacity-80"
                style={{ 
                  transform: `translateZ(40px) translateX(${Math.sin(Date.now() * 0.001) * 10}px)`,
                  animation: 'float 6s ease-in-out infinite'
                }}
              ></div>
              <div 
                className="absolute w-6 h-6 bg-accent-500 rounded-full bottom-5 right-5 z-20 opacity-80"
                style={{ 
                  transform: `translateZ(60px) translateY(${Math.cos(Date.now() * 0.002) * 10}px)`,
                  animation: 'float 8s ease-in-out infinite reverse'
                }}
              ></div>
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
