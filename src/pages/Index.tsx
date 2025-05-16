
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import ContactForm from "@/components/shared/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useState } from "react";

const Index = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      
      {/* Contact CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary-600 text-white rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16">
                <h2 className="heading-lg mb-4">Let's Work Together</h2>
                <p className="text-white/80 text-lg mb-8">
                  Have a project in mind? Let's discuss how we can bring your vision to life.
                </p>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                      <Link to="/contact" className="flex items-center">
                        Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
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
                            className="object-cover"
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
              </div>
              <div className="hidden lg:flex relative h-full items-center justify-center p-8">
                <div 
                  className="relative z-10"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {/* Decorative Circles - Smaller versions for CTA section */}
                  <div className="absolute -top-6 -right-4 w-8 h-8 bg-primary-300/50 rounded-full opacity-70 animate-bounce" style={{animationDuration: '6s'}}></div>
                  <div className="absolute -bottom-5 -left-6 w-10 h-10 bg-accent-200/50 rounded-full opacity-60 animate-pulse" style={{animationDuration: '4s'}}></div>
                  <div className="absolute top-6 -left-8 w-6 h-6 bg-secondary-200/50 rounded-full opacity-60 animate-pulse" style={{animationDuration: '7s'}}></div>

                  <div 
                    className="relative h-48 w-48 rounded-full"
                    style={{
                      boxShadow: "0 10px 30px -5px rgba(103, 71, 204, 0.4)",
                      border: "4px solid rgba(255, 255, 255, 0.3)",
                      overflow: "hidden"
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src="/lovable-uploads/af01a282-9f2a-4125-84a4-c7f2e0a7956c.png" 
                        alt="Dhruba Saikia"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {isHovering && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20 transition-opacity duration-300">
                        <div className="text-white text-center p-4">
                          <p className="font-medium text-lg">Hey, I'm Dhruba!</p>
                          <p className="text-sm text-white/80">How can I help you today?</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-60 z-10"></div>
                  </div>
                  
                  {/* Decorative Ring */}
                  <div className="absolute -inset-3 border border-dashed border-white/30 rounded-full opacity-40 animate-spin" style={{animationDuration: '15s'}}></div>
                  
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/90 to-primary-600/50 -z-10 rounded-full blur-xl opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
