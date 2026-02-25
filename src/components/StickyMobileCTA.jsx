import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StickyMobileCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only run on mobile viewport
        if (window.innerWidth >= 768) return;

        let lastScrollY = window.scrollY;

        // Create ScrollTrigger to check when we pass the Hero section (100vh)
        ScrollTrigger.create({
            trigger: document.body,
            start: "100vh top",
            end: "bottom bottom",
            onUpdate: (self) => {
                const isScrollingDown = self.direction === 1;

                // If scrolling UP and we are past the Hero section, Show it.
                // If scrolling DOWN, Hide it.
                if (isScrollingDown) {
                    setIsVisible(false);
                } else if (self.progress < 0.95) { // Hide when we reach the very bottom Final CTA
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    // Ensure it renders with transition classes based on state
    return (
        <div
            className={`fixed bottom-0 left-0 w-full z-[8000] bg-rt-void/95 backdrop-blur-md h-[55px] flex items-center justify-center border-t border-rt-gold/10 px-4 transition-transform duration-300 md:hidden ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
        >
            <button
                onClick={() => {
                    document.getElementById('книгите')?.scrollIntoView({ behavior: 'smooth' });
                    setIsVisible(false);
                }}
                className="w-full h-[34px] bg-rt-gold text-rt-obsidian font-jakarta font-bold text-sm rounded-[1rem] flex items-center justify-center shadow-[0_0_13px_rgba(201,169,97,0.2)]"
            >
                ПЪЛНАТА СИСТЕМА — €39
            </button>
        </div>
    );
};

export default StickyMobileCTA;
