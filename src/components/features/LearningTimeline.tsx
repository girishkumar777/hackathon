
import React, { useState } from 'react';
import { Play, Users, Award, Briefcase, Globe, BookOpen } from 'lucide-react';

interface LearningTimelineProps {
  isVisible: boolean;
}

const timelineSteps = [
  {
    id: 1,
    icon: BookOpen,
    title: "Enroll & Start Learning",
    description: "Access self-paced modules and begin your transformation",
    duration: "Week 1",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    icon: Users,
    title: "Expert Mentorship",
    description: "Connect with industry professionals for personalized guidance",
    duration: "Week 2-4",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    icon: Play,
    title: "Real-World Projects",
    description: "Build portfolio-worthy projects with real datasets",
    duration: "Week 5-12",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    icon: Award,
    title: "Get Certified",
    description: "Earn verifiable credentials recognized by industry",
    duration: "Week 13",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    icon: Briefcase,
    title: "Career Support",
    description: "Job placement assistance and interview preparation",
    duration: "Week 14+",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    icon: Globe,
    title: "Lifetime Access",
    description: "Continue learning with portal access and updates",
    duration: "Forever",
    color: "from-teal-500 to-blue-500"
  }
];

const LearningTimeline: React.FC<LearningTimelineProps> = ({ isVisible }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative">
      <h3 className={`text-3xl font-bold text-center mb-12 text-white ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}>
        Your Learning Journey
      </h3>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />

        {/* Timeline Steps */}
        <div className="space-y-12">
          {timelineSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={step.id}
                className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'} ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} p-1 transition-all duration-300 ${
                    isActive ? 'scale-125 shadow-lg shadow-blue-500/30' : 'hover:scale-110'
                  }`}>
                    <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                      <Icon className={`w-6 h-6 text-white transition-all duration-300 ${
                        isActive ? 'animate-bounce' : ''
                      }`} />
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-80 ${isLeft ? 'mr-24' : 'ml-24'}`}>
                  <div className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20 ${
                    isActive ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' : ''
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-blue-400">{step.duration}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LearningTimeline;
