import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProblemAgitation = () => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(contentRef.current,
                { autoAlpha: 0, y: 55 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1.618,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%"
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full py-[144px] px-8 md:px-16 border-y border-rt-gold-dim/30 relative overflow-hidden"
            style={{ backgroundColor: 'transparent' }}
        >


            <div
                ref={contentRef}
                className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10"
            >
                <h2 className="font-jakarta font-bold text-rt-cream text-3xl md:text-[2.5rem] leading-tight mb-[34px]">
                    Защо всичко до сега не работи?
                </h2>

                <p className="font-outfit text-rt-ash text-lg md:text-[1.125rem] leading-relaxed mb-6">
                    Пробвал си визуализации. Писал си утвърждения.
                    Опитвал си се да мислиш „позитивно".
                </p>

                <p className="font-outfit text-rt-ash text-lg md:text-[1.125rem] leading-relaxed mb-6">
                    Истината? <strong className="text-rt-strikethrough font-bold font-jakarta">„Мисленето“ не променя реалността.</strong>
                </p>

                <p className="font-outfit text-rt-ash text-lg md:text-[1.125rem] leading-relaxed">
                    Реалността е огледало. Тя отразява <em className="text-rt-cream">отношението</em> ти към нея,
                    а не просто желанията ти. Без точна <strong className="text-rt-gold">механика</strong> за
                    управление на Намерението, ти просто хабиш енергия.
                </p>
            </div>
        </section>
    );
};

export default ProblemAgitation;
