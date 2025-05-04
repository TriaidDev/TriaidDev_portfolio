
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';
import { Server } from 'lucide-react';

const BackendPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-triaid-dark text-triaid-light overflow-x-hidden">
      <Navbar />
      <div className="pt-24 pb-16">
        <ServiceDetail 
          title="Backend Development"
          description="Secure, efficient, and scalable server-side applications with RESTful APIs and database integration."
          icon={<Server size={40} />}
          features={[
            "RESTful API development",
            "Database design and optimization",
            "Authentication and authorization",
            "Server-side rendering",
            "Microservices architecture",
            "Caching strategies",
            "Serverless functions"
          ]}
          benefits={[
            "Robust and secure application foundation",
            "Efficient data processing and storage",
            "Scalability for growing user base",
            "Reduced server costs through optimization",
            "Faster API response times",
            "Reliable data integrity and security",
            "Easy integration with third-party services"
          ]}
          process={[
            {
              step: "Requirements Analysis",
              description: "Understanding data flow, security requirements, and system architecture needs."
            },
            {
              step: "Database Design",
              description: "Creating optimized database schemas and relationships."
            },
            {
              step: "API Architecture",
              description: "Designing RESTful or GraphQL API endpoints and documentation."
            },
            {
              step: "Core Development",
              description: "Building server-side logic, middleware, and business rules."
            },
            {
              step: "Authentication System",
              description: "Implementing secure user authentication and authorization systems."
            },
            {
              step: "Testing and Security",
              description: "Comprehensive testing and security hardening of all backend systems."
            },
            {
              step: "Deployment and Scaling",
              description: "Setting up server infrastructure and scaling strategies."
            }
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default BackendPage;
