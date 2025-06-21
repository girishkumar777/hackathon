
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listener for mouse movement
    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]');
    
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-all duration-200 ease-out ${
        isClicking ? 'w-6 h-6' : isHovering ? 'w-12 h-12' : 'w-8 h-8'
      }`}
      style={{
        left: position.x - (isClicking ? 12 : isHovering ? 24 : 16),
        top: position.y - (isClicking ? 12 : isHovering ? 24 : 16),
        background: isClicking 
          ? 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 0.8) 50%, rgba(0, 212, 255, 0.4) 100%)'
          : isHovering 
          ? 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.2) 100%)'
          : 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
        borderRadius: '50%',
        border: `2px solid ${isClicking ? 'rgba(0, 212, 255, 1)' : 'rgba(255, 255, 255, 0.8)'}`,
        boxShadow: isClicking
          ? '0 0 30px rgba(0, 212, 255, 0.8), inset 0 0 15px rgba(255, 255, 255, 0.5)'
          : isHovering 
          ? '0 0 20px rgba(255, 255, 255, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.3)'
          : '0 0 10px rgba(255, 255, 255, 0.3)',
        transform: isClicking ? 'scale(0.8)' : 'scale(1)',
      }}
    />
  );
};

export default CustomCursor;
