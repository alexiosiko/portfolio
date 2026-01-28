import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Linkedin, Github } from 'lucide-react';
import Button from './Button';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative z-10 border-t border-theme-subtext/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-medium text-theme-text mb-8">
              Let's work together.
          </h2>
          <p className="text-xl md:text-2xl text-theme-subtext mb-12 font-light max-w-2xl mx-auto">
              Open for game development and full-stack opportunities.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
              <a href={`mailto:${PERSONAL_INFO.email}`}>
                  <Button variant="primary" className="h-14 px-10 text-lg rounded-full shadow-lg hover:shadow-xl shadow-theme-primary/20">
                      <Mail size={20} /> Email Me
                  </Button>
              </a>
              <div className="flex gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href={PERSONAL_INFO.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 rounded-full bg-white text-theme-text hover:bg-blue-50 hover:text-[#0077b5] transition-colors shadow-md border border-gray-100"
                  >
                      <Linkedin size={24} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.15, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href={PERSONAL_INFO.social.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 rounded-full bg-white text-theme-text hover:bg-gray-50 hover:text-black transition-colors shadow-md border border-gray-100"
                  >
                      <Github size={24} />
                  </motion.a>
              </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-theme-subtext/60 text-sm"
        >
          <p>© {new Date().getFullYear()} Alexi Ikonomou.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;