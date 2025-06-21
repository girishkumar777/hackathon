
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'programs', 'testimonials', 'features', 'contact'];
      const scrollPos = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offsetTop = elementId === 'home' ? 0 : element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Programs', id: 'programs' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: "What's Special", id: 'features' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-3 left-3 right-3 z-50 transition-all duration-700 rounded-2xl ${
      isScrolled 
        ? 'bg-[#0a0a2e]/95 backdrop-blur-md border border-[#00d4ff]/20 shadow-2xl shadow-[#00d4ff]/10' 
        : 'bg-transparent backdrop-blur-sm border border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Animated Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => smoothScrollTo('home')}>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#4ecdc4] to-[#00d4ff] bg-clip-text text-transparent hover:scale-110 transition-all duration-500 hover:drop-shadow-lg hover:drop-shadow-[#00d4ff]/50">
              Inlighn Tech
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => smoothScrollTo(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-500 group overflow-hidden rounded-lg ${
                    activeSection === item.id
                      ? 'text-[#00d4ff] bg-[#00d4ff]/10'
                      : 'text-slate-300 hover:text-[#00d4ff]'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#4ecdc4] transition-all duration-500 group-hover:w-full"></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/10 to-[#4ecdc4]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"></div>
                </button>
              ))}
              <Link 
                to="/login"
                className="ml-4 px-4 py-2 bg-gradient-to-r from-[#00d4ff] to-[#4ecdc4] text-white font-semibold rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-[#00d4ff]/25 transition-all duration-300"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-[#00d4ff] transition-all duration-300 hover:scale-110"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0a0a2e]/95 backdrop-blur-md border-t border-[#00d4ff]/20 rounded-b-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => smoothScrollTo(item.id)}
              className={`w-full text-left px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg ${
                activeSection === item.id
                  ? 'text-[#00d4ff] bg-[#00d4ff]/10'
                  : 'text-slate-300 hover:text-[#00d4ff] hover:bg-[#00d4ff]/5'
              }`}
            >
              {item.name}
            </button>
          ))}
          <Link 
            to="/login"
            className="block w-full mt-2 px-3 py-2 bg-gradient-to-r from-[#00d4ff] to-[#4ecdc4] text-white font-semibold rounded-lg text-center"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
