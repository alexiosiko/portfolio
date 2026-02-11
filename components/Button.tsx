import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-4 font-mono text-sm tracking-wide border border-black transition-colors duration-200 uppercase";
  
  const variants = {
    primary: "bg-black text-white hover:bg-theme-subtext border-black",
    secondary: "bg-white text-black hover:bg-gray-50",
    outline: "bg-transparent border-black text-black hover:bg-black hover:text-white",
    ghost: "border-transparent bg-transparent hover:bg-gray-100"
  };

  return (
    <motion.button 
      whileHover={{ y: -2 }}
      whileTap={{ y: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;