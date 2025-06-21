
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQSectionProps {
  isVisible: boolean;
}

const FAQSection = ({ isVisible }: FAQSectionProps) => {
  const faqs = [
    {
      question: "How do I register for a program?",
      answer: "You can register by filling out the contact form above or visiting our office. Our team will guide you through the enrollment process and help you choose the right program based on your career goals."
    },
    {
      question: "What are the program deadlines?",
      answer: "We have multiple intake batches throughout the year. Generally, new batches start every month. Contact us for specific dates and availability for your preferred program."
    },
    {
      question: "How do I get my certificate after completion?",
      answer: "Certificates are issued within 2-3 weeks after successful completion of the program. You'll receive a digital certificate via email and can request a hard copy. All certificates can be verified using our verification system above."
    },
    {
      question: "What kind of mentorship is provided?",
      answer: "Each student is assigned an industry expert mentor who provides personalized guidance, conducts regular 1-on-1 sessions, reviews your projects, and helps with career planning and job placement."
    },
    {
      question: "How do I submit my projects?",
      answer: "Projects are submitted through our dedicated student portal. You'll receive login credentials after enrollment. The portal includes project guidelines, submission deadlines, and feedback from mentors."
    },
    {
      question: "What are the payment options?",
      answer: "We offer flexible payment options including one-time payment, EMI options, and scholarship programs for eligible students. Payment can be made via bank transfer, UPI, or card payments."
    },
    {
      question: "Is there job placement assistance?",
      answer: "Yes! We provide comprehensive career support including resume building, interview preparation, job referrals, and placement assistance. Our placement team works closely with partner companies to help you land your dream job."
    },
    {
      question: "Can I access course materials after completion?",
      answer: "Absolutely! All students get lifetime access to course materials, recorded sessions, and our alumni network through our separate portal. You can continue learning and stay updated with new content."
    }
  ];

  return (
    <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h3>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Find answers to common questions about our programs, enrollment, and services
        </p>
      </div>

      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-slate-600 rounded-lg bg-slate-700/30 backdrop-blur-sm overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-blue-400 hover:bg-slate-700/50 transition-all duration-300 [&[data-state=open]]:text-blue-400 [&[data-state=open]]:bg-slate-700/50">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-300 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
