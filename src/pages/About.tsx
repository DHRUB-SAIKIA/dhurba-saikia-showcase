
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const About = () => {
  const skills = [
    "UI/UX Design",
    "Web Development",
    "Mobile Development",
    "Graphic Design",
    "Brand Identity",
    "Frontend Development",
    "Backend Development",
    "Responsive Design",
    "Motion Design",
    "Design Systems",
    "Prototyping",
    "User Research"
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="heading-xl mb-6">About Me</h1>
              <p className="text-xl text-muted-foreground mb-8">
                I'm a multidisciplinary designer and developer with over 8 years of experience creating digital experiences that connect with people.
              </p>
              <p className="text-muted-foreground mb-6">
                I specialize in creating user-centered designs and developing them into high-performance digital products. My approach combines aesthetic sensibility with technical expertise to deliver solutions that not only look beautiful but also function flawlessly.
              </p>
              <p className="text-muted-foreground mb-6">
                Having worked with clients ranging from startups to established enterprises, I understand the importance of tailoring solutions to specific business needs and user expectations.
              </p>
              <div className="flex gap-4 mt-8">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link to="/contact">Work with Me</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                  <a href="/files/dhrubs-saikia-resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop" 
                  alt="Dhruba Saikia - About Me" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-[-20px] right-[-20px] w-64 h-64 bg-accent-200 rounded-full opacity-70 blur-3xl -z-10"></div>
              <div className="absolute bottom-[-30px] left-[-30px] w-72 h-72 bg-primary-200 rounded-full opacity-70 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">My Skills</h2>
            <p className="text-muted-foreground">
              I've honed a diverse set of skills throughout my career spanning design and development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="flex items-center p-4 bg-card rounded-lg border border-border"
              >
                <CheckCircle className="h-5 w-5 mr-3 text-primary-600" />
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Journey Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">My Journey</h2>
            <p className="text-muted-foreground">
              The path that led me to where I am today as a designer and developer.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="relative pl-12 pb-12 border-l-2 border-muted">
                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary-600"></div>
                <div>
                  <p className="text-sm font-medium text-primary-600 mb-1">2022 - Present</p>
                  <h3 className="text-xl font-semibold mb-2">Senior UX/UI Designer & Developer</h3>
                  <p className="text-muted-foreground mb-2">Leading design and development for enterprise clients</p>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Led design and development for 10+ enterprise web applications</li>
                    <li>Implemented design systems that reduced development time by 40%</li>
                    <li>Mentored junior designers and developers</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative pl-12 pb-12 border-l-2 border-muted">
                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-secondary-600"></div>
                <div>
                  <p className="text-sm font-medium text-secondary-600 mb-1">2019 - 2022</p>
                  <h3 className="text-xl font-semibold mb-2">UI/UX Designer at Tech Innovations Inc.</h3>
                  <p className="text-muted-foreground mb-2">Designed user interfaces for web and mobile applications</p>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Created user-centered designs for 15+ applications</li>
                    <li>Collaborated with development teams to ensure design fidelity</li>
                    <li>Conducted user research and usability testing</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative pl-12 pb-12 border-l-2 border-muted">
                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-accent-500"></div>
                <div>
                  <p className="text-sm font-medium text-accent-500 mb-1">2017 - 2019</p>
                  <h3 className="text-xl font-semibold mb-2">Frontend Developer at Digital Solutions</h3>
                  <p className="text-muted-foreground mb-2">Built responsive web applications and websites</p>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Developed frontend for e-commerce and content platforms</li>
                    <li>Optimized websites for performance and SEO</li>
                    <li>Implemented responsive designs across devices</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary-600"></div>
                <div>
                  <p className="text-sm font-medium text-primary-600 mb-1">2015 - 2017</p>
                  <h3 className="text-xl font-semibold mb-2">Graphic Designer at Creative Studio</h3>
                  <p className="text-muted-foreground mb-2">Created visual assets for print and digital media</p>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Designed brand identities, marketing materials, and digital assets</li>
                    <li>Collaborated with marketing teams to create campaign visuals</li>
                    <li>Managed design projects from concept to completion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg mb-6">My Design Philosophy</h2>
              <p className="text-muted-foreground mb-6">
                I believe that great design is about finding the perfect balance between form and function. It's not just about making things look beautiful, but about creating experiences that are intuitive, accessible, and meaningful.
              </p>
              <p className="text-muted-foreground mb-6">
                My approach starts with understanding the core problems that need to be solved and the people who will be using the final product. This user-centered focus ensures that every design decision serves a purpose.
              </p>
              <p className="text-muted-foreground">
                I combine this with technical knowledge to ensure that designs are not only visually appealing but also feasible and optimized for performance.
              </p>
            </div>

            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">User-Centered Design</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    I put users at the center of the design process, focusing on their needs, behaviors, and pain points to create intuitive and engaging experiences.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">Simplicity & Clarity</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    I believe in the power of simplicity. By removing unnecessary elements and focusing on clarity, I create designs that communicate effectively.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">Attention to Detail</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The smallest details can make the biggest difference. I pay careful attention to every aspect of design, from pixel-perfect alignment to subtle animations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">Accessibility First</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    I design with accessibility in mind, ensuring that products are usable by people of all abilities and backgrounds.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-medium">Continuous Iteration</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Design is never truly finished. I believe in continuously testing, learning, and refining designs based on feedback and data.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary-600 text-white rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6">Ready to Collaborate?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life and create exceptional digital experiences that make an impact.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
              <Link to="/contact">
                Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
