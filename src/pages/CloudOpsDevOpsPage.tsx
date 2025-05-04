
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';
import { Cloud, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudOpsDevOpsPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-triaid-dark text-triaid-light overflow-x-hidden">
      <Navbar />
      <div className="pt-24 pb-16">
        <ServiceDetail 
          title="CloudOps/DevOps"
          description="Streamlined infrastructure management, CI/CD pipelines, and cloud-native solutions for optimal application deployment."
          icon={<Cloud size={40} />}
          features={[
            "Infrastructure as Code (IaC)",
            "CI/CD pipeline implementation",
            "Container orchestration with Kubernetes",
            "Cloud cost optimization",
            "Automated scaling and load balancing",
            "Monitoring and logging solutions",
            "Disaster recovery planning"
          ]}
          benefits={[
            "Reduced time-to-market for applications",
            "Lower operational costs through automation",
            "Improved system reliability and uptime",
            "Enhanced security and compliance",
            "Scalable infrastructure that grows with your business",
            "Consistent deployment processes",
            "Faster recovery from failures"
          ]}
          process={[
            {
              step: "Infrastructure Assessment",
              description: "Evaluating your current infrastructure and identifying optimization opportunities."
            },
            {
              step: "DevOps Strategy",
              description: "Developing a tailored DevOps roadmap aligned with your business objectives."
            },
            {
              step: "Tool Selection",
              description: "Selecting the right combination of tools and platforms for your needs."
            },
            {
              step: "CI/CD Implementation",
              description: "Setting up automated pipelines for continuous integration and deployment."
            },
            {
              step: "Infrastructure Automation",
              description: "Implementing Infrastructure as Code for consistent provisioning."
            },
            {
              step: "Monitoring Setup",
              description: "Establishing comprehensive monitoring and alerting systems."
            },
            {
              step: "Knowledge Transfer",
              description: "Training your team on best practices and operational procedures."
            }
          ]}
        />
        
        {/* Case Study Section */}
        <div className="container mx-auto px-6 mt-16">
          <div className="bg-triaid-gray/30 backdrop-blur-sm p-8 rounded-lg border border-triaid-gray/50">
            <h2 className="text-3xl font-bold mb-6 text-center">Case Study: FinTech Cloud Migration</h2>
            
            <div className="mb-6 p-6 bg-triaid-dark/50 rounded-lg border border-triaid-green/20">
              <h3 className="text-xl font-bold mb-3">Challenge</h3>
              <p className="text-triaid-light/70 mb-4">
                A financial services company needed to migrate their legacy infrastructure to a cloud-native 
                solution to improve scalability and reduce operational costs.
              </p>
              
              <h3 className="text-xl font-bold mb-3 mt-6">Our Solution</h3>
              <ul className="space-y-3">
                {[
                  "Implemented AWS infrastructure using Terraform for infrastructure as code",
                  "Containerized applications using Docker and orchestrated with Kubernetes",
                  "Set up CI/CD pipelines with GitHub Actions for automated testing and deployment",
                  "Implemented comprehensive monitoring with Prometheus and Grafana",
                  "Established auto-scaling policies based on traffic patterns"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-triaid-green shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-bold mb-3 mt-6">Results</h3>
              <p className="text-triaid-light/70 mb-4">
                The client achieved a 40% reduction in infrastructure costs, 60% faster deployment cycles,
                and improved system reliability with 99.99% uptime.
              </p>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/contact" className="btn-primary">
                Discuss Your Cloud Needs
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CloudOpsDevOpsPage;
