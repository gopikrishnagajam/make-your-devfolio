import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Capabilities from './sections/Capabilities';
import FeaturedWork from './sections/FeaturedWork';
import Lab from './sections/Lab';
import Principles from './sections/Principles';
import Journey from './sections/Journey';
import Contact from './sections/Contact';
import StarsCanvas from './components/StarBackground';

function App() {
  return (
    <div className="bg-[#030014] min-h-screen w-full overflow-x-hidden relative">
      <StarsCanvas />
      <Navbar />
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        <section id="capabilities" className="text-white">
          <Capabilities />
        </section>
        <section id="work" className="text-white">
          <FeaturedWork />
        </section>
        <section id="lab" className="text-white">
          <Lab />
        </section>
        <section id="principles" className="text-white">
          <Principles />
        </section>
        <section id="journey" className="text-white">
          <Journey />
        </section>
        <section id="contact" className="text-white">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
