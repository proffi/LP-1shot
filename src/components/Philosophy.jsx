import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
    const sectionRef = useRef(null);
    const textLeftRef = useRef(null);
    const textRightRef = useRef(null);
    const conclusionRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background Parallax
            gsap.fromTo(bgRef.current,
                { yPercent: -15 },
                {
                    yPercent: 15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );

            // Split Text GSAP reveals
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 40%",
                }
            });

            tl.fromTo(textLeftRef.current,
                { x: -55, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, duration: 1.2, ease: "power2.out" }
            )
                .fromTo(textRightRef.current,
                    { x: 55, autoAlpha: 0 },
                    { x: 0, autoAlpha: 1, duration: 1.2, ease: "power2.out" },
                    "-=0.6"
                )
                .fromTo(conclusionRef.current,
                    { y: 34, autoAlpha: 0 },
                    { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out" },
                    "+=0.8" // automatic delay to emphasize the conclusion
                )
                .to(conclusionRef.current.querySelector('.gold-sweep'),
                    { className: "+=gold-sweep active" },
                    "-=0.2"
                );

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-48 bg-rt-obsidian overflow-hidden"
        >
            {/* Background Parallax Image / Generative geometry hint */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
                <div ref={bgRef} className="w-full h-[130%] -top-[15%] relative">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Abstract massive golden geometry */}
                        <path d="M 0 50 Q 50 0 100 50 T 0 50" fill="none" stroke="var(--color-rt-gold)" strokeWidth="0.2" />
                        <circle cx="50" cy="50" r="30" fill="none" stroke="var(--color-rt-gold)" strokeWidth="0.1" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-8 flex flex-col items-center">

                <div className="w-full grid-golden gap-16 md:gap-8 mb-[89px]">

                    {/* Left Text */}
                    <div ref={textLeftRef} className="flex flex-col items-start opacity-0">
                        <p className="font-outfit text-rt-ash text-sm mb-4 uppercase tracking-widest pl-4 border-l border-rt-ash/20">
                            Популярната „манифестация" ти казва:
                        </p>
                        <h2 className="font-cormorant italic text-rt-silver text-3xl md:text-5xl leading-tight opacity-70">
                            „Привличаш с енергия<br />и вибрации."
                        </h2>
                    </div>

                    {/* Right Text */}
                    <div ref={textRightRef} className="flex flex-col items-end opacity-0text-right pt-16 md:pt-32">
                        <p className="font-outfit text-rt-gold/70 text-sm mb-4 uppercase tracking-widest pr-4 border-r border-rt-gold/30 w-full text-right">
                            Тази система ти казва:
                        </p>
                        <h2 className="font-cormorant italic text-rt-gold text-4xl md:text-6xl leading-tight text-right drop-shadow-[0_0_20px_rgba(201,169,97,0.1)]">
                            „Избираш от поле от вече съществуващи варианти."
                        </h2>
                    </div>

                </div>

                {/* Center Conclusion */}
                <div ref={conclusionRef} className="opacity-0">
                    <h3 className="font-jakarta font-bold text-rt-cream text-3xl md:text-5xl tracking-normal">
                        <span className="sweep-target gold-sweep">Разликата е всичко.</span>
                    </h3>
                </div>

            </div>
        </section>
    );
};

export default Philosophy;
