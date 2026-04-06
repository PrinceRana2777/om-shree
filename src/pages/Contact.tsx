import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Send } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(formData.name, formData.phone, formData.message);
  };

  return (
    <div className="bg-beige-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            src="https://iili.io/qLOgiZJ.md.jpg" 
            alt="Contact Hero" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold mb-6 tracking-tight"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Reach out today and discover how our creativity, precision, and passion can turn your ideas into reality.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Details */}
          <div>
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-12 tracking-tight text-gray-900">Contact Detail</h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Ramesh Rana</h3>
                  <div className="flex items-center gap-4 text-2xl font-bold text-gray-900">
                    <div className="w-12 h-12 rounded-full bg-beige-100 flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <span>+91 98921 05881</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Email</h3>
                  <div className="flex items-center gap-4 text-2xl font-bold text-gray-900">
                    <div className="w-12 h-12 rounded-full bg-beige-100 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <span>omshreeinteriors@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-12 tracking-tight text-gray-900">Mumbai Address</h2>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-beige-100 flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <p className="text-2xl font-bold text-gray-900 leading-relaxed">
                  Jay Vijay Ind Estate NH 48, Naigaon East, Mumbai, 
                  Vasai-Virar, Maharashtra 421302, India
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-12 tracking-tight text-gray-900">Follow Us</h2>
              <a 
                href="https://www.instagram.com/omshreeinteriors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 group"
              >
                <div className="w-16 h-16 rounded-full border border-beige-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all shadow-sm">
                  <Instagram size={28} />
                </div>
                <span className="text-2xl font-bold text-gray-900">Instagram</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-beige-100 p-12 md:p-16 rounded-[60px] shadow-sm border border-beige-200">
            <h2 className="text-4xl font-bold mb-12 tracking-tight text-gray-900">Send Me A Message</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-beige-200 rounded-[32px] px-8 py-5 focus:outline-none focus:ring-4 focus:ring-gray-900/5 transition-all text-lg"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 98921 05881"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-beige-200 rounded-[32px] px-8 py-5 focus:outline-none focus:ring-4 focus:ring-gray-900/5 transition-all text-lg"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">Message</label>
                <textarea 
                  rows={6}
                  required
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-beige-200 rounded-[32px] px-8 py-5 focus:outline-none focus:ring-4 focus:ring-gray-900/5 transition-all resize-none text-lg"
                />
              </div>
              <button type="submit" className="w-full bg-gray-900 text-white px-10 py-6 rounded-full font-bold hover:bg-black transition-all flex items-center justify-center gap-3 text-xl shadow-xl">
                Let's Talk <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-100 relative overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.46419827361!2d72.8447!3d19.3497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIwJzU4LjkiTiA3MsKwNTAnNDAuOSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Location Map"
        />
      </section>
    </div>
  );
};

export default Contact;
