import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProcessTimeline = () => {
    const containerRef = useRef(null);
    const lineRef = useRef(null);
    const cardsRef = useRef([]);

    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Golden line horizontal fill
            gsap.to(lineRef.current, {
                width: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1
                }
            });

            // Staggering cards reveal & interacting with SVGs inside them
            cardsRef.current.forEach((card, index) => {
                // Opacity/fade up
                gsap.fromTo(card,
                    { autoAlpha: 0, y: 34 },
                    {
                        autoAlpha: 1, y: 0, duration: 1, ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%"
                        }
                    }
                );

                // Individual GSAP animation based on the phase type (we identify by class)
                const gauge = card.querySelector('.phase-1-gauge');
                if (gauge) {
                    gsap.to(gauge, {
                        strokeDashoffset: 0, // fills the circle
                        stroke: "var(--color-rt-gold)", // transitions red/amber to gold
                        duration: 2,
                        ease: "power2.out",
                        scrollTrigger: { trigger: card, start: "top 60%" }
                    });
                }

                const builder = card.querySelector('.phase-2-builder path');
                if (builder) {
                    gsap.fromTo(builder,
                        { autoAlpha: 0, scale: 0.8 },
                        { autoAlpha: 1, scale: 1, duration: 1.5, stagger: 0.2, scrollTrigger: { trigger: card, start: "top 60%" } }
                    );
                }

                const mirror1 = card.querySelector('.phase-3-mirror-1');
                const mirror2 = card.querySelector('.phase-3-mirror-2');
                if (mirror1 && mirror2) {
                    gsap.to([mirror1, mirror2], {
                        rotation: 0, // align them
                        autoAlpha: 1,
                        x: 0,
                        duration: 1.618,
                        ease: "power2.inOut",
                        scrollTrigger: { trigger: card, start: "top 50%" }
                    });
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            id="системата"
            className="relative w-full bg-rt-void py-32 overflow-hidden border-y border-rt-silver-dim/10"
        >
            {/* Highly Visible Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(201,169,97,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.3) 1px, transparent 1px)', backgroundSize: '55px 55px' }} />

            {/* Glowing Orb in Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rt-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-8 md:px-16 mb-24 text-center relative z-10">
                <h2 className="font-cormorant italic text-rt-gold text-4xl md:text-5xl mb-6">Ден по ден. Стъпка по стъпка.</h2>
                <p className="font-outfit text-rt-cream text-lg max-w-2xl mx-auto opacity-80">
                    Не е книга за четене. Това е система за работа. 89 дни. Ден по ден.
                </p>
            </div>

            <div className="relative w-full overflow-x-auto pb-16 custom-scrollbar-hide snap-x snap-mandatory scroll-p-8">
                {/* The Golden Line constraint to inner container */}
                <div className="min-w-[1240px] max-w-7xl mx-auto relative px-8 flex gap-8">

                    <div className="absolute top-[34px] left-8 right-8 h-px bg-rt-silver-dim/20 z-0" />
                    <div ref={lineRef} className="absolute top-[34px] left-8 h-px bg-rt-gold z-10 w-0 shadow-[0_0_15px_#C9A961]" />

                    {/* PHASE 1 */}
                    <div ref={addToRefs} className="relative z-20 flex flex-col items-center flex-1 min-w-[280px] shrink-0">
                        <div className="w-4 h-4 rounded-full bg-rt-void border-2 border-rt-gold mb-6" />
                        <div className="w-full bg-rt-surface rounded-[2rem] p-8 border border-rt-silver-dim/20">
                            <h4 className="font-mono text-rt-ash text-[10px] uppercase tracking-widest mb-2">Седмици 1-4 (55 страници)</h4>
                            <h3 className="font-jakarta font-bold text-rt-silver text-xl mb-6">Фаза 1: Изчистване</h3>

                            <div className="flex justify-center mb-6 h-[80px]">
                                {/* Gauge SVG */}
                                <svg className="w-20 h-20 transform -rotate-90">
                                    <circle cx="40" cy="40" r="36" fill="transparent" stroke="var(--color-obsidian)" strokeWidth="4" />
                                    <circle cx="40" cy="40" r="36" fill="transparent" stroke="#CC4444" strokeWidth="4" strokeDasharray="226" strokeDashoffset="226" className="phase-1-gauge shadow-[0_0_15px_inset_currentColor]" />
                                </svg>
                            </div>

                            <div className="bg-rt-obsidian rounded-lg p-3 mb-4">
                                <p className="font-mono text-[10px] text-rt-gold text-center">Излишен потенциал → 0</p>
                            </div>
                            <p className="font-outfit text-sm text-rt-cream/70 leading-relaxed">
                                Идентифицираш и премахваш енергийните паразити (махалата). Изчистваш "важността", която блокира резултатите ти.
                            </p>
                        </div>
                    </div>

                    {/* PHASE 2 */}
                    <div ref={addToRefs} className="relative z-20 flex flex-col items-center flex-1 min-w-[280px] shrink-0">
                        <div className="w-4 h-4 rounded-full bg-rt-void border-2 border-rt-gold mb-6" />
                        <div className="w-full bg-rt-surface rounded-[2rem] p-8 border border-rt-silver-dim/20">
                            <h4 className="font-mono text-rt-ash text-[10px] uppercase tracking-widest mb-2">Седмици 5-9 (89 страници)</h4>
                            <h3 className="font-jakarta font-bold text-rt-silver text-xl mb-6">Фаза 2: Изграждане</h3>

                            <div className="flex justify-center mb-6 h-[80px]">
                                {/* Target Slide Builder SVG */}
                                <svg className="phase-2-builder w-20 h-20 text-rt-gold opacity-80" viewBox="0 0 100 100">
                                    <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" />
                                    <polygon points="50,25 75,75 25,75" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="50" cy="58" r="8" fill="currentColor" opacity="0.5" />
                                </svg>
                            </div>

                            <div className="bg-rt-obsidian rounded-lg p-3 mb-4 flex items-center justify-center gap-2 text-[10px]">
                                <span className="w-1.5 h-3 bg-rt-gold animate-pulse"></span>
                                <span className="font-mono text-rt-gold">Слайд: Активен</span>
                            </div>
                            <p className="font-outfit text-sm text-rt-cream/70 leading-relaxed">
                                Формулираш точната си цел. Изолираш се от "чуждите" цели. Създаваш целевия слайд и започваш процеса на Амалгама.
                            </p>
                        </div>
                    </div>

                    {/* PHASE 3 */}
                    <div ref={addToRefs} className="relative z-20 flex flex-col items-center flex-1 min-w-[280px] shrink-0">
                        <div className="w-4 h-4 rounded-full bg-rt-void border-2 border-rt-gold mb-6" />
                        <div className="w-full bg-rt-surface rounded-[2rem] p-8 border border-rt-silver-dim/20">
                            <h4 className="font-mono text-rt-ash text-[10px] uppercase tracking-widest mb-2">Седмици 10-12 (55 страници)</h4>
                            <h3 className="font-jakarta font-bold text-rt-silver text-xl mb-6">Фаза 3: Майсторство</h3>

                            <div className="flex justify-center items-center mb-6 h-[80px] relative">
                                {/* Aligning Mirrors SVG */}
                                <svg className="w-20 h-20 absolute" viewBox="0 0 100 100">
                                    <polygon className="phase-3-mirror-1" style={{ transform: 'translateX(-20px) rotate(-15deg)', opacity: 0.3 }} points="50,10 80,50 50,90 20,50" fill="none" stroke="var(--silver)" strokeWidth="2" />
                                    <polygon className="phase-3-mirror-2" style={{ transform: 'translateX(20px) rotate(15deg)', opacity: 0.3 }} points="50,10 80,50 50,90 20,50" fill="none" stroke="var(--gold)" strokeWidth="2" />
                                </svg>
                            </div>

                            <div className="bg-rt-obsidian rounded-lg p-3 mb-4">
                                <p className="font-mono text-[10px] text-rt-silver text-center">Огледало: Калибрирано</p>
                            </div>
                            <p className="font-outfit text-sm text-rt-cream/70 leading-relaxed">
                                Преминаваш от "искане" към "имане". Изграждаш абсолютен авторитет над реалността си. Координираш намерението.
                            </p>
                        </div>
                    </div>

                    {/* PHASE 4 */}
                    <div ref={addToRefs} className="relative z-20 flex flex-col items-center flex-1 min-w-[280px] shrink-0">
                        {/* End of line dot */}
                        <div className="w-4 h-4 rounded-full bg-rt-void border-2 border-rt-gold mb-6 shadow-[0_0_10px_#C9A961]" />
                        <div className="w-full bg-rt-surface rounded-[2rem] p-8 border border-rt-gold/30">
                            <h4 className="font-mono text-rt-ash text-[10px] uppercase tracking-widest mb-2">Седмица 13 (29 страници)</h4>
                            <h3 className="font-jakarta font-bold text-rt-gold text-xl mb-6">Фаза 4: Устойчивост</h3>

                            <div className="flex justify-center items-center mb-6 h-[80px]">
                                {/* System Operational Pulse */}
                                <div className="relative flex h-16 w-16 items-center justify-center">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rt-success opacity-30"></span>
                                    <span className="relative inline-flex rounded-full h-12 w-12 border-2 border-rt-success/40 bg-rt-void items-center justify-center">
                                        <span className="w-3 h-3 bg-rt-success rounded-full shadow-[0_0_15px_#4A7C59]"></span>
                                    </span>
                                </div>
                            </div>

                            <div className="bg-rt-obsidian border border-rt-success/30 rounded-lg p-3 mb-4">
                                <p className="font-mono text-[10px] text-rt-success text-center tracking-widest">СИСТЕМА: АКТИВНА</p>
                            </div>
                            <p className="font-outfit text-sm text-rt-cream/70 leading-relaxed">
                                Протокол за поддръжка. Как да реагираш, когато реалността временно се "развали". Продължаваш напред.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
