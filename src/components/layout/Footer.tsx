import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Instagram, Linkedin, X } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <Link to="/" className="flex items-center font-poppins font-bold text-xl">
              <span className="text-primary-600">DHRUBA</span>
              <span className="text-accent-500">.SAIKIA</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Multidisciplinary designer and developer creating beautiful, functional digital experiences.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://x.com/DSaikia396" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary-600 transition-colors"
                aria-label="X (Twitter)"
              >
                <X size={20} />
              </a>
              <a 
                href="https://www.instagram.com/dhruba_saikia___?igsh=OXdndHR4bjllaDZ0&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/dhruba-saikia-0b7b2a2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/DHRUB-SAIKIA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary-600 transition-colors">About</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary-600 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary-600 transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary-600 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-muted-foreground hover:text-primary-600 transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary-600 transition-colors">Graphic Design</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary-600 transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary-600 transition-colors">Mobile Development</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary-600 transition-colors">Brand Identity</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary-600" />
                <span className="text-muted-foreground">Tezpur, Assam, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary-600" />
                <a href="tel:+917002628759" className="text-muted-foreground hover:text-primary-600 transition-colors">+91 7002628759</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary-600" />
                <a href="mailto:dhrubasaikia937@gmail.com" className="text-muted-foreground hover:text-primary-600 transition-colors">dhrubasaikia937@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} DHRUBA SAIKIA. All Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary-600 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-muted-foreground hover:text-primary-600 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
