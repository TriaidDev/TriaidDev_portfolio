
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';
import { Braces } from 'lucide-react';

const MernStackPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-triaid-dark text-triaid-light overflow-x-hidden">
      <Navbar />
      <div className="pt-24 pb-16">
        <ServiceDetail 
          title="MERN Stack Development"
          description="Modern web applications built with MongoDB, Express.js, React, and Node.js offering robust and scalable solutions."
          icon={<Braces size={40} />}
          features={[
            "Component-based UI with React",
            "NoSQL database with MongoDB",
            "RESTful API development with Express.js",
            "Server-side logic with Node.js",
            "JWT authentication",
            "State management with Redux",
            "Single-page application (SPA) architecture"
          ]}
          benefits={[
            "Fast rendering and improved user experience",
            "Efficient data handling with JSON format",
            "Code reusability with React components",
            "Scalable and high-performance applications",
            "Cost-effective development process",
            "Extensive ecosystem with npm packages",
            "Real-time application capabilities"
          ]}
          process={[
            {
              step: "Requirements Gathering",
              description: "Understanding your business requirements and translating them into technical specifications."
            },
            {
              step: "Architecture Design",
              description: "Designing a scalable application structure using the MERN stack."
            },
            {
              step: "Database Modeling",
              description: "Creating MongoDB schemas that meet your data requirements."
            },
            {
              step: "Backend Development",
              description: "Building APIs and server-side logic with Node.js and Express."
            },
            {
              step: "Frontend Development",
              description: "Creating interactive user interfaces with React and managing state."
            },
            {
              step: "Testing and QA",
              description: "Comprehensive testing across the entire stack to ensure quality."
            },
            {
              step: "Deployment and DevOps",
              description: "Setting up CI/CD pipelines and deploying your application."
            }
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default MernStackPage;
