import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

const ProjectSlider = ({ images, alt }: { images: string[], alt: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full group/slider">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${alt} - ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/slider:opacity-100 transition-opacity">
        <button 
          onClick={prev}
          className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next}
          className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div 
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      architect: "Mrs. Jyoti Bhatia & Mr. Saket Ojha, Nuvo Ideas",
      client: "Mr. Niranjan Hiranandani (Malabar Hill)",
      area: "5000 Sq. Ft.",
      images: [
        "https://iili.io/qL8JH0l.md.jpg",
        "https://iili.io/qL8J2JS.md.jpg",
        "https://iili.io/qL8J357.md.jpg",
        "https://iili.io/qL8Hbxs.md.jpg",
        "https://iili.io/qL8JRmF.md.jpg"
      ]
    },
    {
      architect: "Mrs. Jyoti Bhatia & Mr. Saket Ojha, Nuvo Ideas",
      client: "Margadarsi Chit Fund (Hyderabad)",
      area: "10,000 Sq. Ft.",
      images: [
        "https://iili.io/qLvOTQ4.md.jpg",
        "https://iili.io/qLvORG2.md.jpg",
        "https://iili.io/qLvOf4I.md.jpg",
        "https://iili.io/qLvOKEN.md.jpg",
        "https://iili.io/qLvOwa1.md.jpg",
        "https://iili.io/qLvON8F.md.jpg",
        "https://iili.io/qLvO8Zv.md.jpg",
        "https://iili.io/qLvOOyg.md.jpg"
      ]
    },
    {
      architect: "Mr. Suresh, Infinity Design",
      client: "Mr. Pankaj Shah (Chandan Mukhwas Owner)",
      area: "3,500 Sq. Ft.",
      images: [
        "https://iili.io/qLeeRAG.md.jpg",
        "https://iili.io/qLeeTSn.md.jpg",
        "https://iili.io/qLeeIcX.md.jpg",
        "https://iili.io/qLeeA9s.md.jpg",
        "https://iili.io/qLee1K7.md.jpg",
        "https://iili.io/qLeeGSe.md.jpg",
        "https://iili.io/qLeeWAb.md.jpg",
        "https://iili.io/qLeeNVV.md.jpg",
        "https://iili.io/qLeePxR.md.jpg"
      ]
    },
    {
      architect: "C.N. Architect",
      client: "Mr. Murli Narayan",
      area: "1800 Sq. Ft.",
      images: [
        "https://iili.io/qLOUrXf.md.jpg",
        "https://iili.io/qLOU4s4.md.jpg",
        "https://iili.io/qLOUSbs.md.jpg",
        "https://iili.io/qLOUgzG.md.jpg",
        "https://iili.io/qLOg5pn.md.jpg",
        "https://iili.io/qLOgYIs.md.jpg",
        "https://iili.io/qLOgu2I.md.jpg",
        "https://iili.io/qLOgRkX.md.jpg",
        "https://iili.io/qLOgkEQ.md.jpg",
        "https://iili.io/qLOgiZJ.md.jpg"
      ]
    },
    {
      architect: "Mrs. Jyoti Bhatia & Mr. Saket Ojha, Nuvo Ideas",
      client: "Ahuja Tower, A 50/51",
      area: "8000 Sq. Ft.",
      images: [
        "https://iili.io/qLeKMp1.md.jpg",
        "https://iili.io/qLeKWTF.md.jpg",
        "https://iili.io/qLeKXhg.md.jpg",
        "https://iili.io/qLeKGkP.md.jpg",
        "https://iili.io/qLeKQ3l.md.jpg",
        "https://iili.io/qLefxna.md.jpg",
        "https://iili.io/qLefzMJ.md.jpg",
        "https://iili.io/qLefI6v.md.jpg"
      ]
    },
    {
      architect: "Mr. Suresh, Infinity Design",
      client: "Mr. Sulakhe",
      area: "1200 Sq. Ft.",
      images: [
        "https://iili.io/qLhxs7S.md.jpg",
        "https://iili.io/qLhznEv.md.jpg",
        "https://iili.io/qLhxpBj.md.jpg",
        "https://iili.io/qLWYEep.md.jpg",
        "https://iili.io/qLhzgu1.md.jpg",
        "https://iili.io/qLhzZap.md.jpg",
        "https://iili.io/qLhzt8N.md.jpg"
      ]
    },
    {
      architect: "Mr. Santosh Wadekar M/S. SW Studio",
      client: "Mr. Khatri",
      area: "3,500 Sq. Ft.",
      image: "https://iili.io/qL8Qc7a.md.jpg"
    }
  ];

  return (
    <div className="bg-beige-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            src="https://iili.io/qLeePxR.md.jpg" 
            alt="Projects Hero" 
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
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            A showcase of our finest work—where creativity, craftsmanship, and client vision come together to inspire confidence and elevate expectations.
          </motion.p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Architect</h3>
                    <p className="text-3xl font-bold tracking-tight text-gray-900">{project.architect}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Client</h3>
                    <p className="text-3xl font-bold tracking-tight text-gray-900">{project.client}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Carpet Area</h3>
                    <p className="text-3xl font-bold tracking-tight text-gray-900">{project.area}</p>
                  </div>
                </div>
              </div>
              
              <div className={`relative aspect-[4/3] rounded-[60px] overflow-hidden shadow-2xl group cursor-pointer ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {project.images ? (
                  <ProjectSlider images={project.images} alt={project.client} />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.client} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                  <span className="bg-white text-black px-10 py-5 rounded-full font-bold shadow-2xl text-lg">View Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Loose Furniture Section */}
      <section className="py-24 bg-beige-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 tracking-tight text-gray-900">Loose Furniture</h2>
              <p className="text-gray-600 leading-relaxed text-xl mb-10">
                Loose Furniture includes Sofas, Chairs, and Tables designed for comfort and relaxation. 
                It adds style and functionality to living rooms, offices, and public spaces.
              </p>
              <ul className="space-y-6 mb-12">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <CheckCircle2 size={20} className="text-gray-900" />
                  </div>
                  <span className="font-bold text-lg text-gray-900">Custom Sofas & Armchairs</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <CheckCircle2 size={20} className="text-gray-900" />
                  </div>
                  <span className="font-bold text-lg text-gray-900">Dining & Coffee Tables</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <CheckCircle2 size={20} className="text-gray-900" />
                  </div>
                  <span className="font-bold text-lg text-gray-900">Office Desks & Chairs</span>
                </li>
              </ul>
              <button 
                onClick={() => openWhatsApp('', '', 'I am interested in loose furniture.')}
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-5 rounded-full font-bold hover:bg-black transition-all text-lg shadow-xl"
              >
                Enquire Now <ArrowRight size={18} />
              </button>
            </div>
            <div className="relative aspect-[4/3] rounded-[60px] overflow-hidden shadow-2xl">
              <ProjectSlider 
                images={[
                  "https://iili.io/qLSggz7.md.jpg",
                  "https://iili.io/qLSgPqu.md.jpg",
                  "https://iili.io/qLSg4se.md.jpg",
                  "https://iili.io/qLSgrX9.md.jpg",
                  "https://iili.io/qLSrdrJ.md.jpg",
                  "https://iili.io/qLSr3dv.md.jpg",
                  "https://iili.io/qLSrKep.md.jpg",
                  "https://iili.io/qLSrJ1a.md.jpg",
                  "https://iili.io/qLSr5p2.md.jpg",
                  "https://iili.io/qLSrA74.md.jpg",
                  "https://iili.io/qLSrYIS.md.jpg",
                  "https://iili.io/qLSrVYx.md.jpg",
                  "https://iili.io/qLSrXpV.md.jpg",
                  "https://iili.io/qLSrNQ1.md.jpg",
                  "https://iili.io/qLSreCF.md.jpg",
                  "https://iili.io/qLSriQt.md.jpg",
                  "https://iili.io/qLSrpyl.md.jpg",
                  "https://iili.io/qLSrD3G.md.jpg",
                  "https://iili.io/qLS43Ge.md.jpg",
                  "https://iili.io/qLS42n9.md.jpg",
                  "https://iili.io/qLS4F6u.md.jpg",
                  "https://iili.io/qLS4ouV.md.jpg",
                  "https://iili.io/qLS47cJ.md.jpg",
                  "https://iili.io/qLS41tI.md.jpg",
                  "https://iili.io/qLS4VPn.md.jpg",
                  "https://iili.io/qLS4N94.md.jpg",
                  "https://iili.io/qLS4OAl.md.jpg",
                  "https://iili.io/qLS4iHx.md.jpg",
                  "https://iili.io/qLS4DV1.md.jpg"
                ]} 
                alt="Loose Furniture Collection" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
