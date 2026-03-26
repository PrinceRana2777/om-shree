import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Get In Touch */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Let's bring your vision to life with our expert design and craftsmanship. 
              Contact us today for a consultation and transform your space into something extraordinary.
            </p>
            <p className="text-xs text-gray-500">Copyright © 2024 My Blog</p>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-sm font-medium">Ramesh Rana</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gray-400" />
                <span className="text-sm text-gray-400">+91 98921 05881</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gray-400" />
                <span className="text-sm text-gray-400">omshreeinteriors@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-bold mb-6">Location</h3>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-gray-400 mt-1 shrink-0" />
              <p className="text-sm text-gray-400 leading-relaxed">
                Jay Vijay Ind Estate NH 48, Naigaon East, Mumbai, 
                Vasai-Virar, Maharashtra 421302, India
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-bold mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/omshreeinteriors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-xs text-gray-500">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <p className="text-xs text-gray-500">Powered by My Blog</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
