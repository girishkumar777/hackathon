
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import LearningTimeline from './features/LearningTimeline';
import FeatureCards from './features/FeatureCards';
import InternsChallenge from './features/InternsChallenge';
import ProjectGallery from './features/ProjectGallery';
import AchievementBadges from './features/AchievementBadges';

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <section 
      ref={ref}
      className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ${
            inView ? 'animate-fade-in' : 'opacity-0'
          }`}>
            What Makes Us Special
          </h2>
          <p className={`text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed ${
            inView ? 'animate-fade-in' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            Discover the unique features that set our programs apart and accelerate your career transformation
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="mb-20">
          <LearningTimeline isVisible={inView} />
        </div>

        {/* Feature Cards */}
        <div className="mb-20">
          <FeatureCards isVisible={inView} />
        </div>

        {/* Interns Challenge */}
        <div className="mb-20">
          <InternsChallenge isVisible={inView} />
        </div>

        {/* Project Gallery */}
        <div className="mb-20">
          <ProjectGallery isVisible={inView} />
        </div>

        {/* Achievement Badges */}
        <div>
          <AchievementBadges isVisible={inView} />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
