
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';
import { Database } from 'lucide-react';

const MeanStackPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-triaid-dark text-triaid-light overflow-x-hidden">
      <Navbar />
      <div className="pt-24 pb-16">
        <ServiceDetail 
          title="MEAN Stack Development"
          description="End-to-end JavaScript solutions using MongoDB, Express.js, Angular, and Node.js for seamless application development."
          icon={<Database size={40} />}
          features={[
            "Single language (JavaScript) throughout the stack",
            "NoSQL database with MongoDB",
            "Server-side rendering with Express.js",
            "Dynamic front-end with Angular",
            "Real-time capabilities with Node.js",
            "JSON data format across all layers",
            "Scalable architecture"
          ]}
          benefits={[
            "Faster development cycles",
            "Efficient data handling and transfer",
            "Better developer productivity",
            "Simplified deployment processes",
            "Improved application performance",
            "Cost-effective solution",
            "Easier maintenance and updates"
          ]}
          process={[
            {
              step: "Project Scope Definition",
              description: "We collaborate to define project requirements and determine the best approach using MEAN stack."
            },
            {
              step: "Database Schema Design",
              description: "Creating an optimized MongoDB schema based on your data requirements."
            },
            {
              step: "Backend API Development",
              description: "Building robust APIs with Node.js and Express.js to handle business logic."
            },
            {
              step: "Frontend Development",
              description: "Crafting interactive user interfaces using Angular framework."
            },
            {
              step: "Integration and Testing",
              description: "Connecting all components and ensuring they work seamlessly together."
            },
            {
              step: "Optimization",
              description: "Fine-tuning performance across the entire stack."
            },
            {
              step: "Deployment and Monitoring",
              description: "Launching your application and setting up monitoring tools."
            }
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default MeanStackPage;
