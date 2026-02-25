import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SocialProofAndComparison = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Preview cards sequence
            gsap.fromTo(".preview-card",
                { y: 34, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 1,
                    stagger: 0.13,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: "#social-proof",
                        start: "top 70%"
                    }
                }
            );

            // Comparison Table sweep
            gsap.fromTo(".comp-table",
                { y: 55, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: "#comparison", start: "top 80%" } }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full bg-rt-void py-32 px-8 md:px-16 flex flex-col items-center">

            {/* SOCIAL PROOF (Content Preview Grid) */}
            <section id="social-proof" className="max-w-7xl w-full flex flex-col items-center mb-48">
                <h2 className="font-cormorant italic text-rt-gold text-4xl md:text-5xl mb-16 underline decoration-rt-gold/20 underline-offset-[13px]">
                    Какво Има Вътре
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">

                    {/* Card 1 */}
                    <div className="preview-card group relative bg-[#121620] p-10 rounded-[2rem] border border-rt-ash/10 hover:-translate-y-2 hover:border-rt-silver/30 transition-all duration-500 overflow-hidden">
                        <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-5 transition-opacity duration-1000 pointer-events-none" viewBox="0 0 100 100">
                            <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="var(--color-rt-silver)" strokeWidth="0.5" />
                        </svg>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6 opacity-60">
                                {/* Mock TOC snippet */}
                                <div className="font-mono text-[10px] text-rt-ash border-b border-rt-ash/20 pb-2 mb-2 flex justify-between"><span>ГЛАВА 4: ПРОСТРАНСТВО НА ВАРИАНТИТЕ</span><span>стр.42</span></div>
                                <div className="font-mono text-[10px] text-rt-ash border-b border-rt-ash/20 pb-2 mb-2 flex justify-between"><span>ГЛАВА 5: ИНДУКЦИРАН ПРЕХОД</span><span>стр.55</span></div>
                                <div className="font-mono text-[10px] text-rt-ash border-b border-rt-ash/20 pb-2 mb-2 flex justify-between"><span>ГЛАВА 6: ТЕЧЕНИЕ НА ВАРИАНТИТЕ</span><span>стр.68</span></div>
                            </div>
                            <div className="mt-auto">
                                <h3 className="font-jakarta font-bold text-rt-cream text-xl mb-2">Модел, Не Теория</h3>
                                <p className="font-outfit text-sm text-rt-ash">12 глави. 4 части. 141 страници система.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="preview-card group relative bg-[#121620] p-10 rounded-[2rem] border border-rt-ash/10 hover:-translate-y-2 hover:border-rt-gold/30 transition-all duration-500 overflow-hidden shadow-[0_0_0_rgba(201,169,97,0)] hover:shadow-[0_20px_40px_rgba(201,169,97,0.05)]">
                        <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-5 transition-opacity duration-1000 pointer-events-none delay-[130ms]" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-rt-gold)" strokeWidth="0.5" strokeDasharray="2 4" />
                            <line x1="50" y1="10" x2="50" y2="90" stroke="var(--color-rt-gold)" strokeWidth="0.5" opacity="0.5" />
                        </svg>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6 bg-rt-obsidian border border-rt-gold/10 rounded-xl p-4 opacity-80">
                                {/* Mock Worksheet snippet */}
                                <div className="font-mono text-rt-gold/80 text-[10px] uppercase mb-3">Ден 34: Фокус на интенцията</div>
                                <div className="w-full h-[1px] bg-rt-ash/20 mb-2"></div>
                                <div className="w-3/4 h-[1px] bg-rt-ash/20 mb-4"></div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-3 h-3 border border-rt-gold/50 rounded-sm"></div>
                                    <span className="font-mono text-[8px] text-rt-ash">Трансфер на енергия завършен</span>
                                </div>
                            </div>
                            <div className="mt-auto">
                                <h3 className="font-jakarta font-bold text-rt-gold text-xl mb-2">Ден-По-Ден Инструкции</h3>
                                <p className="font-outfit text-sm text-rt-ash">89 дни. Конкретни задачи. Проследяващи листове.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="preview-card group relative bg-[#121620] p-10 rounded-[2rem] border border-rt-ash/10 hover:-translate-y-2 hover:border-rt-silver/30 transition-all duration-500 overflow-hidden">
                        <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-5 transition-opacity duration-1000 pointer-events-none delay-[210ms]" viewBox="0 0 100 100">
                            <path d="M 20 50 Q 50 10 80 50 T 20 50" fill="none" stroke="var(--color-rt-silver)" strokeWidth="0.5" />
                        </svg>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6 p-4 border border-red-900/30 bg-red-900/10 rounded-xl mt-4">
                                <p className="font-cormorant italic text-rt-silver/80 text-sm leading-relaxed">
                                    "Резултатите НЕ са гарантирани.<br />Системата работи ако ТИ работиш. Огледалото има закъснение."
                                </p>
                            </div>
                            <div className="mt-auto">
                                <h3 className="font-jakarta font-bold text-rt-cream text-xl mb-2">Не Продаваме Мечти</h3>
                                <p className="font-outfit text-sm text-rt-ash">Честност. Не обещания.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* COMPARISON TABLE */}
            <section id="comparison" className="max-w-4xl w-full flex flex-col items-center">
                <h2 className="font-cormorant italic text-rt-cream text-3xl md:text-4xl mb-12">
                    Защо това е различно?
                </h2>

                <div className="comp-table w-full bg-[#121620] rounded-[2rem] border border-rt-gold/20 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                    {/* Table Header */}
                    <div className="grid grid-cols-2 md:grid-cols-[1fr_2fr_2fr] border-b border-rt-gold/10 p-6 bg-rt-obsidian">
                        <div className="hidden md:block"></div>
                        <div className="font-mono text-rt-ash text-xs uppercase tracking-widest text-center px-4">„Манифестация" книги</div>
                        <div className="font-mono text-rt-gold text-xs uppercase tracking-widest text-center px-4">Тази Система</div>
                    </div>

                    <div className="flex flex-col">
                        <ComparisonRow label="Подход" c1="„Привличай с вибрации&quot;" c2="Избирай от пространството на вариантите" />
                        <ComparisonRow label="Структура" c1="Вдъхновяващо четиво" c2="89-дневен ден-по-ден протокол" />
                        <ComparisonRow label="Автор" c1="Гуру с лична марка" c2="Анонимен практикуващ" />
                        <ComparisonRow label="Обещание" c1="„Мечтаният ти живот&quot;" c2="Механика, която работи ако работиш" />
                        <ComparisonRow label="Цена" c1="€30-50+ за вдъхновение" c2="€39 за пълен работен алгоритъм" />
                        <ComparisonRow label="Формат" c1="Книга за четене" c2="Работни тетрадки за писане" />
                        <ComparisonRow label="Резултати" c1="„Вярвай и ще стане&quot;" c2="Конкретни проследяващи листове" last />
                    </div>
                </div>

            </section>

        </div>
    );
};

const ComparisonRow = ({ label, c1, c2, last = false }) => (
    <div className={`grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] ${!last ? 'border-b border-rt-ash/10' : ''}`}>
        <div className="hidden md:flex font-mono text-rt-ash text-[10px] uppercase tracking-widest items-center pl-8 py-6 opacity-50">
            {label}
        </div>
        <div className="p-6 md:py-6 flex flex-col md:items-center justify-center border-b md:border-b-0 md:border-r border-rt-ash/10 bg-[#0c1018]">
            <span className="md:hidden font-mono text-rt-ash text-[10px] uppercase tracking-widest mb-2 opacity-50">{label}</span>
            <p className="font-outfit text-rt-silver/50 text-sm text-center line-through decoration-rt-ash/30">{c1}</p>
        </div>
        <div className="p-6 md:py-6 flex flex-col md:items-center justify-center bg-rt-gold/5">
            <span className="md:hidden font-mono text-rt-gold text-[10px] uppercase tracking-widest mb-2 opacity-80">{label}</span>
            <p className="font-jakarta font-bold text-rt-gold text-base text-center gold-sweep">{c2}</p>
        </div>
    </div>
);

export default SocialProofAndComparison;
