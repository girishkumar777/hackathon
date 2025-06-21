
import React, { useState } from 'react';
import { Play, Star } from 'lucide-react';
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
  videoUrl?: string;
}

interface VideoTestimonialProps {
  testimonial: Testimonial;
}

const VideoTestimonial: React.FC<VideoTestimonialProps> = ({ testimonial }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="relative group h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Video Thumbnail */}
        <div className="relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20"></div>
          
          {/* Play Button */}
          <button className={`relative z-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'scale-110 bg-white/30' : ''
          }`}>
            <Play className="w-6 h-6 text-white ml-1" fill="white" />
          </button>
          
          {/* Video Badge */}
          <div className="absolute top-4 left-4 bg-purple-500/80 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-white text-sm font-medium">Video Story</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center mb-4">
            <div className="flex-1">
              <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
              <p className="text-purple-400 font-medium text-sm">{testimonial.program}</p>
              <p className="text-slate-400 text-xs">{testimonial.outcome}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 transition-all duration-300 ${
                  i < testimonial.rating
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-slate-600'
                } ${isHovered && i < testimonial.rating ? 'animate-pulse' : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          {/* Quote Preview */}
          <blockquote className="text-slate-300 italic text-sm mb-4 leading-relaxed">
            "{testimonial.quote.substring(0, 100)}..."
          </blockquote>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {testimonial.skills.slice(0, 3).map((skill, index) => (
              <span
                key={skill}
                className={`px-2 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-xs font-medium transition-all duration-300 ${
                  isHovered ? 'scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoTestimonial;
