import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundShapes: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Dynamic background color transitions - Cool, professional tones
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      '#ffffff',   // Home
      '#f0f9ff',   // About - Sky 50
      '#f8fafc',   // Projects - Slate 50
      '#eff6ff',   // Skills - Blue 50
      '#f1f5f9',   // Experience - Slate 100
      '#ecfeff'    // Contact - Cyan 50
    ]
  );

  return (
    <motion.div 
      style={{ backgroundColor }}
      className="fixed inset-0 overflow-hidden pointer-events-none -z-50 transition-colors duration-1000"
    >
      {/* Blob 1: Royal Blue - Top Left */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-theme-primary/15 blur-[100px]"
      />

      {/* Blob 2: Cyan/Teal - Middle Right */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-theme-secondary/15 blur-[120px]"
      />

      {/* Blob 3: Indigo/Slate - Bottom Left */}
      <motion.div
        animate={{
          x: [0, 70, 0],
          y: [0, -50, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute bottom-[30%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-theme-indigo/15 blur-[100px]"
      />

       {/* Blob 4: Slate - Bottom Right */}
       <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-[-10%] right-[5%] w-[60vw] h-[60vw] rounded-full bg-theme-slate/15 blur-[120px]"
      />

      {/* Blob 5: Center Deep Blue accent */}
      <motion.div
        animate={{
           x: [-100, 100, -100],
           y: [-100, 100, -100],
        }}
        transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
        }}
        className="absolute top-[50%] left-[50%] w-[30vw] h-[30vw] rounded-full bg-theme-blue/10 blur-[90px]"
      />
      
      {/* Decorative Grid Pattern Overlay - Slightly stronger for tech feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </motion.div>
  );
};

export default BackgroundShapes;