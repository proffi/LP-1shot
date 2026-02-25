import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SolutionReveal = () => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(contentRef.current,
                { autoAlpha: 0, scale: 0.95 },
                {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 1.618,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%"
                    }
                }
            );

            gsap.to('.geometry-reveal', {
                autoAlpha: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%"
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full py-[144px] px-8 md:px-16 border-t border-rt-gold/10 relative overflow-hidden"
            style={{
                /* Layer 1: Warm Dark Base */
                background: 'radial-gradient(ellipse 100% 80% at 50% 40%, #121018 0%, #0a0e1a 50%, #050508 100%)'
            }}
        >
            {/* Layer 2: Golden Nebula / Light Source */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none z-0" style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(201,169,97,0.08) 0%, rgba(201,169,97,0.03) 30%, transparent 60%)'
            }} />

            {/* Layer 3: Emerging Sacred Geometry (The Reveal) */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[60vh] h-[60vh] -translate-y-1/2 pointer-events-none z-0 opacity-0 geometry-reveal">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* The Spiral */}
                    <path d="M50 50 A 1 1 0 0 1 51 50 A 2 2 0 0 1 51 52 A 3 3 0 0 1 48 52 A 5 5 0 0 1 48 47 A 8 8 0 0 1 56 47 A 13 13 0 0 1 56 60 A 21 21 0 0 1 35 60 A 34 34 0 0 1 35 26 A 55 55 0 0 1 90 26 A 89 89 0 0 1 90 115" stroke="rgba(201,169,97,0.10)" strokeWidth="0.5" fill="none" />
                    {/* Hexagonal Grid lines */}
                    <path d="M 50 15 L 80 32 L 80 68 L 50 85 L 20 68 L 20 32 Z" stroke="rgba(201,169,97,0.10)" strokeWidth="0.2" fill="none" />
                    <path d="M 50 15 L 50 85 M 20 32 L 80 68 M 20 68 L 80 32" stroke="rgba(201,169,97,0.10)" strokeWidth="0.2" fill="none" />
                    {/* Nodes */}
                    <circle cx="50" cy="50" r="1.5" fill="rgba(201,169,97,0.10)" />
                    <circle cx="50" cy="15" r="1.5" fill="rgba(201,169,97,0.10)" />
                    <circle cx="50" cy="85" r="1.5" fill="rgba(201,169,97,0.10)" />
                    <circle cx="20" cy="32" r="1.5" fill="rgba(201,169,97,0.10)" />
                    <circle cx="80" cy="68" r="1.5" fill="rgba(201,169,97,0.10)" />
                    <circle cx="20" cy="68" r="1.5" fill="rgba(201,169,97,0.10)" />
                    <circle cx="80" cy="32" r="1.5" fill="rgba(201,169,97,0.10)" />
                </svg>
            </div>

            {/* Layer 4: Radiating Lines */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh] pointer-events-none z-0 flex items-center justify-center overflow-hidden">
                {[0, 45, 90, 135].map((angle) => (
                    <div key={`ray-${angle}`} className="absolute w-full h-[0.5px] bg-[rgba(201,169,97,0.04)]" style={{ transform: `rotate(${angle}deg)` }} />
                ))}
            </div>

            {/* Layer 5: Noise */}
            <div className="absolute inset-0 pointer-events-none z-0 mix-blend-overlay opacity-[0.03]">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <filter id="revealNoise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#revealNoise)" />
                </svg>
            </div>

            <div
                ref={contentRef}
                className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10"
            >
                <div className="mb-8">
                    <span className="font-outfit text-rt-ash text-xl md:text-2xl block mb-2">До сега.</span>
                    <h2 className="font-cormorant italic font-bold text-4xl md:text-[4rem] text-rt-gold leading-tight">
                        Reality Transurfing.
                    </h2>
                </div>

                <div className="bg-rt-surface/50 rounded-[2rem] p-8 md:p-12 border border-rt-gold/10 relative overflow-hidden mb-[55px]">
                    {/* Subtle inner geometry */}
                    <div className="absolute -right-20 -top-20 opacity-10 pointer-events-none">
                        <svg width="200" height="200" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="var(--gold)" strokeWidth="1" />
                            <polygon points="50,5 95,75 5,75" fill="none" stroke="var(--gold)" strokeWidth="1" />
                        </svg>
                    </div>

                    <p className="font-outfit text-rt-cream text-lg md:text-xl leading-relaxed text-left relative z-10">
                        Това не е концепция. Това е <strong className="text-rt-gold font-jakarta">декласифициран оперативен мануал</strong> за реалността.
                        Създаден от анонимен руски физик, този модел обяснява физиката на късмета
                        и механиката на вероятностите.
                    </p>
                    <p className="font-outfit text-rt-cream text-lg md:text-xl leading-relaxed text-left mt-4 relative z-10">
                        А тази система? Тя е практическият превод на този модел в 89-дневен протокол.
                    </p>
                </div>

                <button
                    onClick={() => document.getElementById('книгите')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-transparent border border-rt-gold text-rt-gold hover:bg-rt-gold hover:text-rt-obsidian px-[34px] py-[13px] rounded-[1.5rem] font-jakarta font-bold text-[1rem] transition-all duration-300"
                >
                    ВИЖ СИСТЕМАТА
                </button>
            </div>
        </section>
    );
};

export default SolutionReveal;
