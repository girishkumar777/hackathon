
import React, { useState } from 'react';
import { Trophy, Star, Crown, Gift, Zap, Target } from 'lucide-react';

interface InternsChallengeProps {
  isVisible: boolean;
}

const monthlyWinners = [
  {
    name: "Arjun Sharma",
    program: "Data Science",
    project: "AI-Powered Customer Segmentation",
    reward: "₹10,000 + Job Referral",
    avatar: "AS",
    color: "from-yellow-500 to-orange-500"
  },
  {
    name: "Priya Nair",
    program: "Full-Stack Development",
    project: "E-commerce Analytics Dashboard",
    reward: "₹7,500 + Certification",
    avatar: "PN",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Karthik Reddy",
    program: "Business Analytics",
    project: "Market Trend Prediction Model",
    reward: "₹5,000 + Mentorship",
    avatar: "KR",
    color: "from-blue-500 to-cyan-500"
  }
];

const rewards = [
  { icon: Trophy, title: "1st Place", amount: "₹10,000", extras: "+ Job Referral" },
  { icon: Star, title: "2nd Place", amount: "₹7,500", extras: "+ Fast-track Certification" },
  { icon: Crown, title: "3rd Place", amount: "₹5,000", extras: "+ 1-on-1 Mentorship" },
];

const InternsChallenge: React.FC<InternsChallengeProps> = ({ isVisible }) => {
  const [activeTab, setActiveTab] = useState<'winners' | 'rewards' | 'rules'>('winners');

  return (
    <div className="relative">
      <div className="text-center mb-12">
        <div className={`inline-flex items-center gap-3 mb-4 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Interns of the Month Challenge
          </h3>
        </div>
        <p className={`text-slate-300 max-w-2xl mx-auto ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`} style={{ animationDelay: '0.2s' }}>
          Compete with fellow learners, showcase your projects, and win exciting rewards every month!
        </p>
      </div>

      {/* Tab Navigation */}
      <div className={`flex justify-center mb-8 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`} style={{ animationDelay: '0.3s' }}>
        <div className="bg-slate-800/50 rounded-lg p-2 backdrop-blur-sm border border-slate-700/50">
          {[
            { key: 'winners', label: 'This Month\'s Winners', icon: Crown },
            { key: 'rewards', label: 'Rewards & Prizes', icon: Gift },
            { key: 'rules', label: 'How to Participate', icon: Target }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="relative min-h-96">
        {/* Winners Tab */}
        {activeTab === 'winners' && (
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${
            isVisible ? 'animate-scale-in' : 'opacity-0'
          }`}>
            {monthlyWinners.map((winner, index) => (
              <div
                key={winner.name}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105">
                  {/* Position Badge */}
                  <div className={`absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r ${winner.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {index + 1}
                  </div>

                  {/* Avatar */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-20 h-20 bg-gradient-to-r ${winner.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:animate-bounce`}>
                      {winner.avatar}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white mb-1">{winner.name}</h4>
                    <p className="text-blue-400 text-sm mb-3">{winner.program}</p>
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                      <strong>Project:</strong> {winner.project}
                    </p>
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${winner.color} rounded-full text-white text-sm font-medium shadow-lg`}>
                      {winner.reward}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Rewards Tab */}
        {activeTab === 'rewards' && (
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${
            isVisible ? 'animate-scale-in' : 'opacity-0'
          }`}>
            {rewards.map((reward, index) => {
              const Icon = reward.icon;
              return (
                <div
                  key={reward.title}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 text-center hover:border-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105">
                    <div className="mb-6">
                      <Icon className="w-16 h-16 mx-auto text-yellow-400 group-hover:animate-bounce" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">{reward.title}</h4>
                    <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                      {reward.amount}
                    </div>
                    <p className="text-slate-300">{reward.extras}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Rules Tab */}
        {activeTab === 'rules' && (
          <div className={`max-w-4xl mx-auto ${
            isVisible ? 'animate-scale-in' : 'opacity-0'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  How to Participate
                </h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    Complete any ongoing program course
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    Submit your project with detailed documentation
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    Include innovative features and real-world applications
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    Get votes from peers and mentor reviews
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-green-400" />
                  Evaluation Criteria
                </h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    Technical complexity and innovation (40%)
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    Real-world applicability and impact (30%)
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    Code quality and documentation (20%)
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    Presentation and demo quality (10%)
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/30">
                Submit Your Project Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InternsChallenge;
