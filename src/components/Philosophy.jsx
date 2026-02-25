import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
    const sectionRef = useRef(null);
    const bgRef = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background Parallax
            gsap.fromTo(bgRef.current,
                { yPercent: -20 },
                {
                    yPercent: 20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );

            // Text Reveal
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    end: "center center",
                    scrub: 1
                }
            });

            tl.fromTo(text1Ref.current,
                { opacity: 0, y: 50 },
                { opacity: 0.5, y: -20, duration: 1 }
            )
                .fromTo(text2Ref.current,
                    { opacity: 0, scale: 0.9, y: 50 },
                    { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "power2.out" },
                    "-=0.5"
                );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="philosophy"
            ref={sectionRef}
            className="relative w-full h-[120dvh] bg-nura-charcoal overflow-hidden flex flex-col items-center justify-center text-center px-8"
        >
            {/* Background Parallax Image */}
            <div className="absolute inset-0 z-0">
                <div
                    ref={bgRef}
                    className="w-full h-[140%] -top-[20%] relative opacity-30 select-none pointer-events-none"
                >
                    <img
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2074&auto=format&fit=crop"
                        alt="Organic Texture"
                        className="w-full h-full object-cover object-center mix-blend-overlay"
                    />
                </div>
                <div className="absolute inset-0 bg-nura-charcoal/80 mix-blend-multiply" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
                <p className="font-mono text-nura-clay uppercase tracking-[0.3em] text-xs mb-12">The Manifesto</p>

                <h2
                    ref={text1Ref}
                    className="font-jakarta text-2xl md:text-4xl text-white/50 mb-8 font-light"
                >
                    Modern medicine asks: <span className="italic">What is wrong?</span>
                </h2>

                <h2
                    ref={text2Ref}
                    className="font-garamond italic text-5xl md:text-8xl lg:text-9xl text-nura-cream font-medium leading-[0.9]"
                >
                    We ask:<br />
                    What is <span className="text-nura-moss font-bold not-italic font-jakarta tracking-tight">optimal?</span>
                </h2>
            </div>
        </section>
    );
};

export default Philosophy;
