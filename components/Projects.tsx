import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-theme-text mb-4">
             Featured <span className="text-theme-primary">Projects</span>
          </h2>
          <p className="text-theme-subtext text-xl max-w-2xl mx-auto">
            A showcase of games, applications, and technical solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 20,
                delay: index * 0.1 
              }}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="bg-white rounded-[16px] overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:border-theme-primary/30 flex flex-col h-full group transition-colors duration-300"
              >
                {/* Image */}
                <div className="h-52 overflow-hidden bg-slate-100 relative border-b border-slate-100">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                       e.currentTarget.src = `https://placehold.co/600x400/F1F5F9/334155?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow relative z-10">
                  <div className="flex justify-between items-start mb-3">
                     <h3 className="text-xl font-display font-bold text-theme-text group-hover:text-theme-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-theme-subtext mb-6 line-clamp-3 leading-relaxed text-sm flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 4).map((tag, i) => {
                      // Tech/Manly tag styles
                      const styles = [
                          'bg-blue-50 text-blue-700 border-blue-200',
                          'bg-sky-50 text-sky-700 border-sky-200',
                          'bg-slate-100 text-slate-700 border-slate-200',
                          'bg-indigo-50 text-indigo-700 border-indigo-200',
                      ];
                      return (
                          <span 
                          key={tag} 
                          className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${styles[i % styles.length]}`}
                          >
                          {tag}
                          </span>
                      );
                    })}
                  </div>

                  <div className="pt-5 border-t border-slate-100 mt-auto">
                     {project.githubUrl && (
                      <a 
                          href={project.githubUrl}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full"
                      >
                          <motion.button 
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ type: "spring", stiffness: 400, damping: 20 }}
                              className="w-full py-2.5 rounded-lg bg-slate-900 text-white font-medium text-sm hover:bg-blue-600 transition-colors shadow-sm flex items-center justify-center gap-2 group/btn"
                          >
                              <Github size={16} />
                              View Project 
                              <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform opacity-70" />
                          </motion.button>
                      </a>
                     )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;