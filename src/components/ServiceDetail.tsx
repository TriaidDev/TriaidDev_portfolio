
import React from 'react';

interface ServiceDetailProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  process: { step: string; description: string }[];
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ 
  title, 
  description, 
  icon, 
  features, 
  benefits,
  process
}) => {
  return (
    <section className="py-16 md:py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-triaid-green/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-triaid-green/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-6 bg-triaid-green/10 rounded-lg flex items-center justify-center text-triaid-green">
            {icon}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
          <p className="mt-6 max-w-3xl mx-auto text-triaid-light/70 text-xl">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-triaid-gray/30 backdrop-blur-sm p-8 rounded-lg border border-triaid-gray/50">
            <h2 className="text-2xl font-bold mb-6">Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-triaid-green text-xl mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-triaid-gray/30 backdrop-blur-sm p-8 rounded-lg border border-triaid-gray/50">
            <h2 className="text-2xl font-bold mb-6">Benefits</h2>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-triaid-green text-xl mt-0.5">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
          <div className="space-y-6">
            {process.map((step, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-triaid-green/20 border border-triaid-green/40 flex items-center justify-center text-triaid-green font-bold">
                  {index + 1}
                </div>
                <div className="bg-triaid-gray/20 p-6 rounded-lg border border-triaid-gray/40">
                  <h3 className="text-xl font-bold mb-2">{step.step}</h3>
                  <p className="text-triaid-light/70">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="absolute left-4 top-10 bottom-0 w-px bg-triaid-green/30 h-12"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="/contact" className="btn-primary">Get a Quote</a>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
