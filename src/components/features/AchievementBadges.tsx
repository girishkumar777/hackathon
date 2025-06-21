
import React, { useState, useEffect } from 'react';
import { Award, Star, Zap, Target, Crown, Rocket, Code, Users, Clock, Trophy } from 'lucide-react';

interface AchievementBadgesProps {
  isVisible: boolean;
}

const achievements = [
  {
    id: 1,
    icon: Code,
    title: "First Project",
    description: "Complete your first project successfully",
    unlocked: true,
    progress: 100,
    color: "from-blue-500 to-cyan-500",
    glow: "blue"
  },
  {
    id: 2,
    icon: Star,
    title: "5-Star Rating",
    description: "Receive a 5-star rating from mentor",
    unlocked: true,
    progress: 100,
    color: "from-yellow-500 to-orange-500",
    glow: "yellow"
  },
  {
    id: 3,
    icon: Users,
    title: "Team Player",
    description: "Complete 3 collaborative projects",
    unlocked: false,
    progress: 66,
    color: "from-green-500 to-emerald-500",
    glow: "green"
  },
  {
    id: 4,
    icon: Clock,
    title: "Speed Demon",
    description: "Complete course 2 weeks early",
    unlocked: false,
    progress: 80,
    color: "from-purple-500 to-pink-500",
    glow: "purple"
  },
  {
    id: 5,
    icon: Target,
    title: "Perfect Score",
    description: "Achieve 100% in final assessment",
    unlocked: false,
    progress: 45,
    color: "from-red-500 to-pink-500",
    glow: "red"
  },
  {
    id: 6,
    icon: Crown,
    title: "Top Performer",
    description: "Rank in top 10% of cohort",
    unlocked: false,
    progress: 25,
    color: "from-indigo-500 to-purple-500",
    glow: "indigo"
  },
  {
    id: 7,
    icon: Rocket,
    title: "Innovation Master",
    description: "Create an innovative project feature",
    unlocked: false,
    progress: 0,
    color: "from-teal-500 to-blue-500",
    glow: "teal"
  },
  {
    id: 8,
    icon: Trophy,
    title: "Course Champion",
    description: "Complete entire program with distinction",
    unlocked: false,
    progress: 0,
    color: "from-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600",
    glow: "yellow"
  }
];

const AchievementBadges: React.FC<AchievementBadgesProps> = ({ isVisible }) => {
  const [unlockedBadges, setUnlockedBadges] = useState<number[]>([]);
  const [showUnlockAnimation, setShowUnlockAnimation] = useState<number | null>(null);

  useEffect(() => {
    if (isVisible) {
      // Simulate unlocking badges with animation
      const unlockedIds = achievements.filter(a => a.unlocked).map(a => a.id);
      unlockedIds.forEach((id, index) => {
        setTimeout(() => {
          setUnlockedBadges(prev => [...prev, id]);
          setShowUnlockAnimation(id);
          setTimeout(() => setShowUnlockAnimation(null), 1000);
        }, index * 500);
      });
    }
  }, [isVisible]);

  return (
    <div className="relative">
      <div className="text-center mb-12">
        <h3 className={`text-3xl font-bold text-white mb-4 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          Achievement Badges
        </h3>
        <p className={`text-slate-300 max-w-2xl mx-auto ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`} style={{ animationDelay: '0.2s' }}>
          Unlock badges as you progress through your learning journey and hit important milestones
        </p>
      </div>

      {/* Stats Overview */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`} style={{ animationDelay: '0.3s' }}>
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            {unlockedBadges.length}/{achievements.length}
          </div>
          <div className="text-slate-400">Badges Unlocked</div>
        </div>
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
            {Math.round(achievements.reduce((acc, a) => acc + a.progress, 0) / achievements.length)}%
          </div>
          <div className="text-slate-400">Overall Progress</div>
        </div>
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
            {achievements.filter(a => a.progress === 100).length}
          </div>
          <div className="text-slate-400">Completed</div>
        </div>
      </div>

      {/* Achievement Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          const isUnlocked = unlockedBadges.includes(achievement.id);
          const isAnimating = showUnlockAnimation === achievement.id;

          return (
            <div
              key={achievement.id}
              className={`group relative ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-6 text-center transition-all duration-500 hover:scale-105 ${
                isUnlocked
                  ? 'border-yellow-500/50 shadow-lg shadow-yellow-500/20'
                  : 'border-slate-700/50 hover:border-slate-600/50'
              } ${
                isAnimating ? 'animate-bounce border-yellow-400 shadow-2xl shadow-yellow-400/40' : ''
              }`}>
                {/* Unlock Animation Overlay */}
                {isAnimating && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-xl animate-pulse" />
                )}

                {/* Progress Ring */}
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      className="text-slate-700"
                    />
                    {/* Progress Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 45}`}
                      strokeDashoffset={`${2 * Math.PI * 45 * (1 - achievement.progress / 100)}`}
                      className={`transition-all duration-1000 ${
                        isUnlocked ? 'text-yellow-400' : 'text-blue-400'
                      }`}
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Icon */}
                  <div className={`absolute inset-0 flex items-center justify-center ${
                    isUnlocked ? 'text-yellow-400' : 'text-slate-400'
                  } ${isAnimating ? 'animate-spin' : ''}`}>
                    <Icon className={`w-8 h-8 transition-all duration-500 ${
                      isUnlocked ? 'scale-110' : 'group-hover:scale-105'
                    }`} />
                  </div>

                  {/* Unlock Effect */}
                  {isAnimating && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 border-4 border-yellow-400 rounded-full animate-ping" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <h4 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                  isUnlocked ? 'text-yellow-400' : 'text-white group-hover:text-blue-400'
                }`}>
                  {achievement.title}
                </h4>
                
                <p className="text-slate-400 text-sm mb-3 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      isUnlocked 
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-400' 
                        : 'bg-gradient-to-r from-blue-400 to-purple-400'
                    }`}
                    style={{ width: `${achievement.progress}%` }}
                  />
                </div>
                <div className="text-xs text-slate-500">{achievement.progress}% Complete</div>

                {/* Locked/Unlocked Indicator */}
                {isUnlocked && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className={`text-center mt-12 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`} style={{ animationDelay: '1s' }}>
        <p className="text-slate-300 mb-6">Ready to unlock more achievements?</p>
        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
          Continue Learning Journey
        </button>
      </div>
    </div>
  );
};

export default AchievementBadges;
