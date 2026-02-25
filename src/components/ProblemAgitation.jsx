import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProblemAgitation = () => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(contentRef.current,
                { autoAlpha: 0, y: 55 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1.618,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%"
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full py-[144px] px-8 md:px-16 border-y border-rt-gold-dim/30 relative overflow-hidden"
            style={{
                /* Layer 1: Compressed Gradient */
                background: 'linear-gradient(180deg, #000000 0%, #050710 30%, #080b16 60%, #0a0e1a 85%, #0d1020 100%)'
            }}
        >
            {/* Layer 2: Pressure Lines */}
            <div className="absolute top-0 left-0 w-full h-[40%] pointer-events-none z-0 flex flex-col items-center">
                <div className="w-full h-[1px] bg-[rgba(255,255,255,0.015)] mt-[13px]" />
                <div className="w-full h-[1px] bg-[rgba(255,255,255,0.015)] mt-[21px]" />
                <div className="w-full h-[1px] bg-[rgba(255,255,255,0.015)] mt-[34px]" />
                <div className="w-full h-[1px] bg-[rgba(255,255,255,0.015)] mt-[55px]" />
                <div className="w-full h-[1px] bg-[rgba(255,255,255,0.015)] mt-[89px]" />
            </div>

            {/* Layer 3: Scattered "Failed Attempt" Marks */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
                {[...Array(20)].map((_, i) => (
                    <svg key={`fail-${i}`} className="absolute w-[8px] h-[8px]" viewBox="0 0 10 10" style={{ left: `${Math.random() * 90 + 5}%`, top: `${Math.random() * 90 + 5}%` }}>
                        <path d="M1 1 L9 9 M9 1 L1 9" stroke="rgba(204,68,68,0.04)" strokeWidth="1" />
                    </svg>
                ))}
            </div>
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden md:hidden">
                {[...Array(8)].map((_, i) => (
                    <svg key={`fail-mob-${i}`} className="absolute w-[8px] h-[8px]" viewBox="0 0 10 10" style={{ left: `${Math.random() * 90 + 5}%`, top: `${Math.random() * 90 + 5}%` }}>
                        <path d="M1 1 L9 9 M9 1 L1 9" stroke="rgba(204,68,68,0.04)" strokeWidth="1" />
                    </svg>
                ))}
            </div>

            {/* Layer 4: Bottom Edge Light Leak */}
            <div className="absolute bottom-0 left-0 w-full h-[20%] pointer-events-none z-0" style={{
                background: 'radial-gradient(ellipse 80% 30% at 50% 100%, rgba(201,169,97,0.03) 0%, transparent 70%)'
            }} />

            {/* Layer 5: Noise */}
            <div className="absolute inset-0 pointer-events-none z-0 mix-blend-overlay opacity-[0.045]">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <filter id="agitationNoise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#agitationNoise)" />
                </svg>
            </div>

            <div
                ref={contentRef}
                className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10"
            >
                <h2 className="font-jakarta font-bold text-rt-cream text-3xl md:text-[2.5rem] leading-tight mb-[34px]">
                    Защо всичко до сега не работи?
                </h2>

                <p className="font-outfit text-rt-ash text-lg md:text-[1.125rem] leading-relaxed mb-6">
                    Пробвал си визуализации. Писал си утвърждения.
                    Опитвал си се да мислиш „позитивно".
                </p>

                <p className="font-outfit text-rt-ash text-lg md:text-[1.125rem] leading-relaxed mb-6">
                    Истината? <strong className="text-rt-strikethrough font-bold font-jakarta">„Мисленето“ не променя реалността.</strong>
                </p>

                <p className="font-outfit text-rt-ash text-lg md:text-[1.125rem] leading-relaxed">
                    Реалността е огледало. Тя отразява <em className="text-rt-cream">отношението</em> ти към нея,
                    а не просто желанията ти. Без точна <strong className="text-rt-gold">механика</strong> за
                    управление на Намерението, ти просто хабиш енергия.
                </p>
            </div>
        </section>
    );
};

export default ProblemAgitation;
