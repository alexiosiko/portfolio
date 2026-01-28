import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }}
      className={`fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm border-b ${scrolled ? 'py-2 border-gray-200 shadow-sm' : 'py-4 border-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo - Theme Style */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="font-display font-medium text-xl text-theme-subtext tracking-tight hover:text-theme-primary transition-colors block"
            >
              Alexi<span className="font-bold text-theme-text">Ikonomou</span>
            </motion.span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="text-theme-subtext hover:text-theme-text hover:bg-theme-surface px-4 py-2 rounded-full text-sm font-medium transition-colors font-display"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="ml-4 px-6 py-2 rounded-full bg-theme-primary text-white hover:bg-indigo-700 transition-colors text-sm font-medium shadow-sm hover:shadow-md"
              >
                Contact
              </motion.a>
          </div>
          
          {/* Mobile Button */}
          <div className="flex md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center justify-center p-2 rounded-full text-theme-subtext hover:bg-theme-surface focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="md:hidden absolute top-full left-0 w-full px-0 mt-0 overflow-hidden bg-white border-b border-gray-100 shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="text-theme-subtext hover:text-theme-primary hover:bg-theme-surface block px-4 py-3 rounded-full text-base font-medium font-display"
                >
                  {link.name}
                </motion.a>
              ))}
               <motion.a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="text-white bg-theme-primary font-medium block px-4 py-3 rounded-full text-base mt-4 text-center"
                >
                  Contact Me
                </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;