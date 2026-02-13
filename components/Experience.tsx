import React from 'react';
import { EXPERIENCE, VOLUNTEERING, EDUCATION, CERTIFICATIONS } from '../constants';
import { motion } from 'framer-motion';
import { Briefcase, HeartHandshake, GraduationCap, ShieldCheck } from 'lucide-react';

const ExperienceSection: React.FC<{ title: string; icon: React.ReactNode; items: any[] }> = ({ title, icon, items }) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-20 border-b border-gray-100 last:border-0">
    <div className="lg:col-span-3">
      <div className="sticky top-24 flex items-center gap-3 text-black">
        {icon}
        <h3 className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase">{title}</h3>
      </div>
    </div>
    <div className="lg:col-span-9 space-y-20">
      {items.map((item, idx) => (
        <motion.div 
          key={idx} 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.19, 1, 0.22, 1] }}
          className="group"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4 mb-4">
             <h4 className="text-3xl font-display font-bold text-black tracking-tight">{item.role || item.school || item.name}</h4>
             <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest border-l border-gray-200 pl-4">{item.period || item.date}</span>
          </div>
          
          <div className="mb-6 text-lg font-medium text-gray-500 font-sans italic">
            {item.company || item.organization || item.degree || item.issuer}
          </div>

          {(item.description || item.details) && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {(item.description || item.details || []).map((d: string, i: number) => (
                 <div key={i} className="text-theme-subtext text-base leading-relaxed font-light flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-black/10 mt-2 shrink-0"></div>
                   <span>{d}</span>
                 </div>
               ))}
             </div>
          )}
        </motion.div>
      ))}
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ExperienceSection 
            title="History" 
            icon={<Briefcase size={14} />}
            items={EXPERIENCE} 
        />
        <ExperienceSection 
            title="Academic" 
            icon={<GraduationCap size={14} />}
            items={EDUCATION} 
        />
        <ExperienceSection 
            title="Service" 
            icon={<HeartHandshake size={14} />}
            items={VOLUNTEERING} 
        />
        
        {/* Compact Certs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-24">
          <div className="lg:col-span-3">
             <div className="sticky top-24 flex items-center gap-3 text-black">
                <ShieldCheck size={14} />
                <h3 className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase">Certs</h3>
             </div>
          </div>
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                {CERTIFICATIONS.map((cert, idx) => (
                    <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        className="group border-b border-gray-100 pb-8 hover:border-black transition-colors"
                    >
                        <p className="font-bold text-xl font-display text-gray-900 leading-tight mb-2">{cert.name}</p>
                        <p className="font-mono text-[9px] text-gray-400 uppercase tracking-widest">{cert.issuer} / {cert.date}</p>
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