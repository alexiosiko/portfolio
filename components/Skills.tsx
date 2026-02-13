import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <p className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-4">Core Competencies</p>
          <h2 className="text-5xl font-display font-medium tracking-tight">Technical Toolkit</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-100">
          {SKILLS.map((category, idx) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="py-12 border-b lg:border-b-0 border-gray-100 lg:pr-8 last:border-0"
            >
              <h3 className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">
                 {category.name}
              </h3>
              
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-lg font-display font-medium text-black">
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