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
    <div className="bg-white">
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
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
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
              <h2 className="text-3xl font-bold mb-12 tracking-tight">Contact Detail</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Ramesh Rana</h3>
                  <div className="flex items-center gap-3 text-xl font-bold">
                    <Phone size={20} className="text-black" />
                    <span>+91 98921 05881</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Email</h3>
                  <div className="flex items-center gap-3 text-xl font-bold">
                    <Mail size={20} className="text-black" />
                    <span>omshreeinteriors@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-12 tracking-tight">Mumbai Address</h2>
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-black mt-1 shrink-0" />
                <p className="text-xl font-medium text-gray-600 leading-relaxed">
                  Jay Vijay Ind Estate NH 48, Naigaon East, Mumbai, 
                  Vasai-Virar, Maharashtra 421302, India
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-12 tracking-tight">Follow Us</h2>
              <a 
                href="https://www.instagram.com/omshreeinteriors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <Instagram size={24} />
                </div>
                <span className="text-xl font-bold">Instagram</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-12 rounded-[40px]">
            <h2 className="text-3xl font-bold mb-12 tracking-tight">Send Me A Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 98921 05881"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                <textarea 
                  rows={6}
                  required
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all resize-none"
                />
              </div>
              <button type="submit" className="w-full bg-black text-white px-8 py-5 rounded-full font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-3">
                Let's Talk <Send size={18} />
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
