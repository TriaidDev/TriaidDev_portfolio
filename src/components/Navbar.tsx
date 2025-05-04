
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { smoothScrollTo } from '@/utils/animations';
import { useAuth } from '@/contexts/AuthContext';
import { LogIn, UserPlus, User, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  
  // Add scroll lock when menu is open on mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const isHomePage = location.pathname === '/';
  
  const handleNavClick = (sectionId: string) => {
    setMenuOpen(false);
    
    if (isHomePage) {
      // On home page, smooth scroll to section
      smoothScrollTo(sectionId);
    }
  };

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'Services', path: '/services', id: 'services' },
    { name: 'Projects', path: '/projects', id: 'projects' },
    { name: 'About', path: '/about', id: 'about' },
    { name: 'Contact', path: '/contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 ${
        scrolled ? 'py-3 bg-triaid-dark/90 backdrop-blur-sm shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="animate-fade-in">
          <Logo size="md" />
        </Link>
        
        {/* Mobile menu button */}
        <button
          className="lg:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span className={`block h-0.5 bg-triaid-light transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`block h-0.5 bg-triaid-light transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`block h-0.5 bg-triaid-light transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 -translate-y-2' : 'w-5'}`}></span>
          </div>
        </button>
        
        {/* Desktop Navigation */}
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
      </div>
      
      {/* Mobile Navigation Overlay */}
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
    </header>
  );
};

export default Navbar;
