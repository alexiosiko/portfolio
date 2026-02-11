import React from 'react';
import { ArrowDownRight, Download } from 'lucide-react';
import Button from './Button';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col justify-center border-b border-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-12 pb-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Main Typography */}
          <motion.div 
            className="lg:col-span-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <h1 className="text-6xl md:text-9xl font-display font-medium tracking-tighter leading-[0.9] mb-10 text-theme-text">
                SOFTWARE<br/>
                DEVELOPER<br/>
                <span className="text-gray-400">& ARTIST</span>
              </h1>
            </motion.div>
            
            <motion.p 
              variants={item}
              className="text-xl md:text-2xl font-sans font-light text-theme-subtext max-w-2xl mb-12 leading-relaxed"
            >
              I create software and games. I love building things that are fun to use and solve real problems.
            </motion.p>
            
            <motion.div 
              variants={item}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects">
                <Button variant="primary">
                  View Work
                </Button>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Side Info / Stats */}
          <motion.div 
            className="lg:col-span-4 lg:mb-4 lg:text-right flex flex-col items-start lg:items-end gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
             <div className="font-mono text-xs tracking-widest uppercase border-l lg:border-l-0 lg:border-r border-black pl-6 lg:pl-0 lg:pr-6 py-1">
                <p className="text-gray-500 mb-2">Current Role</p>
                <p className="font-bold text-black">Developer @ Bird Box Games</p>
             </div>

             <div className="font-mono text-xs tracking-widest uppercase border-l lg:border-l-0 lg:border-r border-black pl-6 lg:pl-0 lg:pr-6 py-1">
                <p className="text-gray-500 mb-2">Specialization</p>
                <p className="font-bold text-black">Full Stack & Game Dev</p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;