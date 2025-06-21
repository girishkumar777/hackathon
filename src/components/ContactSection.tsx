
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ContactForm from './contact/ContactForm';
import OfficeLocation from './contact/OfficeLocation';
import CertificateVerification from './contact/CertificateVerification';
import FAQSection from './contact/FAQSection';
import SocialLinks from './contact/SocialLinks';

const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <section 
      ref={ref}
      className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden"
      id="contact"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ${
            inView ? 'animate-fade-in' : 'opacity-0'
          }`}>
            Get In Touch
          </h2>
          <p className={`text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed ${
            inView ? 'animate-fade-in' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            Ready to start your journey? Contact us for more information or verify your certification
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form & Office Location */}
          <div className="space-y-12">
            <ContactForm isVisible={inView} />
            <OfficeLocation isVisible={inView} />
          </div>

          {/* Certificate Verification */}
          <div>
            <CertificateVerification isVisible={inView} />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <FAQSection isVisible={inView} />
        </div>

        {/* Social Links */}
        <div>
          <SocialLinks isVisible={inView} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
