import React from 'react';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS, VOLUNTEERING, AWARDS } from '../constants';
import { Briefcase, GraduationCap, Award, Heart, Trophy, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const TimelineItem: React.FC<{ 
  data: any; 
  index: number; 
  icon: React.ElementType; 
  color: string; 
  align?: 'left' | 'right' 
}> = ({ data, index, icon: Icon, color, align }) => {
  const isEven = index % 2 === 0;
  // On desktop: if align is forced, use it. Otherwise alternate.
  const isLeft = align ? align === 'left' : isEven;

  return (
    <div className={`relative flex items-center justify-between md:justify-center md:gap-16 mb-12 w-full ${isLeft ? 'flex-row-reverse' : ''}`}>
      
      {/* Center Line & Node (Desktop) */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-gray-100 shadow-sm z-10 group-hover:scale-110"
      >
         <Icon size={20} className={color} />
      </motion.div>

      {/* Spacer for the other side */}
      <div className="hidden md:block w-[40%]" />

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -50 : 50, rotate: isLeft ? -2 : 2 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.1 }}
        whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 10 }}}
        className="w-full md:w-[40%] relative group"
      >
        {/* Connector Line (Desktop) */}
        <div 
            className={`hidden md:block absolute top-8 ${isLeft ? '-right-8' : '-left-8'} w-8 border-t-2 border-dashed border-gray-400/30 group-hover:border-theme-primary/50 transition-colors duration-300`} 
        />

        <div className="bg-white/70 backdrop-blur-md p-6 rounded-[24px] shadow-card hover:shadow-card-hover transition-shadow duration-300 relative overflow-hidden border border-white/50">
           
           <div className="flex flex-col mb-4">
              <h3 className="text-xl font-bold text-theme-text font-display">{data.role}</h3>
              <div className="text-lg text-theme-subtext font-medium flex items-center justify-between mt-1">
                 <span>{data.company || data.organization}</span>
              </div>
           </div>

           <div className="flex flex-wrap gap-3 mb-4 text-xs font-medium text-theme-subtext/80 uppercase tracking-wide">
             <span className="flex items-center gap-1 bg-white/50 px-2 py-1 rounded-md border border-gray-100">
                <Calendar size={14} /> {data.period}
             </span>
             <span className="flex items-center gap-1 bg-white/50 px-2 py-1 rounded-md border border-gray-100">
                <MapPin size={14} /> {data.location}
             </span>
           </div>
           
           <ul className="space-y-2">
             {data.description.map((desc: string, i: number) => (
               <li key={i} className="text-theme-text text-sm leading-relaxed pl-3 border-l-2 border-gray-200">
                   {desc}
               </li>
             ))}
           </ul>
        </div>
      </motion.div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* WORK EXPERIENCE TIMELINE */}
        <div className="mb-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-medium text-theme-text inline-flex items-center gap-3">
              <Briefcase className="text-theme-primary" /> Work Experience
            </h2>
          </motion.div>

          {/* Vertical Central Line */}
          <div className="absolute left-8 md:left-1/2 top-20 bottom-0 w-0.5 bg-gradient-to-b from-theme-primary/10 via-theme-primary/40 to-transparent md:-translate-x-1/2 h-full rounded-full" />

          <div className="relative pl-16 md:pl-0">
            {EXPERIENCE.map((job, index) => (
              <TimelineItem 
                key={job.id} 
                data={job} 
                index={index} 
                icon={Briefcase} 
                color="text-theme-primary" 
              />
            ))}
          </div>
        </div>

        {/* VOLUNTEERING TIMELINE */}
        <div className="mb-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-medium text-theme-text inline-flex items-center gap-3">
              <Heart className="text-theme-secondary" /> Volunteering
            </h2>
          </motion.div>

          {/* Vertical Central Line */}
          <div className="absolute left-8 md:left-1/2 top-20 bottom-0 w-0.5 bg-gradient-to-b from-theme-secondary/10 via-theme-secondary/40 to-transparent md:-translate-x-1/2 h-full rounded-full" />

          <div className="relative pl-16 md:pl-0">
             {VOLUNTEERING.map((vol, index) => (
               <TimelineItem 
                 key={vol.id} 
                 data={vol} 
                 index={index} 
                 icon={Heart} 
                 color="text-theme-secondary"
               />
             ))}
          </div>
        </div>

        {/* EDUCATION & CERTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-start">
            
            {/* Education */}
            <motion.div 
                className="flex flex-col h-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
            >
                 <div className="flex items-center gap-4 mb-8">
                    <motion.div 
                      animate={{ rotate: [3, 6, 3] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="p-3 bg-white/80 rounded-xl shadow-sm"
                    >
                        <GraduationCap className="text-theme-primary" size={28} />
                    </motion.div>
                    <h2 className="text-3xl font-display font-medium text-theme-text">Education</h2>
                </div>
                
                <div className="bg-white/70 backdrop-blur-lg p-8 rounded-[32px] shadow-card border-t-4 border-theme-primary hover:shadow-2xl transition-all duration-500 h-full">
                    <div className="relative border-l-2 border-dashed border-gray-300 ml-3 space-y-12 py-2">
                      {EDUCATION.map((edu, idx) => (
                        <div key={idx} className="pl-8 relative">
                          <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-theme-primary shadow-sm"></span>
                          
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                              <div>
                                <h3 className="text-xl font-bold text-theme-text font-display leading-tight">{edu.school}</h3>
                                <div className="text-theme-subtext font-medium mt-1">{edu.degree}</div>
                              </div>
                              <span className="text-xs font-bold uppercase tracking-wider text-white bg-theme-primary px-3 py-1 rounded-full whitespace-nowrap self-start shadow-sm">
                                {edu.period}
                              </span>
                          </div>
                          
                          <ul className="mt-4 space-y-2">
                              {edu.details.map((detail, i) => (
                                  <li key={i} className="text-sm text-theme-subtext flex items-start gap-3">
                                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-theme-primary/50 flex-shrink-0"></span>
                                      <span className="leading-relaxed">{detail}</span>
                                  </li>
                              ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                </div>
            </motion.div>

            {/* Certifications */}
            <motion.div 
                className="flex flex-col h-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
            >
                <div className="flex items-center gap-4 mb-8">
                    <motion.div 
                      animate={{ rotate: [-3, -6, -3] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="p-3 bg-white/80 rounded-xl shadow-sm"
                    >
                        <Award className="text-theme-accent" size={28} />
                    </motion.div>
                    <h2 className="text-3xl font-display font-medium text-theme-text">Certificates</h2>
                </div>
                
                <div className="bg-white/70 backdrop-blur-lg p-8 rounded-[32px] shadow-card border-t-4 border-theme-accent hover:shadow-2xl transition-all duration-500 h-full">
                    <div className="grid grid-cols-1 gap-4">
                        {CERTIFICATIONS.map((cert, idx) => (
                            <motion.div 
                              key={idx}
                              whileHover={{ x: 10, scale: 1.02, backgroundColor: 'rgba(245, 158, 11, 0.1)' }}
                              transition={{ type: "spring", stiffness: 400, damping: 15 }}
                              className="flex justify-between items-center p-4 rounded-2xl border border-gray-100/50 bg-white/50 hover:border-theme-accent/30 cursor-default"
                            >
                                <div className="pr-4">
                                    <h4 className="font-bold text-theme-text text-sm md:text-base leading-tight font-display">{cert.name}</h4>
                                    <p className="text-xs font-medium text-theme-subtext mt-1 uppercase tracking-wide">{cert.issuer}</p>
                                </div>
                                <div className="h-8 w-8 rounded-full bg-theme-accent/10 flex items-center justify-center text-theme-accent flex-shrink-0">
                                  <Award size={16} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Notable Awards */}
        <div>
            <div className="flex items-center justify-center gap-4 mb-16">
                <div className="p-3 bg-white/80 rounded-full shadow-sm animate-bounce">
                    <Trophy className="text-theme-accent" size={28} />
                </div>
                <h2 className="text-4xl font-display font-medium text-theme-text">Notable Awards</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {AWARDS.map((award, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, y: -10 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 300, damping: 15, delay: index * 0.1 }}
                        className="bg-gradient-to-br from-white/90 to-gray-50/80 backdrop-blur p-6 rounded-[24px] shadow-sm border border-white flex items-start gap-4 relative overflow-hidden group"
                    >
                         <div className="absolute top-0 right-0 w-24 h-24 bg-theme-accent/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />
                         
                         <div className="p-3 bg-white shadow-md text-theme-accent rounded-2xl z-10">
                            <Trophy size={24} />
                         </div>
                         <div className="z-10">
                             <h3 className="font-bold text-lg text-theme-text font-display group-hover:text-theme-primary transition-colors">{award.title}</h3>
                             <p className="text-xs font-bold text-theme-subtext uppercase tracking-wide mb-2">{award.issuer}</p>
                             <p className="text-theme-subtext text-sm">{award.description}</p>
                         </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;