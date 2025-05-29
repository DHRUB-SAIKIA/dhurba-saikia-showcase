
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import AnimatedText from "@/components/shared/AnimatedText";
import SpecialiseGrid from "./SpecialiseGrid";

const HeroContent = () => {
  return (
    <>
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
                    src="/lovable-uploads/32e8542a-929d-4640-868e-f070ddf32bc0.png" 
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
      
      <SpecialiseGrid />
    </>
  );
};

export default HeroContent;
