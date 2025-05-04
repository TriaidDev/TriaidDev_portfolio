
import React from 'react';

interface MobileMenuButtonProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <button
      className="lg:hidden flex items-center"
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      <div className="w-6 flex flex-col items-end gap-1.5">
        <span className={`block h-0.5 bg-triaid-light transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 translate-y-2' : 'w-6'}`}></span>
        <span className={`block h-0.5 bg-triaid-light transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-4'}`}></span>
        <span className={`block h-0.5 bg-triaid-light transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 -translate-y-2' : 'w-5'}`}></span>
      </div>
    </button>
  );
};

export default MobileMenuButton;
