
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogIn, LogOut, User, UserPlus } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface MobileMenuProps {
  menuOpen: boolean;
  navItems: Array<{ name: string; path: string; id: string }>;
  isHomePage: boolean;
  handleNavClick: (sectionId: string) => void;
  handleLogout: () => void;
  setMenuOpen: (open: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  menuOpen,
  navItems,
  isHomePage,
  handleNavClick,
  handleLogout,
  setMenuOpen
}) => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div 
      className={`fixed inset-0 bg-triaid-dark/95 backdrop-blur-md z-40 lg:hidden flex flex-col justify-center items-center transition-all duration-500 ${
        menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <nav className="flex flex-col items-center space-y-8 py-8">
        {navItems.map((item, index) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={(e) => {
              if (isHomePage && item.path === '/') {
                e.preventDefault();
                handleNavClick(item.id);
              }
              setMenuOpen(false);
            }}
            className="text-2xl font-display text-triaid-light hover:text-triaid-green transition-colors flex items-center group"
            style={{ 
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.5s ease, transform 0.5s ease`,
              transitionDelay: `${index * 100}ms` 
            }}
          >
            <span className="absolute left-0 transform -translate-x-10 opacity-0 group-hover:opacity-100 text-triaid-green transition-all duration-300">•</span>
            {item.name}
            <span className="absolute right-0 transform translate-x-10 opacity-0 group-hover:opacity-100 text-triaid-green transition-all duration-300">•</span>
          </Link>
        ))}
        
        {/* Authentication Links for Mobile */}
        {isAuthenticated ? (
          <>
            <div 
              className="text-xl text-triaid-light flex items-center gap-2"
              style={{ 
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease, transform 0.5s ease`,
                transitionDelay: '500ms'
              }}
            >
              <User />
              <span>{user?.name}</span>
            </div>
            <button 
              onClick={handleLogout}
              className="text-xl text-triaid-light hover:text-triaid-green flex items-center gap-2"
              style={{ 
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease, transform 0.5s ease`,
                transitionDelay: '600ms'
              }}
            >
              <LogOut />
              <span>Logout</span>
            </button>
          </>
        ) : (
          <>
            <Link 
              to="/login"
              className="text-xl text-triaid-light hover:text-triaid-green flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
              style={{ 
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease, transform 0.5s ease`,
                transitionDelay: '500ms'
              }}
            >
              <LogIn />
              <span>Login</span>
            </Link>
            <Link 
              to="/signup"
              className="btn-primary text-xl flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
              style={{ 
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease, transform 0.5s ease`,
                transitionDelay: '600ms'
              }}
            >
              <UserPlus />
              <span>Sign Up</span>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default MobileMenu;
