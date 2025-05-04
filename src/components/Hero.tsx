
import React, { useEffect, useRef } from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  const triangleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!triangleRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as a percentage of window size
      const moveX = (clientX / innerWidth - 0.5) * 20;
      const moveY = (clientY / innerHeight - 0.5) * 20;
      
      // Apply transform with subtle movement
      triangleRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-triaid-green/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-triaid-green/10 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMzMzMzIyIiBvcGFjaXR5PSIwLjIiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      
      <div className="container relative z-10 px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <div className="inline-block mb-3 px-4 py-1 bg-triaid-green/10 border border-triaid-green/20 rounded-full">
            <span className="text-triaid-green font-medium">Web Development Excellence</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Transforming <span className="text-triaid-green">Ideas</span> Into Digital <span className="text-triaid-green">Reality</span>
          </h1>
          
          <p className="text-lg text-triaid-light/80 mb-8 max-w-xl">
            We create cutting-edge web applications and digital experiences that drive business growth and user engagement.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">View Our Work</button>
            <button className="px-6 py-3 border border-triaid-green/50 text-triaid-green rounded-md hover:bg-triaid-green/10 transition-all">
              Contact Us
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((num) => (
                <div key={num} className="w-10 h-10 rounded-full bg-triaid-gray border-2 border-triaid-dark relative flex items-center justify-center">
                  <span className="text-xs text-triaid-light">{num}</span>
                </div>
              ))}
            </div>
            <div className="text-sm text-triaid-light/70">
              <span className="block text-triaid-light font-medium">50+ Projects Delivered</span>
              Trusted by leading companies
            </div>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end relative">
          <div ref={triangleRef} className="relative transition-transform duration-200 ease-out">
            <div className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center">
              <div className="absolute inset-0 triangle-clip bg-triaid-gray animate-pulse-green"></div>
              <div className="absolute inset-2 triangle-clip bg-triaid-dark flex items-center justify-center">
                <Logo size="lg" showText={false} />
              </div>
              <div className="absolute -z-10 inset-0 triangle-clip bg-triaid-green/30 blur-xl animate-pulse opacity-60"></div>
            </div>
            
            {/* Floating tech tags */}
            {['React', 'Node.js', 'MongoDB', 'MERN', 'MEAN'].map((tech, index) => (
              <div 
                key={tech}
                className="absolute glass px-3 py-1 rounded-full text-xs font-medium text-triaid-green animate-float"
                style={{ 
                  animationDelay: `${index * 0.5}s`,
                  left: `${(index * 60) % 250}px`, 
                  top: `${((index * 50) + 70) % 300}px`,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-triaid-green/80 text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-triaid-green/30 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-triaid-green rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
