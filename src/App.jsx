import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    // Top level GSAP context for the whole app
    const ctx = gsap.context(() => {
      // Any global animations can go here
    }, appRef);

    return () => ctx.revert(); // clean up all animations
  }, []);

  return (
    <div ref={appRef} className="relative min-h-screen font-jakarta bg-nura-cream text-nura-charcoal selection:bg-nura-moss selection:text-nura-cream">
      {/* Global CSS Noise Overlay */}
      <div className="noise-overlay fixed inset-0 pointer-events-none z-[9999] opacity-[0.05]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-50">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <Navbar />

      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
      </main>

      <Footer />
    </div>
  );
}

export default App;
