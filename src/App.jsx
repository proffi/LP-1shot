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
    <div ref={appRef} className="relative min-h-screen bg-rt-void text-rt-cream overflow-x-hidden">

      {/* 
        <!-- 369 | φ | 1.618 | Fibonacci | Моят свят се грижи за мен. --> 
        <!-- Числата не са случайни. Нищо тук не е случайно. -->
        <!-- 141:228 = 1:1.618 -->
      */}

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
