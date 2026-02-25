import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = () => {
    const containerRef = useRef(null);
    const spiralRef = useRef(null);
    const textRef = useRef(null);
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        // Basic session cookie check so we only show once per session
        if (sessionStorage.getItem('v2_preloaded')) {
            setComplete(true);
            return;
        }

        // Disable scrolling during preloader
        document.body.style.overflow = 'hidden';

        const tl = gsap.timeline({
            onComplete: () => {
                setComplete(true);
                sessionStorage.setItem('v2_preloaded', 'true');
                document.body.style.overflow = '';
            }
        });

        // Check if mobile (basic check for viewport width)
        const isMobile = window.innerWidth < 768;

        if (isMobile) {
            // Simplifed mobile animation: just 369 fading in and out
            tl.to(textRef.current, { autoAlpha: 1, duration: 0.6, ease: "power2.inOut" })
                .to(textRef.current, { autoAlpha: 0, duration: 0.6, ease: "power2.inOut", delay: 0.3 })
                .to(containerRef.current, { autoAlpha: 0, duration: 0.4 });
        } else {
            // Desktop: draw the spiral, flash, fade
            // Assuming stroke-dasharray works for the path
            if (spiralRef.current) {
                const length = spiralRef.current.getTotalLength();
                gsap.set(spiralRef.current, { strokeDasharray: length, strokeDashoffset: length });

                tl.to(spiralRef.current, {
                    strokeDashoffset: 0,
                    duration: 1.2,
                    ease: "power2.inOut"
                })
                    .to(textRef.current, { autoAlpha: 1, duration: 0.4 }, "-=0.8")
                    // Briefly flash the container background or spiral SVG
                    .to(spiralRef.current, { strokeWidth: 2, scale: 1.05, duration: 0.1, transformOrigin: "center center", yoyo: true, repeat: 1 })
                    .to(containerRef.current, { autoAlpha: 0, duration: 0.4, ease: "power2.inOut", delay: 0.1 });
            }
        }

        return () => tl.kill();
    }, []);

    if (complete) return null;

    return (
        <div ref={containerRef} className="fixed inset-0 z-[10000] bg-rt-void flex flex-col items-center justify-center">
            <div className="relative w-32 h-32 flex items-center justify-center">
                {/* Fibonacci Spiral SVG */}
                <svg viewBox="0 0 100 100" className="w-full h-full md:block hidden" style={{ opacity: 0.8 }}>
                    <path
                        ref={spiralRef}
                        d="M 50 50 Q 55 45 60 50 T 50 70 Q 20 60 30 30 T 80 20 Q 110 60 80 100"
                        fill="none"
                        stroke="var(--gold)"
                        strokeWidth="1"
                    />
                </svg>
            </div>
            <div
                ref={textRef}
                className="mt-4 font-mono text-rt-gold text-lg tracking-widest opacity-0"
            >
                369
            </div>
        </div>
    );
};

export default Preloader;
