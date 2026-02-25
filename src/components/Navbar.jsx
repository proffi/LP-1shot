import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LogoMark = () => {
    const svgRef = useRef(null);

    const handleMouseEnter = () => {
        gsap.to(svgRef.current, {
            rotation: "+=1.618",
            scale: 1.05,
            duration: 1.618,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = () => {
        gsap.to(svgRef.current, {
            scale: 1,
            duration: 1.618,
            ease: "power2.inOut"
        });
    };

    return (
        <div
            className="cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label="Моят свят се грижи за мен."
        >
            <svg
                ref={svgRef}
                width="28" height="28"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-rt-gold"
            >
                <polygon points="50,15 85,75 15,75" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8" />
                <polygon points="50,85 15,25 85,25" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8" />
                <path d="M 50 50 Q 60 40 70 50 T 50 80 Q 20 50 50 20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
            </svg>
        </div>
    );
};

const Navbar = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: "top -89px", // trigger after 89px scroll (fibonacci)
                end: 99999,
                onToggle: (self) => {
                    if (self.isActive) {
                        // Scrolled state
                        gsap.to(containerRef.current, {
                            backgroundColor: "rgba(10, 14, 26, 0.85)", // rt-void with opacity
                            backdropFilter: "blur(20px)",
                            borderColor: "rgba(201, 169, 97, 0.15)", // faint gold
                            duration: 0.55, // fibonacci-adjacent duration
                            ease: "power2.out"
                        });
                    } else {
                        // Top state
                        gsap.to(containerRef.current, {
                            backgroundColor: "rgba(10, 14, 26, 0)",
                            backdropFilter: "blur(0px)",
                            borderColor: "rgba(201, 169, 97, 0)",
                            duration: 0.55,
                            ease: "power2.out"
                        });
                    }
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
            <div
                ref={containerRef}
                className="pointer-events-auto flex items-center justify-between px-8 py-3 w-full max-w-5xl rounded-[3rem] border border-transparent transition-all h-[55px]"
            >
                <LogoMark />

                <div className="hidden md:flex items-center fib-gap-5">
                    {['Системата', 'Книгите', 'Как Работи', 'Цени', 'Въпроси'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-rt-cream font-outfit text-[0.85rem] gold-sweep hover:text-rt-gold transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden md:flex items-center justify-center bg-rt-gold text-rt-obsidian px-[21px] py-[8px] rounded-[1.5rem] font-jakarta text-[0.85rem] font-bold shadow-[0_0_15px_rgba(201,169,97,0)] hover:shadow-[0_0_20px_rgba(201,169,97,0.3)] transition-all hover:scale-[1.03]">
                        Вземи Книгите
                    </button>
                    {/* Mobile Hamburger Dropdown placeholder */}
                    <button className="md:hidden flex flex-col justify-center gap-[4px] w-6 h-6">
                        <span className="w-full h-[2px] bg-rt-gold"></span>
                        <span className="w-full h-[2px] bg-rt-gold"></span>
                        <span className="w-full h-[2px] bg-rt-gold"></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
