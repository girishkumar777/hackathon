
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { 
  ChevronUp, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube 
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  // Show/hide back to top button based on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Successfully subscribed!",
      description: "Welcome to our newsletter. You'll receive updates about new programs and opportunities.",
    });
    
    setEmail('');
    setIsSubscribing(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Youtube, url: '#', label: 'YouTube' }
  ];

  const quickLinks = [
    'About Us', 'Programs', 'Testimonials', 'Contact', 'FAQ'
  ];

  const programs = [
    'Cybersecurity', 'Full Stack Development', 'Data Science', 
    'Business Analytics', 'AI/ML', 'Cloud Computing'
  ];

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Inlighn Tech
                </h3>
                <p className="text-slate-300 mt-2 leading-relaxed">
                  Transforming careers through cutting-edge technology internships and expert mentorship.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">WeWork Prestige Central, Bengaluru</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">info@skillupinterns.com</span>
                </div>
              </div>

              {/* Recognition Badges */}
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-300">
                  ISO Certified
                </div>
                <div className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-300">
                  MCA Approved
                </div>
                <div className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-300">
                  Startup India
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={`#${link.toLowerCase().replace(' ', '')}`}
                      className="text-slate-300 hover:text-white transition-all duration-300 text-sm hover:pl-2 inline-block"
                      aria-label={`Navigate to ${link}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Programs</h4>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <a 
                      href="#programs"
                      className="text-slate-300 hover:text-white transition-all duration-300 text-sm hover:pl-2 inline-block"
                      aria-label={`Learn about ${program} program`}
                    >
                      {program}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
              <p className="text-slate-300 text-sm">
                Subscribe to our newsletter for the latest updates and opportunities.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-blue-400 transition-colors"
                  required
                  aria-label="Email for newsletter subscription"
                />
                <Button
                  type="submit"
                  disabled={isSubscribing}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-none transition-all duration-300 transform hover:scale-105"
                >
                  {isSubscribing ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    'Subscribe'
                  )}
                </Button>
              </form>

              {/* Social Media Links */}
              <div className="space-y-3">
                <h5 className="text-sm font-medium text-slate-300">Follow Us</h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        aria-label={social.label}
                        className="w-10 h-10 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                      >
                        <Icon className="w-5 h-5 text-slate-300 hover:text-white transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-slate-400 text-sm text-center md:text-left">
                © 2024 Inlighn Tech. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
