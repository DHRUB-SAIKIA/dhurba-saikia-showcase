
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/shared/ProjectCard";
import AnimatedText from "@/components/shared/AnimatedText";

const FeaturedProjects = () => {
  const [category, setCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Modern E-commerce Website",
      slug: "modern-ecommerce-website",
      category: "web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Mobile Banking App",
      slug: "mobile-banking-app",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Brand Identity for Tech Startup",
      slug: "tech-startup-branding",
      category: "branding",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Campaign",
      slug: "social-media-campaign",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
      featured: false
    }
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "branding", label: "Branding" },
    { id: "marketing", label: "Marketing" }
  ];

  const filteredProjects = category === "all" 
    ? projects 
    : projects.filter(project => project.category === category);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <AnimatedText as="h2" className="heading-lg mb-4" delay={100}>
            Featured Projects
          </AnimatedText>
          <AnimatedText as="p" className="text-muted-foreground" delay={200}>
            A selection of my recent work across various fields and industries.
          </AnimatedText>
        </div>

        <AnimatedText className="flex justify-center mb-12" delay={300}>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat, index) => (
              <Button
                key={cat.id}
                variant={category === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setCategory(cat.id)}
                className="rounded-full stagger-item"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              category={categories.find(cat => cat.id === project.category)?.label || ""}
              slug={project.slug}
              featured={project.featured}
              className={project.featured ? "lg:col-span-2" : ""}
              delay={100 * (index + 1)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <AnimatedText delay={600}>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
