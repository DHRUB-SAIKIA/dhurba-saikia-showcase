
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ParallaxSection from "@/components/shared/ParallaxSection";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { 
  Html, Css, Javascript, React as ReactIcon, 
  Flutter, Swift, Kotlin,
  Figma, Sketch,
  AdobeIllustrator, Photoshop, CorelDraw
} from "lucide-react";
import AnimatedText from "@/components/shared/AnimatedText";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
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

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container-custom z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="order-2 lg:order-1">
            <AnimatedText as="h1" className="heading-xl" animation="fade-up" delay={200}>
              <span className="text-primary-600">Design</span> &{" "}
              <span className="text-accent-500 relative inline-block">
                Development
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </span> Solutions
            </AnimatedText>
            
            <AnimatedText as="p" className="text-xl mt-6 text-muted-foreground max-w-xl" delay={400}>
              I'm Dhruba Saikia, a multidisciplinary designer and developer creating beautiful, functional digital experiences.
            </AnimatedText>
            
            <AnimatedText className="mt-8 flex flex-wrap gap-4" delay={600}>
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
            </AnimatedText>
            
            <AnimatedText className="mt-12" delay={800}>
              <p className="text-sm font-medium text-muted-foreground mb-4">Specialise at</p>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-6 mt-2">
                {/* Web Development */}
                <div className="flex flex-col items-center stagger-item hover-lift">
                  <div className="h-12 w-12 flex items-center justify-center bg-primary-100 rounded-lg mb-2 shadow-sm">
                    <Html className="h-6 w-6 text-primary-600" />
                  </div>
                  <span className="text-xs text-muted-foreground">HTML</span>
                </div>
                
                <div className="flex flex-col items-center stagger-item hover-lift">
                  <div className="h-12 w-12 flex items-center justify-center bg-primary-100 rounded-lg mb-2 shadow-sm">
                    <Css className="h-6 w-6 text-primary-600" />
                  </div>
                  <span className="text-xs text-muted-foreground">CSS</span>
                </div>
                
                <div className="flex flex-col items-center stagger-item hover-lift">
                  <div className="h-12 w-12 flex items-center justify-center bg-primary-100 rounded-lg mb-2 shadow-sm">
                    <Javascript className="h-6 w-6 text-primary-600" />
                  </div>
                  <span className="text-xs text-muted-foreground">JavaScript</span>
                </div>
                
                <div className="flex flex-col items-center stagger-item hover-lift">
                  <div className="h-12 w-12 flex items-center justify-center bg-primary-100 rounded-lg mb-2 shadow-sm">
                    <ReactIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <span className="text-xs text-muted-foreground">React</span>
                </div>
                
                {/* App Development */}
                <div className="flex flex-col items-center stagger-item hover-lift">
                  <div className="h-12 w-12 flex items-center justify-center bg-accent-100 rounded-lg mb-2 shadow-sm">
                    <Flutter className="h-6 w-6 text-accent-500" />
                  </div>
                  <span className="text-xs text-muted-foreground">Flutter</span>
                </div>
                
                <div className="flex flex-col items-center stagger-item hover-lift">
                  <div className="h-12 w-12 flex items-center justify-center bg-accent-100 rounded-lg mb-2 shadow-sm">
                    <Swift className="h-6 w-6 text-accent-500" />
                  </div>
                  <span className="text-xs text-muted-foreground">Swift</span>
                </div>
                
                <div className="flex flex-col items-center stagger-item hover-lift">
                  <div className="h-12 w-12 flex items-center justify-center bg-accent-100 rounded-lg mb-2 shadow-sm">
                    <Kotlin className="h-6 w-6 text-accent-500" />
                  </div>
                  <span className="text-xs text-muted-foreground">Kotlin</span>
                </div>
                
                {/* UI/UX Design */}
                <div className="flex flex-col items-center stagger-item hover-lift">
                  <div className="h-12 w-12 flex items-center justify-center bg-secondary-100 rounded-lg mb-2 shadow-sm">
                    <Figma className="h-6 w-6 text-secondary-600" />
                  </div>
                  <span className="text-xs text-muted-foreground">Figma</span>
                </div>
                
                <div className="flex flex-col items-center stagger-item hover-lift">
                  <div className="h-12 w-12 flex items-center justify-center bg-secondary-100 rounded-lg mb-2 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-secondary-600">
                      <path d="M16.5 6.5h.5m-8.5 11h3m-3-14h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2z" />
                    </svg>
                  </div>
                  <span className="text-xs text-muted-foreground">Adobe XD</span>
                </div>
                
                <div className="flex flex-col items-center stagger-item hover-lift">
                  <div className="h-12 w-12 flex items-center justify-center bg-secondary-100 rounded-lg mb-2 shadow-sm">
                    <Sketch className="h-6 w-6 text-secondary-600" />
                  </div>
                  <span className="text-xs text-muted-foreground">Sketch</span>
                </div>
                
                {/* Graphic Design */}
                <div className="flex flex-col items-center stagger-item hover-lift">
                  <div className="h-12 w-12 flex items-center justify-center bg-primary-100 rounded-lg mb-2 shadow-sm">
                    <AdobeIllustrator className="h-6 w-6 text-primary-600" />
                  </div>
                  <span className="text-xs text-muted-foreground">Illustrator</span>
                </div>
                
                <div className="flex flex-col items-center stagger-item hover-lift">
                  <div className="h-12 w-12 flex items-center justify-center bg-primary-100 rounded-lg mb-2 shadow-sm">
                    <Photoshop className="h-6 w-6 text-primary-600" />
                  </div>
                  <span className="text-xs text-muted-foreground">Photoshop</span>
                </div>
                
                <div className="flex flex-col items-center stagger-item hover-lift">
                  <div className="h-12 w-12 flex items-center justify-center bg-primary-100 rounded-lg mb-2 shadow-sm">
                    <CorelDraw className="h-6 w-6 text-primary-600" />
                  </div>
                  <span className="text-xs text-muted-foreground">CorelDRAW</span>
                </div>
              </div>
            </AnimatedText>
          </div>
          
          <div 
            ref={imageRef} 
            className="order-1 lg:order-2 flex justify-center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative profile-container animate-slide-up" style={{ width: '280px', height: '280px' }}>
              {/* Profile image with effects - keep existing code unchanged */}
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-primary-100 rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <div className="absolute inset-2 bg-accent-100 rounded-full blur-xl opacity-30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              
              {/* Decorative Circles */}
              <div className="absolute -top-12 -right-10 w-16 h-16 bg-primary-300 rounded-full opacity-70 animate-bounce" style={{animationDuration: '6s'}}></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-accent-200 rounded-full opacity-60 animate-pulse" style={{animationDuration: '4s'}}></div>
              <div className="absolute top-10 -left-14 w-10 h-10 bg-secondary-200 rounded-full opacity-60 animate-pulse" style={{animationDuration: '7s'}}></div>
              <div className="absolute -bottom-4 right-2 w-12 h-12 bg-primary-200 rounded-full opacity-50 animate-bounce" style={{animationDuration: '8s'}}></div>
              
              {/* Small Accent Dots */}
              <div className="absolute top-1/4 -left-3 w-3 h-3 bg-accent-500 rounded-full"></div>
              <div className="absolute top-1/2 -right-5 w-5 h-5 bg-secondary-400 rounded-full"></div>
              <div className="absolute bottom-1/4 -left-6 w-4 h-4 bg-primary-400 rounded-full"></div>
              
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
                
                {/* Profile Image - Fixed for perfect centering */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/af01a282-9f2a-4125-84a4-c7f2e0a7956c.png" 
                    alt="Dhruba Saikia - Designer and Developer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Glass Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-60 z-10 rounded-full"></div>
              </div>
              
              {/* Decorative Ring Elements */}
              <div className="absolute -inset-5 border-2 border-dashed border-primary-300 rounded-full opacity-30 animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute -inset-10 border border-primary-200 rounded-full opacity-20"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-[-30px] right-[-20px] w-48 h-48 bg-primary-200 rounded-full opacity-50 blur-3xl -z-10 animate-pulse"></div>
              <div className="absolute bottom-[-40px] left-[-30px] w-56 h-56 bg-accent-200 rounded-full opacity-50 blur-3xl -z-10" style={{animationDelay: '0.7s'}}></div>
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
