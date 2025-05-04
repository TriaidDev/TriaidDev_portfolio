
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = true, size = 'md' }) => {
  const sizesMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const logoSize = sizesMap[size];
  
  return (
    <div className={`flex items-center ${className}`}>
      <div className={`relative ${logoSize} flex-shrink-0`}>
        <img 
          src="/lovable-uploads/16c3efd0-6376-4ae9-b155-691abc9d66b0.png" 
          alt="TRIAIDDEV Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      {showText && (
        <span className="ml-3 text-triaid-light font-display font-bold text-xl">
          TRIAIDDEV
        </span>
      )}
    </div>
  );
};

export default Logo;
