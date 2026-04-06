import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Get In Touch */}
          <div>
            <h3 className="text-2xl font-bold mb-8 font-serif">Om Shree Interiors</h3>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Let's bring your vision to life with our expert design and craftsmanship. 
              Contact us today for a consultation and transform your space into something extraordinary.
            </p>
            <p className="text-xs text-gray-500 font-bold tracking-widest uppercase">© 2024 Om Shree Interiors</p>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">Contact Details</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <span className="text-lg font-bold">Ramesh Rana</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Phone size={18} className="text-gray-400" />
                </div>
                <span className="text-gray-400 font-medium">+91 98921 05881</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <span className="text-gray-400 font-medium">omshreeinteriors@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">Location</h3>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-gray-400" />
              </div>
              <p className="text-gray-400 leading-relaxed font-medium">
                Jay Vijay Ind Estate NH 48, Naigaon East, Mumbai, 
                Vasai-Virar, Maharashtra 421302, India
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/omshreeinteriors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-lg"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-600">Premium Interior Design Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
