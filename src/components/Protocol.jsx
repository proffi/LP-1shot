import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Protocol = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Loop through cards (except the last one) to create stacking effect
            cardsRef.current.forEach((card, i) => {
                if (i === cardsRef.current.length - 1) return; // Skip last card

                const nextCard = cardsRef.current[i + 1];

                gsap.to(card, {
                    scale: 0.9,
                    opacity: 0.5,
                    filter: "blur(20px)",
                    ease: "none",
                    scrollTrigger: {
                        trigger: nextCard,
                        start: "top bottom",
                        end: "top top",
                        scrub: true,
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" ref={containerRef} className="relative w-full bg-nura-charcoal">
            {/* Sticky container behavior logic: We actually want each card to be sticky */}

            {/* Card 1: Double-Helix Gear */}
            <div
                ref={addToRefs}
                className="sticky top-0 h-screen w-full bg-nura-cream flex items-center justify-center p-8 overflow-hidden rounded-t-[4rem] origin-top"
            >
                <div className="absolute inset-0 opacity-5">
                    {/* Grid background placeholder */}
                    <div className="w-full h-full bg-[radial-gradient(#1A1A1A_1px,transparent_1px)] [background-size:32px_32px]"></div>
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center max-w-7xl mx-auto w-full gap-16">
                    <div className="flex-1">
                        <h3 className="font-mono text-nura-clay text-sm uppercase tracking-widest mb-4">Phase 01</h3>
                        <h2 className="font-jakarta text-5xl md:text-7xl font-bold mb-6 text-nura-charcoal">Genomic<br />Mapping</h2>
                        <p className="font-outfit text-xl text-nura-charcoal/70 max-w-md">
                            High-resolution epigenetic sequencing to decode your biological blueprint and potential risks.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center items-center h-[400px]">
                        <DoubleHelixGear />
                    </div>
                </div>
            </div>

            {/* Card 2: Scanning Laser-Grid */}
            <div
                ref={addToRefs}
                className="sticky top-0 h-screen w-full bg-[#1A1A1A] text-white flex items-center justify-center p-8 overflow-hidden rounded-t-[4rem] border-t border-white/10 origin-top shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
            >
                <div className="relative z-10 flex flex-col md:flex-row items-center max-w-7xl mx-auto w-full gap-16">
                    <div className="flex-1 order-2 md:order-1 flex justify-center items-center h-[400px]">
                        <ScanningCellGrid />
                    </div>
                    <div className="flex-1 order-1 md:order-2">
                        <h3 className="font-mono text-nura-moss text-sm uppercase tracking-widest mb-4">Phase 02</h3>
                        <h2 className="font-garamond italic text-5xl md:text-7xl mb-6 text-nura-cream">Cellular<br />Audit</h2>
                        <p className="font-outfit text-lg text-nura-cream/70 max-w-md">
                            Real-time metabolic stress testing and mitochondrial efficiency tracking at a microscopic level.
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 3: Pulsing EKG */}
            <div
                ref={addToRefs}
                className="sticky top-0 h-screen w-full bg-nura-moss flex items-center justify-center p-8 overflow-hidden rounded-t-[4rem] border-t border-nura-cream/10 origin-top shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
            >
                <div className="relative z-10 flex flex-col md:flex-row items-center max-w-7xl mx-auto w-full gap-16">
                    <div className="flex-1">
                        <h3 className="font-mono text-nura-cream/50 text-sm uppercase tracking-widest mb-4">Phase 03</h3>
                        <h2 className="font-jakarta text-5xl md:text-7xl font-bold mb-6 text-nura-cream tracking-tight">Continuous<br />Optimization</h2>
                        <p className="font-outfit text-lg text-nura-cream/80 max-w-md">
                            Live biometrics fed into our proprietary models, adjusting your inputs daily for peak output.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center items-center h-[400px]">
                        <PulsingEKG />
                    </div>
                </div>
            </div>
        </section>
    );
};

// Artifacts
const DoubleHelixGear = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(svgRef.current, {
                rotation: 360,
                repeat: -1,
                duration: 20,
                ease: "linear"
            });
            // A subtle breathing scale
            gsap.to(svgRef.current, {
                scale: 1.05,
                repeat: -1,
                yoyo: true,
                duration: 4,
                ease: "sine.inOut"
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <svg ref={svgRef} className="w-64 h-64 text-nura-moss drop-shadow-2xl" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="50" cy="50" r="40" strokeDasharray="4 4" className="opacity-50" />
            <circle cx="50" cy="50" r="30" stroke="var(--color-nura-clay)" strokeWidth="1" className="opacity-80" />
            <path d="M 50 10 L 50 90 M 10 50 L 90 50 M 21.7 21.7 L 78.3 78.3 M 21.7 78.3 L 78.3 21.7" strokeDasharray="1 6" strokeLinecap="round" strokeWidth="3" />
            <polygon points="50,25 67,50 50,75 33,50" className="animate-pulse" fill="currentColor" fillOpacity="0.1" />
        </svg>
    );
};

const ScanningCellGrid = () => {
    const containerRef = useRef(null);
    const laserRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(laserRef.current,
                { top: "0%" },
                { top: "100%", duration: 3, repeat: -1, yoyo: true, ease: "power1.inOut" }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-64 h-64 border border-white/20 rounded-xl overflow-hidden bg-black/50 backdrop-blur-md">
            {/* Cells Grid */}
            <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-1 p-2">
                {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="bg-white/5 rounded-full w-full h-full flex items-center justify-center">
                        <div className="w-1/2 h-1/2 rounded-full bg-nura-moss opacity-50"></div>
                    </div>
                ))}
            </div>
            {/* Scanning Laser */}
            <div ref={laserRef} className="absolute left-0 w-full h-[2px] bg-nura-clay shadow-[0_0_15px_#CC5833] z-10" />
        </div>
    );
};

const PulsingEKG = () => {
    const pathRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const length = pathRef.current.getTotalLength();
            gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });

            gsap.to(pathRef.current, {
                strokeDashoffset: 0,
                duration: 2,
                repeat: -1,
                ease: "none"
            });
            // Fade out path tail effect
            gsap.to(pathRef.current, {
                opacity: 0,
                duration: 2,
                repeat: -1,
                ease: "power2.in"
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="relative w-80 h-40 bg-black/20 rounded-2xl border border-nura-cream/20 flex items-center justify-center overflow-hidden backdrop-blur-sm">
            <svg className="absolute w-full h-full filter drop-shadow-[0_0_8px_#F2F0E9]" viewBox="0 0 200 50" preserveAspectRatio="none">
                <path
                    ref={pathRef}
                    d="M 0 25 L 40 25 L 45 10 L 55 45 L 65 5 L 75 35 L 80 25 L 120 25 L 125 15 L 135 40 L 140 25 L 200 25"
                    fill="none"
                    stroke="var(--color-nura-cream)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            {/* Static dim background path */}
            <svg className="absolute w-full h-full opacity-20" viewBox="0 0 200 50" preserveAspectRatio="none">
                <path
                    d="M 0 25 L 40 25 L 45 10 L 55 45 L 65 5 L 75 35 L 80 25 L 120 25 L 125 15 L 135 40 L 140 25 L 200 25"
                    fill="none"
                    stroke="var(--color-nura-cream)"
                    strokeWidth="1"
                />
            </svg>
        </div>
    );
};

export default Protocol;
