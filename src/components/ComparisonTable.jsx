import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ComparisonTable = () => {
    const tableRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".comp-row",
                { autoAlpha: 0, x: -21 },
                {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: tableRef.current,
                        start: "top 75%"
                    }
                }
            );
        }, tableRef);
        return () => ctx.revert();
    }, []);

    const data = [
        {
            feature: "Подход към желанията",
            them: "Молиш се, надяваш се, \"привличаш\" и чакаш вселената да отговори.",
            us: "Избираш желания вариант от пространството на варианти без излишен потенциал."
        },
        {
            feature: "Отношение към препятствията",
            them: "Бориш се с тях, ядосваш се, губиш енергия в съпротива.",
            us: "Проваляш махалото. Позволяваш на събитието да премине през теб, без да те закачи."
        },
        {
            feature: "Афирмации / Визуализации",
            them: "Повтаряш думи пред огледалото механично. Визуализираш крайния резултат.",
            us: "Конструираш целеви слайд. Визуализираш ПРОЦЕСА. Използваш амалгама."
        },
        {
            feature: "Контрол над реалността",
            them: "Опитваш се да контролираш външния свят и другите хора (Вътрешна интенция).",
            us: "Позволяваш на света да бъде такъв, какъвто е. Управляваш само своето отношение (Външна интенция)."
        },
        {
            feature: "Егрегори (Махала)",
            them: "Дори не знаеш, че съществуват. Отдаваш им енергията си чрез стрес и конфликти.",
            us: "Разпознаваш ги веднага. Използваш енергията им (гасене/провал) в своя полза."
        },
        {
            feature: "Структура на практиката",
            them: "Четеш поредната книга за самопомощ, мотивираш се за 3 дни, забравяш всичко.",
            us: "89-дневен фиксиран протокол. Ден по ден инструкции. Фази на надграждане."
        }
    ];

    return (
        <section
            id="разликата"
            className="w-full bg-[#05070a] py-32 px-4 md:px-16 relative overflow-hidden"
        >
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,_var(--color-rt-gold-dim)_0%,_transparent_70%)] opacity-30 pointer-events-none" />
            <div className="max-w-5xl mx-auto flex flex-col items-center">

                <h2 className="font-cormorant italic font-bold text-rt-gold text-4xl md:text-[3.5rem] mb-16 text-center">
                    Разликата е всичко.
                </h2>

                <div
                    ref={tableRef}
                    className="w-full bg-[#121620] rounded-[2rem] border border-rt-gold/20 overflow-hidden shadow-[0_0_30px_rgba(201,169,97,0.05)]"
                >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row border-b border-rt-gold/20 bg-rt-surface/50">
                        <div className="p-6 md:p-8 flex-1 md:flex-[1.2]">
                            <h4 className="font-mono text-rt-ash text-xs uppercase tracking-widest invisible">Критерий</h4>
                        </div>
                        <div className="p-6 md:p-8 flex-1 bg-rt-void/30 border-t md:border-t-0 md:border-l border-rt-silver-dim/10">
                            <h4 className="font-mono text-rt-silver-dim text-xs uppercase tracking-widest text-center">Масовият подход</h4>
                        </div>
                        <div className="p-6 md:p-8 flex-1 bg-rt-gold/5 relative border-t md:border-t-0 md:border-l border-rt-gold/20">
                            <h4 className="font-mono text-rt-gold text-xs uppercase tracking-widest text-center">Reality Transurfing</h4>
                            {/* Glow effect for our column */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-rt-gold/50 shadow-[0_0_15px_#C9A961]"></div>
                        </div>
                    </div>

                    {/* Rows */}
                    {data.map((row, i) => (
                        <div key={i} className="comp-row flex flex-col md:flex-row border-b border-rt-gold/10 last:border-b-0 hover:bg-rt-surface/30 transition-colors">
                            <div className="p-6 md:p-8 flex-1 md:flex-[1.2] flex items-center">
                                <h5 className="font-jakarta font-bold text-rt-cream text-base md:text-lg">{row.feature}</h5>
                            </div>
                            <div className="p-6 md:p-8 flex-1 bg-rt-void/30 border-t md:border-t-0 md:border-l border-rt-silver-dim/10 flex items-start">
                                <p className="font-outfit text-rt-ash/70 text-sm leading-relaxed relative pl-6">
                                    <span className="absolute left-0 top-0 text-rt-strikethrough text-lg leading-none">✕</span>
                                    {row.them}
                                </p>
                            </div>
                            <div className="p-6 md:p-8 flex-1 bg-rt-gold/5 border-t md:border-t-0 md:border-l border-rt-gold/20 flex items-start">
                                <p className="font-outfit text-rt-gold text-sm leading-relaxed font-bold relative pl-6">
                                    <span className="absolute left-0 top-0 text-rt-success text-lg leading-none mt-[-2px]">✓</span>
                                    {row.us}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
