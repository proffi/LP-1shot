import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// V2 Components
import Preloader from './components/Preloader';
import Watermark from './components/Watermark';
import ExitIntentOverlay from './components/ExitIntentOverlay';
import StickyMobileCTA from './components/StickyMobileCTA';

// Section Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Distinction from './components/Distinction';
import ProblemAgitation from './components/ProblemAgitation';
import SolutionReveal from './components/SolutionReveal';
import BooksShowcase from './components/BooksShowcase';
import ProcessTimeline from './components/ProcessTimeline';
import Philosophy from './components/Philosophy';
import ContentPreview from './components/ContentPreview';
import ComparisonTable from './components/ComparisonTable';
import FaqAndFooter from './components/FaqAndFooter';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    // Console Easter Eggs
    console.log("%c369 | φ | ∞", "color: #C9A961; font-family: monospace; font-size: 16px;");
    console.log("%cЧислата не са случайни. Нищо тук не е случайно.", "color: #8A8A8A; font-family: monospace; font-size: 12px;");

    const ctx = gsap.context(() => {
      // Custom Scroll Indicator Logic (Golden line on the right)
      gsap.to(scrollIndicatorRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0,
          onUpdate: (self) => {
            // At 61.8% scroll depth (φ), flash brighter gold
            if (self.progress >= 0.617 && self.progress <= 0.619) {
              gsap.to(scrollIndicatorRef.current, { backgroundColor: "#FFD700", duration: 0.1, yoyo: true, repeat: 1 });
            }
          }
        }
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef} className="relative min-h-screen bg-[#000000] text-rt-cream overflow-x-hidden">
      {/* GLOBAL MIRROR CHAMBER BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mirror-parallax">
        {/* Left Geometry (The Old Model - Silver, Blurred, Incomplete) */}
        <div className="absolute top-[20%] left-[5%] w-[30vw] h-[60vh] opacity-40 blur-[1px]">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <path d="M50 50 A 1 1 0 0 1 51 50 A 2 2 0 0 1 51 52 A 3 3 0 0 1 48 52 A 5 5 0 0 1 48 47 A 8 8 0 0 1 56 47 A 13 13 0 0 1 56 60 A 21 21 0 0 1 35 60" stroke="rgba(232,232,232,0.06)" strokeWidth="0.5" strokeDasharray="2 1" fill="none" />
            <path d="M 50 15 L 80 32" stroke="rgba(232,232,232,0.06)" strokeWidth="0.2" fill="none" />
            <path d="M 20 68 L 20 32" stroke="rgba(232,232,232,0.06)" strokeWidth="0.2" fill="none" />
            <circle cx="50" cy="50" r="1.5" fill="rgba(232,232,232,0.03)" />
            <circle cx="20" cy="32" r="1.5" fill="rgba(232,232,232,0.06)" />
            <circle cx="80" cy="32" r="1.5" fill="rgba(232,232,232,0.06)" />
          </svg>
        </div>

        {/* Right Geometry (The New Model - Gold, Sharp, Complete) */}
        <div className="absolute top-[20%] right-[5%] w-[30vw] h-[60vh] opacity-80 scale-x-[-1]">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <path d="M50 50 A 1 1 0 0 1 51 50 A 2 2 0 0 1 51 52 A 3 3 0 0 1 48 52 A 5 5 0 0 1 48 47 A 8 8 0 0 1 56 47 A 13 13 0 0 1 56 60 A 21 21 0 0 1 35 60 A 34 34 0 0 1 35 26 A 55 55 0 0 1 90 26 A 89 89 0 0 1 90 115" stroke="rgba(201,169,97,0.10)" strokeWidth="0.5" fill="none" />
            <path d="M 50 15 L 80 32 L 80 68 L 50 85 L 20 68 L 20 32 Z" stroke="rgba(201,169,97,0.10)" strokeWidth="0.2" fill="none" />
            <path d="M 50 15 L 50 85 M 20 32 L 80 68 M 20 68 L 80 32" stroke="rgba(201,169,97,0.10)" strokeWidth="0.2" fill="none" />
            <circle cx="50" cy="50" r="1.5" fill="rgba(201,169,97,0.10)" />
            <circle cx="50" cy="15" r="1.5" fill="rgba(201,169,97,0.10)" />
            <circle cx="50" cy="85" r="1.5" fill="rgba(201,169,97,0.10)" />
            <circle cx="20" cy="32" r="1.5" fill="rgba(201,169,97,0.10)" />
            <circle cx="80" cy="68" r="1.5" fill="rgba(201,169,97,0.10)" />
            <circle cx="20" cy="68" r="1.5" fill="rgba(201,169,97,0.10)" />
            <circle cx="80" cy="32" r="1.5" fill="rgba(201,169,97,0.10)" />
          </svg>
        </div>

        {/* The Gap (Center Particles) */}
        <div className="absolute top-0 left-[35%] w-[30%] h-full">
          {[...Array(25)].map((_, i) => (
            <div key={`part-${i}`} className="absolute w-[2px] h-[2px] rounded-full animate-[drift_20s_infinite_linear]" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${-(Math.random() * 20)}s`,
              background: 'linear-gradient(90deg, rgba(232,232,232,0.5), rgba(201,169,97,0.8))'
            }} />
          ))}
        </div>
      </div>

      {/* Global Center Glow (The Threshold) */}
      <div className="fixed inset-0 z-0 pointer-events-none mix-blend-screen" style={{
        background: 'radial-gradient(ellipse 20% 100% at 50% 50%, rgba(201,169,97,0.03) 0%, transparent 100%)'
      }} />
      {/* 369 | φ | 1.618 | Fibonacci | Моят свят се грижи за мен. */}
      {/* Числата не са случайни. Нищо тук не е случайно. */}
      {/* 141:228 = 1:1.618 */}

      <Preloader />
      <Watermark />
      <ExitIntentOverlay />

      {/* Global CSS Noise Overlay */}
      <div className="noise-overlay fixed inset-0 pointer-events-none z-[8000]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-100">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Golden Scroll Indicator */}
      <div className="fixed top-0 right-0 w-[2px] h-full bg-transparent z-[9998]">
        <div ref={scrollIndicatorRef} className="w-full h-0 bg-rt-gold" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <Distinction />
        <ProblemAgitation />
        <SolutionReveal />
        <BooksShowcase />
        <ProcessTimeline />
        <Philosophy />
        <ContentPreview />
        <ComparisonTable />
        <FaqAndFooter />
      </main>

      <StickyMobileCTA />
    </div>
  );
}

export default App;
