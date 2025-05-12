
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Monitor, Smartphone, PenTool, Palette, Code, Database, LineChart, Layers } from "lucide-react";

interface ServiceDetailProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
  reverse?: boolean;
}

const ServiceDetail = ({ icon, title, description, features, image, reverse = false }: ServiceDetailProps) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className={`order-2 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className={`order-1 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="w-14 h-14 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-6 text-primary-600">
          {icon}
        </div>
        <h3 className="heading-md mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 mr-3 text-primary-600 mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive interfaces and delightful user experiences that help your products stand out.",
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Interaction design and user flows",
        "Usability testing and iteration",
        "Design systems and component libraries"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description: "Building responsive, high-performance websites and web applications with modern technologies.",
      features: [
        "Custom website development",
        "E-commerce solutions",
        "Web applications",
        "Content management systems",
        "Performance optimization"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
      reverse: true
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Development",
      description: "Creating native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: [
        "iOS and Android app development",
        "Cross-platform solutions",
        "App UI/UX design",
        "App performance optimization",
        "App store submission and support"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Graphic Design",
      description: "Designing visual assets that effectively communicate your brand's message and values.",
      features: [
        "Logo and brand identity design",
        "Marketing and promotional materials",
        "Social media graphics",
        "Print design",
        "Presentation design"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
      reverse: true
    }
  ];

  const additionalServices = [
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Brand Identity",
      description: "Developing cohesive brand identities that resonate with your target audience and set you apart from competitors."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "CMS Development",
      description: "Building custom content management systems that make updating your website easy and efficient."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "SEO Optimization",
      description: "Optimizing your digital presence to improve visibility and drive organic traffic to your website."
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Illustration & Motion",
      description: "Creating custom illustrations and motion graphics that bring your brand stories to life."
    }
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">My Services</h1>
            <p className="text-xl text-muted-foreground">
              From concept to execution, I offer end-to-end design and development solutions to help you achieve your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="space-y-32">
            {services.map((service, index) => (
              <ServiceDetail 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                image={service.image}
                reverse={service.reverse}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Additional Services</h2>
            <p className="text-muted-foreground">
              Beyond my core offerings, I provide a range of specialized services to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-card p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-6 text-primary-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">My Process</h2>
            <p className="text-muted-foreground">
              A structured approach ensures your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Discovery</h3>
              <p className="text-muted-foreground">
                Understanding your business, goals, target audience, and project requirements through in-depth research.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Strategy</h3>
              <p className="text-muted-foreground">
                Developing a comprehensive plan that outlines the project approach, timeline, and deliverables.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Design & Development</h3>
              <p className="text-muted-foreground">
                Creating and building the solution with regular updates and opportunities for feedback and adjustments.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4">Delivery & Support</h3>
              <p className="text-muted-foreground">
                Launching the final product with comprehensive testing and ongoing support to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary-600 text-white rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6">Ready to Start Your Project?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and how I can help you achieve your business goals with custom design and development solutions.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
              <Link to="/contact">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
