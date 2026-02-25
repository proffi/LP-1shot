import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContentPreview = () => {
    const containerRef = useRef(null);
    const mockupsRef = useRef([]);

    const addToRefs = (el) => {
        if (el && !mockupsRef.current.includes(el)) mockupsRef.current.push(el);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(mockupsRef.current,
                { autoAlpha: 0, y: 55 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%"
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const contents = [
        {
            title: "Ежедневен Лист",
            meta: "Инструмент: Фаза 2",
            desc: "Точната структура за записване на целевия слайд и проследяване на амалгамата всеки ден.",
            image: "/mockup1.jpg"
        },
        {
            title: "Дефлектор на Махала",
            meta: "Инструмент: Фаза 1",
            desc: "Алгоритъм за разпознаване кога махало се опитва да те закачи и как да го 'провалиш' (провал на махалото).",
            image: "/mockup2.jpg"
        },
        {
            title: "Координатор на Намерението",
            meta: "Инструмент: Фаза 3",
            desc: "Техника за превръщане на 'негативни' събития в гориво за основното ти намерение.",
            image: "/mockup3.jpg"
        }
    ];

    return (
        <section
            ref={containerRef}
            className="w-full bg-gradient-to-b from-rt-void to-[#10131A] py-32 px-8 md:px-16 border-b border-rt-silver-dim/10 relative overflow-hidden"
        >
            {/* Continuous Sacred Geometry Grid */}
            <div className="absolute inset-0 z-0 bg-grid-gold pointer-events-none opacity-40 mix-blend-overlay" />
            {/* Diagonal geometric cuts */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-rt-gold/5 to-transparent skew-x-12 transform origin-top-right pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-rt-silver/5 to-transparent -skew-x-12 transform origin-bottom-left pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <h2 className="font-cormorant italic font-bold text-rt-gold text-4xl md:text-5xl mb-6">Какво има вътре?</h2>
                    <p className="font-outfit text-rt-ash text-lg max-w-2xl mx-auto">
                        Част от инструментите, които получаваш в <strong className="text-rt-cream font-jakarta">Създателят</strong> (Книга 2).
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-16">
                    {contents.map((item, index) => (
                        <div key={index} ref={addToRefs} className="flex flex-col items-center group cursor-default">
                            {/* Mockup Frame */}
                            <div className="w-full aspect-[4/5] bg-rt-surface border border-rt-silver-dim/20 rounded-[2rem] p-6 mb-8 relative overflow-hidden transition-all duration-500 group-hover:border-rt-gold/40 group-hover:shadow-[0_0_30px_rgba(201,169,97,0.1)] group-hover:-translate-y-2">

                                {/* Inner Wireframe Graphic (placeholder for actual images) */}
                                <div className="absolute inset-4 rounded-xl border border-dashed border-rt-ash/30 flex flex-col items-center justify-center bg-[#121620]">
                                    <svg className="w-12 h-12 text-rt-ash/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="font-mono text-[10px] text-rt-ash mt-4 uppercase tracking-widest">{item.title}</span>
                                </div>
                            </div>

                            <div className="text-center w-full max-w-sm">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-rt-gold mb-3 block">{item.meta}</span>
                                <h3 className="font-jakarta font-bold text-rt-cream text-2xl mb-4">{item.title}</h3>
                                <p className="font-outfit text-rt-ash/80 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContentPreview;
