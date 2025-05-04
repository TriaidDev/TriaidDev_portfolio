
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { smoothScrollTo } from '@/utils/animations';
import Logo from '../Logo';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';
import MobileMenuButton from './MobileMenuButton';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { logout } = useAuth();
  
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
        
        <MobileMenuButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
        
        <DesktopNav 
          navItems={navItems}
          isHomePage={isHomePage}
          handleNavClick={handleNavClick}
          handleLogout={handleLogout}
        />
      </div>
      
      <MobileMenu 
        menuOpen={menuOpen}
        navItems={navItems}
        isHomePage={isHomePage}
        handleNavClick={handleNavClick}
        handleLogout={handleLogout}
        setMenuOpen={setMenuOpen}
      />
    </header>
  );
};

export default Navbar;
