import React from 'react';
import Logo from './Logo';
import { Linkedin, Facebook, Instagram, ChevronRight, Send, Mail, Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();
  
  const services = [
    "Web Development",
    "Web App Development",
    "MEAN Stack",
    "MERN Stack",
    "Frontend Development",
    "Backend Development"
  ];
  
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];
  
  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/triaiddev-1b82b635a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: <Facebook size={18} />, href: "https://www.facebook.com/share/1ZW3PovEWq/", label: "Facebook" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/triaiddev?igsh=amxmczlvZDkxNW5i", label: "Instagram" }
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, info: "triaiddev@gmail.com" },
    { icon: <Phone size={16} />, info: "+919049811991 / +919322172360" }
  ];

  return (
    <footer className="bg-triaid-gray/10 pt-16 pb-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-triaid-green/30 to-transparent"></div>
      
      <div className="container px-6">
        {/* Contact info bar - visible only on larger screens */}
        {!isMobile && (
          <div className="mb-12 p-4 bg-triaid-gray/20 rounded-lg flex flex-wrap justify-between items-center">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 text-triaid-light/70">
                <div className="text-triaid-green">{item.icon}</div>
                <span>{item.info}</span>
              </div>
            ))}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Logo className="mb-6" />
            <p className="text-triaid-light/70 mb-6">
              We specialize in creating innovative digital solutions that help businesses grow and succeed in the modern web landscape.
            </p>
            
            {/* Contact info - visible only on mobile */}
            {isMobile && (
              <div className="mb-6 space-y-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-triaid-light/70">
                    <div className="text-triaid-green">{item.icon}</div>
                    <span>{item.info}</span>
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-triaid-gray/30 flex items-center justify-center text-triaid-light/80 hover:bg-triaid-green hover:text-triaid-dark transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-triaid-green"></span>
            </h3>
            
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="group">
                  <a href="#services" className="text-triaid-light/70 group-hover:text-triaid-green transition-colors flex items-center">
                    <ChevronRight size={16} className="mr-2 text-triaid-green transform group-hover:translate-x-1 transition-transform" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-triaid-green"></span>
            </h3>
            
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index} className="group">
                  <a href={link.href} className="text-triaid-light/70 group-hover:text-triaid-green transition-colors flex items-center">
                    <ChevronRight size={16} className="mr-2 text-triaid-green transform group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Newsletter
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-triaid-green"></span>
            </h3>
            
            <p className="text-triaid-light/70 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-triaid-dark border border-triaid-gray/40 rounded-md focus:outline-none focus:ring-2 focus:ring-triaid-green/50 text-triaid-light pr-12"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-9 h-9 bg-triaid-green rounded-md flex items-center justify-center text-triaid-dark hover:bg-triaid-green-dark transition-colors"
                aria-label="Subscribe"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-6 mt-8 border-t border-triaid-gray/20">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-triaid-light/60 text-sm">
              &copy; {currentYear} TRIAIDDEV. All Rights Reserved.
            </p>
            
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-triaid-light/60 hover:text-triaid-green text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-triaid-light/60 hover:text-triaid-green text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-triaid-light/60 hover:text-triaid-green text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
