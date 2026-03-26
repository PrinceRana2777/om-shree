import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

const Services = () => {
  const expertise = [
    {
      title: "Architect",
      description: "We work closely with architects to ensure every design is perfectly executed and structurally sound."
    },
    {
      title: "Carpentry",
      description: "Our expert carpenters bring years of experience to every project, ensuring precision and quality."
    },
    {
      title: "Procurement",
      description: "We handle the procurement of high-quality materials and furnishings to ensure the best results."
    }
  ];

  const machinery = [
    {
      title: "Altendorf WA8 sliding table panel saw",
      image: "https://picsum.photos/seed/machinery-1/800/600"
    },
    {
      title: "Own Factory, Located in Naigaon",
      image: "https://picsum.photos/seed/machinery-2/800/600"
    },
    {
      title: "Own Man Power",
      image: "https://picsum.photos/seed/machinery-3/800/600"
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
            <h2 className="text-4xl font-bold mb-8 tracking-tight">Delivering Excellence Through Action.</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                At Om Shree Interiors, we believe that quality is not just a goal, but a standard we uphold in every project. 
                Our team is dedicated to delivering excellence through every action we take.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-black mt-1 shrink-0" />
                  <span>Custom-crafted furniture designed to your specifications.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-black mt-1 shrink-0" />
                  <span>Expert carpentry with a focus on precision and durability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-black mt-1 shrink-0" />
                  <span>Comprehensive project management from start to finish.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/excellence/1200/900" 
              alt="Excellence" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 tracking-tight">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {expertise.map((item, index) => (
              <div key={item.title} className="group">
                <span className="block text-5xl font-bold text-gray-200 mb-6 group-hover:text-black transition-colors">0{index + 1}</span>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Work CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Need A Custom Work?</h2>
            <button 
              onClick={() => openWhatsApp()}
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all"
            >
              Let's Talk <ArrowRight size={18} />
            </button>
          </div>

          {/* Video Section */}
          <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl group cursor-pointer">
            <img 
              src="https://picsum.photos/seed/video-thumb/1920/1080" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <Play size={32} className="text-black fill-current ml-1" />
              </div>
            </div>
            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-sm font-bold uppercase tracking-widest mb-2">Step Inside Our Office</p>
              <h3 className="text-2xl font-bold">Come Visit Us Today!</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Welcome to Our Interior Design Studio – Let's Create Together!</h2>
            <p className="text-gray-500 text-xl font-bold">Here Are Machinery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {machinery.map((item) => (
              <div key={item.title} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <div className="aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
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
