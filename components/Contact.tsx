import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-black text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-display font-medium mb-12 tracking-tight"
        >
            Let's Collaborate
        </motion.h2>

        <div className="flex flex-col items-center gap-10">
            <a href={`mailto:${PERSONAL_INFO.email}`}>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-white text-black font-mono font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors"
                >
                   Send an Email
                </motion.button>
            </a>
            
            <div className="w-px h-16 bg-gray-800 my-4"></div>

            <div className="flex gap-8 justify-center">
                <a 
                  href={PERSONAL_INFO.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                    <Linkedin size={28} strokeWidth={1.5} />
                </a>
                <a 
                  href={PERSONAL_INFO.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                    <Github size={28} strokeWidth={1.5} />
                </a>
            </div>

            <div className="mt-32 pt-8 border-t border-gray-900 w-full flex justify-end items-end font-mono text-[10px] text-gray-600 uppercase tracking-widest">
               <div>
                 © {new Date().getFullYear()} Alexi Ikonomou
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;