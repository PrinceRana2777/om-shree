import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  const services = [
    "In-House Production",
    "Carpentry",
    "Interior Civil Work",
    "Stonework",
    "Paint & Polishing",
    "Customised Modular Furniture"
  ];

  const architects = [
    "Mrs. Jyoti Bhatia & Mr. Saket Ojha, Nuvo Ideas",
    "Mr. Santosh Wadekar M/S. SW Studio",
    "Mr. Suresh M/S. Infinity Design",
    "Ms. Rashi Chheda (Darshan Chheda) M/S. DCA",
    "Mr. Rakesh Ambasana"
  ];

  const clientele = [
    "Macleods Pharmaceuticals Ltd Owner (Juhu Mumbai)",
    "Mr. Hiranandani (Malabar Hill)",
    "Samvardhana Motherson Group",
    "Margadarsi Chit Fund (Office - Hyderabad)",
    "Z Poonawalla (Home - Mumbai)",
    "Chandan Mukhwash Owner (Home - Mumbai)",
    "Firoz Shah Godrej (Home - Mumbai)"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            src="https://iili.io/qLeeRAG.md.jpg" 
            alt="Interior Hero" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-bold tracking-[0.3em] uppercase mb-4"
          >
            Welcome to
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
          >
            OM SHREE INTERIORS
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all"
            >
              View Projects <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Roots Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 tracking-tight">Roots of Om Shree</h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              We specialize in custom-crafted furniture and precision carpentry, blending traditional skills with modern design. 
              From modular solutions to timeless woodwork, we deliver durable, elegant pieces tailored to your space.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-2xl">
                <span className="block text-3xl font-bold mb-1">80-90%</span>
                <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">In-House Production</span>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl">
                <span className="block text-3xl font-bold mb-1">15+</span>
                <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">Years Experience</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/roots/1200/900" 
              alt="Roots of Om Shree" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-bold mb-4 tracking-tight">Services</h2>
              <p className="text-gray-500 max-w-xl">
                We provide a comprehensive range of interior services, ensuring every detail is handled with precision and care.
              </p>
            </div>
            <Link to="/services" className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 group">
              View All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 font-bold text-sm">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{service}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Expertly delivered with our signature attention to detail and quality craftsmanship.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Teaser */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative h-[600px] rounded-[40px] overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/projects-teaser/1920/1080" 
              alt="Projects" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12">
              <span className="text-white/60 text-sm font-bold uppercase tracking-[0.3em] mb-4">Most Recent</span>
              <h2 className="text-white text-5xl font-bold mb-8 tracking-tight">Projects</h2>
              <Link 
                to="/projects"
                className="w-fit bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Architects & Clientele */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Architects */}
            <div>
              <h2 className="text-3xl font-bold mb-12 tracking-tight">Architects</h2>
              <div className="space-y-6">
                {architects.map((arch) => (
                  <div key={arch} className="flex items-start gap-4 group">
                    <CheckCircle2 size={20} className="text-black mt-1 shrink-0" />
                    <span className="text-gray-600 font-medium group-hover:text-black transition-colors">{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clientele */}
            <div>
              <h2 className="text-3xl font-bold mb-12 tracking-tight">Clientele</h2>
              <div className="space-y-6">
                {clientele.map((client) => (
                  <div key={client} className="flex items-start gap-4 group">
                    <CheckCircle2 size={20} className="text-black mt-1 shrink-0" />
                    <span className="text-gray-600 font-medium group-hover:text-black transition-colors">{client}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
