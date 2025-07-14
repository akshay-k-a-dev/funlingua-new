import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { NavLinkProps } from '../types';
import logoImage from '../assets/logo.jpg';

const navLinks: NavLinkProps[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#approach', label: 'Our Approach' },
  { href: '#activities', label: 'Activities' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3 md:py-2'
          : 'bg-white/95 backdrop-blur-sm py-4 md:py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 md:gap-2 z-50 relative">
            <img 
              src={logoImage} 
              alt="FunLingua Logo" 
              className="h-10 md:h-8 w-auto object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-charcoal-gray hover:text-primary-orange font-medium transition-colors duration-200 text-sm py-2 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-primary-orange text-white px-5 py-2 rounded-full font-semibold hover:bg-primary-orange/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 shadow-md text-sm min-h-[36px]">
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal-gray p-3 z-50 relative min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsMenuOpen(false)} />
        )}

        {/* Mobile Menu Panel */}
        <div className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="pt-20 px-6 pb-6 h-full overflow-y-auto">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-charcoal-gray hover:text-primary-orange font-medium transition-colors duration-200 py-3 text-lg border-b border-gray-100 min-h-[44px] flex items-center"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              ))}
              <button 
                className="bg-primary-orange text-white px-6 py-4 rounded-full font-semibold hover:bg-primary-orange/90 transition-all duration-200 shadow-md mt-6 text-lg min-h-[44px]"
                onClick={handleLinkClick}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;