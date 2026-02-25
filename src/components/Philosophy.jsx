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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-rt-void py-[144px] px-8 md:px-16 border-y border-rt-silver-dim/10 relative"
        >
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 relative">

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
