
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  isVisible: boolean;
}

const ContactForm = ({ isVisible }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 ${
      isVisible ? 'animate-fade-in' : 'opacity-0'
    }`} style={{ animationDelay: '0.3s' }}>
      <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-2 border-slate-600 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:border-blue-400 focus:outline-none transition-colors peer"
            placeholder="Your Name"
          />
          <label className="absolute left-4 top-2 text-xs text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-400">
            Your Name
          </label>
        </div>

        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-2 border-slate-600 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:border-blue-400 focus:outline-none transition-colors peer"
            placeholder="Your Email"
          />
          <label className="absolute left-4 top-2 text-xs text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-400">
            Your Email
          </label>
        </div>

        {/* Phone Input */}
        <div className="relative">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-2 border-slate-600 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:border-blue-400 focus:outline-none transition-colors peer"
            placeholder="Your Phone"
          />
          <label className="absolute left-4 top-2 text-xs text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-400">
            Your Phone
          </label>
        </div>

        {/* Course Selection */}
        <div className="relative">
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-2 border-slate-600 rounded-lg px-4 py-4 text-white focus:border-blue-400 focus:outline-none transition-colors appearance-none"
          >
            <option value="" className="bg-slate-800">Select a Course</option>
            <option value="data-analytics" className="bg-slate-800">Data Analytics</option>
            <option value="data-science" className="bg-slate-800">Data Science</option>
            <option value="full-stack" className="bg-slate-800">Full Stack Development</option>
            <option value="business-analysis" className="bg-slate-800">Business Analysis</option>
            <option value="ai-ml" className="bg-slate-800">AI & Machine Learning</option>
          </select>
        </div>

        {/* Message Input */}
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-transparent border-2 border-slate-600 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:border-blue-400 focus:outline-none transition-colors peer resize-none"
            placeholder="Your Message"
          />
          <label className="absolute left-4 top-2 text-xs text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-400">
            Your Message
          </label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Sending...
            </div>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
