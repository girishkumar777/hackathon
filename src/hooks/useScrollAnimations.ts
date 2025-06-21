import { useEffect } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Text reveal animations
          if (element.classList.contains('text-reveal')) {
            element.classList.add('animate');
          }
          
          // Stagger animations
          if (element.classList.contains('stagger-container')) {
            const items = element.querySelectorAll('.stagger-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate');
              }, index * 100);
            });
          }
          
          // Scale up animations
          if (element.classList.contains('animate-on-scroll')) {
            element.classList.add('animate-scale-up');
          }
          
          // Slide animations
          if (element.classList.contains('slide-left')) {
            element.classList.add('animate-slide-in-left');
          }
          
          if (element.classList.contains('slide-right')) {
            element.classList.add('animate-slide-in-right');
          }
        }
      });
    }, observerOptions);

    // Observe all animation elements
    const animationElements = document.querySelectorAll(
      '.text-reveal, .stagger-container, .animate-on-scroll, .slide-left, .slide-right'
    );
    
    animationElements.forEach((el) => observer.observe(el));

    // Parallax scroll effects
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element) => {
        const rate = scrolled * -0.5;
        (element as HTMLElement).style.transform = `translateY(${rate}px)`;
      });

      // Floating elements
      const floatingElements = document.querySelectorAll('.floating-element');
      floatingElements.forEach((element, index) => {
        const rate = Math.sin(scrolled * 0.01 + index) * 10;
        (element as HTMLElement).style.transform = `translateY(${rate}px)`;
      });
    };

    // Enhanced Magnetic cursor effect with trail
    let trailElements: HTMLElement[] = [];
    
    const createTrail = (x: number, y: number) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = `${x - 4}px`;
      trail.style.top = `${y - 4}px`;
      document.body.appendChild(trail);
      
      trailElements.push(trail);
      
      // Remove trail element after animation
      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
        trailElements = trailElements.filter(el => el !== trail);
      }, 500);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector('body::before') as HTMLElement;
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      }

      // Create trail effect
      if (Math.random() > 0.7) { // Reduce frequency for performance
        createTrail(e.clientX, e.clientY);
      }

      // Enhanced magnetic elements
      const magneticElements = document.querySelectorAll('.magnetic');
      magneticElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 100) {
          const moveX = deltaX * 0.3;
          const moveY = deltaY * 0.3;
          (element as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
          document.body.classList.add('cursor-hover');
        } else {
          (element as HTMLElement).style.transform = 'translate(0px, 0px) scale(1)';
          document.body.classList.remove('cursor-hover');
        }
      });

      // Add hover effect for interactive elements
      const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]');
      let isHovering = false;
      
      interactiveElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (e.clientX >= rect.left && e.clientX <= rect.right && 
            e.clientY >= rect.top && e.clientY <= rect.bottom) {
          isHovering = true;
        }
      });
      
      if (isHovering) {
        document.body.classList.add('cursor-hover');
      } else {
        document.body.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      
      // Clean up trail elements
      trailElements.forEach(trail => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      });
    };
  }, []);
};
