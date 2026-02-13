import React from 'react';
import { Gamepad2, Code2, Users, Cpu, Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const itemVariant = {
    initial: { opacity: 0, x: 10 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] }
  };

  return (
    <section id="about" className="py-32 bg-theme-bg border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-4">
             <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="font-mono text-[10px] tracking-widest uppercase text-gray-400 mb-8"
             >
               The Spark
             </motion.p>
             <div className="overflow-hidden">
                <motion.h2 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
                  viewport={{ once: true }}
                  className="text-5xl font-display font-medium tracking-tighter leading-none mb-12"
                >
                  Creating for<br/>the joy<br/>of it.
                </motion.h2>
             </div>
             
             <motion.div 
               {...itemVariant}
               className="flex items-center gap-6 mt-16 p-6 bg-white border border-gray-100 shadow-sm"
             >
                <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">
                    <Code2 size={16} />
                </div>
                <div>
                    <p className="font-bold text-xs uppercase tracking-wider">Builder</p>
                    <p className="text-[10px] text-gray-400 font-mono">Curiosity Driven Creation</p>
                </div>
             </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-12">
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.4 }}
                 viewport={{ once: true }}
                 className="text-3xl font-display font-light leading-snug text-black"
               >
                 I've always loved making things. My path through service and education taught me that <span className="text-gray-400 italic">empathy and clear communication</span> are as vital as clean code. I'm at my best when I'm solving a hard problem and sharing that solution with others.
               </motion.div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 pt-12 border-t border-gray-100">
                  <motion.div {...itemVariant} className="space-y-3">
                     <div className="flex items-center gap-3 text-black">
                        <Gamepad2 size={16} />
                        <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] font-mono">Game Dev</h4>
                     </div>
                     <p className="text-gray-600 text-sm font-light leading-relaxed">
                        I build engines and worlds. Working in <strong>Unity and Godot</strong>, I handle everything from multiplayer networking to procedural animations.
                     </p>
                  </motion.div>
                  
                  <motion.div {...itemVariant} transition={{ ...itemVariant.transition, delay: 0.05 }} className="space-y-3">
                     <div className="flex items-center gap-3 text-black">
                        <Sparkles size={16} />
                        <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] font-mono">Clean Web</h4>
                     </div>
                     <p className="text-gray-600 text-sm font-light leading-relaxed">
                        I build web tools that solve problems. Focused on <strong>React, Next.js, and Stripe</strong> to create smooth, reliable user experiences.
                     </p>
                  </motion.div>

                  <motion.div {...itemVariant} transition={{ ...itemVariant.transition, delay: 0.1 }} className="space-y-3">
                     <div className="flex items-center gap-3 text-black">
                        <Users size={16} />
                        <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] font-mono">Mentorship</h4>
                     </div>
                     <p className="text-gray-600 text-sm font-light leading-relaxed">
                        Teaching Greek and CS has taught me how to <strong>simplify the complex</strong>. I love helping others find their 'lightbulb' moment.
                     </p>
                  </motion.div>

                  <motion.div {...itemVariant} transition={{ ...itemVariant.transition, delay: 0.15 }} className="space-y-3">
                     <div className="flex items-center gap-3 text-black">
                        <Cpu size={16} />
                        <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] font-mono">CS Theory</h4>
                     </div>
                     <p className="text-gray-600 text-sm font-light leading-relaxed">
                        My Associate of Science in CS gives me the <strong>algorithmic foundation</strong> to build systems that are efficient and well-architected.
                     </p>
                  </motion.div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;