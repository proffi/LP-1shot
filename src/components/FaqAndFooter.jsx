import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const defaultFaqs = [
    { q: "Това ли е поредната книга за „закон на привличането“?", a: "Не. Различен модел. Reality Transurfing работи по друга механика. „Закон на привличането“ = привличаш с енергия. Reality Transurfing = избираш от поле от варианти. Разликата е критична." },
    { q: "Защо трябва да ви вярвам?", a: "Не трябва. Вземи Книга 1 (€21), прочети я. Ако не кликне — не губиш много. Ако кликне — Книга 2 те чака с практиката." },
    { q: "Колко време трябва да практикувам дневно?", a: "Минимум: 15 минути. Оптимално: 30-45 минути. Без практика = без резултати. Системата изисква работа." },
    { q: "Кога ще видя първите резултати?", a: "Малки промени: 7-14 дни. Явни синхронизации: 3-4 седмици. Недвусмислени доказателства: 60-89 дни. Огледалото има закъснение. Търпението е част от механиката." },
    { q: "Кой е авторът?", a: "Практикуващ, който го накара да работи и го систематизира. Името не е важно. Съдържанието е важно." },
    { q: "На български ли е?", a: "Да. Пълна адаптация за български читател. Не буквален превод — систематизация." },
    { q: "Физически книги ли са?", a: "Да. A5 формат. Качествена хартия. Книга 2 е работна тетрадка — за писане, не за четене на екран." },
    { q: "Имате ли гаранция за резултат?", a: "Не. Системата работи ако ТИ работиш. Това не е магически амулет. Това е 89-дневен протокол, който изисква приложение." }
];

