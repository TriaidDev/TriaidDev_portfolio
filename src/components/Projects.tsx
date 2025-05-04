
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack';
  longDescription?: string;
  features?: string[];
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution with product catalog, shopping cart, and payment integration.",
      longDescription: "A comprehensive e-commerce platform built with modern technology stack. Features include product catalog management, user authentication, shopping cart functionality, wishlist, payment gateway integration, order management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
      category: "fullstack",
      features: [
        "Responsive design for all devices",
        "User authentication and profiles",
        "Product search and filtering",
        "Shopping cart and checkout process",
        "Payment processing with Stripe",
        "Order tracking and history"
      ]
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "Interactive data visualization dashboard for business analytics and performance monitoring.",
      longDescription: "A sophisticated analytics dashboard providing real-time insights into business performance. Features interactive charts, customizable widgets, data filtering, and export capabilities.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["Angular", "D3.js", "Node.js", "MongoDB", "Socket.io"],
      category: "frontend",
      features: [
        "Real-time data updates",
        "Interactive visualization with D3.js",
        "Customizable dashboard layouts",
        "Data export in multiple formats",
        "User permission management"
      ]
    },
    {
      id: 3,
      title: "Content Management System",
      description: "Custom CMS solution for managing digital content with user roles and workflow capabilities.",
      longDescription: "A flexible content management system designed for digital publishing workflows. Supports various content types, user roles, approval workflows, and content scheduling.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      technologies: ["React", "GraphQL", "Node.js", "PostgreSQL", "Apollo"],
      category: "fullstack",
      features: [
        "Rich text editing capabilities",
        "Media library management",
        "Content versioning and history",
        "Role-based access control",
        "Content scheduling and publishing workflows"
      ]
    },
    {
      id: 4,
      title: "API Integration Service",
      description: "Backend service that connects and manages data from multiple third-party APIs.",
      longDescription: "A centralized API management service that connects with multiple third-party services and provides a unified interface for client applications. Features caching, rate limiting, authentication, and transformation capabilities.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      technologies: ["Node.js", "Express", "Redis", "MongoDB", "Docker"],
      category: "backend",
      features: [
        "Unified API gateway",
        "Authentication and authorization",
        "Request caching for performance",
        "Rate limiting and quota management",
        "Detailed logging and monitoring"
      ]
    },
    {
      id: 5,
      title: "Progressive Web App",
      description: "Mobile-first web application with offline capabilities and app-like experience.",
      longDescription: "A Progressive Web App (PWA) delivering a native app-like experience through web technologies. Features offline functionality, push notifications, and responsive design for all device sizes.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["React", "Workbox", "IndexedDB", "PWA"],
      category: "frontend",
      features: [
        "Offline functionality",
        "Push notifications",
        "Background synchronization",
        "Installable on home screen",
        "Responsive design across all devices"
      ]
    },
    {
      id: 6,
      title: "Real-time Chat Application",
      description: "Scalable messaging platform with real-time communication features.",
      longDescription: "A modern real-time chat application supporting one-on-one and group conversations, media sharing, read receipts, and notifications. Built with scalability in mind to support thousands of concurrent users.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      technologies: ["Socket.io", "React", "Node.js", "MongoDB", "Redis"],
      category: "fullstack",
      features: [
        "Real-time messaging",
        "Group chat functionality",
        "Media and file sharing",
        "Read receipts and typing indicators",
        "Push notifications",
        "Message search and history"
      ]
    }
  ];
  
  // Filter projects based on activeFilter and searchQuery
  useEffect(() => {
    let filtered = activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query))
      );
    }
    
    setDisplayedProjects(filtered);
  }, [activeFilter, searchQuery]);
  
  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
    { label: 'Full Stack', value: 'fullstack' }
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-1/2 h-1/3 bg-triaid-green/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-triaid-green/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading mx-auto">Browse All Projects</h2>
          <p className="mt-6 max-w-2xl mx-auto text-triaid-light/70 text-lg">
            Filter through our diverse range of web development projects by category or search for specific technologies.
          </p>
        </div>
        
        {/* Search and filter toolset */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-5 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === filter.value
                      ? 'bg-triaid-green text-triaid-dark font-medium shadow-lg shadow-triaid-green/20'
                      : 'bg-triaid-gray/30 hover:bg-triaid-gray/50 text-triaid-light/80'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            
            {/* Search input */}
            <div className="relative w-full md:w-auto min-w-[250px]">
              <input
                type="text"
                placeholder="Search projects or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-triaid-gray/30 border border-triaid-gray/50 rounded-full text-triaid-light focus:outline-none focus:ring-2 focus:ring-triaid-green/50 focus:border-transparent placeholder-triaid-light/50"
              />
              {searchQuery && (
                <button 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-triaid-light/50 hover:text-triaid-light"
                  onClick={() => setSearchQuery('')}
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Projects grid */}
        {displayedProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-triaid-gray/20 rounded-lg overflow-hidden card-hover border border-triaid-gray/40 group cursor-pointer"
                onClick={() => openProjectModal(project)}
                style={{
                  opacity: 0,
                  animation: 'fade-in 0.5s ease-out forwards',
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-triaid-dark/80 backdrop-blur-sm rounded-full text-xs text-triaid-light border border-triaid-gray/30">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-triaid-green transition-colors">{project.title}</h3>
                  <p className="text-triaid-light/70 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-2 py-1 bg-triaid-green/10 text-triaid-green rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-2 py-1 bg-triaid-gray/30 text-triaid-light/80 rounded">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-triaid-gray/30 mx-auto flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-medium mb-2">No Projects Found</h3>
            <p className="text-triaid-light/70">
              Try adjusting your search or filter criteria
            </p>
            <button 
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-triaid-gray/40 hover:bg-triaid-gray/60 rounded-md text-triaid-light transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
        
        {/* Project Detail Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-3xl bg-triaid-dark border-triaid-gray text-triaid-light overflow-hidden p-0">
            {selectedProject && (
              <>
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-triaid-dark via-triaid-dark/80 to-transparent flex flex-col justify-end">
                    <div className="p-6">
                      <DialogTitle className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {selectedProject.title}
                      </DialogTitle>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedProject.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="text-xs px-2 py-1 bg-triaid-green/10 text-triaid-green rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <DialogClose className="absolute top-4 right-4 w-8 h-8 rounded-full bg-triaid-dark/70 flex items-center justify-center text-triaid-light hover:bg-triaid-dark transition-colors focus:outline-none">
                    <X size={18} />
                  </DialogClose>
                </div>
                
                <div className="p-6 max-h-[60vh] overflow-y-auto">
                  <DialogDescription className="text-triaid-light/90 mb-6">
                    {selectedProject.longDescription || selectedProject.description}
                  </DialogDescription>
                  
                  {selectedProject.features && (
                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-3">Key Features</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-triaid-green mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
