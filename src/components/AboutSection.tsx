
import React, { useEffect, useRef, useState } from 'react';
import { Eye, Rocket } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    interns: 0,
    satisfaction: 0,
    projects: 0,
    instructors: 0
  });

  const finalStats = {
    interns: 5000,
    satisfaction: 98,
    projects: 500,
    instructors: 50
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate counters
          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;
          
          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            setAnimatedStats({
              interns: Math.floor(finalStats.interns * easeOut),
              satisfaction: Math.floor(finalStats.satisfaction * easeOut),
              projects: Math.floor(finalStats.projects * easeOut),
              instructors: Math.floor(finalStats.instructors * easeOut)
            });
            
            if (currentStep >= steps) {
              clearInterval(interval);
              setAnimatedStats(finalStats);
            }
          }, stepDuration);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-br from-slate-900 via-[#0a0a2e] to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#00d4ff]/30 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-[#4ecdc4]/20 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-[#ff6b6b]/40 animate-spin" style={{ animationDuration: '8s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 pt-4">
          <h2 className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#4ecdc4] bg-clip-text text-transparent mb-6 leading-tight py-2 transition-all duration-700 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}>
            About Inlighn Tech
          </h2>
          <p className={`text-xl text-slate-300 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}>
            Bridging the gap between academic learning and industry needs
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Company Story */}
          <div className={`space-y-6 transition-all duration-700 delay-300 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-x-[-50px]'
          }`}>
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              Founded with a vision to revolutionize tech education, Inlighn Tech emerged from the recognition 
              that traditional academic approaches weren't preparing students for the rapidly evolving tech industry.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              We bridge the critical gap between theoretical knowledge and practical application, offering 
              hands-on internships that mirror real-world industry challenges and opportunities.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Our expert-led programs in Cybersecurity, Full Stack Development, and Data Science are designed 
              to transform passionate learners into industry-ready professionals.
            </p>
          </div>

          {/* Animated Statistics */}
          <div className={`grid grid-cols-2 gap-6 transition-all duration-700 delay-500 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-x-[50px]'
          }`}>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-[#00d4ff]/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#4ecdc4] bg-clip-text text-transparent">
                {animatedStats.interns.toLocaleString()}+
              </div>
              <div className="text-slate-300 text-sm mt-2">Interns Enrolled</div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-[#ff6b6b]/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] bg-clip-text text-transparent">
                {animatedStats.satisfaction}%
              </div>
              <div className="text-slate-300 text-sm mt-2">Satisfaction Rate</div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-[#4ecdc4]/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#4ecdc4] to-[#00d4ff] bg-clip-text text-transparent">
                {animatedStats.projects.toLocaleString()}+
              </div>
              <div className="text-slate-300 text-sm mt-2">Projects Completed</div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-[#00d4ff]/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#ff6b6b] bg-clip-text text-transparent">
                {animatedStats.instructors}+
              </div>
              <div className="text-slate-300 text-sm mt-2">Expert Instructors</div>
            </div>
          </div>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`group perspective-1000 transition-all duration-700 delay-700 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 transform transition-all duration-300 hover:rotate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-[#00d4ff]/20">
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-[#00d4ff] to-[#4ecdc4] rounded-full opacity-20"></div>
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-[#00d4ff] mr-3" />
                <h4 className="text-2xl font-bold text-white">Our Vision</h4>
              </div>
              <p className="text-slate-300 leading-relaxed">
                To become the leading EdTech platform that transforms the landscape of technology education, 
                creating a world where every student has access to industry-relevant skills and opportunities.
              </p>
            </div>
          </div>
          
          <div className={`group perspective-1000 transition-all duration-700 delay-900 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 transform transition-all duration-300 hover:rotate-y-[-2deg] hover:scale-105 hover:shadow-2xl hover:shadow-[#ff6b6b]/20">
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] rounded-full opacity-20"></div>
              <div className="flex items-center mb-4">
                <Rocket className="w-8 h-8 text-[#ff6b6b] mr-3" />
                <h4 className="text-2xl font-bold text-white">Our Mission</h4>
              </div>
              <p className="text-slate-300 leading-relaxed">
                To empower students with practical, hands-on experience in cutting-edge technologies, 
                bridging the gap between academic learning and industry requirements through expert-guided internships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