const FaqAndFooter = () => {
    const ctaRef = useRef(null);

    const [hoverSecret, setHoverSecret] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Final CTA dramatic reveal sequence
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: "top 60%"
                }
            });
            tl.fromTo(".cta-line-1", { autoAlpha: 0, y: 21 }, { autoAlpha: 1, y: 0, duration: 1 })
                .fromTo(".cta-line-2", { autoAlpha: 0, y: 21 }, { autoAlpha: 1, y: 0, duration: 1 }, "-=0.5")
                .fromTo(".cta-line-3", { autoAlpha: 0, y: 21, scale: 0.95 }, { autoAlpha: 1, y: 0, scale: 1, duration: 1.618, ease: "power2.out" }, "-=0.2")
                .fromTo(".cta-meta", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, "+=0.5")
                .fromTo(".cta-buttons", { autoAlpha: 0, y: 34 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.2 }, "-=0.5");
        }, ctaRef);
        return () => ctx.revert();
    }, []);

    return (
        <>
            {/* FAQ SECTION: "The Interrogation" */}
            <section id="въпроси" className="w-full py-32 px-4 md:px-8 flex flex-col items-center relative overflow-hidden" style={{
                background: 'linear-gradient(180deg, #0c1020 0%, #080a12 50%, #050710 100%)'
            }}>
                {/* Layer 2: Tight Spotlight */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-full pointer-events-none z-0 mix-blend-screen" style={{
                    background: 'radial-gradient(ellipse 50% 100% at 50% 0%, rgba(201,169,97,0.05) 0%, transparent 100%)'
                }} />

                {/* Layer 3: Vertical Pillars (Left & Right margins) */}
                <div className="absolute top-0 left-[15%] w-[1px] h-full bg-[rgba(232,232,232,0.03)] pointer-events-none hidden md:block" />
                <div className="absolute top-0 right-[15%] w-[1px] h-full bg-[rgba(232,232,232,0.03)] pointer-events-none hidden md:block" />

                {/* Layer 4: Noise */}
                <div className="absolute inset-0 pointer-events-none z-0 mix-blend-overlay opacity-[0.035]">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <filter id="faqNoise">
                            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#faqNoise)" />
                    </svg>
                </div>

                <div className="max-w-3xl mx-auto w-full relative z-10">
                    <h2 className="font-cormorant italic font-bold text-rt-silver text-4xl md:text-5xl mb-16 text-center">Преди да вземеш решение.</h2>
                    <div className="flex flex-col gap-4">
                        {defaultFaqs.map((faq, i) => (
                            <Accordion key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA SECTION: "The Choice" */}
            <section ref={ctaRef} className="relative w-full min-h-[100dvh] bg-rt-obsidian flex flex-col items-center justify-center py-32 px-8 overflow-hidden">

                {/* Generative Geometry Background (More prominent) */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
                    <svg className="w-full h-full text-rt-gold" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                        <g stroke="currentColor" fill="none" strokeWidth="0.1" opacity="0.3">
                            <circle cx="50" cy="50" r="45" />
                            <polygon points="50,5 93.3,75 6.7,75" />
                            <polygon points="50,95 6.7,25 93.3,25" />
                            {/* 369 embedded spiral */}
                            <path d="M 50 50 Q 55 45 60 50 T 50 65 Q 30 50 50 30 T 80 50" />
                        </g>
                    </svg>
                </div>

                <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center">
                    <h2 className="cta-line-1 font-jakarta font-bold text-rt-silver text-2xl mb-4">Реалността е огледало.</h2>
                    <h2 className="cta-line-2 font-jakarta font-bold text-rt-cream text-3xl mb-4">Или ти го оперираш,</h2>
                    <h1 className="cta-line-3 font-cormorant italic font-bold text-rt-gold text-5xl md:text-7xl mb-[55px] drop-shadow-[0_0_30px_rgba(201,169,97,0.3)]">
                        или то оперира теб.
                    </h1>

                    <p className="cta-meta font-mono text-rt-gold text-lg md:text-xl tracking-wide mb-[34px]">
                        369 страници. 2 книги. 1 система.
                    </p>

                    <div className="cta-buttons flex flex-col gap-[21px] w-full max-w-sm mb-[55px]">
                        <button className="w-full py-5 rounded-full bg-rt-gold text-rt-obsidian font-jakarta font-bold text-lg btn-shine-sweep transition-transform hover:scale-[1.03] shadow-[0_0_20px_rgba(201,169,97,0.2)]">
                            ВЗЕМИ ПЪЛНАТА СИСТЕМА — €39
                        </button>
                        <button className="w-full py-4 rounded-full border border-rt-silver text-rt-silver font-jakarta text-sm hover:bg-rt-silver/10 transition-colors">
                            ЗАПОЧНИ С КНИГА 1 — €21
                        </button>
                    </div>

                    <p className="cta-meta font-outfit text-rt-ash text-sm opacity-80">
                        Физически книги · Доставка в България · Speedy / Econt · 3-5 дни
                    </p>
                </div>
            </section>

            {/* FOOTER: "The Event Horizon" */}
            <footer className="w-full px-8 pt-24 pb-8 border-t border-rt-silver-dim/10 text-rt-cream z-20 relative overflow-hidden" style={{
                backgroundColor: '#000000'
            }}>
                {/* Layer 2: Bottom Edge Gold Gradient (The Horizon) */}
                <div className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none z-0" style={{
                    background: 'linear-gradient(0deg, rgba(201,169,97,0.08) 0%, transparent 100%)'
                }} />

                {/* Layer 3: Very Slow Ascension Particles */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                    {[...Array(10)].map((_, i) => (
                        <div key={`ascend-${i}`} className="absolute w-[2px] h-[2px] rounded-full bg-[rgba(201,169,97,0.3)] animate-[ascend_30s_infinite_linear]" style={{
                            left: `${Math.random() * 100}%`,
                            bottom: `-10px`,
                            animationDelay: `${-(Math.random() * 30)}s`
                        }} />
                    ))}
                </div>

                {/* Layer 4: Noise */}
                <div className="absolute inset-0 pointer-events-none z-0 mix-blend-overlay opacity-[0.05]">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <filter id="footerNoise">
                            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#footerNoise)" />
                    </svg>
                </div>

                <style>{`@keyframes ascend { from { transform: translateY(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } to { transform: translateY(-300px); opacity: 0; } }`}</style>

                <div className="max-w-7xl mx-auto relative z-10">

                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-16 mb-24">
                        {/* Left */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="mb-4">
                                <svg width="42" height="42" viewBox="0 0 100 100" fill="none" stroke="var(--color-rt-gold)" strokeWidth="1.5">
                                    <polygon points="50,15 85,75 15,75" opacity="0.8" />
                                    <polygon points="50,85 15,25 85,25" stroke="var(--color-rt-silver)" opacity="0.6" />
                                </svg>
                            </div>
                            <p className="font-mono text-rt-ash text-xs uppercase tracking-[0.2em]">Механика, не мистика.</p>
                        </div>

                        {/* Center */}
                        <div className="flex gap-8 flex-wrap justify-center">
                            <a href="#системата" className="font-outfit font-bold tracking-widest uppercase text-rt-ash text-xs hover:text-rt-gold transition-colors">Системата</a>
                            <a href="#разликата" className="font-outfit font-bold tracking-widest uppercase text-rt-ash text-xs hover:text-rt-gold transition-colors">Огледалото</a>
                            <a href="#книгите" className="font-outfit font-bold tracking-widest uppercase text-rt-ash text-xs hover:text-rt-gold transition-colors">Книгите</a>
                            <a href="#въпроси" className="font-outfit font-bold tracking-widest uppercase text-rt-ash text-xs hover:text-rt-gold transition-colors">Въпроси</a>
                        </div>

                        {/* Right */}
                        <div className="flex flex-col items-center md:items-end">
                            <div className="flex gap-4 opacity-50 mb-4">
                                {/* Mock Card/Payment Icons */}
                                <div className="w-10 h-6 border border-rt-cream rounded-sm"></div>
                                <div className="w-10 h-6 border border-rt-cream rounded-sm"></div>
                                <div className="w-10 h-6 border border-rt-cream rounded-sm"></div>
                            </div>
                            <p className="font-outfit text-[10px] text-rt-ash">Карта · PayPal · Наложен платеж</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-rt-silver-dim/10">
                        {/* Left Bottom */}
                        <p className="font-outfit text-rt-ash text-[10px] uppercase tracking-widest">© 2026. Всички права запазени.</p>

                        {/* Center Bottom (Tiny logo) */}
                        <svg width="16" height="16" viewBox="0 0 100 100" fill="none" stroke="var(--color-rt-gold)" strokeWidth="2" className="opacity-50">
                            <circle cx="50" cy="50" r="40" opacity="0.5" />
                        </svg>

                        {/* Right Bottom Easter Egg */}
                        <div className="flex items-center gap-6">
                            <p
                                onMouseEnter={() => setHoverSecret(true)}
                                onMouseLeave={() => setHoverSecret(false)}
                                className="font-mono text-[10px] cursor-default transition-all duration-700"
                                style={{ color: hoverSecret ? "#C9A961" : "rgba(201, 169, 97, 0.3)" }}
                            >
                                {hoverSecret ? "369 | φ | ∞" : "Числата не са случайни."}
                            </p>

                            {/* System Active Dot */}
                            <div className="flex items-center gap-2">
                                <div className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rt-gold opacity-40"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rt-gold"></span>
                                </div>
                                <span className="font-mono text-[10px] text-rt-ash">Система: Активна</span>
                            </div>
                        </div>

                    </div>
                </div>
            </footer >
        </>
    );
};

// Custom Accordion Component
const Accordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.to(contentRef.current, { height: "auto", duration: 0.3, ease: "power2.out" });
            gsap.to(contentRef.current.firstChild, { autoAlpha: 1, y: 0, duration: 0.3, delay: 0.1 });
        } else {
            gsap.to(contentRef.current.firstChild, { autoAlpha: 0, y: -10, duration: 0.2 });
            gsap.to(contentRef.current, { height: 0, duration: 0.3, ease: "power2.in" });
        }
    }, [isOpen]);

    return (
        <div
            className={`w-full bg-rt-surface rounded-[1.5rem] border ${isOpen ? 'border-rt-gold/40' : 'border-rt-silver-dim/20'} transition-colors duration-300 overflow-hidden cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="p-6 md:p-8 flex justify-between items-center">
                <h4 className="font-jakarta font-bold text-rt-silver text-sm md:text-base pr-4 leading-relaxed">{question}</h4>
                <div
                    className="w-6 h-6 flex items-center justify-center flex-shrink-0 text-rt-gold transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                    {/* Custom Plus Icon */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </div>
            </div>
            <div ref={contentRef} className="h-0 overflow-hidden">
                <div className="px-6 md:px-8 pb-8 pt-2 font-outfit text-rt-cream/70 text-sm md:text-base opacity-0 -translate-y-2 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default FaqAndFooter;
