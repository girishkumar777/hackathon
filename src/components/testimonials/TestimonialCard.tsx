
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  program: string;
  image: string;
  quote: string;
  rating: number;
  skills: string[];
  outcome: string;
  type: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isFullWidth?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isFullWidth = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showFullQuote, setShowFullQuote] = useState(false);

  const truncatedQuote = testimonial.quote.length > 120 ? 
    testimonial.quote.substring(0, 120) + "..." : 
    testimonial.quote;

  return (
    <Card 
      className={`relative group h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${isFullWidth ? 'p-8' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className={`${isFullWidth ? 'p-0' : 'p-6'}`}>
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          {/* Header with Image and Info */}
          <div className="flex items-center mb-4">
            <div className="relative">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className={`rounded-full object-cover transition-transform duration-300 ${isHovered ? 'scale-110' : ''} ${isFullWidth ? 'w-16 h-16' : 'w-14 h-14'}`}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="ml-4 flex-1">
              <h4 className={`font-bold text-white ${isFullWidth ? 'text-xl' : 'text-lg'}`}>
                {testimonial.name}
              </h4>
              <p className={`text-blue-400 font-medium ${isFullWidth ? 'text-base' : 'text-sm'}`}>
                {testimonial.program}
              </p>
              <p className={`text-slate-400 ${isFullWidth ? 'text-sm' : 'text-xs'}`}>
                {testimonial.outcome}
              </p>
            </div>
          </div>

          {/* Rating Stars */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 transition-all duration-300 ${
                  i < testimonial.rating
                    ? 'text-yellow-400 fill-yellow-400 scale-110'
                    : 'text-slate-600'
                } ${isHovered && i < testimonial.rating ? 'animate-pulse' : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className={`text-slate-300 italic mb-4 leading-relaxed ${isFullWidth ? 'text-lg' : 'text-sm'}`}>
            "{showFullQuote || isFullWidth ? testimonial.quote : truncatedQuote}"
            {!isFullWidth && testimonial.quote.length > 120 && (
              <button
                onClick={() => setShowFullQuote(!showFullQuote)}
                className="text-blue-400 hover:text-blue-300 ml-2 text-sm font-medium transition-colors"
              >
                {showFullQuote ? 'Show less' : 'Read more'}
              </button>
            )}
          </blockquote>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2">
            {testimonial.skills.slice(0, isFullWidth ? testimonial.skills.length : 3).map((skill, index) => (
              <span
                key={skill}
                className={`px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full font-medium transition-all duration-300 ${
                  isHovered ? 'scale-105 bg-gradient-to-r from-blue-500/30 to-purple-500/30' : ''
                } ${isFullWidth ? 'text-sm' : 'text-xs'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
            {!isFullWidth && testimonial.skills.length > 3 && (
              <span className="px-2 py-1 bg-slate-700/50 text-slate-400 rounded-full text-xs font-medium">
                +{testimonial.skills.length - 3} more
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
