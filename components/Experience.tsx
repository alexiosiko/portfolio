import React from 'react';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS, VOLUNTEERING, AWARDS } from '../constants';
import { Briefcase, GraduationCap, Award, Heart, Trophy, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const TimelineItem: React.FC<{ 
  data: any; 
  index: number; 
  icon: React.ElementType; 
  color: string;
  borderColor: string; 
  align?: 'left' | 'right' 
}> = ({ data, index, icon: Icon, color, borderColor, align }) => {
  const isEven = index % 2 === 0;
  const isLeft = align ? align === 'left' : isEven;

  return (
    <div className={`relative flex items-center justify-between md:justify-center md:gap-16 mb-12 w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Center Icon Node */}
      {/* Position: Mobile at -left-8 (relative to pl-16 content), Desktop at left-1/2 */}
      <motion.div 
        initial={{ scale: 0, x: "-50%", y: "-50%" }}
        whileInView={{ scale: 1, x: "-50%", y: "-50%" }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.1 }}
        className={`flex absolute -left-8 md:left-1/2 top-1/2 items-center justify-center w-12 h-12 rounded-full bg-white border-4 ${borderColor.replace('bg-', 'border-').replace('/10', '/30')} shadow-sm z-10`}
      >
         <Icon size={20} className={color} />
      </motion.div>

      {/* Spacer for the other side (Desktop only) */}
      <div className="hidden md:block w-[40%]" />

      {/* Content Card Wrapper - Entrance Animation */}
      <motion.div 
        initial={{ x: isLeft ? -50 : 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="w-full md:w-[40%] relative"
      >
        {/* Connector Line (Desktop) */}
        <div 
            className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${isLeft ? '-right-8' : '-left-8'} w-8 border-t-2 border-dashed border-slate-300 transition-colors duration-300`} 
        />

        {/* Card Content - Hover Animation Separated */}
        <motion.div 
           whileHover={{ scale: 1.02 }}
           transition={{ type: "spring", stiffness: 400, damping: 15 }}
           className="bg-white/90 p-6 rounded-[16px] shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden border border-slate-200"
        >
           <div className="flex flex-col mb-4">
              <h3 className="text-lg font-bold text-theme-text font-display">{data.role}</h3>
              <div className="text-base text-theme-subtext font-medium flex items-center justify-between mt-1">
                 <span>{data.company || data.organization}</span>
              </div>
           </div>

           <div className="flex flex-wrap gap-3 mb-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">
             <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md border border-slate-200">
                <Calendar size={14} /> {data.period}
             </span>
             <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md border border-slate-200">
                <MapPin size={14} /> {data.location}
             </span>
           </div>
           
           <ul className="space-y-2">
             {data.description.map((desc: string, i: number) => (
               <li key={i} className="text-theme-text text-sm leading-relaxed pl-3 border-l-2 border-slate-200">
                   {desc}
               </li>
             ))}
           </ul>
        </motion.div>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-theme-text inline-flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-700">
                <Briefcase /> 
              </div>
              <span>Professional Experience</span>
            </h2>
          </motion.div>

          {/* Vertical Central Line */}
          {/* Position: Mobile left-8, Desktop left-1/2. Always centered via translate-x-1/2 */}
          <div className="absolute left-8 md:left-1/2 top-32 bottom-8 w-0.5 bg-slate-200 -translate-x-1/2 rounded-full" />

          <div className="relative pl-16 md:pl-0">
            {EXPERIENCE.map((job, index) => (
              <TimelineItem 
                key={job.id} 
                data={job} 
                index={index} 
                icon={Briefcase} 
                color="text-theme-primary" 
                borderColor="border-theme-primary"
              />
            ))}
          </div>
        </div>

        {/* VOLUNTEERING TIMELINE */}
        <div className="mb-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-theme-text inline-flex items-center gap-3">
              <div className="p-3 bg-sky-100 rounded-lg text-sky-700">
                 <Heart /> 
              </div>
              <span>Volunteering</span>
            </h2>
          </motion.div>

          {/* Vertical Central Line */}
          <div className="absolute left-8 md:left-1/2 top-32 bottom-8 w-0.5 bg-slate-200 -translate-x-1/2 rounded-full" />

          <div className="relative pl-16 md:pl-0">
             {VOLUNTEERING.map((vol, index) => (
               <TimelineItem 
                 key={vol.id} 
                 data={vol} 
                 index={index} 
                 icon={Heart} 
                 color="text-sky-600"
                 borderColor="border-sky-500"
               />
             ))}
          </div>
        </div>

        {/* EDUCATION & CERTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-start">
            
            {/* Education */}
            <div className="flex flex-col h-full">
                 <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="flex items-center gap-4 mb-8"
                 >
                    <div className="p-3 bg-slate-100 rounded-lg">
                        <GraduationCap className="text-slate-800" size={28} />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-theme-text">Education</h2>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
                    className="bg-white p-8 rounded-[20px] shadow-sm border border-slate-200 h-full"
                >
                    <div className="relative border-l-2 border-dashed border-slate-300 ml-3 space-y-12 py-2">
                      {EDUCATION.map((edu, idx) => (
                        <div key={idx} className="pl-8 relative">
                          <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-slate-700 shadow-sm"></span>
                          
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                              <div>
                                <h3 className="text-xl font-bold text-theme-text font-display leading-tight">{edu.school}</h3>
                                <div className="text-theme-subtext font-medium mt-1">{edu.degree}</div>
                              </div>
                              <span className="text-xs font-bold uppercase tracking-wider text-white bg-slate-800 px-3 py-1 rounded-md whitespace-nowrap self-start">
                                {edu.period}
                              </span>
                          </div>
                          
                          <ul className="mt-4 space-y-2">
                              {edu.details.map((detail, i) => (
                                  <li key={i} className="text-sm text-theme-subtext flex items-start gap-3">
                                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0"></span>
                                      <span className="leading-relaxed">{detail}</span>
                                  </li>
                              ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                </motion.div>
            </div>

            {/* Certifications */}
            <div className="flex flex-col h-full">
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="p-3 bg-slate-100 rounded-lg">
                        <Award className="text-slate-800" size={28} />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-theme-text">Certificates</h2>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
                    className="bg-white p-8 rounded-[20px] shadow-sm border border-slate-200 h-full"
                >
                    <div className="grid grid-cols-1 gap-4">
                        {CERTIFICATIONS.map((cert, idx) => (
                            <motion.div 
                              key={idx}
                              whileHover={{ x: 5, backgroundColor: '#f8fafc' }}
                              transition={{ type: "spring", stiffness: 400, damping: 15 }}
                              className="flex justify-between items-center p-4 rounded-lg border border-slate-100 bg-slate-50 hover:border-blue-200 cursor-default"
                            >
                                <div className="pr-4">
                                    <h4 className="font-bold text-theme-text text-sm md:text-base leading-tight font-display">{cert.name}</h4>
                                    <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wide">{cert.issuer}</p>
                                </div>
                                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                                  <Award size={16} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>

        {/* Notable Awards */}
        <div>
            <div className="flex items-center justify-center gap-4 mb-16">
                <div className="p-3 bg-slate-100 rounded-full shadow-sm">
                    <Trophy className="text-theme-primary" size={28} />
                </div>
                <h2 className="text-4xl font-display font-bold text-theme-text">Notable Awards</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {AWARDS.map((award, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.02 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 400, damping: 20, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-[16px] shadow-sm border border-slate-200 flex items-start gap-4 relative overflow-hidden group hover:border-blue-300"
                    >
                         <div className="p-3 bg-slate-50 shadow-inner text-blue-600 rounded-xl z-10 border border-slate-100">
                            <Trophy size={24} />
                         </div>
                         <div className="z-10">
                             <h3 className="font-bold text-lg text-theme-text font-display">{award.title}</h3>
                             <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">{award.issuer}</p>
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