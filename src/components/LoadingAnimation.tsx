
import React, { useState, useEffect } from 'react';

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Animation sequence timing
    const phases = [
      { delay: 0, phase: 0 },      // Start particles
      { delay: 500, phase: 1 },    // Logo assembly
      { delay: 1200, phase: 2 },   // Background shapes
      { delay: 2000, phase: 3 },   // Progress bar
      { delay: 2800, phase: 4 },   // Fade out
    ];

    phases.forEach(({ delay, phase }) => {
      setTimeout(() => setAnimationPhase(phase), delay);
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-[#0a0a2e] to-slate-800 z-50 flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-[#00d4ff] rounded-full transition-all duration-1000 ${
              animationPhase >= 0 ? 'animate-float opacity-70' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              transform: animationPhase >= 1 ? `translate(${(50 - Math.random() * 100) * 0.3}px, ${(50 - Math.random() * 100) * 0.3}px)` : 'none'
            }}
          />
        ))}
      </div>

      {/* Morphing Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#00d4ff]/20 to-[#4ecdc4]/20 rounded-full blur-3xl transition-all duration-2000 ${
          animationPhase >= 2 ? 'animate-pulse scale-150 rotate-45' : 'scale-0'
        }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-[#ff6b6b]/20 to-[#00d4ff]/20 transition-all duration-2000 ${
          animationPhase >= 2 ? 'animate-spin scale-125' : 'scale-0 rotate-180'
        }`} style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
        <div className={`absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-[#4ecdc4]/30 to-[#ff6b6b]/30 transition-all duration-2000 ${
          animationPhase >= 2 ? 'animate-bounce scale-110 -translate-x-16 -translate-y-16' : 'scale-0'
        }`} style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }} />
      </div>

      {/* Logo Assembly Animation */}
      <div className="relative text-center">
        <div className="mb-8">
          <h1 className={`text-5xl font-bold transition-all duration-1500 ${
            animationPhase >= 1 
              ? 'bg-gradient-to-r from-[#00d4ff] via-[#4ecdc4] to-[#00d4ff] bg-clip-text text-transparent scale-100 opacity-100' 
              : 'text-transparent scale-50 opacity-0'
          }`}>
            <span className={`inline-block transition-all duration-300 ${
              animationPhase >= 1 ? 'translate-x-0' : '-translate-x-20'
            }`} style={{ animationDelay: '0ms' }}>I</span>
            <span className={`inline-block transition-all duration-300 ${
              animationPhase >= 1 ? 'translate-x-0' : '-translate-x-16'
            }`} style={{ animationDelay: '100ms' }}>n</span>
            <span className={`inline-block transition-all duration-300 ${
              animationPhase >= 1 ? 'translate-x-0' : '-translate-x-12'
            }`} style={{ animationDelay: '200ms' }}>l</span>
            <span className={`inline-block transition-all duration-300 ${
              animationPhase >= 1 ? 'translate-x-0' : '-translate-x-8'
            }`} style={{ animationDelay: '300ms' }}>i</span>
            <span className={`inline-block transition-all duration-300 ${
              animationPhase >= 1 ? 'translate-x-0' : '-translate-x-4'
            }`} style={{ animationDelay: '400ms' }}>g</span>
            <span className={`inline-block transition-all duration-300 ${
              animationPhase >= 1 ? 'translate-x-0' : 'translate-x-0'
            }`} style={{ animationDelay: '500ms' }}>h</span>
            <span className={`inline-block transition-all duration-300 ${
              animationPhase >= 1 ? 'translate-x-0' : 'translate-x-4'
            }`} style={{ animationDelay: '600ms' }}>n</span>
            <span className="mx-3" />
            <span className={`inline-block transition-all duration-300 ${
              animationPhase >= 1 ? 'translate-x-0' : 'translate-x-8'
            }`} style={{ animationDelay: '700ms' }}>T</span>
            <span className={`inline-block transition-all duration-300 ${
              animationPhase >= 1 ? 'translate-x-0' : 'translate-x-12'
            }`} style={{ animationDelay: '800ms' }}>e</span>
            <span className={`inline-block transition-all duration-300 ${
              animationPhase >= 1 ? 'translate-x-0' : 'translate-x-16'
            }`} style={{ animationDelay: '900ms' }}>c</span>
            <span className={`inline-block transition-all duration-300 ${
              animationPhase >= 1 ? 'translate-x-0' : 'translate-x-20'
            }`} style={{ animationDelay: '1000ms' }}>h</span>
          </h1>
        </div>

        {/* Particle Progress Bar */}
        <div className={`relative w-64 h-2 mx-auto mb-6 bg-slate-700/50 rounded-full overflow-hidden transition-all duration-500 ${
          animationPhase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <div className={`absolute inset-0 bg-gradient-to-r from-[#00d4ff] via-[#4ecdc4] to-[#ff6b6b] transition-all duration-1000 ${
            animationPhase >= 3 ? 'w-full' : 'w-0'
          }`} style={{
            background: 'linear-gradient(90deg, #00d4ff 0%, #4ecdc4 50%, #ff6b6b 100%)',
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)'
          }}>
            {/* Flowing particles effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          </div>
          
          {/* Floating particles above progress bar */}
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-[#00d4ff] rounded-full transition-all duration-1000 ${
                animationPhase >= 3 ? 'animate-bounce opacity-70' : 'opacity-0'
              }`}
              style={{
                left: `${i * 10}%`,
                top: '-8px',
                animationDelay: `${i * 100}ms`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>

        {/* Status Text */}
        <div className={`text-slate-300 text-lg font-light transition-all duration-500 ${
          animationPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {animationPhase === 0 && "Initializing Digital Genesis..."}
          {animationPhase === 1 && "Assembling Core Systems..."}
          {animationPhase === 2 && "Loading Interactive Elements..."}
          {animationPhase === 3 && "Finalizing Experience..."}
          {animationPhase >= 4 && "Welcome to the Future!"}
        </div>

        {/* Glowing Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-[#00d4ff] rounded-full transition-all duration-2000 ${
                animationPhase >= 1 ? 'animate-ping opacity-60' : 'opacity-0'
              }`}
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + Math.sin(i) * 20}%`,
                animationDelay: `${i * 200}ms`
              }}
            />
          ))}
        </div>
      </div>

      {/* Final Fade Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0a0a2e] to-slate-800 transition-all duration-1000 ${
        animationPhase >= 4 ? 'opacity-0 pointer-events-none' : 'opacity-0'
      }`} />
    </div>
  );
};

export default LoadingAnimation;
