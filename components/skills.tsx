import React from 'react';
import { SKILLS } from '../constants';
import { motion, Variants } from 'framer-motion';

const Skills: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.5 },
    show: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        transition: { type: "spring", stiffness: 300, damping: 20 } 
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="text-4xl md:text-5xl font-display font-medium text-theme-text mb-4"
          >
            Skills
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-theme-subtext text-xl"
          >
            My technical toolkit.
          </motion.p>
        </div>

        <div className="space-y-16">
          {SKILLS.map((category, idx) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-2xl font-display text-theme-text px-2 border-l-4 border-theme-primary pl-4">
                    {category.name}
                </h3>
                <div className="h-px bg-theme-subtext/20 flex-grow max-w-xs"></div>
              </div>
              
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.div 
                    key={skill}
                    variants={item}
                    whileHover={{ 
                        scale: 1.15, 
                        backgroundColor: '#EEF2FF', // Very light indigo
                        borderColor: '#4F46E5', // Indigo 600
                        color: '#4338CA', // Indigo 700
                        rotate: Math.random() * 4 - 2,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white/80 backdrop-blur-sm text-theme-subtext rounded-xl text-base border-2 border-white cursor-default shadow-sm font-medium hover:shadow-md"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;