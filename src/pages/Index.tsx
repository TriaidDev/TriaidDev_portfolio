
import React, { useEffect } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { revealOnScroll, createBackToTopButton } from '@/utils/animations';

const Index: React.FC = () => {
  // Intersection Observer for revealing animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));
    
    // Initialize reveal on scroll animations
    revealOnScroll();
    
    // Create and handle back to top button
    const cleanupBackToTop = createBackToTopButton();

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      cleanupBackToTop();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-triaid-dark text-triaid-light overflow-x-hidden">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="services" className="reveal-element transition-all duration-700 opacity-0 transform translate-y-10">
        <Services />
      </section>
      <section id="projects" className="reveal-element transition-all duration-700 opacity-0 transform translate-y-10">
        <Projects />
      </section>
      <section id="contact" className="reveal-element transition-all duration-700 opacity-0 transform translate-y-10">
        <Contact />
      </section>
      <div className="reveal-element transition-all duration-700 opacity-0 transform translate-y-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
