import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';
import { Code2, Gamepad2, Database, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (index: number) => {
      switch(index) {
          case 0: return <Code2 size={24} className="text-gray-400 mb-4" />;
          case 1: return <Gamepad2 size={24} className="text-gray-400 mb-4" />;
          case 2: return <Database size={24} className="text-gray-400 mb-4" />;
          case 3: return <Users size={24} className="text-gray-400 mb-4" />;
          default: return <Code2 size={24} className="text-gray-400 mb-4" />;
      }
  }

  return (
    <section id="skills" className="py-32 bg-theme-bg border-b border-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-20"
        >
          Technical Toolkit
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-300">
          {SKILLS.map((category, idx) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-theme-bg p-8 border-b border-r border-gray-300 hover:bg-white transition-colors duration-300 group"
            >
              <div className="flex justify-between items-start">
                  {getIcon(idx)}
                  <span className="font-mono text-[10px] text-gray-300">0{idx + 1}</span>
              </div>

              <h3 className="font-mono text-xs font-bold text-black uppercase tracking-widest mb-6 group-hover:text-blue-600 transition-colors">
                 {category.name}
              </h3>
              
              <ul className="flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm font-medium font-sans text-theme-text flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;