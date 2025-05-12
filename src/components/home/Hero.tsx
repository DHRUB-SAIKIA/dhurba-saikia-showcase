
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-up">
            <h1 className="heading-xl">
              <span className="text-primary-600">Design</span> &{" "}
              <span className="text-accent-500">Development</span> Solutions
            </h1>
            <p className="text-xl mt-6 text-muted-foreground max-w-xl">
              I'm Dhruba Saikia, a multidisciplinary designer and developer creating beautiful, functional digital experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/portfolio">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/contact">Let's Talk</Link>
              </Button>
            </div>
            
            <div className="mt-12">
              <p className="text-sm font-medium text-muted-foreground mb-4">Trusted by</p>
              <div className="flex flex-wrap gap-8 items-center opacity-70">
                <div className="w-24 grayscale hover:grayscale-0 transition-all">
                  <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&auto=format&fit=crop" alt="Client logo" className="w-full" />
                </div>
                <div className="w-24 grayscale hover:grayscale-0 transition-all">
                  <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop" alt="Client logo" className="w-full" />
                </div>
                <div className="w-24 grayscale hover:grayscale-0 transition-all">
                  <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop" alt="Client logo" className="w-full" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop" 
                  alt="Dhruba Saikia - Designer and Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-[-20px] right-[-20px] w-64 h-64 bg-primary-200 rounded-full opacity-70 blur-3xl -z-10"></div>
              <div className="absolute bottom-[-30px] left-[-30px] w-72 h-72 bg-accent-200 rounded-full opacity-70 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
