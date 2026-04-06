import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Years of Experience", value: "15+" },
    { label: "Projects Completed", value: "120+" },
    { label: "Happy Clients", value: "100+" }
  ];

  const images = [
    "https://picsum.photos/seed/interior-detail-1/800/600",
    "https://picsum.photos/seed/interior-detail-2/800/600",
    "https://picsum.photos/seed/interior-detail-3/800/600",
    "https://picsum.photos/seed/interior-detail-4/800/600"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            src="https://iili.io/qLee1K7.md.jpg" 
            alt="About Hero" 
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            We are passionate about creating stylish, functional spaces that truly reflect our clients' personalities and lifestyles.
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl font-bold mb-8 tracking-tight text-gray-900">Our Vision</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                We are passionate about creating stylish, functional spaces that truly reflect our clients' 
                personalities and lifestyles. With a keen eye for detail and a love for innovative design, 
                I bring creativity and practicality together to transform interiors into inspiring, 
                comfortable environments.
              </p>
              <p>
                Whether you're refreshing a single room or redesigning your entire home, we are here to guide 
                you through the process with thoughtful solutions and a personalized touch.
              </p>
              <p className="font-bold text-gray-900 italic">Let's work together to bring your vision to life—beautifully and effortlessly.</p>
              <p className="text-3xl font-bold text-gray-900">Dream Space to Life!</p>
            </div>
            
            <div className="mt-12 pt-12 border-t border-beige-200">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400">Follow Our Journey</h3>
              <a 
                href="https://www.instagram.com/omshreeinteriors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-gray-900 hover:opacity-70 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full bg-beige-100 flex items-center justify-center">
                  <Instagram size={24} />
                </div>
                <span className="font-bold">Instagram</span>
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/interior-design-studio-setup/800/1000" 
                alt="Design Studio" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-10 right-10 bg-white p-10 rounded-[32px] shadow-2xl border border-beige-100">
                <span className="block text-6xl font-bold mb-1 text-gray-900">15+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Years of Mastery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-24 bg-beige-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-gray-900">Great Attention To Detail</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We innovate and bring new possibilities in the design of each house, 
              ensuring every project is unique and perfectly executed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {images.map((src, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-[32px] overflow-hidden shadow-xl"
              >
                <img 
                  src={src} 
                  alt={`Detail ${index + 1}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-900 text-white p-12 md:p-24 rounded-[80px] relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
                We Specialize In Managing Furniture Projects From Concept To Completion.
              </h2>
              <p className="text-white/60 text-xl mb-12 leading-relaxed">
                Our team of experts handles every aspect of your project, ensuring a seamless experience 
                and exceptional results that exceed your expectations.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-beige-100 transition-all text-lg"
              >
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 hidden lg:block">
              <img 
                src="https://picsum.photos/seed/luxury-furniture-setup/800/800" 
                alt="Specialization" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
