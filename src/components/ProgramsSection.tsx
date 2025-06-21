
import React, { useState, useEffect, useRef } from 'react';
import { Shield, Code, Database, Brain, TrendingUp, Palette, FileCode, Bug, Globe } from 'lucide-react';

interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  skills: string[];
  icon: React.ElementType;
  category: 'cybersecurity' | 'development' | 'data' | 'ai' | 'business';
  curriculum: string[];
}

const programs: Program[] = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Ethical Hacking',
    description: 'Master the art of ethical hacking and cybersecurity defense mechanisms',
    duration: '12 weeks',
    skills: ['Penetration Testing', 'Network Security', 'Risk Assessment', 'Incident Response'],
    icon: Shield,
    category: 'cybersecurity',
    curriculum: ['Network Fundamentals', 'Ethical Hacking Tools', 'Vulnerability Assessment', 'Security Protocols']
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Web Development',
    description: 'Build complete web applications from frontend to backend',
    duration: '16 weeks',
    skills: ['React', 'Node.js', 'Database Design', 'API Development'],
    icon: Code,
    category: 'development',
    curriculum: ['HTML/CSS/JS', 'React Development', 'Backend APIs', 'Database Management']
  },
  {
    id: 'datascience',
    title: 'Data Science & Analytics',
    description: 'Transform raw data into actionable business insights',
    duration: '14 weeks',
    skills: ['Python', 'Machine Learning', 'Data Visualization', 'Statistical Analysis'],
    icon: Database,
    category: 'data',
    curriculum: ['Data Collection', 'Statistical Analysis', 'ML Algorithms', 'Data Visualization']
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description: 'Build intelligent systems and machine learning models',
    duration: '18 weeks',
    skills: ['Deep Learning', 'Neural Networks', 'TensorFlow', 'Computer Vision'],
    icon: Brain,
    category: 'ai',
    curriculum: ['ML Fundamentals', 'Deep Learning', 'Neural Networks', 'AI Applications']
  },
  {
    id: 'business',
    title: 'Business Analysis',
    description: 'Bridge the gap between business needs and technical solutions',
    duration: '10 weeks',
    skills: ['Requirements Analysis', 'Process Modeling', 'Data Analysis', 'Stakeholder Management'],
    icon: TrendingUp,
    category: 'business',
    curriculum: ['Business Processes', 'Requirements Gathering', 'Data Analysis', 'Project Management']
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Create stunning user interfaces and user experiences',
    duration: '12 weeks',
    skills: ['React', 'TypeScript', 'UI/UX Design', 'Responsive Design'],
    icon: Palette,
    category: 'development',
    curriculum: ['HTML/CSS', 'JavaScript', 'React', 'UI/UX Principles']
  },
  {
    id: 'python',
    title: 'Python Development',
    description: 'Master Python for web development and automation',
    duration: '14 weeks',
    skills: ['Django', 'Flask', 'Automation', 'Web Scraping'],
    icon: FileCode,
    category: 'development',
    curriculum: ['Python Basics', 'Web Frameworks', 'Automation', 'Testing']
  },
  {
    id: 'offensive',
    title: 'Offensive Cybersecurity',
    description: 'Advanced penetration testing and security research',
    duration: '16 weeks',
    skills: ['Advanced Exploitation', 'Red Teaming', 'Social Engineering', 'Forensics'],
    icon: Bug,
    category: 'cybersecurity',
    curriculum: ['Advanced Exploitation', 'Red Team Tactics', 'Social Engineering', 'Digital Forensics']
  },
  {
    id: 'webdev',
    title: 'Web Development',
    description: 'Build modern websites and web applications',
    duration: '12 weeks',
    skills: ['HTML/CSS', 'JavaScript', 'Responsive Design', 'Web APIs'],
    icon: Globe,
    category: 'development',
    curriculum: ['Web Fundamentals', 'Modern JavaScript', 'Responsive Design', 'Web Performance']
  }
];

const categories = [
  { id: 'all', label: 'All Programs' },
  { id: 'cybersecurity', label: 'Cybersecurity' },
  { id: 'development', label: 'Development' },
  { id: 'data', label: 'Data & AI' },
  { id: 'business', label: 'Business' }
];

const ProgramsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visiblePrograms, setVisiblePrograms] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filteredPrograms = programs.filter(program => 
    activeFilter === 'all' || 
    program.category === activeFilter ||
    (activeFilter === 'data' && (program.category === 'data' || program.category === 'ai'))
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const programId = entry.target.getAttribute('data-program-id');
            if (programId) {
              setVisiblePrograms(prev => new Set(prev).add(programId));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredPrograms]);

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-br from-[#0a0a2e] via-slate-900 to-[#0a0a2e] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#00d4ff] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4ecdc4] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#ff6b6b] rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 pt-4">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-[#00d4ff] via-white to-[#4ecdc4] bg-clip-text text-transparent mb-6 leading-tight py-2">
            Our Programs
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of internship programs designed to bridge the gap between academic learning and industry requirements.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-[#00d4ff] to-[#4ecdc4] text-white shadow-lg shadow-[#00d4ff]/25'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program, index) => {
            const Icon = program.icon;
            const isVisible = visiblePrograms.has(program.id);
            
            return (
              <div
                key={program.id}
                ref={(el) => cardRefs.current[index] = el}
                data-program-id={program.id}
                className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-[#00d4ff]/20 ${
                  isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/0 via-[#00d4ff]/5 to-[#4ecdc4]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card Content */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Icon and Title */}
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#00d4ff] to-[#4ecdc4] rounded-lg mr-4 transform group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00d4ff] transition-colors duration-300">
                        {program.title}
                      </h3>
                      <p className="text-[#4ecdc4] font-medium">{program.duration}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 mb-6 flex-grow leading-relaxed">
                    {program.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#00d4ff] mb-3">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600 group-hover:border-[#00d4ff]/50 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Reveal - Curriculum */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2e]/95 to-slate-900/95 backdrop-blur-sm p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-[#00d4ff] mb-4">Curriculum Highlights</h4>
                    <ul className="space-y-2">
                      {program.curriculum.map((item, currIndex) => (
                        <li 
                          key={item}
                          className="flex items-center text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ transitionDelay: `${currIndex * 100 + 200}ms` }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-[#00d4ff] to-[#4ecdc4] rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-6 px-6 py-3 bg-gradient-to-r from-[#00d4ff] to-[#4ecdc4] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/25 transform hover:scale-105 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-300 mb-6">
            Ready to start your journey? Explore our programs and find the perfect fit for your career goals.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#ff6b6b]/25 transform hover:scale-105 transition-all duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
