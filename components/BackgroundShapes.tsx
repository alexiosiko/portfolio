import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundShapes: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Dynamic background color transitions based on scroll position
  // 0% (Hero) -> White
  // 25% (About) -> Very Light Indigo
  // 50% (Projects) -> Very Light Cyan/Slate
  // 75% (Experience) -> Very Light Fuchsia
  // 100% (Contact) -> Very Light Amber
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      '#ffffff', 
      '#eef2ff', 
      '#ecfeff', 
      '#fdf4ff', 
      '#fffbeb'  
    ]
  );

  return (
    <motion.div 
      style={{ backgroundColor }}
      className="fixed inset-0 overflow-hidden pointer-events-none -z-50 transition-colors duration-1000"
    >
      {/* Large Gradient Blob 1 - Top Left - Indigo */}
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
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-theme-primary/10 blur-[100px]"
      />

      {/* Large Gradient Blob 2 - Middle Right - Cyan */}
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
        className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-theme-success/10 blur-[120px]"
      />

      {/* Large Gradient Blob 3 - Bottom Left - Fuchsia */}
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
        className="absolute bottom-[10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-theme-secondary/10 blur-[100px]"
      />

       {/* Large Gradient Blob 4 - Bottom Right - Amber */}
       <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-[-20%] right-[10%] w-[60vw] h-[60vw] rounded-full bg-theme-accent/5 blur-[120px]"
      />
      
      {/* Decorative Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </motion.div>
  );
};

export default BackgroundShapes;