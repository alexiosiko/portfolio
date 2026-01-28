import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import BackgroundShapes from './components/BackgroundShapes';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-theme-text font-sans selection:bg-theme-primary/30 selection:text-theme-primary relative overflow-x-hidden">
      <BackgroundShapes />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          {/* Experience contains Work, Volunteering, Education, Certs */}
          <Experience />
          {/* Skills placed under Education/Certs as requested */}
          <Skills />
        </main>
        <Contact />
      </div>
    </div>
  );
};

export default App;