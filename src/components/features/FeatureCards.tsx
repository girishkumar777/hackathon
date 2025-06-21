import React, { useState } from 'react';
import { Code, Users, Award, Clock, Briefcase, Globe } from 'lucide-react';

interface FeatureCardsProps {
  isVisible: boolean;
}

const features = [
  {
    id: 1,
    icon: Code,
    title: "Real-World Projects",
    description: "Build portfolio-worthy projects using real datasets and industry-standard tools",
    details: "Work on 5+ hands-on projects that mirror actual workplace scenarios. From data analysis to full-stack applications, create a portfolio that impresses employers.",
    color: "from-blue-500 to-cyan-500",
    demo: "🚀 Live project demos available",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    icon: Users,
    title: "Expert Mentorship",
    description: "Get personalized guidance from industry professionals with 10+ years experience",
    details: "1-on-1 sessions, code reviews, career advice, and industry insights from professionals currently working at top tech companies.",
    color: "from-purple-500 to-pink-500",
    demo: "👨‍💼 Meet your mentors",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    icon: Award,
    title: "Certified Programs",
    description: "Earn verifiable credentials recognized by leading companies worldwide",
    details: "Industry-recognized certifications that add credibility to your resume and showcase your skills to potential employers.",
    color: "from-green-500 to-emerald-500",
    demo: "🏆 View sample certificates",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    icon: Clock,
    title: "Flexible Learning",
    description: "Self-paced modules that fit your schedule with 24/7 access to content",
    details: "Learn at your own pace with mobile-friendly content, offline downloads, and progress tracking across all devices.",
    color: "from-orange-500 to-red-500",
    demo: "📱 Try mobile learning",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    icon: Briefcase,
    title: "Career Support",
    description: "Comprehensive job placement assistance and interview preparation",
    details: "Resume optimization, mock interviews, job referrals, salary negotiation support, and access to our hiring partner network.",
    color: "from-indigo-500 to-purple-500",
    demo: "💼 Explore job opportunities",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    icon: Globe,
    title: "Portal Access",
    description: "Lifetime access to learning portal with continuous updates and new content",
    details: "Your learning never stops. Get access to new courses, updated content, alumni network, and exclusive industry events.",
    color: "from-teal-500 to-blue-500",
    demo: "🌐 Portal preview",
    image: "/placeholder.svg"
  }
];

const FeatureCards: React.FC<FeatureCardsProps> = ({ isVisible }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <div className="relative">
      <h3 className={`text-3xl font-bold text-center mb-12 text-white ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}>
        Why Choose Our Programs
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isHovered = hoveredCard === feature.id;
          const isExpanded = expandedCard === feature.id;

          return (
            <div
              key={feature.id}
              className={`group relative ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                perspective: '1000px'
              }}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 h-full transition-all duration-500 cursor-pointer overflow-hidden ${
                isHovered ? 'transform-gpu rotate-y-12 scale-105 border-blue-500/50 shadow-2xl shadow-blue-500/20' : 'hover:border-slate-600/50'
              }`}
              onClick={() => setExpandedCard(isExpanded ? null : feature.id)}
              style={{
                transformStyle: 'preserve-3d',
                transform: isHovered ? 'perspective(1000px) rotateY(5deg) scale(1.05)' : 'perspective(1000px) rotateY(0deg) scale(1)'
              }}
              >
                {/* Background Image on Hover */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  isHovered ? 'opacity-20' : 'opacity-0'
                }`}>
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/30 rounded-xl"></div>
                </div>

                <div className="relative z-10">
                  {/* Floating Icon */}
                  <div className={`relative mb-4 ${isHovered ? 'animate-float' : ''}`}>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-1 transition-all duration-300 ${
                      isHovered ? 'animate-glow' : ''
                    }`}>
                      <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-center">
                        <Icon className={`w-8 h-8 text-white transition-all duration-300 ${
                          isHovered ? 'scale-110' : ''
                        }`} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Demo Badge */}
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${feature.color} rounded-full text-xs font-medium text-white mb-4 transition-all duration-300 ${
                    isHovered ? 'animate-pulse' : ''
                  }`}>
                    {feature.demo}
                  </div>

                  {/* Expandable Details */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-slate-700/50 pt-4">
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {feature.details}
                      </p>
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div className={`absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full transition-all duration-300 ${
                    isHovered ? 'scale-150 animate-ping' : 'scale-0'
                  }`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCards;
