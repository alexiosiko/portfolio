import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-black pb-8 overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display font-bold tracking-tighter"
          >
            SOME PROJECTS
          </motion.h2>
          <span className="font-mono text-[10px] text-gray-400 uppercase tracking-[0.4em] mt-4 md:mt-0">The Archive</span>
        </div>

        <div className="space-y-40">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Project Image */}
              <div className="lg:col-span-7 overflow-hidden bg-gray-50 border border-gray-100 aspect-video relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                  onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/1200x800/111111/ffffff?text=${encodeURIComponent(project.title)}`;
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[10px] font-bold text-black/20">0{index + 1}</span>
                  <div className="h-px flex-1 bg-black/5"></div>
                </div>
                
                <h3 className="text-4xl font-display font-bold mb-4 tracking-tight leading-none group-hover:text-gray-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-lg text-theme-subtext font-light leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono border border-black/10 bg-gray-50 px-3 py-1 text-gray-400 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] group/link"
                >
                  <span className="pb-1 border-b border-black">Open Project</span> 
                  <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;