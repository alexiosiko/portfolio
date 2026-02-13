import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.05 }
    }
  };

  const itemVars = {
    initial: { y: "130%", skewY: 7 },
    animate: { 
      y: 0, 
      skewY: 0,
      transition: { duration: 0.35, ease: [0.19, 1, 0.22, 1] } 
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col justify-center py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <motion.div 
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="max-w-5xl"
        >
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="font-mono text-[10px] tracking-[0.5em] uppercase text-gray-400 mb-8"
          >
            Alexis Ikonomou / Creation & Development
          </motion.p>
          
          <div className="overflow-hidden mb-1">
            <motion.h1 variants={itemVars} className="text-7xl md:text-[140px] font-display font-bold tracking-tighter leading-[0.75] text-black">
              DESIGN.
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-1">
            <motion.h1 variants={itemVars} className="text-7xl md:text-[140px] font-display font-bold tracking-tighter leading-[0.75] text-black">
              BUILD.
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.h1 variants={itemVars} className="text-7xl md:text-[140px] font-display font-bold tracking-tighter leading-[0.75] text-gray-200">
              SHARE.
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="flex flex-col md:flex-row md:items-end gap-12 mt-12 border-t border-gray-100 pt-10"
          >
            <div className="flex-1">
              <p className="text-2xl md:text-3xl font-sans font-light text-black leading-tight max-w-xl">
                I build software and worlds because I love the puzzle of development. Bringing ideas to life is what keeps me moving.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <a href="#projects">
                <Button variant="primary" className="!px-10 !py-4">The Projects</Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="!px-10 !py-4">Contact</Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;