import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#projects' },
    { name: 'Toolkit', href: '#skills' },
  ];

  return (
    <nav className={`sticky top-0 w-full z-50 bg-theme-bg/90 backdrop-blur-md transition-all duration-300 ${scrolled ? 'border-b border-gray-200' : 'border-b border-transparent'}`}>
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer" 
            onClick={() => window.scrollTo(0,0)}
          >
            <span className="font-display font-bold text-xl tracking-tight text-black">
              ALEXI IKONOMOU
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-mono font-medium text-gray-500 hover:text-black transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="ml-4 px-6 py-3 bg-black text-white font-mono text-xs font-bold hover:bg-gray-800 transition-colors uppercase tracking-wide"
              >
                Contact
              </a>
          </div>
          
          {/* Mobile Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-black hover:text-gray-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 top-20 bg-theme-bg z-40 flex flex-col p-8"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-3xl font-medium text-black"
                >
                  {link.name}
                </a>
              ))}
               <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-8 py-4 border border-black text-black text-center font-mono font-bold uppercase"
                >
                  Get in Touch
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;