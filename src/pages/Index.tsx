
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProgramsSection from '../components/ProgramsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FeaturesSection from '../components/FeaturesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import LoadingAnimation from '../components/LoadingAnimation';
import CustomCursor from '../components/CustomCursor';

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior to the entire document
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add cursor-none class to body
    document.body.classList.add('cursor-none');

    // Cleanup function
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.classList.remove('cursor-none');
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <CustomCursor />
      <LoadingAnimation />
      <ScrollProgress />
      <Navigation />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="programs">
        <ProgramsSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
