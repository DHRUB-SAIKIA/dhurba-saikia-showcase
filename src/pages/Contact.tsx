import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Github, Instagram, Linkedin, X } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Contact = () => {
  const faqs = [
    {
      question: "What is your typical project process?",
      answer: "My process typically involves an initial consultation, research and planning, design and development phases, testing, and launch. Throughout the project, I maintain open communication and regular updates to ensure your vision is brought to life exactly as you envisioned."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. During our initial consultation, I'll provide a more specific timeline based on your project requirements."
    },
    {
      question: "Do you offer maintenance services after project completion?",
      answer: "Yes, I offer ongoing maintenance and support services to ensure your digital products continue to function optimally. This includes regular updates, bug fixes, security patches, and minor content updates as needed."
    },
    {
      question: "What information do you need to provide a quote?",
      answer: "To provide an accurate quote, I typically need details about your project goals, target audience, desired features and functionality, timeline, and any specific design preferences. The more information you can provide, the more precise the estimate will be."
    },
    {
      question: "Do you work with clients remotely?",
      answer: "Yes, I work with clients around the world and have established effective remote collaboration processes. We can communicate via email, video calls, and project management tools to ensure smooth communication regardless of location."
    }
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="heading-xl mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have a project in mind or want to learn more about my services? Let's connect and discuss how we can work together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="heading-md mb-6">Send Me a Message</h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="heading-md mb-6">Contact Information</h2>
                <ul className="space-y-6">
                  <li className="flex">
                    <Mail className="h-6 w-6 mr-4 text-primary-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:dhrubasaikia937@gmail.com" className="text-muted-foreground hover:text-primary-600 transition-colors">
                        dhrubasaikia937@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex">
                    <Phone className="h-6 w-6 mr-4 text-primary-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <a href="tel:+917002628759" className="text-muted-foreground hover:text-primary-600 transition-colors">
                        +91 7002628759
                      </a>
                    </div>
                  </li>
                  <li className="flex">
                    <MapPin className="h-6 w-6 mr-4 text-primary-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">
                        Tezpur, Assam, India
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Clock className="h-6 w-6 mr-4 text-primary-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Working Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9am - 5pm<br />
                        Weekend: By appointment
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
                <div className="flex space-x-4">
                  <a 
                    href="https://x.com/DSaikia396" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary-600 hover:text-white transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <X size={18} />
                  </a>
                  <a 
                    href="https://www.instagram.com/dhruba_saikia___?igsh=OXdndHR4bjllaDZ0&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary-600 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/dhruba-saikia-0b7b2a2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary-600 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="https://github.com/DHRUB-SAIKIA" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary-600 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Find answers to common questions about my services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
