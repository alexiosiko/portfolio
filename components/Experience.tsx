import React from 'react';
import { EXPERIENCE, VOLUNTEERING, EDUCATION, CERTIFICATIONS } from '../constants';
import { motion } from 'framer-motion';
import { Briefcase, HeartHandshake, GraduationCap, Award, ShieldCheck } from 'lucide-react';

const ExperienceSection: React.FC<{ title: string; icon: React.ReactNode; items: any[] }> = ({ title, icon, items }) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-20 border-b border-gray-200 last:border-0">
    <div className="lg:col-span-3">
      <div className="sticky top-24 flex items-center gap-3 text-gray-400">
        {icon}
        <h3 className="text-sm font-mono font-bold tracking-widest uppercase">{title}</h3>
      </div>
    </div>
    <div className="lg:col-span-9 space-y-16">
      {items.map((item, idx) => (
        <motion.div 
          key={idx} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
          className="group"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
             <h4 className="text-2xl font-display font-medium text-black">{item.role || item.school || item.name}</h4>
             <span className="font-mono text-xs text-gray-500 uppercase tracking-wider">{item.period || item.date}</span>
          </div>
          
          <div className="mb-6 text-base font-medium text-gray-600 font-sans">
            {item.company || item.organization || item.degree || item.issuer}
          </div>

          {(item.description || item.details) && (
             <ul className="space-y-3">
               {(item.description || item.details || []).map((d: string, i: number) => (
                 <li key={i} className="text-theme-subtext text-base leading-relaxed pl-0 max-w-2xl font-light">
                   {d}
                 </li>
               ))}
             </ul>
          )}
        </motion.div>
      ))}
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-theme-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ExperienceSection 
            title="Experience" 
            icon={<Briefcase size={16} />}
            items={EXPERIENCE} 
        />
        <ExperienceSection 
            title="Volunteering" 
            icon={<HeartHandshake size={16} />}
            items={VOLUNTEERING} 
        />
        <ExperienceSection 
            title="Education" 
            icon={<GraduationCap size={16} />}
            items={EDUCATION} 
        />
        
        {/* Compact Certs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-20">
          <div className="lg:col-span-3">
             <div className="sticky top-24 flex items-center gap-3 text-gray-400">
                <ShieldCheck size={16} />
                <h3 className="text-sm font-mono font-bold tracking-widest uppercase">Certifications</h3>
             </div>
          </div>
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                {CERTIFICATIONS.map((cert, idx) => (
                    <motion.div 
                        key={idx} 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="border-l border-gray-300 pl-6 py-1"
                    >
                        <p className="font-semibold text-lg font-display text-gray-900 leading-snug">{cert.name}</p>
                        <p className="font-mono text-[10px] text-gray-400 mt-2 uppercase tracking-wider">{cert.issuer}</p>
                    </motion.div>
                ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;