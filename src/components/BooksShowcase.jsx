import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BooksShowcase = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Intro animations for the cards
            gsap.fromTo(".book-card",
                { y: 55, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%"
                    }
                }
            );

            // Bundle card pulse
            gsap.to(".bundle-price", {
                scale: 1.05,
                color: "#ffffff",
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            id="книгите"
            className="relative w-full bg-rt-void py-24 px-8 md:px-16"
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">

                <div className="w-full flex flex-col md:flex-row gap-8">

                    {/* CARD 1: Book 1 (38.2% width on desktop) */}
                    <div className="book-card flex-1 md:flex-[0.382] bg-[#121620] rounded-[3rem] p-10 md:p-12 
            border border-rt-silver/10 hover:border-rt-silver/30 transition-all duration-500
            hover:-translate-y-2 relative overflow-hidden group">

                        {/* Background mirrored geometry hint */}
                        <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none transition-transform duration-1000 group-hover:scale-110" viewBox="0 0 100 100">
                            <polygon points="10,50 50,10 90,50 50,90" stroke="var(--color-rt-silver)" fill="none" strokeWidth="0.5" />
                            <polygon points="20,50 50,20 80,50 50,80" stroke="var(--color-rt-silver)" fill="none" strokeWidth="0.5" />
                        </svg>

                        <div className="relative z-10">
                            {/* Book Image Placeholder */}
                            <div className="w-full aspect-[3/4] mb-8 rounded-lg overflow-hidden border border-rt-silver/20 shadow-[-10px_10px_30px_rgba(0,0,0,0.8)] transform transition-transform group-hover:scale-105 group-hover:-rotate-2">
                                <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop" alt="ОГЛЕДАЛОТО Книга" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all" />
                            </div>
                            <h4 className="font-mono text-rt-silver uppercase text-xs tracking-[0.2em] mb-4">Книга Първа</h4>
                            <h2 className="font-cormorant italic text-rt-silver text-4xl mb-4">ОГЛЕДАЛОТО</h2>
                            <p className="font-mono text-rt-ash text-sm mb-12 border-b border-rt-ash/20 pb-4">
                                Разбиране на Модела — 141 Страници
                            </p>

                            <ul className="flex flex-col gap-5 text-rt-silver border-l border-rt-silver/20 pl-6 mb-16">
                                <li className="font-outfit text-sm relative before:content-[''] before:absolute before:-left-8 before:top-2 before:w-4 before:h-[1px] before:bg-rt-silver">Как реалността всъщност работи (двойното огледало)</li>
                                <li className="font-outfit text-sm relative before:content-[''] before:absolute before:-left-8 before:top-2 before:w-4 before:h-[1px] before:bg-rt-silver">Кой краде енергията ти ежедневно (махалата)</li>
                                <li className="font-outfit text-sm relative before:content-[''] before:absolute before:-left-8 before:top-2 before:w-4 before:h-[1px] before:bg-rt-silver">Защо целите ти не се материализират (излишен потенциал)</li>
                                <li className="font-outfit text-sm relative before:content-[''] before:absolute before:-left-8 before:top-2 before:w-4 before:h-[1px] before:bg-rt-silver">Разликата между вътрешна и външна интенция</li>
                                <li className="font-outfit text-sm relative before:content-[''] before:absolute before:-left-8 before:top-2 before:w-4 before:h-[1px] before:bg-rt-silver">Седемте принципа на огледалото</li>
                            </ul>

                            <div className="mt-auto">
                                <p className="font-mono text-rt-silver text-3xl mb-6">€21</p>
                                <button className="w-full py-4 rounded-full border border-rt-silver text-rt-silver font-jakarta text-sm hover:bg-rt-silver hover:text-rt-obsidian transition-colors duration-300">
                                    Започни с Книга 1
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Middle aesthetic connector */}
                    <div className="hidden md:flex flex-col items-center justify-center opacity-30">
                        <div className="h-16 w-[1px] bg-rt-silver/50 mb-2"></div>
                        <span className="font-mono text-rt-cream">+</span>
                        <div className="h-16 w-[1px] bg-rt-gold/50 mt-2"></div>
                    </div>

                    {/* CARD 2: Book 2 (61.8% width on desktop) */}
                    <div className="book-card flex-1 md:flex-[0.618] bg-[#121620] rounded-[3rem] p-10 md:p-12 
            border border-rt-gold/20 hover:border-rt-gold/40 transition-all duration-500
            hover:-translate-y-2 relative overflow-hidden group shadow-[0_0_30px_rgba(201,169,97,0.05)]">

                        {/* Background blueprint geometry */}
                        <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none transition-transform duration-[1.618s] group-hover:rotate-12" viewBox="0 0 100 100">
                            {/* Fibonacci spiral hint */}
                            <path d="M 50 50 Q 60 40 70 50 T 50 80 Q 20 50 50 20 T 90 50" stroke="var(--color-rt-gold)" fill="none" strokeWidth="0.5" />
                        </svg>

                        <div className="relative z-10 flex flex-col h-full">
                            {/* Book Image Placeholder */}
                            <div className="w-full max-w-[300px] mx-auto aspect-[3/4] mb-8 rounded-lg overflow-hidden border border-rt-gold/30 shadow-[-10px_10px_40px_rgba(201,169,97,0.15)] transform transition-transform group-hover:scale-105 group-hover:rotate-2">
                                <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop" alt="СЪЗДАТЕЛЯТ Книга" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all" />
                            </div>
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="font-mono text-rt-gold uppercase text-xs tracking-[0.2em]">Книга Втора</h4>
                                <span className="bg-rt-gold/10 text-rt-gold font-mono text-[10px] px-3 py-1 rounded-full uppercase tracking-wider border border-rt-gold/20">
                                    89-ДНЕВНА СИСТЕМА
                                </span>
                            </div>

                            <h2 className="font-cormorant italic text-rt-gold text-5xl mb-4">СЪЗДАТЕЛЯТ</h2>
                            <p className="font-mono text-rt-ash text-sm mb-12 border-b border-rt-ash/20 pb-4">
                                Оперирайки Реалността — 228 Страници
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                                <ul className="flex flex-col gap-4 text-rt-cream border-l border-rt-gold/30 pl-6">
                                    <li className="font-outfit text-sm relative before:content-[''] before:absolute before:-left-8 before:top-2 before:w-4 before:h-[1px] before:bg-rt-gold">Фаза 1: Изчистване (Седмици 1-4)</li>
                                    <li className="font-outfit text-sm relative before:content-[''] before:absolute before:-left-8 before:top-2 before:w-4 before:h-[1px] before:bg-rt-gold">Фаза 2: Слайд и амалгама (Седмици 5-9)</li>
                                    <li className="font-outfit text-sm relative before:content-[''] before:absolute before:-left-8 before:top-2 before:w-4 before:h-[1px] before:bg-rt-gold">Фаза 3: Авторитет (Седмици 10-12)</li>
                                    <li className="font-outfit text-sm relative before:content-[''] before:absolute before:-left-8 before:top-2 before:w-4 before:h-[1px] before:bg-rt-gold">89-дневен пълен протокол</li>
                                </ul>
                                <ul className="flex flex-col gap-4 text-rt-cream border-l border-rt-gold/30 pl-6">
                                    <li className="font-outfit text-sm relative before:content-[''] before:absolute before:-left-8 before:top-2 before:w-4 before:h-[1px] before:bg-rt-gold">Ден-по-ден инструкции</li>
                                    <li className="font-outfit text-sm relative before:content-[''] before:absolute before:-left-8 before:top-2 before:w-4 before:h-[1px] before:bg-rt-gold">Проследяващи листове за всяка седмица</li>
                                    <li className="font-outfit text-sm relative before:content-[''] before:absolute before:-left-8 before:top-2 before:w-4 before:h-[1px] before:bg-rt-gold">Техники за усилване на практиката</li>
                                    <li className="font-outfit text-sm relative before:content-[''] before:absolute before:-left-8 before:top-2 before:w-4 before:h-[1px] before:bg-rt-gold">Седмични оценки и корекции</li>
                                </ul>
                            </div>

                            <div className="mt-auto">
                                <p className="font-mono text-rt-gold text-3xl mb-6">€34</p>
                                <button className="w-full py-4 rounded-full border border-rt-gold text-rt-gold font-jakarta text-sm hover:bg-rt-gold hover:text-rt-obsidian transition-colors duration-300">
                                    Вземи Книга 2
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BUNDLE CARD (The Obvious Choice) */}
                <div className="book-card w-full max-w-5xl bg-rt-void rounded-[3rem] p-12 text-center relative overflow-hidden border border-rt-gold shadow-[0_20px_60px_rgba(201,169,97,0.1)]">

                    <h3 className="font-jakarta font-bold text-rt-gold uppercase tracking-[0.2em] mb-4 text-sm">
                        Пълната Система
                    </h3>
                    {/* Bundle Image Stack Placeholder */}
                    <div className="flex justify-center items-center mt-6 mb-12 relative h-48 w-full max-w-sm mx-auto">
                        <div className="absolute w-32 aspect-[3/4] rounded-lg overflow-hidden border border-rt-silver/20 transform -rotate-12 -translate-x-12 shadow-2xl opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500">
                            <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Книга 1" />
                        </div>
                        <div className="absolute w-36 aspect-[3/4] rounded-lg overflow-hidden border border-rt-gold/40 transform rotate-6 translate-x-8 shadow-[0_20px_40px_rgba(201,169,97,0.2)] z-10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500">
                            <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Книга 2" />
                        </div>
                    </div>
                    <p className="font-outfit text-rt-cream/80 text-xl mb-8">
                        Двете книги. Една механика. <br />
                        <span className="font-mono opacity-80 mt-2 block">369 страници.</span>
                    </p>

                    <div className="flex items-center justify-center gap-6 mb-8">
                        <span className="font-mono text-rt-ash text-2xl line-through decoration-rt-ash/50">€55</span>
                        <span className="bundle-price font-mono text-rt-gold text-6xl font-bold">€39</span>
                    </div>

                    <p className="font-jakarta text-rt-gold/80 text-sm mb-10">
                        Спестяваш €16 (29%)
                    </p>

                    <button className="w-full md:w-auto px-16 py-5 rounded-full bg-rt-gold text-rt-obsidian font-jakarta font-bold text-lg btn-shine-sweep hover:scale-[1.02] transition-transform">
                        ВЗЕМИ ПЪЛНАТА СИСТЕМА — €39
                    </button>

                    <p className="font-outfit text-rt-ash text-xs mt-6 opacity-70">
                        Физически книги. Доставка в България. Speedy / Econt.
                    </p>

                </div>

            </div>
        </section>
    );
};

export default BooksShowcase;
