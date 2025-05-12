
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import ContactForm from "@/components/shared/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
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
                <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                  <Link to="/contact">
                    Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="hidden lg:flex relative h-full items-center justify-center p-8">
                <div className="relative z-10">
                  <Avatar className="w-48 h-48 border-4 border-white/20">
                    <AvatarImage 
                      src="/lovable-uploads/5051cee0-29db-486a-aa93-541b1d105e41.png" 
                      alt="Dhruba Saikia"
                      className="object-cover object-center"
                    />
                    <AvatarFallback>DS</AvatarFallback>
                  </Avatar>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-600/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
