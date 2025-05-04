
import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, LogOut, User, UserPlus } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface DesktopNavProps {
  navItems: Array<{ name: string; path: string; id: string }>;
  isHomePage: boolean;
  handleNavClick: (sectionId: string) => void;
  handleLogout: () => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({
  navItems,
  isHomePage,
  handleNavClick,
  handleLogout
}) => {
  const { isAuthenticated, user } = useAuth();

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navItems.map((item, index) => (
        <Link
          key={item.name}
          to={item.path}
          onClick={(e) => {
            if (isHomePage && item.path === '/') {
              e.preventDefault();
              handleNavClick(item.id);
            }
          }}
          className="nav-link text-triaid-light hover:text-triaid-green"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {item.name}
        </Link>
      ))}
      
      {/* Authentication Links for Desktop */}
      {isAuthenticated ? (
        <div className="flex items-center gap-2 text-triaid-light">
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>{user?.name}</span>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-1 text-triaid-light hover:text-triaid-green"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Link 
            to="/login" 
            className="nav-link flex items-center gap-1 text-triaid-light hover:text-triaid-green"
          >
            <LogIn size={16} />
            <span>Login</span>
          </Link>
          <Link 
            to="/signup" 
            className="btn-primary flex items-center gap-1"
          >
            <UserPlus size={16} />
            <span>Sign Up</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default DesktopNav;
