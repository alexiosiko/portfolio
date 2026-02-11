import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Users, Gamepad2, Layers, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-theme-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3">
             <h2 className="text-5xl font-display font-medium tracking-tighter leading-none sticky top-24">
               ABOUT<br/>THE<br/>DEV.
             </h2>
          </div>

          <div className="lg:w-2/3">
            <div className="prose prose-xl prose-stone max-w-none font-sans">
               <p className="text-3xl font-display font-medium leading-tight mb-8 text-black">
                 More than just code. <br/>
                 <span className="text-gray-400">I bring people skills to technical problems.</span>
               </p>
               
               <div className="space-y-6 text-lg text-theme-subtext font-light leading-relaxed mb-16">
                  {PERSONAL_INFO.bio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
               </div>

               {/* Skills Focus Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-black">
                  
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-sm">
                        <Users size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="font-display font-bold text-lg mb-2">Customer Service & Leadership</h3>
                        <p className="text-sm text-theme-subtext leading-relaxed">
                            5+ years leading teams and serving customers. I know how to communicate, manage conflict, and prioritize user needs effectively.
                        </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-gray-100 text-black flex items-center justify-center rounded-sm">
                        <Gamepad2 size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="font-display font-bold text-lg mb-2">Game Development</h3>
                        <p className="text-sm text-theme-subtext leading-relaxed">
                            Passionate about creating immersive experiences using <strong>Unity</strong> and <strong>Godot</strong>. I handle everything from game logic to pixel art.
                        </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-gray-100 text-black flex items-center justify-center rounded-sm">
                        <Layers size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="font-display font-bold text-lg mb-2">Full Stack Web</h3>
                        <p className="text-sm text-theme-subtext leading-relaxed">
                            Building scalable applications with React, Next.js, and Node. I focus on clean UI and efficient backend architecture.
                        </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-gray-100 text-black flex items-center justify-center rounded-sm">
                        <Cpu size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="font-display font-bold text-lg mb-2">Computer Science</h3>
                        <p className="text-sm text-theme-subtext leading-relaxed">
                            Strong academic foundation in algorithms, data structures, and object-oriented programming (Associate of Science).
                        </p>
                    </div>
                  </div>

               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;