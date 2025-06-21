
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import TestimonialCard from './testimonials/TestimonialCard';
import SuccessMetrics from './testimonials/SuccessMetrics';
import VideoTestimonial from './testimonials/VideoTestimonial';

const testimonials = [
  {
    id: 1,
    name: "Mirunalini R",
    program: "Data Analytics",
    image: "/placeholder.svg",
    quote: "The hands-on experience with SQL, Power BI, and Tableau transformed my career. I went from knowing nothing about data to landing my dream job as a Data Analyst within 3 months of completing the program.",
    rating: 5,
    skills: ["SQL", "Power BI", "Tableau", "Data Visualization"],
    outcome: "Data Analyst at TechCorp",
    type: "card"
  },
  {
    id: 2,
    name: "Surendra Kumar",
    program: "Data Science",
    image: "/placeholder.svg",
    quote: "Working with real-world datasets and building ML models gave me the confidence to tackle complex AI challenges. The mentorship was exceptional!",
    rating: 5,
    skills: ["Machine Learning", "Python", "TensorFlow", "AI Models"],
    outcome: "ML Engineer at DataFlow",
    type: "full-width"
  },
  {
    id: 3,
    name: "Hariharan",
    program: "Full-Stack Development",
    image: "/placeholder.svg",
    quote: "From React fundamentals to deploying full applications with Node.js and MongoDB, this program covered everything I needed to become a professional developer.",
    rating: 5,
    skills: ["React", "Node.js", "MongoDB", "JavaScript"],
    outcome: "Full-Stack Developer at WebSolutions",
    type: "card"
  },
  {
    id: 4,
    name: "Vignesh",
    program: "Business Analysis",
    image: "/placeholder.svg",
    quote: "The market research techniques and financial analysis skills I learned here directly contributed to my success in the business world.",
    rating: 5,
    skills: ["Market Research", "Financial Analysis", "Excel", "Strategy"],
    outcome: "Business Analyst at FinTech Pro",
    type: "video",
    videoUrl: "#"
  },
  {
    id: 5,
    name: "Priya Sharma",
    program: "Cybersecurity",
    image: "/placeholder.svg",
    quote: "The ethical hacking modules and cybersecurity fundamentals gave me the edge I needed to break into the security field.",
    rating: 5,
    skills: ["Ethical Hacking", "Network Security", "Penetration Testing"],
    outcome: "Security Analyst at CyberGuard",
    type: "card"
  },
  {
    id: 6,
    name: "Ravi Patel",
    program: "AI & Machine Learning",
    image: "/placeholder.svg",
    quote: "Building AI models from scratch and understanding the mathematical foundations was incredible. Now I'm developing AI solutions for healthcare.",
    rating: 5,
    skills: ["Deep Learning", "Neural Networks", "Python", "AI Ethics"],
    outcome: "AI Research Engineer at MedTech",
    type: "full-width"
  },
  {
    id: 7,
    name: "Anitha Krishnan",
    program: "Frontend Development",
    image: "/placeholder.svg",
    quote: "The modern frontend frameworks and design principles I learned helped me create beautiful, responsive applications that users love.",
    rating: 5,
    skills: ["React", "Vue.js", "CSS3", "UI/UX Design"],
    outcome: "Frontend Developer at DesignHub",
    type: "card"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('testimonials-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="testimonials-section"
      className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className={`text-xl text-slate-300 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Hear from our graduates who've transformed their careers and achieved their goals
          </p>
        </div>

        {/* Success Metrics */}
        <SuccessMetrics isVisible={isVisible} />

        {/* Testimonials Carousel */}
        <div className="mt-16">
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  {testimonial.type === 'video' ? (
                    <VideoTestimonial testimonial={testimonial} />
                  ) : testimonial.type === 'full-width' ? (
                    <div className="md:col-span-2 lg:col-span-3">
                      <TestimonialCard testimonial={testimonial} isFullWidth />
                    </div>
                  ) : (
                    <TestimonialCard testimonial={testimonial} />
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-slate-800/80 border-slate-600 hover:bg-slate-700 text-white" />
            <CarouselNext className="hidden md:flex -right-12 bg-slate-800/80 border-slate-600 hover:bg-slate-700 text-white" />
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-slate-300 mb-8">Join thousands of students who've transformed their careers with our programs</p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue-500/25">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
