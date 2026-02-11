import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-gray-100 pb-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-display font-medium tracking-tight"
          >
            Selected Work
          </motion.h2>
          <p className="font-mono text-xs tracking-widest uppercase mb-1 text-gray-400">
            Archive [{PROJECTS.length}]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              className="group flex flex-col h-full cursor-pointer"
            >
              {/* Image Container */}
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="block mb-4 overflow-hidden bg-gray-50 relative aspect-video border border-gray-100">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-10" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
                  onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/600x400/eeeeee/111111?text=${encodeURIComponent(project.title)}`;
                  }}
                />
              </a>

              {/* Text Content */}
              <div className="flex flex-col flex-grow">
                 <div className="flex justify-between items-start mb-2">
                    <h3 className="text-base font-display font-bold leading-tight group-hover:underline decoration-1 underline-offset-4">
                      {project.title}
                    </h3>
                    <ArrowUpRight size={16} className="text-gray-300 group-hover:text-black transition-colors duration-300" />
                 </div>

                 <p className="text-xs text-gray-500 leading-relaxed mb-4 font-sans line-clamp-4">
                   {project.description}
                 </p>

                 <div className="mt-auto">
                   <div className="flex flex-wrap gap-x-2 gap-y-1">
                     {project.tags.slice(0, 3).map(tag => (
                       <span key={tag} className="text-[9px] font-mono uppercase tracking-wider text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded-sm">
                         {tag}
                       </span>
                     ))}
                   </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;