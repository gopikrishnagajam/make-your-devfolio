import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import StarsCanvas from './components/StarBackground';

import Education from './sections/Education';
import Skills from './sections/Skills';

function App() {
  return (
    <div className="bg-[#030014] min-h-screen w-full overflow-x-hidden relative">
      <StarsCanvas />
      <Navbar />
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        <section id="education" className="min-h-screen text-white">
          <Education />
        </section>
        <section id="experience" className="min-h-screen text-white">
          <Experience />
        </section>
        <section id="skills" className="min-h-screen text-white">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen text-white">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen text-white">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
