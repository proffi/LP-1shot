import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const navRef = useRef(null);
    const containerRef = useRef(null);
    const textRefs = useRef([]);
    // We use state to toggle styles, but let GSAP handle the heavy lifting for performance

    useEffect(() => {
        const ctx = gsap.context(() => {
            // We want to detect scroll position to toggle the navbar style
            ScrollTrigger.create({
                start: "top -50px", // Trigger when scrolled 50px down
                end: 99999, // keep it active
                onToggle: (self) => {
                    if (self.isActive) {
                        // Scrolled state
                        gsap.to(containerRef.current, {
                            backgroundColor: "rgba(255, 255, 255, 0.6)",
                            backdropFilter: "blur(12px)",
                            borderColor: "rgba(46, 64, 54, 0.1)", // Moss with low opacity border
                            duration: 0.4,
                            ease: "power2.out"
                        });
                        gsap.to(textRefs.current, {
                            color: "#2E4036", // Moss text
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    } else {
                        // Top state
                        gsap.to(containerRef.current, {
                            backgroundColor: "rgba(255, 255, 255, 0)",
                            backdropFilter: "blur(0px)",
                            borderColor: "rgba(255, 255, 255, 0)", // Transparent border
                            duration: 0.4,
                            ease: "power2.out"
                        });
                        gsap.to(textRefs.current, {
                            color: "#FFFFFF", // White text
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    }
                }
            });
        }, navRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
    };

    return (
        <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
            <div
                ref={containerRef}
                className="pointer-events-auto flex items-center justify-between px-8 py-4 w-full max-w-5xl rounded-[3rem] border border-transparent transition-all"
            >
                <div
                    ref={addToRefs}
                    className="text-white font-outfit font-semibold text-lg tracking-tight cursor-pointer"
                >
                    Nura Health
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {['Intelligence', 'Philosophy', 'Protocol', 'Membership'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            ref={addToRefs}
                            className="text-white font-jakarta text-sm font-medium hover:opacity-70 transition-opacity"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <button
                    className="md:hidden flex items-center justify-center"
                    aria-label="Toggle Menu"
                >
                    <Menu ref={addToRefs} className="w-6 h-6 text-white" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
