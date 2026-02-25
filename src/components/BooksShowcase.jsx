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
            className="relative w-full bg-[radial-gradient(ellipse_at_top,_#211812_0%,_var(--color-rt-void)_100%)] py-24 px-8 md:px-16 overflow-hidden"
        >
            {/* Continuous Sacred Geometry Grid */}
            <div className="absolute inset-0 z-0 bg-grid-silver pointer-events-none opacity-40 mix-blend-overlay" />
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">

                <div className="w-full flex flex-col md:flex-row gap-8">

                    {/* CARD 1: Book 1 (38.2% width on desktop) */}
                    <div className="book-card flex-1 md:flex-[0.382] bg-rt-surface rounded-[2rem] p-8 md:p-10 
            border border-rt-silver-dim/20 hover:border-rt-silver-dim/40 transition-all duration-500
            hover:-translate-y-2 relative overflow-hidden group flex flex-col items-center text-center">

                        <h4 className="font-mono text-rt-silver uppercase text-xs tracking-widest mb-2">Книга 1</h4>
                        <h2 className="font-cormorant italic font-bold text-rt-silver text-3xl md:text-4xl mb-2">ОГЛЕДАЛОТО</h2>
                        <p className="font-mono text-rt-ash text-xs tracking-widest mb-8">РАЗБИРАНЕ НА МОДЕЛА</p>

                        {/* Book Image Placeholder */}
                        <div className="w-full max-w-[180px] aspect-[3/4] mb-8 rounded-lg overflow-hidden border border-rt-silver/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] transform transition-transform group-hover:scale-105 group-hover:-rotate-2 bg-[#121620]">
                            <img src="/media__1772006052611.jpg" alt="ОГЛЕДАЛОТО Книга" className="w-full h-full object-cover opacity-90 transition-all hover:opacity-100" />
                        </div>

                        <ul className="flex flex-col gap-3 text-rt-silver text-sm text-left w-full mb-10">
                            <li className="flex items-start gap-3"><span className="text-rt-silver/50 font-mono mt-0.5">01</span> Каква е физиката на вероятностите</li>
                            <li className="flex items-start gap-3"><span className="text-rt-silver/50 font-mono mt-0.5">02</span> Законът на Излишния Потенциал</li>
                            <li className="flex items-start gap-3"><span className="text-rt-silver/50 font-mono mt-0.5">03</span> Размаха на махалата (Егрегори)</li>
                        </ul>

                        <div className="mt-auto w-full">
                            <p className="font-mono text-rt-silver text-2xl font-bold mb-4">€21</p>
                            <button className="w-full py-4 rounded-full border border-rt-silver-dim/30 text-rt-silver font-jakarta text-sm font-bold hover:bg-rt-silver hover:text-rt-void transition-colors duration-300">
                                ВЗЕМИ КНИГА 1
                            </button>
                        </div>
                    </div>

                    {/* BUNDLE CARD (The Obvious Choice - Center) */}
                    <div className="book-card flex-1 md:flex-[0.45] bg-gradient-to-b from-[#1c1c1c] to-[#0A0A0A] rounded-[2rem] p-10 md:p-12 
            border border-rt-gold/40 hover:border-rt-gold transition-all duration-500
            hover:-translate-y-2 relative overflow-hidden group shadow-[0_0_55px_rgba(201,169,97,0.15)] flex flex-col items-center text-center transform md:scale-105 z-10 order-first md:order-none">

                        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-rt-gold text-rt-void font-jakarta font-bold text-[0.65rem] uppercase tracking-widest px-6 py-1.5 rounded-b-lg w-max">
                            Пълната Система — Най-Добър Избор
                        </div>

                        <h4 className="font-mono text-rt-gold uppercase text-xs tracking-widest mb-2 mt-4">Пълната Система</h4>
                        <h2 className="font-cormorant italic font-bold text-rt-gold text-4xl md:text-5xl mb-2">РЕАЛНОСТТА</h2>
                        <p className="font-mono text-rt-gold text-xs tracking-widest mb-8 opacity-80">ОГЛЕДАЛОТО + СЪЗДАТЕЛЯТ</p>

                        {/* Bundle Image Stack Placeholder */}
                        <div className="flex justify-center items-center mb-10 relative h-48 w-full max-w-[240px]">
                            <div className="absolute w-[110px] aspect-[3/4] rounded-lg overflow-hidden border border-rt-silver/20 transform -rotate-12 -translate-x-12 shadow-2xl opacity-90 transition-all duration-500 bg-[#121620] group-hover:-rotate-[16deg] group-hover:-translate-x-14">
                                <img src="/media__1772006052611.jpg" className="w-full h-full object-cover" alt="Книга 1" />
                            </div>
                            <div className="absolute w-[120px] aspect-[3/4] rounded-lg overflow-hidden border border-rt-gold/40 transform rotate-6 translate-x-8 shadow-[0_20px_40px_rgba(201,169,97,0.2)] z-10 transition-all duration-500 bg-[#121620] group-hover:rotate-12 group-hover:translate-x-10">
                                <img src="/media__1772006057356.jpg" className="w-full h-full object-cover" alt="Книга 2" />
                            </div>
                        </div>

                        <ul className="flex flex-col gap-3 text-rt-cream text-sm text-left w-full mb-10 font-bold">
                            <li className="flex items-start gap-4"><span className="text-rt-gold text-lg leading-none">✓</span> Книга 1: Огледалото (141 стр.)</li>
                            <li className="flex items-start gap-4"><span className="text-rt-gold text-lg leading-none">✓</span> Книга 2: Създателят (228 стр.)</li>
                            <li className="flex items-start gap-4"><span className="text-rt-gold text-lg leading-none">✓</span> Пълният 89-дневен Протокол</li>
                        </ul>

                        <div className="mt-auto w-full flex flex-col items-center">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="font-mono text-rt-ash text-xl line-through opacity-70">€55</span>
                                <span className="bundle-price font-mono text-rt-gold text-4xl font-bold">€39</span>
                            </div>
                            <span className="font-mono text-rt-success text-[0.65rem] uppercase tracking-wider mb-6">Спестяваш €16 (29%)</span>

                            <button className="w-full py-4 rounded-full bg-rt-gold text-rt-void font-jakarta text-sm font-bold shadow-[0_0_21px_rgba(201,169,97,0.3)] hover:shadow-[0_0_34px_rgba(201,169,97,0.5)] hover:scale-[1.03] transition-all duration-300">
                                ВЗЕМИ СИСТЕМАТА
                            </button>
                        </div>
                    </div>

                    {/* CARD 3: Book 2 (38.2% width on desktop) */}
                    <div className="book-card flex-1 md:flex-[0.382] bg-rt-surface rounded-[2rem] p-8 md:p-10 
            border border-rt-gold-dim/30 hover:border-rt-gold-dim/60 transition-all duration-500
            hover:-translate-y-2 relative overflow-hidden group flex flex-col items-center text-center">

                        <h4 className="font-mono text-rt-gold uppercase text-xs tracking-widest mb-2">Книга 2</h4>
                        <h2 className="font-cormorant italic font-bold text-rt-gold text-3xl md:text-4xl mb-2">СЪЗДАТЕЛЯТ</h2>
                        <p className="font-mono text-rt-gold opacity-80 text-xs tracking-widest mb-8">89-ДНЕВЕН ПРОТОКОЛ</p>

                        {/* Book Image Placeholder */}
                        <div className="w-full max-w-[180px] aspect-[3/4] mb-8 rounded-lg overflow-hidden border border-rt-gold/20 shadow-[0_10px_30px_rgba(201,169,97,0.1)] transform transition-transform group-hover:scale-105 group-hover:rotate-2 bg-[#121620]">
                            <img src="/media__1772006057356.jpg" alt="СЪЗДАТЕЛЯТ Книга" className="w-full h-full object-cover opacity-90 transition-all hover:opacity-100" />
                        </div>

                        <ul className="flex flex-col gap-3 text-rt-cream text-sm text-left w-full mb-10">
                            <li className="flex items-start gap-3"><span className="text-rt-gold/50 font-mono mt-0.5">01</span> Фаза 1: Изчистване</li>
                            <li className="flex items-start gap-3"><span className="text-rt-gold/50 font-mono mt-0.5">02</span> Фаза 2: Слайд и Амалгама</li>
                            <li className="flex items-start gap-3"><span className="text-rt-gold/50 font-mono mt-0.5">03</span> Фаза 3: Авторитет</li>
                        </ul>

                        <div className="mt-auto w-full">
                            <p className="font-mono text-rt-gold text-2xl font-bold mb-4">€34</p>
                            <button className="w-full py-4 rounded-full border border-rt-gold/30 text-rt-gold font-jakarta text-sm font-bold hover:bg-rt-gold/10 hover:border-rt-gold transition-colors duration-300">
                                ВЗЕМИ КНИГА 2
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Trust & Delivery Strip underneath the cards */}
            <div className="w-full flex flex-col items-center gap-2 mt-4 text-rt-ash text-sm">
                <p>Физически книги. Доставка в България 3-5 дни.</p>
                <p className="text-rt-cream"><span className="text-rt-success mr-1">✓</span> Наличен Наложен Платеж (Speedy/Econt)</p>
            </div>
        </section>
    );
};

export default BooksShowcase;
