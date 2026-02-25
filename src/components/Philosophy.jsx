import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const splitLineRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animating the dividing line
            gsap.fromTo(splitLineRef.current,
                { height: "0%" },
                {
                    height: "100%",
                    duration: 1.618,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%"
                    }
                }
            );

            // Fading in text elements
            gsap.fromTo(contentRef.current.children,
                { autoAlpha: 0, y: 34 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 50%"
                    }
                }
            );

        }
        }, sectionRef);

    return () => ctx.revert();
}, []);

return (
    <section
        ref={sectionRef}
        className="w-full py-[144px] px-8 md:px-16 border-y border-rt-silver-dim/10 relative overflow-hidden"
        style={{ backgroundColor: '#000000' }}
    >
        {/* Layer 2: The Mirror Reflection (The Showstopper) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mirror-parallax">

            {/* Left Geometry (The Old Model - Silver, Blurred, Incomplete) */}
            <div className="absolute top-[20%] left-[5%] w-[30vw] h-[60vh] opacity-40 blur-[1px]">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                    {/* Incomplete Spiral */}
                    <path d="M50 50 A 1 1 0 0 1 51 50 A 2 2 0 0 1 51 52 A 3 3 0 0 1 48 52 A 5 5 0 0 1 48 47 A 8 8 0 0 1 56 47 A 13 13 0 0 1 56 60 A 21 21 0 0 1 35 60" stroke="rgba(232,232,232,0.06)" strokeWidth="0.5" strokeDasharray="2 1" fill="none" />
                    {/* Disconnected Hex */}
                    <path d="M 50 15 L 80 32" stroke="rgba(232,232,232,0.06)" strokeWidth="0.2" fill="none" />
                    <path d="M 20 68 L 20 32" stroke="rgba(232,232,232,0.06)" strokeWidth="0.2" fill="none" />
                    {/* Faded Nodes */}
                    <circle cx="50" cy="50" r="1.5" fill="rgba(232,232,232,0.03)" />
                    <circle cx="20" cy="32" r="1.5" fill="rgba(232,232,232,0.06)" />
                    <circle cx="80" cy="32" r="1.5" fill="rgba(232,232,232,0.06)" />
                </svg>
            </div>

            {/* Right Geometry (The New Model - Gold, Sharp, Complete) */}
            <div className="absolute top-[20%] right-[5%] w-[30vw] h-[60vh] opacity-80 scale-x-[-1]">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                    {/* Complete Spiral */}
                    <path d="M50 50 A 1 1 0 0 1 51 50 A 2 2 0 0 1 51 52 A 3 3 0 0 1 48 52 A 5 5 0 0 1 48 47 A 8 8 0 0 1 56 47 A 13 13 0 0 1 56 60 A 21 21 0 0 1 35 60 A 34 34 0 0 1 35 26 A 55 55 0 0 1 90 26 A 89 89 0 0 1 90 115" stroke="rgba(201,169,97,0.10)" strokeWidth="0.5" fill="none" />
                    {/* Complete Hex */}
                    <path d="M 50 15 L 80 32 L 80 68 L 50 85 L 20 68 L 20 32 Z" stroke="rgba(201,169,97,0.10)" strokeWidth="0.2" fill="none" />
                    <path d="M 50 15 L 50 85 M 20 32 L 80 68 M 20 68 L 80 32" stroke="rgba(201,169,97,0.10)" strokeWidth="0.2" fill="none" />
                    {/* Solid Nodes */}
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
                    <div key={`part-${i}`} className="absolute w-[2px] h-[2px] rounded-full animate-[drift_10s_infinite_linear]" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${-(Math.random() * 10)}s`,
                        background: 'linear-gradient(90deg, rgba(232,232,232,0.5), rgba(201,169,97,0.8))'
                    }} />
                ))}
            </div>
        </div>

        {/* Layer 3: Center Glow (The Threshold) */}
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen" style={{
            background: 'radial-gradient(ellipse 8% 70% at 50% 50%, rgba(201,169,97,0.06) 0%, transparent 100%)'
        }} />

        {/* Layer 4: Noise */}
        <div className="absolute inset-0 pointer-events-none z-0 mix-blend-overlay opacity-[0.04]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <filter id="philosophyNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#philosophyNoise)" />
            </svg>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 relative z-10">

            {/* Vertical Geometric Divider (Desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-rt-silver-dim/10">
                <div ref={splitLineRef} className="w-full bg-rt-gold" style={{ height: '0%' }}></div>
            </div>

            {/* Left Side: Setup */}
            <div className="flex-1 text-right flex flex-col justify-center" ref={contentRef}>
                <h3 className="font-outfit text-rt-ash text-xl md:text-2xl mb-6">
                    Повечето хора търсят
                    <br />
                    <span className="text-rt-cream italic">„поредната книга"</span>
                </h3>
                <p className="font-outfit text-rt-ash/70 text-base max-w-sm ml-auto">
                    За да се мотивират за 3 дни и след това да се върнат към старата си реалност.
                </p>
            </div>

            {/* Right Side: Philosophy */}
            <div className="flex-1 text-left flex flex-col justify-center pl-0 md:pl-8">
                <h2 className="font-cormorant italic font-bold text-rt-gold text-4xl md:text-5xl leading-tight mb-8">
                    Разликата между това да познаваш модела и това да го <span className="underline decoration-1 underline-offset-4 decoration-rt-gold/30">оперираш</span> е всичко.
                </h2>
                <p className="font-jakarta text-rt-cream text-lg max-w-md">
                    Тази система не е за хора, които търсят мотивация. Тя е за тези, които са готови за <strong className="text-rt-gold">инструкции</strong>.
                </p>
            </div>
        </div>
    </section>
);
};

export default Philosophy;
