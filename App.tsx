import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-theme-bg text-theme-text font-sans selection:bg-black selection:text-white relative">
      <div className="relative z-10">
        <Navbar />
        <main className="max-w-screen-2xl mx-auto bg-white">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
        </main>
        <Contact />
      </div>
    </div>
  );
};

export default App;