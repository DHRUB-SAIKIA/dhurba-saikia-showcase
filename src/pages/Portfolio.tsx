
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/shared/ProjectCard";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);

  const categories = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "branding", label: "Branding" },
    { id: "ui", label: "UI/UX" }
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Website Redesign",
      slug: "ecommerce-redesign",
      category: "web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Financial App UI/UX",
      slug: "financial-app-ui",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Tech Startup Branding",
      slug: "tech-startup-branding",
      category: "branding",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      slug: "social-media-dashboard",
      category: "ui",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Restaurant Booking Platform",
      slug: "restaurant-booking",
      category: "web",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      slug: "fitness-tracker",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: 7,
      title: "Travel Agency Rebrand",
      slug: "travel-agency-rebrand",
      category: "branding",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      featured: true
    },
    {
      id: 8,
      title: "Analytics Dashboard UI",
      slug: "analytics-dashboard",
      category: "ui",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
      featured: false
    }
  ];

  useEffect(() => {
    const filtered = selectedCategory === "all"
      ? projects
      : projects.filter(project => project.category === selectedCategory);
    
    setFilteredProjects(filtered);
  }, [selectedCategory]);

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Explore my selected projects across various disciplines, from web development to branding and UI/UX design.
            </p>
          </div>

          <div className="flex justify-center mt-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id)}
                  className="rounded-full"
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                category={categories.find(cat => cat.id === project.category)?.label || ""}
                slug={project.slug}
                featured={project.featured}
                className={project.featured ? "md:col-span-2" : ""}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
