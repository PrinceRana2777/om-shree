import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

const Services = () => {
  const expertise = [
    {
      title: "Home Interior",
      description: "We create cohesive, luxury living spaces that blend comfort with high-end aesthetics.",
      image: "https://picsum.photos/seed/luxury-living-room-2/800/600"
    },
    {
      title: "Modular Kitchen",
      description: "Functional, modern, and elegant kitchen solutions tailored to your culinary lifestyle.",
      image: "https://picsum.photos/seed/modern-kitchen-2/800/600"
    },
    {
      title: "Bedroom Design",
      description: "Transforming bedrooms into personal sanctuaries with premium textures and lighting.",
      image: "https://picsum.photos/seed/luxury-bedroom-2/800/600"
    },
    {
      title: "Office Interior",
      description: "Sophisticated workspace designs that inspire productivity and reflect professional excellence.",
      image: "https://picsum.photos/seed/office-interior-luxury/800/600"
    }
  ];

  const furnitureSetups = [
    {
      title: "Custom Sofa & Lounge Setup",
      image: "https://picsum.photos/seed/luxury-sofa-setup/800/600"
    },
    {
      title: "Premium Dining Collection",
      image: "https://picsum.photos/seed/luxury-dining-setup/800/600"
    },
    {
      title: "Bespoke Wardrobe Solutions",
      image: "https://picsum.photos/seed/luxury-wardrobe-setup/800/600"
    }
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
            src="https://iili.io/qLeeNVV.md.jpg" 
            alt="Services Hero" 
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
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            We craft custom-crafted furniture and precision carpentry, blending traditional skills with modern design.
          </motion.p>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8 tracking-tight text-gray-900">Delivering Excellence Through Action.</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                At Om Shree Interiors, we believe that quality is not just a goal, but a standard we uphold in every project. 
                Our team is dedicated to delivering excellence through every action we take.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-gray-900 mt-1 shrink-0" />
                  <span>Custom-crafted furniture designed to your specifications.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-gray-900 mt-1 shrink-0" />
                  <span>Expert carpentry with a focus on precision and durability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-gray-900 mt-1 shrink-0" />
                  <span>Comprehensive project management from start to finish.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/modern-interior-excellence/1200/900" 
              alt="Excellence" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-beige-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 tracking-tight text-gray-900">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {expertise.map((item, index) => (
              <motion.div 
                key={item.title} 
                whileHover={{ y: -10 }}
                className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-beige-200 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10">
                  <span className="block text-5xl font-bold text-beige-200 mb-6 group-hover:text-gray-900 transition-colors">0{index + 1}</span>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-lg">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Work CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 tracking-tight text-gray-900">Need A Custom Work?</h2>
            <button 
              onClick={() => openWhatsApp()}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-5 rounded-full font-bold hover:bg-black transition-all text-lg shadow-xl"
            >
              Let's Talk <ArrowRight size={18} />
            </button>
          </div>

          {/* Video Section */}
          <div className="relative aspect-video rounded-[60px] overflow-hidden shadow-2xl group cursor-pointer">
            <img 
              src="https://picsum.photos/seed/interior-tour-luxury/1920/1080" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play size={36} className="text-gray-900 fill-current ml-1" />
              </div>
            </div>
            <div className="absolute bottom-12 left-12 text-white">
              <p className="text-sm font-bold uppercase tracking-widest mb-3">Step Inside Our Studio</p>
              <h3 className="text-4xl font-bold">Experience Luxury Design</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Furniture Setups Section */}
      <section className="py-24 bg-beige-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-gray-900">Bespoke Furniture Collections</h2>
            <p className="text-gray-500 text-xl">Crafting pieces that define your space.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {furnitureSetups.map((item) => (
              <div key={item.title} className="bg-white rounded-[40px] overflow-hidden shadow-lg border border-beige-200 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold leading-tight text-gray-900">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
