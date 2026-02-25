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
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full bg-rt-void py-[144px] px-8 md:px-16 border-t border-rt-gold/10 relative overflow-hidden"
        >
            {/* Continuous Sacred Geometry Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay" style={{ backgroundImage: 'linear-gradient(rgba(201, 169, 97, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 169, 97, 0.2) 1px, transparent 1px)', backgroundSize: '55px 55px' }} />
            <div
                ref={contentRef}
                className="max-w-4xl mx-auto flex flex-col items-center text-center"
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
