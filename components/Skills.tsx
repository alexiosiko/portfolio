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
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        transition: { type: "spring", stiffness: 400, damping: 20 } 
    }
  };

  // Helper to get color classes based on index - Cool Tech Colors
  const getColorStyles = (idx: number) => {
    const colors = [
        // Blue
        { border: 'border-blue-200', bg: 'bg-blue-50', text: 'text-blue-700', hoverBorder: '#3B82F6', hoverColor: '#1D4ED8' },
        // Slate
        { border: 'border-slate-200', bg: 'bg-slate-50', text: 'text-slate-700', hoverBorder: '#64748B', hoverColor: '#334155' },
        // Sky
        { border: 'border-sky-200', bg: 'bg-sky-50', text: 'text-sky-700', hoverBorder: '#0EA5E9', hoverColor: '#0369A1' },
        // Indigo
        { border: 'border-indigo-200', bg: 'bg-indigo-50', text: 'text-indigo-700', hoverBorder: '#6366F1', hoverColor: '#4338CA' },
    ];
    return colors[idx % colors.length];
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="text-4xl md:text-5xl font-display font-bold text-theme-text mb-4"
          >
            Technical <span className="text-theme-primary">Proficiencies</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-theme-subtext text-xl"
          >
            My toolkit for solving problems.
          </motion.p>
        </div>

        <div className="space-y-16">
          {SKILLS.map((category, idx) => {
             const style = getColorStyles(idx);
             return (
                <motion.div 
                  key={category.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 400, damping: 20 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className={`text-2xl font-display font-semibold text-theme-text px-2 border-l-4 border-slate-800 pl-4`}>
                        {category.name}
                    </h3>
                    <div className={`h-px bg-slate-200 flex-grow max-w-xs`}></div>
                  </div>
                  
                  <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-wrap gap-3"
                  >
                    {category.skills.map((skill, skillIdx) => {
                      const skillStyle = getColorStyles(skillIdx + idx); 
                      return (
                        <motion.div 
                            key={skill}
                            variants={item}
                            whileHover={{ 
                                scale: 1.1, 
                                backgroundColor: '#fff', 
                                borderColor: skillStyle.hoverBorder,
                                color: skillStyle.hoverColor,
                                transition: { type: "spring", stiffness: 500, damping: 15 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-5 py-2.5 rounded-lg text-sm border cursor-default font-semibold transition-colors ${skillStyle.bg} ${skillStyle.border} ${skillStyle.text}`}
                        >
                            {skill}
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;