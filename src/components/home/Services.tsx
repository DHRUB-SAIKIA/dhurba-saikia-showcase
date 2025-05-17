
import { Link } from "react-router-dom";
import { ArrowRight, Code, PenTool, Smartphone, Palette, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCard from "@/components/shared/AnimatedCard";
import AnimatedText from "@/components/shared/AnimatedText";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <AnimatedCard 
      className="bg-card p-8 rounded-xl hover:shadow-lg border border-border" 
      delay={delay}
      hover={true}
      tilt={true}
    >
      <div className="w-14 h-14 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-6 text-primary-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link to="/services" className="inline-flex items-center text-primary-600 font-medium hover:underline">
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </AnimatedCard>
  );
};

const Services = () => {
  const services = [
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences through thoughtful interface design."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description: "Building responsive, performant websites and web applications with modern technologies."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Development",
      description: "Crafting native and cross-platform mobile apps for iOS and Android devices."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Graphic Design",
      description: "Designing compelling visual assets that effectively communicate brand messages."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "CMS Development",
      description: "Building custom content management systems tailored to specific business needs."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Brand Identity",
      description: "Creating cohesive brand identities that resonate with target audiences."
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedText as="h2" className="heading-lg mb-4" delay={100}>
            My Services
          </AnimatedText>
          <AnimatedText as="p" className="text-muted-foreground" delay={200}>
            I offer a wide range of design and development services to help bring your vision to life.
          </AnimatedText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description}
              delay={100 * (index + 1)}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <AnimatedText delay={600}>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/services">View All Services</Link>
            </Button>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default Services;
