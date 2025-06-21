
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useScrollAnimations();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;
      
      const shapes = heroRef.current.querySelectorAll('.floating-shape');
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const element = shape as HTMLElement;
        element.style.transform = `translate(${xPercent * speed * 10}px, ${yPercent * speed * 10}px) rotateX(${yPercent * speed * 5}deg) rotateY(${xPercent * speed * 5}deg)`;
      });
    };

    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrolled = window.pageYOffset;
      const parallax = heroRef.current.querySelector('.parallax-bg') as HTMLElement;
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs');
    if (programsSection) {
      const offsetTop = programsSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0a0a2e] to-black"></div>
      
      {/* Parallax Background */}
      <div className="parallax-bg parallax-element absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#00d4ff]/10 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6b6b]/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Enhanced Particle System */}
      <div ref={particlesRef} className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-[#00d4ff] rounded-full animate-float"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: Math.random() * 0.8 + 0.2,
              boxShadow: '0 0 10px currentColor'
            }}
          ></div>
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-shape floating-element absolute top-20 left-20 w-32 h-32 border border-[#00d4ff]/30 rotate-45 animate-spin glow-card" style={{ animationDuration: '20s' }}></div>
        <div className="floating-shape floating-element absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-r from-[#ff6b6b]/20 to-[#00d4ff]/20 rounded-full animate-bounce animate-glow" style={{ animationDuration: '3s' }}></div>
        <div className="floating-shape floating-element absolute bottom-1/4 left-1/3 w-16 h-16 border-2 border-[#4ecdc4]/40 animate-pulse glow-card"></div>
        <div className="floating-shape floating-element absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-[#00d4ff]/10 to-[#4ecdc4]/10 transform rotate-12 animate-spin glow-card" style={{ animationDuration: '15s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-reveal">
          <span className="block bg-gradient-to-r from-[#00d4ff] via-[#4ecdc4] to-[#00d4ff] bg-clip-text text-transparent animate-fade-in">
            Transform Your Future
          </span>
          <span className="block text-slate-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            with Cutting-Edge
          </span>
          <span className="block bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Tech Internships
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed text-reveal" style={{ animationDelay: '0.6s' }}>
          Gain real-world experience in <span className="text-[#00d4ff] font-semibold">Cybersecurity</span>, 
          <span className="text-[#4ecdc4] font-semibold"> Full Stack Development</span>, and 
          <span className="text-[#ff6b6b] font-semibold"> Data Science</span> with industry experts
        </p>

        <div className="flex justify-center items-center stagger-container" style={{ animationDelay: '0.8s' }}>
          <button 
            onClick={scrollToPrograms}
            className="stagger-item group relative px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#4ecdc4] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00d4ff]/25 magnetic morph-button"
          >
            <span className="relative z-10">Explore Programs</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#4ecdc4] to-[#ff6b6b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#00d4ff] animate-bounce magnetic">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={24} className="animate-glow" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
