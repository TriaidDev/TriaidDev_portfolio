import React from 'react';
import Navbar from '@/components/navbar';
import Contact from '@/components/Contact';
import ContactHero from '@/components/ContactHero';
import Footer from '@/components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-triaid-dark text-triaid-light overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        <ContactHero />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
