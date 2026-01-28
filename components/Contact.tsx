import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Linkedin, Github } from 'lucide-react';
import Button from './Button';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative z-10 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-theme-text mb-8">
              Ready to collaborate?
          </h2>
          <p className="text-xl md:text-2xl text-theme-subtext mb-12 font-light max-w-2xl mx-auto">
              I'm available for new opportunities in software and game development.
          </p>

          <div className="flex flex-col items-center gap-8 mb-16">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <a href={`mailto:${PERSONAL_INFO.email}`}>
                      <Button variant="primary" className="h-14 px-10 text-lg rounded-lg shadow-lg hover:shadow-xl shadow-blue-500/20">
                          <Mail size={20} /> Send Email
                      </Button>
                  </a>
                  <div className="flex gap-4">
                      <motion.a 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        href={PERSONAL_INFO.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-4 rounded-lg bg-white text-slate-700 hover:bg-blue-50 hover:text-[#0077b5] transition-colors shadow-sm border border-slate-200"
                      >
                          <Linkedin size={24} />
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        href={PERSONAL_INFO.social.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-4 rounded-lg bg-white text-slate-700 hover:bg-slate-50 hover:text-black transition-colors shadow-sm border border-slate-200"
                      >
                          <Github size={24} />
                      </motion.a>
                  </div>
              </div>

              {/* Explicit Email Display */}
              <div className="flex flex-col items-center justify-center gap-2 mt-2">
                <span className="text-theme-subtext text-sm uppercase tracking-wide font-medium opacity-80">
                  Or contact me directly at:
                </span>
                <span className="text-lg md:text-xl font-bold text-theme-text select-all hover:text-theme-primary transition-colors cursor-text border-b-2 border-transparent hover:border-theme-primary/20">
                  {PERSONAL_INFO.email}
                </span>
              </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-slate-400 text-sm"
        >
          <p>© {new Date().getFullYear()} Alexi Ikonomou.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;