
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';
import { Globe } from 'lucide-react';

const WebDevelopmentPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-triaid-dark text-triaid-light overflow-x-hidden">
      <Navbar />
      <div className="pt-24 pb-16">
        <ServiceDetail 
          title="Web Development"
          description="Custom websites with responsive design, optimized for performance and SEO to enhance your digital presence."
          icon={<Globe size={40} />}
          features={[
            "Responsive design that works on all devices",
            "Search engine optimization (SEO)",
            "Custom UI/UX design",
            "Content management systems (CMS)",
            "E-commerce functionality",
            "Performance optimization",
            "Web accessibility compliance"
          ]}
          benefits={[
            "Increased online visibility and traffic",
            "Better user engagement and conversion rates",
            "Professional brand image",
            "Easy content management",
            "Competitive advantage in your industry",
            "Improved customer experience"
          ]}
          process={[
            {
              step: "Discovery and Planning",
              description: "We assess your business needs, target audience, and goals to create a strategic plan for your website."
            },
            {
              step: "Design and Wireframing",
              description: "Our designers create mockups and wireframes that align with your brand identity and user experience requirements."
            },
            {
              step: "Development",
              description: "Our developers bring the designs to life with clean, efficient code that follows best practices."
            },
            {
              step: "Testing and Quality Assurance",
              description: "Rigorous testing across devices and browsers to ensure your website works flawlessly."
            },
            {
              step: "Deployment and Launch",
              description: "We handle the technical aspects of launching your website on your chosen hosting platform."
            },
            {
              step: "Support and Maintenance",
              description: "Ongoing support to keep your website updated, secure, and performing optimally."
            }
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;
