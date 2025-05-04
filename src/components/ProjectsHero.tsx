
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';

interface FeaturedProject {
  id: number;
  title: string;
  description: string;
  image: string;
}

const ProjectsHero: React.FC = () => {
  const featuredProjects: FeaturedProject[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A complete online shopping solution with product catalog, shopping cart, and secure payment gateway integration.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 2,
      title: "Real-time Analytics Dashboard",
      description: "Interactive data visualization with real-time updates for business intelligence and performance monitoring.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      id: 3,
      title: "Progressive Web App",
      description: "Mobile-first web application with offline capabilities and app-like experience for modern users.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    }
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-triaid-green/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 px-6">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 px-4 py-1 bg-triaid-green/10 border border-triaid-green/20 rounded-full">
            <span className="text-triaid-green font-medium">Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Projects</h1>
          <p className="mt-4 max-w-2xl mx-auto text-triaid-light/70 text-lg">
            Explore our showcase of innovative digital solutions designed and developed with passion.
          </p>
        </div>
        
        {/* Featured Project Carousel */}
        <div className="mt-8 mb-16">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {featuredProjects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-4/5 lg:basis-3/4">
                  <div className="h-full p-1">
                    <div className="bg-triaid-gray/30 rounded-xl overflow-hidden border border-triaid-gray/40 h-full flex flex-col md:flex-row animate-fade-in">
                      <div className="relative h-64 md:h-auto md:w-1/2 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-triaid-dark/90 to-transparent md:bg-gradient-to-r flex items-end md:items-center">
                          <div className="p-6 md:hidden">
                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 md:w-1/2 flex flex-col justify-center">
                        <h3 className="hidden md:block text-2xl font-bold text-white mb-4">{project.title}</h3>
                        <p className="text-triaid-light/80 mb-6">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-triaid-gray/50 border-triaid-gray text-triaid-light hover:bg-triaid-gray hover:text-white" />
            <CarouselNext className="hidden md:flex -right-4 bg-triaid-gray/50 border-triaid-gray text-triaid-light hover:bg-triaid-gray hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
