
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';
import { Code2 } from 'lucide-react';

const WebAppPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-triaid-dark text-triaid-light overflow-x-hidden">
      <Navbar />
      <div className="pt-24 pb-16">
        <ServiceDetail 
          title="Web App Development"
          description="Interactive and dynamic web applications with scalable architecture to meet your business requirements."
          icon={<Code2 size={40} />}
          features={[
            "Interactive user interfaces",
            "Real-time data processing",
            "User authentication and authorization",
            "API integrations",
            "Data visualization",
            "Offline functionality",
            "Cross-platform compatibility"
          ]}
          benefits={[
            "Enhanced user engagement and interaction",
            "Streamlined business processes",
            "Reduced operational costs",
            "Scalability to grow with your business",
            "Data-driven decision making",
            "Competitive advantage through innovation"
          ]}
          process={[
            {
              step: "Requirements Analysis",
              description: "We work with you to understand your business needs, user requirements, and technical specifications."
            },
            {
              step: "Architecture Planning",
              description: "Our architects design a scalable and maintainable structure for your application."
            },
            {
              step: "UI/UX Design",
              description: "Creating intuitive interfaces that provide an excellent user experience."
            },
            {
              step: "Development",
              description: "Building your application using modern frameworks and best practices."
            },
            {
              step: "Testing",
              description: "Comprehensive testing to ensure functionality, performance, and security."
            },
            {
              step: "Deployment",
              description: "Launching your application and setting up CI/CD pipelines."
            },
            {
              step: "Ongoing Support",
              description: "Continuous maintenance, updates, and scaling as your business grows."
            }
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default WebAppPage;
