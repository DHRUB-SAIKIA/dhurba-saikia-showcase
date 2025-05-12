
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react";
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
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary-600 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary-600 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary-600 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary-600 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
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
