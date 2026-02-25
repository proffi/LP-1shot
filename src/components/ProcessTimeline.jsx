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
            id="как работи"
            className="relative w-full bg-rt-void py-32 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-8 md:px-16 mb-24 text-center">
                <h2 className="font-cormorant italic text-rt-gold text-4xl md:text-5xl mb-6">Ден по ден. Стъпка по стъпка.</h2>
                <p className="font-outfit text-rt-cream text-lg max-w-2xl mx-auto opacity-80">
                    Не е книга за четене. Това е система за работа. 89 дни. Ден по ден.
                </p>
            </div>

            <div className="relative w-full overflow-x-auto pb-16 custom-scrollbar-hide">
                {/* The Golden Line constraint to inner container */}
                <div className="min-w-[1200px] max-w-7xl mx-auto relative px-8 flex justify-between">

                    <div className="absolute top-[34px] left-8 right-8 h-px bg-rt-ash/20 z-0" />
                    <div ref={lineRef} className="absolute top-[34px] left-8 h-px bg-rt-gold z-10 w-0 shadow-[0_0_10px_#C9A961]" />

                    {/* PHASE 1 */}
                    <div ref={addToRefs} className="relative z-20 flex flex-col items-center flex-1 max-w-[280px]">
                        <div className="w-4 h-4 rounded-full bg-rt-void border-2 border-rt-gold mb-6" />
                        <div className="w-full bg-[#121620] rounded-[2rem] p-8 border border-rt-ash/10">
                            <h4 className="font-mono text-rt-ash text-[10px] uppercase tracking-widest mb-2">Weeks 1–4 (55 pages)</h4>
                            <h3 className="font-jakarta font-bold text-rt-silver text-xl mb-6">Phase 1: ИЗЧИСТВАНЕ</h3>

                            <div className="flex justify-center mb-6 h-[80px]">
                                {/* Gauge SVG */}
                                <svg className="w-20 h-20 transform -rotate-90">
                                    <circle cx="40" cy="40" r="36" fill="transparent" stroke="var(--color-rt-obsidian)" strokeWidth="4" />
                                    <circle cx="40" cy="40" r="36" fill="transparent" stroke="#CC3333" strokeWidth="4" strokeDasharray="226" strokeDashoffset="226" className="phase-1-gauge shadow-[0_0_15px_inset_currentColor]" />
                                </svg>
                            </div>

                            <div className="bg-rt-obsidian rounded-lg p-3 mb-4">
                                <p className="font-mono text-[10px] text-rt-gold text-center">Излишен потенциал → 0</p>
                            </div>
                            <p className="font-outfit text-sm text-rt-cream/70 leading-relaxed">
                                Изчистваш незавършените интенции. Освобождаваш енергия. Дефлектираш махала.
                            </p>
                        </div>
                    </div>

                    {/* PHASE 2 */}
                    <div ref={addToRefs} className="relative z-20 flex flex-col items-center flex-1 max-w-[280px]">
                        <div className="w-4 h-4 rounded-full bg-rt-void border-2 border-rt-gold mb-6" />
                        <div className="w-full bg-[#121620] rounded-[2rem] p-8 border border-rt-ash/10">
                            <h4 className="font-mono text-rt-ash text-[10px] uppercase tracking-widest mb-2">Weeks 5–9 (89 pages)</h4>
                            <h3 className="font-jakarta font-bold text-rt-silver text-xl mb-6">Phase 2: ИЗГРАЖДАНЕ</h3>

                            <div className="flex justify-center mb-6 h-[80px]">
                                {/* Target Slide Builder SVG */}
                                <svg className="phase-2-builder w-20 h-20 text-rt-gold opacity-80" viewBox="0 0 100 100">
                                    <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" />
                                    <polygon points="50,25 75,75 25,75" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="50" cy="58" r="8" fill="currentColor" opacity="0.5" />
                                </svg>
                            </div>

                            <div className="bg-rt-obsidian rounded-lg p-3 mb-4 flex items-center justify-center gap-1 text-[10px]">
                                <span className="font-mono text-rt-gold">Целеви слайд: АКТИВЕН</span>
                                <span className="w-1.5 h-3 bg-rt-gold animate-pulse"></span>
                            </div>
                            <p className="font-outfit text-sm text-rt-cream/70 leading-relaxed">
                                Създаваш целевия слайд. Активираш амалгамата. Усилваш интенцията.
                            </p>
                        </div>
                    </div>

                    {/* PHASE 3 */}
                    <div ref={addToRefs} className="relative z-20 flex flex-col items-center flex-1 max-w-[280px]">
                        <div className="w-4 h-4 rounded-full bg-rt-void border-2 border-rt-gold mb-6" />
                        <div className="w-full bg-[#121620] rounded-[2rem] p-8 border border-rt-ash/10">
                            <h4 className="font-mono text-rt-ash text-[10px] uppercase tracking-widest mb-2">Weeks 10–12 (55 pages)</h4>
                            <h3 className="font-jakarta font-bold text-rt-silver text-xl mb-6">Phase 3: МАЙСТОРСТВО</h3>

                            <div className="flex justify-center items-center mb-6 h-[80px] relative">
                                {/* Aligning Mirrors SVG */}
                                <svg className="w-20 h-20 absolute" viewBox="0 0 100 100">
                                    <polygon className="phase-3-mirror-1" style={{ transform: 'translateX(-20px) rotate(-15deg)', opacity: 0.3 }} points="50,10 80,50 50,90 20,50" fill="none" stroke="var(--color-rt-silver)" strokeWidth="2" />
                                    <polygon className="phase-3-mirror-2" style={{ transform: 'translateX(20px) rotate(15deg)', opacity: 0.3 }} points="50,10 80,50 50,90 20,50" fill="none" stroke="var(--color-rt-gold)" strokeWidth="2" />
                                </svg>
                            </div>

                            <div className="bg-rt-obsidian rounded-lg p-3 mb-4">
                                <p className="font-mono text-[10px] text-rt-silver text-center">Огледало: КАЛИБРИРАНО</p>
                            </div>
                            <p className="font-outfit text-sm text-rt-cream/70 leading-relaxed">
                                Визуализация на майстор. Бягство от огледалото. Авторитет на създателя.
                            </p>
                        </div>
                    </div>

                    {/* PHASE 4 */}
                    <div ref={addToRefs} className="relative z-20 flex flex-col items-center flex-1 max-w-[280px]">
                        {/* End of line dot */}
                        <div className="w-4 h-4 rounded-full bg-rt-void border-2 border-rt-gold mb-6 shadow-[0_0_10px_#C9A961]" />
                        <div className="w-full bg-[#121620] rounded-[2rem] p-8 border border-rt-gold/30">
                            <h4 className="font-mono text-rt-ash text-[10px] uppercase tracking-widest mb-2">Week 13 (13 pages)</h4>
                            <h3 className="font-jakarta font-bold text-rt-gold text-xl mb-6">Phase 4: УСТОЙЧИВОСТ</h3>

                            <div className="flex justify-center items-center mb-6 h-[80px]">
                                {/* System Operational Pulse */}
                                <div className="relative flex h-16 w-16">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rt-amber opacity-20"></span>
                                    <span className="relative inline-flex rounded-full h-16 w-16 border-4 border-rt-amber/40 bg-rt-void flex items-center justify-center">
                                        <span className="w-4 h-4 bg-rt-gold rounded-full shadow-[0_0_15px_#C9A961]"></span>
                                    </span>
                                </div>
                            </div>

                            <div className="bg-rt-obsidian border border-rt-gold/20 rounded-lg p-3 mb-4">
                                <p className="font-mono text-[10px] text-rt-gold text-center">СИСТЕМА: АКТИВНА</p>
                            </div>
                            <p className="font-outfit text-sm text-rt-cream/70 leading-relaxed">
                                Персонална рутина. Ротация на техники. Поддръжка. Продължаваш.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
