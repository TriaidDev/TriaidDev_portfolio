
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';
import { Layers } from 'lucide-react';

const FrontendPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-triaid-dark text-triaid-light overflow-x-hidden">
      <Navbar />
      <div className="pt-24 pb-16">
        <ServiceDetail 
          title="Frontend Development"
          description="Intuitive user interfaces with cutting-edge frameworks and libraries that provide exceptional user experiences."
          icon={<Layers size={40} />}
          features={[
            "Responsive design for all screen sizes",
            "Interactive UI components",
            "State management solutions",
            "Modern frameworks (React, Angular, Vue)",
            "CSS preprocessing and modern styling",
            "Progressive web app capabilities",
            "Cross-browser compatibility"
          ]}
          benefits={[
            "Intuitive and engaging user experiences",
            "Faster page load times and performance",
            "Consistent branding and design language",
            "Increased user retention and conversion",
            "Accessible interfaces for all users",
            "Future-proof code architecture",
            "Seamless integration with backend systems"
          ]}
          process={[
            {
              step: "Design Review",
              description: "Working with design files to understand the visual requirements and interactions."
            },
            {
              step: "Component Architecture",
              description: "Planning reusable components and layout structures for efficiency."
            },
            {
              step: "Development",
              description: "Building interactive UI components using modern frameworks and libraries."
            },
            {
              step: "State Management",
              description: "Implementing efficient data flow and state management solutions."
            },
            {
              step: "Responsive Implementation",
              description: "Ensuring the interface works flawlessly across all device sizes."
            },
            {
              step: "Testing and Optimization",
              description: "Performance testing, cross-browser testing, and accessibility audits."
            },
            {
              step: "Integration",
              description: "Connecting the frontend with backend services and APIs."
            }
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default FrontendPage;
