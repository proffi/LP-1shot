import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Logo Mark: Abstract geometric symbol (overlapping triangles/golden ratio curve)
const LogoMark = () => {
    const svgRef = useRef(null);

    const handleMouseEnter = () => {
        // Rotates 1.618 degrees and pulses on hover
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
        >
            <svg
                ref={svgRef}
                width="34" height="34"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-rt-gold"
            >
                <title>Моят свят се грижи за мен.</title>
                {/* Sacred Geometry / overlapping triangles */}
                <polygon points="50,15 85,75 15,75" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8" />
                <polygon points="50,85 15,25 85,25" stroke="var(--color-rt-silver)" strokeWidth="1.5" fill="none" opacity="0.6" />
                {/* Subtle golden spiral hint */}
                <path d="M 50 50 Q 60 40 70 50 T 50 80 Q 20 50 50 20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
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
                className="pointer-events-auto flex items-center justify-between px-8 py-3 w-full max-w-5xl rounded-[3rem] border border-transparent transition-all"
            >
                <LogoMark />

                <div className="hidden md:flex items-center fib-gap-5">
                    {['Системата', 'Книгите', 'Как Работи', 'Цени'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-rt-cream font-jakarta text-sm font-bold tracking-tight gold-sweep hover:text-rt-gold transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <button className="hidden md:flex items-center justify-center bg-rt-gold text-rt-obsidian px-6 py-2.5 rounded-full font-jakarta text-sm font-bold btn-shine-sweep transition-transform hover:scale-[1.03]">
                    Вземи Книгите
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
