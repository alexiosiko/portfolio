import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Gamepad2, Code, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content - Centered */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 shadow-sm">
                <span className="text-theme-primary font-bold tracking-wider text-sm uppercase">About Me</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-theme-text mb-8 leading-tight">
              Driven by <span className="text-theme-primary">Logic</span> & <span className="text-theme-secondary">Innovation</span>.
            </h2>
            
            <div className="space-y-4 text-theme-subtext text-lg leading-relaxed max-w-3xl mx-auto">
              {PERSONAL_INFO.bio.map((paragraph, index) => (
                <motion.p 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights Row - Manly/Tech Colors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-[20px] shadow-sm hover:shadow-xl border border-slate-200 relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="w-12 h-12 bg-blue-600 rounded-lg shadow-md flex items-center justify-center text-white mb-6 relative z-10">
                    <Gamepad2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-theme-text mb-3 font-display relative z-10">Game Development</h3>
                <p className="text-theme-subtext leading-relaxed relative z-10">
                    Engineering immersive mechanics with Godot & Unity.
                </p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-[20px] shadow-sm hover:shadow-xl border border-slate-200 relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="w-12 h-12 bg-sky-500 rounded-lg shadow-md flex items-center justify-center text-white mb-6 relative z-10">
                    <Code size={24} />
                </div>
                <h3 className="text-xl font-bold text-theme-text mb-3 font-display relative z-10">Full Stack Web</h3>
                <p className="text-theme-subtext leading-relaxed relative z-10">
                    Building scalable, performant apps with Next.js & Node.
                </p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-[20px] shadow-sm hover:shadow-xl border border-slate-200 relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="w-12 h-12 bg-slate-700 rounded-lg shadow-md flex items-center justify-center text-white mb-6 relative z-10">
                    <Terminal size={24} />
                </div>
                <h3 className="text-xl font-bold text-theme-text mb-3 font-display relative z-10">Systems & IT</h3>
                <p className="text-theme-subtext leading-relaxed relative z-10">
                    Translating complex technical requirements into solid infrastructure.
                </p>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;