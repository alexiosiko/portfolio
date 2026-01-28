import React from 'react';
import { Download, Code } from 'lucide-react';
import Button from './Button';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const titleWords = ["Build.", "Architect.", "Deploy."];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden perspective-1000">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full bg-theme-primary/10 border border-theme-primary/20"
            >
              <span className="text-theme-primary font-bold tracking-wide text-sm uppercase">
                Portfolio & Resume
              </span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold text-theme-text tracking-tight mb-8 leading-tight">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200,
                    damping: 10,
                    delay: i * 0.15
                  }}
                  className={`inline-block mr-4 ${
                    i === 0 ? 'text-theme-text' : 
                    i === 1 ? 'text-theme-primary' : 
                    'text-theme-secondary'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
              className="text-xl md:text-2xl text-theme-subtext mb-10 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
               I'm <span className="font-semibold text-theme-text">Alexi</span>. I build robust and scalable software.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#projects">
                <Button variant="primary" className="h-14 px-8 text-lg bg-theme-primary hover:bg-blue-700 shadow-lg shadow-blue-500/20 border-none">
                  View Projects
                </Button>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="h-14 px-8 text-lg border-2 border-slate-300 hover:border-theme-primary text-theme-text hover:bg-slate-50">
                  <Download size={20} className="mr-2" /> Resume
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Image/Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex-1 flex justify-center lg:justify-end relative"
          >
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              {/* Decorative Rings - Cool tones */}
              <div className="absolute inset-0 bg-theme-primary/20 rounded-full scale-110 animate-pulse"></div>
              <div className="absolute inset-0 bg-theme-secondary/20 rounded-full scale-125 -z-10 translate-x-4"></div>
              <div className="absolute inset-0 bg-theme-slate/20 rounded-full scale-105 -z-20 -translate-y-4"></div>
              
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-[8px] border-white/90 shadow-2xl ring-4 ring-theme-primary/10">
                 <img 
                    src={PERSONAL_INFO.avatar} 
                    alt="Alexi Ikonomou" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Alexi+Ikonomou&background=2563EB&color=fff&size=512';
                    }}
                 />
              </div>

               {/* Floater Badge */}
               <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.8 }}
                className="absolute bottom-10 -left-6 bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-xl border border-slate-200 hidden md:block cursor-default"
               >
                 <div className="flex items-center gap-3">
                    <div className="bg-theme-secondary text-white p-2.5 rounded-lg shadow-lg shadow-sky-500/30">
                        <Code size={20} />
                    </div>
                    <span className="font-display font-semibold text-theme-text">Full Stack Developer</span>
                 </div>
               </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;