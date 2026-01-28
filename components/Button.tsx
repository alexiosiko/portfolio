import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-lg font-medium font-display tracking-normal flex items-center justify-center gap-2 disabled:opacity-50 text-base shadow-sm";
  
  const variants = {
    primary: "bg-theme-primary text-white border-transparent hover:bg-blue-700 transition-colors",
    secondary: "bg-sky-100 text-sky-700 border-transparent shadow-none hover:bg-sky-200",
    outline: "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900",
    ghost: "bg-transparent text-slate-600 hover:text-theme-primary hover:bg-slate-50 shadow-none"
  };

  return (
    <motion.button 
      whileHover={{ 
        scale: 1.02, 
        transition: { type: "spring", stiffness: 400, damping: 10 } 
      }}
      whileTap={{ 
        scale: 0.98, 
        transition: { type: "spring", stiffness: 400, damping: 10 } 
      }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;