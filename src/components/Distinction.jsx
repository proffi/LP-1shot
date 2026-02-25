import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Distinction = () => {
    const containerRef = useRef(null);
    const leftItemsRef = useRef([]);
    const rightItemsRef = useRef([]);
    const dividerRef = useRef(null);
    const quoteRef = useRef(null);

    const addLeft = (el) => {
        if (el && !leftItemsRef.current.includes(el)) leftItemsRef.current.push(el);
    };
    const addRight = (el) => {
        if (el && !rightItemsRef.current.includes(el)) rightItemsRef.current.push(el);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Left Column (The Noise) - Fade in then strikethrough
            leftItemsRef.current.forEach((item, i) => {
                const trg = item.querySelector('.strike-target');
                ScrollTrigger.create({
                    trigger: item,
                    start: "top 80%",
                    onEnter: () => {
                        gsap.to(item, { autoAlpha: 1, duration: 0.5 });
                        // Apply straight CSS class for the strikethrough animation delay
                        setTimeout(() => trg.classList.add('struck'), i * 210 + 300); // fibonacci offset
                    }
                });
            });

            // Center Divider fade in and color transition
            gsap.to(dividerRef.current, {
                height: "100%",
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%"
                }
            });

            // Right Column (The Truth) - Fade in with gold sweep
            rightItemsRef.current.forEach((item, i) => {
                const trg = item.querySelector('.sweep-target');
                ScrollTrigger.create({
                    trigger: item,
                    start: "top 80%",
                    onEnter: () => {
                        gsap.to(item, { autoAlpha: 1, duration: 0.5, delay: i * 0.13 });
                        setTimeout(() => trg.classList.add('active'), i * 340 + 500);
                    }
                });
            });

            // Bottom Quote fade in
            gsap.fromTo(quoteRef.current,
                { autoAlpha: 0, y: 34 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: quoteRef.current,
                        start: "top 90%"
                    }
                }
            );

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const theNoise = [
        { text: "„Вибрации“ и „вселената“" },
        { text: "Афирмации без механика" },
        { text: "Закон на привличането" },
        { text: "Гурута продаващи мечти" }
    ];

    const theTruth = [
        { text: "Механика, не мистика" },
        { text: "Избор от полето от варианти" },
        { text: "89-дневен протокол" },
        { text: "Инструкции, не мотивация" }
    ];

    return (
        <section
            ref={containerRef}
            id="разликата"
            className="relative w-full py-[144px] px-8 md:px-16 overflow-hidden"
            style={{ backgroundColor: 'transparent' }}
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">

                <div className="w-full flex flex-col md:flex-row gap-16 relative mb-32">

                    {/* Left Column 38.2% */}
                    <div className="flex-1 md:flex-[0.382] flex flex-col gap-8 pr-0 md:pr-8">
                        {theNoise.map((item, i) => (
                            <div
                                key={i}
                                ref={addLeft}
                                className="opacity-0 font-outfit text-rt-ash text-lg flex items-center gap-4"
                            >
                                <span className="text-rt-strikethrough text-xl">✕</span>
                                <span className="strike-target strike-animate">{item.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Vertical Divider line (Mirror transition) */}
                    <div className="hidden md:block absolute left-[38.2%] top-0 bottom-0 w-[1px]">
                        <div
                            ref={dividerRef}
                            className="h-0 w-full bg-gradient-to-b from-rt-silver/20 via-rt-gold/40 to-rt-gold/80"
                        />
                    </div>

                    {/* Right Column 61.8% */}
                    <div className="flex-1 md:flex-[0.618] flex flex-col gap-[34px] pl-0 md:pl-16">
                        {theTruth.map((item, i) => (
                            <div
                                key={i}
                                ref={addRight}
                                className="opacity-0 font-jakarta font-bold text-rt-cream text-2xl md:text-[2rem] leading-tight flex items-start gap-4"
                            >
                                <span className="text-rt-success mt-1">✓</span>
                                <span className="sweep-target gold-sweep">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* The Quote */}
                <div
                    ref={quoteRef}
                    className="w-full max-w-4xl text-center flex flex-col items-center mt-8"
                >
                    <Quote className="text-rt-gold/30 w-8 h-8 mb-6" />
                    <p className="font-cormorant italic text-3xl md:text-[3rem] text-rt-gold leading-tight">
                        „Инструментите не работят.<br />
                        <span className="text-rt-silver">Операторът работи.</span>"
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Distinction;
