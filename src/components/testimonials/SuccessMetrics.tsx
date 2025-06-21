
import React from 'react';

interface SuccessMetricsProps {
  isVisible: boolean;
}

const metrics = [
  { label: "Graduates Placed", value: "1,200+", icon: "👨‍💼" },
  { label: "Average Salary Increase", value: "150%", icon: "📈" },
  { label: "Industry Partners", value: "500+", icon: "🤝" },
  { label: "Success Rate", value: "94%", icon: "🎯" }
];

const SuccessMetrics: React.FC<SuccessMetricsProps> = ({ isVisible }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {metrics.map((metric, index) => (
        <div
          key={metric.label}
          className={`text-center p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-slate-700/30 hover:border-blue-500/30 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: `${0.4 + index * 0.1}s` }}
        >
          <div className="text-3xl mb-2">{metric.icon}</div>
          <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
            {metric.value}
          </div>
          <div className="text-slate-400 text-sm font-medium">{metric.label}</div>
        </div>
      ))}
    </div>
  );
};

export default SuccessMetrics;
