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
  const baseStyles = "px-8 py-3 rounded-full font-medium font-display tracking-normal flex items-center justify-center gap-2 disabled:opacity-50 text-base shadow-sm";
  
  const variants = {
    primary: "bg-theme-primary text-white border-transparent",
    secondary: "bg-theme-primary/10 text-theme-primary border-transparent shadow-none",
    outline: "bg-white border border-gray-300 text-theme-primary hover:bg-theme-surface hover:border-theme-primary",
    ghost: "bg-transparent text-theme-subtext hover:text-theme-primary hover:bg-theme-primary/5 shadow-none"
  };

  return (
    <motion.button 
      whileHover={{ 
        scale: 1.05, 
        transition: { type: "spring", stiffness: 400, damping: 10 } 
      }}
      whileTap={{ 
        scale: 0.95, 
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