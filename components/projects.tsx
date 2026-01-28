import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-medium text-theme-text mb-4">My Projects</h2>
          <p className="text-theme-subtext text-xl max-w-2xl mx-auto">
            A collection of games, apps, and tools I've built.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring",
                stiffness: 220,
                damping: 20,
                delay: index * 0.1 
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 15 } 
              }}
              className="bg-white/80 backdrop-blur-sm rounded-[28px] overflow-hidden shadow-card hover:shadow-2xl flex flex-col h-full border border-white hover:border-theme-primary/20 backface-hidden group"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden bg-gray-100 relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
                  onError={(e) => {
                     e.currentTarget.src = `https://placehold.co/600x400/F1F3F4/4F46E5?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-theme-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Details <ExternalLink size={16} />
                    </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow relative z-10">
                <div className="flex justify-between items-start mb-4">
                   <h3 className="text-2xl font-display font-medium text-theme-text group-hover:text-theme-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-theme-subtext mb-6 line-clamp-3 leading-relaxed text-base flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-white/50 text-theme-subtext rounded-full text-xs font-medium border border-gray-200 group-hover:bg-theme-primary/10 group-hover:text-theme-primary group-hover:border-theme-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-100/50 mt-auto">
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
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className="w-full py-3 rounded-xl bg-gray-50 text-theme-text font-medium text-sm hover:bg-theme-primary hover:text-white transition-colors shadow-sm flex items-center justify-center gap-2 group/btn"
                        >
                            Visit Project 
                            <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </motion.button>
                    </a>
                   )}
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