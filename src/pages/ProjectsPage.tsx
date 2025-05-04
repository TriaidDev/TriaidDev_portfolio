
import React from 'react';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import ProjectsHero from '@/components/ProjectsHero';
import Footer from '@/components/Footer';

const ProjectsPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-triaid-dark text-triaid-light overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        <ProjectsHero />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
